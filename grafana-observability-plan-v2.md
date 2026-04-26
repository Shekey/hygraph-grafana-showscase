# Grafana Observability Platform — Project Plan v2

> **Base app:** [hygraph/hygraph-showcase](https://github.com/hygraph/hygraph-showcase) (fork this — don't build from scratch)  
> **Stack:** Next.js · Hygraph CMS · Prometheus · Grafana · Loki · GCP Cloud Run  
> **Goal:** Add production-grade observability to an existing real-world Next.js + Hygraph app  
> **Your repo name:** `hygraph-showcase-observability` (fork + rename)

---

## What you're building

You fork the Hygraph showcase app (already has App Router, GraphQL codegen, live preview, i18n, content federation) and layer **Prometheus metrics + Grafana dashboards + Loki logs + GCP Cloud Run deploy** on top of it. The observability targets things that matter for a CMS-driven app — not generic CPU/memory.

---

## Phase 1 — Fork & Run Locally (Day 1)

### 1.1 Fork the repo
- [ ] Fork `hygraph/hygraph-showcase` → your GitHub as `hygraph-showcase-observability`
- [ ] Clone locally
- [ ] `cp .env.local.example .env.local`
- [ ] Fill in Hygraph credentials (you need a free Hygraph account + clone of their showcase project)
- [ ] `npm install && npm run dev` — confirm it runs on `localhost:3000`

### 1.2 Get Hygraph content access
- [ ] Sign up at hygraph.com (free tier is enough)
- [ ] Clone the HyBike showcase template from Hygraph's template gallery
- [ ] Copy `NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT` into `.env.local`
- [ ] Confirm homepage loads with real content

### 1.3 Add Docker Compose for local observability stack
Create `docker-compose.yml` in the repo root:

```yaml
version: "3.8"

services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    volumes:
      - ./grafana/provisioning:/etc/grafana/provisioning
      - ./grafana/dashboards:/var/lib/grafana/dashboards
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_AUTH_ANONYMOUS_ENABLED=true

  loki:
    image: grafana/loki:latest
    ports:
      - "3100:3100"
    command: -config.file=/etc/loki/local-config.yaml
```

- [ ] Create `prometheus/prometheus.yml`:

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "hygraph-showcase"
    static_configs:
      - targets: ["host.docker.internal:3000"]
    metrics_path: /api/metrics
```

- [ ] `docker compose up -d` — confirm Grafana at `localhost:3001`, Prometheus at `localhost:9090`

---

## Phase 2 — Instrument the App (Day 1–2)

### 2.1 Install prom-client
```bash
npm install prom-client
```

### 2.2 Define metrics — `src/lib/metrics.ts`

```ts
import client from "prom-client";

// Only register once (Next.js hot reload guard)
const register = client.register;
if (!register.getSingleMetric("hygraph_fetch_duration_seconds")) {
  client.collectDefaultMetrics({ register });
}

// Hygraph GraphQL fetch duration
export const hygraphFetchDuration =
  register.getSingleMetric("hygraph_fetch_duration_seconds") ??
  new client.Histogram({
    name: "hygraph_fetch_duration_seconds",
    help: "Hygraph GraphQL fetch duration",
    labelNames: ["query_name", "locale", "status"],
    buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5],
    registers: [register],
  });

// HTTP request duration
export const httpRequestDuration =
  register.getSingleMetric("http_request_duration_seconds") ??
  new client.Histogram({
    name: "http_request_duration_seconds",
    help: "HTTP request duration",
    labelNames: ["method", "route", "status_code"],
    buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5],
    registers: [register],
  });

// ISR revalidation counter
export const isrRevalidationCounter =
  register.getSingleMetric("isr_revalidation_total") ??
  new client.Counter({
    name: "isr_revalidation_total",
    help: "ISR revalidation events",
    labelNames: ["route", "status"],
    registers: [register],
  });

// Cache hit/miss
export const cacheCounter =
  register.getSingleMetric("nextjs_cache_total") ??
  new client.Counter({
    name: "nextjs_cache_total",
    help: "Next.js cache HIT/MISS",
    labelNames: ["route", "result"],
    registers: [register],
  });

// Live preview sessions active
export const livePreviewGauge =
  register.getSingleMetric("hygraph_live_preview_sessions") ??
  new client.Gauge({
    name: "hygraph_live_preview_sessions",
    help: "Active Hygraph live preview sessions",
    registers: [register],
  });

export { register };
```

### 2.3 Expose `/api/metrics` endpoint
Create `app/api/metrics/route.ts`:

```ts
import { register } from "@/lib/metrics";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const metrics = await register.metrics();
  return new NextResponse(metrics, {
    headers: { "Content-Type": register.contentType },
  });
}
```

- [ ] Open `localhost:3000/api/metrics` — confirm you see Prometheus output

### 2.4 Instrument Hygraph fetches — `src/lib/hygraph/client.ts`
Wrap the existing fetch utility to record duration:

```ts
import { hygraphFetchDuration } from "@/lib/metrics";

export async function hygraphRequest<T>(
  query: DocumentNode,
  variables?: Record<string, unknown>
): Promise<T> {
  const queryName = (query as any)?.definitions?.[0]?.name?.value ?? "unknown";
  const end = hygraphFetchDuration.startTimer({
    query_name: queryName,
    locale: variables?.locale ?? "en",
  });

  try {
    const result = await originalHygraphRequest<T>(query, variables);
    end({ status: "success" });
    return result;
  } catch (err) {
    end({ status: "error" });
    throw err;
  }
}
```

### 2.5 Instrument HTTP requests — `middleware.ts`
Add to existing middleware (it's already there for locale routing):

```ts
import { httpRequestDuration } from "@/lib/metrics";

// At the top of the middleware function:
const end = httpRequestDuration.startTimer({
  method: request.method,
  route: request.nextUrl.pathname,
});

// At the end (before return):
end({ status_code: response.status });
```

### 2.6 Track live preview sessions
In `src/components/providers/LivePreview.tsx`, add on mount/unmount:

```ts
import { livePreviewGauge } from "@/lib/metrics";

useEffect(() => {
  livePreviewGauge.inc();
  return () => livePreviewGauge.dec();
}, []);
```

---

## Phase 3 — Dashboards as Code (Day 2–3)

### 3.1 Auto-provision Grafana
Create `grafana/provisioning/datasources/datasources.yml`:

```yaml
apiVersion: 1
datasources:
  - name: Prometheus
    type: prometheus
    url: http://prometheus:9090
    isDefault: true
  - name: Loki
    type: loki
    url: http://loki:3100
```

Create `grafana/provisioning/dashboards/dashboards.yml`:

```yaml
apiVersion: 1
providers:
  - name: default
    folder: ""
    type: file
    options:
      path: /var/lib/grafana/dashboards
```

### 3.2 Build 3 dashboards in Grafana UI, then export as JSON

**Dashboard 1 — App Health Overview**
- Request rate (req/s) — graph
- p95 response time — stat panel
- Error rate % — stat panel (red if > 1%)
- Requests per route — table

**Dashboard 2 — CMS Performance**
- Hygraph fetch latency p50/p95/p99 — graph
- Slowest queries today — table (sorted by p95)
- Fetch error rate by query — graph
- Live preview sessions active — gauge

**Dashboard 3 — ISR & Cache Health**
- Cache hit rate % — big number + trend
- ISR revalidation events over time — graph
- Cache hit vs miss breakdown — pie chart
- p95 latency by route — heatmap

- [ ] Build each dashboard
- [ ] Dashboard → Share → Export JSON → save to `grafana/dashboards/`
- [ ] Restart `docker compose` — confirm dashboards auto-load

---

## Phase 4 — Alerting (Day 3)

### 4.1 Alert rules

| Alert | Condition | Severity |
|---|---|---|
| High p95 latency | `http_request_duration_seconds{quantile="0.95"} > 2` for 5min | warning |
| Error rate spike | `rate(http_requests_total{status_code=~"5.."}[5m]) > 0.01` | critical |
| Hygraph fetch slow | `hygraph_fetch_duration_seconds{quantile="0.95"} > 1` for 5min | warning |
| Cache hit rate low | `nextjs_cache_total{result="hit"} / nextjs_cache_total < 0.7` for 10min | warning |
| No metrics received | `absent(http_request_duration_seconds)` for 3min | critical |

### 4.2 Set up contact point
- [ ] Grafana → Alerting → Contact points
- [ ] Add a Webhook contact point (use [webhook.site](https://webhook.site) for testing — free, no account)
- [ ] Create notification policy: all alerts → webhook

### 4.3 Export alert rules
- [ ] Grafana → Alerting → Alert rules → Export → save to `grafana/alerts/alert-rules.yaml`
- [ ] Commit to repo

---

## Phase 5 — Structured Logging with Loki (Day 3–4)

### 5.1 Install logger
```bash
npm install winston winston-loki
```

### 5.2 Create `src/lib/logger.ts`

```ts
import winston from "winston";
import LokiTransport from "winston-loki";

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new LokiTransport({
      host: process.env.LOKI_URL ?? "http://localhost:3100",
      labels: { app: "hygraph-showcase", env: process.env.NODE_ENV ?? "dev" },
      json: true,
      format: winston.format.json(),
      replaceTimestamp: true,
    }),
  ],
});
```

### 5.3 Add log calls to key spots
```ts
// In hygraph client — log each fetch
logger.info("hygraph_fetch", {
  query: queryName,
  locale,
  duration_ms: Math.round(durationMs),
  status: "success",
});

// In middleware — log slow requests
if (durationMs > 1000) {
  logger.warn("slow_request", {
    route: request.nextUrl.pathname,
    duration_ms: Math.round(durationMs),
    method: request.method,
  });
}
```

### 5.4 Correlate logs with metrics in Grafana
- [ ] In Hygraph fetch latency panel → add "Explore logs" link with Loki filter `{app="hygraph-showcase"} |= "hygraph_fetch"`
- [ ] When an alert fires → Grafana shows linked logs for same time window

---

## Phase 6 — GCP Cloud Run Deploy (Day 4–5)

### 6.1 Dockerfile
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Add to `next.config.ts`:
```ts
output: "standalone"
```

### 6.2 GCP setup (free tier)
- [ ] Enable APIs: Cloud Run, Artifact Registry, Cloud Build
- [ ] Create Artifact Registry repo: `hygraph-showcase`
- [ ] Build & push:
```bash
gcloud builds submit --tag europe-west1-docker.pkg.dev/YOUR_PROJECT/hygraph-showcase/app
```
- [ ] Deploy to Cloud Run:
```bash
gcloud run deploy hygraph-showcase \
  --image europe-west1-docker.pkg.dev/YOUR_PROJECT/hygraph-showcase/app \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 3000 \
  --set-env-vars NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT=...
```

### 6.3 Grafana Cloud for production metrics
- [ ] Sign up at grafana.com free tier (10k series, 14-day retention)
- [ ] Get Prometheus remote_write URL + API key
- [ ] Add to Cloud Run env vars:
```
PROMETHEUS_REMOTE_WRITE_URL=https://prometheus-prod.grafana.net/api/prom/push
GRAFANA_CLOUD_API_KEY=...
LOKI_URL=https://logs-prod.grafana.net
```
- [ ] Configure remote_write in Prometheus (or use Grafana Agent on Cloud Run as sidecar)
- [ ] Import your dashboard JSONs into Grafana Cloud
- [ ] Import alert rules

---

## Phase 7 — AI Alert Assistant (Bonus, Day 5–6)

> The differentiator. When an alert fires → you get a plain-English explanation + suggested fix.

### 7.1 Webhook handler
```ts
// app/api/alert-assistant/route.ts
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

export async function POST(req: Request) {
  const alert = await req.json(); // Grafana webhook payload

  // Query Prometheus for context
  const metricsQuery = await fetch(
    `http://prometheus:9090/api/v1/query?query=rate(http_request_duration_seconds_count[5m])`
  );
  const metrics = await metricsQuery.json();

  const response = await anthropic.messages.create({
    model: "claude-opus-4-20250514",
    max_tokens: 500,
    messages: [
      {
        role: "user",
        content: `You are an on-call assistant for a Next.js + Hygraph CMS app.
        
Alert fired: ${alert.title}
Alert state: ${alert.state}
Labels: ${JSON.stringify(alert.labels)}
Current metrics snapshot: ${JSON.stringify(metrics.data?.result?.slice(0, 5))}

Explain in 3-4 sentences what is likely happening and suggest 2-3 concrete remediation steps.`,
      },
    ],
  });

  return Response.json({
    analysis: response.content[0].type === "text" ? response.content[0].text : "",
    alert: alert.title,
    timestamp: new Date().toISOString(),
  });
}
```

### 7.2 Simple alert dashboard page
- [ ] `app/[locale]/ops/page.tsx` — protected page showing:
  - Active Grafana alerts (polled from Grafana API every 30s)
  - "Analyse" button per alert → calls `/api/alert-assistant`
  - AI response shown below each alert

---

## Phase 8 — Publish (Day 6–7)

### 8.1 README
- [ ] Architecture diagram (Excalidraw → export PNG → commit to `/docs/`)
- [ ] Screenshot of each dashboard
- [ ] Local quickstart (`docker compose up`)
- [ ] Explanation of what metrics are tracked and why they matter for CMS-driven apps

### 8.2 Portfolio
- [ ] Add to shekeyweb.com projects section
- [ ] Loom walkthrough (2–3 min): run the app → trigger a slow Hygraph query → show alert firing → AI assistant explains it
- [ ] LinkedIn post (already drafted from previous session)

---

## Timeline Summary

| Day | Focus |
|---|---|
| 1 | Fork + run locally + Docker Compose stack working |
| 2 | Metrics instrumented + `/api/metrics` live + basic panels in Grafana |
| 3 | 3 dashboards exported as JSON + SLO alerts configured |
| 4 | Loki logs + log correlation in Grafana |
| 5 | GCP Cloud Run deploy + Grafana Cloud remote_write |
| 6 | AI alert assistant (bonus) |
| 7 | README, Loom, LinkedIn post |

---

## Final Repo Structure

```
hygraph-showcase-observability/
├── app/
│   ├── api/
│   │   ├── metrics/route.ts           # Prometheus endpoint (NEW)
│   │   └── alert-assistant/route.ts   # AI webhook handler (NEW)
│   │   └── ... (existing routes)
│   └── [locale]/
│       ├── ops/page.tsx               # Alert UI (NEW)
│       └── ... (existing pages)
├── src/
│   ├── lib/
│   │   ├── metrics.ts                 # Prometheus metric definitions (NEW)
│   │   ├── logger.ts                  # Winston + Loki (NEW)
│   │   └── hygraph/client.ts          # Instrumented (MODIFIED)
│   └── ... (existing src)
├── grafana/
│   ├── provisioning/
│   │   ├── datasources/               # Auto-provision Prometheus + Loki (NEW)
│   │   └── dashboards/                # Auto-load JSONs (NEW)
│   ├── dashboards/
│   │   ├── app-health.json            # Dashboard as code (NEW)
│   │   ├── cms-performance.json       # Dashboard as code (NEW)
│   │   └── isr-cache-health.json      # Dashboard as code (NEW)
│   └── alerts/
│       └── alert-rules.yaml           # Exported alert rules (NEW)
├── prometheus/
│   └── prometheus.yml                 # Scrape config (NEW)
├── docs/
│   └── architecture.png               # Diagram for README (NEW)
├── docker-compose.yml                 # Local obs stack (NEW)
├── Dockerfile                         # Production build (NEW)
├── middleware.ts                      # Instrumented (MODIFIED)
└── ... (existing config files)
```

---

## Why this is a strong portfolio piece

- **Real app** — not a toy, actual Hygraph CMS + content federation + i18n + live preview
- **Relevant metrics** — CMS fetch latency, ISR health, cache rates — things frontend engineers actually care about
- **Production patterns** — dashboards as code, SLO-based alerts, structured logs, Cloud Run deploy
- **AI layer** — alert assistant shows you can build intelligent tooling on top of observability data
- **You know Hygraph deeply** — this plays directly to your existing expertise

---

*Plan v2 — April 2026 | No multi-brand complexity, single real app*  
*Portfolio: [shekeyweb.com](https://shekeyweb.com) · [github.com/Shekey](https://github.com/Shekey)*

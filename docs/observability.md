# Observability with OpenTelemetry

## Overview

This project uses **OpenTelemetry (OTel)** for observability. Unlike the previous `prom-client` approach, OTel is:
- ✅ Works in Server Components and Edge Runtime
- ✅ Automatically instruments HTTP, fetch, database calls
- ✅ Supports both local development and GCP production
- ✅ Industry standard with multi-backend support

## Local Development

### Setup

```bash
# Install dependencies (already done)
npm install

# Start the observability stack
docker-compose up -d

# Start the Next.js app
npm run dev
```

You should see in the logs:
```
[OpenTelemetry] Configured for local OTLP (endpoint: http://localhost:4328)
[OpenTelemetry] SDK started successfully
```

### Accessing Metrics and Traces

**Prometheus** (Metrics):
- Open: http://localhost:9090
- Query: `http_server_request_duration_seconds` to see request latencies
- Data flow: App → OTel SDK → OTLP Collector → Prometheus

**Grafana** (Dashboards):
- Open: http://localhost:3001
- Login: `admin` / `admin`
- Dashboards show request rates, latencies, and error rates
- Datasource: `Prometheus (local)`

**OTel Collector**:
- Receives traces and metrics at `http://localhost:4328`
- Exports metrics to Prometheus at port `8889`
- Logs all traces to stdout (visible via `docker-compose logs otel-collector`)

### Environment Variables (Local)

Create `.env.local` (or use defaults):

```env
# Optional - defaults shown
OTEL_SERVICE_NAME=hygike
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4328
NODE_ENV=development
```

## Production (GCP)

### Deployment

When deployed to **GCP Cloud Run**, the instrumentation automatically switches to GCP exporters:

```env
NODE_ENV=production
```

### Data Flow

```
Cloud Run
  ↓ (OTel SDK)
Cloud Monitoring (metrics) + Cloud Trace (traces)
  ↓
GCP Console Metrics Explorer
GCP Cloud Trace UI
Grafana (with Cloud Monitoring datasource)
```

### Accessing Metrics in Production

**GCP Cloud Monitoring Metrics Explorer**:
1. Go to: Google Cloud Console → Cloud Monitoring → Metrics Explorer
2. Resource type: `gke_container` or `cloud_run_revision`
3. Metric: `http_server_request_duration_seconds`
4. View by: http_route, http_request_method, http_response_status_code

**GCP Cloud Trace**:
1. Go to: Google Cloud Console → Cloud Trace → Trace List
2. See distributed traces of requests across your app
3. Drill down into spans to see duration and attributes

**Grafana**:
1. Uses `datasources-prod.yml` datasource (GCP Cloud Monitoring)
2. Connects to GMP Prometheus endpoint
3. Same dashboards work in production

### No Additional Configuration Needed

GCP exporters automatically use:
- **Application Default Credentials (ADC)** - Cloud Run provides this automatically
- **Project detection** - Inferred from Cloud Run metadata
- **Service name** - Defaults to `hygike` (from `instrumentation.ts`)

## OTel Metric Names

OpenTelemetry HTTP instrumentation emits standardized metric names. Key metrics:

| Metric | Description | Labels |
|---|---|---|
| `http_server_request_duration_seconds` | Request latency histogram | `http_route`, `http_request_method`, `http_response_status_code` |
| `http_server_request_duration_seconds_count` | Total request count | (same) |
| `http_server_request_duration_seconds_bucket` | Latency buckets for percentiles | (same) |

**Label mapping (OTel vs old prom-client)**:
- Old `method` → New `http_request_method`
- Old `route` → New `http_route`
- Old `status_code` → New `http_response_status_code`

## Grafana Dashboards

Located in `grafana/dashboards/`:

- **local-metrics.json** - Request rate, latency, error rate (uses OTel metric names)
- **app-metrics.json** - Detailed HTTP metrics by route/method (uses OTel metric names)
- **request-overview-dev.json** - Overview dashboard (works everywhere)
- **request-overview.json** - Production dashboard (uses GCP Cloud Logging)

Datasources:
- `datasources.yml` - Local Prometheus
- `datasources-prod.yml` - GCP Cloud Monitoring (used in production)

## Adding Custom Metrics

If you need custom metrics beyond auto-instrumentation:

```typescript
import { metrics } from '@opentelemetry/api';

const meter = metrics.getMeter('my-app');
const counter = meter.createCounter('my_metric', {
  description: 'My custom metric',
});

counter.add(1); // Increment the counter
```

Custom metrics will be exported automatically via OTLP (local) or Cloud Monitoring (production).

## Troubleshooting

### Metrics not appearing in Prometheus

1. Check Docker is running: `docker-compose ps`
2. Check OTLP Collector logs: `docker-compose logs otel-collector`
3. Verify endpoint in `instrumentation.ts`: default is `http://localhost:4328`
4. Ensure `.env.local` doesn't override with a wrong endpoint

### OTel SDK fails to start

Check logs in `npm run dev` output. Common issues:
- Missing GCP exporters in production (run `npm install` again)
- Invalid OTLP endpoint (syntax error in `.env.local`)
- Edge Runtime (OTel doesn't support Edge Runtime, but Middleware runs in Node.js by default)

### Grafana dashboards empty

1. Confirm Prometheus datasource is healthy: Grafana → Admin → Data Sources → Prometheus
2. Verify metrics are arriving: Prometheus UI → Graph → type `http_server_request` (autocomplete)
3. Check dashboard queries use correct metric names (OTel, not prom-client)

## References

- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)
- [OTel Semantic Conventions - HTTP](https://opentelemetry.io/docs/specs/semconv/http/http-spans/)
- [GCP Cloud Monitoring + OTel](https://cloud.google.com/trace/docs/setup/setup-nodejs)
- [Grafana + Prometheus](https://grafana.com/docs/grafana/latest/datasources/prometheus/)

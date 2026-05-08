# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start Next.js dev server (port 3000)
npm run build        # production build (standalone output)
npm run lint         # ESLint (next/core-web-vitals + next/typescript flat config)
npm run type-check   # tsc --noEmit
npm run codegen      # regenerate src/types/hygraph-generated.ts from GraphQL schema
```

`codegen` requires `.env.local` with `NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT` set, and uses `dotenv -e .env.local`.

There is no test suite.

### Local observability stack

The Next.js app runs separately from the docker-compose stack. Start the observability services first:

```bash
docker compose up -d   # starts otel-collector, prometheus, grafana
npm run dev            # then start Next.js
```

Grafana: http://localhost:3001 (admin/admin). Prometheus: http://localhost:9090.
Set `OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4328` in `.env.local` to send telemetry to the local collector.

## Architecture

### Content layer: Hygraph CMS + GraphQL codegen

All content comes from Hygraph (headless CMS). GraphQL queries live in `src/graphql/queries/*.gql`. Running `codegen` regenerates `src/types/hygraph-generated.ts` with full TypeScript types for every query/fragment. **Never hand-edit that file.**

The Hygraph client is in `src/lib/hygraph/client.ts`. It reads `NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT` and optionally `HYGRAPH_PREVIEW_TOKEN` for draft content in preview mode.

### Routing: App Router + i18n

Pages live under `app/[locale]/`. Supported locales are `en` and `de`. The locale segment is the first dynamic param on every route — keep it in mind when adding new pages or API routes that render locale-aware content.

### Section/component model

The CMS delivers pages as a list of typed sections. `src/types/section-types.ts` maps each Hygraph section typename to a React component. Adding a new CMS section type means:
1. Add the GQL fragment in `src/graphql/queries/Page.gql`
2. Run `codegen`
3. Create the component in `src/components/sections/`
4. Register it in the section type map

### Theming

The site's color scheme is driven by a `brandColor` field from Hygraph `SiteSettings`. `src/lib/theme.ts` converts it to CSS variables that Tailwind v4 reads via `@theme`. Changing `brandColor` in Hygraph automatically changes the live theme — there are no hardcoded brand colors in CSS.

### Audience segmentation

`src/lib/context/SegmentContext.tsx` controls which content variant a user sees. Hygraph delivers multiple content variants per page; the active segment is a client-side context value toggled by the `SegmentSwitcher` UI component.

### Live preview

`app/api/preview/` and `app/api/exit-preview/` are Next.js draft-mode routes. The preview integration uses `@hygraph/preview-sdk`. Preview token validation uses `HYGRAPH_PREVIEW_TOKEN` and `HYGRAPH_PREVIEW_SECRET`.

### BigCommerce product federation (mocked)

`app/catalog/products/` mocks a BigCommerce product API. `app/api/products/` proxies it. The intent is to demonstrate federating commerce data alongside CMS content — the actual BigCommerce integration is stubbed.

### AI chat

`app/api/chat/` is a streaming chat route backed by Vertex AI (Gemini). The service account running Cloud Run has `roles/aiplatform.user`. Tool definitions are in `src/lib/chat-tools.ts`.

### OpenTelemetry

`instrumentation.ts` (Next.js instrumentation hook) delegates to `instrumentation.node.ts` and is skipped on the edge runtime.

- **Local**: metrics and traces go to the OTel Collector at `OTEL_EXPORTER_OTLP_ENDPOINT` via OTLP HTTP.
- **Production (Cloud Run)**: traces go to Cloud Trace via `@google-cloud/opentelemetry-cloud-trace-exporter`; metrics go to Google Managed Prometheus via OTLP with a token fetched from the GCP metadata server (`GmpOtlpMetricExporter` class in `instrumentation.node.ts`).

Custom metrics are defined in `src/lib/otel-custom-metrics.ts` (page counters/histograms) and `src/lib/web-vitals-metrics.ts` (Core Web Vitals histograms reported from the client via `app/api/vitals/`).

## Infrastructure (Terraform)

All GCP infrastructure is in `terraform/`. Resources are deployed to `europe-west3`.

- `terraform/modules/cloud-run/` — Next.js Cloud Run service
- `terraform/modules/grafana/` — Grafana Cloud Run service (always min=1, GCS-backed)
- `terraform/modules/load-balancer/` — Global HTTPS LB with Cloud CDN (`cache_mode: USE_ORIGIN_HEADERS`)
- `terraform/modules/armor/` — Cloud Armor WAF (XSS, SQLi, LFI, RCE, rate limiting, geo-block)
- `terraform/modules/monitoring/` — Uptime checks, LB 5xx alerts, log-based latency metric

`terraform/environments/prod.tfvars` / `dev.tfvars` control which modules are active. Prod enables LB, CDN, Armor, and DNS; dev does not.

The CI/CD workflow (`.github/workflows/terraform.yml`) runs `terraform apply` on push to `main` (prod) or `develop` (dev). The app image workflow (`.github/workflows/google-cloud-run.yml`) builds and deploys the Docker image to Cloud Run, then purges the CDN cache.

Terraform state lives in GCS bucket `{project_id}-terraform-state`. Run `terraform init -backend-config=...` using the bucket name from the `GCP_TF_STATE_BUCKET` GitHub secret before running locally.

## Environment variables

Copy `.env.local.example` to `.env.local` for local development. Required:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT` | Hygraph Content API URL |
| `HYGRAPH_PREVIEW_TOKEN` | Hygraph draft content token |
| `HYGRAPH_PREVIEW_SECRET` | Validates preview route requests |
| `NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT` | Set `true` locally to always fetch drafts |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | OTLP collector URL (local: `http://localhost:4328`) |

`GCP_PROJECT_ID` and `VERTEX_AI_LOCATION` are only needed if testing Vertex AI / chat locally.

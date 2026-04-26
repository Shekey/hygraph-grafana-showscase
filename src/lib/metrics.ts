import client from "prom-client";

const register = client.register;

if (!(register as any)._defaultMetricsRegistered) {
  client.collectDefaultMetrics({ register });
  (register as any)._defaultMetricsRegistered = true;
}

export const hygraphFetchDuration =
  (register.getSingleMetric("hygraph_fetch_duration_seconds") as client.Histogram) ??
  new client.Histogram({
    name: "hygraph_fetch_duration_seconds",
    help: "Duration of Hygraph GraphQL fetches in seconds",
    labelNames: ["query_name", "locale", "status"] as const,
    buckets: [0.05, 0.1, 0.25, 0.5, 1, 2, 5],
    registers: [register],
  });

export const httpRequestDuration =
  (register.getSingleMetric("http_request_duration_seconds") as client.Histogram) ??
  new client.Histogram({
    name: "http_request_duration_seconds",
    help: "Duration of HTTP requests handled by Next.js API routes",
    labelNames: ["method", "route", "status_code"] as const,
    buckets: [0.05, 0.1, 0.25, 0.5, 1, 2, 5],
    registers: [register],
  });

export const isrRevalidationCounter =
  (register.getSingleMetric("isr_revalidation_total") as client.Counter) ??
  new client.Counter({
    name: "isr_revalidation_total",
    help: "Number of ISR revalidation events",
    labelNames: ["route", "status"] as const,
    registers: [register],
  });

export const cacheCounter =
  (register.getSingleMetric("nextjs_cache_total") as client.Counter) ??
  new client.Counter({
    name: "nextjs_cache_total",
    help: "Next.js fetch cache HIT and MISS events",
    labelNames: ["route", "result"] as const,
    registers: [register],
  });

export const livePreviewGauge =
  (register.getSingleMetric("hygraph_live_preview_sessions") as client.Gauge) ??
  new client.Gauge({
    name: "hygraph_live_preview_sessions",
    help: "Number of currently active Hygraph live preview sessions",
    registers: [register],
  });

export { register };

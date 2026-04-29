import { MeterProvider, PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { MetricExporter } from '@google-cloud/opentelemetry-cloud-monitoring-exporter';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';

const projectId = process.env.GCP_PROJECT_ID;

const exporter = new MetricExporter({
  projectId,
  // Authenticate via Application Default Credentials (Cloud Run service account)
} as any);

const meterProvider = new MeterProvider({
  resource: resourceFromAttributes({
    [SEMRESATTRS_SERVICE_NAME]: 'hybike',
    [SEMRESATTRS_SERVICE_VERSION]: process.env.npm_package_version ?? '1.0.0',
  }),
  readers: [
    new PeriodicExportingMetricReader({
      exporter: exporter as any,
      exportIntervalMillis: 30_000, // Push metrics to GMP every 30 seconds
    }),
  ],
});

const meter = meterProvider.getMeter('hybike', '1.0.0');

export const hygraphFetchDuration = meter.createHistogram('hygraph_fetch_duration_seconds', {
  description: 'Duration of Hygraph GraphQL fetches in seconds',
  unit: 's',
});

export const httpRequestDuration = meter.createHistogram('http_request_duration_seconds', {
  description: 'Duration of HTTP requests handled by Next.js API routes',
  unit: 's',
});

export const isrRevalidationCounter = meter.createCounter('isr_revalidation_total', {
  description: 'Number of ISR revalidation events',
});

export const cacheCounter = meter.createCounter('nextjs_cache_total', {
  description: 'Next.js fetch cache HIT and MISS events',
});

export const hygraphLivePreviewSessions = meter.createUpDownCounter('hygraph_live_preview_sessions', {
  description: 'Number of currently active Hygraph live preview sessions',
});

export { meterProvider };

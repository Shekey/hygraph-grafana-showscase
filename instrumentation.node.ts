import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Resource } = require('@opentelemetry/resources');
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import type { ExportResult } from '@opentelemetry/core';
import type { ResourceMetrics, PushMetricExporter } from '@opentelemetry/sdk-metrics';

// Wraps OTLPMetricExporter to fetch a fresh GCP access token from the Cloud Run
// metadata server before each export, preventing token expiry after 1 hour.
class GmpOtlpMetricExporter implements PushMetricExporter {
  private url: string;
  private cachedToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor(url: string) {
    this.url = url;
  }

  async export(metrics: ResourceMetrics, resultCallback: (result: ExportResult) => void): Promise<void> {
    const { ExportResultCode } = await import('@opentelemetry/core');
    const { OTLPMetricExporter } = await import('@opentelemetry/exporter-metrics-otlp-http');

    try {
      // Refresh token 60s before expiry
      if (!this.cachedToken || Date.now() >= this.tokenExpiry - 60_000) {
        const res = await fetch(
          'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token',
          { headers: { 'Metadata-Flavor': 'Google' } },
        );
        const { access_token, expires_in } = await res.json();
        this.cachedToken = access_token;
        this.tokenExpiry = Date.now() + expires_in * 1000;
      }

      const exporter = new OTLPMetricExporter({
        url: this.url,
        headers: { Authorization: `Bearer ${this.cachedToken}` },
      });

      exporter.export(metrics, resultCallback);
    } catch (err) {
      resultCallback({ code: ExportResultCode.FAILED, error: err as Error });
    }
  }

  async shutdown(): Promise<void> {}
  async forceFlush(): Promise<void> {}
}

export function initializeOpenTelemetry() {
  let traceExporter;
  let metricReader;

  if (process.env.NODE_ENV === 'production') {
    // Production: traces → Cloud Trace, metrics → GMP via OTLP
    // GMP (Google Managed Prometheus) is queried by Grafana via PromQL,
    // so we push directly to the GMP OTLP endpoint instead of Cloud Monitoring API.
    try {
      // eslint-disable-next-line global-require
      const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');

      const projectId = process.env.GCP_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT;
      if (!projectId) throw new Error('GCP_PROJECT_ID env var not set');

      const gmpOtlpUrl = `https://monitoring.googleapis.com/v1/projects/${projectId}/location/global/prometheus/api/v1/otlp`;

      traceExporter = new TraceExporter();
      metricReader = new PeriodicExportingMetricReader({
        exporter: new GmpOtlpMetricExporter(gmpOtlpUrl),
        exportIntervalMillis: 60_000,
      });

      console.log(`[OpenTelemetry] Configured for GCP: traces → Cloud Trace, metrics → GMP (${gmpOtlpUrl})`);
    } catch (err) {
      console.error('[OpenTelemetry] Failed to configure GCP exporters:', err);
      return;
    }
  } else {
    // Development: OTLP → local collector → Prometheus
    // eslint-disable-next-line global-require
    const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
    // eslint-disable-next-line global-require
    const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');

    const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4328';
    traceExporter = new OTLPTraceExporter({
      url: `${endpoint}/v1/traces`,
    });
    metricReader = new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({
        url: `${endpoint}/v1/metrics`,
      }),
    });

    console.log(`[OpenTelemetry] Configured for local OTLP (endpoint: ${endpoint})`);
  }

  // Add environment as a resource attribute for filtering metrics by env in Grafana
  const environment = process.env.APP_ENV || process.env.NODE_ENV || 'unknown';
  const resource = Resource.default().merge(
    new Resource({
      [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: environment,
      environment, // Also add as plain 'environment' for easier querying
    }),
  );

  const sdk = new NodeSDK({
    traceExporter,
    metricReader,
    resource,
    instrumentations: [getNodeAutoInstrumentations()],
  });

  try {
    sdk.start();
    console.log('[OpenTelemetry] SDK started successfully');

    // Graceful shutdown on SIGTERM
    process.on('SIGTERM', () => {
      sdk
        .shutdown()
        .then(() => {
          console.log('[OpenTelemetry] SDK shut down gracefully');
        })
        .catch((err) => {
          console.error('[OpenTelemetry] Error during shutdown:', err);
        })
        .finally(() => {
          process.exit(0);
        });
    });
  } catch (err) {
    console.error('[OpenTelemetry] Failed to start SDK:', err);
  }
}

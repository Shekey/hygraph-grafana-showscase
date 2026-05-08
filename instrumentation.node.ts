import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

export function initializeOpenTelemetry() {
  let traceExporter;
  let metricReader;

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Resource } = require('@opentelemetry/resources');

    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line global-require
      const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');
      // eslint-disable-next-line global-require
      const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');

      const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
      if (!endpoint) throw new Error('OTEL_EXPORTER_OTLP_ENDPOINT env var not set');

      traceExporter = new TraceExporter();
      metricReader = new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter({ url: `${endpoint}/v1/metrics` }),
        exportIntervalMillis: 60_000,
      });

      console.log(`[OpenTelemetry] Configured for GCP: traces → Cloud Trace, metrics → Prometheus (${endpoint})`);
    } else {
      // eslint-disable-next-line global-require
      const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
      // eslint-disable-next-line global-require
      const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');

      const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4328';
      traceExporter = new OTLPTraceExporter({ url: `${endpoint}/v1/traces` });
      metricReader = new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter({ url: `${endpoint}/v1/metrics` }),
      });

      console.log(`[OpenTelemetry] Configured for local OTLP (endpoint: ${endpoint})`);
    }

    const environment = process.env.APP_ENV || process.env.NODE_ENV || 'unknown';
    const resource = Resource.default().merge(
      new Resource({
        [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: environment,
        environment,
      }),
    );

    const sdk = new NodeSDK({
      traceExporter,
      metricReader,
      resource,
      instrumentations: [getNodeAutoInstrumentations()],
    });

    sdk.start();
    console.log('[OpenTelemetry] SDK started successfully');

    process.on('SIGTERM', () => {
      sdk
        .shutdown()
        .then(() => console.log('[OpenTelemetry] SDK shut down gracefully'))
        .catch((err) => console.error('[OpenTelemetry] Error during shutdown:', err))
        .finally(() => process.exit(0));
    });
  } catch (err) {
    console.error('[OpenTelemetry] Failed to initialize:', err);
  }
}

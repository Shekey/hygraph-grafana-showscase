import { metrics } from '@opentelemetry/api';

let vitalsMetricsInitialized = false;
let webVitalValue: any;
let webVitalRequestsTotal: any;

export function initializeVitalsMetrics() {
  if (vitalsMetricsInitialized) return;

  const meter = metrics.getMeter('hygraph-showcase-web-vitals');

  webVitalValue = meter.createHistogram('web_vital_value', {
    description: 'Web Vital metric values (LCP, FCP, CLS, INP, TTFB)',
  });

  webVitalRequestsTotal = meter.createCounter('web_vital_requests_total', {
    description: 'Total count of Web Vital measurements',
  });

  vitalsMetricsInitialized = true;
}

export function recordWebVital(
  name: string,
  value: number,
  rating: string | undefined,
  route: string,
) {
  if (!vitalsMetricsInitialized) {
    initializeVitalsMetrics();
  }

  const finalRating = rating || 'unknown';

  webVitalValue.record(value, {
    metric_name: name,
    rating: finalRating,
    route: route,
  });

  webVitalRequestsTotal.add(1, {
    metric_name: name,
    rating: finalRating,
    route: route,
  });
}

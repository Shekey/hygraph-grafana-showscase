import { metrics } from '@opentelemetry/api';

let pageMetricsInitialized = false;
let pageRequestCounter: any;
let pageRequestDuration: any;

export function initializePageMetrics() {
  if (pageMetricsInitialized) return;

  const meter = metrics.getMeter('hygraph-showcase-pages');

  pageRequestCounter = meter.createCounter('page_requests_total', {
    description: 'Total number of page requests',
  });

  pageRequestDuration = meter.createHistogram('page_request_duration_ms', {
    description: 'Page request duration in milliseconds',
  });

  pageMetricsInitialized = true;
}

export function recordPageRequest(route: string, durationMs: number, statusCode: number = 200) {
  if (!pageMetricsInitialized) {
    initializePageMetrics();
  }

  pageRequestCounter.add(1, {
    http_route: route,
    http_status_code: statusCode,
    http_method: 'GET',
  });

  pageRequestDuration.record(durationMs, {
    http_route: route,
    http_status_code: statusCode,
  });
}

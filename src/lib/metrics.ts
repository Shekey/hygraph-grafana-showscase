import { metrics } from '@opentelemetry/api';

const meter = metrics.getMeter('hygraph-showcase');

export const hygraphFetchDuration = meter.createHistogram('hygraph_fetch_duration_ms', {
  description: 'Duration of Hygraph GraphQL fetches in milliseconds',
  unit: 'ms',
});

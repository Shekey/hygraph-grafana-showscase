import { recordPageRequest } from '@/lib/otel-custom-metrics';

interface PageMetricsWrapperProps {
  children: React.ReactNode;
  route: string;
}

export function PageMetricsWrapper({ children, route }: PageMetricsWrapperProps) {
  // Record page request with OTel custom metrics
  recordPageRequest(route, 0, 200);

  return children;
}

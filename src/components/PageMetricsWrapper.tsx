import { recordPageRequest } from '@/lib/otel-custom-metrics';

interface PageMetricsWrapperProps {
  children: React.ReactNode;
  route: string;
}

export function PageMetricsWrapper({ children, route }: PageMetricsWrapperProps) {
  const start = Date.now();
  recordPageRequest(route, Date.now() - start, 200);

  return children;
}

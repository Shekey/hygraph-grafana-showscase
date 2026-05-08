output "service_url" {
  value       = google_cloud_run_v2_service.otel_collector.uri
  description = "OTel Collector Cloud Run service URL"
}

output "service_name" {
  value       = google_cloud_run_v2_service.otel_collector.name
  description = "OTel Collector Cloud Run service name"
}

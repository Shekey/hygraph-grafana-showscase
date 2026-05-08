output "service_url" {
  value       = google_cloud_run_v2_service.prometheus.uri
  description = "Prometheus Cloud Run service URL"
}

output "service_name" {
  value       = google_cloud_run_v2_service.prometheus.name
  description = "Prometheus Cloud Run service name"
}

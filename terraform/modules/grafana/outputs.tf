output "service_url" {
  description = "URL of the Grafana Cloud Run service"
  value       = google_cloud_run_v2_service.grafana.uri
}

output "service_name" {
  description = "Name of the Grafana Cloud Run service"
  value       = google_cloud_run_v2_service.grafana.name
}

output "secret_ids" {
  value       = { for k, v in google_secret_manager_secret.app_secrets : k => v.secret_id if contains(local.secret_names, k) }
  description = "Map of app secret names to secret IDs (excludes Grafana secrets)"
}

output "grafana_secret_ids" {
  value       = { for k, v in google_secret_manager_secret.app_secrets : k => v.secret_id if contains(local.grafana_secret_names, k) }
  description = "Map of Grafana secret names to secret IDs"
}

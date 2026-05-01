output "secret_ids" {
  value       = { for k, v in google_secret_manager_secret.app_secrets : k => v.secret_id }
  description = "Map of secret names to secret IDs"
}

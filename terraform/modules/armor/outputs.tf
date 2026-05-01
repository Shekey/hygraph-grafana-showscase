output "policy_id" {
  value       = google_compute_security_policy.app_policy.id
  description = "Cloud Armor security policy ID"
}

output "policy_name" {
  value       = google_compute_security_policy.app_policy.name
  description = "Cloud Armor security policy name"
}

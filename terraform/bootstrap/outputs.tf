output "tf_state_bucket_name" {
  value       = google_storage_bucket.tf_state.name
  description = "GCS bucket name for Terraform state"
}

output "tf_state_bucket_path" {
  value       = "gs://${google_storage_bucket.tf_state.name}/terraform/state"
  description = "Full path to Terraform state in GCS"
}

output "repository_id" {
  value = google_artifact_registry_repository.nextjs.repository_id
}

output "repository_url" {
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/hygraph-showcase"
  description = "Full Docker registry URL prefix"
}

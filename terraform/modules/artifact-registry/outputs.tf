output "repository_id" {
  value = google_artifact_registry_repository.nextjs[var.region].repository_id
}

output "repository_url" {
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/hygraph-showcase"
  description = "Primary region Docker registry URL prefix"
}

output "repository_urls" {
  value = {
    for region in var.regions :
    region => "${region}-docker.pkg.dev/${var.project_id}/hygraph-showcase"
  }
  description = "Docker registry URL prefixes for all regions"
}

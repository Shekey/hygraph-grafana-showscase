resource "google_artifact_registry_repository" "nextjs" {
  location      = var.region
  repository_id = "hygraph-showcase"
  format        = "DOCKER"
  description   = "Docker images for ${var.service_name} Next.js application"

  cleanup_policies {
    id     = "keep-last-10"
    action = "KEEP"
    most_recent_versions {
      keep_count = 10
    }
  }

  lifecycle {
    prevent_destroy = true
  }
}

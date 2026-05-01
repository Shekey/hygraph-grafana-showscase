locals {
  secret_names = [
    "HYGRAPH_PREVIEW_TOKEN",
    "HYGRAPH_PREVIEW_SECRET",
    "NEXT_PUBLIC_SENTRY_DSN",
    "SENTRY_AUTH_TOKEN",
  ]
}

resource "google_secret_manager_secret" "app_secrets" {
  for_each  = toset(local.secret_names)
  secret_id = "${var.environment}-${each.key}"

  replication {
    auto {}
  }

  labels = {
    environment = var.environment
    app         = "hygraph-showcase"
  }
}

resource "google_secret_manager_secret_iam_member" "nextjs_run_accessor" {
  for_each  = toset(local.secret_names)
  secret_id = google_secret_manager_secret.app_secrets[each.key].secret_id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${var.nextjs_run_sa_email}"
}

# Also allow cloud-build-deployer to read secrets (for CI/CD build time)
resource "google_secret_manager_secret_iam_member" "deployer_accessor" {
  for_each  = toset(local.secret_names)
  secret_id = google_secret_manager_secret.app_secrets[each.key].secret_id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${var.cloud_build_deployer_sa_email}"
}

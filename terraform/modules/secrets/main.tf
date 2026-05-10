locals {
  secret_names = [
    "HYGRAPH_PREVIEW_TOKEN",
    "HYGRAPH_PREVIEW_SECRET",
  ]
  grafana_secret_names = [
    "GF_SECURITY_ADMIN_PASSWORD",
  ]
}

resource "google_secret_manager_secret" "app_secrets" {
  for_each  = toset(concat(local.secret_names, local.grafana_secret_names))
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

resource "google_secret_manager_secret_iam_member" "deployer_accessor" {
  for_each  = toset(local.secret_names)
  secret_id = google_secret_manager_secret.app_secrets[each.key].secret_id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${var.cloud_build_deployer_sa_email}"
}

resource "google_secret_manager_secret_iam_member" "grafana_accessor" {
  for_each  = toset(local.grafana_secret_names)
  secret_id = google_secret_manager_secret.app_secrets[each.key].secret_id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${var.grafana_run_sa_email}"
}

# Service account for GitHub Actions / Cloud Build deployer
resource "google_service_account" "cloud_build_deployer" {
  account_id   = "cloud-build-deployer"
  display_name = "GitHub Actions / Cloud Build Deployer"
  description  = "Service account used by GitHub Actions to build and deploy Cloud Run services"
}

# Service account for Cloud Run runtime
resource "google_service_account" "nextjs_run_sa" {
  account_id   = "nextjs-run-sa"
  display_name = "Next.js Cloud Run Service Account"
  description  = "Service account used by Cloud Run runtime to access GCP services"
}

# Role bindings for cloud-build-deployer
resource "google_project_iam_member" "deployer_run_developer" {
  project = var.project_id
  role    = "roles/run.developer"
  member  = "serviceAccount:${google_service_account.cloud_build_deployer.email}"
}

resource "google_project_iam_member" "deployer_ar_writer" {
  project = var.project_id
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.cloud_build_deployer.email}"
}

resource "google_project_iam_member" "deployer_sa_user" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.cloud_build_deployer.email}"
}

# Allow deployer to impersonate nextjs-run-sa
resource "google_service_account_iam_binding" "deployer_acts_as_runner" {
  service_account_id = google_service_account.nextjs_run_sa.name
  role               = "roles/iam.serviceAccountUser"
  members            = ["serviceAccount:${google_service_account.cloud_build_deployer.email}"]
}

# Role bindings for nextjs-run-sa (Cloud Run runtime)
resource "google_project_iam_member" "runner_secret_accessor" {
  project = var.project_id
  role    = "roles/secretmanager.secretAccessor"
  member  = "serviceAccount:${google_service_account.nextjs_run_sa.email}"
}

resource "google_project_iam_member" "runner_log_writer" {
  project = var.project_id
  role    = "roles/logging.logWriter"
  member  = "serviceAccount:${google_service_account.nextjs_run_sa.email}"
}

resource "google_project_iam_member" "runner_metric_writer" {
  project = var.project_id
  role    = "roles/monitoring.metricWriter"
  member  = "serviceAccount:${google_service_account.nextjs_run_sa.email}"
}

resource "google_project_iam_member" "runner_trace_agent" {
  project = var.project_id
  role    = "roles/cloudtrace.agent"
  member  = "serviceAccount:${google_service_account.nextjs_run_sa.email}"
}

resource "google_project_iam_member" "runner_vertex_ai_user" {
  project = var.project_id
  role    = "roles/aiplatform.user"
  member  = "serviceAccount:${google_service_account.nextjs_run_sa.email}"
}

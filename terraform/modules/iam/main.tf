resource "google_service_account" "cloud_build_deployer" {
  account_id   = "cloud-build-deployer"
  display_name = "GitHub Actions / Cloud Build Deployer"
  description  = "Service account used by GitHub Actions to build and deploy Cloud Run services"
}

resource "google_service_account" "nextjs_run_sa" {
  account_id   = "nextjs-run-sa"
  display_name = "Next.js Cloud Run Service Account"
  description  = "Service account used by Cloud Run runtime to access GCP services"
}

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

resource "google_project_iam_member" "deployer_vpc_access" {
  project = var.project_id
  role    = "roles/vpcaccess.admin"
  member  = "serviceAccount:${google_service_account.cloud_build_deployer.email}"
}


resource "google_service_account_iam_binding" "deployer_acts_as_runner" {
  service_account_id = google_service_account.nextjs_run_sa.name
  role               = "roles/iam.serviceAccountUser"
  members            = ["serviceAccount:${google_service_account.cloud_build_deployer.email}"]
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

resource "google_project_iam_member" "runner_ar_reader" {
  project = var.project_id
  role    = "roles/artifactregistry.reader"
  member  = "serviceAccount:${google_service_account.nextjs_run_sa.email}"
}

resource "google_project_iam_member" "runner_vertex_ai_endpoint_user" {
  project = var.project_id
  role    = "roles/aiplatform.endpointUser"
  member  = "serviceAccount:${google_service_account.nextjs_run_sa.email}"
}

resource "google_service_account" "grafana_run_sa" {
  account_id   = "grafana-run-sa"
  display_name = "Grafana Cloud Run Service Account"
  description  = "Service account used by Grafana Cloud Run to access GCP services"
}

resource "google_service_account_iam_binding" "deployer_acts_as_grafana" {
  service_account_id = google_service_account.grafana_run_sa.name
  role               = "roles/iam.serviceAccountUser"
  members            = ["serviceAccount:${google_service_account.cloud_build_deployer.email}"]
}


resource "google_project_iam_member" "grafana_log_writer" {
  project = var.project_id
  role    = "roles/logging.logWriter"
  member  = "serviceAccount:${google_service_account.grafana_run_sa.email}"
}

resource "google_project_iam_member" "grafana_metric_writer" {
  project = var.project_id
  role    = "roles/monitoring.metricWriter"
  member  = "serviceAccount:${google_service_account.grafana_run_sa.email}"
}

resource "google_project_iam_member" "grafana_metric_viewer" {
  project = var.project_id
  role    = "roles/monitoring.viewer"
  member  = "serviceAccount:${google_service_account.grafana_run_sa.email}"
}

resource "google_project_iam_member" "grafana_trace_agent" {
  project = var.project_id
  role    = "roles/cloudtrace.agent"
  member  = "serviceAccount:${google_service_account.grafana_run_sa.email}"
}

resource "google_project_iam_member" "grafana_ar_reader" {
  project = var.project_id
  role    = "roles/artifactregistry.reader"
  member  = "serviceAccount:${google_service_account.grafana_run_sa.email}"
}

resource "google_service_account" "prometheus_run_sa" {
  account_id   = "prometheus-run-sa"
  display_name = "Prometheus Cloud Run Service Account"
  description  = "Service account used by Prometheus Cloud Run to access GCP services"
}

resource "google_service_account_iam_binding" "deployer_acts_as_prometheus" {
  service_account_id = google_service_account.prometheus_run_sa.name
  role               = "roles/iam.serviceAccountUser"
  members            = ["serviceAccount:${google_service_account.cloud_build_deployer.email}"]
}

resource "google_project_iam_member" "prometheus_log_writer" {
  project = var.project_id
  role    = "roles/logging.logWriter"
  member  = "serviceAccount:${google_service_account.prometheus_run_sa.email}"
}

resource "google_project_iam_member" "prometheus_ar_reader" {
  project = var.project_id
  role    = "roles/artifactregistry.reader"
  member  = "serviceAccount:${google_service_account.prometheus_run_sa.email}"
}

resource "google_service_account" "otel_collector_run_sa" {
  account_id   = "otel-collector-run-sa"
  display_name = "OTel Collector Cloud Run Service Account"
  description  = "Service account used by OTel Collector Cloud Run to access GCP services"
}

resource "google_service_account_iam_binding" "deployer_acts_as_otel_collector" {
  service_account_id = google_service_account.otel_collector_run_sa.name
  role               = "roles/iam.serviceAccountUser"
  members            = ["serviceAccount:${google_service_account.cloud_build_deployer.email}"]
}

resource "google_project_iam_member" "otel_collector_log_writer" {
  project = var.project_id
  role    = "roles/logging.logWriter"
  member  = "serviceAccount:${google_service_account.otel_collector_run_sa.email}"
}

resource "google_project_iam_member" "otel_collector_ar_reader" {
  project = var.project_id
  role    = "roles/artifactregistry.reader"
  member  = "serviceAccount:${google_service_account.otel_collector_run_sa.email}"
}

resource "google_cloud_run_v2_service" "otel_collector" {
  provider            = google-beta
  name                = "otel-collector"
  location            = var.region
  deletion_protection = false

  ingress = "INGRESS_TRAFFIC_INTERNAL_ONLY"

  template {
    service_account = var.otel_collector_run_sa_email

    scaling {
      min_instance_count = 0
      max_instance_count = 3
    }

    timeout = "60s"

    containers {
      image = "${var.image_uri}:${var.image_tag}"
      name  = "otel-collector"

      ports {
        container_port = 4318
        name           = "http1"
      }

      resources {
        limits = {
          cpu    = "1"
          memory = "256Mi"
        }
        cpu_idle          = true
        startup_cpu_boost = true
      }

      env {
        name  = "PROMETHEUS_REMOTE_WRITE_URL"
        value = "${var.prometheus_url}/api/v1/write"
      }

      liveness_probe {
        http_get {
          path = "/"
          port = 13133
        }
        initial_delay_seconds = 10
        period_seconds        = 30
        timeout_seconds       = 5
        failure_threshold     = 3
      }

      startup_probe {
        http_get {
          path = "/"
          port = 13133
        }
        initial_delay_seconds = 5
        period_seconds        = 5
        timeout_seconds       = 5
        failure_threshold     = 10
      }
    }
  }
}

resource "google_cloud_run_service_iam_member" "otel_collector_nextjs_invoker" {
  location = google_cloud_run_v2_service.otel_collector.location
  service  = google_cloud_run_v2_service.otel_collector.name
  role     = "roles/run.invoker"
  member   = "serviceAccount:${var.nextjs_run_sa_email}"
}

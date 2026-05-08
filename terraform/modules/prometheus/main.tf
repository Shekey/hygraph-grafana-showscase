resource "google_cloud_run_v2_service" "prometheus" {
  provider            = google-beta
  name                = "prometheus"
  location            = var.region
  deletion_protection = false

  ingress = "INGRESS_TRAFFIC_INTERNAL_ONLY"

  template {
    service_account = var.prometheus_run_sa_email

    scaling {
      min_instance_count = 1
      max_instance_count = 1
    }

    timeout = "120s"

    containers {
      image = "${var.image_uri}:${var.image_tag}"
      name  = "prometheus"

      args = [
        "--config.file=/etc/prometheus/prometheus.yml",
        "--web.enable-remote-write-receiver",
        "--storage.tsdb.retention.time=7d",
        "--storage.tsdb.path=/tmp/prometheus",
      ]

      ports {
        container_port = 9090
        name           = "http1"
      }

      resources {
        limits = {
          cpu    = "1"
          memory = "512Mi"
        }
        cpu_idle          = false
        startup_cpu_boost = true
      }

      liveness_probe {
        http_get {
          path = "/-/healthy"
          port = 9090
        }
        initial_delay_seconds = 10
        period_seconds        = 30
        timeout_seconds       = 5
        failure_threshold     = 3
      }

      startup_probe {
        http_get {
          path = "/-/ready"
          port = 9090
        }
        initial_delay_seconds = 5
        period_seconds        = 5
        timeout_seconds       = 5
        failure_threshold     = 10
      }
    }
  }
}

resource "google_cloud_run_service_iam_member" "prometheus_otel_invoker" {
  location = google_cloud_run_v2_service.prometheus.location
  service  = google_cloud_run_v2_service.prometheus.name
  role     = "roles/run.invoker"
  member   = "serviceAccount:${var.otel_collector_run_sa_email}"
}

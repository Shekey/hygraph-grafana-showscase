resource "google_cloud_run_v2_service" "prometheus" {
  provider            = google-beta
  name                = "prometheus"
  location            = var.region
  deletion_protection = false

  ingress = "INGRESS_TRAFFIC_INTERNAL_ONLY"

  template {
    service_account = var.prometheus_run_sa_email

    dynamic "vpc_access" {
      for_each = var.vpc_connector != null ? [1] : []
      content {
        connector = var.vpc_connector
        egress    = "PRIVATE_RANGES_ONLY"
      }
    }

    scaling {
      min_instance_count = 1
      max_instance_count = 1
    }

    timeout = "120s"

    containers {
      image = "${var.image_uri}:${var.image_tag}"
      name  = "prometheus"

      args = [
        "--config.file=/tmp/prometheus.yml",
        "--web.enable-remote-write-receiver",
        "--storage.tsdb.retention.time=7d",
        "--storage.tsdb.path=/tmp/prometheus",
      ]

      env {
        name  = "OTEL_COLLECTOR_HOST"
        value = var.otel_collector_url != "" ? replace(replace(var.otel_collector_url, "https://", ""), "http://", "") : "otel-collector"
      }

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
          path = "/-/healthy"
          port = 9090
        }
        initial_delay_seconds = 15
        period_seconds        = 10
        timeout_seconds       = 10
        failure_threshold     = 30
      }
    }
  }
}

resource "google_cloud_run_service_iam_binding" "prometheus_invokers" {
  location = google_cloud_run_v2_service.prometheus.location
  service  = google_cloud_run_v2_service.prometheus.name
  role     = "roles/run.invoker"
  members = [
    "allUsers"
  ]
}

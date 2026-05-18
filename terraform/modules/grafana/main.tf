resource "google_cloud_run_v2_service" "grafana" {
  provider            = google-beta
  name                = var.service_name
  location            = var.region
  deletion_protection = false

  ingress = var.ingress_mode

  template {
    service_account = var.grafana_run_sa_email

    scaling {
      min_instance_count = 1
      max_instance_count = 1
    }

    timeout = "300s"

    dynamic "vpc_access" {
      for_each = var.vpc_connector != null ? [1] : []
      content {
        connector = var.vpc_connector
        egress    = "ALL_TRAFFIC"
      }
    }

    containers {
      image = "${var.image_uri}:${var.image_tag}"
      name  = "grafana"

      ports {
        container_port = 3000
        name           = "http1"
      }

      resources {
        limits = {
          cpu    = "1"
          memory = "1Gi"
        }
        cpu_idle          = true
        startup_cpu_boost = true
      }

      env {
        name  = "GCP_PROJECT_ID"
        value = var.project_id
      }

      env {
        name  = "GF_AUTH_ANONYMOUS_ENABLED"
        value = "false"
      }

      env {
        name  = "PROMETHEUS_URL"
        value = var.prometheus_url
      }

      env {
        name  = "GF_DATABASE_TYPE"
        value = "sqlite3"
      }

      env {
        name  = "GF_DATABASE_PATH"
        value = ":memory:"
      }

      env {
        name  = "GF_SERVER_HTTP_PORT"
        value = "3000"
      }

      dynamic "env" {
        for_each = var.secret_ids
        content {
          name = env.key
          value_source {
            secret_key_ref {
              secret  = env.value
              version = "latest"
            }
          }
        }
      }

      liveness_probe {
        http_get {
          path = "/api/health"
          port = 3000
        }
        initial_delay_seconds = 30
        period_seconds        = 30
        timeout_seconds       = 10
        failure_threshold     = 3
      }

      startup_probe {
        tcp_socket {
          port = 3000
        }
        initial_delay_seconds = 30
        period_seconds        = 10
        timeout_seconds       = 10
        failure_threshold     = 30
      }
    }
  }

}

resource "google_cloud_run_service_iam_binding" "grafana_invoker" {
  location = google_cloud_run_v2_service.grafana.location
  service  = google_cloud_run_v2_service.grafana.name
  role     = "roles/run.invoker"
  members  = ["allUsers"]
}

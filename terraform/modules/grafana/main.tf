resource "google_storage_bucket" "grafana_data" {
  name          = "${var.project_id}-grafana-data"
  location      = var.region
  force_destroy = false

  uniform_bucket_level_access = true

  versioning {
    enabled = false
  }

  labels = {
    environment = var.environment
    app         = var.service_name
  }

  lifecycle {
    ignore_changes = [
      uniform_bucket_level_access,
    ]
  }
}

resource "google_storage_bucket_iam_member" "grafana_objectadmin" {
  bucket = google_storage_bucket.grafana_data.name
  role   = "roles/storage.objectAdmin"
  member = "serviceAccount:${var.grafana_run_sa_email}"
}

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

    timeout = "120s"

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
          memory = "512Mi"
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
        name  = "GF_INSTALL_PLUGINS"
        value = "grafana-piechart-panel,grafana-clock-panel"
      }

      env {
        name  = "PROMETHEUS_URL"
        value = var.prometheus_url
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
        initial_delay_seconds = 10
        period_seconds        = 5
        timeout_seconds       = 5
        failure_threshold     = 30
      }


      volume_mounts {
        name       = "grafana-data"
        mount_path = "/var/lib/grafana"
      }
    }

    volumes {
      name = "grafana-data"
      gcs {
        bucket = google_storage_bucket.grafana_data.name
      }
    }
  }

}

resource "google_cloud_run_service_iam_binding" "grafana_public" {
  count    = var.ingress_mode == "INGRESS_TRAFFIC_ALL" ? 1 : 0
  location = google_cloud_run_v2_service.grafana.location
  service  = google_cloud_run_v2_service.grafana.name
  role     = "roles/run.invoker"
  members  = var.load_balancer_sa_email != "" ? ["serviceAccount:${var.load_balancer_sa_email}"] : []
}

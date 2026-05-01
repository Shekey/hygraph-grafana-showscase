resource "google_cloud_run_v2_service" "app" {
  provider = google-beta
  name     = var.service_name
  location = var.region

  ingress = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"

  template {
    service_account = var.nextjs_run_sa_email

    scaling {
      min_instance_count = var.min_instances
      max_instance_count = var.max_instances
    }

    timeout = "${var.timeout_seconds}s"

    containers {
      image = "${var.image_uri}:${var.image_tag}"
      name  = "nextjs"

      ports {
        container_port = var.app_port
        name           = "http1"
      }

      resources {
        limits = {
          cpu    = var.cpu
          memory = var.memory
        }
        cpu_idle          = true
        startup_cpu_boost = true
      }

      # Plain environment variables
      env {
        name  = "NODE_ENV"
        value = "production"
      }

      env {
        name  = "GCP_PROJECT_ID"
        value = var.project_id
      }

      env {
        name  = "VERTEX_AI_LOCATION"
        value = var.region
      }

      # Secret-backed environment variables
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

      # Liveness probe
      liveness_probe {
        http_get {
          path = "/api/metrics"
          port = var.app_port
        }
        initial_delay_seconds = 5
        period_seconds        = 10
        failure_threshold     = 3
        timeout_seconds       = 3
      }

      # Startup probe
      startup_probe {
        http_get {
          path = "/api/metrics"
          port = var.app_port
        }
        initial_delay_seconds = 2
        period_seconds        = 5
        failure_threshold     = 10
        timeout_seconds       = 3
      }
    }
  }

  lifecycle {
    ignore_changes = [
      template[0].containers[0].image,
    ]
  }

  depends_on = [var.depends_on_secrets]
}

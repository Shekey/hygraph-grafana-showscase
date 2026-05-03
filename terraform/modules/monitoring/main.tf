resource "google_monitoring_notification_channel" "email" {
  display_name = "Email - ${var.alert_email}"
  type         = "email"
  labels = {
    email_address = var.alert_email
  }
  enabled = true
}

# Uptime check for the LB domain
resource "google_monitoring_uptime_check_config" "lb_https" {
  display_name = "${var.service_name} LB HTTPS Uptime"
  timeout      = "10s"
  period       = "60s"

  http_check {
    path           = "/"
    port           = 443
    use_ssl        = true
    validate_ssl   = true
    request_method = "GET"
  }

  monitored_resource {
    type = "uptime_url"
    labels = {
      project_id = var.project_id
      host       = var.domain
    }
  }

  lifecycle {
    ignore_changes = [selected_regions]
  }
}

# Alert policy for uptime failures
resource "google_monitoring_alert_policy" "uptime_failure" {
  display_name = "${var.service_name} Uptime Failure"
  combiner     = "OR"

  conditions {
    display_name = "Uptime check failure"
    condition_threshold {
      filter          = "metric.type=\"monitoring.googleapis.com/uptime_check/check_passed\" AND resource.type=\"uptime_url\" AND resource.labels.host=\"${var.domain}\""
      duration        = "300s"
      comparison      = "COMPARISON_LT"
      threshold_value = 1
      aggregations {
        alignment_period   = "60s"
        per_series_aligner = "ALIGN_FRACTION_TRUE"
      }
    }
  }

  notification_channels = [google_monitoring_notification_channel.email.id]

  alert_strategy {
    auto_close = "604800s"
  }
}

# Alert policy for LB 5xx errors
resource "google_monitoring_alert_policy" "lb_5xx" {
  display_name = "${var.service_name} High 5xx Error Rate"
  combiner     = "OR"

  conditions {
    display_name = "5xx error rate high"
    condition_threshold {
      filter          = "metric.type=\"loadbalancing.googleapis.com/https/request_count\" AND resource.type=\"https_lb_rule\""
      duration        = "120s"
      comparison      = "COMPARISON_GT"
      threshold_value = 50
      aggregations {
        alignment_period   = "60s"
        per_series_aligner = "ALIGN_RATE"
      }
    }
  }

  notification_channels = [google_monitoring_notification_channel.email.id]
}

# Log-based metric: Cloud Run request latency distribution
resource "google_logging_metric" "cloud_run_request_latency" {
  name            = "cloud_run_request_latency"
  description     = "Distribution of Cloud Run request latencies extracted from httpRequest.latency"
  filter          = "resource.type=\"cloud_run_revision\" AND logName=~\"run.googleapis.com%2Frequests\""
  metric_descriptor {
    metric_kind = "DELTA"
    value_type  = "DISTRIBUTION"
    unit        = "s"
    labels {
      key         = "http_method"
      value_type  = "STRING"
      description = "HTTP request method"
    }
    labels {
      key         = "status"
      value_type  = "INT64"
      description = "HTTP response status code"
    }
    labels {
      key         = "route"
      value_type  = "STRING"
      description = "Request route (first two path segments)"
    }
  }
  label_extractors = {
    "http_method" = "EXTRACT(httpRequest.requestMethod)"
    "status"      = "CAST(REGEXP_EXTRACT(httpRequest.status, \"([0-9]{3})\") AS INT64)"
    "route"       = "REGEXP_EXTRACT(httpRequest.requestUrl, \"https?://[^/]+(/_next/static|/_next/image|/api/[^/?]+|/[^/]+/[^/?]+)\")"
  }
  value_extractor = "EXTRACT(httpRequest.latency)"
  bucket_options {
    exponential_buckets {
      num_finite_buckets = 64
      growth_factor      = 2
      scale              = 0.001 # 1ms
    }
  }
}

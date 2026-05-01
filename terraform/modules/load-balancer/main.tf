# Static IP for the Load Balancer
resource "google_compute_global_address" "lb_ip" {
  name = "${var.service_name}-lb-ip"
}

# Managed SSL Certificate
resource "google_compute_managed_ssl_certificate" "app_cert" {
  name = "${var.service_name}-cert-${var.environment}"

  managed {
    domains = [var.domain]
  }

  lifecycle {
    create_before_destroy = true
  }
}

# Health Check for backend service
resource "google_compute_health_check" "app" {
  name = "${var.service_name}-hc"

  https_health_check {
    port         = 443
    request_path = "/api/health"
  }

  check_interval_sec  = 30
  timeout_sec         = 10
  healthy_threshold   = 2
  unhealthy_threshold = 2
}

# Serverless NEG (Network Endpoint Group)
resource "google_compute_region_network_endpoint_group" "cloudrun_neg" {
  name                  = "${var.service_name}-neg"
  network_endpoint_type = "SERVERLESS"
  region                = var.region

  cloud_run {
    service = var.cloud_run_service_name
  }
}

# Backend Service
resource "google_compute_backend_service" "app" {
  name                  = "${var.service_name}-backend"
  protocol              = "HTTPS"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  timeout_sec           = 30
  security_policy       = var.armor_policy_id
  health_checks         = [google_compute_health_check.app.id]

  backend {
    group = google_compute_region_network_endpoint_group.cloudrun_neg.id
  }

  dynamic "cdn_policy" {
    for_each = var.enable_cdn ? [1] : []
    content {
      cache_mode  = "USE_ORIGIN_HEADERS"
      client_ttl  = 3600
      default_ttl = 3600
      max_ttl     = 86400

      cache_key_policy {
        include_host         = true
        include_protocol     = true
        include_query_string = false
      }

      negative_caching  = true
      serve_while_stale = 86400
    }
  }

  log_config {
    enable      = true
    sample_rate = 0.1
  }
}

# HTTPS URL Map
resource "google_compute_url_map" "https" {
  name            = "${var.service_name}-url-map"
  default_service = google_compute_backend_service.app.id
}

# HTTP → HTTPS Redirect URL Map
resource "google_compute_url_map" "http_redirect" {
  name = "${var.service_name}-http-redirect"

  default_url_redirect {
    https_redirect         = true
    redirect_response_code = "MOVED_PERMANENTLY_DEFAULT"
    strip_query            = false
  }
}

# Target HTTPS Proxy
resource "google_compute_target_https_proxy" "app" {
  name             = "${var.service_name}-https-proxy"
  url_map          = google_compute_url_map.https.id
  ssl_certificates = [google_compute_managed_ssl_certificate.app_cert.id]
}

# Target HTTP Proxy (for redirect)
resource "google_compute_target_http_proxy" "redirect" {
  name    = "${var.service_name}-http-redirect-proxy"
  url_map = google_compute_url_map.http_redirect.id
}

# Global Forwarding Rule — HTTPS
resource "google_compute_global_forwarding_rule" "https" {
  name                  = "${var.service_name}-https-fwd"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  target                = google_compute_target_https_proxy.app.id
  ip_address            = google_compute_global_address.lb_ip.id
  port_range            = "443"
}

# Global Forwarding Rule — HTTP
resource "google_compute_global_forwarding_rule" "http_redirect" {
  name                  = "${var.service_name}-http-fwd"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  target                = google_compute_target_http_proxy.redirect.id
  ip_address            = google_compute_global_address.lb_ip.id
  port_range            = "80"
}

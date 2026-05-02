resource "google_compute_security_policy" "app_policy" {
  name        = "${var.service_name}-armor-${var.environment}"
  description = "Cloud Armor security policy for ${var.service_name}"

  # Rule 0: Allow Next.js image optimization
  rule {
    action   = "allow"
    priority = 100
    match {
      expr {
        expression = "request.path.contains('_next/image')"
      }
    }
    description = "Allow Next.js image optimization requests"
  }

  # Rule 1: XSS protection
  rule {
    action   = "deny(403)"
    priority = 1000
    match {
      expr {
        expression = "evaluatePreconfiguredExpr('xss-stable')"
      }
    }
    description = "XSS attack protection"
  }

  # Rule 2: SQL injection protection
  rule {
    action   = "deny(403)"
    priority = 1001
    match {
      expr {
        expression = "evaluatePreconfiguredExpr('sqli-stable')"
      }
    }
    description = "SQL injection attack protection"
  }

  # Rule 3: Local file inclusion protection
  rule {
    action   = "deny(403)"
    priority = 1002
    match {
      expr {
        expression = "evaluatePreconfiguredExpr('lfi-stable')"
      }
    }
    description = "Local file inclusion protection"
  }

  # Rule 4: Remote code execution protection
  rule {
    action   = "deny(403)"
    priority = 1003
    match {
      expr {
        expression = "evaluatePreconfiguredExpr('rce-stable')"
      }
    }
    description = "Remote code execution protection"
  }

  # Rule 5: Protocol attack protection
  rule {
    action   = "deny(403)"
    priority = 1004
    match {
      expr {
        expression = "evaluatePreconfiguredExpr('protocolattack-stable')"
      }
    }
    description = "Protocol attack protection"
  }

  # Rule 6: Scanner detection
  rule {
    action   = "deny(403)"
    priority = 1005
    match {
      expr {
        expression = "evaluatePreconfiguredExpr('scannerdetection-stable')"
      }
    }
    description = "Scanner and probe detection"
  }

  # Rule 7: Rate limiting (per IP, per region)
  rule {
    action   = "rate_based_ban"
    priority = 2000
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["*"]
      }
    }
    rate_limit_options {
      conform_action   = "allow"
      exceed_action    = "deny(429)"
      enforce_on_key   = "IP"
      ban_duration_sec = 600
      rate_limit_threshold {
        count        = 1000
        interval_sec = 60
      }
    }
    description = "Rate limit: 1000 req/min per IP, ban 10min if exceeded"
  }

  # Rule 8: Geo-blocking (CN/RU)
  rule {
    action   = "deny(403)"
    priority = 2100
    match {
      expr {
        expression = "origin.region_code == 'CN' || origin.region_code == 'RU'"
      }
    }
    preview     = !var.enable_geo_blocking
    description = "Geo-blocking: CN/RU regions"
  }

  # Default: allow all
  rule {
    action   = "allow"
    priority = 2147483647
    match {
      versioned_expr = "SRC_IPS_V1"
      config {
        src_ip_ranges = ["*"]
      }
    }
    description = "Default allow rule"
  }

  # Adaptive DDoS protection
  adaptive_protection_config {
    layer_7_ddos_defense_config {
      enable = true
    }
  }

  # Advanced options
  advanced_options_config {
    json_parsing = "STANDARD"
    log_level    = "VERBOSE"
  }
}

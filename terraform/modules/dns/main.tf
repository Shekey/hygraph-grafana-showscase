resource "google_dns_managed_zone" "app_zone" {
  count       = var.enable_dns ? 1 : 0
  name        = "${replace(var.domain, ".", "-")}-zone"
  dns_name    = "${var.domain}."
  description = "Managed zone for ${var.domain}"
}

resource "google_dns_record_set" "app_a" {
  count        = var.enable_dns ? 1 : 0
  name         = "${var.domain}."
  type         = "A"
  ttl          = 300
  managed_zone = google_dns_managed_zone.app_zone[0].name
  rrdatas      = [var.lb_ip_address]
}

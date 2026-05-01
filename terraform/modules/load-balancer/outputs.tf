output "lb_ip_address" {
  value       = google_compute_global_address.lb_ip.address
  description = "Static IP address of the load balancer"
}

output "ssl_cert_name" {
  value       = google_compute_managed_ssl_certificate.app_cert.name
  description = "SSL certificate name (check status in Cloud Console)"
}

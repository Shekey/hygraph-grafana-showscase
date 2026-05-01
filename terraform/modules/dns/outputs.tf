output "nameservers" {
  value       = try(google_dns_managed_zone.app_zone[0].name_servers, null)
  description = "DNS nameservers (if Cloud DNS is enabled)"
}

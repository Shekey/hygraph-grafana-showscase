output "lb_ip_address" {
  value       = module.load_balancer.lb_ip_address
  description = "Static IP of the Global HTTPS Load Balancer — point your DNS A record here"
}

output "cloud_run_url" {
  value       = module.cloud_run.service_url
  description = "Internal Cloud Run service URL (not publicly accessible)"
}

output "artifact_registry_url" {
  value       = module.artifact_registry.repository_url
  description = "Full Docker registry URL prefix"
}

output "workload_identity_provider" {
  value       = module.wif.provider_name
  description = "WIF provider resource name — set as GCP_WIF_PROVIDER secret in GitHub"
  sensitive   = true
}

output "cloud_build_deployer_sa_email" {
  value       = module.iam.cloud_build_deployer_sa_email
  description = "Service account email for GitHub Actions CI/CD"
}

output "ssl_cert_name" {
  value       = module.load_balancer.ssl_cert_name
  description = "SSL certificate name (check provisioning status in Cloud Console)"
}

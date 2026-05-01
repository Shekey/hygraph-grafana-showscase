output "cloud_build_deployer_sa_name" {
  value = google_service_account.cloud_build_deployer.name
}

output "cloud_build_deployer_sa_email" {
  value = google_service_account.cloud_build_deployer.email
}

output "nextjs_run_sa_name" {
  value = google_service_account.nextjs_run_sa.name
}

output "nextjs_run_sa_email" {
  value = google_service_account.nextjs_run_sa.email
}

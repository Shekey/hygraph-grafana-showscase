variable "environment" {
  type        = string
  description = "Environment name (prod or staging)"
}

variable "nextjs_run_sa_email" {
  type        = string
  description = "Email of the nextjs-run-sa service account"
}

variable "cloud_build_deployer_sa_email" {
  type        = string
  description = "Email of the cloud-build-deployer service account"
}

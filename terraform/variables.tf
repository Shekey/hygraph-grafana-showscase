variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "project_number" {
  type        = string
  description = "GCP Project Number (for WIF configuration)"
}

variable "region" {
  type        = string
  default     = "europe-west3"
  description = "GCP region (Frankfurt)"
}

variable "environment" {
  type        = string
  description = "Environment name (prod or staging)"
}

variable "service_name" {
  type        = string
  default     = "hygraph-showcase"
  description = "Cloud Run service name"
}

variable "app_port" {
  type        = number
  default     = 3000
  description = "Application port"
}

variable "domain" {
  type        = string
  description = "Domain for the Load Balancer (e.g., hygraph-showcase-prod.web.app)"
}

variable "enable_dns" {
  type        = bool
  default     = false
  description = "Enable Cloud DNS management (disable if using external DNS)"
}

variable "enable_cdn" {
  type        = bool
  default     = false
  description = "Enable Cloud CDN for caching static assets"
}

variable "enable_armor" {
  type        = bool
  default     = false
  description = "Enable Cloud Armor WAF protection"
}

variable "github_org" {
  type        = string
  default     = "Shekey"
  description = "GitHub organization"
}

variable "github_repo" {
  type        = string
  default     = "hygraph-grafana-showscase"
  description = "GitHub repository name"
}

variable "github_branches" {
  type        = list(string)
  default     = ["refs/heads/main"]
  description = "GitHub branches allowed to deploy"
}

variable "cloud_run_min_instances" {
  type        = number
  default     = 2
  description = "Cloud Run minimum instances"
}

variable "cloud_run_max_instances" {
  type        = number
  default     = 20
  description = "Cloud Run maximum instances"
}

variable "cloud_run_concurrency" {
  type        = number
  default     = 80
  description = "Cloud Run concurrency per instance"
}

variable "cloud_run_cpu" {
  type        = string
  default     = "1"
  description = "Cloud Run CPU allocation"
}

variable "cloud_run_memory" {
  type        = string
  default     = "512Mi"
  description = "Cloud Run memory allocation"
}

variable "cloud_run_timeout_seconds" {
  type        = number
  default     = 30
  description = "Cloud Run request timeout in seconds"
}

variable "alert_notification_email" {
  type        = string
  description = "Email for alert notifications"
}

variable "image_tag" {
  type        = string
  default     = "latest"
  description = "Container image tag (overridden by CI/CD)"
}

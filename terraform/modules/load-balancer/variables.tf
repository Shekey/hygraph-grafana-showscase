variable "region" {
  type        = string
  description = "GCP region"
}

variable "service_name" {
  type        = string
  description = "Service name for resource naming"
}

variable "environment" {
  type        = string
  description = "Environment (prod or staging)"
}

variable "domain" {
  type        = string
  description = "Domain for SSL certificate"
}

variable "cloud_run_service_name" {
  type        = string
  description = "Cloud Run service name"
}

variable "enable_cdn" {
  type        = bool
  default     = false
  description = "Enable Cloud CDN for caching"
}

variable "armor_policy_id" {
  type        = string
  default     = ""
  description = "Cloud Armor security policy ID"
}

variable "region" {
  type        = string
  description = "Primary GCP region (for backwards compatibility, not used for multi-region)"
}

variable "regions" {
  type        = list(string)
  description = "List of GCP regions for multi-region NEG setup"
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
  description = "Cloud Run service name (same across all regions)"
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

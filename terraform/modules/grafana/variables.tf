variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "region" {
  type        = string
  description = "GCP region for Grafana deployment"
}

variable "environment" {
  type        = string
  description = "Environment name (prod or staging)"
}

variable "service_name" {
  type        = string
  description = "Cloud Run service name for Grafana"
  default     = "grafana"
}

variable "image_uri" {
  type        = string
  description = "Container image URI (without tag)"
}

variable "image_tag" {
  type        = string
  description = "Container image tag"
  default     = "latest"
}

variable "grafana_run_sa_email" {
  type        = string
  description = "Email of the Grafana Cloud Run service account"
}

variable "secret_ids" {
  type        = map(string)
  description = "Map of secret names to secret IDs for environment variables"
  default     = {}
}


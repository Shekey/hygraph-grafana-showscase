variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "region" {
  type        = string
  description = "GCP region for OTel Collector deployment"
}

variable "environment" {
  type        = string
  description = "Environment name (prod or staging)"
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

variable "prometheus_url" {
  type        = string
  description = "Prometheus Cloud Run service URL"
}

variable "otel_collector_run_sa_email" {
  type        = string
  description = "Email of the OTel Collector Cloud Run service account"
}

variable "nextjs_run_sa_email" {
  type        = string
  description = "Email of the Next.js Cloud Run service account"
}

variable "vpc_connector" {
  type        = string
  description = "VPC Access Connector ID for internal Prometheus access"
  default     = null
}

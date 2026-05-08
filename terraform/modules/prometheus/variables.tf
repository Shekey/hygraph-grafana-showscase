variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "region" {
  type        = string
  description = "GCP region for Prometheus deployment"
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

variable "prometheus_run_sa_email" {
  type        = string
  description = "Email of the Prometheus Cloud Run service account"
}

variable "otel_collector_run_sa_email" {
  type        = string
  description = "Email of the OTel Collector Cloud Run service account"
}

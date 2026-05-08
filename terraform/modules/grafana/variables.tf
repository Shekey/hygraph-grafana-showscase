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

variable "prometheus_url" {
  type        = string
  description = "Prometheus Cloud Run service URL"
  default     = ""
}

variable "ingress_mode" {
  type        = string
  description = "Ingress traffic mode for Grafana Cloud Run"
  default     = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
}



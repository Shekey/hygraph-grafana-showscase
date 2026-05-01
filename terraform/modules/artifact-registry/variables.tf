variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "region" {
  type        = string
  description = "GCP region for the artifact registry"
}

variable "service_name" {
  type        = string
  description = "Service name for labeling"
}

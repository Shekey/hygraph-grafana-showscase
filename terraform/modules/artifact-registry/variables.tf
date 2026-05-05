variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "region" {
  type        = string
  description = "Primary GCP region (for backwards compatibility)"
}

variable "regions" {
  type        = list(string)
  description = "List of GCP regions for multi-region artifact registries"
}

variable "service_name" {
  type        = string
  description = "Service name for labeling"
}

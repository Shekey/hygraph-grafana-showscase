variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "region" {
  type        = string
  description = "GCP region"
}

variable "environment" {
  type        = string
  description = "Environment name (prod or staging)"
}

variable "service_name" {
  type        = string
  description = "Cloud Run service name"
}

variable "image_uri" {
  type        = string
  description = "Docker image URI (without tag)"
}

variable "image_tag" {
  type        = string
  default     = "latest"
  description = "Docker image tag"
}

variable "app_port" {
  type        = number
  default     = 8080
  description = "Application port"
}

variable "nextjs_run_sa_email" {
  type        = string
  description = "Service account email for Cloud Run"
}

variable "min_instances" {
  type        = number
  default     = 2
  description = "Minimum number of Cloud Run instances"
}

variable "max_instances" {
  type        = number
  default     = 20
  description = "Maximum number of Cloud Run instances"
}

variable "concurrency" {
  type        = number
  default     = 80
  description = "Concurrency per instance"
}

variable "cpu" {
  type        = string
  default     = "1"
  description = "CPU allocation"
}

variable "memory" {
  type        = string
  default     = "512Mi"
  description = "Memory allocation"
}

variable "timeout_seconds" {
  type        = number
  default     = 30
  description = "Request timeout in seconds"
}

variable "secret_ids" {
  type        = map(string)
  default     = {}
  description = "Map of secret names to secret IDs"
}

variable "depends_on_secrets" {
  type        = any
  default     = []
  description = "Depends on secrets being created first"
}

variable "ingress_mode" {
  type        = string
  default     = "INGRESS_TRAFFIC_ALL"
  description = "Cloud Run ingress mode (INGRESS_TRAFFIC_ALL or INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER)"
}

variable "hygraph_endpoint" {
  type        = string
  description = "Hygraph GraphQL API endpoint"
}

variable "sentry_dsn" {
  type        = string
  description = "Sentry DSN for error tracking"
}

variable "project_id" {
  type        = string
  description = "GCP Project ID"
}

variable "service_name" {
  type        = string
  description = "Service name for alert naming"
}

variable "domain" {
  type        = string
  description = "Domain being monitored"
}

variable "alert_email" {
  type        = string
  description = "Email address for alert notifications"
}

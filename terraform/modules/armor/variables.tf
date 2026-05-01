variable "service_name" {
  type        = string
  description = "Service name for policy naming"
}

variable "environment" {
  type        = string
  description = "Environment (prod or staging)"
}

variable "enable_geo_blocking" {
  type        = bool
  description = "Enable geo-blocking for CN/RU regions"
  default     = false
}

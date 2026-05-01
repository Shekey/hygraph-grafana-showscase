variable "enable_dns" {
  type        = bool
  default     = false
  description = "Enable Cloud DNS management"
}

variable "domain" {
  type        = string
  description = "Domain for DNS record"
}

variable "lb_ip_address" {
  type        = string
  description = "Load Balancer IP address"
}

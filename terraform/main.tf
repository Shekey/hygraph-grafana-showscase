module "artifact_registry" {
  source = "./modules/artifact-registry"

  project_id   = var.project_id
  region       = var.region
  regions      = var.regions
  service_name = var.service_name
}

module "iam" {
  source = "./modules/iam"

  project_id = var.project_id
}

module "wif" {
  source = "./modules/wif"

  project_id                   = var.project_id
  project_number               = var.project_number
  github_org                   = var.github_org
  github_repo                  = var.github_repo
  cloud_build_deployer_sa_name = module.iam.cloud_build_deployer_sa_name

  depends_on = [module.iam]
}

module "secrets" {
  source = "./modules/secrets"

  environment                   = var.environment
  nextjs_run_sa_email           = module.iam.nextjs_run_sa_email
  cloud_build_deployer_sa_email = module.iam.cloud_build_deployer_sa_email
  grafana_run_sa_email          = module.iam.grafana_run_sa_email

  depends_on = [module.iam]
}

resource "google_vpc_access_connector" "grafana" {
  count  = var.enable_load_balancer ? 1 : 0
  name   = "${var.environment}-grafana-connector"
  region = var.region

  ip_cidr_range = "10.8.0.0/28"
  network       = "default"

  min_instances = 2
  max_instances = 3
  machine_type  = "f1-micro"
}

module "cloud_run" {
  for_each = toset(var.regions)

  source = "./modules/cloud-run"

  project_id          = var.project_id
  region              = each.value
  environment         = var.environment
  service_name        = var.service_name
  image_uri           = "${module.artifact_registry.repository_urls[each.value]}/nextjs"
  image_tag           = var.image_tag
  app_port            = var.app_port
  nextjs_run_sa_email = module.iam.nextjs_run_sa_email
  min_instances       = var.cloud_run_min_instances
  max_instances       = var.cloud_run_max_instances
  concurrency         = var.cloud_run_concurrency
  cpu                 = var.cloud_run_cpu
  memory              = var.cloud_run_memory
  timeout_seconds     = var.cloud_run_timeout_seconds
  secret_ids          = module.secrets.secret_ids
  depends_on_secrets  = [module.secrets]
  ingress_mode        = var.ingress_mode
  hygraph_endpoint    = var.hygraph_endpoint
  otel_collector_url  = var.enable_load_balancer ? module.otel_collector[0].service_url : ""

  depends_on = [module.iam, module.secrets]
}

module "armor" {
  count  = var.enable_armor ? 1 : 0
  source = "./modules/armor"

  service_name        = var.service_name
  environment         = var.environment
  enable_geo_blocking = var.enable_geo_blocking
}

module "prometheus" {
  count  = var.enable_load_balancer ? 1 : 0
  source = "./modules/prometheus"

  project_id                  = var.project_id
  region                      = var.region
  environment                 = var.environment
  image_uri                   = "${module.artifact_registry.repository_urls[var.region]}/prometheus"
  image_tag                   = var.prometheus_image_tag
  prometheus_run_sa_email     = module.iam.prometheus_run_sa_email
  otel_collector_run_sa_email = module.iam.otel_collector_run_sa_email
  grafana_run_sa_email        = module.iam.grafana_run_sa_email
  otel_collector_url          = "http://otel-collector:8889"

  depends_on = [module.iam]
}

module "otel_collector" {
  count  = var.enable_load_balancer ? 1 : 0
  source = "./modules/otel-collector"

  project_id                  = var.project_id
  region                      = var.region
  environment                 = var.environment
  image_uri                   = "${module.artifact_registry.repository_urls[var.region]}/otel-collector"
  image_tag                   = var.otel_collector_image_tag
  prometheus_url              = var.enable_load_balancer ? module.prometheus[0].service_url : ""
  otel_collector_run_sa_email = module.iam.otel_collector_run_sa_email
  nextjs_run_sa_email         = module.iam.nextjs_run_sa_email

  depends_on = [module.prometheus]
}

module "load_balancer" {
  count  = var.enable_load_balancer ? 1 : 0
  source = "./modules/load-balancer"

  region                 = var.region
  regions                = var.regions
  service_name           = var.service_name
  environment            = var.environment
  domain                 = var.domain
  cloud_run_service_name = var.service_name
  enable_cdn             = var.enable_cdn
  armor_policy_id        = var.enable_armor ? module.armor[0].policy_id : ""

  depends_on = [module.cloud_run, module.armor]
}

module "monitoring" {
  count  = var.enable_load_balancer ? 1 : 0
  source = "./modules/monitoring"

  project_id   = var.project_id
  service_name = var.service_name
  domain       = var.domain
  alert_email  = var.alert_notification_email

  depends_on = [module.load_balancer]
}

module "dns" {
  count  = var.enable_load_balancer ? 1 : 0
  source = "./modules/dns"

  enable_dns    = var.enable_dns
  domain        = var.domain
  lb_ip_address = module.load_balancer[0].lb_ip_address

  depends_on = [module.load_balancer]
}

module "grafana" {
  count  = var.enable_load_balancer ? 1 : 0
  source = "./modules/grafana"

  project_id           = var.project_id
  region               = var.region
  environment          = var.environment
  service_name         = "grafana"
  image_uri            = "${module.artifact_registry.repository_urls[var.region]}/grafana"
  image_tag            = var.grafana_image_tag
  grafana_run_sa_email = module.iam.grafana_run_sa_email
  prometheus_url       = var.enable_load_balancer ? module.prometheus[0].service_url : ""
  ingress_mode         = "INGRESS_TRAFFIC_ALL"
  vpc_connector        = var.enable_load_balancer ? google_vpc_access_connector.grafana[0].id : null

  secret_ids = module.secrets.grafana_secret_ids

  depends_on = [module.iam, module.secrets, module.prometheus]
}

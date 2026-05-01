module "artifact_registry" {
  source = "./modules/artifact-registry"

  project_id   = var.project_id
  region       = var.region
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

  depends_on = [module.iam]
}

module "cloud_run" {
  source = "./modules/cloud-run"

  project_id          = var.project_id
  region              = var.region
  environment         = var.environment
  service_name        = var.service_name
  image_uri           = module.artifact_registry.repository_url
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

  depends_on = [module.iam, module.secrets]
}

module "armor" {
  source = "./modules/armor"

  service_name        = var.service_name
  environment         = var.environment
  enable_geo_blocking = var.enable_geo_blocking
}

module "load_balancer" {
  source = "./modules/load-balancer"

  region                 = var.region
  service_name           = var.service_name
  environment            = var.environment
  domain                 = var.domain
  cloud_run_service_name = module.cloud_run.service_name
  enable_cdn             = var.enable_cdn
  armor_policy_id        = var.enable_armor ? module.armor.policy_id : ""

  depends_on = [module.cloud_run, module.armor]
}

module "monitoring" {
  source = "./modules/monitoring"

  project_id   = var.project_id
  service_name = var.service_name
  domain       = var.domain
  alert_email  = var.alert_notification_email

  depends_on = [module.load_balancer]
}

module "dns" {
  source = "./modules/dns"

  enable_dns    = var.enable_dns
  domain        = var.domain
  lb_ip_address = module.load_balancer.lb_ip_address

  depends_on = [module.load_balancer]
}

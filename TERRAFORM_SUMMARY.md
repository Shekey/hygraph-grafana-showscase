# Terraform Infrastructure Summary

## What Was Created

Complete production-ready Terraform infrastructure for GCP with:

### ✅ Core Infrastructure
- **Cloud Run v2** — hygraph-showcase service, 2 min instances for prod
- **Global HTTPS Load Balancer** — static IP, SSL cert, HTTP→HTTPS redirect
- **Artifact Registry** — Docker image storage with cleanup policies
- **Serverless NEG** — networking between LB and Cloud Run
- **Secret Manager** — 6 application secrets with IAM access

### ✅ Security & WAF
- **Cloud Armor** — 6 pre-configured WAF rules (XSS, SQLi, LFI, RCE, protocol attacks)
- **Rate Limiting** — 1000 req/min per IP, 10min ban
- **Adaptive DDoS** — Layer 7 DDoS protection
- **Cloud IAM** — Workload Identity Federation (GitHub Actions auth)

### ✅ Caching & Performance
- **Cloud CDN** — enabled, caches static assets with origin headers
- **Cache policy** — 1 day default, 7 days max, serves stale during origin failure

### ✅ Monitoring & Alerting
- **Uptime Check** — every 60s on HTTPS endpoint
- **Alert Policies** — email alerts for uptime failure + 5xx errors
- **Cloud Logging** — all LB requests sampled at 10%

### ✅ CI/CD Integration
- **Workload Identity Federation** — GitHub Actions auth (no API keys needed)
- **Service Accounts** — `cloud-build-deployer` + `nextjs-run-sa`
- **GitHub Actions Workflow** — automatic `terraform plan/apply` on push

## Directory Structure

```
terraform/
├── bootstrap/              # One-time setup (GCS bucket + APIs)
├── modules/
│   ├── artifact-registry/  # Docker registry
│   ├── iam/                # Service accounts + roles
│   ├── wif/                # GitHub Actions authentication
│   ├── cloud-run/          # App deployment
│   ├── load-balancer/      # LB + NEG + CDN
│   ├── secrets/            # Secret Manager
│   ├── monitoring/         # Uptime checks + alerts
│   ├── armor/              # Cloud Armor WAF
│   └── dns/                # Optional Cloud DNS
├── environments/
│   ├── prod.tfvars         # 2 instances, CDN + Armor enabled
│   └── staging.tfvars      # 0 instances, CDN + Armor disabled
├── main.tf                 # Root module
├── variables.tf            # All variable declarations
├── outputs.tf              # Key outputs
├── versions.tf             # Terraform version constraints
├── backend.tf              # GCS remote state
└── README.md               # Complete documentation
```

## Configuration

### Production (prod.tfvars)
```
Domain: hygraph-showcase-prod.web.app (free Google domain)
Min Instances: 2 (no cold starts)
Max Instances: 20
CPU: 1 vCPU
Memory: 512MB
CDN: Enabled (pay per GB egress)
Armor: Enabled ($5/month)
```

### Staging (staging.tfvars)
```
Domain: hygraph-showcase-staging.web.app
Min Instances: 0 (scales to zero, cost savings)
Max Instances: 3
CPU: 1 vCPU
Memory: 256MB
CDN: Disabled
Armor: Disabled
```

## How to Use

### 1. Prerequisites
```bash
brew install terraform
gcloud auth application-default login
```

### 2. Bootstrap (one-time)
```bash
cd terraform/bootstrap
terraform init
terraform apply -var="project_id=project-712b5fcf-7483-48bb-bc3"
```

### 3. Initialize
```bash
cd ..
terraform init \
  -backend-config="bucket=project-712b5fcf-7483-48bb-bc3-terraform-state" \
  -backend-config="prefix=terraform/state/prod"
```

### 4. Plan & Apply
```bash
terraform plan -var-file="environments/prod.tfvars" -out=tfplan
terraform apply tfplan
```

### 5. Populate Secrets
```bash
gcloud secrets versions add prod-HYGRAPH_PREVIEW_TOKEN --data-file=<(echo -n "YOUR_TOKEN")
gcloud secrets versions add prod-HYGRAPH_PREVIEW_SECRET --data-file=<(echo -n "YOUR_SECRET")
# ... (6 total secrets)
```

### 6. Configure GitHub Actions
```bash
# Get WIF provider
terraform output workload_identity_provider

# Set as GitHub secrets:
# GCP_PROJECT_ID, GCP_PROJECT_NUMBER, GCP_WIF_PROVIDER, GCP_SA_EMAIL
```

### 7. Deploy
Push to `main` → GitHub Actions automatically builds and deploys.

## Cost Estimate (Monthly)

| Resource | Cost | Notes |
|----------|------|-------|
| Cloud Run (2×512MB) | $0.50 | Always running |
| Load Balancer | $18 | 2 forwarding rules |
| Cloud Armor | $5 | WAF rules |
| Cloud CDN | $0.12/GB | Example: 100GB = $12 |
| **Total** | **~$35-40** | With 100GB CDN traffic |

**Cost control:**
- Disable CDN: set `enable_cdn = false` (-$12/100GB)
- Disable Armor: set `enable_armor = false` (-$5)
- Reduce instances: use staging environment settings (-$10)

## Cloud Armor Rules

1. **XSS Protection** — blocks JavaScript injections
2. **SQL Injection** — blocks SQL metacharacters
3. **LFI/Path Traversal** — blocks `../../../etc/passwd`
4. **Remote Code Execution** — blocks command injection
5. **Protocol Attacks** — blocks malformed HTTP
6. **Scanner Detection** — blocks vulnerability scanners
7. **Rate Limiting** — 1000 req/min per IP
8. **Adaptive DDoS** — automatic Layer 7 protection

## Cloud CDN

- **Cache mode:** `USE_ORIGIN_HEADERS` (respects origin cache headers)
- **Default TTL:** 1 hour (3600s)
- **Max TTL:** 7 days (604800s)
- **Negative caching:** 60 seconds (cache 404s)
- **Serve while stale:** 1 day (if origin down, serve cached old content)

## GitHub Actions Integration

When you push to `main`:
1. `.github/workflows/google-cloud-run.yml` builds Docker image
2. Pushes to Artifact Registry
3. Deploys to Cloud Run
4. Posts preview URL comment

When `terraform/` files change:
1. `.github/workflows/terraform.yml` runs `terraform plan`
2. Comments plan in PR
3. Auto-applies on push to `main`

## Monitoring

### Check service health
```bash
gcloud run services describe hygraph-showcase --region europe-west3
```

### View Cloud Run logs
```bash
gcloud run logs read hygraph-showcase --limit 50 --follow
```

### View Cloud Armor logs
```bash
gcloud logging read "resource.type=http_load_balancer" --limit 100
```

### View LB metrics
```bash
gcloud monitoring time-series list --filter='metric.type="loadbalancing.googleapis.com/https/request_count"'
```

## Troubleshooting

### "terraform: command not found"
Install: `brew install terraform`

### "Certificate stuck on PROVISIONING"
Wait 15-30 min. Check:
```bash
gcloud compute ssl-certificates describe hygraph-showcase-cert-prod
```

### "502 Bad Gateway from LB"
NEG health check takes 1-2 min:
```bash
gcloud compute backend-services get-health hygraph-showcase-backend
```

### "Cloud Run pods not starting"
Check logs:
```bash
gcloud run logs read hygraph-showcase --limit 50
```

Usually due to missing secrets. Verify:
```bash
gcloud secrets list
```

### "Cloud Armor blocking legitimate traffic"
Check logs and disable specific rules temporarily in `modules/armor/main.tf`.

## Files to Keep in Git

✅ Commit to git:
- `terraform/versions.tf`
- `terraform/providers.tf`
- `terraform/variables.tf`
- `terraform/main.tf`
- `terraform/outputs.tf`
- `terraform/backend.tf`
- `terraform/modules/` (all)
- `terraform/environments/prod.tfvars`
- `terraform/environments/staging.tfvars`
- `terraform/README.md`
- `.github/workflows/terraform.yml`
- `TERRAFORM_BOOTSTRAP.md`
- `TERRAFORM_SUMMARY.md`

❌ Do NOT commit:
- `terraform/.terraform/` (git ignored)
- `terraform/.terraform.lock.hcl` (git ignored but can commit)
- `*.tfplan` files
- Personal `.tfvars` files with real secrets

## Next Steps

1. Follow `TERRAFORM_BOOTSTRAP.md` for step-by-step setup
2. Verify all 30+ resources are created: `terraform show | grep "resource"`
3. Test image deployment via GitHub Actions
4. Monitor uptime checks and alerts
5. Adjust cache/rate limit policies based on traffic patterns

## Support

- Terraform docs: https://www.terraform.io/docs
- Google provider: https://registry.terraform.io/providers/hashicorp/google/latest/docs
- Cloud Run docs: https://cloud.google.com/run/docs
- Cloud Armor docs: https://cloud.google.com/armor/docs

# Terraform Infrastructure for hygraph-showcase

This directory contains the Terraform configuration for deploying the hygraph-showcase Next.js application to Google Cloud Platform.

## Quick Start

### Prerequisites
- Terraform >= 1.8
- gcloud CLI installed and authenticated
- GCP project ID: `project-712b5fcf-7483-48bb-bc3`
- GCP project number: `313055095232`

### 1. Bootstrap (One-Time)

Create the GCS bucket for Terraform state:

```bash
cd bootstrap
terraform init
terraform apply -var="project_id=project-712b5fcf-7483-48bb-bc3"
cd ..
```

This creates:
- GCS bucket: `project-712b5fcf-7483-48bb-bc3-terraform-state`
- Enables all required GCP APIs

### 2. Initialize Terraform

```bash
terraform init \
  -backend-config="bucket=project-712b5fcf-7483-48bb-bc3-terraform-state" \
  -backend-config="prefix=terraform/state/prod"
```

### 3. Plan Infrastructure

```bash
terraform plan -var-file="environments/prod.tfvars" -out=tfplan
```

### 4. Apply Infrastructure

```bash
terraform apply tfplan
```

## Configuration

### Environment Variables

- **prod.tfvars**: Production environment with 2 min instances, CDN + Armor enabled
- **staging.tfvars**: Staging environment with 0 min instances, CDN + Armor disabled

Key variables:
- `domain`: Google Cloud Run free domain (e.g., `hygraph-showcase-prod.web.app`)
- `enable_cdn`: Cloud CDN for caching static assets (charges per GB egress)
- `enable_armor`: Cloud Armor WAF with pre-configured WAF rules ($5/month)
- `cloud_run_min_instances`: Minimum instances (2 for prod, 0 for staging)

### Secrets

After `terraform apply`, populate secrets in Google Cloud Secret Manager:

```bash
gcloud secrets versions add prod-HYGRAPH_PREVIEW_TOKEN --data-file=<(echo -n "YOUR_TOKEN")
gcloud secrets versions add prod-HYGRAPH_PREVIEW_SECRET --data-file=<(echo -n "YOUR_SECRET")
gcloud secrets versions add prod-NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT --data-file=<(echo -n "YOUR_ENDPOINT")
gcloud secrets versions add prod-NEXT_PUBLIC_SENTRY_DSN --data-file=<(echo -n "YOUR_DSN")
gcloud secrets versions add prod-NEXT_PUBLIC_SITE_URL --data-file=<(echo -n "https://hygraph-showcase-prod.web.app")
gcloud secrets versions add prod-SENTRY_AUTH_TOKEN --data-file=<(echo -n "YOUR_AUTH_TOKEN")
```

## Outputs

After `terraform apply`, view outputs:

```bash
terraform output
```

Key outputs:
- `lb_ip_address`: Static IP for the load balancer (point DNS A record here)
- `workload_identity_provider`: WIF provider name (update GitHub secrets)
- `cloud_build_deployer_sa_email`: Service account for CI/CD

## GitHub Actions Integration

1. Set GitHub secrets:
   - `GCP_PROJECT_ID`: `project-712b5fcf-7483-48bb-bc3`
   - `GCP_PROJECT_NUMBER`: `313055095232`
   - `GCP_WIF_PROVIDER`: Output from `terraform output workload_identity_provider`
   - `GCP_SA_EMAIL`: Output from `terraform output cloud_build_deployer_sa_email`

2. Create `.github/workflows/terraform.yml` to automatically apply infrastructure changes

## Structure

```
terraform/
├── bootstrap/              # One-time bootstrap (GCS bucket + APIs)
├── modules/
│   ├── artifact-registry/  # Docker image registry
│   ├── iam/                # Service accounts and IAM roles
│   ├── wif/                # Workload Identity Federation
│   ├── cloud-run/          # Cloud Run v2 service
│   ├── load-balancer/      # HTTPS Load Balancer + CDN
│   ├── secrets/            # Secret Manager
│   ├── monitoring/         # Uptime checks and alerts
│   └── dns/                # Optional DNS (disabled by default)
├── environments/           # Environment-specific variables
│   ├── prod.tfvars
│   └── staging.tfvars
└── main.tf                 # Root module
```

## Costs (with CDN + Cloud Armor)

Estimated monthly costs (prod):
- Cloud Run (2 instances × 512MB): ~$0.50
- Load Balancer (forwarding rules): ~$18
- Cloud Armor: ~$5/month
- Cloud CDN: ~$0.12 per GB egress (Europe)
  - Example: 100GB/month = ~$12
- **Total: ~$35-40/month** (with 100GB CDN traffic)

**Optional**: Disable `enable_cdn` or `enable_armor` in `.tfvars` to reduce costs

## Cloud Armor Rules (when enabled)

The security policy includes:
- **XSS Protection** — blocks `<script>`, JavaScript injections
- **SQL Injection** — blocks SQL metacharacters in requests
- **LFI Protection** — blocks path traversal attacks (`../../../etc/passwd`)
- **RCE Protection** — blocks remote code execution patterns
- **Protocol Attacks** — blocks malformed HTTP, encoding attacks
- **Scanner Detection** — blocks vulnerability scanners
- **Rate Limiting** — 1000 req/min per IP, 10min ban if exceeded
- **Adaptive DDoS** — Layer 7 DDoS mitigation (learns over time)

Check Cloud Armor logs:
```bash
gcloud logging read "resource.type=http_load_balancer" --limit 50 --format=json | jq '.[] | .jsonPayload'
```

## Troubleshooting

### Certificate not provisioning
SSL certificates take 15-30 minutes to provision after DNS is configured. Check status:

```bash
terraform output ssl_cert_status
```

### Cloud Run instances not starting
Check Cloud Run logs:

```bash
gcloud run logs read hygraph-showcase --limit 50
```

### Secret access denied
Ensure Cloud Run service account has `secretmanager.secretAccessor` role (should be automatic via Terraform).

### Cloud Armor blocking legitimate traffic
Check Cloud Armor logs and rules:

```bash
# View last 100 blocked requests
gcloud logging read "resource.type=http_load_balancer AND httpRequest.status>=400" --limit 100 --format=json
```

If false positives, edit policy in `modules/armor/main.tf` or disable specific rules in Cloud Console.

## Cleanup

To destroy all resources (careful!):

```bash
terraform destroy -var-file="environments/prod.tfvars"
```

## References

- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Terraform Google Provider](https://registry.terraform.io/providers/hashicorp/google/latest/docs)
- [Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation)

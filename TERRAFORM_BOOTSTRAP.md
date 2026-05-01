# Terraform Bootstrap Guide

Slijedi upustva za prvi put pokretanje Terraform infrastrukture.

## Prerequisites

1. **Terraform** >= 1.8
   ```bash
   brew install terraform
   terraform version
   ```

2. **Google Cloud SDK**
   ```bash
   brew install google-cloud-sdk
   gcloud --version
   ```

3. **Autentifikacija**
   ```bash
   gcloud auth application-default login
   gcloud auth configure-docker europe-west3-docker.pkg.dev
   ```

## Step 1: Bootstrap (GCS State Bucket)

Run this ONCE to create the Terraform state bucket:

```bash
cd terraform/bootstrap
terraform init
terraform apply -var="project_id=project-712b5fcf-7483-48bb-bc3"
```

Output:
```
Apply complete! Resources: 2 added, 0 changed, 0 destroyed.

Outputs:

tf_state_bucket_name = "project-712b5fcf-7483-48bb-bc3-terraform-state"
tf_state_bucket_path = "gs://project-712b5fcf-7483-48bb-bc3-terraform-state/terraform/state"
```

Potvrdi da je bucket kreiran:
```bash
gsutil ls -b gs://project-712b5fcf-7483-48bb-bc3-terraform-state
```

## Step 2: Initialize Main Terraform

```bash
cd ../..  # Back to terraform/ root
terraform init \
  -backend-config="bucket=project-712b5fcf-7483-48bb-bc3-terraform-state" \
  -backend-config="prefix=terraform/state/prod"
```

## Step 3: Plan Infrastructure

```bash
terraform plan -var-file="environments/prod.tfvars" -out=tfplan
```

Provjeri output — trebalo bi da prikaže ~30-40 resursa koji će biti kreirani.

## Step 4: Apply Infrastructure

```bash
terraform apply tfplan
```

**IMPORTANT**: Ovo će stvoriti:
- Cloud Run service (internal only, accessible samo kroz Load Balancer)
- Global HTTPS Load Balancer
- Managed SSL Certificate
- Service Accounts + IAM roles
- Secret Manager secrets (prazne, trebaju biti popunjene)
- Monitoring + Alert policies

Čeka će se ~5-10 minuta. Sačekaj do kraja prije nego što nastaviš.

## Step 5: Populate Secrets

Kada je `terraform apply` završen, pokreni:

```bash
gcloud secrets versions add prod-HYGRAPH_PREVIEW_TOKEN --data-file=<(echo -n "TVOJ_TOKEN_OVDJE")
gcloud secrets versions add prod-HYGRAPH_PREVIEW_SECRET --data-file=<(echo -n "TVOJA_TAJNA_OVDJE")
gcloud secrets versions add prod-NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT --data-file=<(echo -n "https://api.hygraph.com/...")
gcloud secrets versions add prod-NEXT_PUBLIC_SENTRY_DSN --data-file=<(echo -n "https://xxxxx@xxxxx.ingest.sentry.io/xxxxx")
gcloud secrets versions add prod-NEXT_PUBLIC_SITE_URL --data-file=<(echo -n "https://hygraph-showcase-prod.web.app")
gcloud secrets versions add prod-SENTRY_AUTH_TOKEN --data-file=<(echo -n "sntrysXXXXXXXXXXXXXXXX")
```

Zamijeni vrijednosti sa stvarnim tokensima iz Hygraph, Sentry, itd.

## Step 6: Configure Custom Domain (OPTIONAL)

Domene `*.web.app` su besplatne i automatski dolaze sa SSL.

Ako želiš custom domenu (npr. `www.example.com`):
1. Postavi `domain = "www.example.com"` u `prod.tfvars`
2. Postavi `enable_dns = true` ako želiš Cloud DNS
3. Pokreni `terraform apply` ponovo
4. Sačekaj 15-30 minuta za SSL cert provisioning
5. Point A DNS record na `lb_ip_address` output

## Step 7: Configure GitHub Actions Secrets

Pokreni:
```bash
terraform output
```

Kopiraj outputs i postavi kao GitHub secrets (repo Settings → Secrets and variables → Actions):

```
GCP_PROJECT_ID = project-712b5fcf-7483-48bb-bc3
GCP_PROJECT_NUMBER = 313055095232
GCP_WIF_PROVIDER = (copy iz terraform output "workload_identity_provider")
GCP_SA_EMAIL = (copy iz terraform output "cloud_build_deployer_sa_email")
```

## Step 8: Deploy Image to Cloud Run

Kada su GitHub secrets postavljeni, push na `main` branch će triggerati `.github/workflows/google-cloud-run.yml` koji će:
1. Buildati Docker image
2. Pushati na Artifact Registry
3. Deployati na Cloud Run
4. Post kommenatar na PR sa preview URL-om

## Verification Checklist

```bash
# Check Cloud Run service
gcloud run services describe hygraph-showcase --region europe-west3

# Check Load Balancer IP
terraform output lb_ip_address

# Check SSL cert status
terraform output ssl_cert_status

# Test HTTPS (čeka se 15-30 min za cert provisioning)
curl -v https://hygraph-showcase-prod.web.app/

# Check Cloud Run is NOT publicly accessible
curl -v https://hygraph-showcase-xxxxx-xx.a.run.app/
# Should return 403 (forbidden)

# Check monitoring alerts are set up
gcloud monitoring alert-policies list
```

## Troubleshooting

### Certificate stuck on PROVISIONING

SSL certificates mogu trebati do 30 minuta. Ako je duže:
```bash
# Check cert status
gcloud compute ssl-certificates describe hygraph-showcase-cert-prod

# If needed, delete and recreate (Terraform will do this)
terraform taint module.load_balancer.google_compute_managed_ssl_certificate.app_cert
terraform apply -var-file="environments/prod.tfvars"
```

### Secrets not accessible

Cloud Run trebam biti u RUNNING state prije nego što se secrets mogu pristupiti:
```bash
gcloud run services describe hygraph-showcase --region europe-west3 | grep -A 10 "Status:"
```

### Load Balancer returns 502

NEG (Network Endpoint Group) trebam malo vremena da bude healthy:
```bash
# Check backend health
gcloud compute backend-services get-health hygraph-showcase-backend

# Takes 1-2 minuta da budu HEALTHY
```

### Need to redeploy

Ako trebam redeployirati bez čekanja GitHub Actions:
```bash
gcloud run deploy hygraph-showcase \
  --image europe-west3-docker.pkg.dev/project-712b5fcf-7483-48bb-bc3/hygraph-showcase/nextjs:LATEST_SHA \
  --region europe-west3 \
  --service-account nextjs-run-sa@project-712b5fcf-7483-48bb-bc3.iam.gserviceaccount.com
```

## Useful Commands

```bash
# View terraform state
terraform show

# See what will change
terraform plan -var-file="environments/prod.tfvars"

# Destroy everything (CAREFUL!)
terraform destroy -var-file="environments/prod.tfvars"

# View real-time Cloud Run logs
gcloud run logs read hygraph-showcase --limit 50 --follow

# SSH into local container (test before pushing)
docker run -it europe-west3-docker.pkg.dev/project-712b5fcf-7483-48bb-bc3/hygraph-showcase/nextjs:latest bash
```

## Next Steps

1. ✅ Bootstrap Terraform state bucket
2. ✅ Create infrastructure
3. ✅ Populate secrets
4. ✅ Configure GitHub secrets
5. Push code to `main` → GitHub Actions deploys automatically

Need help? Check `terraform/README.md` or run `terraform output` to see all created resources.

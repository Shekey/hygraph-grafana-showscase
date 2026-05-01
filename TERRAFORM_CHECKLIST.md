# Terraform Setup Checklist

## Pre-Setup
- [ ] Install Terraform: `brew install terraform && terraform version`
- [ ] Authenticate gcloud: `gcloud auth application-default login`
- [ ] Configure Docker auth: `gcloud auth configure-docker europe-west3-docker.pkg.dev`
- [ ] Have Hygraph, Sentry, and other API tokens ready

## Step 1: Bootstrap
- [ ] `cd terraform/bootstrap`
- [ ] `terraform init`
- [ ] `terraform apply -var="project_id=project-712b5fcf-7483-48bb-bc3"`
- [ ] Verify bucket created: `gsutil ls -b gs://project-712b5fcf-7483-48bb-bc3-terraform-state`

## Step 2: Main Terraform Init
- [ ] `cd ..` (back to terraform/)
- [ ] `terraform init -backend-config="bucket=project-712b5fcf-7483-48bb-bc3-terraform-state" -backend-config="prefix=terraform/state/prod"`
- [ ] Verify state bucket is connected

## Step 3: Plan
- [ ] `terraform plan -var-file="environments/prod.tfvars" -out=tfplan`
- [ ] Review changes (should be ~30-40 resources)
- [ ] Confirm no errors

## Step 4: Apply
- [ ] `terraform apply tfplan`
- [ ] ⏱️ Wait 5-10 minutes for completion
- [ ] Verify success: "Apply complete!"

## Step 5: Populate Secrets
```bash
# Get tokens from Hygraph console
gcloud secrets versions add prod-HYGRAPH_PREVIEW_TOKEN --data-file=<(echo -n "hcb_...")

# Get tokens from Sentry
gcloud secrets versions add prod-NEXT_PUBLIC_SENTRY_DSN --data-file=<(echo -n "https://xxxxx@xxxxx.ingest.sentry.io/xxxxx")
gcloud secrets versions add prod-SENTRY_AUTH_TOKEN --data-file=<(echo -n "sntrysXXXXXXX")

# Hygraph content endpoint
gcloud secrets versions add prod-NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT --data-file=<(echo -n "https://api.hygraph.com/...")

# Other secrets
gcloud secrets versions add prod-HYGRAPH_PREVIEW_SECRET --data-file=<(echo -n "...")
gcloud secrets versions add prod-NEXT_PUBLIC_SITE_URL --data-file=<(echo -n "https://hygraph-showcase-prod.web.app")
```

- [ ] All 6 secrets created: `gcloud secrets list | grep prod-`

## Step 6: Get Outputs
```bash
terraform output
```

Copy and save:
- [ ] `lb_ip_address` — static IP
- [ ] `workload_identity_provider` — WIF provider
- [ ] `cloud_build_deployer_sa_email` — CI/CD SA email

## Step 7: GitHub Actions Setup
Go to repo Settings → Secrets and variables → Actions → New repository secret

Add these secrets:
- [ ] `GCP_PROJECT_ID` = `project-712b5fcf-7483-48bb-bc3`
- [ ] `GCP_PROJECT_NUMBER` = `313055095232`
- [ ] `GCP_WIF_PROVIDER` = (from terraform output)
- [ ] `GCP_SA_EMAIL` = (from terraform output)

## Step 8: Verify Infrastructure

### Cloud Run
```bash
gcloud run services describe hygraph-showcase --region europe-west3
```
- [ ] Status: ACTIVE
- [ ] Ingress: INTERNAL_LOAD_BALANCER
- [ ] Min instances: 2

### Load Balancer
```bash
terraform output lb_ip_address
```
- [ ] Static IP assigned
- [ ] Copy for DNS setup

### SSL Certificate
```bash
gcloud compute ssl-certificates describe hygraph-showcase-cert-prod
```
- [ ] Status: ACTIVE (or PROVISIONING, wait 15-30 min)

### Service Accounts
```bash
gcloud iam service-accounts list
```
- [ ] `cloud-build-deployer@...` exists
- [ ] `nextjs-run-sa@...` exists

### Secrets
```bash
gcloud secrets list | grep prod-
```
- [ ] 6 secrets listed: HYGRAPH_PREVIEW_TOKEN, etc.

### Cloud Armor
```bash
gcloud compute security-policies list
```
- [ ] `hygraph-showcase-armor-prod` exists

### Cloud CDN
```bash
gcloud compute backend-services describe hygraph-showcase-backend
```
- [ ] `cdnPolicy.cacheMode: USE_ORIGIN_HEADERS`

## Step 9: Test Load Balancer
```bash
# Wait for certificate to provision (15-30 min)
curl -v https://hygraph-showcase-prod.web.app/
```
- [ ] Returns 200 OK
- [ ] SSL cert valid
- [ ] Redirects HTTP to HTTPS work

### Test Cloud Run isolation
```bash
curl -v https://hygraph-showcase-xxxx-xx.a.run.app/
```
- [ ] Returns 403 (forbidden) — good! Not publicly accessible

## Step 10: Deploy First Image
- [ ] Push code to `main` branch
- [ ] Wait for GitHub Actions to complete
- [ ] Verify Cloud Run revision updated: `gcloud run services describe hygraph-showcase --region europe-west3 | grep -A 5 "revisions"`

## Step 11: Monitor Alerts
- [ ] Check email for confirmation of alert policy
- [ ] Verify alert channel working
- [ ] Create a test request to verify Cloud Armor logging

## Step 12: Documentation
- [ ] Read `terraform/README.md`
- [ ] Read `TERRAFORM_BOOTSTRAP.md`
- [ ] Read `TERRAFORM_SUMMARY.md`
- [ ] Bookmark Cloud Console links:
  - [ ] Cloud Run: https://console.cloud.google.com/run?region=europe-west3
  - [ ] Load Balancer: https://console.cloud.google.com/net-services/loadbalancing/loadbalancers
  - [ ] Cloud Armor: https://console.cloud.google.com/security/cloud-armor
  - [ ] Monitoring: https://console.cloud.google.com/monitoring

## Troubleshooting

### If Terraform apply fails:
1. Check error message carefully
2. Verify GCP credentials: `gcloud auth list`
3. Ensure all APIs are enabled: `gcloud services list --enabled`
4. Try again: `terraform apply tfplan`

### If SSL cert doesn't provision:
1. Wait 15-30 minutes
2. Check status: `gcloud compute ssl-certificates describe hygraph-showcase-cert-prod`
3. If stuck: `terraform taint module.load_balancer.google_compute_managed_ssl_certificate.app_cert && terraform apply -var-file="environments/prod.tfvars"`

### If Cloud Run instances don't start:
1. Check logs: `gcloud run logs read hygraph-showcase --limit 50`
2. Usually missing secrets — verify all 6 are populated
3. Check service account permissions: `gcloud projects get-iam-policy project-712b5fcf-7483-48bb-bc3 --flatten="bindings[].members" | grep nextjs-run-sa`

### If LB returns 502:
1. NEG health check takes 1-2 min to pass
2. Check backend health: `gcloud compute backend-services get-health hygraph-showcase-backend`
3. Wait for HEALTHY status

## Done! ✅

Your production infrastructure is ready:
- ✅ Terraform manages all resources
- ✅ Cloud Run auto-scales
- ✅ Load Balancer distributes traffic
- ✅ Cloud Armor protects from attacks
- ✅ Cloud CDN speeds up static content
- ✅ GitHub Actions auto-deploys
- ✅ Monitoring tracks uptime + errors
- ✅ Secrets stored securely

Next: Deploy your app and monitor the metrics!

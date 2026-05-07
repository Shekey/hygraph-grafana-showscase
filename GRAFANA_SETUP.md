# Grafana Terraform Setup — Next Steps

Your Terraform module for Grafana is now ready. Here's what to do next:

## 1. Build the Grafana Docker Image

The Dockerfile now includes provisioning files. Build and push it to Artifact Registry:

```bash
# Build the image
docker build -t grafana:latest -f grafana/Dockerfile .

# Tag it for Artifact Registry
docker tag grafana:latest europe-west3-docker.pkg.dev/project-712b5fcf-7483-48bb-bc3/hygraph-showcase/grafana:latest

# Push to AR
docker push europe-west3-docker.pkg.dev/project-712b5fcf-7483-48bb-bc3/hygraph-showcase/grafana:latest
```

Or use Cloud Build:
```bash
gcloud builds submit \
  --tag europe-west3-docker.pkg.dev/project-712b5fcf-7483-48bb-bc3/hygraph-showcase/grafana:latest \
  --substitutions=_IMAGE_TAG=latest
```

## 2. Set the Grafana Admin Password Secret

Before running terraform apply, set the secret:

```bash
echo -n "your-secure-password" | gcloud secrets create prod-GF_SECURITY_ADMIN_PASSWORD --data-file=-
```

Or update if it exists:
```bash
echo -n "your-secure-password" | gcloud secrets versions add prod-GF_SECURITY_ADMIN_PASSWORD --data-file=-
```

## 3. Plan and Apply Terraform

```bash
cd terraform

# View what will be created
terraform plan

# Apply it
terraform apply
```

This will:
- Create `grafana-run-sa` service account with proper roles
- Create `prod-GF_SECURITY_ADMIN_PASSWORD` secret in Secret Manager
- Create a GCS bucket for Grafana data persistence
- Deploy Grafana Cloud Run service

## 4. Verify Deployment

After terraform apply, get the Grafana URL:

```bash
terraform output grafana_service_url
# or
gcloud run services describe grafana --region=europe-west3 --format='value(status.url)'
```

Visit the URL in your browser → Login with username `admin` and your configured password.

## 5. Test Auto-Provisioning

Once logged in:
- Check **Dashboards** → should see `request-overview.json` auto-loaded
- Check **Data Sources** → should see both:
  - **Prometheus (GMP)** pointing to Google Managed Prometheus
  - **Cloud Logging** with GCE authentication

## 6. Test Persistence

Make a change in Grafana UI (e.g., add a note to a dashboard, create a user).

Then restart the Cloud Run service:
```bash
gcloud run services update-traffic grafana --to-latest --region=europe-west3
```

Or via GCP Console → Cloud Run → grafana → Force a new deployment.

After restart, your changes should still be there → **persistence works!**

## 7. View Your App Logs in Grafana

In Grafana:
1. Go to **Explore** (compass icon)
2. Select **Cloud Logging** datasource
3. Run this query:
   ```
   resource.type="cloud_run_revision"
   resource.labels.service_name="hygraph-showcase"
   ```

You should see logs from your Next.js app!

## Notes

- **GF_SECURITY_ADMIN_PASSWORD** is automatically injected from Secret Manager
- **GCP_PROJECT_ID** is resolved via the entrypoint script before Grafana starts
- **Provisioning files** (datasources + dashboards) are baked into the Docker image
- **Data persistence** is stored in a GCS bucket mounted at `/var/lib/grafana`

## Troubleshooting

### Grafana won't start
Check Cloud Run logs:
```bash
gcloud run services logs read grafana --region=europe-west3 --limit=50
```

### Datasources not showing
- Verify the service account has `roles/monitoring.viewer` role
- Check GCP_PROJECT_ID is correct
- Ensure `datasources-prod.yml` is in `/etc/grafana/provisioning/datasources/`

### Dashboards not loading
- Verify `grafana/dashboards/*.json` files exist
- Check Cloud Run logs for provisioning errors

### Cloud Logging datasource auth fails
Verify the service account has these roles:
```bash
gcloud projects get-iam-policy project-712b5fcf-7483-48bb-bc3 \
  --flatten="bindings[].members" \
  --filter="bindings.role:monitoring.*"
```

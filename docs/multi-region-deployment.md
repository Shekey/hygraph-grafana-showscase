# Multi-Region Deployment Architecture

## Overview

This project supports **multi-region Cloud Run deployments** for production workloads, enabling low-latency access across multiple continents and improved resilience through geographic redundancy.

## Regions

Production deploys to four regions:

| Region | Location | Primary Use Case |
|---|---|---|
| `europe-west3` | Frankfurt, Germany | Primary, European users |
| `us-central1` | Iowa, USA | North American users |
| `asia-southeast1` | Singapore | APAC users |
| `australia-southeast1` | Sydney, Australia | Oceania/APAC users |

## Architecture

### Components

1. **Cloud Run Services** — One service per region, named `hygraph-showcase-prod`
   - Each region runs the same Docker image
   - Independent auto-scaling per region
   - Service account: `nextjs-run-sa@PROJECT_ID.iam.gserviceaccount.com`

2. **Global HTTPS Load Balancer** — Single global LB with multi-region backend
   - Static IP: `hygraph-showcase-prod-lb-ip`
   - Routes traffic to the nearest healthy region
   - SSL certificate auto-provisioned via Cloud Managed Certificates

3. **Serverless Network Endpoint Groups (NEGs)** — One NEG per region
   - Each NEG (`hygraph-showcase-prod-neg-{region}`) connects the LB to the regional Cloud Run service
   - GCP automatically routes to the nearest healthy NEG

4. **Backend Service** — Aggregates all regional NEGs
   - Name: `hygraph-showcase-prod-backend`
   - Protocol: HTTPS
   - Attached NEGs: 4 (one per region)

5. **Cloud CDN** — Global caching layer
   - Caches responses at Google's edge POPs worldwide
   - Cache policy: `USE_ORIGIN_HEADERS`
   - Client TTL: 1 hour, max TTL: 1 year

6. **Cloud Armor WAF** — DDoS and attack mitigation
   - XSS, SQLi, LFI, RCE, protocol attack rules
   - Rate limiting: 1000 req/min per IP
   - Geo-blocking: China (CN), Russia (RU)

7. **Cloud DNS** — Global domain management
   - Managed zone: DNS records for the primary domain
   - A record points to the LB's global static IP

## Traffic Flow

1. User requests `hygraph-showcase-prod.shekeyweb.com`
2. Cloud DNS resolves to the global LB's static IP
3. LB health-checks all regional Cloud Run services
4. LB routes to the nearest healthy region (automatic anycast routing)
5. Cloud CDN intercepts responses and caches at the nearest edge POP
6. Subsequent requests from the same region are served from CDN cache

## Deployment

### Automatic (GitHub Actions)

On push to `main`:
1. Docker image built and pushed to `europe-west3-docker.pkg.dev/...`
2. Image deployed to all four regions simultaneously
3. Service configurations (service account, ingress mode) updated across all regions
4. LB health checks verify all backends are healthy
5. CDN cache purged to invalidate old content

### Manual (Terraform)

```bash
# Deploy infrastructure for all regions
cd terraform
terraform init -backend-config=bucket=<project-id>-terraform-state
terraform plan -var-file=environments/prod.tfvars
terraform apply -var-file=environments/prod.tfvars
```

**Note:** To disable multi-region and revert to single-region, change `regions` in `prod.tfvars`:
```hcl
# Multi-region (default)
regions = ["europe-west3", "us-central1", "asia-southeast1", "australia-southeast1"]

# Single region (for testing)
regions = ["europe-west3"]
```

Terraform will automatically destroy Cloud Run services and NEGs in disabled regions.

## Artifact Registry

The Docker image is stored in `europe-west3-docker.pkg.dev/<project>/hygraph-showcase/nextjs:<sha>`.

Cloud Run in other regions pulls the image cross-region. This is acceptable for this use case because:
- Docker image pull happens once per revision during deployment
- Subsequent container starts use a cached copy
- Cold-start latency impact is minimal (typically <1s)

To optimize further, implement a multi-region Artifact Registry (one per geography).

## Monitoring & Alerts

- **Uptime Checks** — HTTPS endpoint checked every 60s from multiple GCP regions
- **Alert Policy** — Triggers on:
  - Uptime check failure (any region down)
  - High 5xx error rate (>5% for 5 minutes)
- **Notification Channel** — Email alerts to `ajdinsheki@gmail.com`

Check Cloud Monitoring for per-region metrics:
- Request latency by region
- Cloud Run instance count/scaling activity per region
- LB backend health status

## Failover & Resilience

- **Automatic Failover** — If a region becomes unhealthy, LB routes traffic to remaining regions
- **Per-Region Auto-Scaling** — Each region scales independently based on local demand
- **CDN Fallback** — Even if a region becomes unavailable, cached responses are served from CDN for up to 24 hours (`serve_while_stale`)

## Costs

- **Cloud Run** — 4× regional instances (each region has min 2 instances)
- **Load Balancer** — ~$18/month (fixed cost for global LB)
- **Network Egress** — Cross-region traffic incurs charges; CDN reduces repeat egress
- **Cloud Armor** — ~$20/month + per-request fees
- **Managed Certificate** — No additional cost

To reduce costs, disable multi-region by setting `regions = ["europe-west3"]` in `prod.tfvars`.

## Troubleshooting

### Check regional service health
```bash
# List all Cloud Run services
gcloud run services list --platform=managed --project=<project-id>

# Check a specific region
gcloud run services describe hygraph-showcase-prod \
  --region=us-central1 \
  --project=<project-id>
```

### Verify NEG health in LB
```bash
# List all NEGs
gcloud compute network-endpoint-groups list \
  --filter="name:*neg*"

# Check NEG health
gcloud compute backend-services get-health hygraph-showcase-prod-backend \
  --global
```

### Rollback a specific region
```bash
gcloud run services update-traffic hygraph-showcase-prod \
  --to-revisions=PREVIOUS=100 \
  --region=us-central1
```

### Test region-specific endpoint
Each Cloud Run service has a region-specific URL:
```
https://<revision>-<hash>.a.run.app  (europe-west3)
https://<revision>-<hash>.a.run.app  (us-central1)
etc.
```

Get the URLs:
```bash
gcloud run services describe hygraph-showcase-prod --region=<region>
```

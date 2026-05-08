# Service Account Architecture

This document describes the service accounts and their IAM roles required for the infrastructure.

## Service Accounts

### 1. **cloud-build-deployer** (CI/CD via GitHub Actions)
**Purpose:** Authenticate GitHub Actions to Google Cloud using Workload Identity Federation (WIF).

**Roles:**
- `roles/iam.securityAdmin` — modify IAM bindings for secure downscopping
- `roles/iam.serviceAccountAdmin` — create and manage service accounts
- `roles/iam.workloadIdentityPoolAdmin` — manage WIF configuration
- `roles/run.admin` — manage Cloud Run services and deployments
- `roles/compute.admin` — manage load balancers, backend services, NEGs, health checks
- `roles/secretmanager.admin` — access secrets for environment variables
- `roles/storage.admin` — manage GCS buckets (Grafana data, Terraform state)
- `roles/dns.admin` — manage DNS records
- `roles/monitoring.admin` — create monitoring policies and notification channels
- `roles/artifactregistry.admin` — push container images

**Why:** GitHub Actions uses this SA to run Terraform and deploy containers. It needs broad permissions to manage all infrastructure layers (security, compute, storage, observability).

**Constraint:** Only authenticates on pushes to `main` or `develop` branches (enforced via WIF `attribute_condition`).

---

### 2. **nextjs-run** (Cloud Run service account)
**Purpose:** Identity for the Next.js application running on Cloud Run.

**Roles:**
- `roles/secretmanager.secretAccessor` — read secrets (Hygraph token, Sentry DSN) mounted as environment variables
- `roles/logging.logWriter` — write application logs
- `roles/aiplatform.endpointUser` (downscoped) — call Vertex AI Gemini endpoints for chat feature
- `roles/iam.serviceAccountTokenCreator` (when bound to other SAs) — create temporary tokens if needed

**Why:** The Next.js app needs minimal permissions: read secrets, log output, and call Vertex AI. All external APIs (Hygraph, Sentry) authenticate via secrets, not service account identity.

**Note:** `aiplatform.endpointUser` is downscoped from the broader `aiplatform.user` role to reduce blast radius (can only call endpoints, not manage projects).

---

### 3. **grafana-run** (Cloud Run service account)
**Purpose:** Identity for Grafana running on Cloud Run.

**Roles:**
- `roles/secretmanager.secretAccessor` — read secrets (admin password, OAuth credentials)
- `roles/logging.logWriter` — write logs
- `roles/storage.objectAdmin` — read/write Grafana dashboard state to GCS bucket

**Why:** Grafana stores dashboards and configuration in a GCS bucket for persistence across container restarts.

---

### 4. **prometheus-run** (Cloud Run service account)
**Purpose:** Identity for Prometheus running on Cloud Run.

**Roles:**
- `roles/logging.logWriter` — write logs
- `roles/monitoring.metricWriter` (not currently used but reserved) — push custom metrics if needed

**Why:** Prometheus only needs to log. It scrapes metrics from the OTel Collector via HTTP (network call, not IAM-based).

---

### 5. **otel-collector-run** (Cloud Run service account)
**Purpose:** Identity for OpenTelemetry Collector running on Cloud Run.

**Roles:**
- `roles/logging.logWriter` — write logs
- `roles/monitoring.metricWriter` — push metrics to Google Managed Prometheus

**Why:** OTel Collector receives traces/metrics from the Next.js app and forwards them to Cloud Trace and Google Managed Prometheus.

---

## IAM Bindings (Least Privilege)

### Next.js ↔ OTel Collector
- **Binding:** `nextjs-run` can invoke `otel-collector` Cloud Run service
- **Mechanism:** Service account impersonation via `roles/iam.serviceAccountUser`
- **Why:** Next.js sends OTLP data to OTel Collector; requires authenticated Cloud Run invocation

### OTel Collector ↔ Prometheus
- **Binding:** `otel-collector` can invoke `prometheus` Cloud Run service
- **Mechanism:** Service account impersonation via `roles/iam.serviceAccountUser`
- **Why:** OTel Collector scrapes Prometheus for metrics; requires authenticated Cloud Run invocation

### Grafana (dev) — Public with Authentication
- **Binding:** `allAuthenticatedUsers` can invoke `grafana` Cloud Run service (dev only)
- **Mechanism:** Anyone with a Google account can reach the service; Grafana's login page enforces further auth
- **Why:** In dev (no load balancer), Grafana needs to be reachable from the internet. Anonymous access is disabled in Grafana config.

### Grafana (prod) — Internal Load Balancer Only
- **Binding:** `grafana-run` service account can invoke itself
- **Mechanism:** Only traffic from the load balancer (via Cloud Armor) reaches Grafana
- **Why:** In prod, Cloud Armor filters attacks before traffic reaches Grafana. Ingress is `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`, so public invocation is blocked.

### Terraform State Bucket
- **Binding:** `cloud-build-deployer` has `roles/storage.admin` on bucket `{project_id}-terraform-state`
- **Why:** Terraform state is stored in GCS; CI/CD must read/write state during plan and apply

---

## GitHub Secrets (Required for CI/CD)

These secrets are referenced in `.github/workflows/deploy.yml` and used by the `cloud-build-deployer` service account:

| Secret | Purpose |
|--------|---------|
| `GCP_WIF_PROVIDER` | Workload Identity Provider resource name (e.g., `projects/PROJECT_ID/locations/global/workloadIdentityPools/github-pool/providers/github-provider`) |
| `GCP_SA_EMAIL` | Email of `cloud-build-deployer` service account |
| `GCP_PROJECT_ID` | GCP Project ID |
| `GCP_PROJECT_NUMBER` | GCP Project Number (for WIF) |
| `SENTRY_AUTH_TOKEN` | Sentry CLI token for uploading source maps |
| `NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT` | Hygraph GraphQL endpoint |
| `NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT` | Whether to fetch draft content in staging |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site (for Sentry, previews) |
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry error reporting endpoint |
| `ALERT_EMAIL` | Email for receiving infrastructure alerts |

---

## Security Design Principles

### 1. **Workload Identity Federation (WIF)**
GitHub Actions authenticates to Google Cloud without long-lived service account keys. Instead:
- GitHub generates a JWT signed by GitHub's private key
- Google verifies it and exchanges it for a short-lived GCP token
- Token is automatically revoked after the workflow completes

### 2. **Least Privilege**
Each service account has only the roles it needs:
- `nextjs-run` cannot manage Cloud Run or IAM
- `prometheus-run` cannot access secrets or write metrics
- `cloud-build-deployer` has broad permissions (needed to manage all infrastructure) but is scoped to GitHub's `Shekey` org and only `main`/`develop` branches

### 3. **Network Isolation**
- Prometheus and OTel are `INGRESS_TRAFFIC_INTERNAL_ONLY` (only Compute Engine health checks and peered services can reach them)
- Grafana (dev) accepts all traffic but requires Google authentication and Grafana login
- Grafana (prod) is behind Cloud Armor + load balancer (no direct internet access)
- Next.js is behind Cloud Armor + load balancer in prod; public + rate-limited in dev

### 4. **Secrets Management**
- Sensitive values (API keys, endpoints, credentials) are stored in Google Secret Manager
- Secrets are mounted as environment variables in containers (never logged, never hardcoded)
- Access is via service account identity (no separate API keys)

---

## Troubleshooting

### Terraform Apply Fails with Permission Error
Check that `cloud-build-deployer` has been granted all roles listed above. Run:
```bash
gcloud projects get-iam-policy $PROJECT_ID \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:cloud-build-deployer@*"
```

### Service Cannot Invoke Another Service (403 Forbidden)
Ensure the IAM binding exists. E.g., for Next.js → OTel:
```bash
gcloud run services add-iam-policy-binding otel-collector \
  --region=$REGION \
  --member=serviceAccount:nextjs-run@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/run.invoker
```

### Grafana Cannot Read Secrets
Check that `grafana-run` has `roles/secretmanager.secretAccessor`. Verify the secret exists:
```bash
gcloud secrets list --filter="labels.app=grafana"
```

---

## References

- [Workload Identity Federation for GitHub](https://cloud.google.com/docs/authentication/workload-identity-federation)
- [Service Account Best Practices](https://cloud.google.com/docs/authentication/best-practices-service-accounts)
- [IAM Predefined Roles](https://cloud.google.com/iam/docs/understanding-predefined-roles)

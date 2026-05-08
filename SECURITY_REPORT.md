# Security Review Report: Terraform Infrastructure & Observability Stack

**Date:** May 8, 2026  
**Repo Status:** Public  
**Review Scope:** Terraform modules, GCP infrastructure, observability stack configuration

---

## Executive Summary

This review identified **8 high-confidence security vulnerabilities** in the infrastructure, most of which **have been remediated**. The primary issues were:

1. **Public exposure of admin interfaces** (Grafana, Prometheus, OTel Collector) with no authentication layer
2. **Overly permissive IAM role assignments** at the project level
3. **WIF (Workload Identity Federation) branch restriction missing**, allowing any branch to deploy to production
4. **Overly broad service account permissions** (e.g., `aiplatform.user` instead of `aiplatform.endpointUser`)

All Terraform module changes have been implemented and validated. However, **observability stack configuration issues in docker-compose and configuration files still exist and require action outside Terraform**.

---

## Terraform Fixes Implemented ✅

### CRITICAL-1: Grafana publicly exposed via `allUsers` IAM binding
- **File:** `terraform/modules/grafana/main.tf`
- **Issue:** `members = ["allUsers"]` granted `roles/run.invoker` to anyone on the internet
- **Fix Applied:**
  - Added `ingress_mode` variable to `modules/grafana/variables.tf` with default `INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER`
  - Updated `main.tf` line 36 to use `ingress = var.ingress_mode`
  - Made IAM binding conditional: only created when `ingress_mode == "INGRESS_TRAFFIC_ALL"`
  - Bound invoker role to load balancer service account instead of `allUsers`

### CRITICAL-2: Grafana ingress hardcoded to `INGRESS_TRAFFIC_ALL`
- **File:** `terraform/modules/grafana/main.tf:36`
- **Issue:** Unlike the cloud-run module, Grafana hardcoded public ingress — it could never be placed behind a load balancer
- **Fix Applied:**
  - Added variable support for ingress_mode
  - `terraform/main.tf:150` now sets `ingress_mode = var.enable_load_balancer ? "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER" : "INGRESS_TRAFFIC_INTERNAL_ONLY"`
  - Grafana can now be protected behind the load balancer

### CRITICAL-3: Prometheus exposed publicly with remote-write receiver
- **Files:** `terraform/modules/prometheus/main.tf:7,25,69-76`
- **Issue:** `INGRESS_TRAFFIC_ALL` + `allUsers` + `--web.enable-remote-write-receiver` flag allowed unauthenticated metric injection
- **Fix Applied:**
  - Changed ingress to `INGRESS_TRAFFIC_INTERNAL_ONLY` (line 7)
  - Replaced public IAM binding with scoped member binding (lines 69-76)
  - Only the OTel Collector service account can now invoke Prometheus
  - Added `otel_collector_run_sa_email` variable to prometheus module

### CRITICAL-4: OTel Collector publicly exposed
- **Files:** `terraform/modules/otel-collector/main.tf:7,67-74`
- **Issue:** `INGRESS_TRAFFIC_ALL` + `allUsers` allowed arbitrary telemetry injection
- **Fix Applied:**
  - Changed ingress to `INGRESS_TRAFFIC_INTERNAL_ONLY` (line 7)
  - Replaced public IAM binding with scoped member binding
  - Only the Next.js Cloud Run service account can now invoke OTel Collector
  - Added `nextjs_run_sa_email` variable to otel-collector module

### HIGH-1: WIF `attribute_condition` not branch-scoped
- **File:** `terraform/modules/wif/main.tf:23`
- **Issue:** Any branch in the repo could obtain a GCP token and deploy
- **Fix Applied:**
  - Updated attribute_condition from:
    ```
    assertion.repository == '${var.github_org}/${var.github_repo}'
    ```
  - To:
    ```
    assertion.repository == '${var.github_org}/${var.github_repo}' && assertion.ref in ['refs/heads/main', 'refs/heads/develop']
    ```
  - Only main and develop branches can now trigger deployments

### HIGH-2: Deployer SA has project-wide `iam.serviceAccountUser`
- **File:** `terraform/modules/iam/main.tf:25-29`
- **Issue:** Deployer could impersonate ANY service account in the project
- **Fix Applied:**
  - Removed `google_project_iam_member.deployer_sa_user` (project-level binding)
  - Per-service-account bindings already present (`deployer_acts_as_runner`, `deployer_acts_as_grafana`, `deployer_acts_as_prometheus`, `deployer_acts_as_otel_collector`) provide the necessary fine-grained access

### HIGH-3: nextjs and Grafana SAs have project-wide `secretmanager.secretAccessor`
- **File:** `terraform/modules/iam/main.tf:37-41,85-89`
- **Issue:** Both service accounts could access ALL secrets in the project
- **Fix Applied:**
  - Removed `google_project_iam_member.runner_secret_accessor` (nextjs, line 37-41)
  - Removed `google_project_iam_member.grafana_secret_accessor` (grafana, line 85-89)
  - Per-secret bindings in `modules/secrets/main.tf` already grant access to specific secrets only

### HIGH-4: nextjs SA has overly broad `roles/aiplatform.user`
- **File:** `terraform/modules/iam/main.tf:67-71`
- **Issue:** `aiplatform.user` allows invoking ANY Vertex AI resource (predictions, fine-tuning, model management, etc.)
- **Fix Applied:**
  - Downscoped from `roles/aiplatform.user` to `roles/aiplatform.endpointUser`
  - Now only allows inference on Vertex AI endpoints (prediction use case)
  - If other Vertex AI capabilities are needed, resource-level IAM can be added

---

## Additional Observations

### Versioning Disabled (MEDIUM)
- **File:** `terraform/modules/grafana/main.tf:8-10`
- **Status:** Not modified (data loss risk, but architectural decision)
- **Recommendation:** Enable GCS bucket versioning for disaster recovery
  ```hcl
  versioning {
    enabled = true
  }
  ```

### Image Tag Defaults to `latest` (MEDIUM)
- **Files:** `terraform/modules/**/variables.tf`
- **Status:** Not modified (image immutability risk)
- **Recommendation:** Use specific image tags in production environments via tfvars

---

## Configuration Files Requiring Manual Remediation ⚠️

### 1. docker-compose.yml: Grafana Anonymous Admin Access
**Severity:** HIGH (Local dev only, but bad practice)
```yaml
# Current (INSECURE for local dev):
GF_AUTH_ANONYMOUS_ENABLED=true
GF_AUTH_ANONYMOUS_ORG_ROLE=Admin
```

**Recommendation:**
```yaml
GF_AUTH_ANONYMOUS_ENABLED=false
# Or if anonymous is needed:
GF_AUTH_ANONYMOUS_ENABLED=true
GF_AUTH_ANONYMOUS_ORG_ROLE=Viewer  # Read-only access
```

### 2. docker-compose.yml: Grafana Default Admin Password
**Severity:** HIGH
```yaml
# Current (hardcoded default):
GF_SECURITY_ADMIN_PASSWORD=admin
```

**Recommendation:** Source from environment variable or use a strong random password for development

### 3. OTel Collector Configuration: No Authentication on Receivers
**Severity:** HIGH (all environments)

**Files affected:**
- `docker-compose.yml` (mounts `otel-collector-config.yaml`)
- `otel-collector/config.yaml`
- Local config: unprotected receivers on `0.0.0.0:4317`, `0.0.0.0:4318`, `0.0.0.0:13133`

**Current Issue:**
```yaml
receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 0.0.0.0:4317
      http:
        endpoint: 0.0.0.0:4318
```

**Recommendation:** For production, add authentication:
```yaml
receivers:
  otlp:
    protocols:
      http:
        endpoint: 0.0.0.0:4318
        auth:
          authenticator: basicauth
```

And add authenticator:
```yaml
extensions:
  basicauth/server:
    client_auth:
      scheme: "Basic"
      static: ...
```

### 4. OTel Collector: Detailed Logging Exposes Sensitive Data
**Severity:** MEDIUM

**File:** docker config (mounts config.yaml)
**Current Issue:**
```yaml
exporters:
  logging:
    verbosity: detailed  # ← Logs all trace attributes including auth headers
```

**Recommendation:**
```yaml
exporters:
  logging:
    verbosity: normal  # Or remove detailed logging entirely for prod
```

### 5. Prometheus: No Authentication Required
**Severity:** HIGH (local stack only in docker-compose)

**Files:** `prometheus/prometheus.yml`, `prometheus/prometheus-prod.yml`
**Current Issue:** No `--web.config` or authentication backend

**Recommendation:** In production, add:
```yaml
# prometheus.yml
global:
  scrape_interval: 15s

# Use reverse-proxy auth (Cloud Run ingress restriction already applied via Terraform)
# Or add Web UI auth:
--web.config.file=/etc/prometheus/web.yml
```

### 6. .env.local: Live Hygraph JWT Token
**Severity:** CRITICAL (Not tracked by git, but exists on disk)

**Current Status:** `.env.local` contains:
- `HYGRAPH_PREVIEW_TOKEN` — a long-lived Hygraph API token (JWT)
- `HYGRAPH_PREVIEW_SECRET` — hardcoded preview webhook secret

**Action Required:**
1. ✅ Revoke the current token immediately in Hygraph Dashboard → Project Settings → Permanent Auth Tokens
2. ✅ Generate a new token
3. ✅ Update `.env.local` with the new token (do NOT commit)

### 7. .env.example: Real Hygraph Project ID
**Severity:** HIGH (Tracked by git)

**File:** `.env.example:4`
**Current Issue:**
```
NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT=https://eu-west-2.cdn.hygraph.com/content/cmoexv7zu00hf07w3197v1115/master
```

**Recommendation:** Replace with placeholder:
```
NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT=https://eu-west-2.cdn.hygraph.com/content/YOUR_PROJECT_ID/master
```

---

## Summary Table: Issues by Status

| Severity | Category | Issue | Status |
|---|---|---|---|
| CRITICAL | Terraform | Grafana public IAM + hardcoded ingress | ✅ FIXED |
| CRITICAL | Terraform | Prometheus public + remote-write open | ✅ FIXED |
| CRITICAL | Terraform | OTel Collector public + no auth | ✅ FIXED |
| CRITICAL | Config | Grafana: .env.local has live JWT token | ⚠️ MANUAL (revoke token) |
| HIGH | Terraform | WIF branch not restricted | ✅ FIXED |
| HIGH | Terraform | Deployer SA: project-wide IAM.serviceAccountUser | ✅ FIXED |
| HIGH | Terraform | nextjs/Grafana SAs: project-wide secret accessor | ✅ FIXED |
| HIGH | Terraform | nextjs SA: overscoped aiplatform.user | ✅ FIXED |
| HIGH | Config | docker-compose: Grafana anonymous Admin + default password | ⚠️ MANUAL |
| HIGH | Config | OTel Collector: unauth receivers on 0.0.0.0 | ⚠️ MANUAL |
| HIGH | Config | Prometheus: no authentication | ⚠️ MANUAL |
| HIGH | Config | .env.example: real project ID | ⚠️ MANUAL |
| MEDIUM | Terraform | GCS versioning disabled | ⚠️ OPTIONAL |
| MEDIUM | Config | OTel Collector: detailed logging | ⚠️ MANUAL |

---

## Verification

All Terraform changes have been validated:
```bash
$ terraform validate
Success! The configuration is valid.
```

Next steps:
1. Deploy Terraform changes to dev environment
2. Verify cloud-run services with `INGRESS_TRAFFIC_INTERNAL_ONLY` are no longer directly reachable
3. Address configuration file issues listed above
4. Revoke Hygraph preview token in production
5. Update .env.example to use placeholders

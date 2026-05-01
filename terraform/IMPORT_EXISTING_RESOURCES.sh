#!/bin/bash

# This script imports existing GCP resources into Terraform state
# Run this ONCE before terraform apply

set -e

PROJECT_ID="project-712b5fcf-7483-48bb-bc3"
PROJECT_NUMBER="313055095232"
REGION="europe-west3"

echo "🔄 Importing existing resources into Terraform state..."

# 1. Import Artifact Registry
echo "📦 Importing Artifact Registry..."
terraform import -var-file="environments/prod.tfvars" module.artifact_registry.google_artifact_registry_repository.nextjs "projects/${PROJECT_ID}/locations/${REGION}/repositories/hygraph-showcase"

# 2. Import IAM Service Accounts
echo "🔐 Importing Service Accounts..."
terraform import -var-file="environments/prod.tfvars" module.iam.google_service_account.cloud_build_deployer "projects/${PROJECT_ID}/serviceAccounts/cloud-build-deployer@${PROJECT_ID}.iam.gserviceaccount.com"
terraform import -var-file="environments/prod.tfvars" module.iam.google_service_account.nextjs_run_sa "projects/${PROJECT_ID}/serviceAccounts/nextjs-run-sa@${PROJECT_ID}.iam.gserviceaccount.com"

# 3. Import Cloud Run service (if it exists)
echo "☁️  Importing Cloud Run service (if exists)..."
terraform import -var-file="environments/prod.tfvars" module.cloud_run.google_cloud_run_v2_service.app "projects/${PROJECT_ID}/locations/${REGION}/services/hygraph-showcase" 2>/dev/null || echo "Cloud Run service not found (will be created)"

echo ""
echo "✅ Import complete! Now run:"
echo "   terraform plan -var-file='environments/prod.tfvars'"
echo "   terraform apply tfplan"

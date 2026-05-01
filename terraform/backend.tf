terraform {
  backend "gcs" {
    # Configuration passed via CLI flags at init time:
    # terraform init -backend-config="bucket=..." -backend-config="prefix=..."
  }
}

#!/bin/sh
set -e

# Set defaults if not provided
export PROMETHEUS_URL="${PROMETHEUS_URL:-http://localhost:9090}"
export GCP_PROJECT_ID="${GCP_PROJECT_ID:-unknown}"

envsubst '${GCP_PROJECT_ID} ${PROMETHEUS_URL}' < /etc/grafana/provisioning/datasources/datasources.yml > /tmp/datasources.yml
cp /tmp/datasources.yml /etc/grafana/provisioning/datasources/datasources.yml

exec /run.sh

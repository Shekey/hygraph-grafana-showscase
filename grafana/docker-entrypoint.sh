#!/bin/sh
set -e

export PROMETHEUS_URL="${PROMETHEUS_URL:-http://localhost:9090}"
export GCP_PROJECT_ID="${GCP_PROJECT_ID:-unknown}"

# All writes go under /tmp (the only writable filesystem on Cloud Run)
mkdir -p /tmp/grafana-provisioning/datasources /tmp/grafana-provisioning/dashboards

cp /etc/grafana/provisioning/dashboards/dashboards.yml \
   /tmp/grafana-provisioning/dashboards/

envsubst '${GCP_PROJECT_ID} ${PROMETHEUS_URL}' \
  < /etc/grafana/provisioning/datasources/datasources.yml \
  > /tmp/grafana-provisioning/datasources/datasources.yml

export GF_PATHS_PROVISIONING=/tmp/grafana-provisioning

exec /run.sh

#!/bin/sh
set -e

export PROMETHEUS_URL="${PROMETHEUS_URL:-http://localhost:9090}"
export GCP_PROJECT_ID="${GCP_PROJECT_ID:-unknown}"
export NEXT_PUBLIC_APP_URL="${NEXT_PUBLIC_APP_URL:-http://localhost:3000}"
export ALERT_WEBHOOK_SECRET="${ALERT_WEBHOOK_SECRET:-test-secret}"

# All writes go under /tmp (the only writable filesystem on Cloud Run)
mkdir -p /tmp/grafana-provisioning/datasources /tmp/grafana-provisioning/dashboards /tmp/grafana-provisioning/alerting

cp /etc/grafana/provisioning/dashboards/dashboards.yml \
   /tmp/grafana-provisioning/dashboards/

envsubst '${GCP_PROJECT_ID} ${PROMETHEUS_URL}' \
  < /etc/grafana/provisioning/datasources/datasources.yml \
  > /tmp/grafana-provisioning/datasources/datasources.yml

envsubst '${NEXT_PUBLIC_APP_URL} ${ALERT_WEBHOOK_SECRET}' \
  < /etc/grafana/provisioning/alerting/contact-points.yml \
  > /tmp/grafana-provisioning/alerting/contact-points.yml

cp /etc/grafana/provisioning/alerting/notification-policies.yml \
   /tmp/grafana-provisioning/alerting/

cp /etc/grafana/provisioning/alerting/alert-rules.yml \
   /tmp/grafana-provisioning/alerting/

export GF_PATHS_PROVISIONING=/tmp/grafana-provisioning

exec /run.sh

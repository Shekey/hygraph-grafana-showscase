#!/bin/sh
set -e

# Substitute environment variables in prometheus.yml using sed (available in busybox)
sed "s|\${OTEL_COLLECTOR_HOST}|${OTEL_COLLECTOR_HOST}|g" /etc/prometheus/prometheus.yml > /tmp/prometheus.yml

# Start Prometheus with the substituted config
exec /bin/prometheus --config.file=/tmp/prometheus.yml "$@"

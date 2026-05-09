#!/bin/sh
set -e

# Substitute environment variables in prometheus.yml into /tmp/prometheus.yml
sed "s|\${OTEL_COLLECTOR_HOST}|${OTEL_COLLECTOR_HOST}|g" /etc/prometheus/prometheus.yml > /tmp/prometheus.yml

# Start Prometheus with all flags passed from the container args
exec /bin/prometheus "$@"

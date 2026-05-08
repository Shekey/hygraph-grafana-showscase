#!/bin/sh
set -e

# Substitute environment variables in prometheus.yml
envsubst < /etc/prometheus/prometheus.yml > /tmp/prometheus.yml
cp /tmp/prometheus.yml /etc/prometheus/prometheus.yml

# Start Prometheus with the modified config
exec /bin/prometheus "$@"

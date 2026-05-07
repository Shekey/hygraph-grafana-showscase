#!/bin/sh

envsubst '${GCP_PROJECT_ID}' < /etc/grafana/provisioning/datasources/datasources.yml > /tmp/datasources.yml
cp /tmp/datasources.yml /etc/grafana/provisioning/datasources/datasources.yml

exec /run.sh "$@"

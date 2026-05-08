FROM prom/prometheus:v2.51.0

RUN apt-get update && apt-get install -y gettext && rm -rf /var/lib/apt/lists/*

COPY prometheus-prod.yml /etc/prometheus/prometheus.yml
COPY --chmod=755 docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

FROM prom/prometheus:v2.51.0

RUN apk add --no-cache gettext

COPY prometheus-prod.yml /etc/prometheus/prometheus.yml
COPY --chmod=755 docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

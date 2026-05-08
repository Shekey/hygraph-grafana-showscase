FROM prom/prometheus:v2.51.0
COPY prometheus-prod.yml /etc/prometheus/prometheus.yml
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

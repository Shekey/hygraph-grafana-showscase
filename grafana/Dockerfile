FROM grafana/grafana:11.0.0

COPY grafana/provisioning/datasources/datasources.yml /etc/grafana/provisioning/datasources/datasources.yml
COPY grafana/provisioning/dashboards /etc/grafana/provisioning/dashboards
COPY grafana/dashboards /etc/grafana/dashboards
COPY grafana/docker-entrypoint.sh /docker-entrypoint.sh

USER root
RUN chmod +x /docker-entrypoint.sh
USER grafana

ENTRYPOINT ["/docker-entrypoint.sh"]

FROM grafana/grafana:11.0.0

RUN grafana-cli --pluginsDir "${GF_PATHS_PLUGINS}" plugins install grafana-clock-panel

COPY grafana/provisioning/datasources/datasources.yml /etc/grafana/provisioning/datasources/datasources.yml
COPY grafana/provisioning/dashboards /etc/grafana/provisioning/dashboards
COPY grafana/dashboards /etc/grafana/dashboards
COPY grafana/docker-entrypoint.sh /docker-entrypoint.sh

USER root
RUN chmod +x /docker-entrypoint.sh && \
    chmod 777 /etc/grafana/provisioning/datasources
USER grafana

ENTRYPOINT ["/docker-entrypoint.sh"]

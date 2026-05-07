FROM grafana/grafana:11.0.0

COPY grafana/provisioning /etc/grafana/provisioning
COPY grafana/dashboards /etc/grafana/dashboards

USER root
RUN apk add --no-cache gettext
COPY grafana/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
USER grafana

ENTRYPOINT ["/docker-entrypoint.sh"]

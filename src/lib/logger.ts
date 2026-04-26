import winston from "winston";
import LokiTransport from "winston-loki";

const lokiUrl = process.env.LOKI_URL ?? "http://localhost:3100";

export const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  defaultMeta: { app: "hybike", env: process.env.NODE_ENV ?? "development" },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message, ...meta }) =>
          `${timestamp} [${level}]: ${message}${Object.keys(meta).length ? " " + JSON.stringify(meta) : ""}`
        )
      ),
    }),
    new LokiTransport({
      host: lokiUrl,
      labels: { app: "hybike", env: process.env.NODE_ENV ?? "development" },
      json: true,
      format: winston.format.json(),
      replaceTimestamp: true,
      onConnectionError: (err) => console.error("[logger] Loki error:", err.message),
    }),
  ],
});

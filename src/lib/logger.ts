import winston from "winston";
import LokiTransport from "winston-loki";

const isProduction = process.env.NODE_ENV === "production";
// Ensure this is checked as a string if coming from process.env
const isLokiEnabled = process.env.LOKI_ENABLE === "true"; 
const lokiUrl = process.env.LOKI_URL || "http://localhost:3100";

const transports: winston.transport[] = [
  new winston.transports.Console({
    format: isProduction 
      ? winston.format.json() 
      : winston.format.combine(winston.format.colorize(), winston.format.simple()),
  }),
];

if (isLokiEnabled) {
  console.log(`[logger] Initializing Loki transport to ${lokiUrl}`);
  transports.push(
    new LokiTransport({
      host: lokiUrl,
      labels: { app: "hybike", env: process.env.NODE_ENV ?? "development" },
      json: true,
      // Critical: handle errors so the whole Node process doesn't exit
      onConnectionError: (err: Error) => console.error("[logger] Loki connection failed:", err.message),
    })
  );
}

export const logger = winston.createLogger({
  level: isProduction ? "info" : "debug",
  defaultMeta: { app: "hybike", env: process.env.NODE_ENV ?? "development" },
  transports,
});
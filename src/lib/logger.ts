import winston from "winston";

const isProduction = process.env.NODE_ENV === "production";

const transports: winston.transport[] = [
  new winston.transports.Console({
    format: isProduction
      ? winston.format.json()
      : winston.format.combine(winston.format.colorize(), winston.format.simple()),
  }),
];

// Add Cloud Logging transport in production
if (isProduction) {
  try {
    const { LoggingWinston } = require("@google-cloud/logging-winston");
    const cloudLogging = new LoggingWinston({
      projectId: process.env.GCP_PROJECT_ID,
      labels: { app: "hybike" },
      resourceType: "cloud_run_revision",
    });
    transports.push(cloudLogging);
  } catch (err) {
    console.error("[logger] Failed to initialize Cloud Logging transport:", err instanceof Error ? err.message : String(err));
  }
}

export const logger = winston.createLogger({
  level: isProduction ? "info" : "debug",
  defaultMeta: { app: "hybike", env: process.env.NODE_ENV ?? "development" },
  transports,
});
export function register() {
  // Edge Runtime does not support Node.js instrumentation
  if (process.env.NEXT_RUNTIME === 'edge') {
    return;
  }

  // Import and initialize Node.js-specific OTel setup
  // This is kept in a separate file to avoid Turbopack edge runtime analysis warnings
  const { initializeOpenTelemetry } = require('./instrumentation.node');
  initializeOpenTelemetry();
}

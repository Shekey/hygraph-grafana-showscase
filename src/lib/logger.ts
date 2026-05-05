type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogContext {
  [key: string]: string | number | boolean | undefined;
}

function formatLog(level: LogLevel, message: string, context: LogContext = {}) {
  const timestamp = new Date().toISOString();
  const contextStr = Object.keys(context).length > 0 ? JSON.stringify(context) : '';
  return `[${timestamp}] ${level.toUpperCase()} ${message} ${contextStr}`.trim();
}

export const logger = {
  info: (message: string, context?: LogContext) => {
    const formatted = formatLog('info', message, context);
    console.log(formatted);
  },

  warn: (message: string, context?: LogContext) => {
    const formatted = formatLog('warn', message, context);
    console.warn(formatted);
  },

  error: (message: string, context?: LogContext) => {
    const formatted = formatLog('error', message, context);
    console.error(formatted);
  },

  debug: (message: string, context?: LogContext) => {
    if (process.env.NODE_ENV === 'development') {
      const formatted = formatLog('debug', message, context);
      console.debug(formatted);
    }
  },

  // Structured logging for HTTP requests
  httpRequest: (route: string, method: string, statusCode: number, durationMs: number) => {
    logger.info('http_request', {
      route,
      method,
      status_code: statusCode,
      duration_ms: Math.round(durationMs),
      env: process.env.NODE_ENV || 'development',
      app: 'hygike',
    });
  },
};

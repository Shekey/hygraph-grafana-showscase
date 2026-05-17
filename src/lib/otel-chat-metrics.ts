import { metrics } from '@opentelemetry/api';

let chatMetricsInitialized = false;
let chatRequestCounter: any;
let chatResponseDuration: any;
let chatToolRounds: any;
let chatToolCallCounter: any;
let chatToolDuration: any;

export function initializeChatMetrics() {
  if (chatMetricsInitialized) return;

  const meter = metrics.getMeter('hygraph-showcase-chat');

  chatRequestCounter = meter.createCounter('chat_requests_total', {
    description: 'Total number of chat requests',
  });

  chatResponseDuration = meter.createHistogram('chat_response_duration_ms', {
    description: 'Chat response duration in milliseconds',
  });

  chatToolRounds = meter.createHistogram('chat_tool_rounds_total', {
    description: 'Number of tool rounds executed per chat request',
    advice: {
      explicitBucketBoundaries: [0, 1, 2, 3, 4, 5],
    },
  });

  chatToolCallCounter = meter.createCounter('chat_tool_calls_total', {
    description: 'Total number of tool calls made by the chat agent',
  });

  chatToolDuration = meter.createHistogram('chat_tool_duration_ms', {
    description: 'Duration of individual tool calls in milliseconds',
  });

  chatMetricsInitialized = true;
}

export function recordChatRequest(
  status: 'success' | 'error' | 'max_rounds',
  durationMs: number,
  toolRounds: number
) {
  if (!chatMetricsInitialized) {
    initializeChatMetrics();
  }

  chatRequestCounter.add(1, {
    status,
  });

  chatResponseDuration.record(durationMs, {
    status,
  });

  chatToolRounds.record(toolRounds, {
    status,
  });
}

export function recordToolCall(
  toolName: string,
  durationMs: number,
  status: 'success' | 'error'
) {
  if (!chatMetricsInitialized) {
    initializeChatMetrics();
  }

  chatToolCallCounter.add(1, {
    tool_name: toolName,
    status,
  });

  chatToolDuration.record(durationMs, {
    tool_name: toolName,
    status,
  });
}

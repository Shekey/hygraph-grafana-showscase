# syntax=docker/dockerfile:1

# --- STAGE 1: Builder ---
FROM node:22-bookworm-slim AS builder
WORKDIR /app

# Only keep the library headers if absolutely needed
RUN apt-get update && apt-get install -y libc6 && rm -rf /var/lib/apt/lists/*

# Copy dependency files
COPY package.json package-lock.json ./

# Install ALL dependencies (including devDependencies) 
# This ensures Tailwind and Turbopack have the tools they need to build
RUN npm ci

# Copy the rest of the source code
COPY . .

# Set Build Arguments
ARG NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT
ARG NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_SENTRY_DSN

# Set Environment Variables for Build Time
ENV NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT=$NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT
ENV NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT=$NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_TELEMETRY_DISABLED=1

# Run the build with Sentry token secret
RUN --mount=type=secret,id=sentry_auth_token \
    if [ -f /run/secrets/sentry_auth_token ]; then \
    export SENTRY_AUTH_TOKEN=$(cat /run/secrets/sentry_auth_token); \
    fi && \
    npm run build

# --- STAGE 2: Runner ---
FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# Create a non-privileged user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Set correct permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverages output: 'standalone' from next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 8080

# The standalone build creates a server.js file
CMD ["node", "server.js"]
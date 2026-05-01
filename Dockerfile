# syntax=docker/dockerfile:1

FROM node:22-alpine AS deps
# DODAJ OVO - rešava probleme sa zavisnostima na Alpine-u
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT
ARG NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_SENTRY_DSN

ENV NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT=$NEXT_PUBLIC_HYGRAPH_CONTENT_ENDPOINT
ENV NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT=$NEXT_PUBLIC_HYGRAPH_ALWAYS_DRAFT
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SENTRY_DSN=$NEXT_PUBLIC_SENTRY_DSN
ENV NEXT_TELEMETRY_DISABLED=1

# DODATA PROVERA ZA SENTRY DA BUILD NE PUCA LOKALNO
RUN --mount=type=secret,id=sentry_auth_token \
    if [ -f /run/secrets/sentry_auth_token ]; then \
    export SENTRY_AUTH_TOKEN=$(cat /run/secrets/sentry_auth_token); \
    fi && \
    npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Standalone kopira sve što je potrebno za pokretanje servera
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Ovi folderi su OBAVEZNI da bi Next.js znao da servira stranice (inače ide 404)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 8080
CMD ["node", "server.js"]
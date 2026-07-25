# syntax=docker/dockerfile:1.7

# ---------- Base ----------
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# ---------- Deps (install all deps for build) ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* npm-shrinkwrap.json* bun.lockb* ./
RUN npm install --legacy-peer-deps

# ---------- Build ----------
FROM node:20-alpine AS builder
WORKDIR /app
ENV NITRO_PRESET=node-server
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- Runner ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Nitro node-server output is fully self-contained under .output/
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

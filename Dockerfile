FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app


COPY package.json yarn.lock
RUN yarn --frozen-lockfile


FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn dev:db:generate
RUN yarn build


FROM base AS runner
WORKDIR /app

ENV NODE_ENV production



RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs



COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma

COPY --from=builder --chown=nextjs:nodejs /app/db.sh ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# turned off for now 
# CMD sh ./db.sh ${DB_HOST} ${DB_USER} npx prisma db push && node server.js

CMD ["node", "server.js"]
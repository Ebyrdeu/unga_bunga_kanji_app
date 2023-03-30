# Unga Bunga Kanji App

## Stack used
 - Typescript
 - Next JS
 - Auth JS
 - tRPC
 - Zod
 - Zustand
 - Postgresql
 - Prisma
 - Mantine

## Getting Started (Docker)


#### 1. Run  the docker:

```bash
docker-compose up
```

#### 2. Go into app container:
```bash
# desktop version also work
docker compose exec app  sh
```

#### 4. Push schema db:

```bash
# skip generate doesn't need because it defined on build step
npx prisma db push --skip-generate
```

## Getting Started (YARN)

### 1. Download all deps:
```bash
yarn
```

#### 2. Generate and push schema:
```bash
   npx prisma generate
#  you can also skip schema generation with that line or use  npx prisma db push
   yarn dev:db
```

#### 4. Push schema to newly build db
yarn dev:start
```bash
# skip generate doesn't need because it defined on build step
npx prisma db push --skip-generate
FROM oven/bun:latest

WORKDIR /usr/src/app

RUN apt-get update -y && apt-get install -y openssl

COPY ./packages ./packages
COPY ./bun.lockb ./bun.lockb

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

RUN bun install

COPY ./apps/ws ./apps/ws

RUN bun run db:generate

EXPOSE 8080

WORKDIR /usr/src/app

CMD ["bun", "run", "start:ws"]
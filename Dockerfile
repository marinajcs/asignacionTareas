FROM node:bookworm-slim

LABEL maintainer="marinacarranza@correo.ugr.es"

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY lib lib
COPY data data
COPY test test

USER root

RUN npm install -g pnpm && pnpm install

WORKDIR /app/test

CMD ["pnpm", "run", "test"]

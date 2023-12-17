FROM node:bookworm-slim

LABEL maintainer="marinacarranza@correo.ugr.es" \
      version="5.0.4"

RUN mkdir -p /app/test && chown -R node:node /app

WORKDIR /app

COPY --chown=node:node package.json pnpm-lock.yaml tsconfig.json ./
COPY --chown=node:node lib lib
COPY --chown=node:node data data

USER root

RUN npm install -g pnpm

USER node

RUN pnpm install

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test

CMD ["pnpm", "run", "test"]

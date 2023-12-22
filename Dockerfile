FROM nodered/node-red:latest-minimal

LABEL maintainer="marinacarranza@correo.ugr.es" \
      version="5.0.4"

USER root

RUN mkdir -p /app/test && chown -R node-red:node-red /app

RUN corepack enable

RUN corepack prepare pnpm@latest --activate

USER node-red

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app/test

ENTRYPOINT ["pnpm", "run", "test"]


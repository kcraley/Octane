FROM node:9.4.0-slim

LABEL maintainer="Keith Craley <kcral21@gmail.com>"

WORKDIR /code

COPY . /code

RUN set -x \
    && apt-get update \
    && apt-get install -y git --no-install-recommends \
    && chmod +x ./bin/entrypoint \
    && npm install

ENTRYPOINT [ "./bin/entrypoint" ]

FROM node:8-alpine

LABEL maintainer="Keith Craley <kcral21@gmail.com>"

WORKDIR /app

COPY . /app

RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add bash git \
    && npm install

CMD [ "./" ]

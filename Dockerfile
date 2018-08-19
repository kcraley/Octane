FROM node:8-alpine

LABEL maintainer="Keith Craley <kcral21@gmail.com>"

WORKDIR /app

COPY ./package.json .

RUN set -x \
    npm install

COPY . /src

RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add bash git

CMD [ "./" ]

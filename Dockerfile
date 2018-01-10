FROM node:9.3.0-alpine

LABEL maintainer="Keith Craley <kcral21@gmail.com>"

WORKDIR /code

COPY . /code

RUN set -x \
    && npm install

ENTRYPOINT [ "/bin/entrypoint" ]

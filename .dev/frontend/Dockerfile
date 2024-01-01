FROM node:lts-alpine3.18

RUN apk update && apk upgrade

ARG WORKDIR=/app
ARG APPDIR=${WORKDIR}/app

RUN mkdir -p ${APPDIR}
RUN chown -R node:node ${WORKDIR}

USER node
WORKDIR ${APPDIR}

CMD [ "npm", "run", "dev" ]

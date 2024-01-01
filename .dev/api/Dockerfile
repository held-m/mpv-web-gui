FROM golang:1.20.6-alpine3.18

RUN apk update && apk upgrade && \
apk add --no-cache curl ca-certificates gcc curl mpv ffmpeg \
python3 python3-dev py3-pip alsa-utils libc-dev socat && \
pip3 install yt-dlp

ARG UID=1000
ARG GID=1000
ARG USR=app
ARG GRP=app
ARG HOME=/home/app
ARG WORKDIR=/app

ENV GOPATH=${HOME}/bin
ENV PATH=$PATH:$GOPATH:$GOPATH/bin

RUN addgroup --gid "${GID}" "${GRP}"
RUN adduser \
    -S \
    -u "${UID}" \
    -G "${GRP}" \
   -h /home/app \
    "${USR}" 

RUN mkdir ${WORKDIR}
RUN chown -R ${USR}:${GRP} ${WORKDIR}

USER ${USR}

WORKDIR ${WORKDIR}

RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)

RUN go install github.com/swaggo/swag/cmd/swag@latest
ENTRYPOINT air

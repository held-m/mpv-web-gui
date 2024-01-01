SHELL := /bin/bash
MAKEFLAGS += --silent
ARGS = $(filter-out $@,$(MAKECMDGOALS))

.default: help

export UID=$(shell id -u)
export GID=$(shell id -g)
export COMPOSE_PROJECT_NAME=media

DEV_DIR=.dev
include ${DEV_DIR}/.mk/*/*.mk
include ${DEV_DIR}/.mk/*.mk


# Hello Daria,
#
# I wanted to thank you for your explanations and curriculum.
#
# I'll send you my CV in both languages.
#
# I'm a little bit confused about certification. Could you please explain to me a little bit more about that. I found Amazon certification paths ( https://d1.awsstatic.com/training-and-certification/docs/AWS_certification_paths.pdf ) What I'll get in the end of the bootcamp. Thank you.
#
#
#

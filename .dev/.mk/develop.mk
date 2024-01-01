##@ Develop:
.PHONY: api
api: ## start shell in media
	docker-compose exec media-api sh

front-exec: ## start frontend in ssr
	docker-compose exec media-front sh

front-run: ## start frontend in ssr
	docker-compose run media-front sh

tidy:
	docker-compose exec media-api sh -c "go mod tidy"

web:
	docker-compose exec media-web sh

swager:	
	docker-compose exec media-api sh -c "swag init -g ./cmd/server.go -o ./docs --parseInternal --parseDependency"

build-tailwind-front:
	docker-compose exec media-front sh -c "npx tailwindcss -i ./src/tailwind.css -o ./public/tailwind.css"

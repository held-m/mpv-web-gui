##@ System:

build: ## build project
	docker-compose build

up: ## start project
	docker-compose up -d --remove-orphans

stop: ## stop project
	docker-compose stop

down: ## stop project
	docker-compose down

watch: ## watch project
	docker-compose up --remove-orphans

state: ## show state
	docker-compose ps

logs: ## show last 100 lines of logs
	docker-compose logs --tail=100 $(ARGS)

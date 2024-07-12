.PHONY: up down build logs

up:
	cd docker && docker-compose up -d

down:
	cd docker && docker-compose down

build:
	cd docker && docker-compose build

logs:
	docker-compose logs -f

backend:
	docker-compose up -d backend

frontend:
	docker-compose up -d frontend

mongo:
	docker-compose up -d mongo

stop-backend:
	docker-compose stop backend

stop-frontend:
	docker-compose stop frontend

stop-mongo:
	docker-compose stop mongo

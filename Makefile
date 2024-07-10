.PHONY: up down build logs

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose build

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

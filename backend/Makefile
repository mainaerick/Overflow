ifneq (,$(wildcard ./.env))
include .env
export
ENV_FILE_PARAM = --env-file .env

endif

build:
	docker compose up --build -d --remove-orphans

up:
	docker compose up -d

pull:
	docker compose pull

down:
	docker compose down

show-logs:
	docker compose logs

down-v:
	docker compose down -v

volume:
	docker volume inspect django_real_estate_postgres_data

my-db:
	docker compose exec postgres-db psql --username=postgres --dbname=overflow


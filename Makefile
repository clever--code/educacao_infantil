prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

start-prod-server: install-dependencies
	quasar build -m pwa && quasar serve -p 8080 -H '0.0.0.0' ./dist/pwa

dev:
	docker-compose -f docker-compose.yml up

start-dev-server: install-dependencies
	quasar dev -p 8080 -H '0.0.0.0'

install-dependencies:
	npm install

.PHONY: setup run run-server run-client

setup:
	@yarn --cwd client install
	@yarn --cwd server install

run:
	@yarn start

run-server:
	@yarn start:server

run-client:
	@yarn start:client

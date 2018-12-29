install: install-deps install-flow-typed

install-deps:
	yarn

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npm run flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test

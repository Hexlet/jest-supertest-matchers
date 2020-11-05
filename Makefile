install: install-deps install-flow-typed

install-deps:
	npm ci

install-flow-typed:
	npm run flow-typed install

test:
	npm test

check-types:
	npm run flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test

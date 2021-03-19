install:
	npm ci

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test

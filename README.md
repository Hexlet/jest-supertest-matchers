##
[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=nodejs-package)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=nodejs-package).
##

# jest-supertest-matchers

[![Github Actions](../../workflows/CI/badge.svg)](../../actions?query=workflow%3A"CI")

Jest plugin for testing HTTP status code.

## Setup

```sh
npm i jest-supertest-matchers
```

```javascript
import app from '../app';
import matchers from 'jest-supertest-matchers';
import request from 'supertest';

// inside tests
beforeAll(() => {
  expect.extend(matchers);
});

it('example', async () => {
  const res = await request(app).get('/');
  expect(res).toHaveHTTPStatus(200);
});
```

## Run tests

```sh
$ make test
```

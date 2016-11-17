# jest-supertest-matchers

[![Code Climate](https://codeclimate.com/github/hexlet/jest-supertest-matchers/badges/gpa.svg)](https://codeclimate.com/github/hexlet/jest-supertest-matchers)
[![Issue Count](https://codeclimate.com/github/hexlet/jest-supertest-matchers/badges/issue_count.svg)](https://codeclimate.com/github/hexlet/jest-supertest-matchers)
[![Build Status](https://travis-ci.org/hexlet/jest-supertest-matchers.svg?branch=master)](https://travis-ci.org/hexlet/jest-supertest-matchers)

## Setup

```javascript
import app from '../app';
import matchers from 'jest-supertest-matchers';
import request from 'supertest';

// inside tests
beforeAll(() => {
  jasmine.addMatchers(matchers);
});

it('example', async () => {
  const res = request(app).get('/');
  expect(res).toHaveHTTPStatus(200);
});
```

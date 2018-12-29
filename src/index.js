// @flow

import {
  matcherHint,
  printReceived,
  printExpected,
} from 'jest-matcher-utils';

import { htmlToText } from './utils';

export default {
  toHaveHTTPStatus(actual, expected) {
    const pass = actual.status === expected;
    const bodyMessage = () => (actual.text ? htmlToText(actual.text) : '');
    const message = pass
      ? () => matcherHint('.not.toHaveHTTPStatus') // eslint-disable-line
        + '\n\n'
        + `Expected status not to be ${printReceived(actual.status)}:\n\n ---\n\n${bodyMessage()}`
      : () => matcherHint('.toHaveHTTPStatus') // eslint-disable-line
        + '\n\n'
        + `Expected value to be ${printExpected(expected)}, instead received ${printReceived(actual.status)}\n\n ---\n\n`
        + bodyMessage();
    return { pass, message };
  },
};

// @flow

import {
  matcherHint,
  printReceived,
  printExpected,
} from 'jest-matcher-utils';

import { htmlToText } from './utils';

export default {
  toHaveHTTPStatus() {
    return {
      compare(actual, expected) {
        const pass = actual.status === expected;
        const bodyMessage = () => {
          return actual.text ? htmlToText(actual.text) : '';
        };
        const message = pass
        ? () => matcherHint('.not.toHaveHTTPStatus') + '\n\n' +
          `Expected status not to be ${printReceived(actual.status)}:\n\n ---\n\n${bodyMessage()}`
        : () => matcherHint('.toHaveHTTPStatus') + '\n\n' +
          `Expected value to be ${printExpected(expected)}, instead received ${printReceived(actual.status)}\n\n ---\n\n` +
          bodyMessage();
        return { pass, message };
      },
    };
  },
};

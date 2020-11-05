import {
  matcherHint,
  printReceived,
  printExpected,
} from 'jest-matcher-utils';

import { htmlToText } from './utils.js';

export default {
  toHaveHTTPStatus(actual, expected) {
    const pass = (actual.status === expected);
    const bodyMessage = () => (actual.text ? htmlToText(actual.text) : '');
    const message = pass
      ? () => [
        matcherHint('.not.toHaveHTTPStatus'),
        `Expected status not to be ${printReceived(actual.status)}:`,
        '---',
        bodyMessage(),
      ].join('\n\n')
      : () => [
        matcherHint('.toHaveHTTPStatus'),
        `Expected value to be ${printExpected(expected)}, instead received ${printReceived(actual.status)}`,
        '---',
        bodyMessage(),
      ].join('\n\n');

    return { pass, message };
  },
};

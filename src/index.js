// @ts-check

import {
  matcherHint,
  printReceived,
  printExpected,
} from 'jest-matcher-utils';

import { htmlToText } from './utils.js';

/**
 * Matches that http response has status code
 * @example
 * expect({ status: 200 }).toHaveHTTPStatus(200); //true
 * expect({ status: 200 }).toHaveHTTPStatus(301); //false
 */
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

// @flow

import { htmlToText } from '../src/utils';
import matchers from '../src/index';

describe('matchers', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('toHaveHTTPStatus', () => {
    expect({ status: 200 }).toHaveHTTPStatus(200);
  });

  it('toHaveHTTPStatus (error)', () => {
    const text = 'one<br> two <br> three';
    try {
      expect({ status: 200, text }).toHaveHTTPStatus(300);
    } catch (e) {
      expect(e.message.split('---\n\n')[1]).toBe(htmlToText(text));
    }
  });

  it('not.toHaveHTTPStatus', () => {
    expect({ status: 200 }).not.toHaveHTTPStatus(301);
  });

  it('not.toHaveHTTPStatus (error)', () => {
    const text = 'one<br> two <br> three';
    try {
      expect({ status: 200, text }).not.toHaveHTTPStatus(200);
    } catch (e) {
      expect(e.message.split('---\n\n')[1]).toBe(htmlToText(text));
    }
  });
});

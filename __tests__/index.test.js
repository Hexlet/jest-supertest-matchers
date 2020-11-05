import { htmlToText } from '../src/utils.js';
import matchers from '../index.js';

describe('matchers', () => {
  beforeAll(() => {
    expect.extend(matchers);
  });

  it('toHaveHTTPStatus', () => {
    expect({ status: 200 }).toHaveHTTPStatus(200);
  });

  it('toHaveHTTPStatus (error)', () => {
    const text = 'one<br> two <br> three';
    const html = htmlToText(text);
    try {
      expect({ status: 200, text }).toHaveHTTPStatus(300);
    } catch (e) {
      expect(e.message.includes(html)).toBe(true);
    }
  });

  it('not.toHaveHTTPStatus', () => {
    expect({ status: 200 }).not.toHaveHTTPStatus(301);
  });

  it('not.toHaveHTTPStatus (error)', () => {
    const text = 'one<br> two <br> three';
    const html = htmlToText(text);
    try {
      expect({ status: 200, text }).not.toHaveHTTPStatus(200);
    } catch (e) {
      expect(e.message.includes(html)).toBe(true);
    }
  });
});

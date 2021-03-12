// @ts-check

/**
 * Convert html to text
 * @example
 * const html = 'one<br> two <br> three';
 * htmlToText(html)
 * // one
 * // two
 * // three
 */
export const htmlToText = (body) => body.split('<br>').map((str) => str.trim()).join('\n');

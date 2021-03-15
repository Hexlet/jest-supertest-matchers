// @ts-check

/**
 * Convert html to text
 * @example
 * htmlToText('one<br> two <br> three')
 * // one
 * // two
 * // three
 */
export const htmlToText = (body) => body.split('<br>').map((str) => str.trim()).join('\n');

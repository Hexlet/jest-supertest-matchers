// @flow

export const htmlToText = body => body.split('<br>').map(str => str.trim()).join('\n');

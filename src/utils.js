// @flow
/* eslint-disable import/prefer-default-export */

export const htmlToText = body => body.split('<br>').map(str => str.trim()).join('\n');

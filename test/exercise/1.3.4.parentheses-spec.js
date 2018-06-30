'use strict';

const assert = require('assert');
const parentheses = require('../../src/exercise/1.3.4.parentheses');

describe('parentheses', () => {
  it('match', () => {
    const source = {
      ']': false,
      '[': false,
      '[}': false,
      '[]': true,
      '[a]': true,
      '[a)': false,
      '[()]{}{[()()]()}': true,
      '[(])': false
    };

    for (let str in source) {
      if (!source.hasOwnProperty(str)) {
        continue;
      }

      assert.equal(parentheses(str), source[str]);
    }

  });
});
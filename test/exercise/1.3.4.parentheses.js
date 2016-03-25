'use strict';

var assert = require('chai').assert;
var parentheses = require('../../src/exercise/1.3.4.parentheses');

describe('parentheses', () => {
  it('match', () => {
    var source = {
      ']': false,
      '[': false,
      '[}': false,
      '[]': true,
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
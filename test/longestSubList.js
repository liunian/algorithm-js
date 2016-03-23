/**
 * Created by bd on 15/4/1.
 */
var assert = require('chai').assert;
var LS = require('../src/longestSubList');

describe('longestSubList', () => {
  var sources = [
    [1, -2, 3, 5, -1],
    [1, -2, 3, -8, 5, 1],
    [1, -2, 3, -2, 5, 1],
    []
  ];

  var res = [
    [3, 5],
    [5, 1],
    [3, -2, 5, 1],
    []
  ];

  it('test source-result map', () => {
    var arr = sources.map(LS);
    arr.forEach((i, index) => {
      assert.deepEqual(i, res[index]);
    });
  });

});
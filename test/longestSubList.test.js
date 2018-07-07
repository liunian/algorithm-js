/**
 * Created by bd on 15/4/1.
 */
const assert = require('assert');
const LS = require('../src/longestSubList');

describe('longestSubList', () => {
  const sources = [
    [1, -2, 3, 5, -1],
    [1, -2, 3, -8, 5, 1],
    [1, -2, 3, -2, 5, 1],
    []
  ];

  const res = [
    [3, 5],
    [5, 1],
    [3, -2, 5, 1],
    []
  ];

  it('test source-result map', () => {
    const arr = sources.map(LS);
    arr.forEach((i, index) => {
      assert.deepEqual(i, res[index]);
    });
  });

});
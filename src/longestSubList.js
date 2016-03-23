/**
 * 找出和最大的连续子数组，如  [1, -2, 3, 5, -1] 的结果是 [3, 5]
 *
 * 动态规划
 *
 * item(i) 表示 index 为 i 的元素
 * Sum(x) 表示 x 数组的元素和
 * S(i) 表示以 index 是 i 的元素为最后一个元素的子数组
 * S(k) = Sum(S(k-1)) > 0 ? S(k-1).concat(item(k)) : [item(k)]
 *
 * @param {Array} list
 * @return {Array}
 */
function longestSubList(list) {
  var len = list.length;
  var ret = [];

  // return empty if empty
  if (len == 0) {
    return ret;
  }

  var memo = [[list[0]]];
  var sumMemo = [list[0]];
  var inx = 0;

  for (var i = 1; i < len; i++) {
    if (sumMemo[i - 1] > 0) {
      memo[i] = memo[i - 1].concat(list[i]);
      sumMemo[i] = sumMemo[i - 1] + list[i];
    } else {
      memo[i] = [list[i]];
      sumMemo[i] = list[i];
    }

    if (sumMemo[i] > sumMemo[inx]) {
      inx = i;
    }
  }

  return memo[inx];
}

module.exports = longestSubList;
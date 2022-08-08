// https://leetcode.cn/problems/dKk3P7/

// 这个比较简单
// 1. 排序对比
// 2. map / 数组
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s === t) return false;
  if (s.length != t.length) {
    return false;
  }
  let counts = new Map();
  for (let a of s) {
    counts.set(a, (counts.get(a) || 0) + 1);
  }
  for (let a of t) {
    let value = counts.get(a);
    if (!value || value == 0) {
      return false;
    }
    counts.set(a, (value || 0) - 1);
  }
  return true;
};

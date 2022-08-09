// https://leetcode.cn/problems/lwyVBB/
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
// 1. 首先要知道一个只是 'ab' > 'bc' = false 字符串比较规则
// 然后把 序列换成正常序列
// 然后比较大小就好
var isAlienSorted = function (words, order) {
  const map = new Map(),
    orderLen = order.length,
    wordsLen = words.length;

  // 把 外星序列转换成正常序列
  for (let i = 0; i < orderLen; i++) {
    map.set(order[i], String.fromCharCode(97 + i));
  }

  for (let i = 0; i < wordsLen; i++) {
    words[i] = [...words[i]].reduce((a, b) => a + map.get(b), "");
    // 特判 简化
    if (i && words[i] < words[i - 1]) return false;
  }
  return true;
};

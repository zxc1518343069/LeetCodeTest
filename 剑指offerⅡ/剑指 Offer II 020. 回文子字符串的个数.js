// https://leetcode.cn/problems/a7VOhD/
/**
 * @param {string} s
 * @return {number}
 */
// 中心扩展
// 1. 思路很简单 就是如果是字符串两边一定一样。
// 2。 所以找到中间的字符 向两边寻找即刻 注意  奇偶数
var countSubstrings = function (s) {
  const len = s.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    // 字符串是奇数的情况
    for (
      let left = i, right = i;
      left >= 0 && right < len && s.charAt(left) === s.charAt(right);
      left--, right++
    ) {
      count++;
    }
    // 字符串是偶数的情况
    for (
      let left = i, right = i + 1;
      left >= 0 && right < len && s.charAt(left) === s.charAt(right);
      left--, right++
    ) {
      count++;
    }
  }

  return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));

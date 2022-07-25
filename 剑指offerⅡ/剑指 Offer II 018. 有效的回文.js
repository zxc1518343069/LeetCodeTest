/**
 * @param {string} s
 * @return {boolean}
 */
// 简单题目 就是处理 字符串有点 麻烦
// 正则 yyds
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
      }
      left++
      right--
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

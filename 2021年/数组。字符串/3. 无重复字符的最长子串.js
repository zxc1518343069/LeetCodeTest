/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0 // 第二次出现某个字符的位置
  let res = 0 // 结果
  let map = new Map() //  字符和出现位置
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= l) {
      // 如果存在以出现字符
      l = map.get(s[i]) + 1 // 更新出现位置
    }
    res = Math.max(i - l + 1, res)
    map.set(s[i], i)
  }

  return res
};

// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// codeTop 如果允许重复一次字符呢——微软-苏州-Lead面（2020.11.24）
var lengthOfLongestSubstring = function(s) {
  let l = 0, res = 0, len = s.length
  let map = new Map()
  for (let i = 0; i < len; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= l) {
      l = map.get(s[i]) + 1
    }
    map.set(s[i], i)
    res = Math.max(res, i - l + 1)
  }
  return res
};

lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let str = '';
  let size = 0;
  for (let i = 0; i < len; i++) {
    const char = s.charAt(i); // 找到 s[i]
    const index = str.indexOf(char); //  返回第一次出现的索引
    if (index > -1) {
      str = str.substring(index + 1) + char;
    } else {
      str += char;
      size = str.length > size ? str.length : size;
    }
  }
  return size;
};

console.log(lengthOfLongestSubstring('abcabcbb')) //3
// console.log(lengthOfLongestSubstring('bbbbb')) //1
// console.log(lengthOfLongestSubstring('pwwkew')) //3
// console.log(lengthOfLongestSubstring('')) //0


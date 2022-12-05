// https://leetcode-cn.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩散法
var longestPalindrome = function(s) {
  const len = s.length
  if (len < 2) return s
  let res = s[0]
  const extend = (l, r) => {
    while (l >= 0 && r < len && s[l] === s[r]) {
      l--
      r++
    }
    return s.slice(l + 1, r)
  }
  for (let i = 0; i < len; i++) {
    const str1 = extend(i, i) // 以当前位置 向两边扩散
    const str2 = extend(i, i + 1) // 以当前位置和下一个位置 向两边扩散
    if (Math.max(str1.length, str2.length) > res.length) {
      if (str1.length > str2.length) // 操 注意这里的判断条件  不一定比res 大就比 str2 大
        res = str1
      else
        res = str2
    }
  }
  return res
};
console.log(longestPalindrome('a'))
console.log(longestPalindrome('aaaa'))
console.log(longestPalindrome('ac'))
console.log(longestPalindrome('bb'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('babad'))

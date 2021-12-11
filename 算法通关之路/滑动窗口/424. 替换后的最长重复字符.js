// https://leetcode-cn.com/problems/longest-repeating-character-replacement/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 思路
//  题目要求 最多替换 k 次  求重复字母的最长子串的长度
// 找到出现次数最多的 字符 然后把他换成  所需要的字符 就可以 达成题目要求
var characterReplacement = function(s, k) {
  if (!s.length) return 0

  const len = s.length
  let left = 0, right = 0, maxCharShow = 0
  const byteCount = new Map()

  for (; right < len; right++) {
    const byte = s[right]
    byteCount.set(byte, byteCount.get(byte) ? byteCount.get(byte) + 1 : 1)

    maxCharShow = Math.max(maxCharShow, byteCount.get(byte)) // 更新最大次数

    if (right - left + 1 > k + maxCharShow) {
      // 子串长度 > 能替换数+ 出现最多的次数
      //  要保证 子串长度 < 能替换数+ 出现最多的次数  这样 替换后 才有重复字母的最长子串的长度
      byteCount.set(s[left], byteCount.get(s[left]) ? byteCount.get(s[left]) - 1 : 0)
      left++
    }
  }

  console.log(maxCharShow, right, left, byteCount)
  return right - left
};

console.log(characterReplacement(s = 'ABAB', k = 2))
console.log(characterReplacement(s = 'AABABBA', k = 1))

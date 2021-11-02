// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  return s.slice(n) + s.slice(0, n)
};


console.log(reverseLeftWords(s = 'abcdefg', k = 2))

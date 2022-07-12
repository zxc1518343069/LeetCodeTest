// https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 这个也好些 直接字符串切割。。。 api做法
var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n);
};

// 想自己做的话就是便利拼接即可

console.log(reverseLeftWords((s = "abcdefg"), (k = 2)));

// https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/


/**
 * @param {number} n
 * @return {number}
 */

/*
数学归纳法
 */

var countDigitOne = function(n) {
  let count = 0
  for (let i = 0; i <= n; i *= 10) {
    let divide = i * 10
  }
  return count
};
// n / 10 + i % 10 > 1?1:0 = 1 //  0 - 9
// n / 10 + i %

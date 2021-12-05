// https://leetcode-cn.com/problems/number-of-1-bits/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// & 两个位都为1时，结果才为1
// ~  0变 1   1变 0
// ^两个位相同为0，相异为1
// |	或	两个位都为0时，结果才为0

var hammingWeight = function(n) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    if (n >> i & 1) {
      res++
    }
  }
  return res
};

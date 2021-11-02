// https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/*
快速幂算法
思路   2^10 = 2^5 * 2^5 = 2^2*2^2*2  * 2^2*2^2*2
*/
var myPow = function(x, n) {
  x = parseFloat(x)
  if (n < 0) {
    x = parseFloat(1 / x)
    n = -n
  }
  const divide = (n) => {
    if (n === 0)
      return 1
    if (n === 1)
      return x
    let tmp = divide(n / 2)
    if (n & 1 === 1) // 奇数
      return tmp * tmp * x
    else
      return tmp * tmp
  }
  return divide(n).toFixed(5)
};
console.log(myPow(2, 10))

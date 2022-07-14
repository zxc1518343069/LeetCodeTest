// https://leetcode.cn/problems/qiu-12n-lcof/
/**
 * @param {number} n
 * @return {number}
 */
// 不能用 乘除 直接迭代即可
var sumNums = function (n) {
  return n && n + sumNums(n - 1);
};

console.log(sumNums(3));
console.log(sumNums(9));

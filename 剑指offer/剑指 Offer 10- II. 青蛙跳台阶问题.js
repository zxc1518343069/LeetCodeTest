// https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

/**
 * @param {number} n
 * @return {number}
 */
/*
  简单DP
 */
var numWays = function(n) {
  if (n <= 1) return 1
  if (n === 2) return 2
  let n1 = 1, n2 = 2, sum;
  for (let i = 1; i < n; i++) {
    sum = (n1 + n2) ;
    n1 = n2;
    n2 = sum;
  }
  return n1;
};

console.log(numWays(44))
console.log(numWays(3))

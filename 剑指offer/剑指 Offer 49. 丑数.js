// https://leetcode-cn.com/problems/chou-shu-lcof/
/**
 * @param {number} n
 * @return {number}
 */
/*
只包含因子为 2 3 5 的数为丑数
1的下一个丑数 一定是    2    1 * 2  也就是 2 * [0]
2的下一个丑数  一定是   3    1 * 3  也就是 3 * [0]
3的下一个丑数  是      4    2  * 2 也就是 2 * [1]
4的下一个丑数  是      5    1  * 5 也就是 5 * [0]
5的下一个丑数  是      6    2  * 3 也就是 2 * [2]
6的下一个丑数  是      8    2  * 4 也就是 2 * [3]
 */
var nthUglyNumber = function(n) {
  const dp = [1]
  let one = 0, two = 0, three = 0

  while (dp.length < n) {
    const cur = Math.min(2 * dp[one], 3 * dp[two], 5 * dp[three])
    if (cur === 2 * dp[one])
      one++
    if (cur === 3 * dp[two])
      two++
    if (cur === 5 * dp[three])
      three++
    dp.push(cur)
  }
  return dp[dp.length - 1]


  // let dp = [1];
  // let i = 0, j = 0, k = 0;
  // let cur = 0;
  // while (dp.length < n) {
  //   cur = Math.min(2 * dp[i], 3 * dp[j], 5 * dp[k]);
  //   if (cur === 2 * dp[i]) {
  //     i++;
  //   }
  //   if (cur === 3 * dp[j]) {
  //     j++;
  //   }
  //   if (cur === 5 * dp[k]) {
  //     k++;
  //   }
  //   dp.push(cur);
  // }
  // return dp[dp.length - 1];
};

console.log(nthUglyNumber(10))

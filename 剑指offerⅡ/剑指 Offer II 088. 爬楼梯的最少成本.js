// https://leetcode.cn/problems/GzCJIP/
/**
 * @param {number[]} cost
 * @return {number}
 */
// 歧义点在于 给出的是 台阶  台阶+1 才是楼顶
// 所以需要 <= n
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  console.log(dp);
  return dp[n];
};
console.log(minCostClimbingStairs([10, 15, 20]));

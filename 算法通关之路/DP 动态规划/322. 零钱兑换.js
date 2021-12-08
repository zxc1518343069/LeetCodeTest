// https://leetcode-cn.com/problems/coin-change/


/* DP
* 思路  也就是 先判断大小  然后 从数  到最大值  每次都有 几个硬币
* 1 2 5      11
* 兑换成  1-11   一 只能有  1 - 11 个硬币
* 2             从二开始    这样兑换成2就有1种(最少硬币个数) 3 就有两种  1 2
* */
let coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

// 3
console.log(coinChange(coins = [1, 2, 5], amount = 11))
//
// // -1
// console.log(coinChange(coins = [2], amount = 3))
//
// // 0
// console.log(coinChange(coins = [1, 2, 5], amount = 11))
//
// // 1
// console.log(coinChange(coins = [1, 2, 5], amount = 11))

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 后补
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] + dp[i - coin] // i的情况+ i-coin的情况    dp存储的是凑成的方式
    }
  }
  console.log(dp)
  return dp[amount]
};
console.log(change(amount = 5, coins = [1, 2, 5]))

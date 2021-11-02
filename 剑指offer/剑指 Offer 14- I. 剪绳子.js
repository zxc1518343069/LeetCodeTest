// https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
/**
 * @param {number} n
 * @return {number}
 */
/*
 数学思想 贪心    2 3 可以组成除了 0 1 之外的任何数字    比如 5 = 2 + 3 但是 < 2 * 3  6 = 3+3 < 3 * 3
 所以要尽可能的 拆除更多的3
 */
var integerBreak = function(n) {
  if (n === 2) return 1
  if (n === 3) return 2
  if (n % 3 === 0) {
    return 3 ** (n / 3)
  } else if (n % 3 === 1) {
    return 3 ** (Math.floor(n / 3) - 1) * 2 * 2
  } else if (n % 3 === 2) {
    return 3 ** Math.floor(n / 3) * 2
  }
};

/*
 dp
 */
var integerBreak2 = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[2] = 1
  dp[3] = 2
  // dp[4] = 4
  // dp[5] = 6  2 * 3
  // dp[6] = 9  3 * 3
  // dp[7] = 12  2 * 2 * 3    2² * 3    3 * dp[4]
  // dp[8] = 18  2 * 3 * 3    2 * 3²    2 * dp[6]
  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
    }
  }
  return dp[n] % (1e9 + 7)
};


console.log(integerBreak(120))
console.log(integerBreak2(120)) // 953271157
console.log(integerBreak(120)) // 12157665459056929000

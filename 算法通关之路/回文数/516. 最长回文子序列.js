// https://leetcode-cn.com/problems/longest-palindromic-subsequence/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const length = s.length
  const dp = new Array(length).fill(0).map(() => new Array(length).fill(0)); // 初始化
  // 首先  假设 中间最长回文子串已经被确定  为 dp[i][j]   i j 为起始终止 下标
  // 如果是回文数的话  dp[i][j]  = dp[i+1][j-1] +2

  // 明确三种情况    i == j 时     i == j == 1
  //  当 s[i] == s[j]    s[i][j]  = s[i+1][j-1] +2
  // 如果  s[i] !== s[j]  就是   s[i+1][j]  s[i][j-1]  的最大值

  // 根据递归关系  dp[i][j]  = dp[i+1][j-1] +2  可知 我们需要依赖 i+1 j-1  所以 i 是倒叙 j是正序

  for (let i = 0; i < length; i++) {
    dp[i][i] = 1;
  }

  for (let i = length - 1; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][length - 1];
};
console.log(longestPalindromeSubseq('bbbab')) // 4

// https://leetcode-cn.com/problems/longest-common-subsequence/

let longestCommonSubsequence = function(text1, text2) {
  let n = text1.length,
      m = text2.length;
  if (n === 0 || m === 0) return 0;
  /* 初始化  里面存得是长度*/
  let dp = Array.from(new Array(n + 1),
      () => new Array(m + 1).fill(0));
  /*     A  B  A  Z  D  C
   *  B  0  1  1  1  1  1
   *  A  1  1  2  2  2  2
   *  C
   *  B
   *  A
   *  D
   */
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        /* 如果字母相等。则 是上一个字符串的解+1*/
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        /* 如果字母不相等。则 是上两个字符串的解的最大值*/
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[n][m];
};

console.log(longestCommonSubsequence('ABAZDC', 'BACBAD'))

// https://leetcode.cn/problems/qJnOS7/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 一个字符串的 子序列 是指这样一个新的字符串：
// 它是由原字符串在  不改变字符的相对顺序的情况下  删除某些字符
// （也可以不删除任何字符）后组成的新字符串。
// 即 保证顺序不能乱 可以删除不需要的字符

// 公共子序列 是这两个字符串所共同拥有的子序列
var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length,
    m = text2.length;
  if (n === 0 || m === 0) return 0;
  /* 初始化  里面存得是 最长公共子序列的长度*/
  let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
  /*     A  B  C  D  E
   *  A  1  1  1  1  1
   *  C  1  1  2  2  2
   *  E  1  1  2  2  3
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

// https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
/**
 * @param {number} num
 * @return {number}
 */

// DP的方式
// 参考代码
// https://leetcode.cn/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/shou-hui-tu-jie-dfsdi-gui-ji-yi-hua-di-gui-dong-ta/
var translateNum = function (num) {
  const str = num.toString();
  const n = str.length;

  const dp = new Array(n + 1);
  dp[0] = 1; // 只有一种变法
  dp[1] = 1; // 只有一种变法

  for (let i = 2; i < n + 1; i++) {
    const temp = Number(str[i - 2] + str[i - 1]);
    // 判断是否大于10 如果大于10 则有两种变法，是前两个之和
    if (temp >= 10 && temp <= 25) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[n]; // 翻译前n个数的方法数，即翻译整个数字
};

// todo: 看看能不能做出 递归dfs 版本

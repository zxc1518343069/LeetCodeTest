// https://leetcode.cn/problems/JEj789/
/**
 * @param {number[][]} costs
 * @return {number}
 */
// 一排房子
// 使其相邻的两个房子颜色不能相同
var minCost = function (costs) {
  const n = costs.length;
  // 存储 染色房子 所对应 的 花费
  let dp = new Array(3).fill(0);
  for (let j = 0; j < 3; j++) {
    dp[j] = costs[0][j];
  }
  // 现在dp 代表 第一栋房子染成三种颜色对应花费
  for (let i = 1; i < n; i++) {
    let newDp = new Array(3).fill(0);

    // 前 i 栋房子 染成颜色 花费 + 前一栋房子 染最便宜颜色的花费
    for (let j = 0; j < 3; j++) {
      newDp[j] = costs[i][j] + Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]);
    }
    dp = newDp;
  }
  return Math.min(...dp);
};
console.log(
  minCost([
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19],
  ])
);

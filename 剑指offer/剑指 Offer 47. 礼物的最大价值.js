// https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  if (!grid.length) return 0
  let x = grid.length, y = grid[0].length
  let dp = new Array(x).fill(new Array(y).fill(0))
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (i === 0 && j === 0) {
        // 初始位置
        dp[i][j] = grid[i][j]
      } else if (i === 0) { // 即在Y轴上移动
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      } else if (j === 0) { // 在x轴上移动
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else { // 在其他区域移动  取两者最大值
        dp[i][j] = Math.max((dp[i - 1][j] + grid[i][j]), (dp[i][j - 1] + grid[i][j]));
      }
    }
  }
  return dp[x - 1][y - 1]
};
console.log(maxValue([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))

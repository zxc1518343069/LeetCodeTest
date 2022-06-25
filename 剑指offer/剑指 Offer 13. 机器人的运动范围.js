// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  let getSum = x => x % 10 + Math.floor(x / 10) // 获取位数之和
  let direction = [[0, 1], [0, -1], [1, 0], [-1, 0]] // 定义上下左右
  let distance = new Set([]) //  路线

  let dfs = (x, y) => {
    if (getSum(x) + getSum(y) > k) { //  题目要求 不满足跳出
      return
    }
    distance.add(`${ x },${ y }`) // 记录当前的 行进路程
    for (let [dx, dy] of direction) {
      let newx = x + dx, newy = y + dy // 走四个方向
      // 确保在方格内 且 不走走过的路径
      if (newx >= 0 && newy >= 0 && newx < m && newy < n && !distance.has(`${ newx },${ newy }`)) {
        dfs(newx, newy)
      }
    }
  }
  dfs(0, 0)
  return distance.size
};
console.log(movingCount(2, 3, 1))
console.log(movingCount(3, 1, 0))

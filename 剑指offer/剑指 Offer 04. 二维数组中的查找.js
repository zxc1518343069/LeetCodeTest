// https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 由题意可知  从左往右  依次递增   从上到下  依次递增
// 思路 从 左下角出发
// 如果比左下角还小  则一定比 这一行都小，则去上面的一行
// 否则 在这一行递增
const findNumberIn2DArray = function(matrix, target) {
  if (!matrix.length) return false
  let x = matrix.length - 1, y = 0
  let yMax = matrix[0].length
  while (x >= 0 && y <= yMax) {
    if (matrix[x][y] === target)
      return true
    else if (matrix[x][y] > target)
      x--
    else
      y++
  }
  return false
};
// 还有一种方法 对每一行做一次二分。 或者可以把二分和这个方法1结合

console.log(findNumberIn2DArray([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 5))

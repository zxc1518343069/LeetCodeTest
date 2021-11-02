// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length)
    return []

  const res = []
  let top = 0, left = 0, bottom = matrix.length - 1, right = matrix[0].length - 1
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i])
    for (let i = top; i < bottom; i++) res.push(matrix[i][right])
    for (let i = right; i > left; i--) res.push(matrix[bottom][i])
    for (let i = bottom; i > top; i--) res.push(matrix[i][left])
    left++
    top++
    right--
    bottom--
  }
  if (top === bottom) { // 剩下一行，从左到右依次添加  给的不一定是个正方形
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  } else if (left === right) { // 剩下一列，从上到下依次添加
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  }
  return res;
}
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) // 输出：[1,2,3,6,9,8,7,4,5]

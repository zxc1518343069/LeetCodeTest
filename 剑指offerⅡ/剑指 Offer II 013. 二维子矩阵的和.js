// https://leetcode.cn/problems/O4NDxx/
/**
 * @param {number[][]} matrix
 */
let sumMap;
var NumMatrix = function (matrix) {
  // 非空判断处理
  if (matrix == null || !matrix.length || !matrix[0].length) {
    return;
  }
  // 初始化前缀和数组
  // 如果输入矩阵的行数和列数分别是m和n，那么sum辅助矩阵的行数和列数分别是m+1和n+1，只是为了简化代码逻辑
  sumMap = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0));
  // 建立前缀和矩阵
  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      rowSum += matrix[i][j] - 0;
      sumMap[i + 1][j + 1] = sumMap[i][j + 1] + rowSum;
    }
  }
  console.log(sumMap);
};

/** 建立的前缀和 所示
 *[   0,   0,  0,  0,  0,  0 ],
  [   0,   3,  3,  4,  8, 10 ],
  [   0,   8, 14, 18, 24, 27 ],
  [   0,   9, 17, 21, 28, 36 ],
  [   0,  13, 22, 26, 34, 49 ],
  [   0,  14, 23, 30, 38, 58 ]
]
 */

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
// row1, col1, row2, col2  和 =
// sumMap[row2 + 1][col2 + 1] - sumMap[row1][col2 + 1]
// - sumMap[row2 + 1][col1] + sumMap[row1][col1]

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    sumMap[row2 + 1][col2 + 1] -
    sumMap[row1][col2 + 1] -
    sumMap[row2 + 1][col1] +
    sumMap[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
// console.log(NumMatrix.prototype.sumRegion(2, 1, 4, 3));
// console.log(NumMatrix.prototype.sumRegion(1, 1, 2, 2));
// console.log(NumMatrix.prototype.sumRegion(1, 2, 2, 4));
NumMatrix([[-1]]);
console.log(NumMatrix.prototype.sumRegion(0, 0, 0, 0));

// https://leetcode-cn.com/problems/unique-paths/
/*
*  分解子问题  到 终点的 =  左数 + 上数
*
*
* */


let uniquePaths = function(m, n) {
  const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    /* 题目要求 只能下或右走。所以这样的方法只有一种*/
    arr[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    /* 同上 */
    arr[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
    }
  }
  return arr[m - 1][n - 1]
};


let uniquePaths2 = function(m, n) {
  const arr = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[j] += arr[j-1]
    }
  }
  return arr[n-1]
};

console.log(uniquePaths2(3, 7))

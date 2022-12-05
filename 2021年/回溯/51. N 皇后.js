// https://leetcode-cn.com/problems/n-queens/
let solveNQueens = function(n) {
  /* 初始化 棋盘*/
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }
  const cols = new Set();  // 列集，记录出现过皇后的列
  const diag1 = new Set(); // 正对角线集
  const diag2 = new Set(); // 反对角线集
  const res = [];

  const help = (row)=>{
    /* 终止条件 */
    if (row === n) {
      let tmp = [...board]
      for (let i = 0; i < n; i++) {
        tmp[i] = tmp[i].join('')
      }
      res.push(tmp)
      return
    }

    for (let col = 0; col < n; col++) {
      if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
        board[row][col] = 'Q'
        cols.add(col)
        diag1.add(row + col)
        diag2.add(row - col)
        help(row + 1)

        board[row][col] = '.';  // 撤销该点的皇后
        cols.delete(col);       // 对应的记录也删一下
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }

  }
  help(0)


  return res
};

console.log(solveNQueens(4))

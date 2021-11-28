// https://leetcode-cn.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 最重要的条件 同时发生

var gameOfLife = function(board) {
  const xLength = board.length
  const yLength = board[0].length

  const getStatus = (i, j) => {
    const top = Math.max(0, i - 1),
        bottom = Math.min(xLength - 1, i + 1),
        left = Math.max(0, j - 1),
        right = Math.min(yLength - 1, j + 1)

    let count = 0
    for (let k = top; k < bottom + 1; k++) {
      for (let l = left; l < right + 1; l++) {
        if (board[k][l] === 1 || board[k][l] === -1) {
          count++
        }
      }
    }
    if (count === 4)
      console.log(i, j)
    return count // 返回活细胞数量
  }

  for (let i = 0; i < xLength; i++) {
    for (let j = 0; j < yLength; j++) {
      const status = getStatus(i, j) // 得到这个位置的状态
      // 状态判断
      if (board[i][j] === 0 && status === 3) {
        board[i][j] = -2 // 临时保存状态  下一个状态是活细胞
      } else if (board[i][j] === 1 && [3, 4].includes(status)) {
        // 下一个状态还是 活细胞  为什么是3，4 不是 2，3  因为包含了本身
        board[i][j] = 1
      } else if (board[i][j] === 1) {
        // 下一个状态还是 死细胞 不能直接改变
        board[i][j] = -1
      }
    }
  }
  // 第一个把所有状态设置完善
  // 在遍历一次 更新状态

  for (let i = 0; i < xLength; i++) {
    for (let j = 0; j < yLength; j++) {
      if (board[i][j] === -2) {
        board[i][j] = 1 // 临时保存状态  下一个状态是死细胞
      } else if (board[i][j] === -1) {
        board[i][j] = 0 // 临时保存状态  下一个状态是死细胞
      }
    }
  }
  console.log(board)
};

// [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])
//[[0,0,0,0,0,0],[0,0,0,1,0,0],[0,1,0,0,1,0],[0,1,0,0,1,0],[0,0,1,0,0,0],[0,0,0,0,0,0]]
// gameOfLife([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0], [0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]])

// https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let len = board.length
  let len1 = board[0].length
  let direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  // 建立一个模拟的二维矩阵  记录是否被访问过
  const visited = new Array(len);
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(len1).fill(false);
  }

  const findWord = (x, y, s, sIndex) => {
    if (board[x][y] !== s.charAt(sIndex))
      return false
    else if (sIndex === s.length - 1)
      return true // 证明找完了
    visited[x][y] = true // 从这里开始找
    let result = false
    for (let [dx, dy] of direction) {
      let newx = x + dx
      let newy = y + dy
      // 向上下左右寻找
      if (newx >= 0 && newx < len && newy >= 0 && newy < len1) { // 限制在这个矩阵中
        if (!visited[newx][newy]) {
          const flag = findWord(newx, newy, s, sIndex + 1)
          if (flag) {
            result = true
            break
          }
        }
      }
    }
    visited[x][y] = false
    return result;
  }

  // 从 0，0 开始找
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len1; j++) {
      const flag = findWord(i, j, word, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false
};
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'))

// 2021-7-11
var exist2 = function(board, word) {
  let len = board.length // y
  let len1 = board[0].length // x
  let direction = [[0, 1], [0, -1], [1, 0], [-1, 0]] // 上下移动坐标

  // 建立一个模拟的二维矩阵  记录是否被访问过
  const visited = new Array(len);
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(len1).fill(false);
  }

  const findWord = (x, y, sIndex) => {
    if (board[x][y] !== word[sIndex]) return false
    if (sIndex === word.length - 1) return true // 结束条件
    visited[x][y] = true
    let res = false
    for (let [dx, dy] of direction) {
      let newx = x + dx
      let newy = y + dy
      // 向上下左右寻找
      if (newx >= 0 && newx < len && newy >= 0 && newy < len1) { // 限制在这个矩阵中
        if (!visited[newx][newy]) {
          const flag = findWord(newx, newy,sIndex + 1)
          if (flag) {
            res = true
            break
          }
        }
      }
    }
    visited[x][y] = false // 把找过的地方重新变成false 方便下一次找
    return res
  }

  // 从 0，0 开始找
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len1; j++) {
      const flag = findWord(i, j, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false
};

console.log(exist2([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'))

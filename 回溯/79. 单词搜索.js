// https://leetcode-cn.com/problems/word-search/
/**
 * @param {[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
  let len = board.length
  let len1 = board[0].length
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  const visited = new Array(len);
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(len1).fill(false);
  }

  const findWord = function(x, y, s, k){
    // 取出字符比较
    if (board[x][y] !== s.charAt(k)) {
      return false
    } else if (k === s.length - 1) {
      // 证明找完了
      return true
    }
    visited[x][y] = true
    let result = false

    for (let [dx, dy] of directions) {
      let newx = x + dx
      let newy = y + dy
      if (newx >= 0 && newx < len && newy >= 0 && newy < len1) {
        if (!visited[newx][newy]) {
          const flag = findWord(newx, newy, s, k + 1)
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

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len1; j++) {
      const flag = findWord(i, j, word, 0);
      if (flag) {
        return true;
      }
    }
  }
  return  false
};

console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'))

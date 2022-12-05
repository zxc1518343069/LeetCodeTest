// https://leetcode-cn.com/problems/minesweeper/

/*DFS*/
let updateBoard = function(board, click) {
  let dx = [1, 1, 1, -1, -1, -1, 0, 0]
  let dy = [1, 0, -1, 1, 0, -1, 1, -1]
  let isTrue = (i,j) => i >= 0 && i < board.length && j >= 0 && j < board[i].length;

  let update = (i,j)=>{
    /* 终止条件*/
    let boom = 0
    if (!isTrue(i,j) || board[i][j] !== 'E') return

    for (let k = 0; k < 8; k++) {
      /* 遍历8个方向*/
      let x = i + dx[k]
      let y = j + dy[k]
      /* 判断周围雷数量 */
      if (isTrue(x,y) && board[x][y] === 'M'){
        boom++
      }
    }
    if (boom === 0){
      /* 周围没有雷*/
      board[i][j] = 'B'
      for (let k = 0; k < 8; k++) {
        /* 遍历8个方向*/
        let x = i + dx[k]
        let y = j + dy[k]
        update(x,y)
      }
    }else{
      board[i][j] = boom + ''
    }
  }
  let [cx,cy] = click
  if (board[cx][cy] === 'M')
    board[cx][cy] = 'X'
  else
    update(cx,cy)
  return board
};
console.log(updateBoard([['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'M', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E']]
    , [3, 0]
))
// [['B', '1', 'E', '1', 'B'],
// ['B', '1', 'M', '1', 'B'],
// ['B', '1', '1', '1', 'B'],
// ['B', 'B', 'B', 'B', 'B']]


// console.log(updateBoard([['B', '1', 'E', '1', 'B'],
//       ['B', '1', 'M', '1', 'B'],
//       ['B', '1', '1', '1', 'B'],
//       ['B', 'B', 'B', 'B', 'B']]
//     , [1, 2]
// ))

// [['B', '1', 'E', '1', 'B'],
//  ['B', '1', 'X', '1', 'B'],
//  ['B', '1', '1', '1', 'B'],
//  ['B', 'B', 'B', 'B', 'B']]

/*BFS*/

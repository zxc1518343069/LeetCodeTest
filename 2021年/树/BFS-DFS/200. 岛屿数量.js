// https://leetcode-cn.com/problems/number-of-islands/

/*  初级版本   冲水算法
*   1. 遇到 是1的就把他变成0 递归让他周围的都变成0
*  2 . 返回1  数量++
* */

let numIslands = function(grid) {

  let dx = [-1, 1, 0, 0]
  let dy = [0, 0, -1, 1]
  let res = 0
  let sink = (i,j)=>{
    /* 终止条件 */
    if (grid[i][j] ==='0')
      return 0
    grid[i][j] = '0'

    /* 遍历周围 */
    for (let k = 0; k < dx.length; k++) {
      let x = i+dx[k],y = j+dy[k]
      if (x >= 0 && x < grid.length && y >=0 && y<grid[i].length){
        if (grid[x][y] === '0') continue
        sink(x,y)
      }
    }
    return 1
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '0') continue
      res += sink(i, j)
    }
  }
  return res

};
console.log(numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
])) // 1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])) // 1

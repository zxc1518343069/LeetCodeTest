/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */


/* 暴力   O(n^2)*/
let allCellsDistOrder = function(R, C, r0, c0) {

  let arr = []
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      arr.push([i, j])
    }
  }
  return arr.sort((a, b)=>Math.abs(a[0] - r0) + Math.abs(a[1] - c0) - Math.abs(b[0] - r0) - Math.abs(b[1] - c0))
};


// // [[0,0],[0,1]]
// console.log(allCellsDistOrder(R = 1, C = 2, r0 = 0, c0 = 0))
//
// // 输出：[[0,1],[0,0],[1,1],[1,0]]
//
// console.log(allCellsDistOrder(R = 2, C = 2, r0 = 0, c0 = 1))

/* 桶排序 */

let allCellsDistOrder2 = function(R, C, r0, c0) {

  let res = []
  let obj = {}

  let getDis = (x1, x2, y1, y2)=>{
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      let dis = getDis(i, r0, j, c0)
      if (!obj[dis]) {
        obj[dis] = [[i, j]]
      } else {
        obj[dis].push([i, j])
      }
    }
  }
  for (let i = 0; i <= R+C; i++) {
    if (obj[i]) {
      for (const pair of obj[i]) {
        res.push(pair);
      }
    }
  }
  return res


};
console.log(allCellsDistOrder2(R = 1, C = 2, r0 = 0, c0 = 0))

// 输出：[[0,1],[0,0],[1,1],[1,0]]

console.log(allCellsDistOrder2(R = 2, C = 2, r0 = 0, c0 = 1))

// https://leetcode-cn.com/problems/pascals-triangle/


/*
*    [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
* */
let generate = function(numRows) {
  let res = []

  for (let i = 0; i < numRows; i++) {
    let arr = Array(i + 1).fill(1)
    for (let j = 1; j < arr.length-1; j++) {
      arr[j] = res[i-1][j-1] + res[i-1][j]
    }
    res.push(arr)
  }
  return res
};

console.log(generate(5))

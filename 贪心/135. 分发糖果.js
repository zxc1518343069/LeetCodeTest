// https://leetcode-cn.com/problems/candy/

let candy = function(ratings) {
  let len = ratings.length
  let sum = len
  let baseCandy = 1

  for (let i = 1; i < len; i++) {
    let pre = ratings[i-1]
    let current = ratings[i]
    if (current>pre){
      sum +=  baseCandy++
    }else if (current === pre){
      baseCandy = 1
    }else {
      sum++
      baseCandy = 1
    }
  }
  return  sum
};

console.log(candy([1,0,2])) // 1 2 3 1 2

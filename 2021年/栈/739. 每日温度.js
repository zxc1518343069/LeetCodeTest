let dailyTemperatures = function(T) {
  let len = T.length
  let stack = []
  let res = new Array(T.length).fill(0)

  for (let i = 0; i < len; i++) {
    while (stack.length && T[i]>T[stack[stack.length -1]]){
      let pre = stack.pop()
      res[pre] = i - pre
    }
    stack.push(i)
  }
  return res
}


// [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

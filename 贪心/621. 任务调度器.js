let leastInterval = function(tasks, n) {
  /* 特判*/
  if (n === 0 || n === 1) return tasks.length
  let len = tasks.length
  let arr = Array(26).fill(0)

  for (let i = 0; i < len; i++) {
    arr[tasks[i].charCodeAt() - 65]++
  }

  let max = Math.max(...arr), maxCount = 0
  arr.forEach(item=>{
    if (item === max) maxCount++
  })

  return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
};

console.log(leastInterval(tasks = ['A', 'A', 'A', 'B', 'B', 'B'], n = 2))
console.log(leastInterval(tasks = ['A', 'A', 'A', 'B', 'B', 'B'], n = 0))
console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], n = 2))

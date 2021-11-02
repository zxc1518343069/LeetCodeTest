let chart = require('./graph')
let set = new Set()
let arr = []

// 2031
const dfs = (n)=>{
  arr.push(n)
  set.add(n)
  while (arr.length) {
    let n = arr.shift()
    console.log(n)
    chart[n].forEach(item =>{
      if (!set.has(item)) {
        arr.push(item)
        set.add(item)
      }
    })
  }
}
dfs(2)

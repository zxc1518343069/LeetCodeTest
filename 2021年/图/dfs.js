let chart = require('./graph')
let set = new Set()
const dfs = (n)=>{
  console.log(n)
  set.add(n)
  chart[n].forEach(item =>{
    if (!set.has(item)){
      dfs(item)
    }
  })
}

dfs(2) // 2013

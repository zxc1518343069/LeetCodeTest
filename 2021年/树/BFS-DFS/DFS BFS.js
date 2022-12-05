const tree = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'd',
          children: []
        },
        {
          value: 'e',
          children: []
        }
      ]
    },
    {
      value: 'c',
      children: [
        {
          value: 'f',
          children: []
        },
        {
          value: 'g',
          children: []
        }
      ]
    }
  ]
}
// list.forEach((item) => {print(item)});
// 此时，forEach方法接受一个具体的函数作为参数。
// 然后可以把函数抽离出来：
// printItem(item) {
//   print(item)
// }
// 这时候就能直接拿函数来代替具体的函数了：
// list.forEach(printItem);
// 也就相当于：
// list.forEach((item) => {print(item)});



const dfs = (root)=>{
  console.log(root.value)
  if (root.children){
    root.children.forEach(dfs)
  }
}
dfs(tree)



// const bfs = (root)=>{
//   let q = [root]
//   while(q.length){
//     let n = q.shift()
//     console.log(n.value)
//     if (n.children){
//       n.children.forEach(item=>q.push(item))
//     }
//   }
// }
// bfs(tree)

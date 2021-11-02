/* 深度优先遍历 */

/*
* 要从哪个节点开始 dfs
* */
let dfs = (node) => {
  if (!node) return

  let stack = [],
      set = new Set()

  stack.push(node)
  set.add(node)


  // 处理行为
  console.log(node.value)


  while (stack.length) {
    let cur = stack.pop()

    for (let next of cur.nextList) {
      if (!set.has(next)) {
        stack.push(cur)
        stack.push(next)
        set.add(next)

        // 处理行为
        console.log(next.value)
        break  // 跳出  不在考虑以后的  stack 记录的是 深搜的路程
      }
    }
  }

}

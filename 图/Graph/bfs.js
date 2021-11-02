// 宽度优先遍历

/*
* 传入从哪里开始出发的节点
*
* */
let bfs = (node) => {
  if (node === null) return

  let queue = [],
      set = new Set() //  保证无法重复

  queue.push(node)
  set.add(node)

  while (queue.length) {
    let cur = queue.shift()

    // 进行处理行为
    console.log(cur)


    for (let next of cur.nextList) {
      if (!set.has(next)) {
        set.add(next)
        queue.push(next)
      }
    }
  }
}

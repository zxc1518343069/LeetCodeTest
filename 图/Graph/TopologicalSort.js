// 拓扑排序算法
// 适用范围:要求有向图(DAG),且有入度为0的节点,且没有环
let TopologicalSort = (graph) => {
  let map = new Map(), // key node  Value 剩余的 enter
      zeroInQueue = [], // enter 为0 的节点集合
      res = []

  for (let node of graph.nodes.values()) {
    map.set(node, node.enter)
    if (node.enter === 0)
      zeroInQueue.push(node)
  }
  // 拓扑排序
  while (zeroInQueue.length) {
    let cur = zeroInQueue.shift()
    res.push(cur)
    for (let next of cur.nextList) {
      map.set(next, map.get(next) - 1)
      if (map.get(next === 0))
        zeroInQueue.push(next)
    }
  }
  return res

}

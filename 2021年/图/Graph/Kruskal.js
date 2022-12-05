// 克鲁斯卡尔算法 Kruskal 复杂度为O（eloge）（e为网中的边数）    无向图  最小生成树
import UnionFind from './UnionFind';

let kruskal = (graph) => {
  let unionFind = new UnionFind(graph.nodes.values()),
      priorityQueue = []

  for (let edge of graph.edgeList.values()) {
    priorityQueue.push(edge)
  }
  priorityQueue.sort(((a, b) => a - b))
  let res = []
  while (priorityQueue.length) {
    let edge = priorityQueue.shift()
    if (unionFind.isSameSet(edge.from, edge.to)) {
      res.push(edge)
      unionFind.union(edge.from, edge.to)
    }
  }
  return res

}

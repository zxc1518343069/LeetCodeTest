import Edge from './edge';
import Graph from './graph'
import Node from './node';

let createGraph = (nums) => {
  // num 里面包含多个一维数组 ，[[from,to,weight],[]...]

  let graph = new Graph() // 构建图
  for (let i = 0; i < nums.length; i++) { // 循环数组， nums[i] 代表每一个节点
    // 取出节点 从哪里去哪里  权重多少
    let from = nums[i][0],
        to = nums[i][1],
        weight = nums[i][2]

    // 在构建的图中，把转换成节点存起来
    if (!graph.nodes.has(from))
      graph.nodes.push(from, new Node(from))
    if (!graph.nodes.has(to))
      graph.nodes.push(to, new Node(to))

    // 如果 已经存在与 构建的图中， 把 对应的节点去除。再新建立一条边连接他们
    let fromNode = graph.nodes.get(from),
        toNode = graph.nodes.get(to),
        newEdge = new Edge(weight, fromNode, toNode)

    fromNode.nextNode.push(toNode) // 去的节点 的邻居 把 到的节点加上
    fromNode.out++ // 出去了多少条路
    toNode.enter++ // 进入了多少条路

    fromNode.edgeList.push(newEdge) // 去的节点的边  新加上
    graph.edgeList.push(newEdge) //  构建的图的总边  加上
  }
  return graph // 返回构建的图
}

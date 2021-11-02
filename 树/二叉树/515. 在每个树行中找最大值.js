// https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/#/description

/*  BFS */
let largestValues = function(root) {

  // 边界处理
  if (!root) return []

  // 变量定义
  const res = [], queue = [root]

  while (queue.length) {
    const curLevLen = queue.length // 当前层可遍历次数

    let curMax = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < curLevLen; i++) {
      // 依次出队 当前层节点node
      const node = queue.shift()
      curMax = Math.max(curMax, node.val)

      // 若有子节点则入队
      node.left  && queue.push(node.left)
      node.right && queue.push(node.right)
    }

    res.push(curMax)
  }

};


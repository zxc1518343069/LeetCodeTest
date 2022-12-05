let widthOfBinaryTree = function(root) {
  if (!root)
    return

  let queue = [root]
  let nodeMap = new Map()
  nodeMap.set(root, 1)

  let level = 1,
      levelNodes = 0,
      max = Number.MIN_VALUE

  while (queue.length) {
    let node = queue.shift()
    let curNodeLevel = nodeMap.get(node)
    if (curNodeLevel === level) {
      levelNodes++
    } else {
      max = Math.max(max, levelNodes)
      level++
      levelNodes = 1
    }
    if (node.left) {
      nodeMap.set(node.left, curNodeLevel + 1)
      queue.push(node.left)
    }
    if (node.right) {
      nodeMap.set(node.right, curNodeLevel + 1)
      queue.push(node.right)
    }
  }
  return Math.max(max, levelNodes)
};

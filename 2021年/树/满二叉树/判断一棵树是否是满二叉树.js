let isFullTree = (root) => {
  let returnType = (nodes, height) => ({ nodes, height })

  let process = (root) => {
    if (!root) return returnType(0, 0)
    let leftData = process(root.left),
        rightData = process(root.right),
        nodes = leftData.nodes + rightData.nodes + 1,
        height = Math.max(leftData.height, rightData.height) + 1
    return returnType(nodes, height)
  }

  let info = process(root)
  return info.nodes === (1 << info.height - 1)
}

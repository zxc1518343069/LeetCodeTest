let tree = require('./tree')

// postorder 后续遍历

const postorder = (root)=>{
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}
// postorder(tree)

// 非递归版本
const postorder2 = (root)=>{
  if (!root) return
  let stack = [root]
  let out = []
  while (stack.length){
    const n = stack.pop()
    out.push(n)
    if (n.left)
      stack.push(n.left)
    if (n.right)
      stack.push(n.right)
  }
  while (out.length){
    console.log(out.pop().val)
  }
}
postorder2(tree)

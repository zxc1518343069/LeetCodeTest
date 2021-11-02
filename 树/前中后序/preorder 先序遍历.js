let tree = require('./tree')

// 先序遍历
// 12458367
const preorder = (root)=>{
  if (!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
// preorder(tree)

// 非递归版
const preorder2 = (root)=>{
  if (!root) return
  const stack = [root]
  while (stack.length){
    let n = stack.pop()
    console.log(n.val)
    if (n.right)
      stack.push(n.right)
    if (n.left)
      stack.push(n.left)
  }
}
preorder2(tree)

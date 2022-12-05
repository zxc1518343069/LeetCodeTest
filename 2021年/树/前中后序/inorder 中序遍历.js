let tree = require('./tree')
// 中序遍历  42851637

const inorder = (root)=>{
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}
// inorder(tree)

// 非递归版本
const inorder2 = (root)=>{
  if (!root) return
  let stack = []
  let p = root
  while (stack.length || p){
    while (p){
      stack.push(p)
      p = p.left
    }
    let n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}
inorder2(tree)

let inorderTraversal = function(root) {
  let arr = []
  let res = []
  let p = root

  while(p || arr.length){
    while(p){
      arr.push(p)
      p=p.left
    }
    let n = arr.pop()
    res.push(n.val)
    p = p.right
  }
};

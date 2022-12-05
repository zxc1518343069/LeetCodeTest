// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description


let levelOrder = function(root) {
  if(!root) return []
  let stack = [root]
  let res = []
  while(stack.length){
    let len = stack.length
    res.push([])
    while(len--){
      let n = stack.shift()
      res[res.length - 1].push(n.val)
      if(n.left) stack.push(n.left)
      if(n.right) stack.push(n.right)
    }
  }
  return res
};


/* 第二种 */
let levelOrder2 = function(root) {
  if(!root) return []
  let stack = [root]
  let res = []
  while(stack.length){
    let len = stack.length
    let tmp = []
    while(len--){
      let n = stack.shift()
      tmp.push(n.val)
      if(n.left) stack.push(n.left)
      if(n.right) stack.push(n.right)
    }
    res.push(tmp)
  }
  return res
};

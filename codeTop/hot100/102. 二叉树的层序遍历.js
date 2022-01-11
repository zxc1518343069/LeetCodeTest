/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 字节后端二面:能不能用递归实现?
var levelOrder = function(root) {
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

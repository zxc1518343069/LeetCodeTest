// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
/*
 bfs 另一种
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  let stack = [root]
  let res = []
  let count = 0
  while(stack.length){
    let len = stack.length
    let tmp = []
    while (len--){
      const node = stack.shift()
      tmp.push(node.val)
      if(node.left) stack.push(node.left)
      if(node.right) stack.push(node.right)
    }
    res.push(tmp)
  }
  return res
};

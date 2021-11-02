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
    while(len--){
      let n = stack.shift()
      count % 2 === 0 && tmp.push(n.val) // 这里根据 奇数偶数改变顺序
      count % 2 === 1 && tmp.unshift(n.val)
      if(n.left) stack.push(n.left)
      if(n.right) stack.push(n.right)
    }
    res.push(tmp)
    count++
  }
  return res
};

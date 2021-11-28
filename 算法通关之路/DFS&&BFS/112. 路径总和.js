// https://leetcode-cn.com/problems/path-sum/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root) return false
  let res = false
  let dfs=(root,s)=>{
    if(!root) return
    if(!root.left && !root.right && s === sum){
      return res = true
    }
    if(root.left) dfs(root.left,s+root.left.val)
    if(root.right) dfs(root.right,s+root.right.val)
  }
  dfs(root,root.val)
  return res
};

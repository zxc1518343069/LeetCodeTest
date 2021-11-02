// https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let maxDepth = function(root) {
  let res = 0
  let dfs=(root,deep)=>{
    if(!root)
      return
    res = deep>res?deep:res
    dfs(root.left,deep +1)
    dfs(root.right,deep+1)
  }
  dfs(root,1)
  return res
};

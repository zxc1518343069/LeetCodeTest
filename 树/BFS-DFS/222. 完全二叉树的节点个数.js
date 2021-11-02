// https://leetcode-cn.com/problems/count-complete-tree-nodes/
/* dfs */
let countNodes = function(root) {

  let res = 0
  let dfs = (root)=>{
    if (!root) return
    res++
    root.left && dfs(root.left)
    root.right && dfs(root.right)
  }
  dfs(root)
  return res
};

/* 利用完全二叉树性质 */

console.log(countNodes())

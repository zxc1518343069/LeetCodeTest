/* 拿一个数记录层级，进行dfs 多一层判断。如果大与这个层级就覆盖*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let res = 0
  const dfs = (root,l)=>{
    if(!root) return
    res = l>res?l:res
    dfs(root.left,l+1)
    dfs(root.right,l+1)
  }
  dfs(root,1)
  return res
};

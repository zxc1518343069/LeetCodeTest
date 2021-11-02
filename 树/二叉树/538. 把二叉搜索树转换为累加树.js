let convertBST = function(root) {
  let value = 0
  let dfs = (root)=>{
    if (!root) return
    if (root.right) dfs(root.right)
    value += root.val
    root.val = value
    if (root.left) dfs(root.left)
  }
  dfs(root)
  return root
};

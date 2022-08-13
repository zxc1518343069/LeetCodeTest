/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  const res = [];
  // dfs 这样弄重复赋值 res[level] 且一定是最右侧
  // 用bfs 也可以做  保留最后一个就可以
  const dfs = (node, level) => {
    if (!node) return;
    res[level] = node.val;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };
  dfs(root, 0);
  return res;
};

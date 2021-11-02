// https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function(root, p, q) {
  if(!root)
    return null
  if(root === p || root === q)
    return root
  let left = lowestCommonAncestor(root.left,p,q),
      right = lowestCommonAncestor(root.right,p,q)

  if(left && right)
    return root
  if(left === null)
    return right
  return left
};

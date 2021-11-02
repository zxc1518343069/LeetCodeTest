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
 * @return {TreeNode}
 */
/* 什么是 后继节点？  中序遍历的下一个节点就是后继节点*/

let inorderSuccessor = function(root, p) {
  function recursion(node) {
    if (!node) return;

    recursion(node.left);

    if (findCurr === true && ans === null) {
      ans = node;
      return;
    }
    if (node === p) {
      findCurr = true;
    }

    recursion(node.right);
  }

  let findCurr = false,
      ans = null;

  recursion(root);

  return ans;
};

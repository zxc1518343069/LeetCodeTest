// https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/*
只考虑当前节点 与下一层的关系

 */
var isBalanced = function(root) {

  let returnType = (isb, height) => ({ isb, height })

  const process = (node) => {
    if (node === null) return returnType(true, 0)
    let left = process(node.left),
        right = process(node.right),
        height = Math.max(left.height, right.height) + 1,
        isb = left.isb && right.isb && Math.abs(left.height - right.height) < 2
    return returnType(isb, height)
  }
  process(root)
  return process(root).isb
};

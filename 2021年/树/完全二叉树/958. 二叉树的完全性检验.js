// https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree/
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
 * @return {boolean}
 */
/*
* 满足完全二叉树的条件
* 1. 任意节点，有 右节点 没有 左节点 直接返回false
* 2. 在不会犯第一个条件下， 如果遇到了第一个左右节点补全的条件下。后序都是叶子节点(即 只有自己，无孩子)
*
* */
let isCompleteTree = function(root) {
  if (!root) return true
  let leaf = false
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    let left = node.left,
        right = node.right
    // 条件1                    条件2
    if ((right && !left) || (leaf && (left || right)))
      return false

    if (left)
      queue.push(left)
    if (right)
      queue.push(right)
    // 条件2 触发
    if (!left || !right)
      leaf = true
  }
  return true
};

// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/

/*
 BFS
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const data = [];
  const queue = [root];
  while (queue.length) {
    const first = queue.shift();
    data.push(first.val);
    first.left && queue.push(first.left);
    first.right && queue.push(first.right);
  }
  return data;
};


levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const data = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift()
    data.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return data;
};

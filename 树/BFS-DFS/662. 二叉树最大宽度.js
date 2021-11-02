// https://leetcode-cn.com/problems/maximum-width-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/* 算得是两节点之间得宽度*/

let widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  const nodes = [[root, 0]];

  let width = 0;
  while(nodes.length) {
    const length = nodes.length;

    /* 代码作用 防止 数据超出限制 */
    if (length === 1) {
      nodes[length - 1][1] = 0;
    }

    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < length; i++) {
      const [r, index] = nodes.shift();
      min = Math.min(index, min);
      max = Math.max(index, max);
      if (r.left) {
        nodes.push([r.left, 2 * index])
      }
      if (r.right) {
        nodes.push([r.right, 2 * index + 1])
      }
    }
    width = Math.max(width, max - min + 1);
  }

  return width;
};

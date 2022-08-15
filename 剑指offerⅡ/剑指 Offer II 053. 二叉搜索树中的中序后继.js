// https://leetcode.cn/problems/P5rCT8/
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
// 思路很明确了 找到这个节点 再根据 中序遍历 左中右的关系 返回对应节点就行
var inorderSuccessor = function (root, p) {
  function recursion(node) {
    if (!node) {
      return null;
    }
    // 根据中序遍历 深入左树
    recursion(node.left);

    // 然后判断
    if (findCurr && !res) {
      res = node;
      return;
    }
    // 找到这个节点就标记 因为要找到后继节点。到下一个节点的时候在返回
    if (node === p) {
      findCurr = true;
    }
    // 深入右树
    recursion(node.right);
  }

  let findCurr = false,
    res = null;

  recursion(root);

  return ans;
};

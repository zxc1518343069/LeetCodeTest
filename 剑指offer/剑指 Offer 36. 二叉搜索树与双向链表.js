// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if (!root) return;
  const inorder = (node) => {
    if (!node) return
    // 找到左下角的节点
    inorder(node.left)
    if (!pre)
      head = node // 找到最左下角的节点  作为head
    else
      pre.right = node // pre 指向head  也就是 head.right = node
    node.left = pre
    pre = node // 走到下一个节点
    inorder(node.right);
  }
  let head = null, pre = head
  // 中序遍历
  inorder(root)
  head.left = pre
  pre.right = head
  return head
};

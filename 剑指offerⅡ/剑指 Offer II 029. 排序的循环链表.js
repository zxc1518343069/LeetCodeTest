// https://leetcode.cn/problems/4ueAj6/
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  const node = new Node(insertVal);
  // 特殊判断
  if (!head) {
    node.next = node;
    return node;
  }
  if (head.next === head) {
    head.next = node;
    node.next = head;
    return head;
  }

  // 接下来就比较简单，遍历链表，找到下谕旨 直接插入即可
  let curr = head,
    next = head.next;
  while (next !== head) {
    if (insertVal >= curr.val && insertVal <= next.val) {
      break;
    }
    if (curr.val > next.val) {
      if (insertVal > curr.val || insertVal < next.val) {
        break;
      }
    }
    curr = curr.next;
    next = next.next;
  }
  curr.next = node;
  node.next = next;
  return head;
};

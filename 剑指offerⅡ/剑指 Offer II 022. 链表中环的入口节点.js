// https://leetcode.cn/problems/c32eOV/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 集合和快慢指针
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let hash = new Set();
  while (head) {
    if (hash.has(head)) {
      return head;
    }
    hash.add(head);
    head = head.next;
  }
  return null;
};

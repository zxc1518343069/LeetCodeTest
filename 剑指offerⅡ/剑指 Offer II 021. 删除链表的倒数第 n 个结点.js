// https://leetcode.cn/problems/SLwz0R/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 思路也很简单。 就是快慢指针， 一个先走N 步就好
// 搞得我看不懂。
var removeNthFromEnd = function (head, n) {
  let tHead = new ListNode(null, head);
  let slow = tHead,
    fast = tHead;
  // 先让头指针走n步
  while (n > 0 && fast !== null) {
    fast = fast.next;
    n--;
  }
  // 提前移动fast指针
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 最后一步 跳过倒数第n个节点
  slow.next = slow.next.next;

  // 如果链表不够长，则直接返回链表
  return tHead.next;
};

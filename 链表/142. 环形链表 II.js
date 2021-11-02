// https://leetcode-cn.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/* 第一种版本 快慢指针
* 时间复杂度 O(N)
* 空间复杂度O(1)
* */
let detectCycle = function(head) {
  if (head === null || head.next === null || head.next.next === null)
    return null

  let slow = head.next
  let fast = head.next.next

  while (slow !== fast) {
    if (fast.next === null || fast.next.next === null)
      return null
    fast = fast.next.next
    slow = slow.next
  }
  /* 走到这里 fast 和 slow 在同一个节点 */
  fast = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return fast


};

/* 第二种方式   set集合*/
let detectCycle2 = function(head) {
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



//https://leetcode-cn.com/problems/odd-even-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 思路
/*
* 一个保存奇数   一个保存偶数  最后 奇数连接到偶数后面
*
*
* */
var oddEvenList = function(head) {
  if (head === null) {
    return head;
  }
  let evenHead = head.next;
  let odd = head, even = evenHead;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

// https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 迭代 链表都不会做了 太菜了
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let p = head, q = null
  while (p){
    let tmp = p.next
    p.next = q
    q = p
    p =tmp
  }
  return q
};

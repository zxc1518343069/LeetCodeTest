// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/*
简单  就是c 里面的遍历
 */
var deleteNode = function(head, val) {
  if (head.val === val)
    return head.next
  head.next = deleteNode(head.next, val)
  return head
};

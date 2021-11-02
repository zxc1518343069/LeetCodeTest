// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
/* 反转方法*/
const reversePrint = function(head) {
  if (head === null) return []
  const res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res.reverse()
};

/* 单调栈  性能比 直接调用反转方法好  */
const reversePrint2 = function(head) {
  if (head === null) return []
  const tmp = []
  while (head) {
    tmp.push(head.val)
    head = head.next
  }
  const res = []
  while (tmp.length) {
    res.push(tmp.pop())
  }
  return res
};

/*  反转链表 */
const reversePrint3 = function(head) {
  if (head === null || head.next === null) return head
  let p = head.next
  head.next = null
  let next = null

  while (p.next !== null) {
    next = p.next
    p.next = head
    head = p
    p = next
  }
  return head
};



// https://leetcode.cn/problems/UHnkqh/
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
var reverseList = function (head) {
  let p = head,
    q = null;
  while (p) {
    let tmp = p.next;
    p.next = q;
    q = p;
    p = tmp;
  }
  return q;
};

// 递归 方式 如果理解不了就画图看下
//在每次 函数执行 都把 head.next指向空，下一个节点指向自己。但是链接他的节点指向并没有改变。
// 所以可以一直找到 指向null 的节点 直到最后
// 2022-7-27 二刷
reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head; //  吧 head.next 看做成一个整体就可以了
  head.next = null;
  return newHead;
};

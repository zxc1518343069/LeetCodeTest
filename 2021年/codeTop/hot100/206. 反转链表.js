// https://leetcode-cn.com/problems/reverse-linked-list/

// 迭代法
let reverseList = function(head) {
  let p = head, q = null
  while (p) {
    let tmp = p.next

    p.next = q

    q = p
    p = tmp
  }
  return q
};


// 递归
reverseList = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head; //  吧 head.next 看做成一个整体就可以了
  head.next = null;
  return newHead;
};

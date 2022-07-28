// https://leetcode.cn/problems/lMSNwu/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head; //  吧 head.next 看做成一个整体就可以了
  head.next = null;
  return newHead;
};

// 第一种方法 反转链表 再相加 再反转
var addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  // 反转 1 2 链表

  // 然后就是按位相加， 注意判断进位。
  const addReversed = (l1, l2) => {
    let l3 = new ListNode(0);
    let p = l1;
    let q = l2;
    let m = l3;
    let number = 0;

    while (p || q) {
      let value1 = p !== null ? p.val : 0;
      let value2 = q !== null ? q.val : 0;
      let value3 = value1 + value2 + number;
      number = parseInt(value3 / 10);
      m.next = new ListNode(value3 % 10);

      // 判断 是否存在
      if (p) p = p.next;
      if (q) q = q.next;
      m = m.next;
    }
    // 处理 最后一次相加大于10 的情况

    if (number) {
      m.next = new ListNode(number);
    }
    return l3.next;
  };
  let reverseHead = addReversed(l1, l2);
  return reverseList(reverseHead);
};

// 第二种  栈
addTwoNumbers = function (l1, l2) {
  let stack1 = [],
    stack2 = [];
  // 分别遍历两个链表 加入对应栈中  出栈的时候正好反序了
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let p = null;
  let carry = 0;
  while (stack1.length || stack2.length || carry) {
    let sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry;
    let newNode = new ListNode(sum % 10);
    // 新节点的next指向前一个节点
    newNode.next = p;
    // 往后走一步
    p = newNode;
    carry = parseInt(sum / 10);
  }
  return p;
};

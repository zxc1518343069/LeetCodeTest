// https://leetcode-cn.com/problems/palindrome-linked-list/


/* 第一种，利用数组或者栈的方式进行
*   把链表的数放进 数组里。最后再遍历一次 不一样返回false  一样返回true
* */
let isPalindrome = function(head) {
  const vals = [];
  while (head !== null) {
    vals.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    if (vals[i] !== vals[j]) {
      return false;
    }
  }
  return true;
};


/*
* 第二种。快慢指针
* 例如  1 - 2 - 3 - 2 - 1
* 第一个while 走完之后 pre slow fast 位置对应
*              p   s   f
*
* 将 p 后面倒叙  再重新比对
* */

let isPalindrome2 = function(head) {
  if (head === null || head.next === null)
    return true

  let fast = head,
      slow = head,
      pre

  while (fast && fast.next) {
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }

  pre.next = null
  let head2 = null

  while (slow) {
    let tmp = slow.next
    slow.next = head2
    head2 = slow
    slow = tmp
  }

  while (head && head2) {
    if (head.val !== head2.val)
      return false
    head = head.next
    head2 = head2.next
  }
  return true;
};

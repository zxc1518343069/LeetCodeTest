/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(0)
  let p = l1
  let q = l2
  let m = l3
  let number = 0

  while (p || q) {
    let value1 = p.value ? p.value : 0
    let value2 = q.value ? q.value : 0
    let value3 = value1 + value2 + number
    number = parseInt(value3 / 10)
    m.next = new ListNode(value3 % 10)

    // 判断 是否存在
    if (p) p = p.next
    if (q) q = q.next
    m = m.next
  }
  // 处理 最后一次相加大于10 的情况

  if (number) {
    m.next = new ListNode(number)
  }

  return l3.next
};

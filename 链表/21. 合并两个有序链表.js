// https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l116
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 ? l1 : l2
  }
  let newNode = new ListNode(-1)
  let p = newNode
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  p.next = l1 ? l1 : l2

  return newNode.next
};


// 2021.11.3 第二次重温

mergeTwoLists = (l1, l2) => {
  // 特殊判断
  if (!l1 || !l2) return l1 ? l1 : l2
  const newHead = new ListNode()
  let p = newHead

  while (l1 && l2) {
    if (l1.val > l2.val) {
      p.next = l2 // 连接的是节点  不是值 踩坑了
      l2 = l2.next
    } else {
      p.next = l1
      l1 = l1.next
    }
    p = p.next
  }
  p.next = l1 ? l1 : l2
  return newHead.next
}

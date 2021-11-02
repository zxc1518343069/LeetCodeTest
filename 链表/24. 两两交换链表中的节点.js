// https://leetcode-cn.com/problems/swap-nodes-in-pairs/


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


let swapPairs = function(head) {
  if (!head || !head.next)
    return head

  const newHead = new ListNode(0);
  newHead.next = head;
  let p = newHead;


  while (p.next && p.next.next) {
    const head = p.next
    const headNext = head.next

    p.next = headNext
    head.next = headNext.next
    headNext.next = head

    p = head
  }
  return newHead.next

};


swapPairs = (head) => {
  if (!head || !head.next) return head

  const newHead = new ListNode(0)
  newHead.next = head
  let p = newHead
  while (p.next && p.next.next) {
    const tmpHead = p.next // 第一个节点
    const next = tmpHead.next // 第二个节点

    // 交换
    p.next = next
    tmpHead.next = next.next
    next.next = tmpHead

    p = tmpHead
  }

  return newHead.next
}

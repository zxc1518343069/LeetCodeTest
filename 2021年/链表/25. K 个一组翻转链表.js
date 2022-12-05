// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/*
* 负责交换
* */
let reverse = (head, q) => {
  let p = head
  let pre = q.next

  while (q !== pre) {
    let next = p.next
    p.next = pre
    pre = p
    p = next
  }
  return [q, head]
}

let reverseKGroup = function(head, k) {

  let newHead = new ListNode(0)
  newHead.next = head
  let p = newHead

  while (head) {
    let q = p
    // 判断长度是否大与 k
    for (let i = 0; i < k; i++) {
      q = q.next
      if (!q) {
        return newHead.next
      }
    }

    //  现在开始交换
    const nex = q.next;
    [head, q] = reverse(head, q);
    // 把子链表重新接回原链表
    p.next = head;
    q.next = nex;
    p = q;
    head = q.next;
  }
  return newHead.next
};


// 2021 11 4
let swap = (head, q) => { // 改变的只是内部指针的指向
  // 负责 head 到最后一个的交换
  let p = head
  let lastPre = q.next

  while (q !== lastPre) {
    const next = p.next
    p.next = lastPre
    lastPre = p
    p = next
  }

  return [q, head]
}
reverseKGroup = (head, k) => {
  let newHead = new ListNode(0)
  newHead.next = head
  let p = newHead

  while (p.next) {
    let q = p
    // 判断是否能满足交换长度
    for (let i = 0; i < k; i++) {
      q = q.next
      if (!q) return newHead.next
    }
    // 开始交换
    const next = q.next
    const [swapHead, swapEnd] = swap(p.next, q)
    // 交换完成
    p.next = swapHead
    swapEnd.next = next
    p = swapEnd // 交换头 操
  }

  return newHead.next

}


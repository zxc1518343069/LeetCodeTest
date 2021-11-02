// https://leetcode-cn.com/problems/insertion-sort-list/

let insertionSortList = function(head) {
  if (head === null) {
    return head;
  }
  const newHead = new ListNode(0);
  newHead.next = head;
  let p = head
  let curr = head.next;

  while (curr !== null){
    if (p.val <= curr.val){ /* 后值大于前值  改变指针 指向 */
      p = p.next
    }else {
      /* 后值 小于 前值
      *   1. 需要一直往前找，找到不小于 它的值
      *   2. 改变一下指针的指向
      * */
      let q = newHead
      while(q.next.val <= curr.val ){
         q= q.next
      }
      p.next = curr.next
      curr.next = q.next
      q.next = curr

    }
    curr = p.next
  }
  return newHead.next

};

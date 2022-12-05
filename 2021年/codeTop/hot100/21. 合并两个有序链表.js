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

// var mergeTwoLists = function(l1, l2) {
//     if(!l1 || !l2){
//         return l1?l1:l2
//     }
//     let newNode = new ListNode(-1)
//     let p = newNode
//     while(l1 !=null && l2 !=null){
//         if(l1.val <= l2.val){
//             p.next = l1
//             l1 = l1.next
//         }else{
//             p.next = l2
//             l2 = l2.next
//         }
//         p = p.next
//     }
//     p.next = l1?l1:l2

//     return newNode.next
// };

var mergeTwoLists = (l1, l2) => {
  // l1 l2 是两个头指针
  if (!l1 || !l2) return l1 ? l1 : l2

  let newHead = new ListNode(-1)
  let p = newHead

  while (l1 && l2) {
    if (l1.val > l2.val) {
      p.next = l2
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

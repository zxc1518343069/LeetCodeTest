// https://leetcode-cn.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
  let p = head
  let q = head
  while(p && q && q.next){
    p = p.next
    q = q.next.next
    if(q === p){
      return true
    }
  }
  return false
};

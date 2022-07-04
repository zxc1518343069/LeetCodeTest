// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/

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
// 2022-7-4 菜了菜了 链表都块不会做了
var mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2){
    return l1?l1:l2
  }
  let newNode = new ListNode(-1)
  let p = newNode
  while(l1 !=null && l2 !=null){
    if(l1.val <= l2.val){
      p.next = l1
      l1 = l1.next
    }else{
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  p.next = l1?l1:l2
  return newNode.next
};

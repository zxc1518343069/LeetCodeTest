// https://leetcode-cn.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 最简单的方法 数组
var mergeKLists = function(lists) {
  if (!lists || lists.length == 0) return null;
  let arr = [];
  let res = new ListNode(0);
  lists.forEach(list => {
    let cur = list;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
  })
  let cur = res;
  arr.sort((a, b) => a - b).forEach(val => {
    let node = new ListNode(val);
    cur.next = node;
    cur = cur.next;
  })
  return res.next;
};

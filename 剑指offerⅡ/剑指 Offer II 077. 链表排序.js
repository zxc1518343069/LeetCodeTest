// https://leetcode.cn/problems/7WHec2/
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
// 第一眼看到题目 就是转化数组来做
var sortList = function (head) {
  var arr = [];
  var p = head;
  while (p) {
    arr.push(p);
    p = p.next;
  }
  if (!arr.length) {
    return null;
  }
  arr.sort((a, b) => a.val - b.val);
  const len = arr.length - 1;
  for (var i = 0; i < len; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[len].next = null;
  return arr[0];
};
// 效率不是很高 所以换用归并排序
// todo 归并排序

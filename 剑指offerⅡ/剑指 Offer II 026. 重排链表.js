/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 看见这个题第一个思路
// 放到数组里面 然后重新排列。
var reorderList = function (head) {
  if (!head) return head;
  if (!head.next) return head;
  let arr = [];
  let p = head;
  let q = head.next;
  // 存放节点
  while (q) {
    p.next = null;
    arr.push(p);
    p = q;
    q = q.next;
  }
  // 因为判断的 q.next 所以最后在添加一次 不清楚的可以打印val
  arr.push(p);

  let left = 0;
  let right = arr.length - 1;
  // 这里注意处理 奇数偶数
  while (left < right - 1) {
    arr[left].next = arr[right];
    left++;
    arr[right].next = arr[left];
    right--;
  }
  if (left === right - 1) arr[left].next = arr[right];
  return arr[0]; // 返回第一个节点
};

// https://leetcode.cn/problems/aMhZSa/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 链表这种套路题   数组统计重新排列
// 要不是就是 数组统计。。  有时候考虑map 也不是什么问题
var isPalindrome = function (head) {
  const vals = [];
  while (head !== null) {
    vals.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    if (vals[i] !== vals[j]) {
      return false;
    }
  }
  return true;
};

//  O(n) 时间复杂度和 O(1) 空间复杂度  想到了异或
// 我怀疑这个有用例在卡异或。。。 这个不行
isPalindrome = function (head) {
  if (!head || head.next === null) return;
  let val = 0;
  while (head !== null) {
    val ^= head.val;
    head = head.next;
  }
  return val === 0;
};
let val = 0;
[1, 3, 0, 2].forEach((item) => (val ^= item));
console.log(val);

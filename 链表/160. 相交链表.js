// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

/* 第一种 暴力法
*
* 把A的每个节点再B链表中查找一次
* 时间复杂度  O(M*N)
* 空间复杂度(O1)
* */
let getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA;
  while (pA) {
    let pB = headB;
    while (pB) {
      if (pA === pB) return pA;
      pB = pB.next;
    }
    pA = pA.next;
  }
  return null
};
/* 第二种 标记法  也就是哈希 在A链表做一个标记
* 时间复杂度：O(M + N), M, N 分别为两个链表的长度。空间复杂度：O(N) 为链表 A的长度
* */
let getIntersectionNode2 = function(headA, headB) {
  if (!headA || !headB) return null;

  const hashmap = new Map();

  let pA = headA;
  while (pA) {
    hashmap.set(pA, 1);
    pA = pA.next;
  }

  let pB = headB;
  while (pB) {
    if (hashmap.has(pB)) return pB;
    pB = pB.next;
  }
  return null
};

/* 第三种 双指针
* 时间复杂度  O(M*N)
* 空间复杂度(O1)
* */
let getIntersectionNode3 = function(headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA,
      pB = headB;
  while (pA || pB) {
    if (pA === pB) return pA
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
};

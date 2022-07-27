// https://leetcode.cn/problems/3u1WK4/
// 哈希
let getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};

// 双指针。 不断得去对方轨迹中寻找。只要二人有交集，就终会相遇
getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA,
    pB = headB;
  while (pA || pB) {
    if (pA === pB) return pA;
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
};

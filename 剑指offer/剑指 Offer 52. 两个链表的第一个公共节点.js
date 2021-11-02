// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/

let getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA,
      pB = headB;
  while (pA || pB) {
    if(pA === pB) return pA
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
};

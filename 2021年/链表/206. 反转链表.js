// https://leetcode-cn.com/problems/reverse-linked-list/
let reverseList = function(head) {
  let p =head
  let q = null
  while(p){
    let t = p.next
    p.next = q
    q = p
    p = t
  }
  return q
};

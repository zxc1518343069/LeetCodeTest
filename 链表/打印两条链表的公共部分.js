/*
* 题目：给定两个 无环链表。 如果他们两个相交。则返回他们相交部分
* 否则 则返回null
* */
// 一个链表有环 一个链表无环  他们不可能相交

let publicLink = (head, head2) => {
  if (!head || !head2)
    return null
  let len = 0,
      p = head,
      q = head2

  while (head.next) { // 判断 链表1的长度
    len++
    p = p.next
  }
  while (head2.next) { // 判断链表2 的长度
    len--
    q = q.next
  }

  if (p !== q) // 如果两个链表都走到最后，最后位置地址不一样。则一定不相交
    return null

  p = len > 0 ? head : head2 // 链表谁长谁是 p
  q = p === head ? head2 : head // 谁短谁是q

  let n = Math.abs(len) // 取长度绝对值

  while (n--)
    p = p.next // 让长链表先走 差值步

  // 相较点一定在 后面
  while (p !== q) {
    p = p.next
    q = q.next
  }
  return p
}
export default publicLink

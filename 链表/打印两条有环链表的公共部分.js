/*
* 题目：给定两个 有环链表。 如果他们两个相交。则返回他们相交部分
* 否则 则返回null
* */
import publicLink from './打印两条链表的公共部分';

/**
 *
 * @param head 第一条链表头节点
 * @param loop 第一条链表进入环的节点
 * @param head2 第二条链表头节点
 * @param loop2 第一条链表进入环的节点
 */
let bothLoop = (head, loop, head2, loop2) => {
  if (loop === loop2) {
    // 按照无环链表做
    return publicLink(head, head2)
  } else {
    let p = loop.next
    while (p !== loop) {
      if (p === loop2)
        return loop
      p = p.next
    }
    return null
  }
}

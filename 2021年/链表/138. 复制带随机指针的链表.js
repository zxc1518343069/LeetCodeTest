// https://leetcode-cn.com/problems/copy-list-with-random-pointer/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/* 利用哈希表的方式
* 时间复杂度 O(N)
* 空间复杂度O(N)
* */
let copyRandomList = function(head) {
  if (!head)
    return null

  let cur = head,
      node = new Node(),
      tmp = node,
      map = new Map()

  /* 遍历链表  把 节点存在map 里一一对应*/
  while (cur) {
    tmp.val = cur.val
    tmp.next = cur.next ? new Node() : null
    map.set(cur, tmp)
    tmp = tmp.next
    cur = cur.next
  }

  tmp = node // 新生成的链表
  /* 遍历 head 把 node 节点拿出来*/
  while (head) {
    tmp.random = head.random ? map.get(head.random) : null
    head = head.next
    tmp = tmp.next
  }
  return node
};


/* 利用哈希表的方式
* 时间复杂度 O(N)
* 空间复杂度O(1)
* */
let copyRandomList2 = function(head) {
  if (!head)
    return null

  let cur = head,
      next = null,
      curCopy = null

  /* 建立链表  */
  while (cur) {
    next = cur.next
    cur.next = new Node(cur.val)
    cur.next.next = next
    cur = next
  }

  cur = head
  /* 遍历链表  把 节点存在map 里一一对应*/
  while (cur) {
    next = cur.next.next
    curCopy = cur.next
    curCopy.random = cur.random ? cur.random.next : null
    cur = next
  }
  let res = head.next
  cur = head
  while (cur) {
    next = cur.next.next
    curCopy = cur.next
    cur.next = next
    curCopy.next = next ? next.next : null
    cur = next
  }
  return res
};

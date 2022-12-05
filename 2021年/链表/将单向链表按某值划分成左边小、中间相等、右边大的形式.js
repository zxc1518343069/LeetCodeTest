/*
  【题目】给定一个单链表的头节点head,节点的值类型是整型,再给定一个整
  数 pivot。实现一个调整链表的函数,将链表调整为左部分都是值小于 pivot的
  节点,中间部分都是值等于 pivot的节点,右部分都是值大于 pivot的节点。
*/
import mockLinkList, { Node } from './mockLinkList';

/* 笔试做法  利用数组做 partition*/
let listPartition = (head, num) => {
  let arr = []
  while (head.next) {
    arr.push(head.next)
    head = head.next
  }

  // 在这里开始process
  let left = 0,
      right = arr.length - 1,
      cur = 0,
      len = arr.length

  while (left <= right) {
    if (arr[cur].val === num) {
      cur++
    } else if (arr[cur].val < num) {
      [arr[left], arr[cur]] = [arr[cur], arr[left]]
      left++
      cur++
    } else {
      [arr[cur], arr[right]] = [arr[right], arr[cur]]
      right--
    }
  }
  let head2 = new Node(-1),
      p = head2

  console.log(arr)
  for (let i = 0; i < len; i++) {
    arr[i].next = null
    p.next = arr[i]
    p = p.next
  }
  return head2.next
}

/* 面试做法  利用三指针。 利用最小的空间 */
let listPartition2 = (head, num) => {
  let lessHead = null,
      lessEnd = null,
      equalHead = null,
      equalEnd = null,
      moreHead = null,
      moreEnd = null

  while (head !== null) {
    let next = head.next
    head.next = null
    if (head.val < num) {
      if (lessHead === null) {
        lessHead = head
        lessEnd = head
      } else {
        lessEnd.next = head
        lessEnd = head
      }
    } else if (head.val === num) {
      if (equalHead === null) {
        equalHead = head
        equalEnd = head
      } else {
        equalEnd.next = head
        equalEnd = head
      }
    } else {
      if (moreHead === null) {
        moreHead = head
        moreEnd = head
      } else {
        moreEnd.next = head
        moreEnd = head
      }
    }
    head = next
  }
  if (lessEnd !== null) {
    equalHead = equalHead === null ? moreHead : equalHead
    lessEnd.next = equalHead
  }

  if (equalEnd !== null) {
    equalEnd.next = moreHead
  }

  return lessHead !== null ? lessHead : (equalHead !== null ? equalHead : moreHead)
}

let head = mockLinkList(10)
let head2 = head.next
console.log('修改前')
while (head2) {
  console.log(head2.val)
  head2 = head2.next
}

head2 = listPartition2(head.next, 5)
console.log('修改后')
while (head2) {
  console.log(head2.val)
  head2 = head2.next
}

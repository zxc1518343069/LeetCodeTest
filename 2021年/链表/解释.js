let a = { value: 'a' }
let b = { value: 'b' }
let c = { value: 'c' }
let d = { value: 'd' }
let e = { value: 'e' }
let f = { value: 'f' }
let g = { value: 'g' }

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = null


// 插入
let cc = {value:'cc'}
c.next = cc
cc.next = d

// 遍历链表
let p = a
while (p) {
  console.log(p.value)
  p = p.next
}

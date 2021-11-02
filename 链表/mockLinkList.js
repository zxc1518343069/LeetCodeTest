export function Node(val, next = null) {
  this.val = val ? val : 0
  this.next = next
}

export default (NodeFn = Node,size) => {
  let head = new NodeFn(-1),
      p = head
  for (let i = 0; i < size; i++) {
    let val = Math.floor(Math.random() * 10)
    p.next = new NodeFn(val)
    p = p.next
  }
  return head
}

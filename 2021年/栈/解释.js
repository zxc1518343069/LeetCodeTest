// 栈的应用场景   浏览器历史  （前进后退）  两个栈实现的

// 做一下 括号匹配原则

const stack = []
// 入栈
stack.push(1)
stack.push(2)
console.log(stack)

// 出栈
let endValue = stack.pop()
console.log(endValue)

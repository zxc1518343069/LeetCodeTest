// leetcode  20  有效的括号

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 输入: "()"  输入: "()[]{}"  输入: "(]"  输入: "([)]"  输入: "{[]}"
// 输出: true  输出: true      输出: false 输出: false   输出: true

let isValue = function(s) {
  if (s.length % 2 === 1) return false
  let len = s.length
  let stack = []
  for (let i = 0; i < len; i++) {
    let c = s[i]
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else {
      let topValue = stack[stack.length - 1]
      if (topValue === '(' && c === ')' || topValue === '{' && c === '}' || topValue === '[' && c === ']') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
console.log(isValue('{}'))

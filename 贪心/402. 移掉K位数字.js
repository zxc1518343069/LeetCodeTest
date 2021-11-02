// https://leetcode-cn.com/problems/remove-k-digits/
let removeKdigits = function(num, k) {
  let len = num.length
  let stack = []
  if (len === k){
    return '0'
  }

  // 找到小数  留到栈 里面
  for (let numElement of num) {
    while (stack.length && stack[stack.length -1 ] > numElement && k){
      stack.pop()
      k--
    }
    stack.push(numElement)
  }

  for (; k > 0; --k) {
    stack.pop();
  }

  let res = ''
  let first = true
  for (const stackElement of stack) {
    if (first && stackElement === '0')
      continue
    first = false
    res += stackElement
  }
  return res.length?res:'0'
};

console.log(removeKdigits(num = "1432219", k = 3))
console.log(removeKdigits(num = "10200", k = 1))
console.log(removeKdigits(num = "10", k = 2))
console.log(removeKdigits(num = "10", k = 1))

// https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

//  1 2     2 1 / 1 2
var validateStackSequences = function(pushed, popped) {
  const stack = [] // 定义辅助栈

  let index = 0 // 记录下标

  for (let item of pushed) {
    stack.push(item)
    while (stack.length && stack[stack.length - 1] === popped[index]) {
      // 把当前 入栈元素和 popped 指向的元素对比
      stack.pop()
      index++
    }
  }

  return !stack.length
};

// 2022 -7 -6
validateStackSequences = function(pushed, popped) {

  const stack = [], len = pushed.length
  let index = 0

  for (let i = 0; i < len; i++) {
    stack.push(pushed[i])
    while (stack.length && stack[stack.length - 1] === popped[index]) {
      stack.pop()
      index++
    }
  }

  return !stack.length
}


console.log(validateStackSequences(pushed = [1, 2, 3, 4, 5], popped = [4, 3, 5, 1, 2]))
console.log(validateStackSequences(pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1]))

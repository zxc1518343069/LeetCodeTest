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

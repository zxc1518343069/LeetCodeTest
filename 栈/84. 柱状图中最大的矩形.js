// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

/* 暴力   力扣超时*/

let largestRectangleArea = function(heights) {

  let area = 0
  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
      let minHeight = 9999999999
      for (let k = i; k < j+1; k++) {
        minHeight = Math.min(minHeight,heights[k])
      }
      area = Math.max(area,(j-i+1) * minHeight)
    }
  }
  return area
};
//
// console.log(largestRectangleArea([2,1,5,6,2,3])) // 10
// console.log(largestRectangleArea([6,7,5,2,4,5,9,3])) // 16

/*  暴力优化  */

let largestRectangleArea2 = function(heights) {

  let area = 0
  for (let i = 0; i < heights.length; i++) {
    let minHeight = Number.MAX_VALUE
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight,heights[j])
      area = Math.max(area,(j-i+1) * minHeight)
    }
  }
  return area
};

// console.log(largestRectangleArea2([2,1,5,6,2,3])) // 10
// console.log(largestRectangleArea2([6,7,5,2,4,5,9,3])) // 16


/* 单调栈 */
// todo
let largestRectangleArea3 = function(heights) {
  let area = 0
  let stack = []
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[ stack[stack.length - 1] ] > heights[i]) {
      const j = stack.pop()
      area = Math.max(area, ( i - j + 1 ) * heights[j] )
    }
    stack.push(i)
  }
  return area
};

// console.log(largestRectangleArea3([2,1,5,6,2,3])) // 10
console.log(largestRectangleArea3([2,1])) // 2
// console.log(largestRectangleArea3([6,7,5,2,4,5,9,3])) // 16

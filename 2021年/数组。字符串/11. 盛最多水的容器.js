// https://leetcode-cn.com/problems/container-with-most-water/

/* 暴力法 */
let maxArea = function(height) {
  let area = 0
  for (let i = 0; i < height.length; i++) {
    for ( let j = i+1; j < height.length ; j++) {
      let tmp = (j-i) * (height[i]>height[j]?height[j]:height[i])
      area = Math.max(tmp,area)
    }
  }
  return area
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// 49

console.log(maxArea([1,1]))
// 1

console.log(maxArea([4,3,2,1,4]))
// 16


/* 双指针 */



let maxArea2 = function(height) {
  let area = 0
  let tmp
  let len = height.length
  let j = len-1
  for (let i = 0; i < j;) {
    let minHeight = height[i] < height[j]?height[i++]:height[j--]
    tmp = (j-i+1) * minHeight
    area = Math.max(tmp,area)
  }
  return area
};

console.log(maxArea2([1,8,6,2,5,4,8,3,7]))
// 49

console.log(maxArea2([1,1]))
// 1

console.log(maxArea2([4,3,2,1,4]))
// 16









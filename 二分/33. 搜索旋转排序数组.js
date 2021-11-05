// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


/* 三种情况
*  1. 4 5 1 2 3  左边少 右边多
*  2. 4 5 6 7 0 1 2  左边多 右边少
*  3. 4 5 6 1 2 3 两边一样多
*
* 找规律可得。当三个条件全部满足 或者只满足一个条件的时候， left 改变 否则 改变right
* */
let search = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let midIndex = (left + right) >> 1

    // if (target < nums[0] && target > nums[midIndex]){ /* 判断左边不是单调递增的情况*/
    //   left = midIndex +1
    // }else if (nums[0] < nums[midIndex] && (target > nums[midIndex] || target < nums[0])){
    //   left = midIndex +1
    // }else {
    //   right = midIndex
    // }
    if (nums[0] > nums[midIndex] ^ target > nums[midIndex] ^ target < nums[0]) {
      left = midIndex + 1
    } else {
      right = midIndex
    }
  }
  console.log(right)
  console.log(left)
  return right === left && nums[left] === target ? left : -1
};


// 首先考虑到第一个问题。 在没有旋转之前， 是一个有序数组，  有序两个词，标志着大概率二分。

search = (nums, target) => {
  let left = 0, right = nums.length
  while (left < right) {
    const mid = left + ((right - left) >> 1) // 取到 数字中间 值
    if (nums[mid] === target) return mid // 特殊判断 如果直接找到就直接返回
    if (target < nums[0] && target > nums[mid]) {
      // 判断目标值不在左侧 在右侧
      left = mid + 1
    } else if (nums[0] < nums[mid] && (target > nums[mid] || target < nums[0])) {
      // nums[0] < nums[mid] 判断 左边是递增
      // 我们已经知道了左边是递增的。然后  target > nums[mid] || target < nums[0] 是判断target 一定是在右边
      left = mid + 1
    } else {
      // 一定在左边
      right = mid
    }
  }
  return -1
}

console.log(search(nums = [4, 5, 6, 7, 0, 1, 2], target = 0))
console.log(search(nums = [5, 1, 2, 3, 4], target = 1))
console.log(search(nums = [1, 3], target = 3))
console.log(search(nums = [4,5,6,7,0,1,2], target = 3))

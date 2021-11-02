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
  let right = nums.length

  while (left < right){
    let midIndex = (left + right) >> 1

    // if (target < nums[0] && target > nums[midIndex]){ /* 判断左边不是单调递增的情况*/
    //   left = midIndex +1
    // }else if (nums[0] < nums[midIndex] && (target > nums[midIndex] || target < nums[0])){
    //   left = midIndex +1
    // }else {
    //   right = midIndex
    // }
    if (nums[0] > nums[midIndex] ^ target > nums[midIndex] ^ target < nums[0]){
      left = midIndex +1
    }else {
      right = midIndex
    }
  }
  console.log(right)
  console.log(left)
  return right === left&&nums[left] === target?left:-1
};



console.log(search(nums = [4, 5, 6, 7, 0, 1, 2], target = 0))

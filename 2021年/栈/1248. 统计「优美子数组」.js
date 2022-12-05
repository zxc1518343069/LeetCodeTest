// https://leetcode-cn.com/problems/count-number-of-nice-subarrays/



/* 暴力  力扣超时 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let numberOfSubarrays = function(nums, k) {

  let res = 0

  for (let i = 0; i < nums.length; i++) {
    let num = 0
    if (nums[i]%2 === 1)
      num++
    if (num === k){
      res++
    }
    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] %2 === 1)
        num++
      if (num === k){
        res++
      }
    }
  }
  return  res
};

console.log(numberOfSubarrays(nums = [1,1,2,1,1], k = 3))
console.log(numberOfSubarrays( nums = [2,4,6], k = 1))
console.log(numberOfSubarrays( nums = [1,1,1,1,1], k = 1))
console.log(numberOfSubarrays( nums = [2,2,2,1,2,2,1,2,2,2], k = 2))
console.log(numberOfSubarrays( nums =  [45627,50891,94884,11286,35337,46414,62029,20247,72789,89158,54203,79628,25920,16832,47469,80909], k = 1))

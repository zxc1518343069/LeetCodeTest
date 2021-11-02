/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {

  let len = nums.length
  for (let i = 0,max = 0; i < len; i++) {
    if (i <= max){
      max = Math.max(max,i+nums[i])
    }else {
      return false
    }
  }
  return true
};

// true
console.log(canJump([2,3,1,1,4]))

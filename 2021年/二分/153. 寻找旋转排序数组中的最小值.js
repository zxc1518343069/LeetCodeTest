// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/


let findMin = function(nums) {
  let left = 0
  let right = nums.length -1
  while (left< right){
    let mid = (left + right)>>1
    if (nums[right] < nums[mid]){
      left = mid +1
    }else {
      right = mid
    }
  }

  return nums[left]
};

console.log(findMin([3,4,5,1,2]))

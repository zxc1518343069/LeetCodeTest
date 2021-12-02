// https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/


// 由题目已知 一定有一次测有序。找到最小值的一次就ok

let findMin = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = (left + right) >> 1
    if (nums[right] < nums[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
};

console.log(findMin([3, 4, 5, 1, 2]))

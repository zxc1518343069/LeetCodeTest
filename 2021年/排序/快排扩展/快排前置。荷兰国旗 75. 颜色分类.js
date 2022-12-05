// https://leetcode-cn.com/problems/sort-colors/

let sortColors = function(nums) {
  let left = 0,
      right = nums.length - 1,
      cur = 0

  while (cur <= right) {
    if (nums[cur] === 0) {
      // 交换
      [nums[cur], nums[left]] = [nums[left], nums[cur]]
      left++
      cur++
    } else if (nums[cur] === 2) {
      [nums[cur], nums[right]] = [nums[right], nums[cur]]
      right--
    } else { // nums[cur] === 1
      cur++
    }
  }
  return nums
};
console.log(sortColors([2, 0, 2, 1, 1, 0]))
console.log(sortColors([2,0,1]))

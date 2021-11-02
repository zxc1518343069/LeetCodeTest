// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
这傻逼题让我提交了好几次
 */
// var search = function(nums, target) {
//   if (!nums.length) return 0;
//
//   let left = 0,
//       right = nums.length - 1;
//   while (nums[left] !== target && left < nums.length) {
//     left++;
//   }
//   while (nums[right] !== target && right >= 0) {
//     right--;
//   }
//   return left <= right ? right - left + 1 : 0;
// };

var search = function(nums, target) {
  return nums.lastIndexOf(target) - nums.indexOf(target) + (nums.indexOf(target) === -1?0:1)
};

console.log(search([5, 7, 7, 8, 8, 10], 8))
console.log(search([5, 7, 7, 8, 8, 10], 6))

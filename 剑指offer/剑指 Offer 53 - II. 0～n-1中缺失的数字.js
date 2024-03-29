// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分  还可以循环便利 对比下标
var missingNumber = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    // 判断条件
    nums[mid] === mid ? (l = mid + 1) : (r = mid - 1);
  }
  return l;
};

console.log(missingNumber([0, 1, 3])); // 2
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])); // 2

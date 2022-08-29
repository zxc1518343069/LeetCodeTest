// https://leetcode.cn/problems/skFtm2/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 异或写法 不满足 LogN
var singleNonDuplicate = function (nums) {
  let res = nums[0],
    len = nums.length;

  for (let i = 1; i < len; i++) {
    const num = nums[i];
    res ^= num;
  }
  return res;
};
console.log(singleNonDuplicate([1, 2, 2, 3, 3, 4, 4, 8, 8]));
singleNonDuplicate = function (nums) {
  let low = 0,
    high = nums.length - 1;
  // num ^ 1 一个偶数^1,那么答案是偶数+1.如果是一个奇数^1,那么答案是奇数-1
  // 根据题目而言  数字一定在 偶数位数上
  // 所以当mid 为偶数时  要跟 下一位比
  // mid 为奇数时 要更上一位比
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    if (nums[mid] === nums[mid ^ 1]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nums[low];
};
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

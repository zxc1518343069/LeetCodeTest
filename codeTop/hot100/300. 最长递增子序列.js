// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// 输出路径参考地址 https://www.shangmayuan.com/a/e74a8fc2fad141fb933fb70d.html
/**
 * @param {number[]} nums
 * @return {number}
 */

//N^2版本如何提升到nlogn版本——2021.3美团-后端
// 要求写出具体序列

// DP 方式
var lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1); // 建立一个储存 表示以nums[i]为当前最长递增子序列尾元素的长度
  let result = 1;
  const length = nums.length
  for (var i = 1; i < length; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i]) { // 如果 前面的小于后面的 证明递增
        // 已知  nums[j] < nums[i] nums[i]可以作为前1个是最长的递增子序列 dp[j] 新的尾元素，
        // 组成新的相对于dp[i]能够拼接的更长的递增子序列：dp[i] = dp[j] + 1；
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(dp[i], result)
  }
  console.log(dp,i,j)
  return result;
};
// 二分法  值不一样 但是长度相等
// lengthOfLIS = function(nums) {
//   let n = nums.length;
//   if (n <= 1) {
//     return n;
//   }
//   let tail = [nums[0]];
//   for (let i = 0; i < n; i++) {
//     if (nums[i] > tail[tail.length - 1]) {
//       tail.push(nums[i]);
//     } else {
//       let left = 0;
//       let right = tail.length - 1;
//       while (left < right) {
//         let mid = (left + right) >> 1;
//         if (tail[mid] < nums[i]) {
//           left = mid + 1;
//         } else {
//           right = mid;
//         }
//       }
//       tail[left] = nums[i];
//     }
//   }
//   console.log(tail)
//   return tail.length;
// };


console.log(lengthOfLIS(nums = [10, 9, 2, 5, 3, 7, 101, 18])) // 4
console.log(lengthOfLIS(nums = [0, 1, 0, 3, 2, 3])) // 4

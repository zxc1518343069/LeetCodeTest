// https://leetcode.cn/problems/qn8gGX/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// 试着写了一下 最后还得是暴力。。。
// 我好菜
var kSmallestPairs = function (nums1, nums2, k) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      arr.push([nums1[i], nums2[j]]);
    }
  }
  return arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1])).slice(0, k);
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 10));
console.log(kSmallestPairs([1, 2], [3], 3));

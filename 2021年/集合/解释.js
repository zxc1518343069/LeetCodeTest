// var intersection = function(nums1, nums2) {
//   return [...new Set(nums1)].filter(n => new Set(nums2).has(n))
// };
var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(n => nums2.includes(n))
};

nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
console.log(intersection(nums1,nums2))

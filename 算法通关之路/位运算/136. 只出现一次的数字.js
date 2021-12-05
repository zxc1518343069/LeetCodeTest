// https://leetcode-cn.com/problems/single-number/
// a = 0  b=x（x !=0）  a ^ b = b  b ^ b = 0

// a^a = 0
var singleNumber = function(nums) {
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++)
    ans ^= nums[i]
  return ans;
};
let a = 0
let b = 5


console.log(singleNumber([2, 2, 1]))

console.log(a ^ b) // 5
console.log(b ^ b) // 0
console.log(b ^ 3 ^ b) // 0  a ^ b ^ b = a ^ 0 = a

// https://leetcode-cn.com/problems/next-permutation/

// 123465

// 123546
let nextPermutation = function(nums) {
  // 实现 下一个更大

  if (nums.length <= 1) {
    return
  }
  let len = nums.length

  let i = len - 2 // 最后一个

  // 找到  低位比高位高你
  while(i>=0 && nums[i] >= nums[i+1]){
    i--
  }

  // 找到必它小的
  if (i >=0){
    let k = len -1
    while (k>=0 && nums[i] >= nums[k]){
      k--
    }
    [nums[i], nums[k]] = [nums[k], nums[i]]
  }

  // 实现 小

  let l = i + 1
  let r = len - 1

  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }

  return nums
};

console.log(nextPermutation([1,2,3,4,6,5]))
console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([3,2,1]))
console.log(nextPermutation([1,5,2,4,3,2]))

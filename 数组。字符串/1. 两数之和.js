// https://leetcode-cn.com/problems/two-sum/


/* 暴力 */
let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target)
      continue
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > target)
        continue
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
};

/* 哈希表法  */

/**
 * @param {number[]} nums
 * @param {number} targe2t
 * @return {number[]}
 */
let twoSum2 = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let m = target - n
    if (map.has(m)) {
      return [map.get(m), i]
    } else {
      map.set(n, i)
    }
  }
};

// 排序+ 双指针
// 时间复杂度 O NlogN 排序导致
// 不符合题意   原因 交换了位置，导致index 不准确
// 2021 11。16
twoSum2 = (nums, target) => {
  let left = 0, right = nums.length - 1
  nums.sort((a, b) => a - b)
  while (left < right) {
    if (nums[right] + nums[left] === target) {
      return [left, right]
    } else if (nums[right] + nums[left] > target) {
      right--
    } else {
      left++
    }
  }
  return []
}
console.log(twoSum2(nums = [2, 7, 11, 15], target = 9))

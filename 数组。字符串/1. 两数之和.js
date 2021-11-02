// https://leetcode-cn.com/problems/two-sum/


/* 暴力 */
let twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target)
      continue
    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] > target)
        continue
      if (nums[i] + nums[j] === target)
        return [i,j]
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
  for(let i=0;i<nums.length;i++){
    let n = nums[i]
    let m = target - n
    if(map.has(m)){
      return [map.get(m),i]
    }else{
      map.set(n,i)
    }
  }
};
console.log(twoSum2(nums = [2, 7, 11, 15], target = 9))

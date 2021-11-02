// https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let value
  for(let i = 0;i<nums.length;i++){
    if(count === 0){
      value = nums[i]
      count ++  //  首次或者有其他值跟一样次数。
    }else{
      if(nums[i] === value){
        count ++ // 再次出现。次数++
      }else{
        count-- // 次数减少。
      }
    }
  }
  return value
};

// 对冲
console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))

// https://leetcode-cn.com/problems/maximum-gap/
/* 库函数方法 */

let maximumGap = function(nums) {
  let n = nums.length;
  if(n < 2) return 0;
  nums = nums.sort((a,b) => a - b);
  let max = -1;
  for(let j = 1;j < n;j++){
    let val = nums[j] - nums[j-1];
    if(val > max){
      max = val;
    }
  }
  return max;
};

/* 桶排序的方法*/
let maximumGap = function(nums) {
  let n = nums.length;
  if(n < 2) return 0;
  let max = Math.max(...nums)
  let newArr = new Array(max).fill(0)

  for (let i = 0; i < num.length; i++) {
    newArr[nums[i]]++
  }
  return max;
};



console.log(maximumGap([3,6,9,1]))

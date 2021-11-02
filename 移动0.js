let moveZeroes = function(nums) {
  if (nums === null) return
  let j = 0

  for (let i =0;i<nums.length;i++){
    if (nums[i] !==0){
      let tmp = nums[i]
      nums[i] = nums[j]
      nums[j++] = tmp
    }
  }
  return nums
};

console.log(moveZeroes([0,1,0,3,12])
)

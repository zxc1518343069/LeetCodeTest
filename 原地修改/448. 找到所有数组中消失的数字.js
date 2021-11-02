let findDisappearedNumbers = function(nums) {
  let tmp = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i])- 1] > 0){
      nums[Math.abs(nums[i]) - 1] *= -1
    }
  }
  for(let i =0;i<nums.length;i++){
    if(nums[i]>0){
      tmp.push(i+1)
    }
  }
  return tmp
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

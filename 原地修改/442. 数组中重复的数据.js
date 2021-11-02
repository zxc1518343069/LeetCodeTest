// 找到所有出现两次的元素。

let findDuplicates = function(nums) {
  let tmp = []
  for(let i =0;i<nums.length;i++){
    if(nums[Math.abs(nums[i]) - 1] < 0){
      tmp.push(Math.abs(nums[i]))
    }
    nums[Math.abs(nums[i]) - 1] *= -1
  }
  return tmp.sort((a,b)=>a-b)
}
console.log(findDuplicates([4,3,2,7,8,2,3,1])) //[2,3]

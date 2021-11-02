// https://leetcode-cn.com/problems/sliding-window-maximum/

let maxSlidingWindow = function(nums, k) {

  // 存结果
  let res = []
  // 存队列
  let queue = []

  for (let i = 0; i < nums.length; i++) {
    // queue.push(nums[i])
    if (queue[0] <= i-k){
      queue.shift()
    }
    while (queue.length && nums[i] >= nums[queue[queue.length - 1 ]]){
      queue.pop()
    }

    queue.push(i)

    if (i >= k - 1 ){
      res.push(nums[queue[0]])
    }
  }
  return res
};


console.log(maxSlidingWindow(nums = [1,3,-1,-3,5,3,6,7],k = 3))
    // [3,3,5,5,6,7]
console.log(maxSlidingWindow(nums = [1,-1],k = 1))
// [1,-1]
console.log(maxSlidingWindow(nums = [1,3,1,2,0,5],k = 3))
//    [3,3,2,5]

//    0 1 2 3 4
//  q  3 2 0
// res  3 3

//i   0 1 2 3 4
//q   4
//res 3 3 2

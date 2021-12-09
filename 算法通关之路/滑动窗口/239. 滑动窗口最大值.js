// https://leetcode-cn.com/problems/sliding-window-maximum/

let maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  if(len<k||k===  0){
    return [];
  }
  // 存结果
  let res = []
  // 存队列    既然要放入最大值 我们就保证队列里面的第一个值最大
  let queue = [] // 存储值的下标

  for (let i = 0; i < len; i++) {
    const curItem = nums[i]

    //判断是不是 过了这个范围
    if (queue[0] <= i - k) {
      queue.shift()
    }

    // 我们需要保证这queue 里面值是 从大到小排列
    while (queue.length && curItem >= nums[queue[queue.length - 1]]) {
      queue.pop()
    }

    // 放入值 寸下标
    queue.push(i)

    //判断加入结果
    if (i >= k - 1) {
      res.push(nums[queue[0]])
    }
  }


  return res
};
// [ 3, 3, 5, 5, 6, 7 ]
//     [ 1, -1 ]
//     [ 3, 3, 2, 5 ]

console.log(maxSlidingWindow(nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3))
console.log(maxSlidingWindow(nums = [1, -1], k = 1))
console.log(maxSlidingWindow(nums = [1, 3, 1, 2, 0, 5], k = 3))

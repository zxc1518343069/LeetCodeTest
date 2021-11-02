// 思路。   回溯算法

/*
* 1.  返回的是一个数组，需要用 一个数组存储答案，一个数组 存放测试数据
* 2.  遍历这个 candidates  把它放到测试数组里，让sum+这个值
* 3.  再次进行dfs  原因。需要遍历所有情况
* 4.  最后 如果不满足  sum -= tmp.pop()   从新开始下一种情况
* 5.  需要考虑重复数据。因为给的事无重复元素。所以下一个元素一定比上一个元素大，
* 6.  存在一个特例，即7本身。 所以  要考虑 tmp为0的情况
* */


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function(candidates, target) {
  let ans = [] // 存放答案的数组
  let tmp = [] // 存放每次读取数据的数组
  function dfs(index, sum) {
    // console.log(tmp)
    if (sum === target) {
      ans.push([...tmp])
      return
    }
    if (sum > target) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (sum > target)
        return
      if (i > index && candidates[i] === candidates[i - 1])
        continue
      tmp.push(candidates[i])
      dfs(i + 1, sum + candidates[i])
      tmp.pop()
    }
  }

  dfs(0, 0)
  return ans
};

console.log(combinationSum2([2, 5, 2, 1, 2].sort(), 5))  //[ [ 1, 2, 2 ], [ 5 ] ]

// https://leetcode.cn/problems/TVdhkn/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 参考https://leetcode.cn/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
// dfs 回溯题目 首先需要确定结束条件
// 如果我们拿 arr 长度做判断
let subsets = function (nums) {
  let res = [],
    len = nums.length;

  let dfs = (arr, deep) => {
    if (len === deep) {
      // 判断 deep 是否越界
      return res.push([...arr]);
    }
    arr.push(nums[deep]);
    dfs(arr, deep + 1);
    arr.pop();
    dfs(arr, deep + 1);
  };
  dfs([], 0);

  return res;
};
console.log(subsets([1, 2, 3]));

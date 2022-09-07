// https://leetcode.cn/problems/7p8L0Z/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 秒出。。。
let permuteUnique = function (nums) {
  let res = [];
  let length = nums.length;

  let tmp = [];

  let dfs = (deep) => {
    if (tmp.length === length) {
      res.push([...tmp]);
    }
    for (let i = deep; i < length; i++) {
      tmp.push(nums[deep]);
      dfs(deep + 1);
      tmp.pop();
    }
  };
  dfs(0);
  return res;
};
console.log(permuteUnique([1, 1, 2]));

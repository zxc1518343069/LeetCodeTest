// https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
/**
 * @param {string} s
 * @return {string}
 */
// 直接调用api  没必要
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((item) => item != "")
    .reverse()
    .join(" ");
};
// 如果想自己写库函数  就是 便利去除空格  维护一个队列 再遍历压进去就可以

// https://leetcode.cn/problems/cyJERH/
/**
 * @param {string} s
 * @return {number}
 */
// 参考思路 https://leetcode.cn/problems/cyJERH/solution/by-adela2012-xfn2/
// 1. 需要得到的字符串单调递增
// 2. 所以 当我遇到0时
//      - 我是把前面的1 都反转成 0
//      - 我不反转
// 3. 取最小 次数
var minFlipsMonoIncr = function (s) {
  let self = 0, // 反转自身次数
    oneCount = 0;
  for (const char of s) {
    if (char === "0") {
      self = Math.min(self + 1, oneCount);
    } else {
      oneCount++;
    }
  }
  return self;
};

minFlipsMonoIncr("00110");
minFlipsMonoIncr("010110");

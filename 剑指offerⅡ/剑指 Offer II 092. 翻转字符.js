// https://leetcode.cn/problems/cyJERH/
/**
 * @param {string} s
 * @return {number}
 */
// 参考思路 https://leetcode.cn/problems/cyJERH/solution/by-adela2012-xfn2/
var minFlipsMonoIncr = function (s) {
  let zeroCount = 0,
    oneCount = 0;
  for (const char of s) {
    if (char === "0") {
      zeroCount = Math.min(zeroCount + 1, oneCount);
    } else {
      oneCount++;
    }
  }
  return zeroCount;
};

minFlipsMonoIncr("00110");
minFlipsMonoIncr("010110");

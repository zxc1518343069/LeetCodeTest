// https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof/
/**
 * @param {number[]} a
 * @return {number[]}
 */
// 暴力 运行超时
var constructArr = function (a) {
  const res = [],
    len = a.length;
  for (let i = 0; i < len; i++) {
    let tmp = 1;
    for (let j = 0; j < len; j++) {
      const element = a[j];
      if (j === i) continue;
      tmp *= element;
    }
    res.push(tmp);
  }
  return res;
};
// 错位运算
// 参考https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof/solution/jian-zhi-offer-66-xianzuo-by-leetcode_xs-jyh9/
constructArr = function (a) {
  const res = [],
    len = a.length;
  let tmp = 1;
  // 第一遍便利 错一位 tmp 代表前 n-1位的乘积
  for (let i = 0; i < len; i++) {
    const element = a[i];
    res[i] = tmp;
    tmp *= element;
  }

  tmp = 1;
  // 倒着来 这就有了 最后一位 * n-1位乘积
  for (let i = len - 1; i >= 0; i--) {
    const element = a[i];
    res[i] *= tmp;
    tmp *= element;
  }
  return res;
};
console.log(constructArr([1, 2, 3, 4, 5]));

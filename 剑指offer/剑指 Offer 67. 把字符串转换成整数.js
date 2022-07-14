// https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/
/**
 * @param {string} str
 * @return {number}
 */
// 手写版本
var strToInt = function (str) {
  // 特判
  str = str.trim();
  if (str === "") {
    return 0;
  }
  let INT_MIN = -Math.pow(2, 31),
    INT_MAX = Math.pow(2, 31) - 1;
  let symbol = 1, // 代表正负
    res = 0,
    firstSymbol = false,
    len = str.length;

  for (let i = 0; i < len; i++) {
    const element = str[i];
    // 为什么break  因为可能先数字 后字母
    if (element === "+" || element === "-") {
      if (!firstSymbol) {
        firstSymbol = true;
        symbol = element === "+" ? 1 : -1;
        continue;
      } else {
        break;
      }
    }
    firstSymbol = true;
    if (!(element >= "0".charCodeAt()) && !(element <= "9".charCodeAt())) {
      break;
    }
    if (element === " ") break;

    // 判断是否超出界限
    res = res * 10 + (element - 0); // 快捷转数字

    if (res * symbol <= INT_MIN) return INT_MIN;
    else if (res * symbol >= INT_MAX) return INT_MAX;
  }
  return res * symbol;
};

// 力扣看解析最快的  api 版本
var strToInt = function (str) {
  let res = parseInt(str);
  if (isNaN(res)) return 0;
  let minValue = Math.pow(-2, 31);
  let maxValue = Math.pow(2, 31) - 1;
  if (res < minValue) return minValue;
  if (res > maxValue) return maxValue;
  return res;
};

// leecode 解析
var strToInt = function (str) {
  str = str.trim();
  let n = str.length;
  if (n == 0) return 0;
  let res = "";
  for (let i = 0; i < n; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      res += str[i];
    } else if ((str[i] == "+" || str[i] == "-") && i == 0) {
      res += str[i];
    } else {
      break;
    }
  }
  // console.log(res)
  if (Number(res) > 2147483647) {
    return 2147483647;
  } else if (Number(res) < -2147483648) {
    return -2147483648;
  }
  if (res.length == 1 && (res[0] == "+" || res[0] == "-")) {
    return 0;
  }
  return Number(res);
};
// console.log(strToInt("+-42")); // 0
// console.log(strToInt("-91283472332")); // -2147483648
// console.log(strToInt("words and 987")); // 0
// console.log(strToInt("4193 with words")); // 4193
// console.log(strToInt("-42")); // -42
// console.log(strToInt("42")); // 42
// console.log(strToInt("   -42")); // -42
console.log(strToInt("0-1")); // 0
console.log(strToInt("2147483648")); // 42

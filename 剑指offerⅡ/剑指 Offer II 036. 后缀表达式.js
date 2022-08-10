// https://leetcode.cn/problems/8Zf90G/
/**
 * @param {string[]} tokens
 * @return {number}
 */
// 思路很简单 遍历 然后 push  遇到符号就 pop 两个

const isNumber = (token) => {
  return !("+" === token || "-" === token || "*" === token || "/" === token);
};

var evalRPN = function (tokens) {
  const stack = [];
  const n = tokens.length;
  for (let i = 0; i < n; i++) {
    const token = tokens[i];
    if (isNumber(token)) {
      stack.push(parseInt(token));
    } else {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (token === "+") {
        stack.push(num1 + num2);
      } else if (token === "-") {
        stack.push(num1 - num2);
      } else if (token === "*") {
        stack.push(num1 * num2);
      } else if (token === "/") {
        stack.push(
          num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2)
        );
      }
    }
  }
  return stack.pop();
};

// 9
console.log(evalRPN(["2", "1", "+", "3", "*"]));
// 6
console.log(evalRPN(["4", "13", "5", "/", "+"]));
// 22
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);

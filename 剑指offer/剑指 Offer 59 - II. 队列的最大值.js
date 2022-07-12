// https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof/
var MaxQueue = function () {
  this.que = [];
  // 临时保存最大值
  this.maxValue = -Infinity;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.que.length == 0 ? -1 : this.maxValue;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.que.push(value);
  if (value > this.maxValue) {
    this.maxValue = value;
  }
};

/**
 * @return {number}
 */
// 两种做法 一种是在删除时候做，一个是栈插入的时候维护一个栈。并排序
MaxQueue.prototype.pop_front = function () {
  if (!this.que.length) {
    return -1;
  }
  let temp = this.que.shift();
  if (temp === this.maxValue) {
    // 数组解构 + Math最大值函数
    this.maxValue = Math.max(...this.que);
  }
  return temp;
};

// https://leetcode.cn/problems/fi9suh/
// 最笨的方法
var MyCalendar = function () {
  this.booked = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  for (const item of this.booked) {
    const l = item[0], // 10
      r = item[1]; //20
    if (l < end && start < r) {
      return false;
    }
  }
  this.booked.push([start, end]);
  return true;
};

// todo 二分。

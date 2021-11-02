// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
var CQueue = function() {
  this.inner = []
  this.outer = []
};

/**
 * @description  实现尾部插入功能
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.inner.push(value)
};

/**
 * @description 实现 删除 首位功能
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.outer.length) {
    return this.outer.pop()
  } else {
    while (this.inner.length) {
      this.outer.push(this.inner.pop())
    }
    if (!this.outer.length) {
      return -1
    } else {
      return this.outer.pop()
    }
  }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

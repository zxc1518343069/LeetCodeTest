// https://leetcode-cn.com/problems/lru-cache/

/**
 * @param {number} capacity
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var LRUCache = function(capacity) {
  this.cap = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let cache = this.cache;
  if (cache.has(key)) {
    let val = cache.get(key);
    cache.delete(key);
    cache.set(key, val);
    return val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let cache = this.cache;
  if (cache.has(key)) {
    cache.delete(key);
  } else {
    if (cache.size === this.cap) {
      // Map 中的键值是有序的 返回一个可迭代对象
      cache.delete(cache.keys().next().value);
    }
  }
  cache.set(key, value);
};


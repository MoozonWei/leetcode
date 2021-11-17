/**
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */

var CQueue = function() {
    this.queue = [];
    this.length = 0;
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.queue.push(value);
    this.length++;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.length === 0) return -1;
    this.length--;
    return this.queue.shift();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
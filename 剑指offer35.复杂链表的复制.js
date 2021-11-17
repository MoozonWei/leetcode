/**
 * https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, cachedNode = new Map()) {
   if (head === null) {
      return null;
   }
   // 如果缓存 map 中没有创建过这个 node，先创建
   if (!cachedNode.has(head)) {
      // 逗号运算符
      // 逗号运算符，它将先计算左边的参数，再计算右边的参数值。然后返回最右边参数的值。
      // https://www.cnblogs.com/taohuaya/p/10955117.html
      cachedNode.set(head, { val: head.val }), Object.assign(cachedNode.get(head), { next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode) });
   }
   return cachedNode.get(head);
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, cacheMap = new Map()) {
   if (head === null) return null;
   if (!cacheMap.get(head)) cacheMap.set(head, { val: head.val }), Object.assign(cacheMap.get(head), { next: copyRandomList(head.next, cacheMap), random: copyRandomList(head.random, cacheMap) });
   return cacheMap.get(head);
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
   if (head === null) return null;
   // 先复制 next
   for (let p = head; p !== null; p = p.next.next) {
      p.next = new Node(p.val, p.next, undefined);
   }
   // 再复制 random
   for (let p = head; p !== null; p = p.next.next) {
      p.next.random = p.random ? p.random.next : null;
   }
   // 分离
   const newHead = head.next;
   for (let p = head; p !== null; p = p.next) {
      const tmpp = p.next;
      p.next = tmpp.next;
      tmpp.next = tmpp.next ? tmpp.next.next : null;
   }
   return newHead;
}
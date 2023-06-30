import{_ as e,X as i,Y as n,a1 as l,a0 as s}from"./framework-68dd73a2.js";const d={},a=s(`<h1 id="前端数据结构简介" tabindex="-1"><a class="header-anchor" href="#前端数据结构简介" aria-hidden="true">#</a> 前端数据结构简介</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3><blockquote><p>数据结构是计算机存储、组织和管理数据的方式， 包括数组、链表、栈、队列、树、图等。数据结构可以分为线性结构和非线性结构， 其中线性结构包括数组、链表、栈和队列，非线性结构包括树和图。</p></blockquote><ul><li>常用的数据结构有：</li></ul><ol><li><p>数组：一组连续的内存空间，用于存储同一类型的数据。</p></li><li><p>链表：由一系列节点组成，每个节点包含数据和指向下一个节点的指针。</p></li><li><p>栈：一种后进先出（LIFO）的数据结构，只允许在栈顶进行插入和删除操作。</p></li><li><p>队列：一种先进先出（FIFO）的数据结构，允许在队尾进行插入操作，在队头进行删除操作。</p></li><li><p>树：由节点和边组成，每个节点可以有多个子节点，但只有一个父节点。</p></li><li><p>图：由节点和边组成，每个节点可以有多个相邻节点。</p></li></ol><blockquote><p>不同的数据结构适用于不同的场景，选择合适的数据结构可以提高程序的效率和性能。</p></blockquote><h3 id="前端数据结构" tabindex="-1"><a class="header-anchor" href="#前端数据结构" aria-hidden="true">#</a> 前端数据结构</h3><ul><li>前端开发中常用的数据结构包括：</li></ul><ol><li><p>数组（Array）：一组连续的内存空间，用于存储同一类型的数据。</p></li><li><p>对象（Object）：一种无序的键值对集合，每个键都是唯一的。</p></li><li><p>链表（Linked List）：由一系列节点组成，每个节点包含数据和指向下一个节点的指针。</p></li><li><p>栈（Stack）：一种后进先出（LIFO）的数据结构，只允许在栈顶进行插入和删除操作。</p></li><li><p>队列（Queue）：一种先进先出（FIFO）的数据结构，只允许在队尾进行插入，在队头进行删除操作。</p></li><li><p>树（Tree）：由一组节点和边组成的层级结构，每个节点可以有多个子节点。</p></li><li><p>图（Graph）：由一组节点和边组成的非线性结构，每个节点可以有多个相邻节点。</p></li></ol><ul><li>在前端开发中，数组和对象是最常用的数据结构，而链表、栈、队列、树和图等数据结构则更多地应用于算法和数据处理方面。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><ul><li>下面是一些前端开发中常用数据结构的示例：</li></ul><ol><li><p>数组（Array）：一个存储数字的数组可以这样定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const numbers = [1, 2, 3, 4, 5];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>对象（Object）：一个存储个人信息的对象可以这样定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const person = {
  name: &#39;Alice&#39;,
  age: 20,
  gender: &#39;female&#39;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>链表（Linked List）：一个简单的链表可以这样定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const list = new ListNode(1, new ListNode(2, new ListNode(3)));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>栈（Stack）：一个简单的栈可以这样定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>队列（Queue）：一个简单的队列可以这样定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>树（Tree）：一个简单的二叉树可以这样定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>前端数据结构简介</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,18);function r(t,v){return i(),n("div",null,[l(" more "),a])}const c=e(d,[["render",r],["__file","vue35.html.vue"]]);export{c as default};

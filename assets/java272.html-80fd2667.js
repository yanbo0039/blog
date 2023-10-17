import{_ as s,X as a,Y as t,a1 as n,a0 as e}from"./framework-68dd73a2.js";const p={},o=e(`<h1 id="java并发容器简单介绍" tabindex="-1"><a class="header-anchor" href="#java并发容器简单介绍" aria-hidden="true">#</a> Java并发容器简单介绍</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><blockquote><p>Java提供了一些并发容器（Concurrent Containers）， 它们是线程安全的集合类，适用于多线程环境下的并发操作。 以下是一些常见的Java并发容器：</p></blockquote><ol><li><p>ConcurrentHashMap：它是线程安全的哈希表实现，支持高并发读和写操作。与普通的HashMap相比，ConcurrentHashMap在进行并发操作时不会抛出<code>ConcurrentModificationException</code>异常。</p></li><li><p>CopyOnWriteArrayList：它是一个线程安全的ArrayList实现，适用于多线程环境下的并发读取操作。在进行写操作时，会创建一个新的副本，避免了写操作的并发冲突。</p></li><li><p>ConcurrentLinkedQueue：它是一个无界的线程安全队列，基于链表实现。它支持高效的并发插入和删除操作，并且提供了原子性的操作方法。</p></li><li><p>BlockingQueue接口及其实现类：BlockingQueue是一个支持阻塞操作的队列，常用于实现生产者-消费者模式。常见的实现类有LinkedBlockingQueue、ArrayBlockingQueue、SynchronousQueue等。</p></li><li><p>ConcurrentSkipListSet和ConcurrentSkipListMap：它们是基于跳表（SkipList）实现的并发集合类，提供有序的元素访问。它们的操作具有较高的并发性能。</p></li></ol><blockquote><p>这些并发容器可以在多线程环境下安全地进行读写操作， 无需使用额外的同步机制。它们提供了高效的并发访问和线程安全的数据结构， 可用于解决多线程编程中的并发访问问题。使用这些容器可以简化并发编程的实现， 并提高系统的性能和可伸缩性。</p></blockquote><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><ul><li>当使用Java的并发容器时，可以通过以下示例来说明它们的用法和特点：</li></ul><ol><li>ConcurrentHashMap示例：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key3&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> value <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 并发读取操作</span>

map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key4&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 并发写入操作</span>

<span class="token keyword">int</span> size <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 并发计算容器大小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ConcurrentHashMap允许多个线程同时进行读操作，并且支持并发的写入操作，而不需要额外的同步机制。</li></ul><ol start="2"><li>CopyOnWriteArrayList示例：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">CopyOnWriteArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CopyOnWriteArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;element1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;element2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;element3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> element <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 并发迭代访问操作</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;element4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 并发写入操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>CopyOnWriteArrayList在进行写入操作时会创建一个新的副本，从而避免了写操作的并发冲突。 在进行并发迭代访问时，不会抛出<code>ConcurrentModificationException</code>异常。</p></blockquote><ol start="3"><li>ConcurrentLinkedQueue示例：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ConcurrentLinkedQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentLinkedQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">&quot;element1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">&quot;element2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token string">&quot;element3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> element <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 并发出队操作</span>

<span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 并发获取队列大小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ConcurrentLinkedQueue提供了高效的并发插入和删除操作，支持无界的并发访问。</li></ul><blockquote><p>这些示例展示了Java并发容器的一些常见用法，它们在多线程环境下提供了线程安全的数据操作， 并且具有良好的并发性能。根据实际需求，可以选择适合的并发容器来解决多线程编程中的并发访问问题。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java并发容器简单介绍</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,22);function c(i,l){return a(),t("div",null,[n(" more "),n(" sticky "),o])}const k=s(p,[["render",c],["__file","java272.html.vue"]]);export{k as default};
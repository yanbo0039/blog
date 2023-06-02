import{_ as e,X as s,Y as l,a1 as a,Z as i,$ as n,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_224_1.png",u={},m={id:"_224-java集合类-linkelist集合-md",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#_224-java集合类-linkelist集合-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--224-Java-LinkeList-yx54aka8558s44uema.md",target:"_blank",rel:"noopener noreferrer"},h=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;

import java.util.LinkedList;

public class LinkedListDemo {
	/**
		LinkedList:
			1.有序：添加元素的顺序与内存中存储的顺序一致
			2.允许重复
			3.允许null值
			4.存储结构：链表存储，查询效率较低，但新增与删除效率较高
			5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱
			6.LinkedList的方法 &gt; ArrayList的方法
	 */
	public static void main(String[] args) {
		
		/**
		 * 1.创建对象
		 */
		//构造一个空列
		LinkedList list = new LinkedList();
		list.add(null);
		list.add(null);
		list.add(&quot;abc&quot;);
		list.add(new String(&quot;abc&quot;));
		list.add(10);   //自动装箱  基本类型 -&gt; 包装类Integer
		list.add(true); //自动装箱  基本类型 -&gt; 包装类Boolean
		
		System.out.println(list);//[null, null, abc, abc, 10, true]
		
		/**
		 * 2.特有的方法：针对首尾元素进行新增、删除、获取等
		 */
		//addFirst() 将元素添加到第一位
		list.addFirst(&quot;首部&quot;);
		System.out.println(list);//[首部, null, null, abc, abc, 10, true]

		//addLast() 将元素添加到最后一位
		list.addLast(&quot;尾部&quot;);
		System.out.println(list);//[首部, null, null, abc, abc, 10, true, 尾部]
		
		//getFirst() 获取第一个元素
		System.out.println(list.getFirst());//首部
		
		//getLast() 获取最后一个元素
		System.out.println(list.getLast());//尾部
		
		//removeFirst()  删除并返回第一个元素
		System.out.println(list.removeFirst());//首部
		System.out.println(list);//[null, null, abc, abc, 10, true, 尾部]
		
		//removeLast()  删除并返回最后一个元素
		System.out.println(list.removeLast());//尾部
		System.out.println(list); //[null, null, abc, abc, 10, true]
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java集合类-LinkeList集合</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function p(_,g){const t=v("ExternalLinkIcon");return s(),l("div",null,[a(" more "),i("h1",m,[o,n(),i("a",b,[n("224-Java集合类-LinkeList集合.md"),d(t)])]),h])}const k=e(u,[["render",p],["__file","java224.html.vue"]]);export{k as default};

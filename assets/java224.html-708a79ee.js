import{_ as e,X as s,Y as a,a1 as l,Z as n,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_224-java集合类-linkelist集合-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_224-java集合类-linkelist集合-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--224-Java-LinkeList-yx54aka8558s44uema.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_224_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java集合类-LinkeList集合</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function h(p,g){const t=v("ExternalLinkIcon");return s(),a("div",null,[l(" more "),n("h1",u,[m,i(),n("a",b,[i("224-Java集合类-LinkeList集合.md"),d(t)])]),o])}const _=e(c,[["render",h],["__file","java224.html.vue"]]);export{_ as default};

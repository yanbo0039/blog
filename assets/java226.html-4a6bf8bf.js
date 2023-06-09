import{_ as t,X as a,Y as s,a1 as d,Z as e,$ as n,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_226_1.png",u={},m={id:"_226-java集合类-hashset与treeset集合-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_226-java集合类-hashset与treeset集合-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--226-Java-HashSetTreeSet-w820bvy3gqa2860z03sfsa.md",target:"_blank",rel:"noopener noreferrer"},h=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;

import java.util.HashSet;
import java.util.Iterator;
import java.util.TreeSet;

public class HashSetAndTreeSet {

	public static void main(String[] args) {
		/**
		 	HashSet:其底层 HashMap
				1.无序：添加元素的顺序与内存中存储的顺序不一致
				2.不允许重复：使用equals()机制进行比较
				3.允许null值
				4.存储结构：哈希存储
				5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱
				6.HashSet的效率   &gt; TreeSet的效率
		 */
		//构造一个新的空 set，其底层 HashMap 实例的默认初始容量是 16，加载因子是 0.75
		HashSet hashSet = new HashSet();
		hashSet.add(null);
		hashSet.add(null);                   //被排除
		hashSet.add(&quot;abc&quot;);
		hashSet.add(new String(&quot;abc&quot;));      //被排除
		hashSet.add(10);   //自动装箱  基本类型 -&gt; 包装类Integer
		hashSet.add(true); //自动装箱  基本类型 -&gt; 包装类Boolean
		
		//System.out.println(hashSet);//[null, abc, true, 10]
		
		/**
		 * TreeSet:其底层 TreeMap
				1.无序：添加元素的顺序与内存中存储的顺序不一致，但是会根据元素的自然顺序排序，需要使用Comparable接口中的compareTo()方法进行两两比较，必须保证元素类型一致
				2.不允许重复：使用equals()机制进行比较
				3.不允许null值: 因为需要使用Comparable接口中的compareTo()方法进行两两比较，而null不能调用任何方法
				4.存储结构：二叉树结构排序（红黑树）
				5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱
		 */
		//构造一个新的空 set，该 set 根据其元素的自然顺序进行排序
		TreeSet treeSet = new TreeSet();
		//treeSet.add(null);                   //java.lang.NullPointerException 值不允许为null
		treeSet.add(97);
		treeSet.add(88);
		treeSet.add(2);
		treeSet.add(123);
		treeSet.add(865);
		treeSet.add(88);
		
		System.out.println(treeSet);//[2, 88, 97, 123, 865]

		/**
		 * 遍历：for，因为无序，不能使用下标进行访问
		 */
		for (int i = 0; i &lt; treeSet.size(); i++) {
			
		}
		
		/**
		 * 遍历：forEach
		 */
		for (Object element : treeSet) {
			System.out.println(element);
		}
		
		System.out.println(&quot;----------------------&quot;);
		
		/**
		 * 迭代器遍历：iterator
		 */
		Iterator iterator = treeSet.iterator();
		while(iterator.hasNext())
		{
			//Object element = iterator.next();
			System.out.println(iterator.next());
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java集合类-HashSet与TreeSet集合</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Collection接口:是一个集合接口，用于保存引用类型的对象，是List与Set的父接口

	List:有序，允许重复
		ArrayList: 线性存储，查询效率高，新增与删除效率较低
		LinkedList:链表存储，查询效率较低，新增与删除效率较高
		
	Set :无序，不允许重复
		HashSet:哈希存储
		TreeSet:二叉树存储，自然顺序排序
		
		
Collections:操作集合的工具类，提供static方法用于访问Collection集合中的元素
Arrays:操作数组的工具类

Map集合：键值对存储方式

	HashMap、TreeMap、HashTable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线-1" tabindex="-1"><a class="header-anchor" href="#分割线-1" aria-hidden="true">#</a> 分割线</h3><hr>`,14);function S(p,g){const i=v("ExternalLinkIcon");return a(),s("div",null,[d(" more "),e("h1",m,[b,n(),e("a",o,[n("226-Java集合类-HashSet与TreeSet集合.md"),l(i)])]),h])}const f=t(u,[["render",S],["__file","java226.html.vue"]]);export{f as default};

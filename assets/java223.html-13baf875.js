import{_ as e,X as s,Y as l,a1 as d,Z as t,$ as i,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const u={},c={id:"_223-java集合类-arraylist集合-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_223-java集合类-arraylist集合-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--223-Java-ArrayList-yx54aka8558s44uema.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_223_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_223_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_223_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.ListIterator;

public class ArrayListDemo {


	/**
		ArrayList:
			1.有序：添加元素的顺序与内存中存储的顺序一致
			2.允许重复
			3.允许null值
			4.存储结构：线性存储，查询效率较高，但新增与删除效率较低
			5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱
	 */
	public static void main(String[] args) {
		/**
		 * 1.创建对象
		 */
		//构造一个初始容量为 10 的空列表
		ArrayList list = new ArrayList();
		list.add(null);
		list.add(null);
		list.add(&quot;abc&quot;);
		list.add(new String(&quot;abc&quot;));
		list.add(10);   //自动装箱  基本类型 -&gt; 包装类Integer
		list.add(true); //自动装箱  基本类型 -&gt; 包装类Boolean
		
		System.out.println(list.toString());//[null, null, abc, abc, 10, true] 重写父类toString()
		
		/**
		 * 2.常用方法
		 */
		//add(index,element) 新增元素
		list.add(0, &quot;新增&quot;);
		System.out.println(list); //[新增, null, null, abc, abc, 10, true]
		
		//clear() 移除所有的元素
		//list.clear();
		System.out.println(list);
		
		//size() 获取集合元素个数
		System.out.println(list.size());
		
		//contains() 判断是否包含指定元素
		System.out.println(list.contains(&quot;abc&quot;));//true
		System.out.println(list.contains(123));  //false
		
		//get(index) 通过index下标获取指定元素值
		//System.out.println(list.get(0));//新增
		
		//indexOf(obj) 查找指定元素的下标---从左往右查找
		System.out.println(list.indexOf(&quot;abc&quot;));//3
		
		//lastIndexOf(obj) 查找指定元素的下标---从右往左查找
		System.out.println(list.lastIndexOf(&quot;abc&quot;));//4
		
		//isEmpty() 判断集合是否存在元素
		System.out.println(list.isEmpty());
		
		//remove(index) 根据下标删除并且返回删除的元素
		System.out.println(&quot;删除的元素是：&quot; + list.remove(1));//null
		System.out.println(list); //[新增, null, abc, abc, 10, true]
		
		//remove(obj) 删除指定的元素
		System.out.println(&quot;删除是否成功：&quot; + list.remove(null));
		System.out.println(list);//[新增, abc, abc, 10, true]
		
		//set(index,element) 在指定index下标位置，使用element进行替换
		list.set(0, &quot;add&quot;);
		System.out.println(list);//[add, abc, abc, 10, true]
		
		/**
		 * toArray() 集合 -&gt; 数组
		 */
		Object[] array = list.toArray();
		System.out.println(Arrays.toString(array));
		
		/**
		 * 遍历数组：for----------------------------------数组访问：-----【数组长度】：array.length-------【数组取值】：array[i]
		 */
		for (int i = 0; i &lt; array.length; i++) {
			
			Object element = array[i];
			
			System.out.println(element);
		}
		System.out.println(&quot;--------------------------------&quot;);
		
		/**
		 * 遍历数组：forEach
		 */
		for (Object element : array) {
			System.out.println(element);
		}
		
		System.out.println(&quot;--------------------------------&quot;);
		
		/**
		 * 直接遍历集合：for----------------------------------集合访问：-----【集合长度】：list.size()------【集合取值】：list.get(i)
		 */
		for (int i = 0; i &lt; list.size(); i++) {
			
			Object element = list.get(i);
			
			System.out.println(element);
		}
		
		System.out.println(&quot;--------------------------------&quot;);

		
		/**
		 * 直接遍历集合：forEach
		 */
		for (Object element : list) {
			System.out.println(element);
		}
		
		System.out.println(&quot;--------------------------------&quot;);

		/**
		 * 迭代器遍历集合：Iterator
		 */
		Iterator iterator = list.iterator();
//		System.out.println(iterator.hasNext() + &quot;  &quot;  + iterator.next());
//		System.out.println(iterator.hasNext() + &quot;  &quot;  + iterator.next());
//		System.out.println(iterator.hasNext() + &quot;  &quot;  + iterator.next());
//		System.out.println(iterator.hasNext() + &quot;  &quot;  + iterator.next());
//		System.out.println(iterator.hasNext() + &quot;  &quot;  + iterator.next());
//		System.out.println(iterator.hasNext() + &quot;  &quot;);//返回false，说明已无元素可取
		while(iterator.hasNext())
		{
			Object element = iterator.next();
			System.out.println(element);
		}
		
		System.out.println(&quot;--------------------------------&quot;);
		
		/**
		 * 迭代器遍历集合：ListIterator
		 */
		ListIterator listIterator = list.listIterator();
		while(listIterator.hasNext())
		{
			Object element = listIterator.next();
			
			System.out.println(element);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java集合类-ArrayList集合</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,15);function p(h,y){const n=v("ExternalLinkIcon");return s(),l("div",null,[d(" more "),t("h1",c,[m,i(),t("a",o,[i("223-Java集合类-ArrayList集合.md"),a(n)])]),b])}const x=e(u,[["render",p],["__file","java223.html.vue"]]);export{x as default};

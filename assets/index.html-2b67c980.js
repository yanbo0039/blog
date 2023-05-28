import{_ as i,X as a,Y as s,a1 as l,Z as e,$ as n,a2 as d,a0 as v,F as r}from"./framework-68dd73a2.js";const u={},m={id:"_228-java集合类-hashmap集合-md",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#_228-java集合类-hashmap集合-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--228-Java-HashMap-0001aia0587qi5neka.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Set;

public class HashMapDemo {

	public static void main(String[] args) {
		/**
		 	 HashMap：键值对存值
		 	 
				1.无序：添加元素的顺序与内存中存储的顺序不一致
				2.是否允许重复：key值一般不允许重复（唯一性），value值可以重复
				3.允许null值
				4.存储结构：哈希存储
				5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱
				6.HashMap的效率   &gt; TreeMap的效率
		 */
		//构造一个具有默认初始容量 (16) 和默认加载因子 (0.75) 的空 HashMap
		HashMap map = new HashMap();
		map.put(null, null); //被覆盖
		map.put(null, &quot;123&quot;);
		map.put(1, &quot;张三&quot;);
		map.put(true, &#39;a&#39;);
		map.put(2, &quot;李四&quot;);
		map.put(3, &quot;123&quot;);
		
		System.out.println(map);//{null=123, 1=张三, 2=李四, 3=123, true=a}

		//clear() 清除键值对
		//map.clear();
		System.out.println(map);//{}

		//isEmpty() 判断是否为空
		System.out.println(map.isEmpty());//true
		 
		//size() 获取键值对的个数
		System.out.println(map.size());//5
		
		//containsKey(key) 判断是否包含指定key
		System.out.println(map.containsKey(1));//true
		
		//containsValue(value) 判断是否包含指定value
		System.out.println(map.containsValue(&quot;张三&quot;));//true
		
		//get(key) 通过key获取value值
		System.out.println(map.get(2));//李四
		
		//remove(key) 根据指定的key移除键值对
		map.remove(null);
		System.out.println(map);//{1=张三, 2=李四, 3=123, true=a}

		/**
		 * 遍历
		 */
		//values() ------------获取所有【值】的视图
		Collection values = map.values();
		for (Object value : values) {
			System.out.println(&quot;值：&quot; + value);
		}
		
		System.out.println(&quot;----------------------&quot;);
		
		//keySet()------------获取所有【键】的视图
		Set keys = map.keySet();
		for (Object key : keys) {
			
			//根据key获取value
			Object value = map.get(key);
			
			System.out.println(&quot;键：&quot; + key + &quot;  值：&quot; + value);
		}
		
		System.out.println(&quot;----------------------&quot;);
		
		//enrtySet()------------获取所有【键-值】的视图
		Set keyValues = map.entrySet();
		for (Object keyValue : keyValues) {
			Entry entry = (Entry)keyValue;
			
			Object key = entry.getKey();
			Object value = entry.getValue();
			
			System.out.println(&quot;键：&quot; + key + &quot;  值：&quot; + value);

		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java集合类-HashMap集合</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,12);function p(h,y){const t=r("ExternalLinkIcon");return a(),s("div",null,[l(" more "),e("h1",m,[c,n(),e("a",b,[n("228-Java集合类-HashMap集合.md"),d(t)])]),o])}const q=i(u,[["render",p],["__file","index.html.vue"]]);export{q as default};

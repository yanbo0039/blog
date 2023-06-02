import{_ as e,X as s,Y as l,a1 as d,Z as t,$ as n,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_229-java集合类-泛型-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_229-java集合类-泛型-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--229-Java--7t8o822avw0exp1bm6ye.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02.泛型;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map.Entry;
import java.util.Set;

public class _01泛型 {

	public static void main(String[] args) {
		/**
		 * 没有使用泛型：
		 * 		1.集合中可以添加任意类型的元素
		 * 		2.导致获取元素时，只允许使用Object来接收，如果需要转换为元素的原始类型，需要强制转换
		 * 		3.容易出现造型错误
		 */
		ArrayList list = new ArrayList();
		list.add(null);
		list.add(null);
		list.add(&quot;abc&quot;);
		list.add(new String(&quot;abc&quot;));
		list.add(10);  
		list.add(true);
		
		for (Object object : list) {
			//System.out.println(object);
			getType(object);
		}
		
		/**
		 * 使用泛型：
		 * 		1.集合中指定添加元素的类型
		 * 	    2.遍历获取元素时，不需要再强制转换
		 * 
		 * 		约束集合中只允许添加String类型的元素：
  					ArrayList&lt;String&gt; list = new ArrayList&lt;String&gt;();
  					
		 * 		约束集合中只允许添加Integer类型的元素：
  					ArrayList&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();

		 * 		约束集合中key为Integer类型，value为String类型：
  					HashMap&lt;Integer,String&gt; map = new HashMap&lt;Integer,String&gt;();

		 */
		//约束集合中只允许添加String类型的元素：
		ArrayList&lt;String&gt; list2 = new ArrayList&lt;String&gt;();
		list2.add(&quot;abc&quot;);
		//list2.add(10);
		list2.add(&quot;d&quot;);
		list2.add(&quot;e&quot;);
		list2.add(&quot;f&quot;);
		
		for (String element : list2) {
			System.out.println(element);
		}
		
		//约束集合中key为Integer类型，value为String类型：
		HashMap&lt;Integer,String&gt; map = new HashMap&lt;Integer,String&gt;();
		map.put(1, &quot;张三&quot;);
		map.put(2, &quot;李四&quot;);
		map.put(3, &quot;王五&quot;);
		
		Set&lt;Entry&lt;Integer, String&gt;&gt; entrySet = map.entrySet();
		for (Entry&lt;Integer, String&gt; entry : entrySet) {
			Integer key = entry.getKey();
			String value = entry.getValue();
			
			System.out.println(key +&quot;  &quot; + value);
		}
	}
	/**
	 * 获取指定对象的原始类型
	 * @param object
	 */
	private static void getType(Object object) {
		if(object instanceof String)
		{
			String str = (String)object;
			System.out.println(str + &quot;是一个String&quot;);
		}
		else if(object instanceof Integer)
		{
			Integer inte = (Integer)object;
			System.out.println(inte + &quot;是一个Integer&quot;);
		}
		else if(object instanceof Boolean)
		{
			Boolean bool = (Boolean)object;
			System.out.println(bool + &quot;是一个Boolean&quot;);
		}
		else
		{
			System.out.println(object + &quot;是一个未识别的类型&quot;);
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java集合类-泛型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,12);function g(p,h){const i=v("ExternalLinkIcon");return s(),l("div",null,[d(" more "),t("h1",u,[m,n(),t("a",b,[n("229-Java集合类-泛型.md"),a(i)])]),o])}const y=e(c,[["render",g],["__file","java229.html.vue"]]);export{y as default};

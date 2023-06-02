import{_ as s,X as l,Y as d,a1 as a,Z as e,$ as n,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const u={},c={id:"_129-java-使用linkedlist模拟队列-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_129-java-使用linkedlist模拟队列-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--129-Java-linkedList-jg44ay97al43g748aqk7chiwk.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>1、请使用LinkedList来模拟一个队列(先进先出的特性): 1.1 拥有放入对象的方法void put(Object o) 1.2 取出对象的方法Object get() 1.3 判断队列当中是否为空的方法boolean isEmpty()；并且，编写测试代码，验证你的队列是否正确。  2、假设顺序列表ArrayList中存储的元素是整型数字1~5，遍历每个元素，将每个元素顺序输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.LinkedList;

/**
 * 1、请使用LinkedList来模拟一个队列(先进先出的特性): 
 * 1.1 拥有放入对象的方法void put(Object o)
 * 1.2 取出对象的方法Object get()
 * 1.3 判断队列当中是否为空的方法boolean isEmpty()；
 * 并且，编写测试代码，验证你的队列是否正确。
 * &lt;p&gt;Title: MyQueue&lt;/p&gt;  
 * &lt;p&gt;Description: &lt;/p&gt;  
 * @author xianxian 
 * @date 2019年7月13日
 */
public class MyQueue {
	private LinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();

	//放的方法
	public void put(String str) {
		list.addLast(str);
	}
	
	//取的方法,取的同时把这个元素删除
	public String get() {
		return list.pollFirst();//pollFirst()查询并删除第一个元素 
	}
	
	public boolean isEmpty() {
		return list.size() == 0;
	}

	@Override
	public String toString() {
		return &quot;MyQueue [list=&quot; + list.toString() + &quot;]&quot;;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;
/**
 * 1、请使用LinkedList来模拟一个队列(先进先出的特性): 
 * 1.1 拥有放入对象的方法void put(Object o)
 * 1.2 取出对象的方法Object get()
 * 1.3 判断队列当中是否为空的方法boolean isEmpty()；
 * 并且，编写测试代码，验证你的队列是否正确。
 * &lt;p&gt;Title: TestMyQueue&lt;/p&gt;  
 * &lt;p&gt;Description: &lt;/p&gt;  
 * @author xianxian 
 * @date 2019年7月13日
 */
public class TestMyQueue {

	public static void main(String[] args) {

		MyQueue q = new MyQueue();//创建了一个队列
		q.put(&quot;123&quot;);
		q.put(&quot;567&quot;);
		q.put(&quot;663&quot;);
		q.put(&quot;77&quot;);
		q.put(&quot;10&quot;);
		q.put(&quot;23&quot;);
		
		System.out.println(q.toString());
		
		/*
		 * 123  567 663  77  10  23
		 * 
		 * 
		 */
		System.out.println(&quot;============================&quot;);
		while(!q.isEmpty())
		{
			System.out.println(q.get());
		}
		
		System.out.println(q.isEmpty());
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试结果</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MyQueue [list=[123, 567, 663, 77, 10, 23]]
============================
123
567
663
77
10
23
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点：</h4>`,7),p={href:"https://cloud.tencent.com/developer/news/374471",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.jianshu.com/p/f16edbd1cf5f",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/euller/article/details/53870600",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/coderinchina/article/details/40583881",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.cnblogs.com/java2016/p/5386665.html",target:"_blank",rel:"noopener noreferrer"},k=e("em",null,"Java-使用linkedList模拟队列",-1),q={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},f=e("hr",null,null,-1),x=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),y=e("hr",null,null,-1),j=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function S(w,E){const i=v("ExternalLinkIcon");return l(),d("div",null,[a(" more "),e("h1",c,[o,n(),e("a",m,[n("129-Java-使用linkedList模拟队列.md"),t(i)])]),b,e("p",null,[e("a",p,[n("Java从入门到架构师之详谈Java SE中子接口List的LinkedList模拟栈数据结构的集合并测试"),t(i)])]),e("p",null,[e("a",h,[n("LinkedList模拟栈数据结构的集合"),t(i)])]),e("p",null,[e("a",g,[n("Java用LinkedList模拟栈和队列"),t(i)])]),e("p",null,[e("a",_,[n("Java 使用LinkedList模拟一个堆栈或者队列数据结构"),t(i)])]),e("p",null,[e("a",L,[n("Java集合框架之LinkedList-----用LinkedList模拟队列和堆栈"),t(i)])]),e("p",null,[e("strong",null,[n("以上就是我关于 "),k,n(" 知识点的整理与总结的全部内容，"),e("a",q,[n("另附源码"),t(i)])])]),f,x,y,j])}const M=s(u,[["render",S],["__file","java129.html.vue"]]);export{M as default};

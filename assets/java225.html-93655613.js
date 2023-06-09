import{_ as t,X as s,Y as l,a1 as d,Z as e,$ as i,a2 as a,a0 as v,F as r}from"./framework-68dd73a2.js";const u={},c={id:"_225-java集合类-linkelist集合-练习题-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_225-java集合类-linkelist集合-练习题-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--225-Java-LinkeList--tr93aq60fka8629u2plakk0mma007j.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="请使用linkedlist来模拟一个队列-先进先出的特性" tabindex="-1"><a class="header-anchor" href="#请使用linkedlist来模拟一个队列-先进先出的特性" aria-hidden="true">#</a> 请使用LinkedList来模拟一个队列(先进先出的特性)</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02.练习;

import java.util.LinkedList;

/**
 * 1、请使用LinkedList来模拟一个队列(先进先出的特性): [必做题]
		1.1 拥有放入对象的方法void put(Object o)
		1.2 取出对象的方法Object get()
		1.3 判断队列当中是否为空的方法boolean isEmpty()；
		
		并且，编写测试代码，验证你的队列是否正确。
 */
public class Queue {
	LinkedList list = new LinkedList();

	//1.1 拥有放入对象的方法void put(Object o)
	public void put(Object o)
	{
		list.addLast(o);
	}
	
	//1.2 取出对象的方法Object get()
	public Object get()
	{
		return list.removeFirst();
	}
	
	//1.3 判断队列当中是否为空的方法boolean isEmpty()；
	public boolean isEmpty()
	{
		return list.isEmpty();
	}
	
	//并且，编写测试代码，验证你的队列是否正确。
	public static void main(String[] args) {
		Queue queue = new Queue();
		
		//存值
		queue.put(1);
		queue.put(2);
		queue.put(3);
		queue.put(4);
		queue.put(5);
		
		//取值
		/*System.out.println(queue.get());
		System.out.println(queue.get());
		System.out.println(queue.get());
		System.out.println(queue.get());
		System.out.println(queue.get());
		System.out.println(queue.get());*/
		
		while(!queue.isEmpty())
		{
			System.out.println(queue.get());
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java集合类-LinkeList集合-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function p(h,_){const n=r("ExternalLinkIcon");return s(),l("div",null,[d(" more "),e("h1",c,[m,i(),e("a",b,[i("225-Java集合类-LinkeList集合-练习题.md"),a(n)])]),o])}const k=t(u,[["render",p],["__file","java225.html.vue"]]);export{k as default};

import{_ as a,X as t,Y as d,a1 as s,Z as e,$ as n,a2 as r,a0 as l,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_240_1.png",u={},m={id:"_240-java多线程编程-实现方式-继承thread-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_240-java多线程编程-实现方式-继承thread-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--240-Java--Thread-h182ai54ajoq5gqs4pep6edt4aa2121a73ab0b.md",target:"_blank",rel:"noopener noreferrer"},h=l('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04;

public class TestMain {

	/**
	 * main方法为主线程：此时，为单线程的程序
	 */
	public static void main(String[] args) {
		
		method();
		
		for (int i = 6; i &lt;= 10; i++) {
			System.out.println(Thread.currentThread().getName() + &quot; : &quot; + i);
		}
		
	}
	
	public static void method()
	{
		for (int i = 1; i &lt;= 5; i++) {
			System.out.println(Thread.currentThread().getName() + &quot; : &quot; +i);
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.两种实现方式;
/**
	方式一：
		1.自定义类继承Thread类
			public class ThreadDemo extends Thread{ }
		
		2.重写Thread父类中的run()方法
		
		3.测试
			ThreadDemo t1 = new ThreadDemo();
			//t1.run();//此时为单线程，仅为调用一个类的普通方法而已
			t1.start();//启动线程，让线程就绪，但是不会立马执行run方法，等待CPU分配时间片
 */
public class ThreadDemo extends Thread{

	@Override
	public void run() {
		for (int i = 6; i &lt;= 10; i++) {
			System.out.println(Thread.currentThread().getName() + &quot; : &quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.两种实现方式;

public class TestThread {

	public static void main(String[] args) {
		//线程一
		ThreadDemo t1 = new ThreadDemo();
		//t1.run();//此时为单线程，仅为调用一个类的普通方法而已
		t1.start();//启动线程，让线程就绪，但是不会立马执行run方法，等待CPU分配时间片
		
		//线程二
		ThreadDemo t2 = new ThreadDemo();
		t2.start();//启动线程，让线程就绪，但是不会立马执行run方法，等待CPU分配时间片

		//主线程
		for (int i = 1; i &lt;= 5; i++) {
			System.out.println(Thread.currentThread().getName() + &quot; : &quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java多线程编程-实现方式-继承Thread</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,11);function p(g,_){const i=v("ExternalLinkIcon");return t(),d("div",null,[s(" more "),e("h1",m,[o,n(),e("a",b,[n("240-Java多线程编程-实现方式-继承Thread.md"),r(i)])]),h])}const f=a(u,[["render",p],["__file","java240.html.vue"]]);export{f as default};

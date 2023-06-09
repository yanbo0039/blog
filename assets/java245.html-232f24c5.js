import{_ as d}from"./Java_244_1-fa57c1b3.js";import{_ as t,X as s,Y as a,a1 as l,Z as i,$ as n,a2 as r,a0 as v,F as c}from"./framework-68dd73a2.js";const u={},m={id:"_245-java多线程编程-常用方法-join-yield方法-md",tabindex:"-1"},b=i("a",{class:"header-anchor",href:"#_245-java多线程编程-常用方法-join-yield方法-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--yield-n60k442b.md",target:"_blank",rel:"noopener noreferrer"},h=v('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.常用方法;

/**
 * join:导致当前线程等待，直到调用该方法之前的所有线程执行结束
 */
public class JoinDemo {

	public static void main(String[] args) {
		Thread4 t1 = new Thread4(1,10);
		t1.start();
		
		Thread4 t2 = new Thread4(11,20);
		t2.start();
		
		try {
			t2.join();//让t2插队，让t2之前的所有线程先执行完成，后续的代码才可以继续执行
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}
		
		
		for (int i = 100; i &lt;= 110; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;:&quot; + i);
			
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}

class Thread4 extends Thread{

	private int begin;
	private int end;
	
	public Thread4(int begin,int end)
	{
		this.begin = begin;
		this.end = end;
	}
	
	@Override
	public void run() {
		for (int i = begin; i &lt;= end; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;:&quot; + i);
			
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.常用方法;
/**
 * yield():让出更多的CPU时间给其他的线程
 *
 */
public class YieldDemo {

	public static void main(String[] args) {
		Thread5 t1 = new Thread5();
		t1.start();
		
		Thread6 t2 = new Thread6();
		t2.start();
	}
	
}
class Thread5 extends Thread{

	@Override
	public void run() {
		for (int i = 1; i &lt;= 10; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;:&quot; + i);

			Thread.yield();//让出更多的CPU时间给其他的线程
		}
	}
}

class Thread6 extends Thread{

	@Override
	public void run() {
		for (int i = 11; i &lt;= 20; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;:&quot; + i);

		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java多线程编程-常用方法-join &amp; yield方法</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,10);function p(g,T){const e=c("ExternalLinkIcon");return s(),a("div",null,[l(" more "),i("h1",m,[b,n(" 245-Java多线程编程-常用方法-join & "),i("a",o,[n("yield方法.md"),r(e)])]),h])}const x=t(u,[["render",p],["__file","java245.html.vue"]]);export{x as default};

import{_ as d,X as t,Y as a,a1 as s,Z as i,$ as n,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_245-java多线程编程-常用方法-join-yield方法-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_245-java多线程编程-常用方法-join-yield方法-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--yield-n60k442b.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_244_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.常用方法;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java多线程编程-常用方法-join &amp; yield方法</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,14);function h(p,g){const e=v("ExternalLinkIcon");return t(),a("div",null,[s(" more "),i("h1",u,[m,n(" 245-Java多线程编程-常用方法-join & "),i("a",b,[n("yield方法.md"),l(e)])]),o])}const _=d(c,[["render",h],["__file","java245.html.vue"]]);export{_ as default};

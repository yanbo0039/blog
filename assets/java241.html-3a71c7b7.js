import{_ as t,X as d,Y as s,a1 as a,Z as n,$ as i,a2 as l,a0 as v,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_241_1.png",u={},m={id:"_241-java多线程编程-实现方式-实现runnable-售票-线程同步-md",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_241-java多线程编程-实现方式-实现runnable-售票-线程同步-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--dqr465cnlkure.md",target:"_blank",rel:"noopener noreferrer"},h=v('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.两种实现方式;

public class TestRunnable {

	public static void main(String[] args) {
		/**
		 * 测试继承Thread
		 */
		//线程一
		//ThreadDemo t1 = new ThreadDemo();
		//t1.run();//此时为单线程，仅为调用一个类的普通方法而已
		//t1.start();//启动线程，让线程就绪，但是不会立马执行run方法，等待CPU分配时间片
		
		//线程二
		//ThreadDemo t2 = new ThreadDemo();
		//t2.start();//启动线程，让线程就绪，但是不会立马执行run方法，等待CPU分配时间片

		/**
		 * 测试实现Runnable
		 */
		RunableDemo runableDemo = new RunableDemo();
		//t3.start();//没有start()方法，不能启动一个线程
		
		//线程三
		Thread t3 = new Thread(runableDemo);
		t3.start();
		
		//线程四
		Thread t4 = new Thread(runableDemo);
		t4.start();
		
		//主线程
		for (int i = 1; i &lt;= 5; i++) {
			System.out.println(Thread.currentThread().getName() + &quot; : &quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.售票;

/**
 * 线程同步：使用synchronized关键字修饰
		
		1.同步方法：使用synchronized修饰方法
				//同步方法，粒度粗
				public synchronized void run() {
					
				}
		
			类锁：synchronized修饰static的方法，例如：
					public static synchronized void run() {},基于当前类，一次只能被一个线程访问
					
		            对象锁：synchronized修饰非static的方法，例如：
		            public synchronized void run() {},基于当前对象，一次只能被一个线程访问
		            
		2.同步语句：使用synchronized修饰代码块
			   //同步语句，粒度细
			   synchronized (this) {
			   
			   }
			   
			 类锁（RunnableTicket.class）、对象锁（this）、任意锁（&quot;a&quot;,&quot;b&quot;）
 */
public class RunnableTicket implements Runnable{

	private int num = 50;

	//同步语句，粒度细
	@Override
	public void run() {
		while(num &gt; 0)
		{
			// 1   杰成     2 国威---------------排队
			synchronized (this) {
				//加一层判断，判断当前是否还有余票
				if(num &gt; 0)
				{
					System.out.println(&quot;售票员 【&quot; + Thread.currentThread().getName() + &quot;】，售出了票NO.&quot; + num);
					num--;
				}
			}
			
			//Thread休眠一秒
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	
	//同步方法，粒度粗
	//@Override
	public synchronized void run1() {
		while(num &gt; 0)
		{
			System.out.println(&quot;售票员 【&quot; + Thread.currentThread().getName() + &quot;】，售出了票NO.&quot; + num);
			num--;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.售票;

public class ThreadTicket extends Thread{

	private int num = 50;

	@Override
	public void run() {
		while(num &gt; 0)
		{
			System.out.println(&quot;售票员 【&quot; + Thread.currentThread().getName() + &quot;】，售出了票NO.&quot; + num);
			num--;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.售票;

public class TicketTest {

	public static void main(String[] args) {
		/**
		 * 继承Thread：不能实现数据共享，因为每new一次对象，生成一个新的num保存在堆内存中，且只能单继承
		 */
		/*//售票员一号
		ThreadTicket t1 = new ThreadTicket();
		t1.setName(&quot;杨国&quot;);
		t1.start();
		
		//售票员二号
		ThreadTicket t2 = new ThreadTicket();
		t2.setName(&quot;陆嘉琛&quot;);
		t2.start();*/
		
		/**
		 * 实现Runnable接口:可以共享数据，RunnableTicket仅new一次，num在内存中仅存在一份，共享给t3与t4一起使用，支持多实现
		 */
		RunnableTicket ticket = new RunnableTicket();
		
		//售票员三号
		Thread t3 = new Thread(ticket);
		t3.setName(&quot;杰成&quot;);
		t3.start();
		
		//售票员四号
		Thread t4 = new Thread(ticket);
		t4.setName(&quot;国威&quot;);
		t4.start();
		
		RunnableTicket ticket2 = new RunnableTicket();
		
		//售票员三号
		Thread t5 = new Thread(ticket2);
		t5.setName(&quot;杰成2&quot;);
		t5.start();
		
		//售票员四号
		Thread t6 = new Thread(ticket2);
		t6.setName(&quot;国威2&quot;);
		t6.start();
		
		
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java多线程编程-实现方式-_实现runnable &amp; 售票 &amp; 线程同步</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function p(T,g){const e=r("ExternalLinkIcon");return d(),s("div",null,[a(" more "),n("h1",m,[b,i(" 241-Java多线程编程-实现方式-_实现runnable & 售票 & "),n("a",o,[i("线程同步.md"),l(e)])]),h])}const _=t(u,[["render",p],["__file","java241.html.vue"]]);export{_ as default};

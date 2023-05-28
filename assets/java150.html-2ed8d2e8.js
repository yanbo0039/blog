import{_ as s,X as l,Y as d,a1 as a,Z as i,$ as n,a2 as t,a0 as v,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_150_1.gif",u="/blog/assets/Java_150_2.gif",b={},m={id:"_150-java-线程的bug及三种解决bug的方法-md",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#_150-java-线程的bug及三种解决bug的方法-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--150-Java-bugbug-gj3xv96bd1io22g9y3adr6bja254qllb818d4g8d.md",target:"_blank",rel:"noopener noreferrer"},p=v(`<p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的bug;

public class Ticket {

	private int count = 1000;
	
	//会产生bug
	public void saleTicket() {
		if(count &gt; 0) {
			System.out.println(Thread.currentThread().getName() + &quot;: &quot; + count);
			count--;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的bug;
/**
 * 
* &lt;p&gt;Title: SaleTicket&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
*  推荐：以后创建线程类建议通过实现接口的方式创建
*  原因：1.Java是单继承
*  		 2.语义好
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class SaleTicket implements Runnable{

	private Ticket ticket;
	
	public SaleTicket(Ticket ticket) {
		this.ticket = ticket;
	}
//	private int startNumber;
//	private int endNumber;
//	
//	public  SaleTicket(int startNumber,int endNumber) {
//		this.startNumber = startNumber;
//		this.endNumber = endNumber;
//	}
	
	
//	@Override
//	public void run() {
//		for (int i = this.startNumber; i &lt;= this.endNumber; i++) {
//			System.out.println(Thread.currentThread().getName() + &quot;: &quot; + i);
//		}
//	}
	
	@Override
	public void run() {
		for (int i = 1; i &lt;= 1000; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;: &quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的bug;

public class Test {

	public static void main(String[] args) {
		
		Ticket t = new Ticket();
		/**
		 * 出现bug：卖了三张同样的票
		 * 1、三个线程操作的是同一个对象
		 * 2、三个 线程访问的count是同一个
		 * 对象的属性，然后代码执行过程中
		 * 时间片随时会被抢走，所以代码
		 * 会出问题
		 */
		SaleTicket s1 = new SaleTicket(t);
		new Thread(s1).start();
		SaleTicket s2 = new SaleTicket(t);
		new Thread(s2).start();
		SaleTicket s3 = new SaleTicket(t);
		new Thread(s3).start();

//		SaleTicket s1 = new SaleTicket(1, 100);
//		new Thread(s1).start();
//		SaleTicket s2 = new SaleTicket(101, 200);
//		new Thread(s2).start();
//		SaleTicket s3 = new SaleTicket(201, 300);
//		new Thread(s3).start();
		
		
		
		/*
	 	@Override
	public void run() {
		for (int i = 1; i &lt;= 100; i++) {
			if(count&gt;0)
		{
			System.out.println(Thread.currentThread().getName()+&quot;:&quot;+count);
			count--;
		}
		}
	}
	 
	 */
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果如图所示,线程bug:1000数字现现咯三次，显然不是我们的期望。</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>解决bug的方法一给方法上锁</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的bug;

public class Ticket {

	private int count = 1000;
	
    public synchronized void saleTicket() {//解决bug方法一：上锁 加关键字synchronized
        if(count &gt; 0) {
            System.out.println(Thread.currentThread().getName() + &quot;: &quot; + count);
            count--;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决bug的方法二锁共享对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的bug;

public class Ticket {

	private int count = 1000;
	
	public void saleTicket() {
		synchronized (this) {//解决bug方法二：锁住共享对象
			if(count &gt; 0) {
				System.out.println(Thread.currentThread().getName() + &quot;: &quot; + count);
				count--;
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>解决bug的方法三是用Lock对象</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的bug;

import java.util.concurrent.locks.Lock;//解决bug方法三：使用Lock对象
import java.util.concurrent.locks.ReentrantLock;//解决bug方法三：使用Lock对象

public class Ticket {

	private int count = 1000;
	
	private Lock lock = new ReentrantLock();//解决bug方法三：使用Lock对象
	
	
	public void saleTicket() {//解决bug方法三：使用Lock对象
		lock.lock();//上锁
		if(count &gt; 0) {
			System.out.println(Thread.currentThread().getName() + &quot;: &quot; + count);
			count--;
		}
		lock.unlock();//解锁
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上三种方法测试运行结果如下图所示,已解决咯上述问题：</p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14),h=i("em",null,"Java-线程的bug及三种解决bug的方法",-1),k={href:"https://github.com/javaobjects/demo521",target:"_blank",rel:"noopener noreferrer"},T=i("hr",null,null,-1),_=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=i("hr",null,null,-1),f=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function S(N,q){const e=r("ExternalLinkIcon");return l(),d("div",null,[a(" more "),i("h1",m,[o,n(),i("a",g,[n("150-Java-线程的bug及三种解决bug的方法.md"),t(e)])]),p,i("p",null,[i("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容,"),i("a",k,[n("另附源码"),t(e)])])]),T,_,x,f])}const y=s(b,[["render",S],["__file","java150.html.vue"]]);export{y as default};

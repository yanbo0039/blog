import{_ as i,X as n,Y as e,a1 as t,a0 as s}from"./framework-68dd73a2.js";const d="/blog/assets/Java_33_1.gif",l="/blog/assets/Java_33_2.gif",r="/blog/assets/Java_33_3.gif",v="/blog/assets/Java_33_4.gif",a={},u=s(`<h1 id="java中级测试题四-多线程编程-4-4" tabindex="-1"><a class="header-anchor" href="#java中级测试题四-多线程编程-4-4" aria-hidden="true">#</a> Java中级测试题四-多线程编程(4-4)</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>利用Thread实现，要求多线程求解某范围素数每个线程负责1000范围：线程1找1-1000；线程 2 找 1001-2000；线程 3 找2001-3000。编程程序将每个线程找到的素数及时打印。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Topic1 extends Thread{

	private int startNumber;
	private int endNumber;
	
	public Topic1() {
		super();
	}

	public Topic1(int startNumber, int endNumber) {
		super();
		this.startNumber = startNumber;
		this.endNumber = endNumber;
	}

	@Override
	public String toString() {
		return &quot;Topic1 [startNumber=&quot; + startNumber + &quot;, endNumber=&quot; + endNumber + &quot;]&quot;;
	}

	public int getStartNumber() {
		return startNumber;
	}

	public void setStartNumber(int startNumber) {
		this.startNumber = startNumber;
	}

	public int getEndNumber() {
		return endNumber;
	}

	public void setEndNumber(int endNumber) {
		this.endNumber = endNumber;
	}
	
	public void isPrime() {
		   boolean flag;
	        for(int i = this.startNumber;i&lt;=this.endNumber;i++) {
	            flag = false;
	            for(int j = 2;j &lt; i;j++) {
	                if(i % j == 0) {
	                    flag = true;
	                    break;
	                }
	            }
	            if(flag == false) {
	                System.out.println(i);
	            }
	        }
	}
	@Override
	public void run(){
		this.isPrime();
	}

	public static void main(String[] args) {
		Topic1 tp1 = new Topic1(1,1000);
		Topic1 tp2 = new Topic1(1001,2000);
		Topic1 tp3 = new Topic1(2001,3000);
		
		Thread td1 = new Thread(tp1);
		td1.start();
		Thread td2 = new Thread(tp2);
		td2.start();
		Thread td3 = new Thread(tp3);
		td3.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>利用Runnable实现，要求多线程求解某范围素数每个线程负责1000范围：线程1找1-1000；线程 2 找 1001-2000；线程 3 找2001-3000。编程程序将每个线程找到的素数及时打印。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Topic2 implements Runnable{
	/*
	 * 2、利用Runnable实现，要求多线程求解某范围素数每个线程负责1000范围：
	 * 线程1找1-1000；线程 2 找 1001-2000；线程 3 
	 * 找2001-3000。编程程序将每个线程找到的素数及时打印。
	 * 
	 * 概念：质数又称素数。一个大于1的自然数，除了1和它自身外，
	 * 不能被其他自然数整除的数叫做质数；否则称为合数。
	 */

	private int startNumber;
	private int endNumber;
	public void print() {
		boolean flag;
		for(int i = this.startNumber;i&lt;=this.endNumber;i++) {
			flag = false;
			for(int j = 2;j &lt; i;j++) {
				if(i % j == 0) {
					flag = true;
					break;
				}
			}
			if(flag == false) {
				System.out.println(i);
			}
		}
	}
	
	public int getStartNumber() {
		return startNumber;
	}

	public void setStartNumber(int startNumber) {
		this.startNumber = startNumber;
	}

	public int getEndNumber() {
		return endNumber;
	}

	public void setEndNumber(int endNumber) {
		this.endNumber = endNumber;
	}

	@Override
	public String toString() {
		return &quot;Topic1 [startNumber=&quot; + startNumber + &quot;, endNumber=&quot; + endNumber + &quot;]&quot;;
	}

	public Topic2() {
		
	}
	public Topic2(int startNumber, int endNumber) {
		super();
		this.startNumber = startNumber;
		this.endNumber = endNumber;
	}
	@Override
	public void run() {
		this.print();
	}
	
	public static void main(String[] args) {
		Topic2 t1 = new Topic2(1,1000);
		Topic2 t2 = new Topic2(1001,2000);
		Topic2 t3 = new Topic2(2001,3000);
		
		Thread td1 = new Thread(t1);
		td1.start();
		Thread td2 = new Thread(t2);
		td2.start();
		Thread td3 = new Thread(t3);
		td3.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下: <img src="`+l+`" alt="" loading="lazy"> 3. 编写一个Java程序(包括一个主程序类，一个线程类。在主程序类中创建2个线程，将其中一个线程的优先级设为10，另一个线程的优先级设为6。让优先级为10的线程打印200次“线程1正在运行”，优先级为6的线程打印200次“线程2正在运行”。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Topic3 extends Thread{
	/*
	 * 3、编写一个Java程序(包括一个主程序类，一个线程类。
	 * 在主程序类中创建2个线程，将其中一个线程的优先级设为10，
	 * 另一个线程的优先级设为6。
	 * 让优先级为10的线程打印200次“线程1正在运行”，
	 * 优先级为6的线程打印200次“线程2正在运行”。
	 * 
	 */
	private String name;
	public Topic3() {
		super();
	}
	public Topic3(String name) {
		super();
		this.name = name;
	}
	@Override
	public String toString() {
		return &quot;Topic3 [name=&quot; + name + &quot;]&quot;;
	}
    @Override
	public void run() {
		super.run();
		for(int i = 0;i &lt; 200;i++) {
			System.out.println(this.name + &quot;正在运行&quot;);
		}
	}
	public static void main(String[] args) {
		Topic3 tp1 = new Topic3(&quot;线程1&quot;);
		
		Topic3 tp2 = new Topic3(&quot;线程2&quot;);
		
		Thread td1 = new Thread(tp1);
		td1.setPriority(10);
		td1.start();
		Thread td2 = new Thread(tp2);
		td2.setPriority(6);
		td2.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下： <img src="`+r+`" alt="" loading="lazy"></p><ol start="4"><li>编写一个计时器，每隔一秒钟，在控制台打印出最新时间。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.Date;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

public class Topic4 implements Callable&lt;Integer&gt;{
	/*
	 * 4、编写一个计时器，每隔一秒钟，
	 * 在控制台打印出最新时间。
	 */
	@Override
	public Integer call() throws Exception {
		while(true) {
			Thread.sleep(1000);
			System.out.println(new Date());
		}
	}
	public static void main(String[] args) {
		Topic4 t4 = new Topic4();
		FutureTask&lt;Integer&gt; ft1 = new FutureTask&lt;&gt;(t4);  
		
		new Thread(ft1).start();
		
		try {
			System.out.print(ft1.get());
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java中级测试题四-多线程编程(4-4)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',18);function c(m,b){return n(),e("div",null,[t(" more "),u])}const p=i(a,[["render",c],["__file","java33.html.vue"]]);export{p as default};

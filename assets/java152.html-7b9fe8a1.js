import{_ as d,X as s,Y as a,a1 as l,Z as e,$ as n,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_152_1.png",u={},m={id:"_152-java-模拟面包房生产一个面包消费一个面包-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_152-java-模拟面包房生产一个面包消费一个面包-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--152-Java--375na71cb06oe56adac1721e2qcy98c26ogm3bz31ik72bgaf.md",target:"_blank",rel:"noopener noreferrer"},h=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的通信;

public class Bread {
	
	private boolean flag = false;//默认没有面包
	//生产面包的方法
	public synchronized void produce(int i) {
		//如果没有面包那么就生产面包，生产完后通知所有线程
		if(!flag) {
			System.out.println(Thread.currentThread().getName() + i +&quot; 生产面包&quot;);
			flag = true;
			this.notifyAll();//生产完后通知所有监视当前对象的线程
		}else {
			//如果有面包，就等待
			try {
				System.out.println(Thread.currentThread().getName() + i + &quot; 阻塞&quot;);
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	//消费面包的方法
	public synchronized void consumer(int i) {
		//如果有面包那么就消费面包，消费完后通知所有线程，消费面包
		if(flag) {
			System.out.println(Thread.currentThread().getName() + i + &quot; 消费面包&quot;);
			flag = false;
			this.notifyAll();//消费完后通知所有监视当前对象的线程
		}else {
			//如果没有面包，就等待
			try {
				System.out.println(Thread.currentThread().getName() + i + &quot; 阻塞&quot;);
				this.wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的通信;
/**
 * 
* &lt;p&gt;Title: ConsumerThread&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
* 	消费线程
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月18日
 */
public class ConsumerThread implements Runnable {

	private Bread bread;
	
	public ConsumerThread(Bread bread) {
		this.bread = bread;
	}
	@Override
	public void run() {
		for (int i = 0; i &lt; 100; i++) {
			bread.consumer(i);//消费面包
		}
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的通信;

/**
 * 
* &lt;p&gt;Title: ProduceThread&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
* 生产线程
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月18日
 */
public class ProduceThread implements Runnable{

	private Bread bread;
	
	public ProduceThread(Bread bread) {
		this.bread = bread;
	}
	@Override
	public void run() {
		for (int i = 0; i &lt; 100; i++) {
			bread.produce(i);//生产面包
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 线程的通信;

public class Test {

	public static void main(String[] args) {
		Bread bread = new Bread();
		
		ProduceThread p1 = new ProduceThread(bread);
		new Thread(p1,&quot;生产线程1 &quot;).start();
		
		ProduceThread p2 = new ProduceThread(bread);
		new Thread(p2,&quot;生产线程2 &quot;).start();
		
		ConsumerThread c1 = new ConsumerThread(bread);
		new Thread(c1,&quot;消费线程1 &quot;).start();
		
		ConsumerThread c2 = new ConsumerThread(bread);
		new Thread(c2,&quot;消费线程2 &quot;).start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',9),p={class:"hint-container info"},g=e("p",{class:"hint-container-title"},"相关信息",-1),_=e("em",null,"Java-模拟面包房生产一个面包消费一个面包",-1),f={href:"https://github.com/javaobjects/demo521",target:"_blank",rel:"noopener noreferrer"};function x(T,q){const i=v("ExternalLinkIcon");return s(),a("div",null,[l(" more "),e("h1",m,[b,n(),e("a",o,[n("152-Java-模拟面包房生产一个面包消费一个面包.md"),t(i)])]),h,e("div",p,[g,e("p",null,[e("strong",null,[n("以上就是我关于 "),_,n(" 知识点的整理与总结的全部内容,"),e("a",f,[n("另附源码"),t(i)])])])])])}const w=d(u,[["render",x],["__file","java152.html.vue"]]);export{w as default};

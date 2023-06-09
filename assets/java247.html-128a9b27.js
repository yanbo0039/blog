import{_ as t,X as s,Y as d,a1 as l,Z as n,$ as i,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_247_1.png",u={},m={id:"_247-java多线程编程-常用方法-wait-notify-方法-md",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_247-java多线程编程-常用方法-wait-notify-方法-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--nfv31n.md",target:"_blank",rel:"noopener noreferrer"},p=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.生产消费;

//消费者
public class Customer extends Thread {

	private Store store;
	
	public Customer(Store store)
	{
		this.store = store;
	}
	
	@Override
	public void run() {
		while(true)
		{
			synchronized (store) {//如果当前线程不是此对象监视器的所有者，则抛出IllegalMonitorStateException
				
				//当仓库的当前容量 == 0是，停止消费，等待生产者进行生产
				while(store.count &lt;= 0)//为了避免虚假唤醒，不要使用if判断，使用while循环判断
				{
					try {
						store.wait();//导致当前的线程等待，直到其他线程调用此store对象的 notify()方法或 notifyAll() 方法
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
				
				//出库
				store.out();
				//唤醒生产者进行生产
				store.notify();
				
				//休眠一秒
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.生产消费;

//生产者
public class Producer extends Thread {

	private Store store;
	
	public Producer(Store store)
	{
		this.store = store;
	}
	
	@Override
	public void run() {
		while(true)
		{
			synchronized (store) {//如果当前线程不是此对象监视器的所有者，则抛出IllegalMonitorStateException
				
				//当当前容量 == 最大容量，停止生产，等待消费者消费
				while(store.count &gt;= store.MAX_COUNT)//为了避免虚假唤醒，不要使用if判断，使用while循环判断
				{
					try {
						store.wait();//导致当前的线程等待，直到其他线程调用此store对象的 notify()方法或 notifyAll() 方法
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
				
				//入库
				store.in();
				//唤醒消费者进行消费
				store.notify();
				
				//休眠一秒
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.生产消费;

//仓库
public class Store {

	//最大容量
	final int MAX_COUNT = 5;
	
	//当前容量
	int count;
	
	//入库
	public void in()
	{
		System.out.println(&quot;入库前库存：&quot; + count);
		count++;
		System.out.println(&quot;入库后库存：&quot; + count);
	}
	
	//出库
	public void out()
	{
		System.out.println(&quot;出库前库存：&quot; + count);
		count--;
		System.out.println(&quot;出库后库存：&quot; + count);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.生产消费;

public class Test {

	public static void main(String[] args) {
		//创建一个仓库
		Store store = new Store();
		
		//生产者
		Producer producer = new Producer(store);
		producer.start();
		
		//消费者
		Customer customer = new Customer(store);
		customer.start();
		
		Customer customer2 = new Customer(store);
		customer2.start();
		
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java多线程编程-常用方法-wait() notify()方法</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function h(g,f){const e=v("ExternalLinkIcon");return s(),d("div",null,[l(" more "),n("h1",m,[o,i(" 247-Java多线程编程-常用方法-wait() notify()"),n("a",b,[i("方法.md"),a(e)])]),p])}const x=t(u,[["render",h],["__file","java247.html.vue"]]);export{x as default};

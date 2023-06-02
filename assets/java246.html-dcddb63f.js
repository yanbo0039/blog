import{_ as t,X as a,Y as s,a1 as d,Z as e,$ as n,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_246_1.png",u={},m={id:"_246-java多线程编程-常用方法-终止线程-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_246-java多线程编程-常用方法-终止线程-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--246-Java---4x7rj50cs5ww9r74eeo4btmrah481vja0rs2e.md",target:"_blank",rel:"noopener noreferrer"},h=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.终止线程;

/**
 *  1. 自动终止 — 一个线程完成执行后，不能再次运行 
	2. 手动终止
		  ① stop( ) —— 已过时，基本不用
		  ② interrupt( ) —— 粗暴的终止方式
		  ③ 可通过使用一个标志指示 run 方法退出，从而终止线程
 */
public class StopThreadDemo {

	public static void main(String[] args) {
		Thread5 t1 = new Thread5();
		t1.start();
		
		for (int i = 1; i &lt; 10; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;:&quot; + i);
			
			//创造条件终止线程
			if(i%5 ==0)
			{
				t1.setFlag(false);//------------------终止线程
				System.out.println(Thread.currentThread().getName() + &quot;: hello,bye bye!!!&quot;);
			}
			
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	
}

class Thread5 extends Thread
{
	private boolean flag = true;
	
	@Override
	public void run() {
		while(flag)
		{
			System.out.println(&quot;say hello!!!!!&quot;);
			
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	
	public void setFlag(boolean flag)
	{
		this.flag = flag;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java多线程编程-常用方法-终止线程</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function p(_,g){const i=v("ExternalLinkIcon");return a(),s("div",null,[d(" more "),e("h1",m,[o,n(),e("a",b,[n("246-Java多线程编程-常用方法-终止线程.md"),l(i)])]),h])}const x=t(u,[["render",p],["__file","java246.html.vue"]]);export{x as default};

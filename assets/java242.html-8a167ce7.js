import{_ as n,X as i,Y as e,a1 as t,a0 as d}from"./framework-68dd73a2.js";const a={},s=d(`<h1 id="_242-java多线程编程-线程同步-死锁-md" tabindex="-1"><a class="header-anchor" href="#_242-java多线程编程-线程同步-死锁-md" aria-hidden="true">#</a> 242-Java多线程编程-线程同步_死锁.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.死锁;

public class DeadLockDemo {

	public static void main(String[] args) {
		Thread_1 t1 = new Thread_1();
		t1.start();
		
		Thread_2 t2 = new Thread_2();
		t2.start();
	}
	
}
class Thread_1 extends Thread
{
	@Override
	public void run() {
		
		while(true)
		{
			synchronized (&quot;a&quot;) {
				
				System.out.println(&quot;Thread_1拿到了a锁&quot;);
				
				synchronized (&quot;b&quot;) {
					
					System.out.println(&quot;Thread_1拿到了b锁&quot;);
				}
			}
		}
	}
}

class Thread_2 extends Thread
{
	@Override
	public void run() {
		
		while(true)
		{
			synchronized (&quot;b&quot;) {
				
				System.out.println(&quot;Thread_2拿到了b锁&quot;);
				
				synchronized (&quot;a&quot;) {
					
					System.out.println(&quot;Thread_2拿到了a锁&quot;);
				}
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java多线程编程-线程同步_死锁</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function l(r,v){return i(),e("div",null,[t(" more "),s])}const u=n(a,[["render",l],["__file","java242.html.vue"]]);export{u as default};

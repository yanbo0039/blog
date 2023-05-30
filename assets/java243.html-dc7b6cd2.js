import{_ as i,X as e,Y as n,a1 as t,a0 as a}from"./framework-68dd73a2.js";const d={},r=a(`<h1 id="_243-java多线程编程-常用方法-线程优先级priority-md" tabindex="-1"><a class="header-anchor" href="#_243-java多线程编程-常用方法-线程优先级priority-md" aria-hidden="true">#</a> 243-Java多线程编程-常用方法_线程优先级priority.md</h1><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_243_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.常用方法;

/**
 * 
 * 线程的优先级：默认所有线程优先级为5，取值1~10之间，数字越大，优先级越高，能够获得的CPU的时间越多，
 *                                 反之，数字越小，优先级越低，能够获得的CPU的时间越少
 * 
 * Thread类的三个常量，表示常用的线程优先级：
		Thread.MIN_PRIORITY       //1
		Thread.NORM_PRIORITY      //5
		Thread.MAX_PRIORITY       //10

 */
public class PriorityDemo {

	public static void main(String[] args) {
		//线程一
		Thread2 t1 = new Thread2();
		t1.setName(&quot;线程1&quot;);
		t1.start();
		
		//线程二
		Thread2 t2 = new Thread2();
		t2.setName(&quot;线程2&quot;);
		t2.start();
		
		//getPriority() 获取线程的优先级
		System.out.println(&quot;t1默认优先级:&quot; + t1.getPriority());//5
		System.out.println(&quot;t2默认优先级:&quot; + t2.getPriority());//5
		
		//setPriority() 设置线程的优先级
		t1.setPriority(Thread.MIN_PRIORITY);//1
		t2.setPriority(Thread.MAX_PRIORITY);//10
		
		System.out.println(&quot;t1修改后的优先级:&quot; + t1.getPriority());//1
		System.out.println(&quot;t2修改后的优先级:&quot; + t2.getPriority());//10
	}
}

class Thread2 extends Thread{

	@Override
	public void run() {
		for (int i = 1; i &lt;= 20; i++) {
			System.out.println(Thread.currentThread().getName() + &quot; : &quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java多线程编程-常用方法_线程优先级priority</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,14);function s(l,v){return e(),n("div",null,[t(" more "),r])}const u=i(d,[["render",s],["__file","java243.html.vue"]]);export{u as default};

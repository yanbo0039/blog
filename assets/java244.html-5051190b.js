import{_ as a}from"./Java_244_1-fa57c1b3.js";import{_ as t,X as s,Y as d,a1 as r,Z as e,$ as n,a2 as l,a0 as c,F as v}from"./framework-68dd73a2.js";const m={},o={id:"_244-java多线程编程-常用方法-sleep方法-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_244-java多线程编程-常用方法-sleep方法-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--244-Java--sleep-fj01al05d714aga7057aha6897b9qxa2121ax5b.md",target:"_blank",rel:"noopener noreferrer"},b=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04.常用方法;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * sleep:让当前线程休眠指定毫秒值
 */
public class SleepDemo {

	public static void main(String[] args) {
		Thread3 t1 = new Thread3();
		t1.start();
	}
}

class Thread3  extends Thread
{
	@Override
	public void run() {
		while(true)
		{
			System.out.println(new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;).format(new Date()));
			
			//休眠一秒,毫秒为单位
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java多线程编程-常用方法-sleep方法</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function p(_,f){const i=v("ExternalLinkIcon");return s(),d("div",null,[r(" more "),e("h1",o,[u,n(),e("a",h,[n("244-Java多线程编程-常用方法-sleep方法.md"),l(i)])]),b])}const j=t(m,[["render",p],["__file","java244.html.vue"]]);export{j as default};

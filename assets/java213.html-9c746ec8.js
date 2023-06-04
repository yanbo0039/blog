import{_ as e,X as i,Y as n,a1 as a,a0 as t}from"./framework-68dd73a2.js";const d="/blog/assets/Java_213_1.png",s={},l=t('<h1 id="_213-java异常处理方式-异常堆栈信息跟踪-md" tabindex="-1"><a class="header-anchor" href="#_213-java异常处理方式-异常堆栈信息跟踪-md" aria-hidden="true">#</a> 213-Java异常处理方式-异常堆栈信息跟踪 .md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter08;

/**
	Exception in thread &quot;main&quot; java.lang.ArithmeticException: / by zero
		at com.tencent.chapter08._04方法调用堆栈.methodThree(_04方法调用堆栈.java:20)
		at com.tencent.chapter08._04方法调用堆栈.methodTwo(_04方法调用堆栈.java:14)
		at com.tencent.chapter08._04方法调用堆栈.methodOne(_04方法调用堆栈.java:8)
		at com.tencent.chapter08._04方法调用堆栈.main(_04方法调用堆栈.java:24)
 */
public class _04方法调用堆栈 {

	public static void methodOne()
	{
		System.out.println(&quot;methodOne...........1&quot;);
		methodTwo();
	}
	
	public static void methodTwo()
	{
		System.out.println(&quot;methodTwo...........2&quot;);
		methodThree();
	}
	
	public static void methodThree()
	{
		System.out.println(&quot;methodThree...........3&quot;);
		int i = 1/0;
	}
	
	public static void main(String[] args) {
		methodOne();
	}
	
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java异常处理方式-异常堆栈信息跟踪</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,10);function c(r,v){return i(),n("div",null,[a(" more "),l])}const o=e(s,[["render",c],["__file","java213.html.vue"]]);export{o as default};

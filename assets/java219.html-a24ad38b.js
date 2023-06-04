import{_ as t,X as r,Y as s,a1 as d,Z as i,$ as n,a2 as l,a0 as a,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_219_1.png",u={},m={id:"_219-java工具类-stringbuilder类-md",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#_219-java工具类-stringbuilder类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--219-Java-StringBuilder-3f30b673p515ioa.md",target:"_blank",rel:"noopener noreferrer"},g=a('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.String类;

public class StringBufferAndStringBuilder {
	/**
	 * StringBuffer和StringBuilder都是长度可变的字符串。
			1. 两者的操作基本相同。
			2. 两者的主要区别在于
				 StringBuffer类是线程安全的；
				 StringBuilder类是线程不安全的。
				 
				 StringBuffer在JDK1.0中就有，而StringBuilder是在JDK5.0后才出现的。
				
				 StringBuilder的一些方法实现要比StringBuffer快些。

	 */
	public static void main(String[] args) {
		
		/**
		 * 	StringBuffer:
		 * 			线程安全，效率慢，调用方法时，需要排队，适用于多线程
		 */
		long begin = System.currentTimeMillis();//获取当前系统时间的毫秒值
		
		StringBuffer stringBuffer = new StringBuffer();
		for (int i = 0; i &lt; 20000000; i++) {
			stringBuffer.append(i);
		}
		
		long end = System.currentTimeMillis();//获取当前系统时间的毫秒值
		
		System.out.println(&quot;StringBuffer操作结束，所花时间（毫秒值）:&quot; + (end - begin));//1600
		
		/**
		 * 	StringBuilder:
		 * 			线程不安全，效率高，调用方法时，不需要排队，适用于单线程
		 */
		/*long begin = System.currentTimeMillis();//获取当前系统时间的毫秒值
		
		StringBuilder stringBuilder = new StringBuilder();
		for (int i = 0; i &lt; 20000000; i++) {
			stringBuilder.append(i);
		}
		
		long end = System.currentTimeMillis();//获取当前系统时间的毫秒值
		
		System.out.println(&quot;StringBuilder操作结束，所花时间（毫秒值）:&quot; + (end - begin));*///1100
		
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java工具类-StringBuilder类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function f(h,p){const e=v("ExternalLinkIcon");return r(),s("div",null,[d(" more "),i("h1",m,[o,n(),i("a",b,[n("219-Java工具类-StringBuilder类.md"),l(e)])]),g])}const _=t(u,[["render",f],["__file","java219.html.vue"]]);export{_ as default};

import{_ as t,X as r,Y as d,a1 as s,Z as i,$ as n,a2 as a,a0 as l,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_219-java工具类-stringbuilder类-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_219-java工具类-stringbuilder类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--219-Java-StringBuilder-3f30b673p515ioa.md",target:"_blank",rel:"noopener noreferrer"},o=l(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_219_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.String类;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java工具类-StringBuilder类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function g(h,f){const e=v("ExternalLinkIcon");return r(),d("div",null,[s(" more "),i("h1",u,[m,n(),i("a",b,[n("219-Java工具类-StringBuilder类.md"),a(e)])]),o])}const S=t(c,[["render",g],["__file","java219.html.vue"]]);export{S as default};

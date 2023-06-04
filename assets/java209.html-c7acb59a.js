import{_ as a,X as t,Y as s,a1 as d,Z as n,$ as i,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_209_1.png",u={},m={id:"_209-java异常的分类-md",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_209-java异常的分类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--209-Java-2l7m702hq2bmx4jhhq.md",target:"_blank",rel:"noopener noreferrer"},h=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter08;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

/**
 * &lt;p&gt;Title: _01异常分类&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
Throwable:异常最大的父类

Error:严重级别错误，一般不使用代码解决，例如堆栈溢出、内存溢出、虚拟机错误。

Exception:
	运行时异常（非检查性异常）：一般由于程序员经验不足导致，属于bug，可以通过优化代码处理，一般不需要使用异常处理机制来解决
	例如算数异常、数组下标越界、空指针异常等
	
	非运行时异常（检查性异常）：通常由于外界原因导致，编译器会进行检查，且提示，必须进行处理
	例如：文件找不到、数据库连接中断等
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月6日
 */
public class _01异常分类 {
	
	//非运行时异常（检查性异常）
	public static void check()
	{
		try {
			FileInputStream input = new FileInputStream(new File(&quot;说明.txt&quot;));
			
		} catch (FileNotFoundException e) {
			
			System.out.println(&quot;亲爱的，你的&lt;说明.txt&gt;找不到了哦，请查验文件是否异常！&quot;);
		}
	}
	
	//运行时异常（非检查性异常）
	public static void uncheck()
	{
		int[] array = new int[]{1,2,3,4,5};
		
		for (int i = 0; i &lt;= array.length; i++) {
			System.out.println(array[i]); // java.lang.ArrayIndexOutOfBoundsException: 5
		}
	}

	public static void main(String[] args) {
		//非运行时异常（检查性异常）
		check();
		
		//运行时异常（非检查性异常）
		uncheck();
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java异常的分类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function p(_,g){const e=v("ExternalLinkIcon");return t(),s("div",null,[d(" more "),n("h1",m,[o,i(),n("a",b,[i("209-Java异常的分类.md"),l(e)])]),h])}const f=a(u,[["render",p],["__file","java209.html.vue"]]);export{f as default};

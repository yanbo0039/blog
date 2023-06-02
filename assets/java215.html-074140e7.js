import{_ as t,X as s,Y as a,a1 as r,Z as n,$ as e,a2 as l,a0 as d,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_215_1.png",u="/blog/assets/Java_215_2.png",m={},o={id:"_215-java工具类-包装类型-md",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_215-java工具类-包装类型-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--215-Java--ih3o10lb3q37tb21hca9441c.md",target:"_blank",rel:"noopener noreferrer"},h=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.包装类;

public class WraperDemo {

	/**
		八大基本数据类型：byte  short int      long  float double char      boolean
		
		                   包装类： Byte  Short Integer  Long  Float Double Character Boolean
	 */
	public static void main(String[] args) {
		//1.基本数据类型  -&gt; 包装类
		int num = 10;
		Integer integer = new Integer(num);//通过构造器转换
		
		double dou = 123.456;
		Double doubles = new Double(dou);//通过构造器转换
		
		//2.字符串  -&gt; 包装类
		String str = &quot;110&quot;;
		Integer integer2 = new Integer(str);//通过构造器转换
		
		Integer integer3 = Integer.valueOf(str);//通过XXX.valueOf()转换
		
		/**
		 * 注意：字符串不能通过以上两种方式转换为Character
		 */
		//isDigit() 判断指定字符是否为数字
		System.out.println(Character.isDigit(&#39;a&#39;));//false
		System.out.println(Character.isDigit(&#39;1&#39;));//true
		
		//isLetter() 判断指定字符是否为字母
		System.out.println(Character.isLetter(&#39;a&#39;));//true
		System.out.println(Character.isLetter(&#39;1&#39;));//false
		
		//3.包装类 -&gt; 基本数据类型
		Integer integer4 = new Integer(100);
		int num2 = integer4.intValue();   //通过包装类.intValue()转换
		
		//4.包装类 -&gt; 字符串
		Integer integer5 = new Integer(666);
		String str2 = integer5.toString();//通过包装类.toString()转换
		
		//5.字符串 -&gt; 基本数据类型
		String str3 = &quot;888&quot;;
		int num3 = Integer.parseInt(str3);//通过包装类.parseInt()转换
		
		//6.基本数据类型 -&gt; 字符串
		int num4 = 999;
		
		String str4 = num4 + &quot;&quot;;           //简易转换
		String str5 = String.valueOf(num4);//通过String.valueOf()转换
		
		/**
		 * 自动装箱 与  自动拆箱
		 */
		//自动装箱 : 基本数据类型  -&gt; 包装类
		int num5 = 112;
		Integer integer6 = num5;
		
		//自动拆箱: 包装类 -&gt; 基本数据类型
		Integer integer7 = new Integer(119);
		int num6 = integer7;
		
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java工具类-包装类型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,10);function p(_,f){const i=v("ExternalLinkIcon");return s(),a("div",null,[r(" more "),n("h1",o,[b,e(),n("a",g,[e("215-Java工具类-包装类型.md"),l(i)])]),h])}const S=t(m,[["render",p],["__file","java215.html.vue"]]);export{S as default};

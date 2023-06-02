import{_ as t,X as a,Y as s,a1 as l,Z as n,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_186_1.png",o="/blog/assets/Java_186_2.png",u="/blog/assets/Java_186_3.png",m="/blog/assets/Java_186_4.png",b={},g={id:"_186-java数据类型转换-md",tabindex:"-1"},p=n("a",{class:"header-anchor",href:"#_186-java数据类型转换-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--186-Java-fz7ng16gzda01ydq1gwoxc.md",target:"_blank",rel:"noopener noreferrer"},_=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;
/**
 * &lt;p&gt;Title: DataTypeConverson_04&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class DataTypeConverson_04 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		/**
		 * 自动类型转换（隐式转换）： 小 -&gt; 大,类型兼容
		 * 
		 * 	 特殊：long -&gt; float
		 *  注意：byte、short、char之间不会相互转换，他们三者在计算时首先会转换为int类型 
		 */
		//int -&gt; double
		int num = 10;
		double dnum = num;
		
		System.out.println(&quot;num:&quot; + num);//10
		System.out.println(&quot;dnum:&quot; + dnum);//10.0
		
		//long -&gt; float
		long l = 1234567890123456789L;
		float f = l;
		
		System.out.println(&quot;l:&quot; + l);//1234567890123456789
		System.out.println(&quot;f:&quot; + f);//1.23456794E18
		
		//byte、short、char之间不会相互转换，他们三者在计算时首先会转换为int类型 
		byte b1 = 125;
		byte b2 = 120;
		int sum = b1 + b2;
		
		/**
		 * 强制类型转换（显示转换）： 大 -&gt; 小，可能类型不兼容
		 * 
		 * 		风险：① 精度下降  ② 数字溢出
		 */
		byte b3 = 125;
		byte b4 = 120;
		byte sum2 = (byte) (b1 + b2);
		
		System.out.println(sum2);//-11
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java数据类型转换</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function f(y,x){const e=v("ExternalLinkIcon");return a(),s("div",null,[l(" more "),n("h1",g,[p,i(),n("a",h,[i("186-Java数据类型转换.md"),d(e)])]),_])}const q=t(b,[["render",f],["__file","java186.html.vue"]]);export{q as default};

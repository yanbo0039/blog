import{_ as a,X as s,Y as l,a1 as r,Z as e,$ as n,a2 as t,a0 as d,F as c}from"./framework-68dd73a2.js";const o="/blog/assets/Java_81_1.png",v="/blog/assets/Java_81_2.png",u={},m={id:"_81-java变量的声明及赋值及内存原理-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_81-java变量的声明及赋值及内存原理-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--81-Java-2k7kq9gzuhpnab3p534eeqimv8bdwzc4mjr72ip4sa.md",target:"_blank",rel:"noopener noreferrer"},b=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>变量的概念</p><ul><li><p>变量是指在程序的运行过程中随时可以发生变化的量</p></li><li><p>变量是程序中数据的临时存放场所</p><ul><li><p>保存程序运行时用户输入的数据</p></li><li><p>特定的运算结果等</p></li></ul></li></ul></li><li><p>变量的声明</p></li></ul><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新建类 <strong>Test变量</strong>.java</p><p>备注：此命名不规范，仅为方便找笔记</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test变量 {

	public static void main(String[] args) {
		/**
		 * 1. 变量的意义：临时的数据存放空间
		 */
		
		int age = 23;
		
		if(age &gt; 20) {
			System.out.println(&quot;大学生&quot;);
		}else if(age &lt; 18) {
			System.out.println(&quot;高中生&quot;);
		}else {
			System.out.println(&quot;初中生&quot;);
		}
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',10),g={class:"hint-container tip"},h=e("p",{class:"hint-container-title"},"提示",-1),f=e("em",null,"Java变量的声明及赋值及内存原理",-1),x={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function k(j,q){const i=c("ExternalLinkIcon");return s(),l("div",null,[r(" more "),e("h1",m,[p,n(),e("a",_,[n("81-Java变量的声明及赋值及内存原理.md"),t(i)])]),b,e("div",g,[h,e("p",null,[e("strong",null,[n("以上就是我关于 "),f,n(" 知识点的整理与总结的全部内容，"),e("a",x,[n("另附源码"),t(i)])])])])])}const J=a(u,[["render",k],["__file","java81.html.vue"]]);export{J as default};

import{_ as a,X as l,Y as s,a1 as d,Z as e,$ as n,a2 as i,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},u={id:"_81-java变量的声明及赋值及内存原理-md",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_81-java变量的声明及赋值及内存原理-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--81-Java-2k7kq9gzuhpnab3p534eeqimv8bdwzc4mjr72ip4sa.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<ul><li><p>变量的概念</p><ul><li><p>变量是指在程序的运行过程中随时可以发生变化的量</p></li><li><p>变量是程序中数据的临时存放场所</p><ul><li><p>保存程序运行时用户输入的数据</p></li><li><p>特定的运算结果等</p></li></ul></li></ul></li><li><p>变量的声明</p></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_81_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>新建类 <strong>Test变量</strong>.java</p><p>备注：此命名不规范，仅为方便找笔记</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_81_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6),_=e("em",null,"Java变量的声明及赋值及内存原理",-1),b={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},h=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),f=e("hr",null,null,-1),x=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(j,q){const t=o("ExternalLinkIcon");return l(),s("div",null,[d(" more "),e("h1",u,[v,n(),e("a",m,[n("81-Java变量的声明及赋值及内存原理.md"),i(t)])]),p,e("p",null,[e("strong",null,[n("以上就是我关于 "),_,n(" 知识点的整理与总结的全部内容，"),e("a",b,[n("另附源码"),i(t)])])]),h,g,f,x])}const J=a(c,[["render",k],["__file","java81.html.vue"]]);export{J as default};

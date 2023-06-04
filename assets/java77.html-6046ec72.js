import{_ as s,X as a,Y as l,a1 as d,Z as n,$ as i,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_77_1.png",o={},u={id:"_77-java块-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_77-java块-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--77-Java-ug9l.md",target:"_blank",rel:"noopener noreferrer"},p=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="java程序结构" tabindex="-1"><a class="header-anchor" href="#java程序结构" aria-hidden="true">#</a> Java程序结构</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>数据类型确定要存储在内存中的数据的类型。</p><p>变量是存储数据的基本单元 。</p><p>运算符是一个符号，用于操作一个或多个参数以得出结果。</p><p>程序是按顺序执行的，控制流语句允许改变此顺序。</p><p>如下代码,每一个{}内都是一个代码块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class HelloWorld {
	
	{
		for (int i = 0; i &lt; 10; i++) {
			if( i % 2 == 0) {
				System.out.println(&quot;我是偶数: &quot; + i);
			}
		}
	}
	
	static {
		if(true) {
			System.out.println(&quot;true&quot;);
		}
	}

	//main alt ---&gt; / 自动生成
	public static void main(String[] args) {
		

		System.out.println();//syso ---&gt; alt + /
		
		int a = 100;
		
		int b = 200;
		
		a = a + b;
		
		b = a + 300;
		
		System.out.println(&quot;a: &quot; + a);
		System.out.println(&quot;b: &quot; + b);
	}
	
	//内部类
	private class InnerClass {
		int id;
		String speed;
	}

} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,12),h={class:"hint-container info"},_=n("p",{class:"hint-container-title"},"相关信息",-1),g=n("em",null,"Java块",-1),f={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function x(j,q){const e=v("ExternalLinkIcon");return a(),l("div",null,[d(" more "),n("h1",u,[m,i(),n("a",b,[i("77-Java块.md"),t(e)])]),p,n("div",h,[_,n("p",null,[n("strong",null,[i("以上就是我关于 "),g,i(" 知识点的整理与总结的全部内容，"),n("a",f,[i("另附源码"),t(e)])])])])])}const k=s(o,[["render",x],["__file","java77.html.vue"]]);export{k as default};

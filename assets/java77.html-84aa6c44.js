import{_ as s,X as a,Y as l,a1 as d,Z as n,$ as e,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},o={id:"_77-java块-md",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_77-java块-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--77-Java-ug9l.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="java程序结构" tabindex="-1"><a class="header-anchor" href="#java程序结构" aria-hidden="true">#</a> Java程序结构</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_77_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>数据类型确定要存储在内存中的数据的类型。</p><p>变量是存储数据的基本单元 。</p><p>运算符是一个符号，用于操作一个或多个参数以得出结果。</p><p>程序是按顺序执行的，控制流语句允许改变此顺序。</p><p>如下代码,每一个{}内都是一个代码块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),_=n("em",null,"Java块",-1),h={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},p=n("hr",null,null,-1),g=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),f=n("hr",null,null,-1),x=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function j(k,q){const i=v("ExternalLinkIcon");return a(),l("div",null,[d(" more "),n("h1",o,[u,e(),n("a",m,[e("77-Java块.md"),t(i)])]),b,n("p",null,[n("strong",null,[e("以上就是我关于 "),_,e(" 知识点的整理与总结的全部内容，"),n("a",h,[e("另附源码"),t(i)])])]),p,g,f,x])}const y=s(c,[["render",j],["__file","java77.html.vue"]]);export{y as default};

import{_ as n,X as l,Y as a,a1 as s,Z as i,$ as e,a2 as d,a0 as c,F as o}from"./framework-68dd73a2.js";const r={},u=c(`<h1 id="_21-eclipse如何使用debug功能-md" tabindex="-1"><a class="header-anchor" href="#_21-eclipse如何使用debug功能-md" aria-hidden="true">#</a> 21-Eclipse如何使用debug功能？.md</h1><ol><li><p>新建一个Java Project</p></li><li><p>新建一个class</p></li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_21_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>写出需要调试的demo代码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class HelloWorld {

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

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在需要调式的行处双击</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_21_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>右键 ---&gt; Debug As ---&gt; 1 Java Application</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_21_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_21_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>一步一步的最终运行完成</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_21_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>运行完成之后双击之前断点的行数取消断点，并且恢复为非debug模式</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_21_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_21_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,15),g=i("em",null,"Eclipse如何使用debug功能?",-1),p={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},m=i("hr",null,null,-1),v=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),b=i("hr",null,null,-1),_=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function h(f,x){const t=o("ExternalLinkIcon");return l(),a("div",null,[s(" more "),u,i("p",null,[i("strong",null,[e("以上就是我关于 "),g,e(" 知识点的整理与总结的全部内容，"),i("a",p,[e("另附源码"),d(t)])])]),m,v,b,_])}const E=n(r,[["render",h],["__file","eclipse21.html.vue"]]);export{E as default};

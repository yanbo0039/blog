import{_ as t,X as s,Y as a,a1 as l,Z as i,$ as e,a2 as c,a0 as o,F as r}from"./framework-68dd73a2.js";const d="/blog/assets/Eclipse_21_1.png",g="/blog/assets/Eclipse_21_2.png",u="/blog/assets/Eclipse_21_3.png",p="/blog/assets/Eclipse_21_4.png",m="/blog/assets/Eclipse_21_5.png",v="/blog/assets/Eclipse_21_6.png",b="/blog/assets/Eclipse_21_7.png",_={},f=o('<h1 id="_21-eclipse如何使用debug功能-md" tabindex="-1"><a class="header-anchor" href="#_21-eclipse如何使用debug功能-md" aria-hidden="true">#</a> 21-Eclipse如何使用debug功能？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建一个Java Project</p></li><li><p>新建一个class</p></li></ol><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>写出需要调试的demo代码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在需要调式的行处双击</li></ol><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>右键 ---&gt; Debug As ---&gt; 1 Java Application</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>一步一步的最终运行完成</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>运行完成之后双击之前断点的行数取消断点，并且恢复为非debug模式</li></ol><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',19),h={class:"hint-container info"},x=i("p",{class:"hint-container-title"},"相关信息",-1),E=i("em",null,"Eclipse如何使用debug功能?",-1),y={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function z(k,N){const n=r("ExternalLinkIcon");return s(),a("div",null,[l(" more "),f,i("div",h,[x,i("p",null,[i("strong",null,[e("以上就是我关于 "),E,e(" 知识点的整理与总结的全部内容，"),i("a",y,[e("另附源码"),c(n)])])])])])}const V=t(_,[["render",z],["__file","eclipse21.html.vue"]]);export{V as default};

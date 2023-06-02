import{_ as a,X as s,Y as r,a1 as l,Z as e,$ as n,a2 as i,a0 as d,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Java_88_1.png",v={},m={id:"_88-java打印乘法口决表-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_88-java打印乘法口决表-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--88-Java-gf4km3wdtegnbe57hht2axx4f.md",target:"_blank",rel:"noopener noreferrer"},h=d(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test乘法口决表 {

	public static void main(String[] args) {

		//输出乘法口决表：
        //实现技术，循环的嵌套
		/**
		 * 思路：
		 * 1、循环输出9行
		 * 2、每行循环输出多列，列数等于行数
		 */
		for (int row = 1; row &lt;= 9; row++) {
			for (int coloum = 1; coloum &lt;= row; coloum++) {
				System.out.print(coloum + &quot;X&quot; + row + &quot;=&quot; + coloum * row + &quot;   &quot;);
			}
			System.out.println();
		}
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图所示，为打印结果</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',7),b={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"提示",-1),g=e("em",null,"Java打印乘法口决表",-1),f={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"};function x(k,w){const t=o("ExternalLinkIcon");return s(),r("div",null,[l(" more "),e("h1",m,[u,n(),e("a",_,[n("88-Java打印乘法口决表.md"),i(t)])]),h,e("div",b,[p,e("p",null,[e("strong",null,[n("以上就是我关于 "),g,n(" 知识点的整理与总结的全部内容，"),e("a",f,[n("另附源码"),i(t)])])])])])}const q=a(v,[["render",x],["__file","java88.html.vue"]]);export{q as default};

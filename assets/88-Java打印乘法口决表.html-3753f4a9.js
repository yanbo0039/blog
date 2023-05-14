import{_ as s,X as a,Y as l,a1 as o,Z as e,$ as n,a2 as i,a0 as r,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Java_88_1.png",u={},v={id:"_88-java打印乘法口决表-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_88-java打印乘法口决表-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--88-Java-gf4km3wdtegnbe57hht2axx4f.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图所示，为打印结果</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',3),h=e("em",null,"Java打印乘法口决表",-1),p={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),f=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function w(q,J){const t=d("ExternalLinkIcon");return a(),l("div",null,[o(" more "),e("h1",v,[m,n(),e("a",_,[n("88-Java打印乘法口决表.md"),i(t)])]),b,e("p",null,[e("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容，"),e("a",p,[n("另附源码"),i(t)])])]),g,f,x,k])}const V=s(u,[["render",w],["__file","88-Java打印乘法口决表.html.vue"]]);export{V as default};

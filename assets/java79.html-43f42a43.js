import{_ as l,X as a,Y as s,a1 as r,Z as e,$ as n,a2 as t,a0 as d,F as o}from"./framework-68dd73a2.js";const c={},u={id:"_79-java字面常量-md",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_79-java字面常量-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--79-Java-w45m47sp38lp2m.md",target:"_blank",rel:"noopener noreferrer"},p=d(`<ul><li><p>常量指程序里持续不变的值，在整个程序运行过程中它是不可改变的</p></li><li><p>常见的字面量类型有：</p><ul><li><p>整型字面常量，如：123，067，0X1D，123L</p></li><li><p>浮点数字面常量，如：123.4，.18，1.8e1，1.2D，1.2F</p></li><li><p>布尔型字面常量，如：true，false</p></li><li><p>字符字面常量，如：’a’，’8’，‘\\n’，‘\\u123f’</p></li><li><p>字符串字面常量，如：“a”，“hello”</p></li><li><p>引用类型字面常量，：null</p></li></ul></li><li><p>沿用之前的demo，新建一个类，类名命名为 <strong>Test字面常量</strong></p></li></ul><p>备注：此处命名不规范，不能用汉字，但是为咯方便笔记，才如此命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test字面常量 {

	public static void main(String[] args) {

		//什么是字面常量？
		
		int a = 100;
		
		String b = &quot;tom&quot;;
		
		double c = 123.456;
		
		float d = 12.4F;
		
		String name = &quot;john&quot;;
		
		char f = &#39;a&#39;;
		
		char g = 100;//需要查询ascii码表看100对应的字符是什么 输出d
		
		char h = &#39;\\u123f&#39;;// 需要查询unicode字符表，看这个编码对应的字符是什么 \\\\u表示 Unicode https://baike.baidu.com/item/Unicode  JAVA Unicode字符列表 
		
		System.out.println(&quot;g:&quot; +g);
		System.out.println(&quot;h:&quot; +h);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>知识拓展：</strong></p>`,4),b={href:"https://baike.baidu.com/item/Unicode",target:"_blank",rel:"noopener noreferrer"},h={href:"https://baike.baidu.com/item/Unicode%E5%AD%97%E7%AC%A6%E5%88%97%E8%A1%A8/12022016",target:"_blank",rel:"noopener noreferrer"},_={href:"http://ascii.911cha.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://baike.baidu.com/item/ASCII/309296",target:"_blank",rel:"noopener noreferrer"},g=e("em",null,"Java字面常量",-1),k={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),A=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),I=e("hr",null,null,-1),S=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function q(j,C){const i=o("ExternalLinkIcon");return a(),s("div",null,[r(" more "),e("h1",u,[v,n(),e("a",m,[n("79-Java字面常量.md"),t(i)])]),p,e("p",null,[e("a",b,[n("百度百科-Unicode"),t(i)])]),e("p",null,[e("a",h,[n("Unicode字符列表"),t(i)])]),e("p",null,[e("a",_,[n("ASCII码对照表"),t(i)])]),e("p",null,[e("a",f,[n("ASCII （ASCII）- 百度百科"),t(i)])]),e("p",null,[e("strong",null,[n("以上就是我关于 "),g,n(" 知识点的整理与总结的全部内容，"),e("a",k,[n("另附源码"),t(i)])])]),x,A,I,S])}const U=l(c,[["render",q],["__file","java79.html.vue"]]);export{U as default};

import{_ as a,X as s,Y as l,a1 as d,Z as n,$ as i,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_204_1.png",u="/blog/assets/Java_204_2.png",m={},o={id:"_204-java面向对象高级特性-多态-final关键字-md",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_204-java面向对象高级特性-多态-final关键字-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--204-Java--final-2x4yh93a7ywjxjk8cjt4a2xaz283abdxc8yxdb34bvom5sx.md",target:"_blank",rel:"noopener noreferrer"},p=r('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.final关键字;
/**
 * &lt;p&gt;Title: FinalKey&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    	final关键字：
		
		1.修饰类:类不可以被继承
		
		2.修饰变量:常量，值不能被修改
			① 必须赋予初始值
			② 可以在声明的同时赋值，也可以在构造器中赋值
			③ 系统不会对final属性默认的赋初始值

		3.修饰方法:方法不能被覆盖
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class FinalKey {
	//2.修饰变量:常量，值不能被修改
	final double PI = 3.1415926;//② 可以在声明的同时赋值，也可以在构造器中赋值
	final String USER_NAME;
	
	//② 可以在声明的同时赋值，也可以在构造器中赋值
	public FinalKey()
	{
		USER_NAME = &quot;scott&quot;;
	}
	
	//3.修饰方法:方法不能被覆盖
	public final double getPi()
	{
		return PI;
	}
}
//1.修饰类:类不可以被继承
/*class SubFinalKey extends FinalKey
{
	//3.修饰方法:方法不能被覆盖
	public double getPi()
	{
		return PI;
	}
}*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-final关键字</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,14);function _(f,g){const e=v("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",o,[b,i(),n("a",h,[i("204-Java面向对象高级特性-多态-final关键字.md"),t(e)])]),p])}const y=a(m,[["render",_],["__file","java204.html.vue"]]);export{y as default};
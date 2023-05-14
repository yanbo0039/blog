import{_ as l,X as d,Y as s,a1 as a,Z as n,$ as e,a2 as t,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},o=v(`<h1 id="_97-java方法的重载-overload-md" tabindex="-1"><a class="header-anchor" href="#_97-java方法的重载-overload-md" aria-hidden="true">#</a> 97-Java方法的重载(overload).md</h1><ul><li><p>方法的重载就是在同一个类中允许同时存在一个以上同名的方法</p></li><li><p>方法重载的规则</p><ul><li><p>方法名称相同</p></li><li><p>方法的参数必须不同</p><ul><li><p>参数个数不同 或</p></li><li><p>参数类型不同</p></li></ul></li><li><p>方法的返回值类型可以相同，也可以不同</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test方法的重载 {
	/*
	 * 方法的重载就是在同一个类中允许同时存在一个以上同名的方法
	 * 这种情况的出现是有条件的：
	 * 
	 * 1.方法名相同
	 * 2.一个不同，方法的参数必须不同：参数个数不同  or 参数类型不同
	 */
	public void add(int a)
	{
		
	}
	
	public void add(double b)
	{
		
	}
	
	public void add(float f)
	{
		
	}
	
	public void add(int a,int f)
	{
		
	}
	
	public int add(int c,int d,int e)
	{
		//Arrays.to
		return 0;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u=n("em",null,"Java方法的重载(overload)",-1),m={href:"https://github.com/javaobjects/demo513_1",target:"_blank",rel:"noopener noreferrer"},b=n("hr",null,null,-1),_=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),p=n("hr",null,null,-1),h=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(x,g){const i=r("ExternalLinkIcon");return d(),s("div",null,[a(" more "),o,n("p",null,[n("strong",null,[e("以上就是我关于 "),u,e(" 知识点的整理与总结的全部内容，"),n("a",m,[e("另附源码"),t(i)])])]),b,_,p,h])}const N=l(c,[["render",f],["__file","97-Java方法的重载(overload).html.vue"]]);export{N as default};

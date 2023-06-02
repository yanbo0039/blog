import{_ as l,X as d,Y as s,a1 as a,Z as n,$ as i,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u=r(`<h1 id="_97-java方法的重载-overload-md" tabindex="-1"><a class="header-anchor" href="#_97-java方法的重载-overload-md" aria-hidden="true">#</a> 97-Java方法的重载(overload).md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>方法的重载就是在同一个类中允许同时存在一个以上同名的方法</p></li><li><p>方法重载的规则</p><ul><li><p>方法名称相同</p></li><li><p>方法的参数必须不同</p><ul><li><p>参数个数不同 或</p></li><li><p>参数类型不同</p></li></ul></li><li><p>方法的返回值类型可以相同，也可以不同</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=n("em",null,"Java方法的重载(overload)",-1),m={href:"https://github.com/javaobjects/demo513_1",target:"_blank",rel:"noopener noreferrer"},b=n("hr",null,null,-1),p=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),_=n("hr",null,null,-1),h=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(x,g){const e=v("ExternalLinkIcon");return d(),s("div",null,[a(" more "),u,n("p",null,[n("strong",null,[i("以上就是我关于 "),o,i(" 知识点的整理与总结的全部内容，"),n("a",m,[i("另附源码"),t(e)])])]),b,p,_,h])}const k=l(c,[["render",f],["__file","java97.html.vue"]]);export{k as default};

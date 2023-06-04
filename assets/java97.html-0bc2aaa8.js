import{_ as l,X as d,Y as a,a1 as s,Z as i,$ as n,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},o=r(`<h1 id="_97-java方法的重载-overload-md" tabindex="-1"><a class="header-anchor" href="#_97-java方法的重载-overload-md" aria-hidden="true">#</a> 97-Java方法的重载(overload).md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>方法的重载就是在同一个类中允许同时存在一个以上同名的方法</p></li><li><p>方法重载的规则</p><ul><li><p>方法名称相同</p></li><li><p>方法的参数必须不同</p><ul><li><p>参数个数不同 或</p></li><li><p>参数类型不同</p></li></ul></li><li><p>方法的返回值类型可以相同，也可以不同</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,7),u={class:"hint-container info"},m=i("p",{class:"hint-container-title"},"相关信息",-1),b=i("em",null,"Java方法的重载(overload)",-1),p={href:"https://github.com/javaobjects/demo513_1",target:"_blank",rel:"noopener noreferrer"};function h(_,f){const e=v("ExternalLinkIcon");return d(),a("div",null,[s(" more "),o,i("div",u,[m,i("p",null,[i("strong",null,[n("以上就是我关于 "),b,n(" 知识点的整理与总结的全部内容，"),i("a",p,[n("另附源码"),t(e)])])])])])}const g=l(c,[["render",h],["__file","java97.html.vue"]]);export{g as default};

import{_ as s,X as l,Y as t,a1 as d,Z as e,$ as n,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},m={id:"_230-java集合类-自定义泛型-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_230-java集合类-自定义泛型-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--230-Java--yt6nt91ck3j4in302dg88b6fsv74f.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02.自定义泛型;

/**
 * E 表示任意类型
 * E extends Number : 表示Number的任意子类类型
 */
public class Emp&lt;E extends Number&gt; {

	//修饰属性（成员变量）
	private E ename;
	
	//修饰构造函数
	public Emp()
	{
		
	}
	public Emp(E ename)
	{
		this.ename = ename;
	}
	
	//修饰普通方法
	public void setEname(E ename)
	{
		this.ename = ename;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02.自定义泛型;

public class EmpTest {

	public static void main(String[] args) {
		//未使用泛型
		/*Emp zhangsan = new Emp();
		zhangsan.setEname(&quot;张三&quot;);
		zhangsan.setEname(007);
		zhangsan.setEname(true);*/
		
		//使用泛型
		/*Emp&lt;String&gt; lisi = new Emp&lt;String&gt; ();
		lisi.setEname(&quot;李四&quot;);
		//lisi.setEname(10);*/
		
		Emp&lt;Integer&gt; wangwu = new Emp&lt;Integer&gt;();
		wangwu.setEname(007);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java集合类-自定义泛型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>`,8),h={href:"https://blog.csdn.net/weixin_39209728/article/details/83586524",target:"_blank",rel:"noopener noreferrer"},_=e("hr",null,null,-1),p=e("p",null,"分割线",-1),g=e("hr",null,null,-1),E=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(x,J){const i=v("ExternalLinkIcon");return l(),t("div",null,[d(" more "),e("h1",m,[u,n(),e("a",o,[n("230-Java集合类-自定义泛型.md"),a(i)])]),b,e("ol",null,[e("li",null,[e("a",h,[n("Eclipse怎样修改包(package)的显示样式、格式"),a(i)])])]),_,p,g,E])}const w=s(c,[["render",f],["__file","230-Java集合类-自定义泛型.html.vue"]]);export{w as default};

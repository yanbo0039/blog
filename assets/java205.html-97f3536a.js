import{_ as a,X as s,Y as t,a1 as d,Z as i,$ as n,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_205_1.png",u="/blog/assets/Java_205_2.png",b="/blog/assets/Java_205_3.png",m={},o={id:"_205-java面向对象高级特性-多态-抽象类-md",tabindex:"-1"},g=i("a",{class:"header-anchor",href:"#_205-java面向对象高级特性-多态-抽象类-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--205-Java---0d6qn79b7yi4uohqaz55akn1e1wwbvvi892eia6703dlwq.md",target:"_blank",rel:"noopener noreferrer"},h=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.抽象类;
/**
抽象类：是抽象方法与非抽象方法的集合
	
		语法：
			&lt;修饰符&gt; abstract class 抽象类名
			{
				抽象方法;
				非抽象方法;
			}
		  
		    两种特殊情况：
		    1.类中全部是抽象方法
		    2.类中全部是非抽象方法（意义不大）

		 注意：
		 	1.抽象类不能被实例化
		 	2.父类的所有抽象方法必须在子类中提供具体实现，否则子类只能被声明为抽象类
		 	3.抽象方法不能为static
		 	
		 注意以下两种情况，一个类必须声明为抽象类：
		 	1.当类中存在一个或多个抽象方法时
		 	2.当子类没有父类的所有抽象方法提供具体实现时，子类必须被声明为抽象类
		 	
------------------------------------------------------------------
           抽象方法：只有方法声明，没有具体实现
                          语法：
          	&lt;修饰符&gt; abstract 返回值类型   抽象方法名([参数列表]);
 */
//抽象类
public abstract class AbstractClass {

	//抽象方法：总父类：可乐公司员工的计算薪资的方法
	public abstract void getSalary(int month);
	
	//非抽象方法
	public void getDetail()
	{
		System.out.println(&quot;个人信息展示&quot;);
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.抽象类;
//子类
public class SubAbstractClass extends AbstractClass {

	@Override
	public void getSalary(int month) {
		System.out.println(&quot;你的工资为:20000000000000&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.抽象类;

public class AbstractClassTest {

	public static void main(String[] args) {
		//抽象类不能被实例化
		//AbstractClass ac = new AbstractClass();
		
		//子类对抽象方法提供具体实现，再使用
		SubAbstractClass sac = new SubAbstractClass();
		sac.getSalary(9);

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-抽象类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,13);function _(f,x){const e=v("ExternalLinkIcon");return s(),t("div",null,[d(" more "),i("h1",o,[g,n(),i("a",p,[n("205-Java面向对象高级特性-多态-抽象类.md"),l(e)])]),h])}const C=a(m,[["render",_],["__file","java205.html.vue"]]);export{C as default};

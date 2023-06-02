import{_ as t,X as s,Y as l,a1 as d,Z as n,$ as i,a2 as v,a0 as r,F as a}from"./framework-68dd73a2.js";const u={},c={id:"_208-java面向对象高级特性-普通-静态-局部-内部类-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_208-java面向对象高级特性-普通-静态-局部-内部类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--208-Java-----fe4t98zp14at6az04bqtag86gwl4cq63bg8jgs3fwxsjteca0365b5gau56g.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><blockquote></blockquote><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><ul><li>普通内部类</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.内部类;

/**
 * &lt;p&gt;Title: Outer&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
内部类：定义在一个类中的类，即嵌套类

注意：
1.内部类可以访问外部类所有的属性与方法，不需要创建对象
2.外部类访问内部类的属性或方法时，必须创建对象
① 在类中访问：
Inner inner = new Inner();
inner.innerMethod();
② 在类以外访问内部类
Outer outer = new Outer();
Inner inner = outer.new Inner();

3.如果内部类与外部类的属性或方法重名，内部类的优先级 &gt; 外部类的优先级
4.不能定义static变量


外部类修饰符：public &lt;default&gt;
内部类修饰符：public protected &lt;default&gt; private 
//外部类
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Outer {

	//外部类属性
		int outerNum = 10;
		int x = 666;
		
		//外部类方法
		public void outerMethod()
		{
			System.out.println(&quot;Outer.outerMethod()...&quot;);
		}
		
		//内部类
		class Inner
		{
			//内部类属性
			int innerNum = 20;
			int x = 888;
			//static int y = 99;//定义静态变量
			
			//内部类方法
			public void innerMethod()
			{
				System.out.println(&quot;outerNum:&quot; + outerNum);
				outerMethod();
				System.out.println(&quot;Inner.x :&quot; + x); //内部类变量
				System.out.println(&quot;Outer.x :&quot; + Outer.this.x); //外部类变量
			}
		}
		
		//在类中访问内部类的属性与方法
		public void showInner()
		{
			Inner inner = new Inner();
			System.out.println(&quot;innerNum:&quot; + inner.innerNum);
			inner.innerMethod();
		}
		
		public static void main(String[] args) {
			//在类中访问内部类
			//Outer outer = new Outer();
			//outer.showInner();
			
			//在类以外访问内部类
			Outer outer = new Outer();
			Inner inner = outer.new Inner();
			inner.innerMethod();
		}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>静态内部类</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.内部类;

/**
 * &lt;p&gt;Title: OuterStatic&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *  
	静态内部类：定义在一个类中的类，即嵌套类，且使用static修饰
	
		注意：
			1. 不能访问外部类非静态成员
			2. 非静态内部类只能定义非静态成员，而静态内部类可以定义静态成员和非静态成员
			3. 实例化
				 ① 在类中访问：
				 	Inner inner = new Inner();
					inner.innerMethod();
			     ② 在类以外访问内部类
					OuterStatic.Inner inner = new OuterStatic.Inner();
					inner.innerMethod();
 *
//外部类
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class OuterStatic {

	//外部类属性
		static int outerNum = 10;
		static int x = 666;
		
		//外部类方法
		public static void outerMethod()
		{
			System.out.println(&quot;Outer.outerMethod()...&quot;);
		}
		
		//内部类
		static class Inner
		{
			//内部类属性
			int innerNum = 20;
			int x = 888;
			static int y = 99;//定义静态变量
			
			//内部类方法
			public void innerMethod()
			{
				System.out.println(&quot;outerNum:&quot; + outerNum);
				outerMethod();
				System.out.println(&quot;Inner.x :&quot; + x); //内部类变量
				System.out.println(&quot;Outer.x :&quot; + OuterStatic.x); //外部类变量
			}
		}
		
		//在类中访问内部类的属性与方法
		public void showInner()
		{
			Inner inner = new Inner();
			System.out.println(&quot;innerNum:&quot; + inner.innerNum);
			inner.innerMethod();
		}
		
		public static void main(String[] args) {
			//在类中访问内部类
			/*OuterStatic outer = new OuterStatic();
			outer.showInner();*/
			
			//在类以外访问内部类
			OuterStatic.Inner inner = new OuterStatic.Inner();
			inner.innerMethod();
		}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>局部内部类</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.内部类;

/**
 * &lt;p&gt;Title: OuterLocal&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 **
局部内部类：定义在一个方法中的类

	注意：
		1.在方法定义的内部类中只能访问方法中的final类型的局部变量
 *
//外部类
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class OuterLocal {

	//外部类属性
		int outerNum = 10;
		int x = 666;
		
		//外部类方法
		public void outerMethod()
		{
			System.out.println(&quot;Outer.outerMethod()...&quot;);
			final String username = &quot;scott&quot;;
			
			//局部内部类
			class Inner
			{
				//内部类属性
				int innerNum = 20;
				int x = 888;
				//static int y = 99;//定义静态变量
				
				//内部类方法
				public void innerMethod()
				{
					System.out.println(&quot;outerNum:&quot; + outerNum);
					//outerMethod();
					System.out.println(&quot;Inner.x :&quot; + x); //内部类变量
					System.out.println(&quot;Outer.x :&quot; + OuterLocal.this.x); //外部类变量
					
					System.out.println(&quot;outerMethod.username : &quot; + username);
				}
			}
			
			//实例化内部化
			Inner inner = new Inner();
			inner.innerMethod();
			
		}
		public static void main(String[] args) {
			//在类中访问内部类
			OuterLocal outer = new OuterLocal();
			outer.outerMethod();
		}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-普通-静态-局部-内部类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,19);function h(p,g){const e=a("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",c,[m,i(),n("a",b,[i("208-Java面向对象高级特性-普通-静态-局部-内部类.md"),v(e)])]),o])}const q=t(u,[["render",h],["__file","java208.html.vue"]]);export{q as default};

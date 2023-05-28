import{_ as l,X as t,Y as s,a1 as d,Z as n,$ as i,a2 as a,a0 as v,F as c}from"./framework-68dd73a2.js";const r={},u={id:"_203-java面向对象高级特性-多态-单例模式-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_203-java面向对象高级特性-多态-单例模式-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--203-Java---4y5px77a0lcww3a79jknmp1dqtau03mm48a1p5c1d9cd5ucwmr.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><ul><li><p>单例模式（singleton）：保证一个类仅有一个实例，并提供一个访问它的全局访问点</p></li><li><p>单例模式要点：</p></li></ul><blockquote><p>某个类只能有一个实例</p></blockquote><blockquote><p>它必须自行创建这个示例</p></blockquote><blockquote><p>必须自行向整个系统提供这个实例</p></blockquote><ul><li>单例模式实现：</li></ul><blockquote><p>拥有一个私有构造器</p></blockquote><blockquote><p>提供一个自身静态私有的成员变量</p></blockquote><blockquote><p>提供一个公有的静态公有的方法</p></blockquote><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.单例模式;

/**
 * &lt;p&gt;Title: Singleton&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    	单例模式：类在内存中仅存在一个实例
	
		好处：
			1.节省内存
			2.共享对象
			
	           单例模式要点：
			1.某个类只能有一个实例
			2.它必须自行创建这个示例
			3.必须自行向整个系统提供这个实例
			
		实现步骤：
			1.构造函数私有化，用private修饰
			2.自行创建实例，使用private static修饰
			3.对外提供一个公有的方法，返回这个实例
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
//饿汉式
public class Singleton {

	//2.自行创建实例，使用private static修饰
	private static Singleton instance = new Singleton();
	
	//1.构造函数私有化，用private修饰
	private Singleton()
	{
		
	}
	
	//3.对外提供一个公有的方法，返回这个实例
	public static Singleton getInstance()
	{
		return instance;
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.单例模式;

/**
 * &lt;p&gt;Title: Singleton2&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    单例模式：类在内存中仅存在一个实例
	
		好处：
			1.节省内存
			2.共享对象
			
	           单例模式要点：
			1.某个类只能有一个实例
			2.它必须自行创建这个示例
			3.必须自行向整个系统提供这个实例
			
		实现步骤：
			1.构造函数私有化，用private修饰
			2.自行创建实例，使用private static修饰
			3.对外提供一个公有的方法，返回这个实例
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
//懒汉式
public class Singleton2 {

	//2.自行创建实例，使用private static修饰
	private static Singleton2 instance = null;
	
	//1.构造函数私有化，用private修饰
	private Singleton2()
	{
		
	}
	
	//3.对外提供一个公有的方法，返回这个实例
	public static Singleton2 getInstance()
	{
		if(instance == null)
		{ 
			instance = new Singleton2();
		}
		
		return instance;
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.单例模式;

public class SingletonTest {

	public static void main(String[] args) {
		/*Singleton s1 = new Singleton();
		System.out.println(s1);//41649a55
		
		Singleton s2 = new Singleton();
		System.out.println(s2);//33d063fd*/

		Singleton s3 = Singleton.getInstance();
		Singleton s4 = Singleton.getInstance();
		System.out.println(s3);//6a2437ef
		System.out.println(s4);//6a2437ef
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-单例模式</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ol><li>Java 23种设计模式</li></ol><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,23);function p(g,h){const e=c("ExternalLinkIcon");return t(),s("div",null,[d(" more "),n("h1",u,[m,i(),n("a",b,[i("203-Java面向对象高级特性-多态-单例模式.md"),a(e)])]),o])}const _=l(r,[["render",p],["__file","index.html.vue"]]);export{_ as default};

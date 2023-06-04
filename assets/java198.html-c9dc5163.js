import{_ as i,X as n,Y as t,a1 as e,a0 as s}from"./framework-68dd73a2.js";const l="/blog/assets/Java_198_1.png",d="/blog/assets/Java_198_2.png",a="/blog/assets/Java_198_3.png",v="/blog/assets/Java_198_4.png",c={},r=s('<h1 id="_16-java面向对象高级特性-static关键字" tabindex="-1"><a class="header-anchor" href="#_16-java面向对象高级特性-static关键字" aria-hidden="true">#</a> 16-Java面向对象高级特性-static关键字</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.static关键字;
/**
 * &lt;p&gt;Title: StaticKey&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *       	static关键字：修饰成员，不可以修饰局部变量
   	
	   	1.修饰属性（静态变量、类变量）：   对象共享，类被加载时，即被保存在内存当中，当类存在时，类变量一直存在
	   		两种方式访问：
				1.直接访问：类名.属性；------------【推荐】
					StaticKey.pi
					
				2.实例化后访问：对象名.属性
					StaticKey s1 = new StaticKey();
					System.out.println(s1.pi);

	   	
	   	2.修饰方法（静态方法、类方法）
	   		两种方式访问：
				1.直接访问：类名.方法名()------------【推荐】
					 StaticKey.getPi();
					 
				2.实例化后访问：对象名.方法名()
					StaticKey s1 = new StaticKey();
					s1.getPi();
					
				注意：
					① 静态方法里只能直接访问静态成员，而不能直接访问类中的非静态成员
					② 静态方法中不能使用this、super关键字
 					③ 静态方法不能被非静态方法覆盖
 					④ 静态方法不能修饰构造器

	   	3.修饰代码块（静态代码块）：静态块经常用来进行类属性的初始化，在类加载时执行，且仅执行一次
			
				类加载 -&gt; 静态代码块执行一次  -&gt; new对象 -&gt; 自由代码块 -&gt; 构造函数
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class StaticKey {
	/**
	 * 1.修饰属性（静态变量、类变量）
	 */
	static double pi = 3.1415926;//静态成员
	String username = &quot;张三&quot;;//非静态成员
	
	/**
	 * 3.修饰代码块（静态代码块）
	 */
	static{
		System.out.println(&quot;静态代码块，类的初始化操作..........&quot;);
	}
	
	//自由代码块
	{
		System.out.println(&quot;自由代码块，对象的初始化操作..........&quot;);
	}
	
	//构造函数
	public StaticKey()
	{
		System.out.println(&quot;构造函数............&quot;);
	}
	
	
	/**
	 * 2.修饰方法（静态方法、类方法）
	 */
	public static double getPi()
	{
		//System.out.println(StaticKey.pi); //静态成员，类级别，类一被加载，即保存在内存中
		//System.out.println(new StaticKey().username);//非静态成员，对象级别，对象被new之后，才保存在内存中
		
		//System.out.println(username);//① 而不能直接访问类中的非静态成员
		
		return pi;//① 静态方法里只能直接访问静态成员
	}
	
	public static void main(String[] args) {
		/**
		 * 1.修饰属性（静态变量、类变量）
		 */
		//1.直接访问：类名.属性；
		System.out.println(StaticKey.pi);
		
		StaticKey.pi = 3.14;
		
		//2.实例化后访问：对象名.属性
		StaticKey s1 = new StaticKey();
		System.out.println(s1.pi);
		
		StaticKey s2 = new StaticKey();
		System.out.println(s2.pi);
		
		/**
		 * 2.修饰方法（静态方法、类方法）
		 */
		//1.直接访问：类名.方法名()
		System.out.println(StaticKey.getPi());
		
		//2.实例化后访问：对象.方法名()
		System.out.println(s1.getPi());
		
		/**
		 * 3.修饰代码块（静态代码块）
		 */
		//不需要测试代码
	}
}
class SubStaticKey extends StaticKey
{
	//③ 静态方法不能被非静态方法覆盖
	/*public double getPi()
	{
		return pi;
	}*/
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-static关键字</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,13);function u(m,b){return n(),t("div",null,[e(" more "),r])}const p=i(c,[["render",u],["__file","java198.html.vue"]]);export{p as default};

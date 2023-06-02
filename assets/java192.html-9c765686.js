import{_ as s,X as t,Y as l,a1 as a,Z as e,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_192-java面向对象高级特性-继承-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_192-java面向对象高级特性-继承-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--192-Java--sw8oy90e4ol5mh6p4djgybm3au98nxn1bc0n.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><blockquote><p>继承（泛化）：</p><p>​ 语法：</p><p>​ &lt;修饰符&gt; class 子类（派生类） extends 父类（超类、基类）</p><p>​ {</p><p>​ }</p><p>​ 特点：</p><p>​ 1.复用父类的所有非private修饰的属性与方法</p><p>​ 2.扩充自有的属性与方法</p><p>​ 注意：</p><p>​ 1.只允许单继承，一个子类只允许有一个直接父类，但是一个父类可以有多个子类</p><p>​ public class Worker extends Employee{}</p><p>​ public class Officer extends Employee{}</p><p>​ 2.可以变相的&quot;多继承&quot;</p><p>​ public class Officer extends Employee{}</p><p>​ public class Worker extends Officer{}</p><p>​ Worker（孙子） -&gt; Officer（爸爸） -&gt; Employee（爷爷）</p><p>​ 此时，Worker可以继承Officer与Employee两个类中所有的非private修饰的属性与方法</p><p>​ 3.Object是所有类的超级父类，而且是java语言中唯一一个没有父类的超级类</p><p>------------------------------------------------------------------------</p><p>​ 子类实例化的过程：父类先实例化，子类再实例化</p><p>------------------------------------------------------------------------</p><p>super():</p><p>​ 条件： 1.基于继承关系</p><p>​</p><p>​ 作用： 调用父类的构造器</p><p>​</p><p>​ 注意:</p><p>​ 1.只能出现在子类的构造器中，且必须是第一行</p><p>​ 2.super()中的参数，决定了调用父类哪个构造器</p><p>​ 3.如果子类构造器中没有出现super，那么编译器会默认加上super()，</p><p>​ 即调用父类的空构造器，如果父类没有空构造器，编译器提示错误。</p><p>​</p><p>this():</p><p>​ 条件：1.基于当前类</p><p>​</p><p>​ 作用：调用类自己的构造器</p><p>​</p><p>super:表示父类的引用</p><p>this:表示类自身的引用</p></blockquote><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.继承;

//员工：总的父类
public class Employee extends Object{
	//属性（成员变量）
		String name;
		
		String birth;
		
		double salary;
		
		//无参构造函数
		public Employee()
		{
			System.out.println(&quot;父类实例化----new Employee()&quot;);
		}
		//带参数构造函数
		public Employee(String name,String birth,double salary)
		{
			this.name = name;
			this.birth = birth;
			this.salary = salary;
		}
		
		//行为（成员方法）
		public void getDetail()
		{
			System.out.println(&quot;name:&quot; + name + &quot;   birth:&quot; + birth + &quot;  salary:&quot; + salary);
		}
		
		public double getSalary()
		{
			return salary;
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.继承;


/**
 * &lt;p&gt;Title: Officer&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    //员工：在办公室办公的员工
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Officer extends Employee{

	//属性（成员变量）
		String department;
		
		//无参构造函数
		public Officer()
		{
			super();//1.只能出现在子类的构造器中，且必须是第一行
			System.out.println(&quot;子类实例化----new Officer()&quot;);
		}
		//带参数构造函数
		public Officer(String name,String birth,double salary,String department)
		{
			super(name, birth, salary);
			/*this.name = name;
			this.birth = birth;
			this.salary = salary;*/
			this.department = department;
		}
		
		//行为（成员方法）
		public void vehicleAllowance()
		{
			System.out.println(&quot;Officer的交通补贴：300&quot;);
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.继承;

public class Test {

	public static void main(String[] args) {
		/**
		 * Worker
		 */
		/*Worker zhuzi = new Worker();
		//访问父类的属性
		zhuzi.name = &quot;大柱子&quot;;
		zhuzi.birth = &quot;2010-01-01&quot;;
		zhuzi.salary = 100;
		//访问父类的方法
		zhuzi.getDetail();
		
		//访问子类自有的方法
		zhuzi.dressAllowance();*/
		
		/**
		 * 子类实例化的过程：先实例化父类，再实例化子类
		 * 
		 * 		父类实例化----new Employee()
				子类实例化----new Officer()
		 */
		Officer lisi = new Officer();
		lisi.getDetail();
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.继承;

//员工：不是在办公室办公的员工
public class Worker extends Employee{

	//属性（成员变量）
	
	//行为（成员方法）
	public void dressAllowance()
	{
		System.out.println(&quot;Worker的服装补贴：300&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-继承</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function o(h,g){const n=v("ExternalLinkIcon");return t(),l("div",null,[a(" more "),e("h1",u,[m,i(),e("a",b,[i("192-Java面向对象高级特性-继承.md"),d(n)])]),p])}const y=s(c,[["render",o],["__file","java192.html.vue"]]);export{y as default};

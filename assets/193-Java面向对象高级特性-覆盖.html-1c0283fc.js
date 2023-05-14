import{_ as i,X as e,Y as n,a1 as t,a0 as a}from"./framework-68dd73a2.js";const l="/blog/assets/Java_193_1.png",s={},d=a('<h1 id="java面向对象高级特性-覆盖" tabindex="-1"><a class="header-anchor" href="#java面向对象高级特性-覆盖" aria-hidden="true">#</a> Java面向对象高级特性-覆盖</h1><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.覆盖;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.覆盖;

/**
 * &lt;p&gt;Title: Officer&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
//员工：在办公室办公的员工
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
			this.department = department;
		}
		
		//行为（成员方法）
		public void vehicleAllowance()
		{
			System.out.println(&quot;Officer的交通补贴：300&quot;);
		}
		
		@Override
		public void getDetail() {
			//super.getDetail();
			System.out.println(&quot;name:&quot; + name + &quot;   birth:&quot; + birth + &quot;  salary:&quot; + salary + &quot;  department:&quot; + department);
		}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.覆盖;


public class Test {
	public static void main(String[] args) {
		Officer lisi = new Officer(&quot;李四&quot;, &quot;1996-10-22&quot;, 10000, &quot;软件开发事业部&quot;);
		lisi.getDetail();//1.当子类officer重写父类的getDetail方法之后，再调用该方法时，执行子类自己重写过的方法
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-覆盖</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ol><li>重写（覆盖）与 重载的区别</li></ol><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,17);function r(v,c){return e(),n("div",null,[t(" more "),d])}const m=i(s,[["render",r],["__file","193-Java面向对象高级特性-覆盖.html.vue"]]);export{m as default};

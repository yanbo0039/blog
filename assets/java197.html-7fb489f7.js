import{_ as s,X as l,Y as d,a1 as t,Z as n,$ as i,a2 as a,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},u={id:"_197-java面向对象高级特性-封装-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_197-java面向对象高级特性-封装-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--197-Java--sw8oy90e1cy30e8p6djgxbe37aw2mxw0cc0n.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.封装;


/**
 * &lt;p&gt;Title: Employee&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
封装：
隐藏属性、方法或实现细节的过程称为封装

特点：
1.构造器与类一般使用public修饰
2.属性一般使用private修饰，对外提供访问器访问属性，get方法取值，set方法赋值

好处：
1.隐藏类的实现细节
2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作
3.可进行数据检查

-----------------------------------------------------------------------------

修饰类：               public &lt;default&gt;
修饰变量、方法：public protected &lt;default&gt; private

public:   同类、同包、不同包子类、不同包
protected:同类、同包、不同包子类
&lt;default&gt;:同类、同包
private:  同类
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Employee {

	/**员工编号*/
	private int empno;
	
	/**员工姓名*/
	private String ename;
	
	/**员工工资*/
	private double salary;
	
	/**访问器（get与set）*/
	public int getEmpno()
	{
		return empno;
	}
	public void setEmpno(int empno)
	{
		this.empno = empno;
	}
	
	public String getEname()
	{
		return ename;
	}
	public void setEname(String ename)
	{
		//3.可进行数据检查
		if(ename == null || &quot;&quot;.equals(ename))
		{
			System.out.println(&quot;雇员姓名不能为空&quot;);
			return;
		}
		
		this.ename = ename;
	}
	
	public double getSalary()
	{
		//1.隐藏类的实现细节
		return calSalary();
	}
	public void setSalary(double salary)
	{
		//2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作
		if(salary &lt; 2600)
		{
			 System.out.println(&quot;薪资不能小于2600&quot;);
			 return;
		}
		
		this.salary = salary;
	}
	
	//1.隐藏类的实现细节
	private double calSalary()
	{
		return salary + 5000 + 300 + 200 + (10000*0.1);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.封装;


public class EmployeeTest {

	public static void main(String[] args) {
		Employee scott = new Employee();
		//scott.empno = 7788;
		//scott.ename = &quot;斯卡特&quot;;
		//scott.salary = -10000;//属性已被private修饰，不允许类以外的人访问
		
		//调用set方法赋值
		scott.setEmpno(7788);
		scott.setEname(null); //雇员姓名不能为空
		scott.setEname(&quot;斯卡特&quot;);
		//scott.setSalary(-10000);//薪资不能小于2600
		scott.setSalary(2600);//薪资不能小于2600
		
		//调用get方法取值
		System.out.println(scott.getSalary());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-封装</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function p(g,h){const e=r("ExternalLinkIcon");return l(),d("div",null,[t(" more "),n("h1",u,[m,i(),n("a",b,[i("197-Java面向对象高级特性-封装.md"),a(e)])]),o])}const y=s(c,[["render",p],["__file","java197.html.vue"]]);export{y as default};

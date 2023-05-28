import{_ as l,X as t,Y as a,a1 as s,Z as n,$ as e,a2 as d,a0 as v,F as r}from"./framework-68dd73a2.js";const m={},u={id:"_202-java面向对象高级特性-多态-练习题-md",tabindex:"-1"},c=n("a",{class:"header-anchor",href:"#_202-java面向对象高级特性-多态-练习题-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--202-Java---592pj06c2np7ojmwpkrar50ws22bnpay26tek7bhufioo.md",target:"_blank",rel:"noopener noreferrer"},b=v(`<h4 id="cola公司的雇员分为以下若干类" tabindex="-1"><a class="header-anchor" href="#cola公司的雇员分为以下若干类" aria-hidden="true">#</a> Cola公司的雇员分为以下若干类</h4><blockquote><p>4、 Cola公司的雇员分为以下若干类：(知识点：多态) [必做题]</p></blockquote><pre><code>	4.1  ColaEmployee ：这是所有员工总的父类，属性：员工的姓名,员工的生日月份。
	方法：getSalary(int month) 根据参数月份来确定工资，如果该月员工过生日，则公司会额外奖励100 元。

	4.2  SalariedEmployee ：	ColaEmployee 的子类，拿固定工资的员工。属性：月薪
	
    4.3  HourlyEmployee ：ColaEmployee 的子类，按小时拿工资的员工，每月工作超出160 
	小时的部分按照1.5 倍工资发放。属性：每小时的工资、每月工作的小时数
	
    4.4  SalesEmployee ：ColaEmployee 的子类，销售人员，工资由月销售额和提成率决定。属性：月销售额、提成率
	
    4.5  定义一个类Company，在该类中写一个方法，调用该方法可以打印出某月某个员工的工资数额，写一个测试类TestCompany,
	
    在main方法，把若干各种类型的员工放在一个ColaEmployee 数组里，并单元出数组中每个员工当月的工资。
</code></pre><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态.练习;

/**
 * &lt;p&gt;Title: ColaEmployee&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    /**
 * 4、 Cola公司的雇员分为以下若干类：(知识点：多态) [必做题]
		4.1  ColaEmployee ：这是所有员工总的父类，属性：员工的姓名,员工的生日月份。
		方法：getSalary(int month) 根据参数月份来确定工资，如果该月员工过生日，则公司会额外奖励100 元。
		4.2  SalariedEmployee ：	ColaEmployee 的子类，拿固定工资的员工。属性：月薪
		4.3  HourlyEmployee ：ColaEmployee 的子类，按小时拿工资的员工，每月工作超出160 
		小时的部分按照1.5 倍工资发放。属性：每小时的工资、每月工作的小时数
		4.4  SalesEmployee ：ColaEmployee 的子类，销售人员，工资由月销售额和提成率决定。属性：月销售额、提成率
		4.5  定义一个类Company，在该类中写一个方法，调用该方法可以打印出某月某个员工的工资数额，写一个测试类TestCompany,
		在main方法，把若干各种类型的员工放在一个ColaEmployee 数组里，并单元出数组中每个员工当月的工资。
 *
//4.1  ColaEmployee ：这是所有员工总的父类，属性：员工的姓名,员工的生日月份。方法：getSalary(int month) 
 * 根据参数月份来确定工资，如果该月员工过生日，则公司会额外奖励100 元。
 *
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class ColaEmployee {

	//属性：员工的姓名,员工的生日月份
		String ename;
		
		int birthMonth;
		
		//构造函数
		public ColaEmployee()
		{
			
		}
		public ColaEmployee(String ename,int birthMonth)
		{
			this.ename = ename;
			this.birthMonth = birthMonth;
		}
		
		
		//方法：getSalary(int month) 根据参数月份来确定工资，如果该月员工过生日，则公司会额外奖励100 元。
		public double getSalary(int month)
		{
			return 0.0;
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态.练习;
/**
 * &lt;p&gt;Title: HourlyEmployee&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    //4.3  HourlyEmployee ：ColaEmployee 的子类，按小时拿工资的员工，每月工作超出160 小时的部分按照1.5 
 *    倍工资发放。属性：每小时的工资、每月工作的小时数
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class HourlyEmployee extends ColaEmployee {

	//属性：每小时的工资、每月工作的小时数
		double hourSalary;
		
		int hours;
		
		//构造函数
		public HourlyEmployee() 
		{
			
		}
		public HourlyEmployee(String ename,int birthMonth,double hourSalary,int hours)
		{
			super(ename, birthMonth);
			this.hourSalary = hourSalary;
			this.hours = hours;
		}
		
		//按小时拿工资的员工，每月工作超出160 小时的部分按照1.5 倍工资发放
		@Override
		public double getSalary(int month) {
			double totalSalary = 0.0;
			
			//每月工作超出160 小时的部分按照1.5 倍工资发放
			if(hours &lt;=160)
			{
				totalSalary = hourSalary * hours;
			}
			else
			{
				totalSalary = hourSalary * 160 + hourSalary * 1.5 * (hours-160);
			}
			
			//如果该月员工过生日，则公司会额外奖励100 元。
			if(birthMonth == month)
			{
				totalSalary += 100;
			}
			
			return totalSalary;
		}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态.练习;

/**
 * &lt;p&gt;Title: SalariedEmployee&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    //4.2  SalariedEmployee ：	ColaEmployee 的子类，拿固定工资的员工。属性：月薪
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class SalariedEmployee extends ColaEmployee {

	//属性：月薪
	double monthSalary;

	//构造函数
	public SalariedEmployee() 
	{
		
	}
	public SalariedEmployee(String ename,int birthMonth,double monthSalary)
	{
		super(ename, birthMonth);
		this.monthSalary = monthSalary;
	}
	
	//重写父类的getSalary方法，获取月薪
	@Override
	public double getSalary(int month) {
		double totalSalary = monthSalary;
		
		//如果该月员工过生日，则公司会额外奖励100 元。
		if(birthMonth == month)
		{
			totalSalary += 100;
		}
		
		return totalSalary;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态.练习;

/**
 * &lt;p&gt;Title: SalesEmployee&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    //4.4  SalesEmployee ：ColaEmployee 的子类，销售人员，工资由月销售额和提成率决定。属性：月销售额、提成率
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class SalesEmployee extends ColaEmployee {

	//属性：月销售额、提成率
		double monthSales;
		
		double rate;
		
		//构造函数
		public SalesEmployee() 
		{
			
		}
		public SalesEmployee(String ename,int birthMonth,double monthSales,double rate)
		{
			super(ename, birthMonth);
			this.monthSales = monthSales;
			this.rate = rate;
		}
		
		@Override
		public double getSalary(int month) {
			
			//销售人员，工资由月销售额和提成率决定
			double totalSalary = monthSales * rate;
			
			//如果该月员工过生日，则公司会额外奖励100 元。
			if(birthMonth == month)
			{
				totalSalary += 100;
			}
			
			return totalSalary;
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态.练习;
/**
 * &lt;p&gt;Title: TestCompany&lt;/p&gt;  
 * &lt;p&gt;
 *    Description:
 *    //4.5  定义一个类Company，在该类中写一个方法，调用该方法可以打印出某月某个员工的工资数额，
//写一个测试类TestCompany,在main方法，把若干各种类型的员工放在一个ColaEmployee 数组里，并单元出数组中每个员工当月的工资。
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class TestCompany {

	public static void main(String[] args) {
		//月薪
				SalariedEmployee salariedEmployee = new SalariedEmployee(&quot;张三&quot;, 6, 7000);
				//System.out.println(salariedEmployee.getSalary(9));//7000
				//System.out.println(salariedEmployee.getSalary(6));//7100
				
				//时薪
				HourlyEmployee hourlyEmployee = new HourlyEmployee(&quot;李四&quot;, 9, 300, 150);
				//System.out.println(hourlyEmployee.getSalary(9));//45100.0
				
				HourlyEmployee hourlyEmployee2 = new HourlyEmployee(&quot;李二四&quot;, 10, 300, 200);
				//System.out.println(hourlyEmployee2.getSalary(9));//66000.0
				
				//销售提成
				SalesEmployee salesEmployee = new SalesEmployee(&quot;王五&quot;, 3, 500000, 0.02);
				//System.out.println(salesEmployee.getSalary(9));//10000.0
				//System.out.println(salesEmployee.getSalary(3));//10100.0
				
				//1. 把若干各种类型的员工放在一个ColaEmployee 数组里
				ColaEmployee[] emps = new ColaEmployee[]{salariedEmployee,hourlyEmployee,hourlyEmployee2,salesEmployee};

				//2.并单元出数组中每个员工当月的工资。
				for (ColaEmployee emp : emps) {
					Company.print(emp, 9);
				}
	}

}
//4.5  定义一个类Company，在该类中写一个方法，调用该方法可以打印出某月某个员工的工资数额
class Company
{
	//调用该方法可以打印出某月某个员工的工资数额
	public static void print(ColaEmployee emp,int month)
	{
		double totalSalary = emp.getSalary(month);
		System.out.println(emp.ename + &quot;:第[&quot; + month + &quot;]月份的工资为：&quot; + totalSalary);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,18);function p(y,h){const i=r("ExternalLinkIcon");return t(),a("div",null,[s(" more "),n("h1",u,[c,e(),n("a",o,[e("202-Java面向对象高级特性-多态-练习题.md"),d(i)])]),b])}const g=l(m,[["render",p],["__file","index.html.vue"]]);export{g as default};

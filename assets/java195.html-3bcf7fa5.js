import{_ as i,X as n,Y as e,a1 as t,a0 as d}from"./framework-68dd73a2.js";const l={},s=d(`<h1 id="_195-java面向对象高级特性-继承-练习题-md" tabindex="-1"><a class="header-anchor" href="#_195-java面向对象高级特性-继承-练习题-md" aria-hidden="true">#</a> 195- Java面向对象高级特性-继承-练习题 .md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="设计2个类-要求如下-知识点-类的继承-方法的覆盖" tabindex="-1"><a class="header-anchor" href="#设计2个类-要求如下-知识点-类的继承-方法的覆盖" aria-hidden="true">#</a> 设计2个类，要求如下：（知识点：类的继承 方法的覆盖）</h3><blockquote><p>* 2、设计2个类，要求如下：（知识点：类的继承 方法的覆盖） [必做题]</p><p>​ 2.1 定义一个汽车类Vehicle，</p><p>​ 2.1.1 属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型）。</p><p>​ 2.1.2 至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）。</p><p>​ 2.1.3 为属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。</p><p>​ 2.1.4 定义一个一般方法run()，用打印语句描述汽车奔跑的功能</p><p>​ 2.1.5 在main方法中创建一个品牌为“benz”、颜色为“black”的汽车。</p><p>​</p><p>​ 2.2 定义一个Vehicle类的子类轿车类Car，要求如下：</p><p>​ 2.2.1 轿车有自己的属性载人数loader（int 类型）。</p><p>​ 2.2.2 提供该类初始化属性的构造方法。</p><p>​ 2.2.3 重新定义run()，用打印语句描述轿车奔跑的功能。</p><p>​ 2.2.4 在main方法中创建一个品牌为“Honda”、颜色为“red”，载人数为2人的轿车。</p></blockquote><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.继承.练习;

/**
 * &lt;p&gt;Title: Vehicle&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 **
 * 2、设计2个类，要求如下：（知识点：类的继承 方法的覆盖） [必做题]
		2.1  定义一个汽车类Vehicle，
		2.1.1 属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型）。
		2.1.2 至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）。
		2.1.3 为属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。
		2.1.4 定义一个一般方法run()，用打印语句描述汽车奔跑的功能
		2.1.5 在main方法中创建一个品牌为“benz”、颜色为“black”的汽车。
		
	    2.2 定义一个Vehicle类的子类轿车类Car，要求如下：
		2.2.1 轿车有自己的属性载人数loader（int 类型）。
		2.2.2 提供该类初始化属性的构造方法。
		2.2.3 重新定义run()，用打印语句描述轿车奔跑的功能。
		2.2.4 在main方法中创建一个品牌为“Honda”、颜色为“red”，载人数为2人的轿车。
 *
//2.1  定义一个汽车类Vehicle
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Vehicle {
	
	//2.1.1 属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型）。
		private String brand;
		
		private String color;
		
		private double speed;
		
		//2.1.2 至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）
		public Vehicle()
		{
			
		}
		public Vehicle(String brand,String color)
		{
			this.brand = brand;
			this.color = color;
		}
		
		//2.1.3 为属性提供访问器方法(get与set)。注意：汽车品牌一旦初始化之后不能修改。
		public String getBrand()
		{
			return this.brand;
		}
		
		public String getColor()
		{
			return this.color;
		}
		public void setColor(String color)
		{
			this.color = color;
		}
		
		public double getSpeed()
		{
			return this.speed;
		}
		public void setSpeed(double speed)
		{
			this.speed = speed;
		}
		
		//2.1.4 定义一个一般方法run()，用打印语句描述汽车奔跑的功能
		public void run()
		{
			System.out.println(&quot;一辆【&quot; + this.color + &quot;】颜色的 【&quot; + this.brand + &quot;】车，以【&quot; + this.speed+ &quot;】样的速度正在高速公路奔驰着......&quot;);
		}
		
		//2.1.5 在main方法中创建一个品牌为“benz”、颜色为“black”的汽车。
		public static void main(String[] args) {
			Vehicle benz = new Vehicle(&quot;benz&quot;, &quot;black&quot;);
			benz.run();
			benz.setSpeed(30);
			benz.run();
			benz.setSpeed(60);
			benz.run();
		}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.继承.练习;

/**
 * &lt;p&gt;Title: Car&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    /**
 *      2.2 定义一个Vehicle类的子类轿车类Car，要求如下：
 *      
		2.2.1 轿车有自己的属性载人数loader（int 类型）。
		2.2.2 提供该类初始化属性的构造方法。
		2.2.3 重新定义run()，用打印语句描述轿车奔跑的功能。
		2.2.4 在main方法中创建一个品牌为“Honda”、颜色为“red”，载人数为2人的轿车。
 *
//2.2 定义一个Vehicle类的子类轿车类Car，要求如下：
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Car extends Vehicle{

	//2.2.1 轿车有自己的属性载人数loader（int 类型）。
		int loader;
		
		//2.2.2 提供该类初始化属性的构造方法。
		public Car()
		{
			
		}
		public Car(String brand,String color,int loader)
		{
			super(brand, color);
			this.loader = loader;
		}
		
		//2.2.3 重新定义run()，用打印语句描述轿车奔跑的功能。
		@Override
		public void run() {
			//super.run();
			System.out.println(&quot;一辆【&quot; + this.getColor() + &quot;】颜色的 【&quot; + this.getBrand() + &quot;】车，载着【&quot; + this.loader + &quot;】人，以【&quot; + this.getSpeed()+ &quot;】样的速度正在高速公路奔驰着......&quot;);
		}
		
		//2.2.4 在main方法中创建一个品牌为“Honda”、颜色为“red”，载人数为2人的轿车。
		public static void main(String[] args) {
			Car honda = new Car(&quot;Honda&quot;, &quot;red&quot;, 2);
			honda.run();
			honda.setSpeed(60);
			honda.run();
		}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-继承-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,11);function a(v,r){return n(),e("div",null,[t(" more "),s])}const u=i(l,[["render",a],["__file","java195.html.vue"]]);export{u as default};

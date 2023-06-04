import{_ as l,X as s,Y as t,a1 as d,Z as i,$ as e,a2 as a,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},u={id:"_206-java面向对象高级特性-多态-抽象类-练习题-md",tabindex:"-1"},b=i("a",{class:"header-anchor",href:"#_206-java面向对象高级特性-多态-抽象类-练习题-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--206-Java----sk9qz50dwtq79j3hqnsaq68aql9eg3zbnsj4rah91wia7251e0ug7lq.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="rectangle表示矩形类-增加两个属性" tabindex="-1"><a class="header-anchor" href="#rectangle表示矩形类-增加两个属性" aria-hidden="true">#</a> Rectangle表示矩形类，增加两个属性</h3><blockquote><p>3.2.1 Rectangle表示矩形类，增加两个属性，Width表示长度、height表示宽度，</p></blockquote><ul><li>重写getPer、getArea和showAll三个方法，另外又增加一个构造方法（一个是默认的、一个是为高度、宽度、颜色赋值的）。</li></ul><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.抽象类.练习;

/**
 * &lt;p&gt;Title: Rectangle&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    //	3.2.1  Rectangle表示矩形类，增加两个属性，Width表示长度、height表示宽度，
 *    重写getPer、getArea和showAll三个方法，另外又增加一个构造方法（一个是默认的、一个是为高度、宽度、颜色赋值的）。
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Rectangle extends Shape{

	//增加两个属性，Width表示长度、height表示宽度
		int width;
		
		int height;
		
		//另外又增加一个构造方法（一个是默认的、一个是为高度、宽度、颜色赋值的）
		public Rectangle()
		{
			super();
		}
		public Rectangle(int width,int height,String color)
		{
			super(color);
			//this.color = color;
			this.width = width;
			this.height = height;
		}
		
		//重写getPer、getArea和showAll三个方法
		@Override
		public double getArea() {
			this.area = width * height;
			return this.area;
		}

		@Override
		public double getPer() {
			this.per = (width + height) * 2;
			return this.per;
		}

		@Override
		public void showAll() {
			System.out.println(&quot;宽：&quot; + this.width + &quot;，高：&quot; + this.height + &quot;，颜色：&quot; + this.color + &quot;，面积：&quot; + this.getArea() + &quot;，周长：&quot; + this.getPer());
		}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.抽象类.练习;
/**
 * &lt;p&gt;Title: Circle&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    
//    3.2.2  Circle表示圆类，增加1个属性，radius表示半径，重写getPer、getArea和showAll三个方法，
 * 		另外又增加两个构造方法（为半径、颜色赋值的）。
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Circle extends Shape {

	//增加1个属性，radius表示半径
	int radius;
	
	//另外又增加两个构造方法（为半径、颜色赋值的）
	public Circle()
	{
		super();
	}
	public Circle(int radius,String color)
	{
		super(color);
		//this.color = color;
		this.radius = radius;
	}
	
	//重写getPer、getArea和showAll三个方法
	@Override
	public double getArea() {
		this.area = 3.1415926 * radius * radius;
		return this.area;
	}

	@Override
	public double getPer() {
		this.per = 2 * 3.1415926 * radius;
		return this.per;
	}

	@Override
	public void showAll() {
		System.out.println(&quot;半径：&quot; + this.radius + &quot;，颜色：&quot; + this.color + &quot;，面积：&quot; + this.getArea() + &quot;，周长：&quot; + this.getPer());
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.抽象类.练习;
/**
 * &lt;p&gt;Title: Shape&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *     * 3、设计三个类，分别如下：（知识点：抽象类及抽象方法） [必做题]
	3.1 设计Shape表示图形类，有面积属性area、周长属性per，颜色属性color，有两个构造方法
	（一个是默认的、一个是为颜色赋值的），还有3个抽象方法，分别是：getArea计算面积、getPer计算周长、showAll
	输出所有信息，还有一个求颜色的方法getColor。
	3.2 设计 2个子类：
	3.2.1  Rectangle表示矩形类，增加两个属性，Width表示长度、height表示宽度，
	重写getPer、getArea和showAll三个方法，另外又增加一个构造方法（一个是默认的、一个是为高度、宽度、颜色赋值的）。
    3.2.2  Circle表示圆类，增加1个属性，radius表示半径，重写getPer、getArea和showAll三个方法，
    另外又增加两个构造方法（为半径、颜色赋值的）。
	3.3  在main方法中，声明创建每个子类的对象，并调用2个子类的showAll方法。
*
//	3.1 设计Shape表示图形类，有面积属性area、周长属性per，颜色属性color，有两个构造方法（一个是默认的、一个是为颜色赋值的），
 * 还有3个抽象方法，分别是：getArea计算面积、getPer计算周长、showAll输出所有信息，还有一个求颜色的方法getColor。
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public abstract class Shape {
	//有面积属性area、周长属性per，颜色属性color
		double area;
		
		double per;
		
		String color;
		
		//有两个构造方法（一个是默认的、一个是为颜色赋值的）
		public Shape()
		{
			
		}
		public Shape(String color)
		{
			this.color = color;
		}
		
		//还有3个抽象方法，分别是：getArea计算面积、getPer计算周长、showAll输出所有信息
		public abstract double getArea();
		public abstract double getPer();
		public abstract void showAll();
		
		//还有一个求颜色的方法getColor
		public String getColor()
		{
			return color;
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.抽象类.练习;

/**
 * &lt;p&gt;Title: ShapeTest&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    //3.3  在main方法中，声明创建每个子类的对象，并调用2个子类的showAll方法。
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class ShapeTest {

	public static void main(String[] args) {
		//矩形
		Rectangle rectangle = new Rectangle(10, 20, &quot;pink&quot;);
		rectangle.showAll();
		
		//圆形
		Circle circle = new Circle(5, &quot;black&quot;);
		circle.showAll();
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-抽象类-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,13);function h(g,p){const n=r("ExternalLinkIcon");return s(),t("div",null,[d(" more "),i("h1",u,[b,e(),i("a",m,[e("206-Java面向对象高级特性-多态-抽象类-练习题.md"),a(n)])]),o])}const q=l(c,[["render",h],["__file","java206.html.vue"]]);export{q as default};

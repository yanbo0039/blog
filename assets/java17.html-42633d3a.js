import{_ as i,X as n,Y as e,a1 as d,a0 as l}from"./framework-68dd73a2.js";const s={},a=l(`<h1 id="java-设计2个类-要求如下定义一个汽车类vehicle属性包括-汽车品牌brand" tabindex="-1"><a class="header-anchor" href="#java-设计2个类-要求如下定义一个汽车类vehicle属性包括-汽车品牌brand" aria-hidden="true">#</a> Java--设计2个类，要求如下定义一个汽车类Vehicle属性包括：汽车品牌brand....</h1><p>JAVA题目： 2、设计2个类，要求如下：（知识点：类的继承 方法的覆盖） [必做题] 2.1 定义一个汽车类Vehicle， 2.1.1 属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型）。 2.1.2 至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）。 2.1.3 为属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。 2.1.4 定义一个一般方法run()，用打印语句描述汽车奔跑的功能 2.1.5 在main方法中创建一个品牌为“benz”、颜色为“black”的汽车。 2.2 定义一个Vehicle类的子类轿车类Car，要求如下： 2.2.1 轿车有自己的属性载人数loader（int 类型）。 2.2.2 提供该类初始化属性的构造方法。 2.2.3 重新定义run()，用打印语句描述轿车奔跑的功能。 2.2.4 在main方法中创建一个品牌为“Honda”、颜色为“red”，载人数为2人的轿车。</p><h3 id="vehicle-java" tabindex="-1"><a class="header-anchor" href="#vehicle-java" aria-hidden="true">#</a> Vehicle.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Vehicle {
	
	
	/*
	 * 2、设计2个类，要求如下：
	 * 2.1 定义一个汽车类Vehicle，
	 * 2.1.1属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型）。
	 * 2.1.2至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）。01:23
	 * 2.1.3为属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。 01:25
	 * 2.1.4 定义一个一般方法run()，用打印语句描述汽车奔跑的功能 01:27
	 * 2.1.5在main方法中创建一个品牌为“benz”、颜色为“black”的汽车。
	 */
	private String brand;
	private String color;
	private double speed;
	
	
	Vehicle() {
		// TODO Auto-generated constructor stub
	}
	
	Vehicle(String brand,String color) {
		this.brand = brand;
		this.color = color;
		speed = 0;
	}
	
	
	public String getBrand() {
		return brand;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
	}


	public double getSpeed() {
		return speed;
	}


	public void setSpeed(double speed) {
		this.speed = speed;
	}

	public void run() {
		System.out.println(getColor() + &quot;的&quot; + getBrand() + &quot;的速度是&quot; + getSpeed());
	}


	/**
	 * 假定此处为测试类
	 * @param args
	 */
	public static void main(String[] args) {
		Vehicle vehicle = new Vehicle(&quot;benz&quot;,&quot;black&quot;);
		vehicle.run();
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="car-java" tabindex="-1"><a class="header-anchor" href="#car-java" aria-hidden="true">#</a> Car.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Car extends Vehicle {

	/*
	 * * 2.2 定义一个Vehicle类的子类轿车类Car，要求如下：
	 *  2.2.1轿车有自己的属性载人数loader（int 类型）。01:37
	 *  2.2.2提供该类初始化属性的构造方法。01:38
	 *  2.2.3重新定义run()，用打印语句描述轿车奔跑的功能。01:39
	 *  2.2.4在main方法中创建一个品牌为“Honda”、颜色为“red”，载人数为2人的轿车。01:41
	 */
	private int loader;
	
	Car() {
		// TODO Auto-generated constructor stub
	}

	public Car(String brand, String color,int loader) {
		super(brand, color);
		this.loader = loader;
	}
	
	public void run()
	{
		System.out.println(getColor() + &quot;载人人数是&quot; + loader + getBrand() + &quot;的速度是&quot; + getSpeed());
	}
	
	public static void main(String[] args) {
		Car car = new Car(&quot;Honda&quot;,&quot;red&quot;,2);
		car.run();
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,10);function r(v,t){return n(),e("div",null,[d(" more "),a])}const u=i(s,[["render",r],["__file","java17.html.vue"]]);export{u as default};

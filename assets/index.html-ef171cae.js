import{_ as i,X as n,Y as e,a1 as l,a0 as t}from"./framework-68dd73a2.js";const s={},d=t(`<h1 id="java初级测试题六-面向对象基础-7-7" tabindex="-1"><a class="header-anchor" href="#java初级测试题六-面向对象基础-7-7" aria-hidden="true">#</a> Java初级测试题六-面向对象基础(7-7)</h1><ol><li>定义一个点类Point，包含2个成员变量x、y分别表示x和y坐标，2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy）方法实现点的位置移动，创建两个Point对象p1、p2，分别调用movePoint方法后，打印p1和p2的坐标。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class Point {
	
//	1、定义一个点类Point，
//	包含2个成员变量x、y分别表示x和y坐标，
//	2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy）
//	方法实现点的位置移动，创建两个Point对象p1、p2，
//	分别调用movePoint方法后，打印p1和p2的坐标。
	
	private int x;//x坐标
	private int y;//y坐标
	
	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	@Override
	public String toString() {
		return &quot;Point [x=&quot; + x + &quot;, y=&quot; + y + &quot;]&quot;;
	}

	public Point() {//空的构造方法
		
	}
	
	public Point(int x0,int y0) {//有参构造方法
		this.x = x0;
		this.y = y0;
	}
	
	
	public void movePoint(int dx,int dy) {//移动点的方法
		this.x = dx;
		this.y = dy;
	}
	
	
	public static void main(String[] args) {//测试类
		Point p1 = new Point();
		p1.movePoint(10, 20);
		System.out.println(p1.toString());
		
		Point p2 = new Point();
		p2.movePoint(20, 30);
		System.out.println(p2.toString());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>定义一个矩形类Rectangle：（知识点：对象的创建和使用）</li></ol><p>2.1 定义三个方法：getArea()求面积、getPer()求周长，showAll()分别在控制台输出长、宽、面积、周长。</p><p>2.2 有2个属性：长length、宽width</p><p>2.3 通过构造方法Rectangle(int width, int length)，分别给两个属性赋值</p><p>2.4 创建一个Rectangle对象，并输出相关信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class Rectangle {

//	2、定义一个矩形类Rectangle：（知识点：对象的创建和使用）[必做题]
//	2.1  定义三个方法：getArea()求面积、getPer()求周长，showAll()分别在控制台输出长、宽、面积、周长。
//	2.2  有2个属性：长length、宽width
//	2.3  通过构造方法Rectangle(int width, int length)，分别给两个属性赋值
//	2.4  创建一个Rectangle对象，并输出相关信息 toString 

	private int length;//长
	private int width;//宽
	
	public int getLength() {
		return length;
	}
	public void setLength(int length) {
		this.length = length;
	}
	public int getWidth() {
		return width;
	}
	public void setWidth(int width) {
		this.width = width;
	}
	public Rectangle(int length, int width) {
		super();
		this.length = length;
		this.width = width;
	}
	@Override
	public String toString() {
		return &quot;Rectangle [length=&quot; + length + &quot;, width=&quot; + width + &quot;]&quot;;
	}
//	2.1  定义三个方法：getArea()求面积、getPer()求周长，showAll()分别在控制台输出长、宽、面积、周长。
	public long getArea() {//求面积
		return length * width;
	}

	public long getPer() {//求周长
		return 2 * (length + width);
	}
	
	public void showAll() {
		System.out.println(&quot;长：&quot; + length + &quot;  宽：&quot; + width + &quot; 面积：&quot; + getArea() + &quot; 周长：&quot; + getPer());
	}
	
	public static void main(String[] args) {
		Rectangle r = new Rectangle(10, 20);
		r.showAll();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>定义一个笔记本类，该类有颜色（char）和cpu型号（int）两个属性。</li></ol><p>3.1 无参和有参的两个构造方法；有参构造方法可以在创建对象的同时为每个属性赋值；</p><p>3.2 输出笔记本信息的方法</p><p>3.3 然后编写一个测试类，测试笔记本类的各个方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class Notebook {
//	3、定义一个笔记本类，该类有颜色（char）和cpu型号（int）两个属性。 [必做题]
//	3.1 无参和有参的两个构造方法；有参构造方法可以在创建对象的同时为每个属性赋值；
//	3.2  输出笔记本信息的方法
//	3.3  然后编写一个测试类，测试笔记本类的各个方法。
	private char color;//颜色
	private int cpuModel;//cpu型号
	public Notebook() {
		super();
	}
	public Notebook(char color, int cpuModel) {
		super();
		this.color = color;
		this.cpuModel = cpuModel;
	}
	public char getColor() {
		return color;
	}
	public void setColor(char color) {
		this.color = color;
	}
	public int getCpuModel() {
		return cpuModel;
	}
	public void setCpuModel(int cpuModel) {
		this.cpuModel = cpuModel;
	}
	@Override
	public String toString() {
		return &quot;Notebook [color=&quot; + color + &quot;, cpuModel=&quot; + cpuModel + &quot;]&quot;;
	}
	
	public static void main(String[] args) {
		Notebook notebook = new Notebook(&#39;a&#39;,20);
		System.out.println(notebook);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>设计一个类Student，该类包括姓名、学号和成绩。设计一个方法，按照成绩从高到低的顺序输出姓名、学号和成绩信息。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

import java.util.Arrays;

public class Student {
//	4、设计一个类Student，该类包括姓名、学号和成绩。
//	设计一个方法，按照成绩从高到低的顺序输出姓名、学号和成绩信息。
	private String username;//姓名
	private String no;//学号
	private int score;//成绩
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public Student() {
		super();
	}
	public Student(String username, String no, int score) {
		super();
		this.username = username;
		this.no = no;
		this.score = score;
	}
	@Override
	public String toString() {
		return &quot;Student [username=&quot; + username + &quot;, no=&quot; + no + &quot;, score=&quot; + score + &quot;]&quot;;
	}
	
	public static void main(String[] args) {
		//模拟多个学生
		Student[] stus = new Student[5];
		
		//为学生数组赋值
		for (int i = 0; i &lt; stus.length; i++) {
			stus[i] = new Student(&quot;student&quot; + i,i+&quot;&quot;,(int)(Math.random()*100));
		}
		System.out.println(Arrays.toString(stus));
		//排序
		ascBubbleSort(stus);
		
		System.out.println(Arrays.toString(stus));
		
	}
	private static void ascBubbleSort(Student[] stus) {
		for (int i = 0; i &lt; stus.length - 1; i++) {
			for (int j = 0; j &lt; stus.length -1 - i; j++) {
				if(stus[j].getScore() &gt; stus[j + 1].getScore()) {
					Student temp = stus[j];
					stus[j] = stus[j + 1];
					stus[j+1] = temp;
				}
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>定义两个类，描述如下：</li></ol><p>5.1定义一个人类Person：</p><p>5.1.1定义一个方法sayHello()，可以向对方发出问候语“hello,my name is XXX”</p><p>5.1.2有三个属性：名字、身高、体重</p><p>5.2定义一个PersonCreate类：</p><p>5.2.1创建两个对象，分别是zhangsan，33岁，1.73；lishi，44，1.74</p><p>5.2.2分别调用对象的sayHello()方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class Person {
//	5、定义两个类，描述如下： [必做题]
//	5.1定义一个人类Person：
//	5.1.1定义一个方法sayHello()，可以向对方发出问候语“hello,my name is XXX”
//	5.1.2有三个属性：名字、身高、体重
//	5.2定义一个PersonCreate类：
//	5.2.1创建两个对象，分别是zhangsan，33岁，1.73；
	//lishi，44，1.74
//	5.2.2分别调用对象的sayHello()方法。
	
	private String name;//名字
	private Double height;//身高
	private Integer weight;//体重
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getHeight() {
		return height;
	}
	public void setHeight(Double height) {
		this.height = height;
	}
	public Integer getWeight() {
		return weight;
	}
	public void setWeight(Integer weight) {
		this.weight = weight;
	}
	public Person(String name, Double height, Integer weight) {
		super();
		this.name = name;
		this.height = height;
		this.weight = weight;
	}
	public Person() {
		super();
	}
	@Override
	public String toString() {
		return &quot;Person [name=&quot; + name + &quot;, height=&quot; + height + &quot;, weight=&quot; + weight + &quot;]&quot;;
	}
	public void sayHello() {
		System.out.println(&quot;hello,my name is &quot; +name);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class PersonCreate {

	public static void main(String[] args) {

		Person p1 = new Person(&quot;zhangsan&quot;,1.73,null);
		p1.sayHello();
		Person p2 = new Person(&quot;lishi&quot;,1.74,null);
		p2.sayHello();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>定义两个类，描述如下：</li></ol><p>6.1定义一个人类Person：</p><p>6.1.1定义一个方法sayHello()，可以向对方发出问候语“hello,my name is XXX”</p><p>6.1.2有三个属性：名字、身高、体重</p><p>6.1.3通过构造方法，分别给三个属性赋值</p><p>6.2定义一个Constructor类：</p><p>6.2.1创建两个对象，分别是zhangsan，33岁，1.73；lishi，44，1.74</p><p>6.2.2分别调用对象的sayHello()方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class Person6 {
//	6、定义两个类，描述如下： [必做题]
//	6.1定义一个人类Person：
//	6.1.1定义一个方法sayHello()，可以向对方发出问候语“hello,my name is XXX”
//	6.1.2有三个属性：名字、身高、体重
//	6.1.3通过构造方法，分别给三个属性赋值
//	6.2定义一个Constructor类：
//	6.2.1创建两个对象，分别是zhangsan，33岁，1.73；
	//lishi，44，1.74
//	6.2.2分别调用对象的sayHello()方法。
	
	private String name;//名字
	private Double height;//身高
	private Double weight;//体重
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getHeight() {
		return height;
	}
	public void setHeight(Double height) {
		this.height = height;
	}
	public Double getWeight() {
		return weight;
	}
	public void setWeight(Double weight) {
		this.weight = weight;
	}
	public Person6(String name, Double height, Double weight) {
		super();
		this.name = name;
		this.height = height;
		this.weight = weight;
	}
	public Person6() {
		super();
	}
	@Override
	public String toString() {
		return &quot;Person6 [name=&quot; + name + &quot;, height=&quot; + height + &quot;, weight=&quot; + weight + &quot;]&quot;;
	}
	public void sayHello() {
		System.out.println(&quot;hello,my name is &quot; +name);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class Constructor {

	public static void main(String[] args) {

		Person p1 = new Person(&quot;zhangsan&quot;,1.73,null);
		p1.sayHello();
		Person p2 = new Person(&quot;lishi&quot;,1.74,null);
		p2.sayHello();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>定义一个汽车类Vehicle，要求如下：</li></ol><p>7.1属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型），并且所有属性为私有。</p><p>7.2至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）。</p><p>7.3为私有属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。</p><p>7.4定义一个一般方法run()，用打印语句描述汽车奔跑的功能</p><p>7.5定义测试类VehicleTest，在其main方法中创建一个品牌为“benz”、颜色为“black”的汽车。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class Vehicle {
//	7、定义一个汽车类Vehicle，要求如下：[选做题]
//	7.1属性包括：汽车品牌brand（String类型）、颜色color（String类型）和速度speed（double类型），并且所有属性为私有。
//	7.2至少提供一个有参的构造方法（要求品牌和颜色可以初始化为任意值，但速度的初始值必须为0）。
//	7.3为私有属性提供访问器方法。注意：汽车品牌一旦初始化之后不能修改。
//	7.4定义一个一般方法run()，用打印语句描述汽车奔跑的功能
//  7.5定义测试类VehicleTest，在其main方法中创建一个品牌为“benz”、颜色为“black”的汽车。
	private String brand;//汽车品牌
	private String color;//颜色 
	private double speed;//速度 
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
	public Vehicle() {
		super();
	}
	public Vehicle(String brand, String color) {
		super();
		this.brand = brand;
		this.color = color;
	}
	@Override
	public String toString() {
		return &quot;Vehicle [brand=&quot; + brand + &quot;, color=&quot; + color + &quot;, speed=&quot; + speed + &quot;]&quot;;
	}
	public void run() {
		System.out.println(brand + &quot;is running......&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package chapter6;

public class VehicleTest {

	public static void main(String[] args) {
		Vehicle vehicle = new Vehicle(&quot;benz&quot;, &quot;black&quot;);
		System.out.println(vehicle);
		vehicle.run();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,47);function v(r,a){return n(),e("div",null,[l(" more "),d])}const c=i(s,[["render",v],["__file","index.html.vue"]]);export{c as default};

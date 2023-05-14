import{_ as l,X as s,Y as t,a1 as d,Z as n,$ as i,a2 as v,a0 as a,F as u}from"./framework-68dd73a2.js";const r={},c={id:"_191-java面向对象基础-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_191-java面向对象基础-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--191-Java-kg1n062arnl8q9f6xsczg6a.md",target:"_blank",rel:"noopener noreferrer"},o=a(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>           	      抽象（抽取共有的特质）

	对象（object） --------------------&gt;  类（class）

	

				 具体化 | 实例化（new）

	类（class）-----------------------&gt; 对象（Object）

	

	

	面向对象的三大特性：封装、继承、多态

	

	-------------------------------------------------------------------------------

	1.分析对象Object（计算机）：

		  属性：品牌、显示器、主机、键盘、鼠标、颜色

		  行为：开机、关机

		     ||

		     ||

		     ||

		     ||

		     \\/

    2.根据对象分析，编程代码中的类Class

    	 属性（全局变量、成员变量）：品牌brand、显示器monitor、主机case、键盘keyboard、鼠标mouse、颜色color

		 行为（成员方法）：开机turnOn()、关机turnOff()

	-------------------------------------------------------------------------------

	-------------------------------------------------------------------------------

	1.分析对象Object（灯）：

		  属性：灯丝、灯罩、灯座

		  行为：开灯、关灯、调亮、调亮

		     ||

		     ||

		     ||

		     ||

		     \\/

    2.根据对象分析，编程代码中的类Class

    	   属性（全局变量、成员变量）：灯丝filament、灯罩lampshade、灯座lampholder

		  行为（成员方法）：开灯on()、关灯off()、调亮lighten()、调暗dim()

	-------------------------------------------------------------------------------

	

	

	类的定义：

		   &lt;修饰符&gt;  class 类名

		   {

		   		//类的成员

		   		成员变量;

		   		成员方法;

		   		嵌套类（内部类）;

		   }

		   

		   修饰符:public &lt;default&gt;

		   

		    类名：帕斯卡(pascal)规则命名，首字母大写，其余单词的首字母大写，例如HelloWorld

		    

		  注意：

		 	1.一个*.java源文件中仅允许存在一个public修饰的类

		 	2.public修饰的类的名称必须与*.java源文件名称大小写一致

		 	



	    类是创建对象的模板，对象是类的实例

	    

	    创建对象：

	 	   类名   对象名  = new 构造器();



	 	   

	    构造器（构造方法/构造器/构造函数，Constructor）

			1.具有与类相同的名称

			2.不含返回值类型

			3.不能在方法中用return语句返回一个值

			4. 一般访问权限为public

		  

		         在一个类中，具有上述特征的方法就是构造器。

   

	   构造器的作用：

			1.完成对象的创建，即完成对象的实例化。XiyoujiRole sunwukong = new XiyoujiRole();

			2.一般使用构造器来完成对成员变量的初始化。XiyoujiRole tangSeng = new XiyoujiRole(&quot;唐僧&quot;, &quot;无&quot;, &quot;☆☆☆☆☆&quot;, &quot;★★★★★&quot;);



               注意：

           1.默认带无参构造函数

           2.当定义带参数构造函数时，默认无参构造函数失效了，需要显示定义出来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06;

/**
 * &lt;p&gt;
 * Title: Light
 * &lt;/p&gt;
 * &lt;p&gt;
 * Description:
 * 
 * 抽象（抽取共有的特质） 对象（object） --------------------&gt; 类（class）
 * 
 * 具体化 | 实例化（new） 类（class）-----------------------&gt; 对象（Object）
 * 
 * 
 * 面向对象的三大特性：封装、继承、多态
 * 
 * -------------------------------------------------------------------------------
 * 1.分析对象Object（计算机）： 属性：品牌、显示器、主机、键盘、鼠标、颜色 行为：开机、关机 || || || || \\/
 * 2.根据对象分析，编程代码中的类Class
 * 属性（全局变量、成员变量）：品牌brand、显示器monitor、主机case、键盘keyboard、鼠标mouse、颜色color
 * 行为（成员方法）：开机turnOn()、关机turnOff()
 * -------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------
 * 1.分析对象Object（灯）： 属性：灯丝、灯罩、灯座 行为：开灯、关灯、调亮、调亮 || || || || \\/
 * 2.根据对象分析，编程代码中的类Class 属性（全局变量、成员变量）：灯丝filament、灯罩lampshade、灯座lampholder
 * 行为（成员方法）：开灯on()、关灯off()、调亮lighten()、调暗dim()
 * -------------------------------------------------------------------------------
 * 
 * 
 * 类的定义： &lt;修饰符&gt; class 类名 { //类的成员 成员变量; 成员方法; 嵌套类（内部类）; }
 * 
 * 修饰符:public &lt;default&gt;
 * 
 * 类名：帕斯卡(pascal)规则命名，首字母大写，其余单词的首字母大写，例如HelloWorld
 * 
 * 注意： 1.一个*.java源文件中仅允许存在一个public修饰的类 2.public修饰的类的名称必须与*.java源文件名称大小写一致
 * 
 * -------------------------------------------------------------------------
 * 类是创建对象的模板，对象是类的实例
 * 
 * 创建对象： 类名 对象名 = new 构造器();
 * -------------------------------------------------------------------------
 * 
 * 构造器（构造方法/构造器/构造函数，Constructor） 1.具有与类相同的名称 2.不含返回值类型 3.不能在方法中用return语句返回一个值
 * 4. 一般访问权限为public
 * 
 * 在一个类中，具有上述特征的方法就是构造器。
 * 
 * 构造器的作用： 1.完成对象的创建，即完成对象的实例化。XiyoujiRole sunwukong = new XiyoujiRole();
 * 2.一般使用构造器来完成对成员变量的初始化。XiyoujiRole tangSeng = new XiyoujiRole(&quot;唐僧&quot;, &quot;无&quot;,
 * &quot;☆☆☆☆☆&quot;, &quot;★★★★★&quot;);
 * 
 * 注意： 1.默认带无参构造函数 2.当定义带参数构造函数时，默认无参构造函数失效了，需要显示定义出来
 * &lt;/p&gt;
 * 
 * @author xianxian
 * @date 2023年1月3日
 */
public class Light {
	/**
	 * 属性（全局变量、成员变量）：灯丝filament、灯罩lampshade、灯座lampholder
	 */
	/** 灯丝 */
	String filament;

	/** 灯罩 */
	String lampshade;

	/** 灯座 */
	String lampholder;

	/**
	 * 行为（成员方法）：开灯on()、关灯off()、调亮lighten()、调暗dim()
	 */
	/** 开灯 */
	public void on() {
		System.out.println(&quot;开灯.............&quot;);
	}

	/** 关灯 */
	public void off() {
		System.out.println(&quot;关灯.............&quot;);
	}

	/** 调亮 */
	public void lighten() {
		System.out.println(&quot;调亮   +1&quot;);
	}

	/** 调暗 */
	public void dim() {
		System.out.println(&quot;调暗   -1&quot;);
	}
}

class Computer {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06;

/**
 * &lt;p&gt;
 * Title: XiyoujiRole
 * &lt;/p&gt;
 * &lt;p&gt;
 * Description: 西游记游戏软件中的游戏人物: 孙悟空：孙悟空的武器是金箍棒，战斗力五颗星，耐力五颗星 唐
 * 僧：唐僧没有武器，战斗力为零，耐力五颗星 猪八戒：猪八戒的武器是耙子，战斗力四颗星，耐力两颗星 沙 僧：沙僧的武器是月牙铲 ，战斗力三颗星，耐力四颗星
 * 
 * 属性：角色名称、武器、战斗力、耐力 行为：战斗、获取角色信息
 * 
 * -------------------------------------------------------------------------
 * 类是创建对象的模板，对象是类的实例
 * 
 * 创建对象： 类名 对象名 = new 构造器();
 * -------------------------------------------------------------------------
 * 
 * 构造器（构造方法/构造器/构造函数，Constructor） 1.具有与类相同的名称 2.不含返回值类型 3.不能在方法中用return语句返回一个值
 * 4. 一般访问权限为public
 * 
 * 在一个类中，具有上述特征的方法就是构造器。
 * 
 * 构造器的作用： 1.完成对象的创建，即完成对象的实例化。XiyoujiRole sunwukong = new XiyoujiRole();
 * 2.一般使用构造器来完成对成员变量的初始化。XiyoujiRole tangSeng = new XiyoujiRole(&quot;唐僧&quot;, &quot;无&quot;,
 * &quot;☆☆☆☆☆&quot;, &quot;★★★★★&quot;);
 * 
 * 注意： 1.默认带无参构造函数 2.当定义带参数构造函数时，默认无参构造函数失效了，需要显示定义出来
 * &lt;/p&gt;
 * 
 * @author xianxian
 * @date 2023年1月3日
 */
public class XiyoujiRole {
	// 属性：角色名称、武器、战斗力、耐力
	/** 角色名称 */
	String roleName;

	/** 武器 */
	String wuQi;

	/** 战斗力 */
	String zhanDouLi;

	/** 耐力 */
	String naiLi;

	/** 构造器（构造函数、构造方法） */
	public XiyoujiRole() {

	}

	/** 重载构造器（构造函数、构造方法） */
	public XiyoujiRole(String p_roleName, String p_wuQi, String p_zhanDouLi, String p_naiLi) {
		roleName = p_roleName;
		wuQi = p_wuQi;
		zhanDouLi = p_zhanDouLi;
		naiLi = p_naiLi;
	}

	// 行为：战斗、获取角色信息
	/** 战斗 */
	public void fight() {
		System.out.println(&quot;加血 +11111111111111111111&quot;);
	}

	/** 获取角色信息 */
	public void getRoleInfo() {
		System.out.println(&quot;角色名称：&quot; + roleName + &quot;\\t武器：&quot; + wuQi + &quot;\\t战斗力:&quot; + zhanDouLi + &quot;\\t耐力:&quot; + naiLi);
	}

	public static void main(String[] args) {
		/**
		 * 先new对象，再赋值
		 */
		// 创建一个孙悟空的角色： 类名 对象名 = new 构造器();
		// 孙悟空：孙悟空的武器是金箍棒，战斗力五颗星，耐力五颗星
		XiyoujiRole sunwukong = new XiyoujiRole();

		// 通过对象名.属性访问成员变量
		sunwukong.roleName = &quot;孙悟空&quot;;
		sunwukong.wuQi = &quot;金箍棒&quot;;
		sunwukong.zhanDouLi = &quot;★★★★★&quot;;
		sunwukong.naiLi = &quot;★★★★★&quot;;

		// 通过对象名.方法访问成员方法
		sunwukong.fight();
		sunwukong.getRoleInfo();

		/**
		 * new对象的同时，完成初始化操作
		 */
		// 唐 僧：唐僧没有武器，战斗力为零，耐力五颗星
		XiyoujiRole tangSeng = new XiyoujiRole(&quot;唐僧&quot;, &quot;无&quot;, &quot;☆☆☆☆☆&quot;, &quot;★★★★★&quot;);
		tangSeng.getRoleInfo();

		// 猪八戒：猪八戒的武器是耙子，战斗力四颗星，耐力两颗星
		XiyoujiRole zhuBaJie = new XiyoujiRole(&quot;猪八戒&quot;, &quot;耙子&quot;, &quot;★★★★☆&quot;, &quot;★★☆☆☆&quot;);
		zhuBaJie.getRoleInfo();

		// 沙 僧：沙僧的武器是月牙铲 ，战斗力三颗星，耐力四颗星
		XiyoujiRole shaSeng = new XiyoujiRole(&quot;沙 僧&quot;, &quot;月牙铲&quot;, &quot;★★★☆☆&quot;, &quot;★★★★☆&quot;);
		shaSeng.getRoleInfo();

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06.lianxi;
/**
 * &lt;p&gt;Title: _04&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    4、设计一个类Student，该类包括姓名、学号和成绩。设计一个方法，按照成绩从高到低的顺序输出姓名、学号和成绩信息。[必做题]
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class _04 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//学生：张三
		Student zhangsan = new Student();
		zhangsan.name = &quot;张三&quot;;
		zhangsan.sno = &quot;201909001&quot;;
		zhangsan.score = 77;
		
		//学生：李四
		Student lisi = new Student(&quot;李四&quot;, &quot;201909002&quot;, 88);
		
		//学生：王五
		Student wangwu = new Student(&quot;王五&quot;, &quot;201909003&quot;, 99);
		
		//打印学生的信息
		zhangsan.print();
		lisi.print();
		wangwu.print();
		
		//设计一个方法，按照成绩从高到低的顺序输出姓名、学号和成绩信息
		Student[] array = new Student[]{zhangsan,lisi,wangwu};
		
		//比较两次
		for (int i = 1; i &lt; array.length; i++) {
			
			//每一次两两比较
			for (int j = 0; j &lt; array.length - i; j++) {
				if(array[j].score &lt; array[j+1].score)
				{
					Student temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
				}
			}
		}
		
		//打印学生信息
		for (Student student : array) {
			student.print();
		}
	}
}
//设计一个类Student
class Student{
	
	//该类包括姓名、学号和成绩
	String name;
	String sno;
	double score;
	
	//无参构造函数
	public Student()
	{
		
	}
	//重载带参数的构造函数
	public Student(String name,String sno,double score)
	{
		this.name = name;
		this.sno = sno;
		this.score = score;
	}
	
	//输出学生的信息
	public void print()
	{
		System.out.println(&quot;姓名:&quot; + name + &quot;\\t学号：&quot; + sno + &quot;\\t成绩：&quot; + score );
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06.lianxi;
/**
 * &lt;p&gt;Title: Point&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *     * 1、定义一个点类Point，
 *     包含2个成员变量x、y分别表示x和y坐标，
       2个构造器Point()和Point(int x0,int y0),
                      以及一个movePoint（int dx,int dy）方法实现点的位置移动，
           
                       创建两个Point对象p1、p2，分别调用movePoint方法后，打印p1和p2的坐标。[必作题]
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
//定义一个点类Point
public class Point {
	//包含2个成员变量x、y分别表示x和y坐标
		int x;
		int y;
		
		//2个构造器Point()和Point(int x0,int y0)
		public Point()
		{
			
		}
		public Point(int x0,int y0)
		{
			x = x0;
			y = y0;
		}
		
		//以及一个movePoint（int dx,int dy）方法实现点的位置移动
		public void movePoint(int dx,int dy)
		{
			x = x + dx;
			y = y + dy;
		}
		
		//  创建两个Point对象p1、p2，分别调用movePoint方法后，打印p1和p2的坐标
		public static void main(String[] args) {
			//先new对象，再赋值
			Point p1 = new Point();
			p1.x = 10;
			p1.y = 20;
			p1.movePoint(5, 5);
			System.out.println(p1.x + &quot;  &quot; + p1.y);
			
			//new对象的同时赋值
			Point p2 = new Point(30, 40);
			p2.movePoint(-5, -5);
			System.out.println(p2.x + &quot;  &quot; + p2.y);
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06.thisguanjianzi;
/**
 * &lt;p&gt;Title: ThisKey&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *     * this关键字:
		1.代表对象自身的引用
		2.指向调用该方法的当前对象
		3.通常在类的方法定义中使用

         用this关键字的情况
		1.方法中的变量与成员变量重名
		2.在一个构造器中，调用其它重载的构造器，且必须放在第一行
		3.返回当前对象的引用
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class ThisKey {
	//成员变量
		String name;
		String sex;
		
		//构造函数
		public ThisKey()
		{
			System.out.println(&quot;初始化系统的代码..............&quot;);
		}
		public ThisKey(String name)
		{
			//2.在一个构造器中，调用其它重载的构造器，且必须放在第一行
			this();
			
			//1.方法中的变量与成员变量重名
			this.name = name;
			//System.out.println(&quot;ThisKey(name):&quot; + this);//33d063fd
		}
		public ThisKey(String name,String sex)
		{
			//2.在一个构造器中，调用其它重载的构造器，且必须放在第一行
			this(name);
			
			//this.name = name;
			this.sex = sex;
		}
		
		//成员方法
		public void setName(String name)
		{
			//1.方法中的变量与成员变量重名
			this.name = name;
			//System.out.println(&quot;setName:&quot; + this);//33d063fd
		}
		
		//3.返回当前对象的引用
		public ThisKey getInstance()
		{
			return this;
		}
		
		public static void main(String[] args) {
			//ThisKey caixukun = new ThisKey(&quot;蔡徐坤&quot;);
			//caixukun.setName(&quot;球王蔡徐坤&quot;);
			//System.out.println(&quot;caixukun:&quot; + caixukun);//33d063fd
			
			ThisKey fengTiMo = new ThisKey(&quot;冯提莫&quot;, &quot;女&quot;);
			System.out.println(fengTiMo.name);
			System.out.println(fengTiMo.sex);
			
			//3.返回当前对象的引用
			ThisKey fengTiMoClone = fengTiMo.getInstance();
			System.out.println(fengTiMo);//33d063fd
			System.out.println(fengTiMoClone);//33d063fd
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter06.threebianliang;
/**
 * &lt;p&gt;Title: Variables&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *     * Java中主要有3种类型的变量：
		1.静态变量[静态区]：在类中声明为static 的属性。	     -- 老大，无私共享
		2.实例变量[堆内存]：即类的属性，也是全局变量。                          -- 老二，相对自私，所有东西自己专有
		3.局部变量[栈内存]：定义在方法体中的变量；或是方法的形参。  -- 老三，一直跟着方法跑，方法被调用，老三在，方法调用完成，老三不见了
		
		栈stack：栈的存取速度比堆快，效率高。在栈内保存基本数据类型的局部变量和对象的引用值。
		
		堆heap：堆可以保存那些对空间要求较大的变量。如对象的属性和数组的元素。
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Variables {
	//1.静态变量：在类中声明为static 的属性
		//         属于类级别的变量，在类被加载的时候即保存在内存，只要类存在，静态变量就存在，属于共享变量
		static double pi = 3.1415926;
		
		//2.实例变量：即类的属性，也是全局变量.
		//         属于对象级别的变量，在new对象的时候存在内存当中，只要对象存在，实例变量就存在，属于对象专有的变量
		String username;
		
		//3.局部变量：定义在方法体中的变量str；或是方法的形参prefix。
		//        当方法被调用时，局部变量即保存在内存中，当方法执行结束，局部变量生命周期结束
		public void setUsername(String prefix)
		{
			String str = &quot;球王&quot;;
			
			this.username = prefix + this.username;
		}
		
		/**
		 * 测试成员变量的默认值
		 * 			byte的默认值：0
					short的默认值：0
					int的默认值：0
					long的默认值：0
					
					float的默认值：0.0
					double的默认值：0.0
					
					char的默认值：---- ---

					boolean的默认值：false
					
					int[]的默认值：null
					Variables的默认值：null
		 */
		byte b;
		short s;
		int i;
		long l;
		float f;
		double d;
		char c;
		boolean bool;
		
		int[] array;
		Variables var;
		
		public void getDefaultValue()
		{
			System.out.println(&quot;byte的默认值：&quot; + b + &quot;\\n&quot;
					+ &quot;short的默认值：&quot; + s + &quot;\\n&quot;
					+ &quot;int的默认值：&quot; + i + &quot;\\n&quot;
					+ &quot;long的默认值：&quot; + l + &quot;\\n\\n&quot;
					
					+ &quot;float的默认值：&quot; + f + &quot;\\n&quot;
					+ &quot;double的默认值：&quot; + d + &quot;\\n\\n&quot;
					
					+ &quot;char的默认值：----&quot; + c + &quot;---\\n\\n&quot;
					
					+ &quot;boolean的默认值：&quot; + bool + &quot;\\n\\n&quot;
					
					+ &quot;int[]的默认值：&quot; + array + &quot;\\n&quot;
					+ &quot;Variables的默认值：&quot; + var + &quot;\\n&quot;
			);
		}
		
		public static void main(String[] args) {
			//有名对象一
			Variables caixunkun = new Variables();
			caixunkun.username = &quot;蔡徐坤&quot;;
			
			System.out.println(&quot;[蔡徐坤]:&quot; + caixunkun.pi); //3.1415926
			System.out.println(&quot;[蔡徐坤]:&quot; + caixunkun.username);//蔡徐坤
			
			//有名对象二
			Variables fengtimo = new Variables();
			fengtimo.pi = 3.14;
			fengtimo.username = &quot;冯提莫&quot;;
			
			System.out.println(&quot;[冯提莫]:&quot; + fengtimo.pi); //3.14
			System.out.println(&quot;[冯提莫]:&quot; + fengtimo.username);//冯提莫
			
			System.out.println(&quot;[蔡徐坤]:&quot; + caixunkun.pi); //3.14
			System.out.println(&quot;[蔡徐坤]:&quot; + caixunkun.username);//蔡徐坤
			
			//局部变量
			fengtimo.setUsername(&quot;网红---&quot;);
			System.out.println(fengtimo.username);
			
			//匿名对象：不定义对象的句柄，直接调用对象的方法，适用于对象只需要使用一次的场景
			new Variables().setUsername(&quot;球王&quot;);
			
			//测试默认值
			caixunkun.getDefaultValue();
			
		}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象基础</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ol><li>Java垃圾回收机制</li></ol><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,19);function p(g,q){const e=u("ExternalLinkIcon");return s(),t("div",null,[d(" more "),n("h1",c,[m,i(),n("a",b,[i("191-Java面向对象基础.md"),v(e)])]),o])}const y=l(r,[["render",p],["__file","191-Java面向对象基础.html.vue"]]);export{y as default};

import{_ as t,X as l,Y as s,a1 as d,Z as i,$ as n,a2 as v,a0 as a,F as r}from"./framework-68dd73a2.js";const u="/blog/assets/Java_190_1.png",c="/blog/assets/Java_190_2.png",m="/blog/assets/Java_190_3.png",b="/blog/assets/Java_190_4.png",o={},p={id:"_190-java的方法定义及调用-md",tabindex:"-1"},g=i("a",{class:"header-anchor",href:"#_190-java的方法定义及调用-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--190-Java-zk0mq86bs2uly1a9ktru0a8ie2t8h.md",target:"_blank",rel:"noopener noreferrer"},y=a('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><ul><li>方法的定义</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;
/**
 * &lt;p&gt;Title: _01MethodDingYi&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    语法：
		&lt;访问权限控制符&gt; &lt;修饰符&gt; 返回值类型   方法名称（参数类型  参数名称，参数类型   参数名称....）
		{
			方法体;
			return 返回值;
		}
		
		 访问权限控制符：public protected &lt;default&gt; private
		
		 修饰符：   static:表示方法可以被&quot;类名.方法名()&quot;直接调用
			   final :表示方法不可以被覆盖
			  
	             返回值类型：可以基本数据类型，也可以是引用类型，也可以没有返回值void
	             return后的返回值必须与返回值类型保持一致
	             
	              方法名称：camel驼峰法规则，首字母小写，其余单词的首字母大写，例如methodOne
	     
	              参数列表：可以没有参数，可以一个或多个参数参数，多个参数之间&quot;,&quot;逗号隔开
	                                  形式参数（形参）:定义在放后面的参数列表，用于指定参数类型与参数名称，告诉调用方法的人使用该方法时，应该传递什么类型的参数，例如add(int x,int y)中的x与y
	                                  实际参数（实参）:调用方法时，传递的实际的值，不需要指定类型，例如add(10, 20);中的10与20
	                                  
	    return语句：return后的返回值类型必须与返回值类型保持一致
	    		      如果返回值类型为void，return可以省略
	    		  return只能定义一次，且return之后的语句不在执行
	    	
		
	方法的分类：有无返回值，有无参数
		① 有返回值，有参数
		② 有返回值，无参数
		③ 无返回值，有参数
		④ 无返回值，无参数
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class _01MethodDingYi {

	/**
	 * &lt;p&gt;Title: add&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * ① 有返回值，有参数
	 * &lt;/p&gt;  
	 * @param x 参数一
	 * @param y 参数二
	 * @return x+y
	 */
	public static int add(int x,int y)
	{
		int sum = x + y;
		
		return sum;
	}
	
	/**
	 * &lt;p&gt;Title: minus&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * ② 有返回值，无参数
	 * &lt;/p&gt;  
	 * @return 差
	 * @return
	 */
	public static int minus()
	{
		int x = 20;
		int y = 10;
		
		int result = x - y;
		
		return result;
	}
	
	/**
	 * &lt;p&gt;Title: multiply&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * ③ 无返回值，有参数
	 * &lt;/p&gt;  
	 * @param x 参数一 
	 * @param y 参数二
	 */
	public static void multiply(double x,double y)
	{
		double result = x * y;
		
		System.out.println(&quot;求积：&quot; + result);
		
		//return;//可省略
	}
	
	/**
	 * &lt;p&gt;Title: divide&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 *     ④ 无返回值，无参数
	 * &lt;/p&gt;
	 */
	public static void divide()
	{
		int x = 20;
		int y = 10;
		
		int result = x / y;
		
		System.out.println(&quot;求商：&quot; + result);
	}
	
	public static void main(String[] args) {
		//① 有返回值，有参数
		int result = add(10, 20);
		System.out.println(&quot;求和：&quot; + result);
		
		//② 有返回值，无参数
		int result2 = minus();
		System.out.println(&quot;求差：&quot; + result2);
		
		//③ 无返回值，有参数
		multiply(10.5, 10.0);
		
		//④ 无返回值，无参数
		divide();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>值传递与引用地址传递</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.util.Arrays;

/**
 * &lt;p&gt;Title: _02ZhiChuanDiYuYingYongDiZhiChuanDi&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class _02ZhiChuanDiYuYingYongDiZhiChuanDi {
	/**
	 * 值传递 ---------基本数据类型与String字符串类型均为值传递，方法中对参数的修改，不会影响传递之前的变量值
	 */
	public static void getX(int x)
	{
		x = 6666;
		System.out.println(&quot;getX ：&quot; + x);//6666
	}
	
	/**
	 * 引用地址传递-------引用对象传递参数时，传递的为引用地址，方法中对参数的任意修改，将影响原参数的信息
	 */
	public static void getArray(int[] array)
	{
		array[4] = 888;
		
		System.out.println(&quot;getArray:&quot; + array);//[I@2d95bbec
		System.out.println(&quot;getArray:&quot; + Arrays.toString(array));//[1, 2, 3, 4, 888]
	}
	
	public static void main(String[] args) {
		//值传递 ---------基本数据类型与String字符串类型均为值传递，方法中对参数的修改，不会影响传递之前的变量值
		int x = 10;
		getX(x);
		
		System.out.println(&quot;main ：&quot; + x);//10
		
		//引用地址传递-------引用对象传递参数时，传递的为引用地址，方法中对参数的任意修改，将影响原参数的信息
		int[] array = new int[]{1,2,3,4,5};
		getArray(array);
		
		System.out.println(&quot;main:&quot; + array);//[I@2d95bbec
		System.out.println(&quot;main:&quot; + Arrays.toString(array));//[1, 2, 3, 4, 888]
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方法的重载</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;
/**
 * &lt;p&gt;Title: _03MethodOverrid&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    法的重载（reload）: 允许在一个类中定义一个以上同名的方法
		
		作用：调用同一类中，同一方法名，传入不同的参数，实现同一功能
		
		方法重载的规则：
			1.方法名一致
			2.参数类型不一致（参数类型不一致、参数个数不一致、参数顺序不一致）
			3.返回值类型可以一致，可以不一致
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class _03MethodOverrid {
	//加法
	public static int add(int x,int y)
	{
		int sum = x + y;
		
		return sum;
	}
	
	//加法：参数类型不一致
	public static double add(double x,double y)
	{
		double sum = x + y;
		
		return sum;
	}
	
	//加法：参数个数不一致
	public static int add(int x,int y,int z)
	{
		int sum = x + y + z;
		
		return sum;
	}
	
	//加法：参数顺序不一致
	public static double add(int x,double y)
	{
		double sum = x + y;
		
		return sum;
	}
	
	//加法：参数顺序不一致
	public static double add(double x,int y)
	{
		double sum = x + y;
		
		return sum;
	}
	
	public static void main(String[] args) {
		
		System.out.println(add(10, 20));
		
		System.out.println(add(10.15, 20.15));
		
		System.out.println(add(10, 20, 30));
		
		System.out.println(add(10, 22.22));
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java的方法定义及调用</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,21);function x(_,f){const e=r("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",p,[g,n(),i("a",h,[n("190-Java的方法定义及调用.md"),v(e)])]),y])}const S=t(o,[["render",x],["__file","index.html.vue"]]);export{S as default};

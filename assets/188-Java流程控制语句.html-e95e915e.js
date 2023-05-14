import{_ as e,X as s,Y as l,a1 as d,Z as t,$ as n,a2 as v,a0 as a,F as u}from"./framework-68dd73a2.js";const r="/blog/assets/Java_188_1.png",c={},m={id:"_188-java流程控制语句-md",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_188-java流程控制语句-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--188-Java-fy7m62l190dzcyac08ajl4c.md",target:"_blank",rel:"noopener noreferrer"},p=a('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><ul><li>if语句</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03;

import java.util.Scanner;

/**
 * &lt;p&gt;Title: IfYuJu_01&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class IfYuJu_01 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	/**
		单一条件判断：
			if(A表达式)
			{
				B语句块;
			}
			
			执行步骤：
				1.判断A表达式
					返回true,执行B语句块，结束判断
					返回false,结束判断
					
	 --------------------------------------------------------------
	 	两个条件：
	 		if(A表达式)
			{
				B语句块;
			}
			else
			{
				C语句块;
			}
			
			执行步骤：
				1.判断A表达式
					返回true,执行B语句块，结束判断
					返回false,执行C语句块,结束判断
	--------------------------------------------------------------
	 	多个条件：
	 		if(A表达式)
			{
				B语句块;
			}
			else if(C表达式)
			{
				D语句块;
			}
			.....
			else
			{
				N语句块;
			}
			
			执行步骤：
				1.判断A表达式
					返回true,执行B语句块，结束判断
					返回false,判断C表达式
				2.判断C表达式
					返回true,执行D语句块，结束判断
					返回false,判断N表达式
				......
				3.如果以上表达式均返回false,默认执行N语句块，结束判断
				
		注意：如果，大括号中，只有一条语句，则可以省略大括号（不建议省略）
	 
	 *
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//扫描仪
				Scanner scanner = new Scanner(System.in);
				
				//扫描控制台一行数据（以回车作为结束判断）
				System.out.println(&quot;请输入您的年龄：&quot;);
				int num = scanner.nextInt();
				
				/**
				 * if ： 如果年龄大于0，输出&quot;您的年龄为：N&quot;，否则，不作响应
				 */
				if(num &gt; 0)
				{
					//System.out.println(&quot;您的年龄为：&quot; + num);
				}
				
				/**
				 * if....else... :  如果年龄大于0，输出&quot;您的年龄为：N&quot; ; 否则，输出&quot;年龄不能小于等于0&quot;
				 */
				if(num &gt; 0)
				{
					System.out.println(&quot;您的年龄为：&quot; + num);
				}
				else
				{
					System.out.println(&quot;年龄不能小于等于0&quot;);
				}
				
				/**
				 * if...else if....else if ....else:
				 * 
				 * 		输入一个学生的成绩，
				 * 			如果成绩大于等于90，输出&quot;优秀&quot;
				 * 			如果成绩大于等于80，小于90，输出&quot;良好&quot;
				 * 			如果成绩大于等于60，小于80，输出&quot;及格&quot;
				 * 			否则，输出&quot;不及格，请继续深造&quot;
				 */
				//扫描一行数据
				System.out.println(&quot;请录入学员的成绩：&quot;);
				double score = scanner.nextDouble();
				
				//如果成绩大于等于90，输出&quot;优秀&quot;
				if(score &gt;= 90)
				{
					System.out.println(&quot;优秀&quot;);
				}
				//如果成绩大于等于80，小于90，输出&quot;良好&quot;
				else if(score &gt;= 80 &amp;&amp; score &lt; 90)
				{
					System.out.println(&quot;良好&quot;);
				}
				//如果成绩大于等于60，小于80，输出&quot;及格&quot;
				else if(score &gt;= 60 &amp;&amp; score &lt; 80)
				{
					System.out.println(&quot;及格&quot;);
				}
				//否则，输出&quot;不及格，请继续深造&quot;
				else
				{
					System.out.println(&quot;不及格，请继续深造&quot;);
				}
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>switch 语句</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03;
/**
 * &lt;p&gt;Title: SwitchYuju_02&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class SwitchYuju_02 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
		  switch(A表达式)
		  {
		  	   case 取值1：
			  	   		B语句块;
			  	   		break;
			   case 取值2：
			  	   		C语句块;
			  	   		break;
			   .....
			   default:
			   	   N语句块;
		  
		  }
		  
		  注意：
		  	1. switch(A表达式)中的A表达式只能接收byte、short、char、int、long类型,JDK1.7版本以上可以接收String类型
		  	2. case的取值不能重复
		  	3. 如果不使用break,一旦某个case的表达式符合条件，后续所有的case后的语句都会判断执行，所以慎重考虑是否需要使用break语句；
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		/**
	 	如果周一~周五，输出&quot;写代码使我高兴，写代码使我兴奋！！！&quot;
	 	如果周六~周日，输出&quot;放假使我难过，不能写代码！！！&quot;
		 */
		int weekday = 2;
		//方式一
		switch(weekday)
		{
			//如果周一~周五，输出&quot;写代码是我高兴，写代码使我兴奋！！！&quot;
			case 1:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---1&quot;);
				break;
			case 2:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---2&quot;);
				break;
			case 3:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---3&quot;);
				break;
			case 4:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---4&quot;);
				break;
			case 5:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---5&quot;);
				break;
			case 6:
				System.out.println(&quot;放假使我难过，不能写代码！！！---6&quot;);
				break;
			case 7:
				System.out.println(&quot;放假使我难过，不能写代码！！！---7&quot;);
				break;
		}
		//方式二
		switch(weekday)
		{
			//如果周一~周五，输出&quot;写代码是我高兴，写代码使我兴奋！！！&quot;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---1、2、3、4、5&quot;);
				break;
			case 6:
			case 7:
				System.out.println(&quot;放假使我难过，不能写代码！！！---6、7&quot;);
				break;
		}
		//方式三
		switch(weekday)
		{
			//如果周一~周五，输出&quot;写代码是我高兴，写代码使我兴奋！！！&quot;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---1、2、3、4、5&quot;);
				break;
			default:
				System.out.println(&quot;放假使我难过，不能写代码！！！---6、7&quot;);
				break;
		}
		//方式四
		switch(weekday)
		{
			case 6:
			case 7:
				System.out.println(&quot;放假使我难过，不能写代码！！！---6、7&quot;);
				break;	
			default:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---1、2、3、4、5&quot;);
				break;
		}
		
		//JDK1.7版本以上可以接收String类型
		String week = &quot;星期六&quot;;
		switch(week)
		{
			case &quot;星期六&quot;:
			case &quot;星期天&quot;:
				System.out.println(&quot;放假使我难过，不能写代码！！！---6、7&quot;);
				break;	
			default:
				System.out.println(&quot;写代码使我高兴，写代码使我兴奋！！！---1、2、3、4、5&quot;);
				break;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>while与doWhile语句</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03;

import java.util.Scanner;

public class WhileYuDoWhileYujU_03 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	while(A表达式)
		{
		   B语句块;
		}
		
		执行步骤：
			1.判断A表达式
				返回true，执行B语句块，重复执行步骤1
				返回false，结束循环。
	
		-------------------------------------------------
		
		do{
		
		   B语句块;
		   
		}while(A表达式);//分号必须有
		
		执行步骤：
			1.B语句块
			2.判断A表达式
				返回true，执行B语句块，重复执行步骤1
				返回false，结束循环。
				
				
	    while:     先判断，再执行
	    do...while:先执行一次，再判断执行
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//使用while循环打印1~10之间的整数
				int num = 1;
				while(num &lt;= 10)
				{
					System.out.println(num);
					num++;
				}
				
				//使用do....while循环打印1~10之间的整数
				int num2 = 1;
				do{
					System.out.println(num2);
					num2++;
					
				}while(num2 &lt;= 10);//分号必须有
				
				//死循环
				/*while(true)
				{
					System.out.println(&quot;陷入死循环....&quot;);
				}*/
				
				int num3 = 1;
				while(num3 &lt;= 10)
				{
					System.out.println(num3);
					//num++;//忘记添加自增条件
				}
				
				//死循环
				while(true)
				{
					//扫描仪
					Scanner scanner = new Scanner(System.in);
					
					//扫描控制台一行数据（以回车作为结束判断）
					String message = scanner.nextLine();
					
					//当用户输入&quot;exit&quot;，退出循环
					if(&quot;exit&quot;.equals(message))
					{
						System.out.println(&quot;我走了................&quot;);
						break;
					}
					else
					{
						System.out.println(&quot;&gt;&gt;&gt;&gt;:&quot; + message);
					}
				}
				
				//计算从1到100的所有奇数相加（提示利用do...while语句）
				/*int x = 1;
				int sum = 0;
				do{
					sum = sum + x;
					x += 2;
					
				}while(x &lt;= 100);
				
				System.out.println(&quot;sum:&quot; + sum);*/
				
				int x = 1;
				int sum = 0;
				do{
					if(x%2 == 1)
					{
						sum = sum + x;
					}
					x++;
					
				}while(x &lt;= 100);
				
				System.out.println(&quot;sum:&quot; + sum);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>for语句</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03;
/**
 * &lt;p&gt;Title: ForYuJu_04&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class ForYuJu_04 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 *    for(A初始化表达式；B循环条件表达式；D后的操作表达式)
		{
		         C执行语句块;
		}
		
		A初始化表达式
	 	B循环条件表达式
		C执行语句块 :1
		-----------------------------
		D后的操作表达式
		B循环条件表达式
		C执行语句块 :2
		-----------------------------
		D后的操作表达式
		B循环条件表达式
		C执行语句块 :3
		-----------------------------
		D后的操作表达式
		B循环条件表达式，判断不符合条件，终止循环
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//使用while循环打印1~10之间的整数
				/*int num = 1;
				while(num &lt;= 10)
				{
					System.out.println(num);
					num++;
				}*/
				
				//for循环打印1~10之间的整数
				for(int num=1;num &lt;= 10;num++)
				{
					System.out.println(num);
				}
				
				//测试for循环的执行步骤
				int num = 1;
				for(System.out.println(&quot;A初始化表达式&quot;);num &lt;= 3;System.out.println(&quot;D后的操作表达式&quot;))
				{
					System.out.println(&quot;C执行语句块 :&quot; + num);
					num++;
					
					System.out.println(&quot;-----------------------------&quot;);
				}
				
				//死循环
				/*while(true)
				{
					System.out.println(&quot;死循环&quot;);
				}*/
				
				/*for(int k = 1;k &lt;= 10;)
				{
					//System.out.println(k);
				}*/
				
				/*for(int k = 1; ;k++)
				{
					System.out.println(k);
				}*/
				
				//嵌套循环
				/*
				 	1.九九乘法表
				 		1*1=1	
						1*2=2	2*2=4	
						1*3=3	2*3=6	3*3=9	
						1*4=4	2*4=8	3*4=12	4*4=16	
						1*5=5	2*5=10	3*5=15	4*5=20	5*5=25	
						1*6=6	2*6=12	3*6=18	4*6=24	5*6=30	6*6=36	
						1*7=7	2*7=14	3*7=21	4*7=28	5*7=35	6*7=42	7*7=49	
						1*8=8	2*8=16	3*8=24	4*8=32	5*8=40	6*8=48	7*8=56	8*8=64	
						1*9=9	2*9=18	3*9=27	4*9=36	5*9=45	6*9=54	7*9=63	8*9=72	9*9=81	
								 		
				 	2.
				 		*****
				 		*****
				 		*****
				 		*****
				 		
				 	3. 
				 		*****
				 		****
				 		***
				 		**
				 		*
				    
				    4.
				    	*****
				    	 ****
				    	  ***
				    	   **
				    	    *
				 	
				    5.
				    	 *
				    	***
				       *****
				        ***
				         *
				    6.
				    	 *
				    	***
				       *****
				         *
				    	***
				       *****
				      *******
				      	 *
				      	 *
				      	 *
				      	 *	
				 */
				//1.遍历九次
				for (int i = 1; i &lt;= 9; i++) {
					//2.每次遍历i次
					for (int j = 1; j &lt;= i; j++) {
						System.out.print(j + &quot;*&quot; + i + &quot;=&quot; + (j*i) + &quot;\\t&quot;);
					}
					System.out.println();
				}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>终止循环</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03;

import java.util.Scanner;

/**
 * &lt;p&gt;Title: ZhongZhiXunHuan_05&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class ZhongZhiXunHuan_05 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 *    break:终止整个循环
	 	continue:终止当次循环，程序继续执行下一次循环
	 	
	 	break label:终止指定名称的循环
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//break:终止整个循环
				for (int i = 1; i &lt;= 10; i++) {
					
					if(i%4 == 0)
					{
						break;//终止整个循环
					}
					
					System.out.println(i);
				}//1 2 3
				
				
				//continue:终止当次循环，程序继续执行下一次循环
				for (int i = 1; i &lt;= 10; i++) {
					
					if(i%4 == 0)
					{
						continue;//终止当次循环，程序继续执行下一次循环
					}
					
					System.out.println(i);
				}//1 2 3 5 6 7 9 10
				
				
				//break label:终止指定名称的循环
				outer:for (int i = 1; i &lt;= 10; i++) {
					System.out.println(&quot;outer:&quot; + i);
					
					inner:while(true)
					{
						Scanner scanner = new Scanner(System.in);
						String message = scanner.nextLine();
						
						System.out.println(&quot;inner:&quot; + message);
						
						if(&quot;exit inner&quot;.equals(message))
						{
							break inner;//退出内部循环
						}
						else if(&quot;exit outer&quot;.equals(message))
						{
							break outer;//退出外部循环
						}
					}
				}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java流程控制语句</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ol><li>Eclipse 导包快捷键 ctrl + shift + O</li></ol><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,23);function q(g,h){const i=u("ExternalLinkIcon");return s(),l("div",null,[d(" more "),t("h1",m,[b,n(),t("a",o,[n("188-Java流程控制语句.md"),v(i)])]),p])}const f=e(c,[["render",q],["__file","188-Java流程控制语句.html.vue"]]);export{f as default};

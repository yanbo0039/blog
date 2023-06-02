import{_ as e,X as s,Y as l,a1 as d,Z as n,$ as t,a2 as a,a0 as v,F as r}from"./framework-68dd73a2.js";const u="/blog/assets/Java_187_1.png",m="/blog/assets/Java_187_2.png",c="/blog/assets/Java_187_3.png",b="/blog/assets/Java_187_4.png",o="/blog/assets/Java_187_5.png",p="/blog/assets/Java_187_6.png",g="/blog/assets/Java_187_7.png",f="/blog/assets/Java_187_8.png",y="/blog/assets/Java_187_9.png",S="/blog/assets/Java_187_10.png",_="/blog/assets/Java_187_11.png",x="/blog/assets/Java_187_12.png",h="/blog/assets/Java_187_13.png",q="/blog/assets/Java_187_14.png",J="/blog/assets/Java_187_15.png",z={},F={id:"_187-java运行符-md",tabindex:"-1"},B=n("a",{class:"header-anchor",href:"#_187-java运行符-md","aria-hidden":"true"},"#",-1),T={href:"http://xn--187-Java-9x4u633hxjr.md",target:"_blank",rel:"noopener noreferrer"},X=v('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+J+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;
/**
 * &lt;p&gt;Title: YunSuanFun_05&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class YunSuanFun_05 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		/**
		 * 算数运算符
		 */
		// + 可以为加法运算符  ，也可以为字符串拼接符号
		int num = 10;
		int num2 = 20;
		System.out.println(num + num2);   //30
		System.out.println(num + num2 + &quot;AB&quot;);//30AB
		System.out.println(&quot;AB&quot; + num + num2);//AB1020
		
		// /除法:  若是两个整数相除，只保留整数部分
		int num3 = 10;
		int num4 = 3;
		int result = num3/num4;
		System.out.println(result);//3
		
		
		float num5 = 10;
		int num6 = 3;
		float result2 = num5/num6;
		System.out.println(result2);//3.3333333
		
		// % 取余，求模: 被模数为正，结果为正，被模数为负，结果为负
		System.out.println(10%3);  //1
		System.out.println(10%-3); //1
		System.out.println(-10%3); //-1
		System.out.println(-10%-3);//-1
		
		// ++ 自增    num++，先计算，再加1，++num，先加1，再计算
		int num7 = 10;
		System.out.println(num7++);//10
		System.out.println(num7);  //11
		
		// -- 自减    num--，先计算，再减1，--num，先减1，再计算
		int num8 = 20;
		System.out.println(--num8);//19
		System.out.println(num8);  //19
		
		/**
		 * 赋值运算符
		 */
		int x = 10;
		int y = 20;
		
		// +=,等同于 x = x+y
		x += y;
		System.out.println(x);//30
		
		// -=,等同于 x = x-y
		x -= y;
		System.out.println(x);//10
		
		// *=,等同于 x = x*y
		x *= y;
		System.out.println(x);//200
		
		// /=,等同于 x= x/y
		x /= y;
		System.out.println(x);//10
		
		/**
		 * 关系运算符（比较运算符）:
		 * 		&quot;==&quot;判断是否相等，不要写成 &quot;=&quot;赋值运算符
		 *      &quot;!=&quot;判断是否不相等，不要写成&quot;&lt;&gt;&quot;SQL语法
		 */
		int num9 = 10;
		int num10 = 20;
		System.out.println(num9 = num10); //20
		System.out.println(num9 == num10);//true
		
		System.out.println(num9 != num10);//false
		//System.out.println(num9 &lt;&gt; num10);//错误
		
		/**
		 * 逻辑运算符（布尔运算符）
		 */
		// &amp;&amp;(and):所有条件返回true，结果才为true,只要任意结果为false,结果即为false
		System.out.println(true &amp;&amp; true); //true
		System.out.println(true &amp;&amp; false);//false
		System.out.println(false &amp;&amp; true);//false   短路运算
		System.out.println(false &amp;&amp; false);//false  短路运算
		
		//短路运算
		int num11 = 10;
		boolean result3 = (num11 &gt; 20) &amp;&amp; (++num11 &gt;= 11);
		System.out.println(num11);   //10
		System.out.println(result3); //false
		
		// ||(or) :只要任意结果为true,结果即为true，如果所有条件返回false,结果才为false
		System.out.println(true || true); //true 短路运算
		System.out.println(true || false);//true 短路运算
		System.out.println(false || true);//true  
		System.out.println(false || false);//false  
		
		// ! (not)：对原有的结果取反
		System.out.println(!true); //false
		System.out.println(!false);//true
		
		/**
		 * 位运算(只对byte、short、char、int、long有效)
		 */
		// &amp; :所有条件返回true，结果才为true,只要任意结果为false,结果即为false
		System.out.println(true &amp; true); //true
		System.out.println(true &amp; false);//false
		System.out.println(false &amp; true);//false   非短路运算
		System.out.println(false &amp; false);//false  非短路运算
		
		//非短路运算
		int num12 = 10;
		boolean result4 = (num12 &gt; 20) &amp; (++num12 &gt;= 11);
		System.out.println(num12);   //11
		System.out.println(result4); //false
		
		//位运算   1 true   0 false
		System.out.println(1 &amp; 1);//1
		System.out.println(1 &amp; 0);//0
		System.out.println(0 &amp; 1);//0   非短路运算
		System.out.println(0 &amp; 0);//0  非短路运算
		
		// |:只要任意结果为true,结果即为true，如果所有条件返回false,结果才为false
		System.out.println(true | true); //true 非短路运算
		System.out.println(true | false);//true 非短路运算
		System.out.println(false | true);//true  
		System.out.println(false | false);//false 
		
		//位运算   1 true   0 false
		System.out.println(1 | 1);//1
		System.out.println(1 | 0);//1
		System.out.println(0 | 1);//1   非短路运算
		System.out.println(0 | 0);//0  非短路运算
		
		/**
		 *  逻辑运算符（&amp;&amp; 、||）与位运算符（&amp; 、|） 的异同点：
		 *  	
		 *     相同点：都可以进行逻辑运算
		 *     
		 *     不同点：
		 *     		① 做逻辑运算时，逻辑运算符（&amp;&amp; 、||）可以做短路运算，位运算符（&amp; 、|）不可以做短路运算，逻辑运算符效率 &gt; 位运算符效率
		 * 
		 * 			② 位运算符可以做按位运算，但是逻辑运算符不可以
		 */
		
		// ^ 异或运算符，两者不同返回true,两者相同返回false
		System.out.println(true ^ true); //false
		System.out.println(true ^ false);//true
		System.out.println(false ^ true);//true  
		System.out.println(false ^ false);//false 
		
		//位运算   1 true   0 false
		System.out.println(1 ^ 1);//0
		System.out.println(1 ^ 0);//1
		System.out.println(0 ^ 1);//1   
		System.out.println(0 ^ 0);//0 
		
		//按位运算，按位与 &amp;、按位或 |、按位异或^
		int num13 = 3;
		int num14 = 4;
		
		System.out.println(num13 &amp; num14);//0
		System.out.println(num13 | num14);//7
		System.out.println(num13 ^ num14);//7
		
		//3 0 0 1 1
		//4 0 1 0 0
		
		//&amp; 0000   | 0111    ^ 0111
		
		/**
		 * 左移和右移运算相当于实现整数乘以或除以2的n次方
		 */
		// &lt;&lt; 左移位,将整数的二进制值，往左移动指定N位，右边空出位置默认补0
		int num15 = 4;
		System.out.println(num15 &lt;&lt; 2);//num14 * 2^2 = 16
		
		// &gt;&gt; 右移位:a&gt;&gt;b,将a的二进制数据右移b位，如果最高位是0（正数），则左边移空的部分补0，如果最高位是1（负数），则左边移空的部分补1
		int num16 = 4;
		System.out.println(num16 &gt;&gt; 2);//num16 / 2^2 = 1
		
		int num17 = -4; //1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1100
		System.out.println(num17 &gt;&gt; 2);//-1
		
		// &gt;&gt;&gt; 无符号右移位:a&gt;&gt;&gt;b,将a的二进制数据右移b位，左边移空的部分补0，
		int num18 = -4; //1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1111 1100
		System.out.println(num18 &gt;&gt;&gt; 2);//1073741823
		
		/**
		 * 思考：MD5加密算法：
		 * 		123456 -&gt; 加密  -&gt; 16个字节的数组[-8,34,-12,....] -&gt; 将长度为16的字节表示成32位的十六进制字符串  -&gt; F834567890ABCDEF1234567890ABCDEF
		 * 
		 * 		 34: 0010 0010  -&gt; 表示为2个十六进制值  ——&gt;0010 (2)   0010(2)
		 * 		123: 0111 1011  -&gt; 表示为2个十六进制值  ——&gt;0111 (7)   1011(A)
		 */
		byte b = -8;
		
		//二进制
		System.out.println(Integer.toBinaryString(b));      //  111111111111111111111111 1111 1000
		System.out.println(Integer.toBinaryString(b &gt;&gt;&gt; 4));//  111111111111111111111111 1111 --无符号右移四位，将左边四位移出
														    //&amp; 000000000000000000000000 1111 ---与十六进制F做与运算，为了去除前面所有的1
														    //  000000000000000000000000 1111
		System.out.println(Integer.toBinaryString(b &gt;&gt;&gt; 4 &amp; 0XF));//1111  左边四位
		System.out.println(Integer.toBinaryString(b &amp; 0XF));//  111111111111111111111111 1111 1000
													  		//&amp; 000000000000000000000000 0000 1111 ---与十六进制F做与运算，为了去除前面所有的1
													        //  000000000000000000000000 0000 1000 
														    //  1000   右边的四位
		//十进制
		System.out.println(b &gt;&gt;&gt; 4 &amp; 0XF); //15
		System.out.println(b &amp; 0XF);       //8
		
		//十六进制
		System.out.println(Integer.toHexString(b &gt;&gt;&gt; 4 &amp; 0XF));//f  左边四位
		System.out.println(Integer.toHexString(b &amp; 0XF));      //8     右边四位
		
		
		 /**
		  * 三元运算符：表达式1?表达式2：表达式3
		  */
		/*System.out.println(5 &gt; 3 ? true : false);//true
		System.out.println(5 &lt; 3 ? &quot;是的&quot; : &quot;不是的&quot;);//不是的
		
		//二元运算符：= &lt; + &amp;&amp;等
		System.out.println(5 + 3);//8
		
		//一元运算符: ! 
		System.out.println(!true);//false
		System.out.println(++num18);//3*/
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习题" tabindex="-1"><a class="header-anchor" href="#练习题" aria-hidden="true">#</a> 练习题</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02.lianxiti;
/**
 * &lt;p&gt;Title: LianXiTi&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class LianXiTi {
	/**
	 * &lt;p&gt;Title: intSum&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * 2、给定一个0～1000的整数，求各位数的和，例如345的结果是3+4+5＝12 
	 *    注：分解数字既可以先除后模也可以先模后除（知识点：变量和运算符综合应用） [必做题]
	 * &lt;/p&gt;  
	 * @param num
	 */
	private void intSum(int num) {
		//1.给定一个0～1000的整数
//				int num = 345;
				
				//2.求得各位数
				int one = num % 10;//个位 5
				int two = num /10 % 10 ;//十位 
				int three = num /100;//百位
				
				//3.求各位数的和
				System.out.println(one);
				System.out.println(two);
				System.out.println(three);
				
				System.out.println(one + two +three);
	}

	/**
	 * &lt;p&gt;Title: tempConversion&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * 3、华氏温度和摄氏温度互相转换，从华氏度变成摄氏度你只要减去32，乘以5再除以9就行了，
	 *                      将摄氏度转成华氏度，直接乘以9，除以5，再加上32即行。[选做题]
	 * &lt;/p&gt;  
	 * @param degree
	 */
	private void tempConversion(int degree) {
		// TODO Auto-generated method stub
		//华氏温度
//		int degree= 93;
		
		//华氏温度 -&gt; 摄氏温度
		double degree2 = (degree - 32) * 5 /9.0;
		
		System.out.println(&quot;华氏温度：&quot; + degree);
		System.out.println(&quot;摄氏温度：&quot; + degree2);
		
		//--------------------------------------------------------------
		//摄氏温度
		int degree3 = 34;
		
		//摄氏温度 -&gt; 华氏温度
		double degree4 = degree3 * 9 / 5.0 + 32;
		
		System.out.println(&quot;摄氏温度：&quot; + degree3);
		System.out.println(&quot;华氏温度：&quot; + degree4);
	}

	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;
	 * @param args
	 */
	public static void main(String[] args) {
		LianXiTi lxt = new LianXiTi();
		lxt.intSum(345);
		lxt.tempConversion(93);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java运行符</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,25);function D(A,I){const i=r("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",F,[B,t(),n("a",T,[t("187-Java运行符.md"),a(i)])]),X])}const C=e(z,[["render",D],["__file","java187.html.vue"]]);export{C as default};

import{_ as l,X as s,Y as a,a1 as d,Z as n,$ as i,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_185_1.png",o="/blog/assets/Java_185_2.png",u="/blog/assets/Java_185_3.png",b="/blog/assets/Java_185_4.png",m="/blog/assets/Java_185_5.png",g="/blog/assets/Java_185_6.png",h={},p={id:"_185-java数据类型-md",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_185-java数据类型-md","aria-hidden":"true"},"#",-1),f={href:"http://xn--185-Java-fz7n346gsvetw4f.md",target:"_blank",rel:"noopener noreferrer"},y=r('<h4 id="四类八种数据类型" tabindex="-1"><a class="header-anchor" href="#四类八种数据类型" aria-hidden="true">#</a> 四类八种数据类型</h4><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;
/**
 * &lt;p&gt;Title: DataType_03&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月2日
 */
public class DataType_03 {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		/**
		 * 4类8种基本数据类型：
		 * 		整数类型：byte short int（默认） long
		 *      浮点类型：float  double（默认）
		 *      字符类型：char
		 *      布尔类型：boolean
		 * 
		 * 1. 整数类型 — byte字节类型  、    short短整型 、       int整型（默认）、      long长整型
		 *              1字节                            2字节                       4字节                                 8字节
		 *              
		 *           1字节 = 8位     1byte = 8bit
		 *           
		 */
		//byte，取值范围-128~127之间
		byte b = 126;
		//byte b2 = 128;//数字溢出
		
		//short
		short s = 12812;
		
		//int(默认)
		int i = 1234567890;
		
		//long  需要在末尾添加大写&#39;L&#39;或小写&#39;l&#39;
		long l = 1234567890123456789L;  //0-9  十进制，第一位不能为0
		long l2 = 0X1AB459F;			//0-9 A-F 十六进制，以0x或0X开头
		long l3 = 01234567L;		    //0-7  八进制，以0开头
		
		System.out.println(Long.MIN_VALUE + &quot;   &quot; + + Long.MAX_VALUE);//-9223372036854775808   9223372036854775807
		
		//十进制转二进制（了解）
		int num = 10;//1010
		
		//二进制转十进制
		//1010 = 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0 = 8 + 0 + 2 + 0 = 10
		
		/**
		 * 2. 浮点数类型 — float 单精度  、   double 双精度（默认）

		 *              4字节                                     8字节
		 */
		//float  需要在末尾添加大写&#39;F&#39;或小写&#39;f&#39;
		float f = 123456.789F;
		
		//double
		double d = 1234567890.123456;
		
		/**
		 * 3. 字符类型 -   char
		 * 				2字节
		 * 
		 * 	   char字符类型使用&#39;&#39;单引号括起来 ，String字符串类型使用&quot;&quot;双引号括起来
		 */
		char c = &#39;a&#39;;  //a
		char c2 = &#39;1&#39;; //1
		char c3 = &#39;中&#39;; //中
		char c4 = 97;      //a   ascii码表   48~57表示数字 0-9   65~90表示大写字母A-Z   97~122表示小写字母a-z
		char c5 = &#39;\\n&#39;;    //转义字符
		char c6 = &#39;\\u9FA5&#39;;//龥       unicode编码表   4E00-9FA5表示基本的汉字范围
		
		System.out.println(c);
		System.out.println(c2);
		System.out.println(c3);
		System.out.println(c4);
		System.out.println(c5);
		System.out.println(c6);
		System.out.println(&quot;\\&quot;happy \\t new \\n year!!\\&quot;&quot;);
		
		/**
		 * 4. 布尔类型  boolean:true   false
		 */
		boolean b3 = true;
		boolean b4 = false;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java数据类型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>`,14),x={href:"https://jingyan.baidu.com/article/d5c4b52b81d95e9b570dc500.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://jingyan.baidu.com/article/4ae03de34a0fb97ffe9e6b6c.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://baike.baidu.com/link?url=wsBvBkXxPVkGRFD5JWYDpysklpQ8mOQVsw20Oz49vMgTJYkgquAtPwFF1T2V0EtB7u9l1EyjHb8_mOSSnIrE_a",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.cnblogs.com/straybirds/p/6392306.html",target:"_blank",rel:"noopener noreferrer"},A=n("hr",null,null,-1),F=n("p",null,"分割线",-1),V=n("hr",null,null,-1),q=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function z(E,L){const e=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),n("h1",p,[_,i(),n("a",f,[i("185-Java数据类型.md"),t(e)])]),y,n("ol",null,[n("li",null,[n("a",x,[i("十进制转二进制"),t(e)])]),n("li",null,[n("a",k,[i("二进制、八进制、十进制、十六进制之间转换"),t(e)])]),n("li",null,[n("a",J,[i("ASCII"),t(e)])]),n("li",null,[n("a",S,[i("汉字unicode编码范围"),t(e)])])]),A,F,V,q])}const j=l(h,[["render",z],["__file","java185.html.vue"]]);export{j as default};

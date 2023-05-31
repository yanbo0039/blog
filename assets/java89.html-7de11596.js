import{_ as s,X as l,Y as d,a1 as a,Z as n,$ as i,a2 as t,a0 as v,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_89_1.png",u="/blog/assets/Java_89_2.png",m={},b={id:"_89-java数组-md",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_89-java数组-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--89-Java-r02ou73p.md",target:"_blank",rel:"noopener noreferrer"},g=v(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class TestArray1 {

	public static void main(String[] args) {

		//声明一个变量a，整数数组类型
		int[] a = {12,23,44,55,66};
		//声明一个变量b，String数组类型
		String[] b = {&quot;abc&quot;,&quot;124&quot;,&quot;666&quot;};
		
		double[] c = {12.34,45.66,77.890,99};
		
		char[] d = {&#39;中&#39;,&#39;a&#39;,&#39;\\n&#39;,&#39;\\u1234&#39;,123};
		
		Student stu1 = new Student();
		
		Student stu2 = new Student();
		
		Student[] e = {stu1,stu2};
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
* 1,2,3
* 4,5,6
* 7,8,9
* 
* 56,67,345
*/
int[] k = {56,67,345};//一维数组

int[][] y = {{1,2,3},{4,5,6},{7,8,9}};//多维数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="各类数组初始化报的默认值-如何输出数组中的元素" tabindex="-1"><a class="header-anchor" href="#各类数组初始化报的默认值-如何输出数组中的元素" aria-hidden="true">#</a> 各类数组初始化报的默认值&amp;如何输出数组中的元素</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

import java.util.Arrays;

public class Test一维数组 {

	public static void main(String[] args) {

		/**
		 * 1、如何声明一个数组
		 * 2、如何给数组赋值
		 * 3、如何访问数组
		 * 4、如何对数组进行增删改查
		 */
		//数组的创建以及增删改查
		//1、声明一个数组并赋值
		
		int[] a;//√
		int b[];//不推荐
		
		//2.数组的初始化
		int[] c = {1,2,300,567};//声明和初始化同时进行
		
		//怎样把数组c中的所有元素打印输出到控制台？Arrays.toString(c)
		System.out.println(Arrays.toString(c));//[1,2,300,567]
		for (int i = 0; i &lt; c.length; i++) {//i : 0-3
			System.out.println(&quot;数组c中的元素： &quot; +c[i]);
		}
		
		int[] d = new int[6];//声明和初始化同时进行，只不过数组中的各个元素的值是0
		
		System.out.println(d[4]);//0
		
		double[] e = new double[4];
		
		System.out.println(e[2]);//0.0
		
		boolean[] f = new boolean[3];
		
		System.out.println(f[0]);//false
		
		String[] s = new String[5];
		
		System.out.println(s[2]);//null
		
		char[] h = new char[7];
		System.out.println(h[6]);//&#39;&#39; 空格
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组的增删除改查-o数组的拷贝" tabindex="-1"><a class="header-anchor" href="#数组的增删除改查-o数组的拷贝" aria-hidden="true">#</a> 数组的增删除改查&amp;o数组的拷贝</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

import java.util.Arrays;

public class TestArrayCRUD {

	public static void main(String[] args) {

		/**
		 * CRUD:增删改查
		 * 数组的增删改查
		 * 1.数组的元素的添加
		 * 2.数组的元素的删除，同修改
		 * 3.数组的元素的修改，同删除操作
		 * 4.查询:通过索引访问数组中的元素
		 */
		//1、数组的元素的添加是不可能的，因为数组一但初始化长度不能改变
		int[] a = new int[3];
		
	    //a[3] = 23;//抛出异常，索引越界异常
		
		int[] b = {1234,456,789};
		//如何删除789这个元素？
		b[2] = 0;//也不能删除，只能更改其值
		System.out.println(Arrays.toString(b));//[1234,456,0]
		//========================================
		int[] p = {123,456,789};
		int[] z;
		//需求：如何把p数组中的元素全部放入z数组？
		//方案一：
		z = new int[p.length];
		
//		for (int i = 0; i &lt; z.length; i++) {
//			z[i] = p[i];
//		}
//		System.out.println(Arrays.toString(z));//[123, 456, 789]
		
		//方案二：
		System.arraycopy(p, 0, z, 0, 3);//源数组 ，源数组开始下标，目标数组，目标数组开始下标，需要复制多少个[123, 456, 789]
		System.out.println(Arrays.toString(z));
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拓展知识：</strong></p>`,9),h={href:"https://www.imooc.com/wiki/detail/id/1968",target:"_blank",rel:"noopener noreferrer"},_=n("em",null,"Java数组的声明及初始化",-1),f={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},x=n("hr",null,null,-1),S=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),y=n("hr",null,null,-1),w=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(z,A){const e=r("ExternalLinkIcon");return l(),d("div",null,[a(" more "),n("h1",b,[o,i(),n("a",p,[i("89-Java数组.md"),t(e)])]),g,n("p",null,[n("a",h,[i("Java数组"),t(e)])]),n("p",null,[n("strong",null,[i("以上就是我关于 "),_,i(" 知识点的整理与总结的全部内容，"),n("a",f,[i("另附源码"),t(e)])])]),x,S,y,w])}const q=s(m,[["render",k],["__file","java89.html.vue"]]);export{q as default};

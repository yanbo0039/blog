import{_ as e,X as s,Y as l,a1 as d,Z as t,$ as n,a2 as a,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},u={id:"_212-java异常处理方式-自定义异常-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_212-java异常处理方式-自定义异常-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--212-Java--yt6nh85g9qg16iea831afa1t905in10ddc2c.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><blockquote><p>异常处理方式： 抛出异常 -&gt; 捕获异常 -&gt; 处理异常 -&gt; 释放、关闭资源</p></blockquote><pre><code>	自行处理（积极处理）：
	    try
	    {
	    	可能发生异常的语句;
	    }
	    catch(异常类型  异常引用名)
	    {
	    	处理异常的语句；
	    }
	    finally
	    {
	    	最终都要执行的语句，常用于释放资源、关闭资源
	    }
	    
	                注意：
	    	1.try语句块与catch语句块不可分割，是一个完整的语法结构
	    	2.可以同时定义多个catch语句块捕获不同的异常类型
	    	3.当多个catch语句同时定义时，必须根据捕获的异常类型从小到大排序
	    	4.finally语句：无论代码执行return或break语句，还是发生了具体的异常Exception，始终都会执行
	    	                                         除非执行System.exit(0);退出了系统，finally才不会执行
	    	
	
	回避处理（消极处理）：
		throws:修饰方法，告诉调用方法的人，该方法可能存在某类异常
		throw: 抛出具体的异常
</code></pre><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter08.自定义异常;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

/**
	异常处理方式：
		抛出异常   -&gt; 捕获异常  -&gt; 处理异常   -&gt; 释放、关闭资源
		
		自行处理（积极处理）：
		    try
		    {
		    	可能发生异常的语句;
		    }
		    catch(异常类型  异常引用名)
		    {
		    	处理异常的语句；
		    }
		    finally
		    {
		    	最终都要执行的语句，常用于释放资源、关闭资源
		    }
		    
		                注意：
		    	1.try语句块与catch语句块不可分割，是一个完整的语法结构
		    	2.可以同时定义多个catch语句块捕获不同的异常类型
		    	3.当多个catch语句同时定义时，必须根据捕获的异常类型从小到大排序
		    	4.finally语句：无论代码执行return或break语句，还是发生了具体的异常Exception，始终都会执行
		    	                                         除非执行System.exit(0);退出了系统，finally才不会执行
		    	
		
		回避处理（消极处理）：
			throws:修饰方法，告诉调用方法的人，该方法可能存在某类异常
			throw: 抛出具体的异常
 */
public class _01自定义异常测试 {

	public static void catchException() throws MyException
	{
		try 
		{
			//模拟停电了..........
			//System.out.println(&quot;准备停电....&quot;);
			//System.exit(0);//退出系统
			
			//1.文件找不到
			FileInputStream input = new FileInputStream(new File(&quot;说明.txt&quot;));
			
			//2.空指针异常
			String str = null;
			//System.out.println(str.length());
			
			//3.数组下标越界
			int[] array = new int[]{1,2,3};
			for (int i = 0; i &lt;= array.length; i++) {
				//System.out.println(array[i]);
				
				if(i &gt;=  array.length)
				{
					throw new MyException(&quot;&quot;);
				}
			}
			
			//4.算数异常
			int i = 1/0;
			
			System.out.println(&quot;代码终于完整的运行了........&quot;);
			//return;
		}
		//负责捕获&quot;文件找不到&quot;异常
		catch (FileNotFoundException e) 
		{
			//e.printStackTrace();//打印异常堆栈信息
			//System.out.println(&quot;亲爱的，你的&lt;说明.txt&gt;找不到了哦，请查验文件是否异常！&quot;);//一般记录日志，或者发送邮件、短信
			throw new MyException(&quot;亲爱的，你的&lt;说明.txt&gt;找不到了哦，请查验文件是否异常！&quot;);
		}
		//负责捕获&quot;空指针&quot;异常
		catch(NullPointerException e)
		{
			//e.printStackTrace();//打印异常堆栈信息
			//System.out.println(&quot;调用length()方法的对象str为null，不能使用&quot;);
			throw new MyException(&quot;调用length()方法的对象str为null，不能使用&quot;);
		}
		//负责捕获&quot;数组下标越界&quot;异常
		catch(ArrayIndexOutOfBoundsException e)
		{
			//e.printStackTrace();//打印异常堆栈信息
			//System.out.println(&quot;当前数组array长度为3，下标为0-2之间，请确认下标是否合法&quot;);
			throw new MyException(&quot;当前数组array长度为3，下标为0-2之间，请确认下标是否合法&quot;);
		}
		//负责捕获&quot;算数异常&quot;
		catch(ArithmeticException e)
		{
			//e.printStackTrace();//打印异常堆栈信息
			//System.out.println(&quot;除数不能为0&quot;);
			throw new MyException(&quot;除数不能为0&quot;);
		}
		//负责捕获所有的&quot;运行时异常&quot;
		catch(RuntimeException e)
		{
			//e.printStackTrace();//打印异常堆栈信息
			//System.out.println(&quot;发生了运行时异常，代码有bug了，请查验！！&quot;);
			throw new MyException(&quot;发生了运行时异常，代码有bug了，请查验！！&quot;);
		}
		//负责捕获所有的&quot;异常（运行时异常，非运行时异常）&quot;
		catch(Exception e)
		{
			//e.printStackTrace();//打印异常堆栈信息
			//System.out.println(&quot;发生了异常（运行时异常，非运行时异常），代码有bug了，请查验！！&quot;);
			throw new MyException(&quot;发生了异常（运行时异常，非运行时异常），代码有bug了，请查验！！&quot;);
		}
		finally
		{
			System.out.println(&quot;始终都要执行的代码&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;);
		}
		System.out.println(&quot;-----------------------------------------&quot;);
	}
	
	public static void main(String[] args){
		try {
			catchException();
		} 
		//负责捕获&quot;自定义&quot;异常
		catch (MyException e) 
		{
			//e.printStackTrace();//打印异常堆栈信息
			System.out.println(e.getMessage());//一般记录日志，或者发送邮件、短信
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter08.自定义异常;

/**
 * 自定义异常类：
 * 		1.自定类继承Exception
 * 		2.提供一个带参数的构造函数
 *
 */
public class MyException extends Exception {

	//用于保存异常发生的原因
	private String message;
	
	//构造函数
	public MyException(String message)
	{
		this.message = message;
	}
	
	//访问器方法，获取异常的信息
	public String getMessage()
	{
		return message;
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java异常处理方式-自定义异常</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,15);function p(h,g){const i=r("ExternalLinkIcon");return s(),l("div",null,[d(" more "),t("h1",u,[m,n(),t("a",b,[n("212-Java异常处理方式-自定义异常.md"),a(i)])]),o])}const y=e(c,[["render",p],["__file","212-Java异常处理方式-自定义异常.html.vue"]]);export{y as default};

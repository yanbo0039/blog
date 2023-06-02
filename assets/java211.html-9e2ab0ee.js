import{_ as n,X as i,Y as e,a1 as t,a0 as s}from"./framework-68dd73a2.js";const l={},d=s(`<h1 id="_211-java异常处理方式-练习题-md" tabindex="-1"><a class="header-anchor" href="#_211-java异常处理方式-练习题-md" aria-hidden="true">#</a> 211-Java异常处理方式-练习题 .md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="编写应用程序-从命令行传入两个整型数作为除数和被除数。" tabindex="-1"><a class="header-anchor" href="#编写应用程序-从命令行传入两个整型数作为除数和被除数。" aria-hidden="true">#</a> 编写应用程序，从命令行传入两个整型数作为除数和被除数。</h4><blockquote><p>1、编写应用程序，从命令行传入两个整型数作为除数和被除数。要求程序中捕获NumberFormatException 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。 [必作题] 在命令行输入不同的参数时能输出如下各种结果：</p></blockquote><pre><code>	1.1 在命令行输入 &lt;零个参数&gt;
	1.2 在命令行输入   1  和  2
	1.3 在命令行输入  1  和   3a
	1.4 在命令行输入  1  和   0 
</code></pre><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter08.练习;

/**
 * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。要求程序中捕获NumberFormatException 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。 [必作题]
在命令行输入不同的参数时能输出如下各种结果：
		1.1 在命令行输入 &lt;零个参数&gt;
		1.2 在命令行输入   1  和  2
		1.3 在命令行输入  1  和   3a
		1.4 在命令行输入  1  和   0 
 */
public class _01 {

	public static void main(String[] args) {
		try{
			//参数一:String
			String str1 = args[0];
			//参数二:String
			String str2 = args[1];
			
			//String -&gt; int
			int num1 = Integer.parseInt(str1);
			int num2 = Integer.parseInt(str2);
			
			//求商
			int result = num1 / num2;
			
			//输出结果
			System.out.println(result);
		}
		catch(ArrayIndexOutOfBoundsException e)
		{
			e.printStackTrace();
			//System.out.println(&quot;参数个数不正确，一定要传入两个参数&quot;);
		}
		catch(NumberFormatException e)
		{
			e.printStackTrace();
			//System.out.println(&quot;参数必须为整数&quot;);
		}
		catch(ArithmeticException e)
		{
			e.printStackTrace();
			//System.out.println(&quot;算数异常，除数不能为0&quot;);
		}
		finally
		{
			System.out.println(&quot;总是被执行&quot;);
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编写一个检查给定的数字的数据类型是否为byte的程序" tabindex="-1"><a class="header-anchor" href="#编写一个检查给定的数字的数据类型是否为byte的程序" aria-hidden="true">#</a> 编写一个检查给定的数字的数据类型是否为byte的程序</h4><blockquote><p>2、编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常） [选作题]</p></blockquote><pre><code>	步骤1：创建用户自定义异常类ByteSizeException
	步骤2：在main方法中编写逻辑代码
	步骤3：运行并测试
	效果如图：
</code></pre><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter08.练习;

import java.util.Scanner;

/**
 * 2、编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常） [选作题]
		步骤1：创建用户自定义异常类ByteSizeException
		步骤2：在main方法中编写逻辑代码
		步骤3：运行并测试
		效果如图：
 */
public class _02 {

	public static void throwException() throws ByteSizeException {
		
		Scanner scanner = new Scanner(System.in);
		int b = scanner.nextInt();
		
		//判断byte是否在-128~127之间
		if(b &lt; -128 || b &gt; 127)
		{
			//System.out.println(&quot;输入的数字不是byte类型&quot;);
			throw new ByteSizeException(&quot;输入的数字不是byte类型&quot;);
		}
		else
		{
			System.out.println(&quot;输入的数字是一个byte类型&quot;);
		}
	}
	
	//步骤2：在main方法中编写逻辑代码
	public static void main(String[] args){
		
		try {
			throwException();
		} catch (ByteSizeException e) {
			e.printStackTrace();
		}
	}
}
//步骤1：创建用户自定义异常类ByteSizeException
class ByteSizeException extends Exception
{
	//用于保存异常信息的属性
	private String message;
	
	//构造函数
	public ByteSizeException(String message)
	{
		this.message = message;
	}
	
	//对外公共的方法获取异常信息
	public String getMessage()
	{
		return message;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编写一个方法-比较两个字符串" tabindex="-1"><a class="header-anchor" href="#编写一个方法-比较两个字符串" aria-hidden="true">#</a> 编写一个方法，比较两个字符串</h4><blockquote><p>3、编写一个方法，比较两个字符串。假如其中一个字符串为空，会产生NullPointerException异常，在方法声明中通告该异常， 并在适当时候触发异常，然后编写一个程序捕获该异常。 [必作题]</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter08.练习;
/**
 * 3、编写一个方法，比较两个字符串。假如其中一个字符串为空，会产生NullPointerException异常，在方法声明中通告该异常，
 *    并在适当时候触发异常，然后编写一个程序捕获该异常。 [必作题]
 */
public class _03 {

	//编写一个方法，比较两个字符串
	public static boolean compare(String str1,String str2) throws NullPointerException
	{
		//并在适当时候触发异常
		if(str1 == null || str2 == null)
		{
			throw new NullPointerException(&quot;比较的字符串对象不能为null&quot;);
		}
		
		if(str1.equals(str2))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	//然后编写一个程序捕获该异常
	public static void main(String[] args) {
		try
		{
			boolean result = compare(null, &quot;abc&quot;);
			System.out.println(result);
		}
		catch(NullPointerException e)
		{
			//e.printStackTrace();
			System.out.println(e.getMessage());
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java异常处理方式-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,22);function a(v,r){return i(),e("div",null,[t(" more "),d])}const u=n(l,[["render",a],["__file","java211.html.vue"]]);export{u as default};

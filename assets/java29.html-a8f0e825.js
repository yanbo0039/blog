import{_ as n,X as i,Y as e,a1 as t,a0 as a}from"./framework-68dd73a2.js";const s="/blog/assets/Java_29_1.png",l={},d=a(`<h1 id="java初级测试题八-异常处理-3-3" tabindex="-1"><a class="header-anchor" href="#java初级测试题八-异常处理-3-3" aria-hidden="true">#</a> Java初级测试题八-异常处理(3-3)</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>1.编写应用程序，从命令行传入两个整型数作为除数和被除数。要求程序中捕获NumberFormatException 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。 在命令行输入不同的参数时能输出如下各种结果：</p><p>1.1 在命令行输入 java A</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>总是被执行  Exception in thread &quot;main&quot; 
java.lang.ArrayIndexOutofBoundsException at A.main(A.java:7)  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 在命令行输入 java A 1 2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0   总是被执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.3 在命令行输入 java A 1 3a</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.NumberFormatException: 3a  at 
java.lang.Integer.parseInt(Integer.java:435)    at 
java.lang.Integer.parseInt(Integer.java:476)   at A.main(A.java:8)  
 总是被执行 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4 在命令行输入 java A 1 0</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.ArithmeticException: / by zero at A.main(A.java:9)  总是被执行 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Topic1 {

	/*
	 * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。
	 *  要求程序中捕获NumberFormatException
	 * 异常和ArithmeticException 异常，
	 * 而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。
	 */
	public static void main(String[] args) {
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		System.out.println(&quot;please enter the first number&quot;);
		String string1 = scanner.next();
		System.out.println(&quot;please enter the second number&quot;);
		String string2 = scanner.next();
		int num1,num2;
		try {
			num1 = Integer.getInteger(string1);
			num2 = Integer.getInteger(string2);
			System.out.println(num1 / num2);
		} catch (NumberFormatException | ArithmeticException e) {
			e.printStackTrace();
		}finally {
			System.out.println(&quot;总是被执行&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常）</li></ol><p>步骤1：创建用户自定义异常类ByteSizeException</p><p>步骤2：在main方法中编写逻辑代码</p><p>步骤3：运行并测试</p><p>效果如图：</p><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 课后作业;

public class ByteSizeException extends Exception {

	/*
	 * 2、编写一个检查给定的数字的数据类型是否为byte的程序，
	 * 如果此数字超出byte数据类型表示的数的范围，
	 * 则引发用户自定义的异常ByteSizeException,
	 * 并显示相应的错误信息（知识点：自定义异常） [选作题]
	 * 步骤1：创建用户自定义异常类ByteSizeException 
	 * 步骤2：在main方法中编写逻辑代码 
	 * 步骤3：运行并测试 效果如图：
	 */
	public ByteSizeException() {
		super(&quot;此数字超出byte数据类型表示范围&quot;);
	}
	public static void foo(int num) {//异常两种处理方式  积极处理  消极处理
		if(num &lt; - 128  &amp;&amp; num &gt; 127)
		{
			try {
				throw new ByteSizeException();
			} catch (ByteSizeException e) {
				e.printStackTrace();
			}
		}
	}
	public static void main(String[] args) {
		foo(129);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>编写一个方法，比较两个字符串。假如其中一个字符串为空，会产生NullPointerException异常，在方法声明中通告该异常，并在适当时候触发异常，然后编写一个程序捕获该异常。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class NullPointerException extends Exception{
	/*
	 * 3. 编写一个方法，比较两个字符串。假如其中一个字符串为空，
	 * 会产生NullPointerException异常，在方法声明中通告该异常，
	 * 并在适当时候触发异常， 然后编写一个程序捕获该异常。
	 */
	public static void testString(String string1,String string2) {
		if(string1 == null || string2 == null)
		{
			try {
				throw new NullPointerException();
			} catch (NullPointerException e) {
				e.printStackTrace();
			}
		}
	}
	public static void main(String[] args) {
		String string1 = &quot;aaa&quot;;
		String string2 = null;
		testString(string1, string2);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java初级测试题八-异常处理(3-3)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,25);function r(v,c){return i(),e("div",null,[t(" more "),d])}const m=n(l,[["render",r],["__file","java29.html.vue"]]);export{m as default};

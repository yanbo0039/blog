import{_ as n,X as e,Y as i,a1 as t,a0 as s}from"./framework-68dd73a2.js";const r={},a=s(`<h1 id="java-编写一个检查给定的数字的数据xxxx则引发用户自定义的异常bytesizeexception" tabindex="-1"><a class="header-anchor" href="#java-编写一个检查给定的数字的数据xxxx则引发用户自定义的异常bytesizeexception" aria-hidden="true">#</a> Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException</h1><p>编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常） [选作题] 步骤1：创建用户自定义异常类ByteSizeException 步骤2：在main方法中编写逻辑代码 步骤3：运行并测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.Scanner;

public class TryError {

	/*
	 * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。 要求程序中捕获NumberFormatException
	 * 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。
	 */
	public TryError() {
	}

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.println(&quot;please enter the first Number&quot;);

		String string1 = scanner.next();

		System.out.println(&quot;please enter the second Number&quot;);

		String string2 = scanner.next();

		int num1, num2;

		try {
			num1 = Integer.parseInt(string1);
			num2 = Integer.parseInt(string2);
			System.out.println(num1 / num2);
		} catch (NumberFormatException | ArithmeticException e) {
			e.printStackTrace();
		} finally {
			System.out.println(&quot;alaways doing ....&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,7);function l(d,c){return e(),i("div",null,[t(" more "),a])}const u=n(r,[["render",l],["__file","18-Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException.html.vue"]]);export{u as default};

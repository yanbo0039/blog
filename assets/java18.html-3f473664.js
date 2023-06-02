import{_ as n,X as e,Y as i,a1 as t,a0 as s}from"./framework-68dd73a2.js";const a={},r=s(`<h1 id="java-编写一个检查给定的数字的数据xxxx则引发用户自定义的异常bytesizeexception" tabindex="-1"><a class="header-anchor" href="#java-编写一个检查给定的数字的数据xxxx则引发用户自定义的异常bytesizeexception" aria-hidden="true">#</a> Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常） [选作题] 步骤1：创建用户自定义异常类ByteSizeException 步骤2：在main方法中编写逻辑代码 步骤3：运行并测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.Scanner;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,8);function l(d,c){return e(),i("div",null,[t(" more "),r])}const m=n(a,[["render",l],["__file","java18.html.vue"]]);export{m as default};

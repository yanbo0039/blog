import{_ as n,X as e,Y as i,a1 as t,a0 as r}from"./framework-68dd73a2.js";const s={},a=r(`<h1 id="java-编写应用程序从命令行传入两个整型xxx要求程序中捕获numberformatexception异常和arithmeticexception" tabindex="-1"><a class="header-anchor" href="#java-编写应用程序从命令行传入两个整型xxx要求程序中捕获numberformatexception异常和arithmeticexception" aria-hidden="true">#</a> Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>编写应用程序，从命令行传入两个整型数作为除数和被除数。要求程序中捕获NumberFormatException 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import java.util.Scanner;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,8);function l(d,c){return e(),i("div",null,[t(" more "),a])}const m=n(s,[["render",l],["__file","java19.html.vue"]]);export{m as default};

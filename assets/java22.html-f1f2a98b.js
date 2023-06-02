import{_ as n,X as i,Y as t,a1 as e,a0 as s}from"./framework-68dd73a2.js";const l={},d=s(`<h1 id="java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和xxx" tabindex="-1"><a class="header-anchor" href="#java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和xxx" aria-hidden="true">#</a> Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package MyTask;

import java.util.Arrays;
import java.util.Date;
import java.util.Random;
import java.util.Scanner;

public class Task {

	public Task() {

	}

	/**
	 * 分割｜特殊符号字符串为数组的方法
	 */
	public static void String_split() {
		String souString = &quot;a|n|c|d&quot;;
		String[] reStrings = souString.split(&quot;\\\\|&quot;);
		System.out.println(Arrays.toString(reStrings));
	}

	/*
	 * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值，
	  *  并计算输出两个数值的和 暂未考虑输入的数值型字符串为字母。。
	 */
	public static void sumNumStr() {
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入第一个数字&quot;);
		int num1 = Integer.parseInt(scanner.next());
		System.out.println(&quot;请输入第二个数字&quot;);
		int num2 = Integer.parseInt(scanner.next());
		System.out.println(&quot;两个数字之和为： &quot; + (num1 + num2));
	}

	/*
	 * 2、编写一个程序，实现从命令行参数输入一字符串， 
	  *   统计该字符串中字符“e”出现的次数。（识点：String中常用的方法）
	 */
	public static void countWord_e() {
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入一串字符串&quot;);
		String string3 = scanner.next();
		String eString = &quot;e&quot;;
		int count = 0, index = 0;
		while (index &lt; string3.length()) {
			if (string3.indexOf(&quot;e&quot;, index) == index) {
				count++;
			}
			index++;
		}
		System.out.println(&quot;字符串中字符“e”出现的次数是： &quot; + count);
	}

	/*
	 * 3、生成十个0~100之间的随机数，放到数组中，然后排序输出。
	 * 
	 */
	public static void mandomNumArraySort() {
		int[] sumArray = new int[10];
		Random random = new Random();
		for (int i = 0; i &lt; sumArray.length; i++) {
// 将随机产生的数字存进数组 此随机数范围为 &gt;=0 &lt;101
			sumArray[i] = random.nextInt(101);
//另一种产生随机数的方法 此随机数范围为 &gt;=0 &lt;1
//			sumArray[i] = (int)Math.floor(Math.random() * 101);
              
		}
		Arrays.sort(sumArray);// 数组排序
//		for (int i = 0; i &lt; sumArray.length - 1; i++) {
//			for (int j = 0; j &lt; sumArray.length - 1 - i; j++) {
//				if(sumArray[j] &gt; sumArray[j +1]) {
//					int temp = sumArray[j];
//					sumArray[j] = sumArray[j+1];
//					sumArray[j+1] = temp;
//				}
//			}
//		}//冒泡排序 
		System.out.println(Arrays.toString(sumArray));
	}

	/*
	 * 4、巴黎时间比北京时间晚7个小时， 纽约时间比北京时间晚12个小时，
	  *   试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。
	 */
	public static void getNewYorkandParisTime() {
		Date date = new Date();
		System.out.println(&quot;此刻北京时间为： &quot; + date);
		// 把时间相加减：操作的是 毫微秒值
		Date parisTimeDate = new Date(date.getTime() - 7 * 60 * 60 * 1000);
		System.out.println(&quot;此刻的巴黎时间为： &quot; + parisTimeDate);
		Date newYorkTiDate = new Date(date.getTime() - 12 * 60 * 60 * 1000);
		System.out.println(&quot;此刻的纽约时间为： &quot; + newYorkTiDate);

	}

	/*
	 * 5、解析一个邮箱地址是否合法， 如果合法则打印出用户名部分和该邮箱所属的网站域名，
	  *  如果邮箱地址不合法则显示不合法的原因 [选做题]
	 * 5.1提示：邮箱地址不合法的因素： 
	 * 5.1.1邮箱地址中不包含@或. 
	 * 5.1.2邮箱地址中含有多了@或. 
	 * 5.1.3邮箱地址中.出现在@的前面
	 * 5.1.4用户名里有其他字符 5.2实现步骤：
	 *  5.2.1创建一个类，类名：mailtest
	 */
	public static void isMail() {

	}

	/*
	 * 6、分别在控制台输入字符串和子字符串，
	  *  并计算字符串中子字符串出现的次数
	 * 
	 */
	public static void countStrChild() {
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入一个长度大于1的字符串&quot;);
		String string1 = scanner.next();
		System.out.println(&quot;请输入一个字符串&quot;);
		String string2 = scanner.next();
		int index = 0, // 下标值
				count = 0;// 统计次数
		while (index &lt; string1.length()) {
			if (string1.indexOf(string2, index) == index) {
				count++;
			}
			index++;
		}
		System.out.println(string2 + &quot;   在   &quot; + string1 +
                 &quot; 中出现的次数为：&quot; + count + &quot; 次&quot;);
	}

	/*
	 * 7、有一个字符串， 其中包含中文字符、英文字符和数字字符，
	  *  请统计和打印出各个字符的个数。
	 */
	public static void countZhEnNum() {
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入一个包含中文、字母和数字的字符串&quot;);
		String scString = scanner.next();
		StringBuilder zhStringBuilder = new StringBuilder();
		StringBuilder enStringBuilder = new StringBuilder();
		StringBuilder numStringBuilder = new StringBuilder();
		for (int i = 0; i &lt; scString.length(); i++) {
			// 使用Character.getType()方法获取字符的类型
			switch (Character.getType(scString.charAt(i))) {
			case 1: // 大写字母
				enStringBuilder.append(scString.charAt(i));
				break;
			case 2: // 小写字母
				enStringBuilder.append(scString.charAt(i));
				break;
			case 5: // 中文字符
				zhStringBuilder.append(scString.charAt(i));
				break;
			case 9: // 数字
				numStringBuilder.append(scString.charAt(i));
				break;
			default:
				break;
			}
		}
		System.out.println(scString + 
         &quot;    中包含的中文字符为：&quot; + 
                   zhStringBuilder.length() +
              &quot; 个\\t包含的英文字符为：&quot;
	     + enStringBuilder.length() +
           &quot; 个\\t包含的数字字符为&quot; + 
          numStringBuilder.length() + &quot;个&quot;);
	}

	/*
	 * 8、有一种数叫回文数，正读和反读都一样， 
	  * 如12321便是一个回文数。 编写一个程序，
	  * 从命令行得到一个整数，判断该数是不是回文数。
	 * 
	 */
	public static void isPalindromeNumber() {
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入一个长度大于1的数字&quot;);
		String numString = scanner.next();
		StringBuilder stringBuilder = new StringBuilder(numString);
		stringBuilder.reverse();
		// stringBuilder.toString()将StringBuilder类型转换成String类型
		if (Integer.parseInt(numString) == 
            Integer.parseInt(stringBuilder.toString())) {
			System.out.println(numString + &quot;是回文数&quot;);
		} else {
			System.out.println(numString + &quot;不是回文数&quot;);
		}
		/**
		 * 第二种方法
		 * 利用equals()方法判断两个对象是否相等
		 */
//		if (numString.equals(new StringBuilder(numString).reverse().toString())) {
//			System.out.println(&quot;是回文数&quot;);
//		} else {
//			System.out.println(&quot;不是&quot;);
//		}
	}

	public static void main(String[] args) {
//		String_split();
//		sumNumStr();
//        countWord_e(); 
//        mandomNumArraySort();
//		getNewYorkandParisTime();
//		isMail();
//		countStrChild();
//		countZhEnNum();
//		isPalindromeNumber();
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,7);function r(v,a){return i(),t("div",null,[e(" more "),d])}const c=n(l,[["render",r],["__file","java22.html.vue"]]);export{c as default};

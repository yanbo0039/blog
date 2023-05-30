import{_ as i,X as n,Y as t,a1 as e,a0 as l}from"./framework-68dd73a2.js";const s={},d=l(`<h1 id="java中级测试题一-工具类-8-8" tabindex="-1"><a class="header-anchor" href="#java中级测试题一-工具类-8-8" aria-hidden="true">#</a> Java中级测试题一-工具类(8-8)</h1><ol><li>编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	
	/*
	 * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和
	 * 
	 * 暂未考虑输入的不是数值型的字符串异常
	 * 
	 */
	public static void sumNumString() {
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		System.out.println(&quot;请输入第一个数字&quot;);
		String numString1 = scanner.next();
		System.out.println(&quot;请输入第二个数字&quot;);
		String numString2 = scanner.next();
		System.out.println(&quot;两个数字和为：&quot; +
		(Integer.parseInt(numString1) + Integer.parseInt(numString2)));
	}
	public static void main(String[] args) {
		sumNumString();//1
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数。（识点：String中常用的方法）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 2、编写一个程序，实现从命令行参数输入一字符串，
	 * 统计该字符串中字符“e”出现的次数。（识点：String中常用的方法）
	 */
	public static void countWorde() {
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		System.out.println(&quot;请输入一串字符串&quot;);
		String string = scanner.next();
		int count = 0,
			index = 0;
		while(index &lt; string.length()) {
			if(string.indexOf(&quot;e&quot;,index) == index) {
				count++;
			}
			index++;
		}
		System.out.println(&quot;字符串中字符“e”出现的次数是：&quot; + count);
	}
	public static void main(String[] args) {
		countWorde();//2
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>生成十个0~100之间的随机数，放到数组中，然后排序输出。（知识点：Math类取整,获得随机数等）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 3、生成十个0~100之间的随机数，放到数组中，然后排序输出。
	 * 
	 */
	public static void RandomNumAndSortOutput() {
		int[] myList = new int[10];
		java.util.Random random = new java.util.Random();
		for(int i = 0;i &lt; myList.length;i++) {
			myList[i] = random.nextInt(100);
		}
		java.util.Arrays.sort(myList);//Java自带排序更改原数组没有返回值
//		for(int i = 0;i &lt; myList.length - 1;i++) {
//			for(int j = 0;j &lt; myList.length - 1 -i;j++) {
//				if(myList[j] &gt; myList[j + 1]) {
//					int temp = myList[j];
//					myList[j] = myList[j +1];
//					myList[j + 1] = temp;
//				}
//			}
//		}//冒泡排序
		System.out.println(java.util.Arrays.toString(myList));
	}
	public static void main(String[] args) {
		RandomNumAndSortOutput();//3
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>巴黎时间比北京时间晚7个小时，纽约时间比北京时间晚12个小时，试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 4、巴黎时间比北京时间晚7个小时，
	 * 纽约时间比北京时间晚12个小时，
	 * 试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。
	 */
	public static void getLocTime() {
		java.util.Date date = new java.util.Date();
		System.out.println(&quot;北京时间为： &quot; + date);
		//把时间相加 操作的是毫秒值
		java.util.Date parisDate = new java.util.Date(date.getTime() - 
        7*60*60*1000);
		System.out.println(&quot;Paris时间为：&quot; +parisDate);
		java.util.Date newYorkDate = new java.util.Date(date.getTime() - 
        12*60*60*1000);
		System.out.println(&quot;New York时间为：&quot; +newYorkDate);
	}
	public static void main(String[] args) {
		getLocTime();//4
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>解析一个邮箱地址是否合法，如果合法则打印出用户名部分和该邮箱所属的网站域名，如果邮箱地址不合法则显示不合法的原因</li></ol><p>5.1 提示：邮箱地址不合法的因素：</p><p>5.1.1邮箱地址中不包含@或.</p><p>5.1.2邮箱地址中含有多了@或.</p><p>5.1.3邮箱地址中.出现在@的前面</p><p>5.1.4用户名里有其他字符</p><p>5.2实现步骤：</p><p>5.2.1创建一个类，类名：mailtest</p><p>类图如下：</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_30_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.Scanner;

public class Task {
	/*
	 * 5、解析一个邮箱地址是否合法，
	 * 如果合法则打印出用户名部分和该邮箱所属的网站域名，
	 * 如果邮箱地址不合法则显示不合法的原因 [选做题] 
	 * 5.1提示：邮箱地址不合法的因素： 
	 * 5.1.1邮箱地址中不包含@或. 
	 * 5.1.2邮箱地址中含有多了@或. 
	 * 5.1.3邮箱地址中.出现在@的前面
	 * 5.1.4用户名里有其他字符 
	 * 5.2实现步骤：
	 * 5.2.1创建一个类，类名：mailtest
	 */
	
	public static void mailtest() {
		//假定此 处就是mailtest类
		System.out.println(&quot;请输入你的邮箱名字&quot;);
		Scanner scanner = new Scanner(System.in);
		String email = scanner.next();
		// 5.1.1邮箱地址中不包含@或. 
		if(email.indexOf(&quot;@&quot;) == -1 || email.indexOf(&quot;.&quot;) == -1) {
			System.out.println(&quot;邮箱中不包含&#39;@&#39;或&#39;.&#39;,不合法&quot;);
			return;
		}
		//5.1.2邮箱地址中含有多了@或. 
		if(email.indexOf(&quot;@&quot;) != email.lastIndexOf(&quot;@&quot;) || email.indexOf(&quot;.&quot;) != email.lastIndexOf(&quot;.&quot;)) {
			System.out.println(&quot;邮箱中包含多个&#39;@&#39;和&#39;.&#39;,不合法&quot;);
			return;
		}
		//5.1.3邮箱地址中.出现在@的前面
		if(email.indexOf(&quot;.&quot;) &lt; email.indexOf(&quot;@&quot;)) {
			System.out.println(&quot;邮箱中&#39;.&#39;在&#39;@&#39;前面,不合法&quot;);
			return;
		}
		//5.1.4用户名里有其他字符 
		/**
		 * 只能包含 0 ~ 9 a ~ z A ~ Z
		 * 0 对应的ASCII码十进制值为 ：48
		 * A对应的ASCII码十进制值为：65
		 * a对应的ASCII码十进制值为：97
		 */
		for (int i = 0; i &lt; email.indexOf(&quot;@&quot;); i++) {
			if(email.charAt(i) &gt; &#39;0&#39; &amp;&amp; email.charAt(i) &lt; &#39;9&#39; || 
					email.charAt(i) &gt; &#39;A&#39; &amp;&amp; email.charAt(i) &lt; &#39;Z&#39; ||
					email.charAt(i) &gt; &#39;a&#39; &amp;&amp; email.charAt(i) &lt; &#39;z&#39;) {
//				System.out.println(&quot;邮箱合法&quot;);
			}else {
				System.out.println(&quot;邮箱不合法，用户名里有其他字符 &quot;);
			}
		}
	}
	public static void main(String[] args) {
//		mailtest();//5
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>分别在控制台输入字符串和子字符串，并计算字符串中子字符串出现的次数。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 6、分别在控制台输入字符串和子字符串，并计算字符串中子字符串出现的次数
	 * 
	 */
	public static void countWord() {
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		System.out.println(&quot;请输一个长度大于1的字符串&quot;);
		String string1 = scanner.next();
		System.out.println(&quot;请输入一个长度为1的字符串&quot;);
		String string2 = scanner.next();
		int index = 0,
			count = 0;
		while (index &lt; string1.length()) {
			if(string1.indexOf(string2,index) == index) {
				count++;
			}
			index++;
		}
		System.out.println(string2+&quot;   在   &quot;+string1+&quot;
         中出现的次数为：&quot; + count +&quot; 次&quot;);
	}
	public static void main(String[] args) {
		countWord();//6
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>有一个字符串，其中包含中文字符、英文字符和数字字符，请统计和打印出各个字符的个数。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 7、有一个字符串，
	 * 其中包含中文字符、
	 * 英文字符和数字字符，
	 * 请统计和打印出各个字符的个数。
	 * 
	 */
	public static void countZhEnNum() {
		java.util.Scanner scanner = new java.util.Scanner(System.in);
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
		System.out.println(scString + &quot;    中包含的中文字符为：&quot; + 
        zhStringBuilder.length() + &quot; 个\\t包含的英文字符为：&quot;
	    + enStringBuilder.length() + &quot; 个\\t包含的数字字符为&quot; + 
        numStringBuilder.length() + &quot;个&quot;);
	}
	public static void main(String[] args) {
		countZhEnNum();//7
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>有一种数叫回文数，正读和反读都一样，如12321便是一个回文数。编写一个程序，从命令行得到一个整数，判断该数是不是回文数。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 8、有一种数叫回文数，正读和反读都一样， 
	  * 如12321便是一个回文数。 编写一个程序，
	  * 从命令行得到一个整数，判断该数是不是回文数。
	 * 
	 */
	public static void isPalindromeNumber() {
		java.util.Scanner scanner = new java.util.Scanner(System.in);
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
		isPalindromeNumber();//8
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,30);function a(v,r){return n(),t("div",null,[e(" more "),d])}const c=i(s,[["render",a],["__file","java30.html.vue"]]);export{c as default};

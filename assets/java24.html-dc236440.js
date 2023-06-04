import{_ as n,X as i,Y as t,a1 as e,a0 as s}from"./framework-68dd73a2.js";const l={},d=s(`<h1 id="java初级测试题三-流程控制语句-17-17" tabindex="-1"><a class="header-anchor" href="#java初级测试题三-流程控制语句-17-17" aria-hidden="true">#</a> Java初级测试题三-流程控制语句(17-17)</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>企业发放的奖金根据利润提成。利润低于或等于10万元时，奖金可提10%；利润高于10万元，低于或等于20万元时，高于10万元的部分，可提成7.5%；高于20万，低于或等于40万时，高于20万元的部分，可提成5%；高于40万，低于或等于60万时，高于40万元的部分，可提成3%；高于60万，低于或等于100万时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，在程序中设定一个变量为当月利润，求应发放奖金总数？（知识点：条件语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 1. 企业发放的奖金根据利润提成。利润低于或等于10万元时，
	 * 奖金可提10%；利润高于10万元，低于或等于20万元时，
	 * 高于10万元的部分，可提成7.5%；
	 * 高于20万，低于或等于40万时，高于20万元的部分，
	 * 可提成5%；高于40万，低于或等于60万时，高于40万元的部分，
	 * 可提成3%；高于60万，
	 * 低于或等于100万时，高于60万元的部分，可提成1.5%，
	 * 高于100万元时，超过100万元的部分按1%提成，在程序中设定一个变量为当月利润，
	 * 求应发放奖金总数？（知识点：条件语句）
	 * 
	 */
	public static void bonus(int profit) {
		if(profit &gt; 0) {
			int temp_num = profit / 100_000;
			double comm = 0.0;
			if(temp_num &lt;= 1) {
				comm = profit * 0.1;
			}else if((1 &lt; temp_num) &amp;&amp; (temp_num &lt;= 2)){
				comm = (profit - 100000) * 0.075 + 100000 * 0.1;
			}else if((2 &lt; temp_num) &amp;&amp; (temp_num &lt;= 4)) {
				comm = (profit - 200000) * 0.05 + 100000 * 0.075 + 100000 * 0.1;
			}else if((4 &lt; temp_num) &amp;&amp; (temp_num &lt;= 6)) {
				comm = (profit - 400000) * 0.03 + 200000 * 0.05 + 100000 * 0.075 + 100000 * 0.1;
			}else if ((6 &lt; temp_num) &amp;&amp; (temp_num &lt;= 10)) {
				comm = (profit - 600000) * 0.015 + 200000 * 0.03 + 200000 * 0.05 + 100000 * 0.075 + 100000 * 0.1;
			}else {
				comm = (profit - 1000000) * 0.01 + 400000 * 0.015 + 200000 * 0.03 + 200000 * 0.05 + 100000 * 0.075 + 100000 * 0.1;
			}
			System.out.println(&quot;利润为：&quot; + profit +&quot;时的奖金应发： &quot; + comm + &quot; 元&quot;);
		}else {
			System.out.println(&quot;利润必须大于0&quot;);
		}
	}
	public static void main(String[] args)
	{
		bonus(7000);//1
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>给定一个成绩a，使用switch结构求出a的等级。A：90-100，B：80-89，C：70-79，D：60-69，E：0~59（知识点：条件语句switch）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 2. 给定一个成绩a，使用switch结构求出a的等级。
	 * A：90-100，B：80-89，C：70-79，D：60-69，E：0~59（知识点：
	 * 条件语句switch）
	 * 
	 */
	public static void scoreGrade(int score) {
		if(score &gt; 100 || score &lt; 0) {
			System.out.println(&quot;给定成绩范围应该在0到100之间 &quot; + score + &quot;超出边界&quot;);
		}else {
			int grade = score / 10;
			switch (grade) {
			case 10:
			case 9:
				System.out.println(&quot;您的成绩等绩等级为 A &quot;);
				break;
			case 8:
				System.out.println(&quot;您的成绩等绩等级为 B &quot;);
				break;
			case 7:
				System.out.println(&quot;您的成绩等绩等级为 C &quot;);
				break;
			case 6:
				System.out.println(&quot;您的成绩等绩等级为 D &quot;);
				break;
			default:
				System.out.println(&quot;您的成绩等绩等级为 E &quot;);
				break;
			}
		}
	}
	public static void main(String[] args)
	{
		scoreGrade(90);//2
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>假设某员工今年的年薪是30000元，年薪的年增长率6%。编写一个Java应用程序计算该员工10年后的年薪，并统计未来10年（从今年算起）总收入。（知识点：循环语句for）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 3. 假设某员工今年的年薪是30000元，年薪的年增长率6%。
	  *    编写一个Java应用程序计算该员工10年后的年薪，
	  *    并统计未来10年（从今年算起）总收入。（知识点：循环语句for）
	 */
	public static void tenYearSalary() {
		double annualSalary = 30000,
				allSalary = 0;
		for(int i = 0;i &lt; 10;i++) {
			//计算出每年的年薪并按常识理解第一年默认不涨薪！！！！
			annualSalary += annualSalary * 0.06 * (i == 0 ? 0 :1);
			allSalary += annualSalary;//将年薪赋值给总收入
		}
		System.out.println(&quot;该员工未来10年的总收入为：&quot; + allSalary + &quot;元&quot;);
	}
	public static void main(String[] args)
	{
		tenYearSalary();//3
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个，第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。（知识点：循环语句 while）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 
	 * 4. 猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，
	 * 又多吃了一个，第二天早上又将剩下的桃子吃掉一半，
	 * 又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。
	 * 到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。
	 * （知识点：循环语句 while）
	 * 老实说这题我还没有解理到 ！！！！！
https://blog.csdn.net/wangnanwlw/article/details/52317451
	 * 用数学的方法理解。。。设总数为x个 
	 *   正向思维
	 * 1  (x/2-1)
	 * 2  ((x/2-1)/2-1)
	 * 3  (((x/2-1)/2-1)/2-1)
	 * 4  ((((x/2-1)/2-1)/2-1)/2-1)
	 * 5  (((((x/2-1)/2-1)/2-1)/2-1)/2-1) 
	 * 6  ((((((x/2-1)/2-1)/2-1)/2-1)/2-1)/2-1)
	 * 7  (((((((x/2-1)/2-1)/2-1)/2-1)/2-1)/2-1)/2 -1)
	 * 8  ((((((((x/2-1)/2-1)/2-1)/2-1)/2-1)/2-1)/2 -1)/2-1)
	 * 9  (((((((((x/2-1)/2-1)/2-1)/2-1)/2-1)/2-1)/2 -1)/2-1)/2-1) = 1
	 *  化简得到(x-1022)/512 = 1;
	 * 
	 */
	public static void peachNum()
	{
		int allNum = 1,//最后只剩一个
		day = 1;//从第一天开始算起 。。
		while (day &lt; 10) {
			allNum = (allNum + 1) * 2;
			day++;
		}
		System.out.println(&quot;第一天共摘的桃子的个数为：&quot; + allNum);
	}
	public static void main(String[] args)
	{
		peachNum();//4	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>输入一个数字，判断是一个奇数还是偶数（知识点：条件语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 5. 输入一个数字，判断是一个奇数还是偶数（知识点：条件语句）
	 * 
	 */
	public static void isOddOrEvenNum(int num) {
		if(num%2 == 0) {
			System.out.println(num + &quot; 是偶数&quot;);
		}else {
			System.out.println(num + &quot; 是奇数&quot;);
		}
	}
	public static void main(String[] args)
	{
		isOddOrEvenNum(-100);//5	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>编写程序， 判断一个变量x的值，如果是1，输出x=1，如果是5，输出x=5，如果是 10，输出x=10，除了以上几个值，都输出x=none。（知识点：条件语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	
	/*
	 * 6. 编写程序， 判断一个变量x的值，如果是1，输出x=1，如果是5，输出x=5，
	 * 如果是10，输出x=10，除了以上几个值，都输出x=none。（知识点：条件语句）
	 * 
	 */			
	public static void xValue(int x) {
		switch(x) {
		case 1:
			System.out.println(&quot;x=1&quot;);
			break;
		case 5:
			System.out.println(&quot;x=5&quot;);
			break;
		case 10:
			System.out.println(&quot;x=10&quot;);
			break;
		default:
			System.out.println(&quot;x=none&quot;);
			break;
		}
	}
	
	public static void main(String[] args)
	{
		xValue(45);//6	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>判断一个数字是否能被5和6同时整除（打印能被5和6整除），或只能被5整除（打印能被5整除），或只能被6整除，（打印能被6整除），不能被5或6整除，（打印不能被5或6整除）（知识点：条件语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 7. 判断一个数字是否能被5和6同时整除（打印能被5和6整除），
	 * 或只能被5整除（打印能被5整除），
	 * 或只能被6整除，（打印能被6整除），
	 * 不能被5或6整除，（
	 * 打印不能被5或6整除）（知识点：条件语句）
	 */
	public static void exactDivisionFiveAndSix(int num) {
		if((num%5 == 0) &amp;&amp; (num%6 == 0)) {
			System.out.println(num + &quot; 能被5和6整除&quot;);
		}else if((num%5 == 0) &amp;&amp; (num%6 != 0)){
			System.out.println(num + &quot; 能被5整除&quot;);
		}else if((num%5 != 0) &amp;&amp; (num%6 == 0)) {
			System.out.println(num + &quot; 能被6整除&quot;);
		}else {
			System.out.println(num + &quot; 不能被5或6整除&quot;);
		}
	}
	public static void main(String[] args)
	{
		exactDivisionFiveAndSix(3);//7
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>输入一个年份，判断这个年份是否是闰年（知识点：条件、循环语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 8. 输入一个年份，判断这个年份是否是闰年（知识点：条件、循环语句）
	 * 备注 闰年满足的条件为：
	 *  1.不能被100整除的年份 能被4整除 
	 *  2. 能被100整除的年份 能被400整除的
	 */
	public static void isLeapYear(int year) {
		if((((year % 100) != 0) &amp;&amp; (year % 4 == 0)) ||
				((year % 100 == 0) &amp;&amp; (year % 400 == 0))) {
			System.out.println(year + &quot;年是闰年&quot;);
		}else {
			System.out.println(year + &quot;年不是闰年&quot;);
		}
	}
	public static void main(String[] args)
	{
		isLeapYear(0);//8
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>输入一个0～100的分数，如果不是0～100之间，打印分数无效，根据分数等级打印A,B,C,D,E（知识点：条件语句if elseif）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 9. 输入一个0～100的分数，如果不是0～100之间，打印分数无效，
	 * 根据分数等级打印A,B,C,D,E（知识点：条件语句if elseif）
	 */
	public static void scoreGrade2(int score) {
		if(score &gt; 100 || score &lt; 0) {
			System.out.println(&quot;给定成绩范围应该在0到100之间 &quot; + score + &quot;超出边界&quot;);
		}else {
			int grade = score / 10;
			switch (grade) {
			case 10:
			case 9:
				System.out.println(&quot;您的成绩等绩等级为 A &quot;);
				break;
			case 8:
				System.out.println(&quot;您的成绩等绩等级为 B &quot;);
				break;
			case 7:
				System.out.println(&quot;您的成绩等绩等级为 C &quot;);
				break;
			case 6:
				System.out.println(&quot;您的成绩等绩等级为 D &quot;);
				break;
			default:
				System.out.println(&quot;您的成绩等绩等级为 E &quot;);
				break;
			}
		}
	}
	public static void main(String[] args)
	{
		scoreGrade2(90);//9
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>输入三个整数x,y,z，请把这三个数由小到大输出（知识点：条件语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 10. 输入三个整数x,y,z，请把这三个数由小到大输出（知识点：条件语句）
	 */
	public static void sortAscNum(int num_x,int num_y,int num_z)
	{
		if(num_x &gt; num_y &amp;&amp; num_y &gt; num_z) {
			System.out.print(num_z);
			System.out.print(&quot; &quot; + num_y);
			System.out.print(&quot; &quot; + num_x);
		}else if (num_x &lt; num_y &amp;&amp; num_y &lt; num_z) {
			System.out.print(num_x);
			System.out.print(&quot; &quot; + num_y);
			System.out.print(&quot; &quot; + num_z);
		}else if (num_x &gt; num_y &amp;&amp; num_y &lt; num_z &amp;&amp; num_x &gt; num_z) {
			System.out.print(num_y);
			System.out.print(&quot; &quot; + num_z);
			System.out.print(&quot; &quot; + num_x);
		}else if(num_x &gt; num_y &amp;&amp; num_y &lt; num_z &amp;&amp; num_x &lt; num_z){
			System.out.print(num_y);
			System.out.print(&quot; &quot; + num_x);
			System.out.print(&quot; &quot; + num_z);
		}else if(num_x &lt; num_z &amp;&amp; num_x &lt; num_y &amp;&amp; num_z &gt; num_y){
			System.out.print(num_x);
			System.out.print(&quot; &quot; + num_z);
			System.out.print(&quot; &quot; + num_y);
		}else {
			System.out.print(num_z);
			System.out.print(&quot; &quot; + num_x);
			System.out.print(&quot; &quot; + num_y);
		}
	}
	public static void main(String[] args)
	{
		sortAscNum(23,12,7);//10	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>有一个不多于5位的正整数，求它是几位数，分别打印出每一位数字。（知识点：条件语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 11. 有一个不多于5位的正整数，求它是几位数，
	 * 分别打印出每一位数字。（知识点：条件语句）
	 * 
	 */
	public static void severalDigits(int num_unknown) {
		if((num_unknown &gt; 0) &amp;&amp; (num_unknown &lt; 100000)) {
			int num_unkn_w = num_unknown / 10000,
					num_unkn_k = num_unknown % 10000 / 1000,
					num_unkn_b = num_unknown % 1000 / 100,
					num_unkn_s = num_unknown % 100 / 10,
					num_unkn_g = num_unknown % 10;
			if(num_unkn_w != 0) {
				System.out.println(num_unknown + &quot;是五位数&quot;);
				System.out.println(&quot;此数字的万位是：&quot; + num_unkn_w);
				System.out.println(&quot;此数字的千位是：&quot; + num_unkn_k);
				System.out.println(&quot;此数字的百位是：&quot; + num_unkn_b);
				System.out.println(&quot;此数字的十位是：&quot; + num_unkn_s);
				System.out.println(&quot;此数字的个位是：&quot; + num_unkn_g);
			}else if(num_unkn_k != 0){
				System.out.println(num_unknown + &quot;是四位数&quot;);
				System.out.println(&quot;此数字的千位是：&quot; + num_unkn_k);
				System.out.println(&quot;此数字的百位是：&quot; + num_unkn_b);
				System.out.println(&quot;此数字的十位是：&quot; + num_unkn_s);
				System.out.println(&quot;此数字的个位是：&quot; + num_unkn_g);
			}else if (num_unkn_b != 0) {
				System.out.println(num_unknown + &quot;是三位数&quot;);
				System.out.println(&quot;此数字的百位是：&quot; + num_unkn_b);
				System.out.println(&quot;此数字的十位是：&quot; + num_unkn_s);
				System.out.println(&quot;此数字的个位是：&quot; + num_unkn_g);
			}else if (num_unkn_s != 0) {
				System.out.println(num_unknown + &quot;是二位数&quot;);
				System.out.println(&quot;此数字的百位是：&quot; + num_unkn_s);
				System.out.println(&quot;此数字的个位是：&quot; + num_unkn_g);
			}else{
				System.out.println(num_unknown + &quot;是一位数&quot;);
				System.out.println(&quot;此数字的个位是：&quot; + num_unkn_g);
			}
		}
	}
	public static void main(String[] args)
	{
		severalDigits(43434);//11
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12"><li>编写一个程序，计算邮局汇款的汇费。如果汇款金额小于100元，汇费为一元，如果金额在100元与5000元之间，按1%收取汇费，如果金额大于5000元，汇费为50元。汇款金额由命令行输入。（知识点：条件语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 12. 编写一个程序，计算邮局汇款的汇费。
	 * 如果汇款金额小于100元，汇费为一元，如果金额在100元与5000元之间，
	 * 按1%收取汇费，如果金额大于5000元，
	 * 汇费为50元。汇款金额由命令行输入。（知识点：条件语句）
	 */
	public static void remittanceFee(int money) {
		if(money &lt; 100) {
			System.out.println(money + &quot;元的汇费为：1元&quot;);
		}else if(money &gt;= 100 &amp;&amp; money &lt;= 5000){
			double remoney = money * 0.01;
			System.out.println(money + &quot;元的汇费为：&quot; +remoney +&quot;元&quot;);
		}else {
			System.out.println(money + &quot;元的汇费为：50元&quot;);
		}
	}
	public static void main(String[] args)
	{
		remittanceFee(4343);//12	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li>分别使用for循环，while循环，do循环求1到100之间所有能被3整除的整数的和。（知识点：循环语句）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 13. 分别使用for循环，while循环，
	 * do循环求1到100之间所有能被3整除的整数的和。（知识点：循环语句）
	 */
	public static void sum_for3() {
		int sum = 0;
		for (int i = 1; i &lt;= 100; i++) {
			if(i%3 == 0) {
				sum += i;
			}
		}
		System.out.println(sum);
	}
	public static void sum_while() {
		int sum = 0,
			index = 1;	
		while(index &lt;= 100) {
			if(index % 3 == 0) {
				sum += index;
			}
			index++;
		}
		System.out.println(sum);
	}
	public static void sum_doWhile() {
		int sum = 0,
			index = 0;
		do{
			if(index % 3 == 0) {
				sum += index;
			}
			index++;
		}while(index &lt;=100);
		System.out.println(sum);
	}
	public static void main(String[] args)
	{
		sum_for3();//13
		sum_while();//13
		sum_doWhile();//13
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14"><li>输出0-9之间的数，但是不包括5。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 14. 输出0-9之间的数，但是不包括5。
	 */
	public static void outputNum() {
		for(int i=0;i &lt; 10;i++) {
			if(i != 5) {
				System.out.println(i);
			}
		}
	}
	public static void main(String[] args)
	{
		outputNum();//14
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="15"><li>编写一个程序，求整数n的阶乘，例如5的阶乘是1*2*3*4*5</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	/**
	 * 15. 编写一个程序，求整数n的阶乘，例如5的阶乘是1*2*3*4*5
	 *  备注：此函数暂不考虑小于0的特殊情况。。。
	 */
	public static void factorial(int num) {
		if(num &lt; 1) {
			System.out.println(&quot;请输入一个大于0的整数&quot;);
		}else {
//			long facNum = num * factorial(num - 1);
			long resultNum = 1;
			for (int i = 1; i &lt; num + 1; i++) {
				resultNum *= i;
			}
			System.out.println(num + &quot;  的阶乘是： &quot; + resultNum );
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="16"><li>编写一个程序，找出大于200的最小的质数</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	/**
	 * 	16. 编写一个程序，找出大于200的最小的质数
	 * https://blog.csdn.net/afei__/article/details/80638460
	  *  概念：
	  *      质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数。
	 *   0和1既不是质数也不是合数，最小的质数是2
	 */
	public static void primeNum() {//大于200的最小的质数是： 211
		for (int i = 200;; i++) {
			boolean temp = true;//定义一个初始变量
			for (int j = 2; j &lt; i; j++) {
				if(i%j == 0) {//能够被整除是合数，则跳过此数
					System.out.println(i + &quot; 是合数能够被数值  &quot;+j + &quot;  整除&quot;);
					temp = false;
					continue;
				}
			}
			if(temp) {
				System.out.println(&quot;大于200的最小的质数是： &quot;+i);
				break;
			}
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="17"><li>由命令行输入一个4位整数，求将该数反转以后的数，如原数为1234，反转后的数位4321</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	
	/*
	 * 17. 由命令行输入一个4位整数，求将该数反转以后的数，如原数为1234，反转后的数位4321
	  *  此处我就不从命令行输入数字咯。。。。没有原因。。。因为就是懒。。。
	 */
	public static void reverseNum(int num) {
		if(num &gt; 0 &amp;&amp; num &lt; 9999) {
			int num_k = num / 1000,
					num_b = num / 100 % 10,
					num_s = num / 10 % 10,
					num_g = num % 10,
					num_reserve = num_g * 1000 +
					num_s * 100 + num_b * 10 + num_k;
			System.out.println(num +&quot; 反转以后的数字为：&quot; +num_reserve);
		}else {
			System.out.println(&quot;输入的数字应该在0~9999之间&quot;);
		}
	}
	public static void main(String[] args)
	{	
		reverseNum(3461);//17

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java初级测试题三-流程控制语句(17-17)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,40);function v(u,a){return i(),t("div",null,[e(" more "),d])}const r=n(l,[["render",v],["__file","java24.html.vue"]]);export{r as default};

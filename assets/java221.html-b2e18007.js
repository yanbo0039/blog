import{_ as t,X as s,Y as a,a1 as d,Z as n,$ as i,a2 as l,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},m={id:"_221-java工具类-calendar日历类-练习题-md",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_221-java工具类-calendar日历类-练习题-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--221-Java-Calendar--6h32ay56bqgktp1deqzbsj3hla992mr53o.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.日期类.练习;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

/**
 * 9. 【综合练习】输入日期格式字符串作为商品的生产日期，输入保质期（天）；计算截止到今天，该商品还有多少天会过保质期
	1、控制台输入字符串转为日期格式
	2、将输入日期增加保质期天数
	3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期”
  	    
	4、如果没有过期，输出天数
 */
public class _01 {

	public static void main(String[] args) throws ParseException {
		Scanner scanner = new Scanner(System.in);
		
		//1、控制台输入字符串转为日期格式
		System.out.println(&quot;请输入商品的生产日期:（yyyy-MM-dd）&quot;);
		String strDate = scanner.nextLine();
		
		//字符串 -&gt; 日期
		SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);
		Date produceDate = sdf.parse(strDate);
		
		//输入保质期天数
		System.out.println(&quot;请输入保质期（天）：&quot;);
		long day = scanner.nextLong();
		
		//2、将输入日期增加保质期天数（得到：过期日期）
		long millionSecond = produceDate.getTime() + day*24*60*60*1000;
		Date deadLineDate = new Date(millionSecond);
		
		//今天的日期
		Date today = new Date();
		System.out.println(&quot;今天的日期为：&quot; + sdf.format(today) );
		System.out.println(&quot;过期的日期为：&quot; + sdf.format(deadLineDate) );
		
		//3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期”
		if(deadLineDate.compareTo(today) == -1)
		{
			System.out.println(&quot;该商品已经过期&quot;);
		}
		//4、如果没有过期，输出天数
		else
		{
			//剩余天数
			long availableDays = (deadLineDate.getTime() - today.getTime())/1000/60/60/24;
			System.out.println(&quot;还有 &quot; + availableDays + &quot;天过期&quot;);
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.日期类.练习;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

/**
 * 4、巴黎时间比北京时间晚7个小时，纽约时间比北京时间晚12个小时，试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。[必做题]
 */
public class _02 {
	
	public static void main(String[] args) throws ParseException {
		//方式一
		//methodOne();
		
		//方式二
		MethodTwo();
	}

	private static void MethodTwo() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);
		
		//输入北京时间
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入北京时间：&quot;);
		String strDate = scanner.nextLine();
		
		//字符串 -&gt; 日期
		//北京时间
		Calendar beijing = Calendar.getInstance();
		beijing.setTime(sdf.parse(strDate));
		System.out.println(&quot;北京时间：&quot; + sdf.format(beijing.getTime()));
		
		//巴黎时间：比北京时间晚7个小时
		beijing.add(Calendar.HOUR, -7);
		System.out.println(&quot;巴黎时间：&quot; + sdf.format(beijing.getTime()));
		
		//纽约时间：比北京时间晚12个小时
		beijing.add(Calendar.HOUR, -5);
		System.out.println(&quot;纽约时间：&quot; + sdf.format(beijing.getTime()));
	}

	private static void methodOne() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);
		
		//输入北京时间
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入北京时间：&quot;);
		String strDate = scanner.nextLine();
		
		//字符串 - &gt;日期
		//北京时间
		Date beijing = sdf.parse(strDate);
		System.out.println(&quot;北京时间：&quot; + sdf.format(beijing));
		
		//巴黎时间：比北京时间晚7个小时
		Date paris = new Date(beijing.getTime() - 7*60*60*1000);
		System.out.println(&quot;巴黎时间：&quot; + sdf.format(paris));
		
		//纽约时间：比北京时间晚12个小时
		Date newYork = new Date(beijing.getTime() - 12*60*60*1000);
		System.out.println(&quot;纽约时间：&quot; + sdf.format(newYork));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.日期类.练习;

import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

import com.tencent.chapter01.日期类.DateUtil;

/**
 * 4、巴黎时间比北京时间晚7个小时，纽约时间比北京时间晚12个小时，试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。[必做题]
 */
public class _02_使用工具类 {
	
	public static void main(String[] args) throws ParseException {
		//方式一
		//methodOne();
		
		//方式二
		//MethodTwo();
	}

	private static void MethodTwo(){
		//输入北京时间
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入北京时间：&quot;);
		String strDate = scanner.nextLine();
		
		//字符串 -&gt; 日历Calendar
		//北京时间
		Calendar beijing = DateUtil.stringToCalendar(strDate);
		System.out.println(&quot;北京时间：&quot; + DateUtil.calendarToString(beijing));
		
		//巴黎时间：比北京时间晚7个小时
		beijing.add(Calendar.HOUR, -7);
		System.out.println(&quot;巴黎时间：&quot; + DateUtil.calendarToString(beijing));
		
		//纽约时间：比北京时间晚12个小时
		beijing.add(Calendar.HOUR, -5);
		System.out.println(&quot;纽约时间：&quot; + DateUtil.calendarToString(beijing));
	}

	private static void methodOne() throws ParseException {
		//输入北京时间
		Scanner scanner = new Scanner(System.in);
		System.out.println(&quot;请输入北京时间：&quot;);
		String strDate = scanner.nextLine();
		
		//字符串 - &gt;日期
		//北京时间
		Date beijing = DateUtil.stringToUtilDate(strDate);
		System.out.println(&quot;北京时间：&quot; + DateUtil.utilDateToString(beijing));
		
		//巴黎时间：比北京时间晚7个小时
		Date paris = new Date(beijing.getTime() - 7*60*60*1000);
		System.out.println(&quot;巴黎时间：&quot; + DateUtil.utilDateToString(paris));
		
		//纽约时间：比北京时间晚12个小时
		Date newYork = new Date(beijing.getTime() - 12*60*60*1000);
		System.out.println(&quot;纽约时间：&quot; + DateUtil.utilDateToString(newYork));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java工具类-Calendar日历类-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function p(g,S){const e=r("ExternalLinkIcon");return s(),a("div",null,[d(" more "),n("h1",m,[u,i(),n("a",b,[i("221-Java工具类-Calendar日历类-练习题.md"),l(e)])]),o])}const D=t(c,[["render",p],["__file","java221.html.vue"]]);export{D as default};

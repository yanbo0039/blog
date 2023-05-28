import{_ as t,X as a,Y as d,a1 as l,Z as n,$ as i,a2 as s,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_220_1.png",m={},u={id:"_220-java工具类-calendar日历类-md",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_220-java工具类-calendar日历类-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--220-Java-Calendar-3t81am00a367cde9ae30hla.md",target:"_blank",rel:"noopener noreferrer"},p=r('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.日期类;

import java.util.Calendar;
import java.util.Date;

public class CalendarDemo {

	public static void main(String[] args) {
		/**
		 * 1.创建对象
		 */
		Calendar calendar = Calendar.getInstance();
		System.out.println(calendar);
		
		/**
		 * 2.常用方法
		 */
		//set() 根据指定的时间属性，替换原有的日期
		//calendar.set(2020, 1, 1, 17, 16, 10);
		//System.out.println(calendar);
		
		//add() 添加日期属性
		//calendar.add(Calendar.DAY_OF_MONTH, 5);//加5天
		//System.out.println(calendar);
		
		//calendar.add(Calendar.MONTH, 1);//加1月
		//System.out.println(calendar);
		
		//get() 获取指定属性的日期信息
		int year = calendar.get(Calendar.YEAR);
		int month = calendar.get(Calendar.MONTH) + 1;  // 0~11 表示1-12月
		int day = calendar.get(Calendar.DAY_OF_MONTH);
		
		int hour12 = calendar.get(Calendar.HOUR);       //12小时制
		int hour24 = calendar.get(Calendar.HOUR_OF_DAY);//24小时制
		
		int minute = calendar.get(Calendar.MINUTE);
		int second = calendar.get(Calendar.SECOND);
		
		int weekday = calendar.get(Calendar.DAY_OF_WEEK);//1~7表示星期日~星期六
		
		int am = calendar.get(Calendar.AM_PM);//上午 0  下午1
		
		//2019-9-5  17:27:32  5 1
		System.out.println(year + &quot;-&quot; + month + &quot;-&quot; + day + &quot;  &quot; + hour24 + &quot;:&quot; + minute + &quot;:&quot; +second + &quot;  &quot; + weekday + &quot; &quot; + am);
	
		//getTime() : 将Calendar -&gt; Date
		Date date = calendar.getTime();
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.日期类;

import java.util.Date;

public class DateDemo {

	public static void main(String[] args) {
		/**
		 * 1.创建对象
		 */
		//1.获取当前系统时间
		Date now = new Date();
		System.out.println(now);//Thu Sep 05 11:11:53 CST 2019
		
		//2.获取指定毫秒值的日期
		Date date = new Date(1667653204883L);
		System.out.println(date);//Sat Nov 05 21:00:04 CST 2022
		
		/**
		 * 2.常用方法
		 */
		//getTime() 获取日期毫秒值
		System.out.println(now.getTime());//1567653204883
		
		//after() 测试此日期是否在指定日期之后
		System.out.println(now.after(date)); //now &gt; date,返回true，否则false
		
		//before() 测试此日期是否在指定日期之前
		System.out.println(now.before(date));//now &lt; date，返回true,否则false
		
		//compareTo() 比较两个日期的顺序
		System.out.println(now.compareTo(date));//  -1 now &lt; date,返回-1
		System.out.println(date.compareTo(now));//  1  date &gt; now，返回+1
		System.out.println(date.compareTo(date));// 0 两个日期相等，返回0
		
		//equals() 比较两个日期是否相等，比较两个日期的毫秒值
		System.out.println(now.equals(date));//false
		
		//toLocaleString() 将日期转换为本地格式字符串
		System.out.println(now.toLocaleString());//2019-9-5 11:20:27
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.日期类;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 日期工具类：
		String -&gt; java.util.Date
		java.util.Date -&gt; String
		
		String -&gt; Calendar
		Calendar -&gt; String
		
		java.sql.Date -&gt; java.util.Date&lt;略&gt;
		java.util.Date -&gt; java.sql.Date&lt;略&gt;
 */
public class DateUtil {
	
	private static SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);

	/**
	 * String -&gt; java.util.Date
	 * 
	 * @param source 字符串格式的日期
	 * @return  java.util.Date
	 */
	public static Date stringToUtilDate(String source)
	{
		try {
			return sdf.parse(source);
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * java.util.Date -&gt; String
	 * 
	 * @param date 日期
	 * @return 格式化之后的日期字符串
	 */
	public static String utilDateToString(Date date)
	{
		return sdf.format(date);
	}
	
	/**
	 * String -&gt; Calendar : 
	 *  		实际转换路径 String -&gt; Date -&gt; Calendar
	 *  
	 * @param source 字符串格式的日期
	 * @return Calendar日历
	 */
	public static Calendar stringToCalendar(String source)
	{
		try {
			//字符串  -&gt; Date
			Date date = sdf.parse(source);
			
			//Date -&gt; Calendar
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(date);
			
			return calendar;
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * Calendar -&gt; String : 
	 * 			实际转换路径  Calendar -&gt; Date -&gt; String
	 * 
	 * @param calendar 日历类
	 * @return 格式化后的日期字符串
	 */
	public static String calendarToString(Calendar calendar)
	{
		//Calendar -&gt; Date
		Date date = calendar.getTime();
		
		//Date -&gt; String
		return sdf.format(date);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.日期类;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleDateFormatDemo {

	public static void main(String[] args) throws ParseException {
		/**
		 * format（） 日期 -&gt; 指定格式的字符串
		 * 
		 * 		M 月份
		 *      m 分钟
		 *      H 24小时制
		 *      h 12小时制
		 *      E 星期
		 *      a 午别
		 */
		Date now = new Date();
		System.out.println(now);//Thu Sep 05 11:21:19 CST 2019
		
		SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);//数据库 yyyy-mm-dd hh24:mi:ss
		String strDate = sdf.format(now);
		System.out.println(strDate);//2019-09-05 11:23:39
		
		SimpleDateFormat sdf2 = new SimpleDateFormat(&quot;yyyy/MM/dd HH:mm:ss&quot;);//数据库 yyyy-mm-dd hh24:mi:ss
		String strDate2 = sdf2.format(now);
		System.out.println(strDate2);//2019/09/05 11:24:20
		
		SimpleDateFormat sdf3 = new SimpleDateFormat(&quot;yyyy年MM月dd日  HH:mm:ss E a&quot;);//数据库 yyyy-mm-dd hh24:mi:ss
		String strDate3 = sdf3.format(now);
		System.out.println(strDate3);//2019年09月05日  11:28:10  星期四  上午
		
		/**
		 * parse（） 指定格式的字符串 -&gt; 日期
		 */
		String str = &quot;2019-09-05 11:25:21&quot;;
		System.out.println(sdf.parse(str));//Thu Sep 05 11:25:21 CST 2019
		
		String str2 = &quot;2019/09/05 11:25:21&quot;;
		System.out.println(sdf2.parse(str2));//Thu Sep 05 11:25:21 CST 2019
		
		String str3 = &quot;2019年09月05日  11:25:21 星期四 上午&quot;;
		System.out.println(sdf3.parse(str3));//Thu Sep 05 11:25:21 CST 2019
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java工具类-Calendar日历类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,16);function g(S,h){const e=v("ExternalLinkIcon");return a(),d("div",null,[l(" more "),n("h1",u,[b,i(),n("a",o,[i("220-Java工具类-Calendar日历类.md"),s(e)])]),p])}const y=t(m,[["render",g],["__file","index.html.vue"]]);export{y as default};

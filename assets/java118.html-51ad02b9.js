import{_ as i,X as l,Y as n,a1 as r,Z as t,$ as e,a2 as d,a0 as s,F as u}from"./framework-68dd73a2.js";const o={},c={id:"_118-java-日期类与字符串类之间互转-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_118-java-日期类与字符串类之间互转-md","aria-hidden":"true"},"#",-1),v={href:"http://xn--118-Java--3c6nmm4jy5as12k7c7atdels7hk9eea6908gfx2a.md",target:"_blank",rel:"noopener noreferrer"},b=s(`<h4 id="日期类" tabindex="-1"><a class="header-anchor" href="#日期类" aria-hidden="true">#</a> 日期类</h4><ul><li><p>Date 类</p><ul><li>java.util.Date。</li><li>Date 类表示指定的时间信息，可以精确到毫秒。</li><li>不支持国际化。</li><li>该类的许多方法已过时。</li><li>获取当前系统时间：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new  Date();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在我们更应该多使用 Calendar 类实现日期和时间字段之间转换，使用 DateFormat 类来格式化和分析日期字符串；Date 中的相应方法已废弃</p><ul><li>Date类常用方法</li></ul><table><thead><tr><th>方法</th><th>含义</th></tr></thead><tbody><tr><td>boolean after(Date when)</td><td>测试此日期是否在指定日期之后</td></tr><tr><td>boolean before(Date when)</td><td>测试此日期是否在指定日期之前</td></tr><tr><td>int compareTo(Date anotherDate)</td><td>比较两个日期的顺序。如果参数 Date 等于此 Date，则返回值 0；如果此 Date 在 Date 参数之前，则返回小于 0 的值；如果此 Date 在 Date 参数之后，则返回大于 0 的值。</td></tr><tr><td>boolean equals(Object obj)</td><td>比较两个日期的相等性。</td></tr></tbody></table><ul><li><p>Calendar 类</p><ul><li>java.util.Calendar。 <ul><li>java.util.GregorianCalendar</li></ul></li><li>常用的日期处理的对象。可以设置自己的时区和国际化格式。</li><li>是一个抽象类。</li><li>Calendar 抽象类定义了足够的方法，让我们能够表述日历的规则 。</li><li>获取Calendar对象的实例</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Calendar c = Calendar.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>获取Calendar对象的实例：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Calendar c = Calendar.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置Calendar实例所表示的时间：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>c.set(2011,6,16);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>获取指定的时间属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>c.get(Calendar.YEAR);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Calendar类常用属性</li></ul><table><thead><tr><th>属性</th><th>含义</th></tr></thead><tbody><tr><td>static int HOUR</td><td>小时时间</td></tr><tr><td>static int MINUTE</td><td>分时间</td></tr><tr><td>static int SECOND</td><td>秒时间</td></tr><tr><td>static int DATE</td><td>日期的Date部分</td></tr><tr><td>static int MONTH</td><td>日期的Month部分</td></tr><tr><td>static int YEAR</td><td>日期的年部分</td></tr></tbody></table><h4 id="simpledateformat类" tabindex="-1"><a class="header-anchor" href="#simpledateformat类" aria-hidden="true">#</a> SimpleDateFormat类</h4><ul><li>SimpleDateFormat类 <ul><li>java.text.SimpleDateFormat 。</li><li>一个以与语言环境相关的方式来格式化和分析日期的具体类。是抽象类java.text.DateFormat类的子类。</li><li>SimpleDateFormat 使得可以选择任何用户定义的日期-时间格式的模式 。</li></ul></li><li>SimpleDateFormat类的使用 <ul><li>获取SimpleDateFormat的实例</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将日期格式成指定的字符串</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sdf.format(new Date());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将格式化的字符串转换成日期对象</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sdf.parse(“2011-07-16”);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>SimpleDateFormat类中的模式字母</li></ul><table><thead><tr><th>字母</th><th>日期或时间元素</th></tr></thead><tbody><tr><td>y</td><td>年</td></tr><tr><td>M</td><td>年中的月份</td></tr><tr><td>d</td><td>月份中的天数</td></tr><tr><td>E</td><td>星期中的天数</td></tr><tr><td>a</td><td>Am/pm 标记</td></tr><tr><td>H</td><td>一天中的小时数（0-23）</td></tr><tr><td>h</td><td>am/pm 中的小时数（1-12）</td></tr><tr><td>m</td><td>小时中的分钟数</td></tr><tr><td>s</td><td>分钟中的秒数</td></tr><tr><td>S</td><td>毫秒数</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 日期类;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test日期操作 {

	public static void main(String[] args) {

		//1.如何把日期-----&gt;String
		Date date = new Date();
		String d = date.toString();
		System.out.println(d);//格林威治时间 Fri Jul 12 09:22:38 CST 2019
		
		SimpleDateFormat sdf1 = new SimpleDateFormat();
		System.out.println(sdf1.format(date));//19-7-12 上午9:22
		
		SimpleDateFormat sdf2 = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);//给个模式
		System.out.println(sdf2.format(date));//2019-07-12 09:25:02
		//2.如何把String ------&gt; 日期
		String str1 = &quot;2019-10-12&quot;;
		String str2 = &quot;2018/11/23&quot;;
		
		SimpleDateFormat sdf3 = new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);//这里一定要指定模式
		SimpleDateFormat sdf4 = new SimpleDateFormat(&quot;yyyy/MM/dd&quot;);//这里一定要指定模式
		Date d3 = null;
		Date d4 = null;
		try {
			d3 = sdf3.parse(str1);
			d4 = sdf4.parse(str2);
			System.out.println(&quot;d3: &quot; + d3);//d3: Sat Oct 12 00:00:00 CST 2019
			System.out.println(&quot;d4: &quot; + d4);//d4: Fri Nov 23 00:00:00 CST 2018
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),p=t("em",null,"Java-日期类与字符串类之间互转",-1),h={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"},g=t("hr",null,null,-1),x=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),D=t("hr",null,null,-1),S=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function _(f,y){const a=u("ExternalLinkIcon");return l(),n("div",null,[r(" more "),t("h1",c,[m,e(),t("a",v,[e("118-Java-日期类与字符串类之间互转.md"),d(a)])]),b,t("p",null,[t("strong",null,[e("以上就是我关于 "),p,e(" 知识点的整理与总结的全部内容，"),t("a",h,[e("另附源码"),d(a)])])]),g,x,D,S])}const C=i(o,[["render",_],["__file","java118.html.vue"]]);export{C as default};

import{_ as i,X as l,Y as s,a1 as d,Z as e,$ as n,a2 as a,a0 as r,F as c}from"./framework-68dd73a2.js";const o={},v={id:"_119-java-获取当前时间的三种方法-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_119-java-获取当前时间的三种方法-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--119-Java--ob6nl98azsen80cjzsd0ag81f9p0btmmu19bei2e.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 日期类;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Test日期操作 {

	public static void main(String[] args) {
		//3.如何获取 当前时间
		//第一种：
		Date d5 = new Date();
		System.out.println(&quot;d5: &quot; + d5);//d5: Fri Jul 12 09:49:25 CST 2019
		//第二种：
		Date d6 = new Date(System.currentTimeMillis());//d6: Fri Jul 12 09:49:25 CST 2019
		System.out.println(&quot;d6: &quot; + d6);
		//第三种：使用日历
		Calendar c = Calendar.getInstance();
		
//		c.get(Calendar.YEAR);
//		c.get(Calendar.MONTH);//月要加一，西方月从0开始
//		c.get(Calendar.DATE); 
//		c.get(Calendar.HOUR_OF_DAY); 
		System.out.println(c.get(Calendar.YEAR)+&quot;年&quot;+(c.get(Calendar.MONTH)+1)+&quot;月&quot;+
				c.get(Calendar.DATE)+&quot;日&quot;+c.get(Calendar.HOUR_OF_DAY)+&quot;时&quot;);//2019年7月12日9时
		
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=e("em",null,"Java-获取当前时间的三种方法",-1),h={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"},p=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),C=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(q,j){const t=c("ExternalLinkIcon");return l(),s("div",null,[d(" more "),e("h1",v,[u,n(),e("a",m,[n("119-Java-获取当前时间的三种方法.md"),a(t)])]),b,e("p",null,[e("strong",null,[n("以上就是我关于 "),_,n(" 知识点的整理与总结的全部内容，"),e("a",h,[n("另附源码"),a(t)])])]),p,g,x,C])}const S=i(o,[["render",f],["__file","java119.html.vue"]]);export{S as default};

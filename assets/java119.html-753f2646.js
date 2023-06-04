import{_ as a,X as s,Y as d,a1 as l,Z as e,$ as n,a2 as i,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_119-java-获取当前时间的三种方法-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_119-java-获取当前时间的三种方法-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--119-Java--ob6nl98azsen80cjzsd0ag81f9p0btmmu19bei2e.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 日期类;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,5),_={class:"hint-container info"},h=e("p",{class:"hint-container-title"},"相关信息",-1),p=e("em",null,"Java-获取当前时间的三种方法",-1),g={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"};function x(f,C){const t=c("ExternalLinkIcon");return s(),d("div",null,[l(" more "),e("h1",o,[u,n(),e("a",m,[n("119-Java-获取当前时间的三种方法.md"),i(t)])]),b,e("div",_,[h,e("p",null,[e("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容，"),e("a",g,[n("另附源码"),i(t)])])])])])}const j=a(v,[["render",x],["__file","java119.html.vue"]]);export{j as default};

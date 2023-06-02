import{_ as n,X as a,Y as s,a1 as d,Z as i,$ as l,a2 as t,a0 as r,F as c}from"./framework-68dd73a2.js";const o="/blog/assets/Java_123_1.png",v={},u={id:"_123-java-集合和数组的区别-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_123-java-集合和数组的区别-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--123-Java--yx4oe7gv6cb5bv95jzszcqu1adk9f.md",target:"_blank",rel:"noopener noreferrer"},_=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>集合概述 <ul><li>Java中集合类是用来存放对象的</li><li>集合相当于一个容器，里面包容着一组对象 —— 容器类</li><li>其中的每个对象作为集合的一个元素出现</li><li>Java API提供的集合类位于java.util包内</li></ul></li><li>Java中数组与集合的比较 <ul><li>数组也是容器，它是定长的，访问较快，但是数组不会自动扩充</li><li>数组可以包含基本数据类型或引用类型的对象，而集合中只能包含引用类型的对象</li></ul></li><li>Java中集合框架层次结构</li></ul><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>为什么要掌握集合?</li></ol><ul><li>数组有缺点： <ul><li><ol><li>使用之前一定要先初始化，给定长度</li></ol></li><li><ol start="2"><li>数组一旦声明，只能放一种类型的元素</li></ol></li></ul></li><li>集合的特点： <ul><li><ol><li>集合使用之前也要初始化，但是如果集合存放不下元素的话，集合会自动扩大长度;</li></ol></li><li><ol start="2"><li>集合是一个垃圾桶，什么元素都能放;</li></ol></li></ul></li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.ArrayList;
import java.util.List;

public class TestCollection1 {

	public static void main(String[] args) {
		List list = new ArrayList(10);
		list.add(&quot;abc&quot;);
		list.add(10);
		
		list.add(new Object());
		list.add(&quot;abc&quot;);
		list.add(10);
		
		list.add(new Object());
		list.add(&quot;abc&quot;);
		list.add(10);
		
		list.add(new Object());
		list.add(&quot;abc&quot;);
		list.add(10);
		
		System.out.println(list);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,10),h={class:"hint-container tip"},p=i("p",{class:"hint-container-title"},"提示",-1),g=i("em",null,"Java-集合和数组的区别",-1),f={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function x(j,q){const e=c("ExternalLinkIcon");return a(),s("div",null,[d(" more "),i("h1",u,[m,l(),i("a",b,[l("123-Java-集合和数组的区别.md"),t(e)])]),_,i("div",h,[p,i("p",null,[i("strong",null,[l("以上就是我关于 "),g,l(" 知识点的整理与总结的全部内容，"),i("a",f,[l("另附源码"),t(e)])])])])])}const J=n(v,[["render",x],["__file","java123.html.vue"]]);export{J as default};

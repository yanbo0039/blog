import{_ as s,X as a,Y as d,a1 as l,Z as e,$ as n,a2 as i,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_132-java-treeset集合的特点-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_132-java-treeset集合的特点-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--132-Java-TreeSet-8001ap198ag7goyv008m.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Set集合;

import java.util.Set;
import java.util.TreeSet;

public class TestTreeSet {

	public static void main(String[] args) {

		//TreeSet会给元素排序
		
		/**
		 * TreeSet的特点：
		 * 1. 会排序，有大小顺序
		 * 2. 不允许存放null类型数据
		 * 
		 */
		Set&lt;Integer&gt; s = new TreeSet&lt;&gt;();
		
		s.add(100);
		s.add(56);
		s.add(34);
		s.add(8);
		
		System.out.println(s.toString());
		
		Set&lt;String&gt; s2 = new TreeSet&lt;&gt;();
		s2.add(&quot;a63c&quot;);
		s2.add(&quot;a400bc&quot;);
		//s2.add(null);
		s2.add(&quot;a7c&quot;);
		//s2.add(null);
		s2.add(&quot;a1c&quot;);
		System.out.println(s2.toString());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TreeSet集合的数据存放原理图</strong></p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_132_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,3),_=e("em",null,"Java-TreeSet集合的特点",-1),h={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),p=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),S=e("hr",null,null,-1),f=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function x(T,j){const t=c("ExternalLinkIcon");return a(),d("div",null,[l(" more "),e("h1",o,[u,n(),e("a",m,[n("132-Java-TreeSet集合的特点.md"),i(t)])]),b,e("p",null,[e("strong",null,[n("以上就是我关于 "),_,n(" 知识点的整理与总结的全部内容，"),e("a",h,[n("另附源码"),i(t)])])]),g,p,S,f])}const q=s(v,[["render",x],["__file","java132.html.vue"]]);export{q as default};

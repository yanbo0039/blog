import{_ as s,X as a,Y as d,a1 as l,Z as e,$ as n,a2 as i,a0 as r,F as c}from"./framework-68dd73a2.js";const v="/blog/assets/Java_132_1.png",o={},u={id:"_132-java-treeset集合的特点-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_132-java-treeset集合的特点-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--132-Java-TreeSet-8001ap198ag7goyv008m.md",target:"_blank",rel:"noopener noreferrer"},_=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Set集合;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TreeSet集合的数据存放原理图</strong></p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',7),h={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"提示",-1),g=e("em",null,"Java-TreeSet集合的特点",-1),S={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function f(x,T){const t=c("ExternalLinkIcon");return a(),d("div",null,[l(" more "),e("h1",u,[m,n(),e("a",b,[n("132-Java-TreeSet集合的特点.md"),i(t)])]),_,e("div",h,[p,e("p",null,[e("strong",null,[n("以上就是我关于 "),g,n(" 知识点的整理与总结的全部内容，"),e("a",S,[n("另附源码"),i(t)])])])])])}const q=s(o,[["render",f],["__file","java132.html.vue"]]);export{q as default};

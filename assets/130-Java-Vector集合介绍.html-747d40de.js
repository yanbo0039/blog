import{_ as s,X as l,Y as a,a1 as d,Z as e,$ as t,a2 as i,a0 as r,F as c}from"./framework-68dd73a2.js";const o={},v={id:"_130-java-vector集合介绍-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_130-java-vector集合介绍-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--130-Java-Vector-715xl56d749opgxd.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.ArrayList;
import java.util.List;
import java.util.Vector;

public class TestVector {

	public static void main(String[] args) {

		/**
		 * Vector是同步的，性能较差。
		 * Vector类中的方法都是synchronized的
		 * 如果一个不需要线程安全的实现
		 * 建议在使用Vector的地方使用ArrayList
		 */
		List&lt;String&gt; list = new ArrayList&lt;&gt;();
		list.add(&quot;abc&quot;);
		list.add(&quot;777c&quot;);
		list.add(&quot;123&quot;);
		list.add(&quot;456&quot;);
		list.add(&quot;456&quot;);
		list.add(&quot;aqqc&quot;);
		list.add(null);
		list.add(null);
		
		Vector&lt;String&gt; v = new Vector&lt;&gt;(list);
		
		System.out.println(v.toString());
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=e("em",null,"Java-Vector集合介绍",-1),h={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},p=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),V=e("hr",null,null,-1),x=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function q(f,L){const n=c("ExternalLinkIcon");return l(),a("div",null,[d(" more "),e("h1",v,[u,t(),e("a",m,[t("130-Java-Vector集合介绍.md"),i(n)])]),b,e("p",null,[e("strong",null,[t("以上就是我关于 "),_,t(" 知识点的整理与总结的全部内容，"),e("a",h,[t("另附源码"),i(n)])])]),p,g,V,x])}const k=s(o,[["render",q],["__file","130-Java-Vector集合介绍.html.vue"]]);export{k as default};

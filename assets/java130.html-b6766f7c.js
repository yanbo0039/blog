import{_ as s,X as a,Y as d,a1 as l,Z as t,$ as e,a2 as i,a0 as r,F as c}from"./framework-68dd73a2.js";const o={},v={id:"_130-java-vector集合介绍-md",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#_130-java-vector集合介绍-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--130-Java-Vector-715xl56d749opgxd.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,5),h={class:"hint-container info"},_=t("p",{class:"hint-container-title"},"相关信息",-1),p=t("em",null,"Java-Vector集合介绍",-1),g={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function x(V,f){const n=c("ExternalLinkIcon");return a(),d("div",null,[l(" more "),t("h1",v,[u,e(),t("a",m,[e("130-Java-Vector集合介绍.md"),i(n)])]),b,t("div",h,[_,t("p",null,[t("strong",null,[e("以上就是我关于 "),p,e(" 知识点的整理与总结的全部内容，"),t("a",g,[e("另附源码"),i(n)])])])])])}const j=s(o,[["render",x],["__file","java130.html.vue"]]);export{j as default};

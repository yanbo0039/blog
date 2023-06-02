import{_ as s,X as a,Y as l,a1 as d,Z as t,$ as i,a2 as n,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},o={id:"_127-java-list集合的双向遍历-md",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#_127-java-list集合的双向遍历-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--127-Java-List-856v05ao1aoe2727dqn7dzb1a.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class TestArrayListListIterator {

	public static void main(String[] args) {
		/**
		 * 双向遍历，必须先自前往后遍历过，然后才能自后往前
		 */
		List&lt;String&gt; list = new ArrayList&lt;&gt;();

		list.add(&quot;abc&quot;);
		list.add(&quot;777c&quot;);
		list.add(&quot;123&quot;);
		list.add(&quot;456&quot;);
		list.add(&quot;aaa&quot;);
		list.add(&quot;aqqc&quot;);
		list.add(null);
		
		ListIterator&lt;String&gt; it = list.listIterator();
		
		while(it.hasNext()) {
			System.out.println(&quot;it first while: &quot; + it.next());
		}
		
		System.out.println(&quot;======================&quot;);
		
		while(it.hasPrevious())//因为上面那个循环结束之后，指针在集合的最后，所以这个时候可以自后往前迭代访问集合
		{
			System.out.println(&quot;it second while&quot;+it.previous());
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,5),h={class:"hint-container tip"},_=t("p",{class:"hint-container-title"},"提示",-1),p=t("em",null,"Java-List集合的双向遍历",-1),q={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function g(x,f){const e=v("ExternalLinkIcon");return a(),l("div",null,[d(" more "),t("h1",o,[u,i(),t("a",m,[i("127-Java-List集合的双向遍历.md"),n(e)])]),b,t("div",h,[_,t("p",null,[t("strong",null,[i("以上就是我关于 "),p,i(" 知识点的整理与总结的全部内容，"),t("a",q,[i("另附源码"),n(e)])])])])])}const j=s(c,[["render",g],["__file","java127.html.vue"]]);export{j as default};

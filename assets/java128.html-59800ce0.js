import{_ as s,X as a,Y as d,a1 as l,Z as t,$ as i,a2 as n,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},v={id:"_128-java-linkedlist简单操作-md",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#_128-java-linkedlist简单操作-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--128-Java-LinkedList-tv34ag17c801gvdtf.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.LinkedList;

public class TestLinkedList {

	public static void main(String[] args) {

		LinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();
		list.add(&quot;abc&quot;);
		list.add(&quot;777c&quot;);
		list.add(&quot;123&quot;);
		list.add(&quot;456&quot;);
		list.add(&quot;aaa&quot;);
		list.add(&quot;aqqc&quot;);
		list.add(null);
		
		System.out.println(&quot;list.getFist(): &quot; + list.getFirst());
		System.out.println(&quot;list.getLast(): &quot; + list.getLast());
		System.out.println(&quot;=====================&quot;);
		for (int i = 0; i &lt; list.size(); i++) {
			System.out.println(list.get(i));
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,5),h={class:"hint-container tip"},_=t("p",{class:"hint-container-title"},"提示",-1),p=t("em",null,"Java-LinkedList简单操作",-1),g={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function q(L,k){const e=o("ExternalLinkIcon");return a(),d("div",null,[l(" more "),t("h1",v,[u,i(),t("a",m,[i("128-Java-LinkedList简单操作.md"),n(e)])]),b,t("div",h,[_,t("p",null,[t("strong",null,[i("以上就是我关于 "),p,i(" 知识点的整理与总结的全部内容，"),t("a",g,[i("另附源码"),n(e)])])])])])}const x=s(c,[["render",q],["__file","java128.html.vue"]]);export{x as default};

import{_ as s,X as l,Y as a,a1 as d,Z as t,$ as e,a2 as n,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},u={id:"_128-java-linkedlist简单操作-md",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#_128-java-linkedlist简单操作-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--128-Java-LinkedList-tv34ag17c801gvdtf.md",target:"_blank",rel:"noopener noreferrer"},_=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b=t("em",null,"Java-LinkedList简单操作",-1),h={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},p=t("hr",null,null,-1),g=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),q=t("hr",null,null,-1),L=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(f,x){const i=o("ExternalLinkIcon");return l(),a("div",null,[d(" more "),t("h1",u,[v,e(),t("a",m,[e("128-Java-LinkedList简单操作.md"),n(i)])]),_,t("p",null,[t("strong",null,[e("以上就是我关于 "),b,e(" 知识点的整理与总结的全部内容，"),t("a",h,[e("另附源码"),n(i)])])]),p,g,q,L])}const S=s(c,[["render",k],["__file","java128.html.vue"]]);export{S as default};

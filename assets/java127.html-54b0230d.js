import{_ as s,X as a,Y as l,a1 as d,Z as t,$ as i,a2 as e,a0 as r,F as o}from"./framework-68dd73a2.js";const v={},c={id:"_127-java-list集合的双向遍历-md",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#_127-java-list集合的双向遍历-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--127-Java-List-856v05ao1aoe2727dqn7dzb1a.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=t("em",null,"Java-List集合的双向遍历",-1),_={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},p=t("hr",null,null,-1),q=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),g=t("hr",null,null,-1),x=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(L,j){const n=o("ExternalLinkIcon");return a(),l("div",null,[d(" more "),t("h1",c,[u,i(),t("a",m,[i("127-Java-List集合的双向遍历.md"),e(n)])]),b,t("p",null,[t("strong",null,[i("以上就是我关于 "),h,i(" 知识点的整理与总结的全部内容，"),t("a",_,[i("另附源码"),e(n)])])]),p,q,g,x])}const S=s(v,[["render",f],["__file","java127.html.vue"]]);export{S as default};

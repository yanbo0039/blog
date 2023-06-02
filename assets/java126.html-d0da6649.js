import{_ as s,X as l,Y as d,a1 as a,Z as t,$ as i,a2 as e,a0 as r,F as v}from"./framework-68dd73a2.js";const u={},c={id:"_126-java-list集合的删除bug-md",tabindex:"-1"},o=t("a",{class:"header-anchor",href:"#_126-java-list集合的删除bug-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--126-Java-Listbug-4830a74wmn1p5hsfyxb.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TestArrayListBug {

	public static void main(String[] args) {
		List&lt;String&gt; list = new ArrayList&lt;&gt;();
		list.add(&quot;abc&quot;);
		list.add(&quot;777c&quot;);
		list.add(&quot;123&quot;);
		list.add(&quot;456&quot;);
		list.add(&quot;456&quot;);
		list.add(&quot;456&quot;);//4  3
		list.add(&quot;aqqc&quot;);
		list.add(null);
		list.add(null);// 7  6
		
		//需求：把元素456删除
		//用下面的代码如果两个456挨着，那么后面那个不会被删除
//		for (int i = 0; i &lt; list.size(); i++) {//0 ----- 7 list.get(7)
//			if(&quot;456&quot;.equals(list.get(i))) {
//				list.remove(i);
//			}
//			System.out.println(list.get(i));
//		}
		//解决方案：从后面往前删除就可以了
//		for (int i = list.size()-1; i &gt;=0; i--) {
//			System.out.println(list.get(i));
//			if(&quot;456&quot;.equals(list.get(i)))
//			{
//				list.remove(i);
//			}
//		}
//		
//		System.out.println(&quot;==================&quot;);
//		System.out.println(list.toString());
		
		//我自己的理解，更好的删除方法，不会漏掉任何元素
		for (int i = 0; i &lt; list.size(); i++) {
			if(&quot;456&quot;.equals(list.get(i))) {
				list.remove(i);
				i--;
			}
		}
		System.out.println(Arrays.toString(list.toArray()));
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_=t("em",null,"Java-List集合的删除bug",-1),h={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},g=t("hr",null,null,-1),p=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),q=t("hr",null,null,-1),f=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function x(y,L){const n=v("ExternalLinkIcon");return l(),d("div",null,[a(" more "),t("h1",c,[o,i(),t("a",m,[i("126-Java-List集合的删除bug.md"),e(n)])]),b,t("p",null,[t("strong",null,[i("以上就是我关于 "),_,i(" 知识点的整理与总结的全部内容，"),t("a",h,[i("另附源码"),e(n)])])]),g,p,q,f])}const j=s(u,[["render",x],["__file","java126.html.vue"]]);export{j as default};

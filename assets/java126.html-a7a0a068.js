import{_ as s,X as l,Y as a,a1 as d,Z as i,$ as t,a2 as e,a0 as r,F as v}from"./framework-68dd73a2.js";const u={},c={id:"_126-java-list集合的删除bug-md",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#_126-java-list集合的删除bug-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--126-Java-Listbug-4830a74wmn1p5hsfyxb.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,5),h={class:"hint-container info"},_=i("p",{class:"hint-container-title"},"相关信息",-1),g=i("em",null,"Java-List集合的删除bug",-1),p={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function q(f,x){const n=v("ExternalLinkIcon");return l(),a("div",null,[d(" more "),i("h1",c,[o,t(),i("a",m,[t("126-Java-List集合的删除bug.md"),e(n)])]),b,i("div",h,[_,i("p",null,[i("strong",null,[t("以上就是我关于 "),g,t(" 知识点的整理与总结的全部内容，"),i("a",p,[t("另附源码"),e(n)])])])])])}const L=s(u,[["render",q],["__file","java126.html.vue"]]);export{L as default};

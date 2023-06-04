import{_ as e,X as s,Y as a,a1 as l,Z as t,$ as i,a2 as r,a0 as d,F as v}from"./framework-68dd73a2.js";const o="/blog/assets/Java_125_1.png",c={},u=d('<h1 id="_125-java-对arraylist的迭代访问方法有哪些-md" tabindex="-1"><a class="header-anchor" href="#_125-java-对arraylist的迭代访问方法有哪些-md" aria-hidden="true">#</a> 125-Java-对ArrayList的迭代访问方法有哪些？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>示例代码如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

public class TestArrayListIterator {

	public static void main(String[] args) {

		/**
		 * 对ArrayList的迭代访问方法有哪些？
		 * 1. for循环
		 * 2. Iterator迭代器
		 * 3. 直接调用java底层API中的方法访问（两种）
		 */
		
		List&lt;String&gt; list = new ArrayList&lt;&gt;();
		list.add(&quot;abc&quot;);
		list.add(&quot;777c&quot;);
		list.add(&quot;123&quot;);
		list.add(&quot;456&quot;);
		list.add(&quot;aaa&quot;);
		list.add(&quot;aqqc&quot;);
		list.add(null);
		list.add(null);
		
		//1.for循环
		for (int i = 0; i &lt; list.size(); i++) {
			System.out.println(&quot;list for:&quot; + list.get(i));
		}
		//2.Iterator迭代器
		//此处的数据类型与之前的List数据类型需要保持一致
		Iterator&lt;String&gt; it = list.iterator();
		while(it.hasNext()) {//index = 0 &lt; list.size() index++
			System.out.println(&quot;list iterator: &quot; + it.next());
		}
		//3. 利用底层API：toArray()
		System.out.println(Arrays.toString(list.toArray()));
		System.out.println(&quot;===========&quot;);
		//4. 利用底层API: toString()
		System.out.println(list.toString());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,8),m={class:"hint-container info"},b=t("p",{class:"hint-container-title"},"相关信息",-1),p=t("em",null,"Java-对ArrayList的迭代访问方法有哪些？",-1),h={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function _(g,f){const n=v("ExternalLinkIcon");return s(),a("div",null,[l(" more "),u,t("div",m,[b,t("p",null,[t("strong",null,[i("以上就是我关于 "),p,i(" 知识点的整理与总结的全部内容，"),t("a",h,[i("另附源码"),r(n)])])])])])}const y=e(c,[["render",_],["__file","java125.html.vue"]]);export{y as default};

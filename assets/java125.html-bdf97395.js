import{_ as e,X as s,Y as l,a1 as a,Z as t,$ as i,a2 as r,a0 as d,F as v}from"./framework-68dd73a2.js";const o={},u=d(`<h1 id="_125-java-对arraylist的迭代访问方法有哪些-md" tabindex="-1"><a class="header-anchor" href="#_125-java-对arraylist的迭代访问方法有哪些-md" aria-hidden="true">#</a> 125-Java-对ArrayList的迭代访问方法有哪些？.md</h1><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_125_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>示例代码如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package List集合;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=t("em",null,"Java-对ArrayList的迭代访问方法有哪些？",-1),m={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},b=t("hr",null,null,-1),_=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),h=t("hr",null,null,-1),p=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function g(q,f){const n=v("ExternalLinkIcon");return s(),l("div",null,[a(" more "),u,t("p",null,[t("strong",null,[i("以上就是我关于 "),c,i(" 知识点的整理与总结的全部内容，"),t("a",m,[i("另附源码"),r(n)])])]),b,_,h,p])}const x=e(o,[["render",g],["__file","java125.html.vue"]]);export{x as default};

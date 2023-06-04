import{_ as e,X as s,Y as l,a1 as d,Z as n,$ as i,a2 as a,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_227-java集合类-collections集合工具类-md",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_227-java集合类-collections集合工具类-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--227-Java-Collections-1l96av19ama4171dq17jpa3382poa.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;

import java.util.ArrayList;
import java.util.Collections;

public class CollectionsDemo {

	public static void main(String[] args) {
		//addAll(collection,....elements)添N个加元素
		ArrayList list = new ArrayList();
		Collections.addAll(list, &quot;abc&quot;,123,true,&quot;中文&quot;);
		
		System.out.println(list);//[abc, 123, true, 中文]

		//copy(dest,src) 将所有元素从src复制到dest
		ArrayList src = new ArrayList();
		Collections.addAll(src, 1,2,3,4,5);
		
		ArrayList dest = new ArrayList();       
		Collections.addAll(dest, 6,7,8,9,10,11);
		
		System.out.println(&quot;复制前src：&quot; + src); //[1, 2, 3, 4, 5]
		System.out.println(&quot;复制前dest：&quot; + dest);//[6, 7, 8, 9, 10, 11]
		
		Collections.copy(dest, src);
		
		System.out.println(&quot;复制后src：&quot; + src); //[1, 2, 3, 4, 5]
		System.out.println(&quot;复制后dest：&quot; + dest);//[1, 2, 3, 4, 5, 11]
		
		//addAll（） 将dest的元素全部复制到src
		src.addAll(dest);
		System.out.println(&quot;addAll复制后src：&quot; + src); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
		System.out.println(&quot;addAll复制后dest：&quot; + dest);//[1, 2, 3, 4, 5, 11]
		
		//fill()使用指定元素填充集合
		//Collections.fill(list, null);
		//System.out.println(list);//[null, null, null, null]
		
		//max() 获取集合中最大的元素,必须保证数组元素为同一类型
		System.out.println(Collections.max(src));//11
		
		//min() 获取集合中最小的元素,必须保证数组元素为同一类型
		System.out.println(Collections.min(src));//1
		
		//sort() 默认升序排序,必须保证数组元素为同一类型
		ArrayList list2 = new ArrayList();       
		Collections.addAll(list2, 66,7,8,129,10,111);
		
		Collections.sort(list2);
		System.out.println(list2);//[7, 8, 10, 66, 111, 129]
		
		//reverse() 颠倒元素顺序
		Collections.reverse(list2);
		System.out.println(list2);//[129, 111, 66, 10, 8, 7]
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java集合类-Collections集合工具类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function p(h,_){const t=c("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",o,[u,i(),n("a",m,[i("227-Java集合类-Collections集合工具类.md"),a(t)])]),b])}const A=e(v,[["render",p],["__file","java227.html.vue"]]);export{A as default};

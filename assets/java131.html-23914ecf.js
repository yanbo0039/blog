import{_ as s,X as a,Y as l,a1 as d,Z as n,$ as e,a2 as i,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},o={id:"_131-java-hashset集合的简单运用-md",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_131-java-hashset集合的简单运用-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--131-Java-HashSet-bk80ab6gqx3u2xfvl3ave6h5p7a.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Set集合;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class TestHashSet {

	public static void main(String[] args) {

		/**
		 * Set集合的声明及初始化
		 * 
		 * 特点：
		 * 1、无序
		 * 2、无重复
		 * 3、无索引
		 * 4、可以存放null数据
		 */
		Set&lt;String&gt; s = new HashSet&lt;String&gt;();
		//往集合中添加元素
		s.add(&quot;ab3c&quot;);
		s.add(&quot;a000bc&quot;);
		s.add(null);
		s.add(&quot;abc&quot;);
		s.add(null);
		s.add(&quot;abc&quot;);
		System.out.println(s.toString());
		System.out.println();
		s.clear();
		
		//set集合的运用：南粤风采36选7
		while(s.size() &lt; 7) {
			int element = new Random().nextInt(36) + 1;//0
			s.add(element + &quot;&quot;);
		}
		System.out.println(&quot;s.toString(): &quot; + s.toString());
		System.out.println(&quot;toArray(): &quot; + Arrays.toString(s.toArray()));
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h=n("em",null,"Java-HashSet集合的简单运用",-1),_={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},p=n("hr",null,null,-1),g=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),S=n("hr",null,null,-1),x=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function q(f,j){const t=v("ExternalLinkIcon");return a(),l("div",null,[d(" more "),n("h1",o,[u,e(),n("a",m,[e("131-Java-HashSet集合的简单运用.md"),i(t)])]),b,n("p",null,[n("strong",null,[e("以上就是我关于 "),h,e(" 知识点的整理与总结的全部内容，"),n("a",_,[e("另附源码"),i(t)])])]),p,g,S,x])}const y=s(c,[["render",q],["__file","java131.html.vue"]]);export{y as default};

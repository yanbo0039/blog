import{_ as t,X as s,Y as a,a1 as l,Z as n,$ as e,a2 as d,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},u={id:"_178-java-main方法中调用非static方法-md",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_178-java-main方法中调用非static方法-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--178-Java-mainstatic-ix83a1404aha6692bia1834cpg7hucuc.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import java.util.Arrays;

public class Test {

	/**
	 * 
	 * &lt;p&gt;Title: theFirstQuestion&lt;/p&gt;  
	 * &lt;p&gt;
	 *	Description: 
	 *  1. 110元，洗剪吹31元，可以多少次洗剪吹?最后还剩多少?
	 * &lt;/p&gt;
	 */
	public void theFirstQuestion(Integer money,Integer haircut) {
		System.out.println(&quot;共有:&quot; + money + &quot;元&quot;);
		System.out.println(&quot;洗剪吹一次: &quot; + haircut + &quot;元&quot;);
		System.out.println(&quot;可以洗剪吹: &quot; + money/haircut +  &quot; 次&quot;);
		System.out.println(&quot;最后还剩: &quot; + money%haircut +  &quot; 次&quot;);
	}
	
	/**
	 * 
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *	Description: 
	 *  测试功能入口
	 * &lt;/p&gt; 
	 * @param args
	 */
	public static void main(String[] args) {
		Test test = new Test();
		test.theFirstQuestion(110, 31);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java-main方法中调用非static方法</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,6);function p(_,h){const i=c("ExternalLinkIcon");return s(),a("div",null,[l(" more "),n("h1",u,[o,e(),n("a",m,[e("178-Java-main方法中调用非static方法.md"),d(i)])]),b])}const q=t(v,[["render",p],["__file","178-Java-main方法中调用非static方法.html.vue"]]);export{q as default};

import{_ as e,X as s,Y as l,a1 as d,Z as n,$ as t,a2 as r,a0 as a,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_217-java工具类-string类常用方法练习-md",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_217-java工具类-string类常用方法练习-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--217-Java-String-bo4x879apq8ckkbz56f9g5apj2b5g9aha817l.md",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="字符串】编写一个程序-实现从命令行参数输入一字符串-统计该字符串中字符-e-出现的次数" tabindex="-1"><a class="header-anchor" href="#字符串】编写一个程序-实现从命令行参数输入一字符串-统计该字符串中字符-e-出现的次数" aria-hidden="true">#</a> 字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.String类.练习;

/**
 * 3、【字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数。（识点：String中常用的方法） [必做题]
 */
public class _03 {

	public static void main(String[] args) {
		String str = &quot;1231elsdjfsdesdlfjslee&quot;;
		
		//1.replace（）替换
		int before = str.length();
		str = str.replace(&quot;e&quot;, &quot;&quot;);
		int after = str.length();
		
		System.out.println(&quot;e出现的次数：&quot; + (before - after));
		
		//2.数组
		/*String s = &quot;1231elsdjfsdesdlfjslee&quot;;
		int count = 0;
		String[] s2 = new String[s.length()];
		for (int i = 0; i &lt; s2.length; i++) {
			s2[i] = s.substring(i, i + 1);
		}
		for (int j = 0; j &lt; s2.length; j++) {
			if (s2[j].indexOf(&#39;e&#39;) != -1) {
				count++;
			}
		}
		System.out.println(&quot;e出现的次数：&quot; + count);*/
		
		/*int count = 0;
		char[] chars = str.toCharArray();
		for (int i = 0; i &lt; chars.length; i++) {
			if(chars[i] == &#39;e&#39;)
			{
				count++;
			}
		}
		System.out.println(&quot;e出现的次数：&quot; + count);*/
		

		//3.遍历循环
		/*int count = 0;
		for (int i = 0; i &lt; str.length(); i++) {
			if(str.charAt(i) == &#39;e&#39;)
			{
				count++;
			}
		}
		System.out.println(&quot;e出现的次数：&quot; + count);*/
		
		//4.split分割字符串
	   /*String[] array = (&quot;,&quot; + str + &quot;,&quot;).split(&quot;e&quot;);
		
		System.out.println(Arrays.toString(array));
		System.out.println(&quot;e出现的次数：&quot; + (array.length - 1));*/
		
		
		//5.substring截取字符串
		int count = 0;
		while(str.indexOf(&quot;e&quot;) != -1)
		{
			count++;
			str = str.substring(str.indexOf(&quot;e&quot;)+1);
		}
		System.out.println(&quot;e出现的次数：&quot; + count);
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java工具类-String类常用方法练习</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function h(g,p){const i=v("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",u,[o,t(),n("a",m,[t("217-Java工具类-String类常用方法练习.md"),r(i)])]),b])}const q=e(c,[["render",h],["__file","java217.html.vue"]]);export{q as default};

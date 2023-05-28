import{_ as t,X as s,Y as a,a1 as l,Z as e,$ as n,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_199-java面向对象高级特性-封装-练习题-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_199-java面向对象高级特性-封装-练习题-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--199-Java---592pj06c1hyidw73e892epj1btoag48m3cpeq8chufioo.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<h4 id="创建一个球员类-并且该类最多只允许创建十一个对象" tabindex="-1"><a class="header-anchor" href="#创建一个球员类-并且该类最多只允许创建十一个对象" aria-hidden="true">#</a> 创建一个球员类，并且该类最多只允许创建十一个对象</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.封装.练习;

/**
 * &lt;p&gt;Title: Players&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *     * 1、创建一个球员类，并且该类最多只允许创建十一个对象。提示利用 static 和 封装性来完成。  [必做题]
	   类图如下：
	  效果如下：
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Players {
	//变量：统计球员创建的个数
		private static int sum;
		
		//构造函数
		private Players()
		{
			
		}
		
		//创建球员的方法
		public static Players create()
		{
			if(sum &lt; 11)
			{
				Players players = new Players();
				System.out.println(&quot;创建了一个对象&quot;);
				sum++;
				
				return players;
			}
			else
			{
				System.out.println(&quot;对不起，已经创建了11个对象，不能再创建对象了!!&quot;);
				
				return null;
			}
		}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.封装.练习;


public class PlayersTest {

	public static void main(String[] args) {
		
		//组件一支球队，需要球员11名
		Players[] team = new Players[11];
		
		int i = 0;
		while(true) {
			//创建球员
			Players players = Players.create();
			if(players == null)
			{
				break;
			}
			else
			{
				team[i] = players;
				i++;
			}
			
		}
					
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-封装-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,12);function h(p,_){const i=v("ExternalLinkIcon");return s(),a("div",null,[l(" more "),e("h1",u,[m,n(),e("a",b,[n("199-Java面向对象高级特性-封装-练习题.md"),d(i)])]),o])}const y=t(c,[["render",h],["__file","index.html.vue"]]);export{y as default};

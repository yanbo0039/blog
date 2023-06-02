import{_ as i,X as e,Y as n,a1 as a,a0 as t}from"./framework-68dd73a2.js";const s="/blog/assets/Java_16_1.png",l={},d=t(`<h1 id="java-创建一个球员类-并且该类最多只允许创建十一个对象" tabindex="-1"><a class="header-anchor" href="#java-创建一个球员类-并且该类最多只允许创建十一个对象" aria-hidden="true">#</a> Java-创建一个球员类，并且该类最多只允许创建十一个对象</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>Java题目：创建一个球员类，并且该类最多只允许创建十一个对象。提示利用 static 和 封装性来完成。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Player {
	private static int sum;
	/**
	 * 无参构造方法
	 */
	private Player()
	{
		
	}
	
	public static Player create()
	{
		sum = 1;
		Player player = null;
		while(sum &lt;= 11)
		{
			player = new Player();
			System.out.println(&quot;创建咯&quot;+sum+&quot;个对象&quot;);
			sum++;
		}
		System.out.println(&quot;对不起，已经创建咯11个对象，不能再创建对象了&quot;);
		return player;
	}
	
	public static void main(String[] args) {
		Player.create();
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',9);function r(v,c){return e(),n("div",null,[a(" more "),d])}const m=i(l,[["render",r],["__file","java16.html.vue"]]);export{m as default};

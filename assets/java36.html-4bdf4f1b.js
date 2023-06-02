import{_ as s,X as t,Y as d,a1 as l,Z as e,$ as i,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_36_1.gif",u={},m={id:"_36-java-多线程模拟玩游戏的场景-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_36-java-多线程模拟玩游戏的场景-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--36-Java--le7n53mx44akhc26rk4m02o1que9ki3pu7u.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Chat.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Chat implements Runnable{

	public void wechar() {
		while(true) {
			System.out.println(&quot;wechar&quot;);
		}
	}
	@Override
	public void run() {
		wechar();
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Play.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Play implements Runnable{

	public void playgame() {
		while(true) {
			System.out.println(&quot;playgame&quot;);
		}
	}
	@Override
	public void run() {
		playgame();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Music.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Music implements Runnable{

	public void playmusic() {
		while(true) {
			System.out.println(&quot;playmusic&quot;);
		}
	}
	@Override
	public void run() {
		playmusic();
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Test {

	public static void main(String[] args) {
		/**
		 * 模拟玩游戏
		 * 1.可以玩游戏
		 * 2.同时可以听音乐
		 * 3.同时可以和队友聊天
		 */
		Play play = new Play();
		
		Chat wechar = new Chat();
		
		Music music = new Music();
		
		Thread t1 = new Thread(play);
		t1.start();
		Thread t2 = new Thread(wechar);
		t2.start();
		Thread t3 = new Thread(music);
		t3.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',14),h={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"提示",-1),x=e("em",null,"Java-多线程模拟玩游戏的场景",-1),_={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"};function f(y,w){const n=v("ExternalLinkIcon");return t(),d("div",null,[l(" more "),e("h1",m,[o,i(),e("a",b,[i("36-Java-多线程模拟玩游戏的场景.md"),a(n)])]),p,e("div",h,[g,e("p",null,[e("strong",null,[i("以上就是我关于 "),x,i(" 知识点的整理与总结的全部内容,"),e("a",_,[i("另附源码"),a(n)])])])])])}const k=s(u,[["render",f],["__file","java36.html.vue"]]);export{k as default};

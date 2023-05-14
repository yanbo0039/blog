import{_ as a,X as l,Y as t,a1 as d,Z as e,$ as n,a2 as s,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_36_1.gif",u={},m={id:"_36-java-多线程模拟玩游戏的场景-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_36-java-多线程模拟玩游戏的场景-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--36-Java--le7n53mx44akhc26rk4m02o1que9ki3pu7u.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Chat.java
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),h=e("em",null,"Java-多线程模拟玩游戏的场景",-1),_={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),x=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),f=e("hr",null,null,-1),y=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function w(k,T){const i=v("ExternalLinkIcon");return l(),t("div",null,[d(" more "),e("h1",m,[o,n(),e("a",b,[n("36-Java-多线程模拟玩游戏的场景.md"),s(i)])]),p,e("p",null,[e("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容,"),e("a",_,[n("另附源码"),s(i)])])]),g,x,f,y])}const q=a(u,[["render",w],["__file","36-Java-多线程模拟玩游戏的场景.html.vue"]]);export{q as default};

import{_ as s,X as l,Y as t,a1 as d,Z as e,$ as n,a2 as a,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_112-java-异常处理之方法调用堆栈-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_112-java-异常处理之方法调用堆栈-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--112-Java--ju6nj07fbvcztz1sc271bhoi5ivzs3asreo52l.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<ul><li>方法调用堆栈 <ul><li>后进先出：方法A调用方法B的时候，只有方法B先完成后，方法A才完成。先执行的方法总是后完成，后执行的方法先完成，类似于数据结构中的堆栈－－后进先出，我们称之为方法调用堆栈。</li><li>如示例，仅有一条语句抛出异常，会导致所有的方法都不能正常结束。如果不想出现这样的情况，我们就要使用java的异常处理机制－抓抛模型。</li></ul></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_112_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_112_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>未例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 异常的堆栈;

public class A {

	private B b = new B();
	
	public void print() {
		b.print();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 异常的堆栈;

public class B {
	
	private C c = new C();

	public void print() {
		c.print();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 异常的堆栈;

public class C {

	public void print() {
		int i = 10/0;
		System.out.println(&quot;print...&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 异常的堆栈;

public class Test { 
	
	public static void main(String[] args) {
		A a = new A();
		
		a.print();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码运行结果：</strong></p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_112_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,10),p=e("em",null,"Java-自定义异常类",-1),g={href:"https://github.com/javaobjects/demo515",target:"_blank",rel:"noopener noreferrer"},_=e("hr",null,null,-1),h=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),f=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(j,B){const i=c("ExternalLinkIcon");return l(),t("div",null,[d(" more "),e("h1",o,[u,n(),e("a",m,[n("112-Java-异常处理之方法调用堆栈.md"),a(i)])]),b,e("p",null,[e("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容，"),e("a",g,[n("另附源码"),a(i)])])]),_,h,x,f])}const J=s(v,[["render",k],["__file","java112.html.vue"]]);export{J as default};

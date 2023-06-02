import{_ as s,X as t,Y as l,a1 as d,Z as e,$ as i,a2 as a,a0 as r,F as c}from"./framework-68dd73a2.js";const v="/blog/assets/Java_112_1.png",o="/blog/assets/Java_112_2.png",u="/blog/assets/Java_112_3.png",m={},b={id:"_112-java-异常处理之方法调用堆栈-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_112-java-异常处理之方法调用堆栈-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--112-Java--ju6nj07fbvcztz1sc271bhoi5ivzs3asreo52l.md",target:"_blank",rel:"noopener noreferrer"},_=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>方法调用堆栈 <ul><li>后进先出：方法A调用方法B的时候，只有方法B先完成后，方法A才完成。先执行的方法总是后完成，后执行的方法先完成，类似于数据结构中的堆栈－－后进先出，我们称之为方法调用堆栈。</li><li>如示例，仅有一条语句抛出异常，会导致所有的方法都不能正常结束。如果不想出现这样的情况，我们就要使用java的异常处理机制－抓抛模型。</li></ul></li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>未例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 异常的堆栈;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码运行结果：</strong></p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',14),h={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"提示",-1),f=e("em",null,"Java-自定义异常类",-1),k={href:"https://github.com/javaobjects/demo515",target:"_blank",rel:"noopener noreferrer"};function j(B,z){const n=c("ExternalLinkIcon");return t(),l("div",null,[d(" more "),e("h1",b,[p,i(),e("a",g,[i("112-Java-异常处理之方法调用堆栈.md"),a(n)])]),_,e("div",h,[x,e("p",null,[e("strong",null,[i("以上就是我关于 "),f,i(" 知识点的整理与总结的全部内容，"),e("a",k,[i("另附源码"),a(n)])])])])])}const A=s(m,[["render",j],["__file","java112.html.vue"]]);export{A as default};

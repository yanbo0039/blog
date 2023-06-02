import{_ as s,X as a,Y as l,a1 as d,Z as n,$ as e,a2 as t,a0 as r,F as c}from"./framework-68dd73a2.js";const v="/blog/assets/Java_149_1.gif",u={},o={id:"_149-java-线程的join方法-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_149-java-线程的join方法-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--149-Java-join-uf01a939edn9ausmgtu.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;
/**
 * 
* &lt;p&gt;Title: SaleTicket2&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
* 创建线程类的第二种方式：
* 继承Thread类
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class SaleTicket2 extends Thread {

	@Override
	public void run() {
		for (int i = 0; i &lt;= 100; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;打印票号：&quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;
/**
 * 
* &lt;p&gt;Title: Test1&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
* 测试第二种方式创建的线程类
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class Test2 {

	public static void main(String[] args) {
		SaleTicket2 s1 = new SaleTicket2();
		s1.start();
		
		try {
			s1.join();//调用join方法的子线程先执行完，再执行主线程，会让线程从并发变成顺序执行
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		SaleTicket2 s2 = new SaleTicket2();
		s2.start();
		
		try {
			s2.join();//调用join方法的子线程先执行完，再执行主线程，会让线程从并发变成顺序执行
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		
		for (int i = 0; i &lt; 100; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;,&quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试结果如下：</strong></p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',8),h={class:"hint-container tip"},g=n("p",{class:"hint-container-title"},"提示",-1),_=n("em",null,"Java-线程的join方法",-1),x={href:"https://github.com/javaobjects/demo521",target:"_blank",rel:"noopener noreferrer"};function f(T,k){const i=c("ExternalLinkIcon");return a(),l("div",null,[d(" more "),n("h1",o,[m,e(),n("a",b,[e("149-Java-线程的join方法.md"),t(i)])]),p,n("div",h,[g,n("p",null,[n("strong",null,[e("以上就是我关于 "),_,e(" 知识点的整理与总结的全部内容,"),n("a",x,[e("另附源码"),t(i)])])])])])}const S=s(u,[["render",f],["__file","java149.html.vue"]]);export{S as default};

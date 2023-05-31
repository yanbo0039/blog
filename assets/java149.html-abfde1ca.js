import{_ as s,X as l,Y as a,a1 as d,Z as e,$ as n,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_149_1.gif",u={},o={id:"_149-java-线程的join方法-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_149-java-线程的join方法-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--149-Java-join-uf01a939edn9ausmgtu.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试结果如下：</strong></p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),h=e("em",null,"Java-线程的join方法",-1),_={href:"https://github.com/javaobjects/demo521",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),x=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),f=e("hr",null,null,-1),T=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(j,S){const i=v("ExternalLinkIcon");return l(),a("div",null,[d(" more "),e("h1",o,[m,n(),e("a",b,[n("149-Java-线程的join方法.md"),t(i)])]),p,e("p",null,[e("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容,"),e("a",_,[n("另附源码"),t(i)])])]),g,x,f,T])}const y=s(u,[["render",k],["__file","java149.html.vue"]]);export{y as default};

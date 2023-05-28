import{_ as l,X as s,Y as d,a1 as a,Z as i,$ as e,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_148_1.gif",u="/blog/assets/Java_148_2.gif",m="/blog/assets/Java_148_3.gif",b={},o={id:"_148-java-创建线程类的三种方式-md",tabindex:"-1"},p=i("a",{class:"header-anchor",href:"#_148-java-创建线程类的三种方式-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--148-Java--ob6nf27az12b3ha166fns1dr8kb4a643a2yk.md",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>第一种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;
/**
 * 
* &lt;p&gt;Title: SaleTicket&lt;/p&gt;  
* &lt;p&gt;
* Description: 
* 创建线程类的第一种方式:
* 实现Runable接口
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class SaleTicket1 implements Runnable {

	@Override
	public void run() {

		for (int i = 0; i &lt;= 100; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;打印票号：&quot; + i);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;
/**
 * 
* &lt;p&gt;Title: Test1&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
* 测试第一种方式创建的线程类
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class Test1 {

	public static void main(String[] args) {
		SaleTicket1 s1 = new SaleTicket1();
		Thread t1 = new Thread(s1);
		t1.start();
		
		SaleTicket1 s2 = new SaleTicket1();
		Thread t2 = new Thread(s2);
		t2.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果如下：</p><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第二种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;
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
		
		SaleTicket2 s2 = new SaleTicket2();
		s2.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果如下：</p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第三种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;

import java.util.concurrent.Callable;
/**
 * 
* &lt;p&gt;Title: SaleTicket3&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
* 有返回值的线程类
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class SaleTicket3 implements Callable&lt;Integer&gt; {

	@Override
	public Integer call() throws Exception {
		for (int i = 0; i &lt;= 100; i++) {
			System.out.println(Thread.currentThread().getName() + &quot;打印票号：&quot; + i);
		}
		return 0;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 创建线程类的三种方式;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/**
 * 
* &lt;p&gt;Title: Test1&lt;/p&gt;  
* &lt;p&gt;
* 	Description: 
* 测试第三种方式创建的线程类
* &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class Test3 {

	public static void main(String[] args) {
		SaleTicket3 s1 = new SaleTicket3();
		FutureTask&lt;Integer&gt; ft1 = new FutureTask&lt;Integer&gt;(s1);
		
		SaleTicket3 s2 = new SaleTicket3();
		FutureTask&lt;Integer&gt; ft2 = new FutureTask&lt;Integer&gt;(s2);
		
		for (int i = 1; i &lt;= 100; i++) {
			System.out.println(&quot;主线程打印输出：&quot;+i);
			if(i==20)
			{
				new Thread(ft1, &quot;线程1&quot;).start();//线程就绪
			}
			if(i==30)
			{
				new Thread(ft2, &quot;线程2&quot;).start();//线程就绪
			}
		}
		//获取线程的运行结果
		try {
			System.out.println(&quot;ft1:&quot;+ft1.get());
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
		
		try {
			System.out.println(&quot;ft2:&quot;+ft2.get());
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果如下：</p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="拓展知识" tabindex="-1"><a class="header-anchor" href="#拓展知识" aria-hidden="true">#</a> 拓展知识：</h4>',16),x={href:"https://www.runoob.com/java/java-multithreading.html",target:"_blank",rel:"noopener noreferrer"},T=i("em",null,"Java-创建线程类的三种方式",-1),_={href:"https://github.com/javaobjects/demo521",target:"_blank",rel:"noopener noreferrer"},f=i("hr",null,null,-1),k=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),S=i("hr",null,null,-1),q=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function w(y,E){const n=v("ExternalLinkIcon");return s(),d("div",null,[a(" more "),i("h1",o,[p,e(),i("a",g,[e("148-Java-创建线程类的三种方式.md"),t(n)])]),h,i("p",null,[i("a",x,[e("Java 多线程编程-菜鸟教程"),t(n)])]),i("p",null,[i("strong",null,[e("以上就是我关于 "),T,e(" 知识点的整理与总结的全部内容,"),i("a",_,[e("另附源码"),t(n)])])]),f,k,S,q])}const j=l(b,[["render",w],["__file","index.html.vue"]]);export{j as default};

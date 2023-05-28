import{_ as s,X as l,Y as r,a1 as d,Z as n,$ as i,a2 as t,a0 as a,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Java_147_1.gif",c="/blog/assets/Java_147_2.png",m={},b={id:"_147-java-线程执行的原理分析-md",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_147-java-线程执行的原理分析-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--147-Java--en4os4lm69cz9n794bn2h0uo1otrj3b.md",target:"_blank",rel:"noopener noreferrer"},g=a(`<p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 多线程一;
/**
 * 打印数字的类
* &lt;p&gt;Title: PrintNumber&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月17日
 */
public class PrintNumber implements Runnable{

	private int startNumber;
	private int endNumber;
	
	/**
	 * 
	 * &lt;p&gt;Title: print&lt;/p&gt;  
	 * &lt;p&gt;Description: 打印数字的方法&lt;/p&gt;
	 */
	public void print() {
		for(int i = this.startNumber;i &lt;= this.endNumber;i++) {
			System.out.println(i);
		}
	}
	public PrintNumber(int startNumber, int endNumber) {
		this.startNumber = startNumber;
		this.endNumber = endNumber;
	}
	public int getStartNumber() {
		return startNumber;
	}
	public void setStartNumber(int startNumber) {
		this.startNumber = startNumber;
	}
	public int getEndNumber() {
		return endNumber;
	}
	public void setEndNumber(int endNumber) {
		this.endNumber = endNumber;
	}
	@Override
	public void run() {
		// 当前类实现Runnable接口，就成咯一个线程类，
		//实现Runnable接口，必须实现接口中的run方法
		//那么线程启动时会自动执行run方法
		this.print();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 多线程一;

public class Test {

	public static void main(String[] args) {

		/**
		 * 需求：朝控制台打印输出1-900这些数字
		 * 技术实现：打快点，同时让三个人(三个线程) 打印输出
		 * 一个从1-300
		 * 一个从301-600
		 * 一个从601-900
		 */
		PrintNumber p1 = new PrintNumber(1, 3000);
//		p1.print();
		PrintNumber p2 = new PrintNumber(3001, 6000);
//		p2.print();
		PrintNumber p3 = new PrintNumber(6001, 9000);
//		p3.print();
		//开辟 三个线程
		Thread t1 = new Thread(p1);//这里有传参准备就绪后会调用run方法
		t1.start();//准备就绪 
		Thread t2 = new Thread(p2);
		t2.start();
		Thread t3 = new Thread(p3);
		t3.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果：</strong></p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>线程的执行原理:</strong></p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),h=n("em",null,"Java-线程执行的原理分析",-1),_={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},N=n("hr",null,null,-1),f=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),x=n("hr",null,null,-1),T=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function P(k,w){const e=v("ExternalLinkIcon");return l(),r("div",null,[d(" more "),n("h1",b,[o,i(),n("a",p,[i("147-Java-线程执行的原理分析.md"),t(e)])]),g,n("p",null,[n("strong",null,[i("以上就是我关于 "),h,i(" 知识点的整理与总结的全部内容,"),n("a",_,[i("另附源码"),t(e)])])]),N,f,x,T])}const E=s(m,[["render",P],["__file","index.html.vue"]]);export{E as default};

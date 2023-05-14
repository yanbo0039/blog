import{_ as s,X as r,Y as l,a1 as d,Z as n,$ as e,a2 as t,a0 as a,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Java_146_1.gif",c={},m={id:"_146-java-模拟多线程环境-md",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_146-java-模拟多线程环境-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--146-Java--y67p25cq53ddztqs4ay6tngr.md",target:"_blank",rel:"noopener noreferrer"},p=a(`<p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 多线程一;
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
		PrintNumber p1 = new PrintNumber(1, 300);
		p1.print();
		PrintNumber p2 = new PrintNumber(301, 600);
		p2.print();
		PrintNumber p3 = new PrintNumber(601, 900);
		p3.print();
		//开辟 三个线程
		Thread t1 = new Thread(p1);
		t1.start();
		Thread t2 = new Thread(p2);
		t2.start();
		Thread t3 = new Thread(p3);
		t3.start();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果:</strong></p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点：</h4>',6),h={href:"https://blog.csdn.net/weixin_40134742/article/details/79713148",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/dietime1943/article/details/81225491",target:"_blank",rel:"noopener noreferrer"},g=n("em",null,"Java-模拟多线程环境",-1),N={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},f=n("hr",null,null,-1),x=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),k=n("hr",null,null,-1),T=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function P(w,y){const i=v("ExternalLinkIcon");return r(),l("div",null,[d(" more "),n("h1",m,[b,e(),n("a",o,[e("146-Java-模拟多线程环境.md"),t(i)])]),p,n("p",null,[n("a",h,[e("Eclipse使用git提交代码到远程仓库。（严谨篇）"),t(i)])]),n("p",null,[n("a",_,[e("[Git & GitHub] 解决办法：Can’t connect to any repository : not authorized / not permitted"),t(i)])]),n("p",null,[n("strong",null,[e("以上就是我关于 "),g,e(" 知识点的整理与总结的全部内容,"),n("a",N,[e("另附源码"),t(i)])])]),f,x,k,T])}const J=s(c,[["render",P],["__file","146-Java-模拟多线程环境.html.vue"]]);export{J as default};

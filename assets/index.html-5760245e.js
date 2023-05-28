import{_ as s,X as a,Y as t,a1 as v,Z as i,$ as e,a2 as l,a0 as d,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_106_1.png",u="/blog/assets/Java_106_2.png",m="/blog/assets/Java_106_3.png",b="/blog/assets/Java_106_4.png",o="/blog/assets/Java_106_5.png",p={},g={id:"_106-java-接口-md",tabindex:"-1"},x=i("a",{class:"header-anchor",href:"#_106-java-接口-md","aria-hidden":"true"},"#",-1),f={href:"http://xn--106-Java--oj8ov00l.md",target:"_blank",rel:"noopener noreferrer"},h=d(`<ul><li>接口的概念 <ul><li>接口中只包含常量和抽象方法，而没有变量和方法的实现</li><li>接口对类来说是一套规范，是一套行为协议；</li><li>接口不是一个类，不能实例化</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[访问权限修饰符]  interface   接口名 {
                          
                    接口的成员

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>接口的成员： <ul><li>常量(字段)</li><li>抽象方法</li></ul></li></ul><p><strong>拓展：</strong></p>`,4),_={href:"https://yq.aliyun.com/zt/80645",target:"_blank",rel:"noopener noreferrer"},D={href:"http://neuhub.jd.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/sun_promise/article/details/51220518",target:"_blank",rel:"noopener noreferrer"},S=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface Runnable {

    public abstract void run();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意： <ul><li>接口不是一个类，没有构造器，不能被实例化</li><li>接口使用interface关键字来定义，而不是class</li><li>接口默认： <ul><li>常量：public static final</li><li>抽象方法： public abstract</li></ul></li></ul></li></ul><p>练习：</p><p>给定以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface Foo{
    int k = 4;
}
下列选项中，哪些选项可以用来替代第2行代码？
A.final int k = 4;
B.public int k =4;
C.static int k = 4;
D.private int k = 4;
D.abstract int k = 4;
答案：ABC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下列选项中，哪些可以定义在一个接口中？
A.void methoda();
B.public double methoda();
C.public final double methoda();
D.static void methoda(double dl);
E.protected void methoda(double dl);
答案：AB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>接口可以实现多继承：</p><ul><li>用接口可以实现混合类型（主类型，副类型），java 中可以通过接口分出主次类型</li><li>主类型使用继承，副类型，使用接口实现</li></ul></li><li><p>接口可以使方法的定义和实现相分离，降低模块间或系统间的耦合性</p><ul><li>针对接口编程可以屏蔽不同实现间的差异，看到的只是实现好的功能。</li></ul></li><li><p>类实现接口 — implements</p><ul><li>为了使用一个接口，你要编写实现接口的类</li><li>如果一个类要实现一个接口，那么这个类就必须实现接口中所有抽象方法。否则这个类只能声明为抽象类</li><li>多个无关的类可以实现一个接口，一个类可以实现多个无关的接口</li><li>一个类可以在继承一个父类的同时，实现一个或多个接口</li></ul></li><li><p>接口和类的关系</p></li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>有一个Student类</p></li><li><p>该类继承了Person类，并实现了Consumer接口</p></li><li><p>该类具有String类型的属性school</p></li><li><p>并有一个study方法，在该方法中，系统可打印出学生在那所学校学习</p></li><li><p>并创 <img src="'+m+`" alt="" loading="lazy"></p></li><li><p>接口与抽象类的对比</p><ul><li>接口不能含有任何非抽象方法，而抽象类可以。</li><li>类可以实现多个接口，但只能有一个父类。</li><li>接口和接口之间可以多继承<br> 如：public interface A extends B,C B,C也是接口.</li><li>抽象类可以理解为抽象方法和非抽象方法的混合体，而接口中的方法完全是抽象方法，是一套纯粹的规范。一般来说，有关系的类才能继承同一个抽象类，而无关的类不可能有同一个抽象父类，但是无关的类可以实现同一个接口。</li></ul></li></ul><p><strong>示例代码1</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口;

/**
 * 接口
* &lt;p&gt;Title: TestInterface1&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月6日
 */
public interface TestInterface1 {

//	private int id;//代码报错不给过

//	public void setName() {
//		
//	}//代码也不让过。。。
	
	public static final String COMPANY_NAME = &quot;TENCENT&quot;;//可以定义常量
	
	public void showName();//可以定义抽象方法
	
	public static void showId() {
		//可以定义静态方法
	}
	
	default void showMoney() {
		//定义默认方法ok
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class MyFrame {

	public static void main(String[] args) {
		JFrame frame = new JFrame(&quot;我的第一个窗体&quot;);
		
		frame.setSize(200,200);
		JButton btn = new JButton(&quot;click me&quot;);
		
//		ActionListener a = new ActionListener();//报错，接口不能被实例化，
		                                       //但是我们可以通过另一种方法把接口“实例化”,如下所示
		btn.addActionListener(new ActionListener() {//匿名内部类：
													//1.让一个匿名内部类实现ActionListener接口
													//2.把这个内部类实例化

			@Override
			public void actionPerformed(ActionEvent e) {
				System.out.println(&quot;哎呀，你点击我咯&quot;);
			}
		});
		
		
		frame.add(btn);
		
		frame.setVisible(true);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码2</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Dao {

	public void add () {
		System.out.println(&quot;add()&quot;);
	}
	
	public  void delete() {
		System.out.println(&quot;delete()&quot;);
	}
	
	public void update() {
		System.out.println(&quot;update()&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Service {

	private Dao dao;
	
	public Dao getDao() {
		return dao;
	}
	
	public void setDao(Dao dao) {
		this.dao = dao;
	}
	
	public void register() {
		dao.add();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Test {

	public static void main(String[] args) {
		Service s = new Service();
		
		Dao dao = new Dao();
		
		s.setDao(dao);
		
		s.register();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从以上代码可以发现service层与dao层严重的耦合，这个时间需要解耦合， 在 Dao.java右键 ---&gt; Refactor ---&gt; Extrac Interface ---&gt; 选择需要抽取的接口以及命名点击Finish即可</p><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>解耦合后的代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Dao implements DaoIfac {

	/* (non-Javadoc)  
	 * &lt;p&gt;Title: add&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see 接口.实例.DaoIfac#add()  
	 */
	@Override
	public void add () {
		System.out.println(&quot;add()&quot;);
	}
	
	/* (non-Javadoc)  
	 * &lt;p&gt;Title: delete&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see 接口.实例.DaoIfac#delete()  
	 */
	@Override
	public  void delete() {
		System.out.println(&quot;delete()&quot;);
	}
	
	/* (non-Javadoc)  
	 * &lt;p&gt;Title: update&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see 接口.实例.DaoIfac#update()  
	 */
	@Override
	public void update() {
		System.out.println(&quot;update()&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Service {

	private DaoIfac dao;
	
	public DaoIfac getDao() {
		return dao;
	}
	
	public void setDao(DaoIfac dao) {
		this.dao = dao;
	}
	
	public void register() {
		dao.add();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public interface DaoIfac {

	void add();

	void delete();

	void update();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Test {

	public static void main(String[] args) {
		Service s = new Service();
		
		DaoIfac dao = new Dao();
		
		s.setDao(dao);
		
		s.register();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码3</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public interface B {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public interface C {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public interface D extends DaoIfac,B,C{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Dao implements D {//一个类可以实现多个接口，多个接口 之间用,号隔开

	/* (non-Javadoc)  
	 * &lt;p&gt;Title: add&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see 接口.实例.DaoIfac#add()  
	 */
	@Override
	public void add () {
		System.out.println(&quot;add()&quot;);
	}
	
	/* (non-Javadoc)  
	 * &lt;p&gt;Title: delete&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see 接口.实例.DaoIfac#delete()  
	 */
	@Override
	public  void delete() {
		System.out.println(&quot;delete()&quot;);
	}
	
	/* (non-Javadoc)  
	 * &lt;p&gt;Title: update&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see 接口.实例.DaoIfac#update()  
	 */
	@Override
	public void update() {
		System.out.println(&quot;update()&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public interface DaoIfac {

	void add();

	void delete();

	void update();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Service {

	private DaoIfac dao;
	
	public DaoIfac getDao() {
		return dao;
	}
	
	public void setDao(DaoIfac dao) {
		this.dao = dao;
	}
	
	public void register() {
		dao.add();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 接口.实例;

public class Test {

	public static void main(String[] args) {
		Service s = new Service();
		
		DaoIfac dao = new Dao();
		
		s.setDao(dao);
		
		s.register();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),q=i("em",null,"Java-接口",-1),I={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},J=i("hr",null,null,-1),y=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),w=i("hr",null,null,-1),A=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function T(B,j){const n=r("ExternalLinkIcon");return a(),t("div",null,[v(" more "),i("h1",g,[x,e(),i("a",f,[e("106-Java-接口.md"),l(n)])]),h,i("p",null,[i("a",_,[e("阿里天气接口"),l(n)])]),i("p",null,[i("a",D,[e("京东API"),l(n)])]),i("p",null,[i("a",k,[e("Java 8 新特性：接口的静态方法和默认方法"),l(n)])]),S,i("p",null,[i("strong",null,[e("以上就是我关于 "),q,e(" 知识点的整理与总结的全部内容，"),i("a",I,[e("另附源码"),l(n)])])]),J,y,w,A])}const N=s(p,[["render",T],["__file","index.html.vue"]]);export{N as default};

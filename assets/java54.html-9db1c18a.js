import{_ as t,X as s,Y as l,a1 as a,Z as e,$ as n,a2 as r,a0 as d,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Java_54_1.png",v="/blog/assets/Java_54_2.png",u="/blog/assets/Java_54_3.png",m="/blog/assets/Java_54_4.png",g="/blog/assets/Java_54_5.png",b="/blog/assets/Java_54_6.png",p="/blog/assets/Java_54_7.png",x="/blog/assets/Java_54_8.png",h="/blog/assets/Java_54_9.png",q="/blog/assets/Java_54_10.png",w="/blog/assets/Java_54_11.png",_={},y=d('<h1 id="java-spring依赖属性的构造函数注入" tabindex="-1"><a class="header-anchor" href="#java-spring依赖属性的构造函数注入" aria-hidden="true">#</a> Java-Spring依赖属性的构造函数注入</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建一个Java Project <img src="'+c+'" alt="" loading="lazy"></p></li><li><p>Java工程导jar包</p></li></ol><ul><li><p>创建一个lib文件夹 <img src="'+v+'" alt="" loading="lazy"><img src="'+u+'" alt="" loading="lazy"><strong>如图所示新建完成</strong><img src="'+m+'" alt="" loading="lazy"></p></li><li><p>导入jar包 <img src="'+g+'" alt="" loading="lazy"><img src="'+b+'" alt="" loading="lazy"></p></li><li><p>新建或导入配置文件 <img src="'+p+`" alt="" loading="lazy"><strong>beans.xml</strong></p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/tx 
       http://www.springframework.org/schema/tx/spring-tx.xsd 
       http://www.springframework.org/schema/context 
       http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>新建test/MyController test/MyService test/MyDao <img src="`+x+`" alt="" loading="lazy"></li></ol><p><strong>MyController</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyController {

	private MyService service;
	
	public MyController(MyService myService)
	{
		this.service = myService;
	}
	public void login() 
	{
		System.out.println(&quot;MyController login........&quot;);
		service.serviceLogin();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyService</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyService {

	private MyDao dao;//MyService依赖MyDao
	/**
	 * 为咯给属性赋值 就在属性所在的
	 * 类里面设置一个构造方法
	 * 并且该构造方法接收一个该属性类开的参数
	 * &lt;p&gt;Title: &lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;  
	 * @param myDao
	 */
	public MyService(MyDao myDao)
	{
		this.dao = myDao;
	}
	public void serviceLogin() {
		System.out.println(&quot;MyService serviceLogin()......&quot;);
		dao.queryUserByNameAndPwd();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyDao</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyDao {

	public void queryUserByNameAndPwd() 
	{
		System.out.println(&quot;MyDao queryUserByNameAndPwd&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>构造函数配置（亮点加重点）</li></ol><p><strong>beans.xml</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/tx 
       http://www.springframework.org/schema/tx/spring-tx.xsd 
       http://www.springframework.org/schema/context 
       http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
  &lt;!--      先配置最底层的Dao --&gt;
       &lt;bean id=&quot;dao&quot; class=&quot;test.MyDao&quot;&gt;&lt;/bean&gt;
       &lt;bean id=&quot;service&quot; class=&quot;test.MyService&quot;&gt;
&lt;!--        构造函数注入     constructor-arg:构造器-参数 --&gt;
			&lt;constructor-arg index=&quot;0&quot; ref=&quot;dao&quot;&gt;&lt;/constructor-arg&gt;
       &lt;/bean&gt;
       &lt;bean id=&quot;controller&quot; class=&quot;test.MyController&quot;&gt;
       			&lt;constructor-arg index=&quot;0&quot; ref=&quot;service&quot;&gt;&lt;/constructor-arg&gt;
       &lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>新建测试类测试 <img src="`+h+`" alt="" loading="lazy"></li></ol><p><strong>Test.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		//实例化spring容器及bean
		ApplicationContext act = new ClassPathXmlApplicationContext(&quot;beans.xml&quot;);
//		得到的是此处的controller
//	    &lt;bean id=&quot;controller&quot; class=&quot;test.MyController&quot;&gt;
//			&lt;constructor-arg index=&quot;0&quot; ref=&quot;service&quot;&gt;&lt;/constructor-arg&gt;
//        &lt;/bean&gt;
		MyController c = (MyController) act.getBean(&quot;controller&quot;);
		c.login();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>如图所示测试成功</strong></p><figure><img src="'+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>属性注入的两种方式：</p><p>1.构造函数注入：</p><p>//需要在类中定义构造方法，并且接收参数，便于给属性赋值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public MyController(MyService myService)
	{
		this.service=myService;
	}
	
public MyService(MyDao myDao)
	{
		this.dao=myDao;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>//接着在配置文件中对bean进行配置，特别注意给构造方法中的参数赋值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	&lt;bean id=&quot;dao&quot; class=&quot;test.MyDao&quot;&gt;
	
	&lt;/bean&gt;
	&lt;bean id=&quot;service&quot; class=&quot;test.MyService&quot;&gt;
	&lt;constructor-arg index=&quot;0&quot; ref=&quot;dao&quot;&gt;&lt;/constructor-arg&gt;
	&lt;/bean&gt;
	
	
	&lt;bean id=&quot;controller&quot; class=&quot;test.MyController&quot;&gt;
	&lt;constructor-arg index=&quot;0&quot; ref=&quot;service&quot;&gt;&lt;/constructor-arg&gt;
	&lt;/bean&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.属性的setter方法注入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//需要提供属性的setter方法

//需要在配置bean的时候使用标签&lt;property&gt;给属性赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),f=e("strong",null,"以上就是我对于 Java-Spring依赖属性的构造函数注入 知识点整理的全部内容",-1),M={href:"https://github.com/javaobjects/demo_spring04_di_three",target:"_blank",rel:"noopener noreferrer"},k=e("hr",null,null,-1),S=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),C=e("hr",null,null,-1),D=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function J(z,j){const i=o("ExternalLinkIcon");return s(),l("div",null,[a(" more "),y,e("p",null,[f,n(" 另附"),e("a",M,[n("源码"),r(i)])]),k,S,C,D])}const N=t(_,[["render",J],["__file","java54.html.vue"]]);export{N as default};

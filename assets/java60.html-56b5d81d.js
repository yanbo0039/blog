import{_ as s,X as t,Y as l,a1 as a,Z as e,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_60_1.png",o="/blog/assets/Java_60_2.png",u="/blog/assets/Java_60_3.png",m="/blog/assets/Java_60_4.png",b={},g=r('<h1 id="java-spring基于注解的方式给依赖属性赋值" tabindex="-1"><a class="header-anchor" href="#java-spring基于注解的方式给依赖属性赋值" aria-hidden="true">#</a> Java-Spring基于注解的方式给依赖属性赋值</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><em>沿用上一个项目</em></p><ol><li>注释掉属性的set/get方法，并运行测试，如图所示测试失败</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>结论：</strong> 根据类型自动装配还是需要配置属性的get/set方法</li></ul><ol start="2"><li><p>还原被注释掉的属性的set/get方法</p></li><li><p>新建一个Java Project命名为 demo_spring05_di_annotation</p></li><li><p>导入对应的jar包</p></li></ol><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>写对应层的类 以及配置beans.xml</li></ol><ul><li><strong>MyController</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyController {

	private MyServiceIfac service;
	
	public MyController(MyServiceIfac myService)
	{
		this.service = myService;
	}
	public void login() 
	{
		System.out.println(&quot;MyController login........&quot;);
		service.serviceLogin();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>MyDao</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyDao implements MyDaoIfac {

	/* (non-Javadoc)  
	 * &lt;p&gt;Title: queryUserByNameAndPwd&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see test.MyDaoIfac#queryUserByNameAndPwd()  
	 */
	@Override
	public void queryUserByNameAndPwd() 
	{
		System.out.println(&quot;MyDao queryUserByNameAndPwd&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>MyDaoIfac</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public interface MyDaoIfac {

	void queryUserByNameAndPwd();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>MyService</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyService implements MyServiceIfac {

	private MyDaoIfac dao;//MyService依赖MyDao
	/**
	 * 为咯给属性赋值 就在属性所在的
	 * 类里面设置一个构造方法
	 * 并且该构造方法接收一个该属性类开的参数
	 * &lt;p&gt;Title: &lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;  
	 * @param myDao
	 */
	public MyService(MyDaoIfac myDao)
	{
		this.dao = myDao;
	}
	/* (non-Javadoc)  
	 * &lt;p&gt;Title: serviceLogin&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see test.MyServiceIfac#serviceLogin()  
	 */
	@Override
	public void serviceLogin() {
		System.out.println(&quot;MyService serviceLogin()......&quot;);
		dao.queryUserByNameAndPwd();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyService</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyService implements MyServiceIfac {

	private MyDaoIfac dao;//MyService依赖MyDao
	/**
	 * 为咯给属性赋值 就在属性所在的
	 * 类里面设置一个构造方法
	 * 并且该构造方法接收一个该属性类开的参数
	 * &lt;p&gt;Title: &lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;  
	 * @param myDao
	 */
	public MyService(MyDaoIfac myDao)
	{
		this.dao = myDao;
	}
	/* (non-Javadoc)  
	 * &lt;p&gt;Title: serviceLogin&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see test.MyServiceIfac#serviceLogin()  
	 */
	@Override
	public void serviceLogin() {
		System.out.println(&quot;MyService serviceLogin()......&quot;);
		dao.queryUserByNameAndPwd();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyServiceIfac</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public interface MyServiceIfac {

	void serviceLogin();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Test测试类</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>beans.xml</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>详细配置</li></ol><ul><li>引入刚刚忘记引入的jar包</li></ul><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>为对应的类写入头（戴帽子）</li></ul><p><strong>MyController</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class MyController {

	@Autowired//自动装配的意思 默认根据类型装配
	private MyServiceIfac service;
	
	/**
	 *  如果有一个类不知道属于哪一层的话就写@Component 表示组件的意思 
	 * &lt;p&gt;Title: login&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;
	 */
//	public MyController(MyServiceIfac myService)
//	{
//		this.service = myService;
//	}
	public void login() 
	{
		System.out.println(&quot;MyController login........&quot;);
		service.serviceLogin();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyDao</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import org.springframework.stereotype.Repository;

//又有接口又有实现类 帽子给实现类带

@Repository
public class MyDao implements MyDaoIfac {

	/* (non-Javadoc)  
	 * &lt;p&gt;Title: queryUserByNameAndPwd&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see test.MyDaoIfac#queryUserByNameAndPwd()  
	 */
	@Override
	public void queryUserByNameAndPwd() 
	{
		System.out.println(&quot;MyDao queryUserByNameAndPwd&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyDaoIfac</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public interface MyDaoIfac {

	void queryUserByNameAndPwd();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyService</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;//这是一个注解

@Service
public class MyService implements MyServiceIfac {

	@Autowired
	private MyDaoIfac dao;//MyService依赖MyDao
	/**
	 * 为咯给属性赋值 就在属性所在的
	 * 类里面设置一个构造方法
	 * 并且该构造方法接收一个该属性类开的参数
	 * &lt;p&gt;Title: &lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;  
	 * @param myDao
	 */
//	public MyService(MyDaoIfac myDao)
//	{
//		this.dao = myDao;
//	}
	/* (non-Javadoc)  
	 * &lt;p&gt;Title: serviceLogin&lt;/p&gt;  
	 * &lt;p&gt;Description: &lt;/p&gt;    
	 * @see test.MyServiceIfac#serviceLogin()  
	 */
	@Override
	public void serviceLogin() {
		System.out.println(&quot;MyService serviceLogin()......&quot;);
		dao.queryUserByNameAndPwd();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyServiceIfac</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public interface MyServiceIfac {

	void serviceLogin();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Test类</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
		MyController c = (MyController) act.getBean(&quot;myController&quot;);
		c.login();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>beans.xml</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/tx 
       http://www.springframework.org/schema/tx/spring-tx.xsd 
       http://www.springframework.org/schema/context 
       http://www.springframework.org/schema/context/spring-context.xsd&quot;&gt;
       &lt;!-- 
       	启动注解，全包扫描
       	base-package=&quot;com.ptcs.demo.dao&quot;(基本包名 com.ptcs.demo)
       	base-package=&quot;com.ptcs.demo.control&quot;
        --&gt;
       &lt;context:component-scan base-package=&quot;test&quot;&gt;&lt;/context:component-scan&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>测试;如图所示，测试成功;</li></ol><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>备注：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>每一个类至少要有一个空的构造方法

使用注解的方式给依赖属性赋值非常方便：

1.不需要在xml文件中注册bean了；
2.不需要提供属性的setter/getter方法了；

如何使用注解开发：

1.导入aop相关的包

aop   aspect

2.在xml文件中开启全包扫描：
&lt;!-- 启动注解，全包扫描 --&gt;
	&lt;context:component-scan base-package=&quot;test&quot;&gt;&lt;/context:component-scan&gt;

	
3.编写完bean的代码后，给bean带上帽子：@Service  @Controller  @Repository  @Component

4.还要给依赖的属性带上帽子： @Autowired  @Resource  
建议大家使用框架的时候后专心使用框架API，不要一边使用框架API，一边使用JavaAPI，所以使用@Autowired

@Autowired 默认按类型装配，
@Resource默认按名称装配，当找不到与名称匹配的bean才会按类型装配。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,50),p={class:"hint-container info"},x=e("p",{class:"hint-container-title"},"相关信息",-1),y={href:"https://github.com/javaobjects/demo_spring05_di_annotation",target:"_blank",rel:"noopener noreferrer"};function w(q,h){const n=v("ExternalLinkIcon");return t(),l("div",null,[a(" more "),g,e("div",p,[x,e("p",null,[e("strong",null,[i("以上就是我关于 Java-Spring基于注解的方式给依赖属性赋值 知识的整理与总结 另附上"),e("a",y,[i("源码地址"),d(n)])])])])])}const M=s(b,[["render",w],["__file","java60.html.vue"]]);export{M as default};

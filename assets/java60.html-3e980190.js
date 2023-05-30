import{_ as s,X as t,Y as l,a1 as d,Z as e,$ as n,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},o=r(`<h1 id="java-spring基于注解的方式给依赖属性赋值" tabindex="-1"><a class="header-anchor" href="#java-spring基于注解的方式给依赖属性赋值" aria-hidden="true">#</a> Java-Spring基于注解的方式给依赖属性赋值</h1><p><em>沿用上一个项目</em></p><ol><li>注释掉属性的set/get方法，并运行测试，如图所示测试失败</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_60_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>结论：</strong> 根据类型自动装配还是需要配置属性的get/set方法</p><ol start="2"><li><p>还原被注释掉的属性的set/get方法</p></li><li><p>新建一个Java Project命名为 demo_spring05_di_annotation</p></li><li><p>导入对应的jar包</p></li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_60_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>写对应层的类 以及配置beans.xml</li></ol><p><strong>MyController</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyDao</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyDaoIfac</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public interface MyDaoIfac {

	void queryUserByNameAndPwd();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyService</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>详细配置</li></ol><ul><li>引入刚刚忘记引入的jar包</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_60_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>为对应的类写入头（戴帽子）</li></ul><p><strong>MyController</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>测试;如图所示，测试成功;</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_60_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>备注：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>每一个类至少要有一个空的构造方法

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),u={href:"https://github.com/javaobjects/demo_spring05_di_annotation",target:"_blank",rel:"noopener noreferrer"},m=e("hr",null,null,-1),b=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),g=e("hr",null,null,-1),p=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function x(y,w){const i=v("ExternalLinkIcon");return t(),l("div",null,[d(" more "),o,e("p",null,[e("strong",null,[n("以上就是我关于 Java-Spring基于注解的方式给依赖属性赋值 知识的整理与总结 另附上"),e("a",u,[n("源码地址"),a(i)])])]),m,b,g,p])}const h=s(c,[["render",x],["__file","java60.html.vue"]]);export{h as default};

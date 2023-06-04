import{_ as i,X as e,Y as n,a1 as s,a0 as l}from"./framework-68dd73a2.js";const t="/blog/assets/Java_57_1.png",a="/blog/assets/Java_57_2.png",d="/blog/assets/Java_57_3.png",r="/blog/assets/Java_57_4.png",v={},c=l(`<h1 id="java重构代码之面向接口编程" tabindex="-1"><a class="header-anchor" href="#java重构代码之面向接口编程" aria-hidden="true">#</a> Java重构代码之面向接口编程</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><em>沿用上一个项目</em></p><ol><li>之前项目test包里类的代码如下：</li></ol><p><strong>Mycontroller</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyDao</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public class MyDao {

	public void queryUserByNameAndPwd() 
	{
		System.out.println(&quot;MyDao queryUserByNameAndPwd&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyService</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Test</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>抽取接口</li></ol><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>MyService也是同样的操作实现接口MyServiceIfac</strong></p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>抽取接口后各类的代码如下：</li></ol><p><strong>MyController</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyDao</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyServiceIfac</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

public interface MyServiceIfac {

	void serviceLogin();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>测试</li></ol><p><strong>如图所示，测试通过</strong><img src="`+r+'" alt="" loading="lazy"></p><p><strong>作用：</strong> 调用者跟被调用者不能见面,实现解耦合，无须更改配置文件</p><p><strong>以上就是我对于Java重构代码之面向接口编程 的知识点的总结</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java重构代码之面向接口编程</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',36);function u(o,m){return e(),n("div",null,[s(" more "),c])}const p=i(v,[["render",u],["__file","java57.html.vue"]]);export{p as default};

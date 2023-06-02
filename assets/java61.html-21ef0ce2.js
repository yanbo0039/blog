import{_ as e,X as i,Y as n,a1 as s,a0 as l}from"./framework-68dd73a2.js";const r="/blog/assets/Java_61_1.png",a="/blog/assets/Java_61_2.png",t="/blog/assets/Java_61_3.png",d="/blog/assets/Java_61_4.png",v={},c=l('<h1 id="java-spring两种自动装配-autowired-resoure的区别" tabindex="-1"><a class="header-anchor" href="#java-spring两种自动装配-autowired-resoure的区别" aria-hidden="true">#</a> Java-Spring两种自动装配@Autowired&amp;@Resoure的区别</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><em>沿用上一个项目</em></p><ol><li>将@Autowired换成@Resoure</li></ol><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>换成@Resoure之后</p><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>从中可以看出 @utowired导入的包是Spring的包 而@Resoure导入的包是Java的包</strong></p><p><strong>若有这么一个需求 项目中都使用controller不再使用以前的servlet，禁止大家在controller里使用Java底层的API ，那么此时就理解成不使用用 @Resource 使用 @Autowired</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>建议大家使用框架的时候后专心使用框架API，不要一边使用框架API，一边使用JavaAPI，所以使用@Autowired

@Autowired 默认根据类型装配
@Resource 默认根据名字装配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <strong>MyController</strong> 和 <strong>MyService</strong> 更改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;//这是一个注解

@Service
public class MyService implements MyServiceIfac {

	@Resource
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

@Controller
public class MyController {
	//自动装配的意思 默认根据类型装配
	@Resource
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试运行,如图所示测试通过</li></ol><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>问题：点解？@Resource不是根据名字找吗？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Resource 默认按名称装配，当找不到与名称匹配的bean才会按类型装配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>拓展知识点：</strong> 将MyDao里的帽子拿掉会发生什么？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test;

import org.springframework.stereotype.Repository;

//又有接口又有实现类 帽子给实现类带

//@Repository
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试运行：</strong></p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>经我测试依然没有问题</p><p><strong>以上就是我关于 Java-Spring两种自动装配@Autowired&amp;@Resoure的区别 知识点的总结</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',27);function o(u,m){return i(),n("div",null,[s(" more "),c])}const b=e(v,[["render",o],["__file","java61.html.vue"]]);export{b as default};

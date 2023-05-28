import{_ as n,X as s,Y as l,a1 as a,Z as e,$ as i,a2 as r,a0 as o,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Java_55_1.png",v="/blog/assets/Java_55_2.png",u="/blog/assets/Java_55_3.png",m="/blog/assets/Java_55_4.png",g="/blog/assets/Java_55_5.png",b="/blog/assets/Java_55_6.png",p="/blog/assets/Java_55_7.png",_="/blog/assets/Java_55_8.png",h="/blog/assets/Java_55_9.png",q={},x=o('<h1 id="java-spring依赖属性的setter方法注入值" tabindex="-1"><a class="header-anchor" href="#java-spring依赖属性的setter方法注入值" aria-hidden="true">#</a> Java-Spring依赖属性的setter方法注入值</h1><ol><li>沿用上一个项目</li></ol><ul><li>新建包</li></ul><p><img src="'+c+'" alt="" loading="lazy"><img src="'+v+'" alt="" loading="lazy"></p><ul><li>拷贝之之前的类到新建的包里test.set <img src="'+u+'" alt="" loading="lazy"></li></ul><ol start="2"><li>删除构造方法并且为属性生成get&amp;set方法</li></ol><ul><li>删除构造方法</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>生成get&amp;set方法</li></ul><p><img src="'+g+'" alt="" loading="lazy"><img src="'+b+`" alt="" loading="lazy"></p><p><strong>MyController.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test.set;

public class MyController {

	private MyService service;
	
	public void login() 
	{
		System.out.println(&quot;MyController login........&quot;);
		service.serviceLogin();
	}

	public MyService getService() {
		return service;
	}

	public void setService(MyService service) {
		this.service = service;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>MyService</strong> .java也是相同的操作</p><ol start="3"><li>修改配置文件</li></ol><ul><li>先拷贝一个配置文件并且重命名以防冲突</li></ul><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>删除构造方法配置</li></ul><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>重写配置文件 beans_set.xml</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

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
       &lt;bean id=&quot;dao&quot; class=&quot;test.set.MyDao&quot;&gt;&lt;/bean&gt;
       &lt;bean id=&quot;service&quot; class=&quot;test.set.MyService&quot;&gt;
       &lt;!-- 
       	private MyDao dao;//MyService依赖MyDao
       	name=&quot;&quot;里的值属性与这里的属性名相同
       	ref=&quot;&quot;里的值属性与所依赖的类的bean的id值相同
        --&gt;
			&lt;property name=&quot;dao&quot; ref=&quot;dao&quot;&gt;&lt;/property&gt;
       &lt;/bean&gt;
       &lt;bean id=&quot;controller&quot; class=&quot;test.set.MyController&quot;&gt;
       		&lt;property name=&quot;service&quot; ref=&quot;service&quot;&gt;&lt;/property&gt;
       &lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>测试</li></ol><ul><li>为咯验证是set方法注入在set方法内写入一段测试代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public void setDao(MyDao dao) {
	System.out.println(&quot;setDao()....&quot;);
	this.dao = dao;
}
	public void setService(MyService service) {
	System.out.println(&quot;setService()&quot;);
	this.service = service;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更改没试类代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test.set;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		//实例化spring容器及bean
		ApplicationContext act = new ClassPathXmlApplicationContext(&quot;beans_set.xml&quot;);
//		得到的是此处的controller
//	    &lt;bean id=&quot;controller&quot; class=&quot;test.MyController&quot;&gt;
//			&lt;constructor-arg index=&quot;0&quot; ref=&quot;service&quot;&gt;&lt;/constructor-arg&gt;
//        &lt;/bean&gt;
		MyController c = (MyController) act.getBean(&quot;controller&quot;);
		c.login();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试结果如下</strong><img src="`+h+'" alt="" loading="lazy"></p><p><strong>备注：</strong> 运行过程中有报过某个类红色告警不给过，解决方法为将这个类更改名称而后再次改回来则解决咯这个bug，究其原因是因为Eclipse软件件的bug</p>',27),w=e("strong",null,"以上就是我对于 Java-Spring依赖属性的setter方法注入值 知识点整理的全部内容",-1),f={href:"https://github.com/javaobjects/demo_spring04_di_three-setter.git",target:"_blank",rel:"noopener noreferrer"},y=e("hr",null,null,-1),M=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),S=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function C(J,z){const t=d("ExternalLinkIcon");return s(),l("div",null,[a(" more "),x,e("p",null,[w,i(" 另附"),e("a",f,[i("源码"),r(t)])]),y,M,S,k])}const D=n(q,[["render",C],["__file","java55.html.vue"]]);export{D as default};

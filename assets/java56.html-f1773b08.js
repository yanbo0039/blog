import{_ as t,X as i,Y as n,a1 as e,a0 as l}from"./framework-68dd73a2.js";const s={},r=l(`<h1 id="java-spring给各种各样的属性注入值" tabindex="-1"><a class="header-anchor" href="#java-spring给各种各样的属性注入值" aria-hidden="true">#</a> Java-Spring给各种各样的属性注入值</h1><p><em>沿用之前的项目</em></p><ol><li>新建一个包 test.manyfield/Person</li></ol><p><strong>Person</strong> .java</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test.manyfield;

import java.net.URL;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class Person {

	private Integer id;
	private String name;
	private Date birthday;
	private String[] phone;
	private URL boke;
	
	private List&lt;String&gt; hobby;
	private Map&lt;String,Integer&gt; scores;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public String[] getPhone() {
		return phone;
	}
	public void setPhone(String[] phone) {
		this.phone = phone;
	}
	public URL getBoke() {
		return boke;
	}
	public void setBoke(URL boke) {
		this.boke = boke;
	}
	public List&lt;String&gt; getHobby() {
		return hobby;
	}
	public void setHobby(List&lt;String&gt; hobby) {
		this.hobby = hobby;
	}
	public Map&lt;String, Integer&gt; getScores() {
		return scores;
	}
	public void setScores(Map&lt;String, Integer&gt; scores) {
		this.scores = scores;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置xml文件</li></ol><ul><li>复制或新建一个beans.xml</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_56_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>配置xml</li></ul><p><strong>beans_person.xml</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

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
		private Integer id;
		private String name;
		private Date birthday;
		private String[] phone;
		private URL boke;
		private List&lt;String&gt; hobby;
		private Map&lt;String,Integer&gt; scores; 
		--&gt;
		
&lt;!--        如何通过配置的方式给person这个bean注入值呢？ --&gt;
	&lt;bean id=&quot;person&quot; class=&quot;test.manyfield.Person&quot;&gt;
		&lt;property name=&quot;id&quot; value=&quot;201901&quot;&gt;&lt;/property&gt;
		&lt;property name=&quot;name&quot; value=&quot;zhangsan&quot;&gt;&lt;/property&gt;
		&lt;property name=&quot;birthday&quot; value=&quot;2010/10/13&quot;&gt;&lt;/property&gt;
		&lt;property name=&quot;phone&quot;&gt;
			&lt;!-- 数组的写法 --&gt;
			&lt;list&gt;
				&lt;value&gt;020-111&lt;/value&gt;
				&lt;value&gt;1397878789&lt;/value&gt;
			&lt;/list&gt;
		&lt;/property&gt;
		&lt;property name=&quot;boke&quot; value=&quot;http://wwww.baidu.com&quot;&gt;&lt;/property&gt;
		&lt;property name=&quot;hobby&quot;&gt;
		&lt;!-- list集合的写法 --&gt;
			&lt;list&gt;
				&lt;value&gt;lanqiu&lt;/value&gt;
				&lt;value&gt;zuqiu&lt;/value&gt;
			&lt;/list&gt;
		&lt;/property&gt;
		&lt;property name=&quot;scores&quot;&gt;
			&lt;!-- map集合的写法 --&gt;
			&lt;map&gt;
				&lt;entry key=&quot;数学&quot;&gt;
					&lt;value&gt;100&lt;/value&gt;
				&lt;/entry&gt;
				&lt;entry key=&quot;语文&quot;&gt;
					&lt;value&gt;26&lt;/value&gt;
				&lt;/entry&gt;
				&lt;entry key=&quot;英语&quot;&gt;
					&lt;value&gt;88&lt;/value&gt;
				&lt;/entry&gt;
			&lt;/map&gt;
		&lt;/property&gt;
	&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>测试</li></ol><p><strong>Test.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package test.manyfield;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {

		//实例化spring容器及bean
		ApplicationContext act = new ClassPathXmlApplicationContext(&quot;beans_person.xml&quot;);
		
		Person p = (Person) act.getBean(&quot;person&quot;);
		System.out.println(p.getName());
		System.out.println(p.getId());
		System.out.println(Arrays.toString(p.getPhone()));
		System.out.println(p.getBoke().getHost());
		
		System.out.println(p.getBirthday());
		
		List&lt;String&gt; h = p.getHobby();
		for (int i = 0; i &lt; h.size(); i++) {
			System.out.println(h.get(i));
		}
		System.out.println(p.getScores());
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试得到结果如下：</strong><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_56_2.png" alt="" loading="lazy"></p><p><strong>以上就是我对Java-Spring给各种各样的属性注入值 的知道点的总结</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,20);function a(d,v){return i(),n("div",null,[e(" more "),r])}const c=t(s,[["render",a],["__file","java56.html.vue"]]);export{c as default};

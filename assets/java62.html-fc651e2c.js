import{_ as n,X as e,Y as i,a1 as s,a0 as a}from"./framework-68dd73a2.js";const l="/blog/assets/Java_62_1.png",t="/blog/assets/Java_62_2.png",d="/blog/assets/Java_62_3.png",r={},v=a(`<h1 id="java-spring使用注解配置自动装配电脑" tabindex="-1"><a class="header-anchor" href="#java-spring使用注解配置自动装配电脑" aria-hidden="true">#</a> Java-Spring使用注解配置自动装配电脑</h1><p><strong>题目</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>电脑爱好者会自己去电脑城组装电脑，我们用代码完成一台电脑的配置：
1）必须的配件（接口）：有机箱（包括所有内部组件）——ComputerCase、显示器——Monitor、键盘鼠标——Keyboard；
2）机箱品牌（实现类）：金和田——GoldenField、大水牛——Bubalus；
3）显示器品牌（实现类）：明基——BenQ、宏基——Acer；
4）键盘鼠标品牌（实现类）：雷柏——Rapoo、罗技——Logitech；

采用构造器注入的方式，实现在不修改Java代码的前提下，变更电脑配置的功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>新建包trainning</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;

import org.springframework.stereotype.Component;

@Component
public class BenQ implements Monitor{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 电脑爱好者会自己去电脑城组装电脑，我们用代码完成一台电脑的配置：
1）必须的配件（接口）：有机箱（包括所有内部组件）——ComputerCase、显示器——Monitor、键盘鼠标——Keyboard；
2）机箱品牌（实现类）：金和田——GoldenField、大水牛——Bubalus；
3）显示器品牌（实现类）：明基——BenQ、宏基——Acer；
4）键盘鼠标品牌（实现类）：雷柏——Rapoo、罗技——Logitech；
 * 电脑实体类
* &lt;p&gt;Title: Computer&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年6月21日
 */
@Component
public class Computer {

	@Autowired
	private ComputerCase jixiang;
	@Autowired
	private Monitor xianshiqi;
	@Autowired
	private Keyboard jianpan;
	@Override
	public String toString() {
		return &quot;Computer [jixiang=&quot; + jixiang + &quot;, xianshiqi=&quot; + xianshiqi + &quot;, jianpan=&quot; + jianpan + &quot;]&quot;;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;

import org.springframework.stereotype.Component;

@Component
public interface ComputerCase {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;

import org.springframework.stereotype.Component;

@Component
public class GoldenField implements ComputerCase{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;

import org.springframework.stereotype.Component;

@Component
public interface Keyboard {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;


public interface Monitor {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;

import org.springframework.stereotype.Component;

@Component
public class Rapoo implements Keyboard {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		//实例化spring容器及bean
		ApplicationContext act = new ClassPathXmlApplicationContext(&quot;beans_computer.xml&quot;);
//		得到的是此处的controller
//	    &lt;bean id=&quot;controller&quot; class=&quot;test.MyController&quot;&gt;
//			&lt;constructor-arg index=&quot;0&quot; ref=&quot;service&quot;&gt;&lt;/constructor-arg&gt;
//        &lt;/bean&gt;

		Computer com = (Computer) act.getBean(&quot;computer&quot;);
		System.out.println(com);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

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
       &lt;context:component-scan base-package=&quot;trainning&quot;&gt;&lt;/context:component-scan&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试，如图所示测试成功</li></ol><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>拓展测试</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package trainning;

import org.springframework.stereotype.Component;

@Component
public class Bubalus implements ComputerCase {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行测试，报错信息如下</strong><img src="`+t+`" alt="" loading="lazy"></p><p>说明：违反唯一，容器里有多个bean不知道要哪一个</p><p><strong>解决：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Autowired @Qualifier(&quot;goldenField&quot;)//此处的值默认为首字母小写 
private ComputerCase jixiang;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>再次测试,如图所示测试成功</strong></p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 Java-Spring使用注解配置自动装配电脑 知识点的整理与总结的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',28);function o(c,u){return e(),i("div",null,[s(" more "),v])}const b=n(r,[["render",o],["__file","java62.html.vue"]]);export{b as default};

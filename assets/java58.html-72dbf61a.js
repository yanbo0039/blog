import{_ as e,X as t,Y as n,a1 as i,a0 as a}from"./framework-68dd73a2.js";const s="/blog/assets/Java_58_1.png",r={},o=a(`<h1 id="java-spring根据名字自动装配属性" tabindex="-1"><a class="header-anchor" href="#java-spring根据名字自动装配属性" aria-hidden="true">#</a> Java-Spring根据名字自动装配属性</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><em>沿用上一个项目</em></p><ol><li>修改beans_set.xml,修改后结果如下</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

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
       
       &lt;!--
       autowire=&quot;byName&quot; 表示根据名字自动装配
                   还有一个值是byType
         --&gt;
       &lt;bean id=&quot;service&quot; class=&quot;test.set.MyService&quot; autowire=&quot;byName&quot;&gt;
       &lt;!-- 
       	private MyDao dao;//MyService依赖MyDao
       	name=&quot;&quot;里的值属性与这里的属性名相同
       	ref=&quot;&quot;里的值属性与所依赖的类的bean的id值相同
        --&gt;
		&lt;!-- 	&lt;property name=&quot;dao&quot; ref=&quot;dao&quot;&gt;&lt;/property&gt; --&gt;
       &lt;/bean&gt;
       &lt;bean id=&quot;controller&quot; class=&quot;test.set.MyController&quot; autowire=&quot;byName&quot;&gt;
       	&lt;!-- 	&lt;property name=&quot;service&quot; ref=&quot;service&quot;&gt;&lt;/property&gt; --&gt;
       &lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试,如图所示，测试通过</li></ol><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>原理：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. autowire=&quot;byName&quot; 会根据前面的类class=&quot;test.set.MyService&quot;里找到属性dao 
2.从容器里找到容器叫做dao的beans  &lt;bean id=&quot;dao&quot; class=&quot;test.set.MyDao&quot;&gt;&lt;/bean&gt;
3. 再给service里给属性dao赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我对于 Java-Spring根据名字自动装配属性 知识点整理的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java-Spring根据名字自动装配属性</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,14);function l(d,u){return t(),n("div",null,[i(" more "),o])}const v=e(r,[["render",l],["__file","java58.html.vue"]]);export{v as default};

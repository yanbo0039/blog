import{_ as e,X as t,Y as n,a1 as i,a0 as s}from"./framework-68dd73a2.js";const a="/blog/assets/Java_59_1.png",r={},l=s(`<h1 id="java-spring根据类型自动装配属性" tabindex="-1"><a class="header-anchor" href="#java-spring根据类型自动装配属性" aria-hidden="true">#</a> Java-Spring根据类型自动装配属性</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><em>沿用上一个项目</em></li></ul><ol><li>修改beans_set.xml;修改后结果如下</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

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
            还有一个值是byType 表示根据类型自动装配属性
         --&gt;
       &lt;bean id=&quot;service&quot; class=&quot;test.set.MyService&quot; autowire=&quot;byType&quot;&gt;
       &lt;!-- 
       	private MyDao dao;//MyService依赖MyDao
       	name=&quot;&quot;里的值属性与这里的属性名相同
       	ref=&quot;&quot;里的值属性与所依赖的类的bean的id值相同
        --&gt;
		&lt;!-- 	&lt;property name=&quot;dao&quot; ref=&quot;dao&quot;&gt;&lt;/property&gt; --&gt;
       &lt;/bean&gt;
       &lt;bean id=&quot;controller&quot; class=&quot;test.set.MyController&quot; autowire=&quot;byType&quot;&gt;
       	&lt;!-- 	&lt;property name=&quot;service&quot; ref=&quot;service&quot;&gt;&lt;/property&gt; --&gt;
       &lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>测试;如图所示测试成功</li></ol><figure><img src="`+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>原理：</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. autowire=&quot;byType&quot; 会根据前面的类class=&quot;test.set.MyService&quot;里找到属性dao 的类型 MyDao
2.从容器里找到类型为MyDao的beans  &lt;bean id=&quot;dao&quot; class=&quot;test.set.MyDao&quot;&gt;&lt;/bean&gt;
3. 拿到这个bean
4. 再给service里给属性dao赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java-Spring根据类型自动装配属性</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,13);function o(d,u){return t(),n("div",null,[i(" more "),l])}const v=e(r,[["render",o],["__file","java59.html.vue"]]);export{v as default};

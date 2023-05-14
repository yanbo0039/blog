const e=JSON.parse('{"key":"v-edda4dba","path":"/zh/programBlog/ServerSideLanguage/Java/58-Java-Spring%E6%A0%B9%E6%8D%AE%E5%90%8D%E5%AD%97%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D%E5%B1%9E%E6%80%A7.html","title":"Java-Spring根据名字自动装配属性","lang":"zh-CN","frontmatter":{"title":"Java-Spring根据名字自动装配属性","icon":"page","order":58,"author":"涎涎","date":"2019-06-20T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-Spring根据名字自动装配属性"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/58-Java-Spring%E6%A0%B9%E6%8D%AE%E5%90%8D%E5%AD%97%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D%E5%B1%9E%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-Spring根据名字自动装配属性"}],["meta",{"property":"og:description","content":"Java-Spring根据名字自动装配属性 沿用上一个项目 修改beans_set.xml,修改后结果如下 &lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt; &lt;beans xmlns=\\"http://www.springframework.org/schema/beans\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:tx=\\"http://www.springframework.org/schema/tx\\" xmlns:context=\\"http://www.springframework.org/schema/context\\" xsi:schemaLocation=\\"http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd\\"&gt; &lt;!-- 先配置最底层的Dao --&gt; &lt;bean id=\\"dao\\" class=\\"test.set.MyDao\\"&gt;&lt;/bean&gt; &lt;!-- autowire=\\"byName\\" 表示根据名字自动装配 还有一个值是byType --&gt; &lt;bean id=\\"service\\" class=\\"test.set.MyService\\" autowire=\\"byName\\"&gt; &lt;!-- \\tprivate MyDao dao;//MyService依赖MyDao \\tname=\\"\\"里的值属性与这里的属性名相同 \\tref=\\"\\"里的值属性与所依赖的类的bean的id值相同 --&gt; \\t\\t&lt;!-- \\t&lt;property name=\\"dao\\" ref=\\"dao\\"&gt;&lt;/property&gt; --&gt; &lt;/bean&gt; &lt;bean id=\\"controller\\" class=\\"test.set.MyController\\" autowire=\\"byName\\"&gt; \\t&lt;!-- \\t&lt;property name=\\"service\\" ref=\\"service\\"&gt;&lt;/property&gt; --&gt; &lt;/bean&gt; &lt;/beans&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-Spring根据名字自动装配属性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-Spring根据名字自动装配属性 沿用上一个项目 修改beans_set.xml,修改后结果如下 &lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt; &lt;beans xmlns=\\"http://www.springframework.org/schema/beans\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:tx=\\"http://www.springframework.org/schema/tx\\" xmlns:context=\\"http://www.springframework.org/schema/context\\" xsi:schemaLocation=\\"http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd\\"&gt; &lt;!-- 先配置最底层的Dao --&gt; &lt;bean id=\\"dao\\" class=\\"test.set.MyDao\\"&gt;&lt;/bean&gt; &lt;!-- autowire=\\"byName\\" 表示根据名字自动装配 还有一个值是byType --&gt; &lt;bean id=\\"service\\" class=\\"test.set.MyService\\" autowire=\\"byName\\"&gt; &lt;!-- \\tprivate MyDao dao;//MyService依赖MyDao \\tname=\\"\\"里的值属性与这里的属性名相同 \\tref=\\"\\"里的值属性与所依赖的类的bean的id值相同 --&gt; \\t\\t&lt;!-- \\t&lt;property name=\\"dao\\" ref=\\"dao\\"&gt;&lt;/property&gt; --&gt; &lt;/bean&gt; &lt;bean id=\\"controller\\" class=\\"test.set.MyController\\" autowire=\\"byName\\"&gt; \\t&lt;!-- \\t&lt;property name=\\"service\\" ref=\\"service\\"&gt;&lt;/property&gt; --&gt; &lt;/bean&gt; &lt;/beans&gt;"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/58-Java-Spring根据名字自动装配属性.md","localizedDate":"2019年6月20日","excerpt":"<!-- more -->\\n<h1> Java-Spring根据名字自动装配属性</h1>\\n<p><em>沿用上一个项目</em></p>\\n<ol>\\n<li>修改beans_set.xml,修改后结果如下</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>&lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt;\\n\\n&lt;beans xmlns=\\"http://www.springframework.org/schema/beans\\"\\n       xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:tx=\\"http://www.springframework.org/schema/tx\\"\\n       xmlns:context=\\"http://www.springframework.org/schema/context\\"\\n       xsi:schemaLocation=\\"http://www.springframework.org/schema/beans \\n       http://www.springframework.org/schema/beans/spring-beans.xsd \\n       http://www.springframework.org/schema/tx \\n       http://www.springframework.org/schema/tx/spring-tx.xsd \\n       http://www.springframework.org/schema/context \\n       http://www.springframework.org/schema/context/spring-context.xsd\\"&gt;\\n  &lt;!--      先配置最底层的Dao --&gt;\\n       &lt;bean id=\\"dao\\" class=\\"test.set.MyDao\\"&gt;&lt;/bean&gt;\\n       \\n       &lt;!--\\n       autowire=\\"byName\\" 表示根据名字自动装配\\n                   还有一个值是byType\\n         --&gt;\\n       &lt;bean id=\\"service\\" class=\\"test.set.MyService\\" autowire=\\"byName\\"&gt;\\n       &lt;!-- \\n       \\tprivate MyDao dao;//MyService依赖MyDao\\n       \\tname=\\"\\"里的值属性与这里的属性名相同\\n       \\tref=\\"\\"里的值属性与所依赖的类的bean的id值相同\\n        --&gt;\\n\\t\\t&lt;!-- \\t&lt;property name=\\"dao\\" ref=\\"dao\\"&gt;&lt;/property&gt; --&gt;\\n       &lt;/bean&gt;\\n       &lt;bean id=\\"controller\\" class=\\"test.set.MyController\\" autowire=\\"byName\\"&gt;\\n       \\t&lt;!-- \\t&lt;property name=\\"service\\" ref=\\"service\\"&gt;&lt;/property&gt; --&gt;\\n       &lt;/bean&gt;\\n&lt;/beans&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};

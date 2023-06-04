import{_ as a,X as l,Y as s,a1 as o,Z as t,$ as i,a2 as n,a0 as d,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_68_1.png",g="/blog/assets/Java_68_2.png",v="/blog/assets/Java_68_3.png",m="/blog/assets/Java_68_4.png",u="/blog/assets/Java_68_5.png",p="/blog/assets/Java_68_6.png",b="/blog/assets/Java_68_7.png",f="/blog/assets/Java_68_8.png",_="/blog/assets/Java_68_9.png",x="/blog/assets/Java_68_10.png",h="/blog/assets/Java_68_11.png",I="/blog/assets/Java_68_12.png",M="/blog/assets/Java_68_13.png",y="/blog/assets/Java_68_14.png",J="/blog/assets/Java_68_15.png",q="/blog/assets/Java_68_16.png",S="/blog/assets/Java_68_17.png",k={},w={id:"_68-java-使用maven创建聚合工程-md",tabindex:"-1"},z=t("a",{class:"header-anchor",href:"#_68-java-使用maven创建聚合工程-md","aria-hidden":"true"},"#",-1),N={href:"http://xn--68-Java-Maven-pe5u071an3hpl9bocefx7kepua6i4a.md",target:"_blank",rel:"noopener noreferrer"},j=d('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>新建一个Maven工程</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>勾选 Create a simple project (skip archetype selection)</p></li><li><p>如图所示，location里会有默认为别的项目的空间，我进行的尝如下：</p></li><li><p>去掉勾选 Use default Workspace location 清空Location：里的路径</p></li><li><p>完成之后再次勾选 Use default Workspace location</p></li></ul><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>结果就成这样咯。。。。不能点击Next。。。显示我是没有解决这个bug</p></li><li><p><strong>最终解决方法：</strong></p></li><li><p>windows ---&gt; Preferences ---&gt; Global Settings (open file) 配置好即可解决这个bug</p></li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>这样一个Maven工程就创建好咯。。。</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>因tct-commons这个总的工程下面有很多子的工程，所以再创建一个Maven Module</li></ol><ul><li>File ---&gt; NEW ---&gt; Maven ---&gt; Maven Module ---&gt; Next</li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>打开txt-commons里的pom.xml,可以看到这里面已经有子级txt-domain的配置咯</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>同样的操作再创建一个Maven Module tct-dao</li></ol><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+M+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>这里父级工程里的pom.xml已经自动更新</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.tencent&lt;/groupId&gt;
  &lt;artifactId&gt;tct-commons&lt;/artifactId&gt;
  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;pom&lt;/packaging&gt;
  &lt;modules&gt;
  	&lt;module&gt;txt-domain&lt;/module&gt;
  	&lt;module&gt;txt-dao&lt;/module&gt;
  &lt;/modules&gt;
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>同样的操作再创建一个Maven Module tct-service</li></ol><ul><li><p><strong>注：</strong></p></li><li><p>刚刚起错名咯。。将前缀名为txt的工程更改为tct</p></li></ul><ol start="4"><li>创建一个Maven Module tct-controller 需要勾选war包因为是web工程</li></ol><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>tct-commons里的pom.xml</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.tencent&lt;/groupId&gt;
  &lt;artifactId&gt;tct-commons&lt;/artifactId&gt;
  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;pom&lt;/packaging&gt;
  &lt;modules&gt;
  	&lt;module&gt;tct-domain&lt;/module&gt;
  	&lt;module&gt;tct-dao&lt;/module&gt;
  	&lt;module&gt;tct-service&lt;/module&gt;
  	&lt;module&gt;tct-controller&lt;/module&gt;
  &lt;/modules&gt;
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注：以后创建工程越来越大的时候，我们不但把模块分开，而且模块里面层与层也分开， 这样分开分得很细，会让实施工程师/运维工程师很为难，但对于开发来说就很开心，因为只需要配置好这个模块就行</strong></p></blockquote><ul><li><p>依赖关系 dao 层依赖 domain service 依赖 dao controller 依赖 service 所以需要在对应工程的 pom.xml 里配置依赖</p></li><li><p><strong>配置tct-dao里的pom.xml</strong></p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;parent&gt;
    &lt;groupId&gt;com.tencent&lt;/groupId&gt;
    &lt;artifactId&gt;tct-commons&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  &lt;/parent&gt;
  &lt;artifactId&gt;txt-dao&lt;/artifactId&gt;
  &lt;dependencies&gt;
	  &lt;dependency&gt;
		  &lt;groupId&gt;com.tencent&lt;/groupId&gt;
		  &lt;artifactId&gt;tct-domain&lt;/artifactId&gt;
    	  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
	  &lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>报错信息如下：</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Missing artifact com.tencent:tct-domain:jar:0.0.1-SNAPSHOT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p><strong>原因：</strong> 之前的命名错误，将前缀txt更改为tct之后pom.xml里的artifactId标签里依然是txt-dao</p></li><li><p><strong>解决方法：</strong> 将所有工程里的pom.xml里的artifactId标签里前缀为txt更改为 tct，更改完成之后，如图所示报错解决</p></li></ul><figure><img src="'+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>在domain工程里写一个实体类</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.tencent.easyJava.domain;
/**
 * User实体类
* &lt;p&gt;Title: User&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年6月27日
 */
public class User {

	private Integer id;
	private String name;
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
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>在dao工程里写一个dao类看看是否能够导入其它工程的实体类，如图所示成功导入，未报错。</li></ol><figure><img src="`+S+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.tencent.easyJava.dao;

import com.tencent.easyJava.domain.User;

public class UserDao {

	public void addUser(User user) {
		System.out.println(&quot;add User:&quot; + user);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,46),P={class:"hint-container info"},O=t("p",{class:"hint-container-title"},"相关信息",-1),V={href:"https://github.com/javaobjects/tct-commons",target:"_blank",rel:"noopener noreferrer"};function U(L,T){const e=r("ExternalLinkIcon");return l(),s("div",null,[o(" more "),t("h1",w,[z,i(),t("a",N,[i("68-Java-使用Maven创建聚合工程.md"),n(e)])]),j,t("div",P,[O,t("p",null,[t("strong",null,[i("以上就是我关于 Java-使用Maven创建聚合工程 知识点的整理与总结的全部内容 "),t("a",V,[i("另附源码"),n(e)])])])])])}const H=a(k,[["render",U],["__file","java68.html.vue"]]);export{H as default};

import{_ as a,X as s,Y as l,a1 as r,Z as t,$ as e,a2 as n,a0 as o,F as g}from"./framework-68dd73a2.js";const c="/blog/assets/Java_65_1.png",d="/blog/assets/Java_65_2.png",p="/blog/assets/Java_65_3.png",v="/blog/assets/Java_65_4.png",u="/blog/assets/Java_65_5.png",m="/blog/assets/Java_65_6.png",_="/blog/assets/Java_65_7.png",f="/blog/assets/Java_65_8.png",b="/blog/assets/Java_65_9.png",h="/blog/assets/Java_65_10.png",x="/blog/assets/Java_65_11.png",y="/blog/assets/Java_65_12.png",J="/blog/assets/Java_65_13.png",z="/blog/assets/Java_65_14.png",M="/blog/assets/Java_65_15.png",j="/blog/assets/Java_65_16.png",I="/blog/assets/Java_65_17.png",w="/blog/assets/Java_65_18.png",k="/blog/assets/Java_65_19.png",q="/blog/assets/Java_65_20.png",P="/blog/assets/Java_65_21.png",V="/blog/assets/Java_65_22.png",C="/blog/assets/Java_65_23.png",S="/blog/assets/Java_65_24.png",A="/blog/assets/Java_65_25.png",R="/blog/assets/Java_65_26.png",E="/blog/assets/Java_65_27.png",L="/blog/assets/Java_65_28.png",B="/blog/assets/Java_65_29.png",N="/blog/assets/Java_65_30.png",O="/blog/assets/Java_65_31.png",T="/blog/assets/Java_65_32.png",H={},U={id:"_65-java-如何使用maven构建工程-md",tabindex:"-1"},F=t("a",{class:"header-anchor",href:"#_65-java-如何使用maven构建工程-md","aria-hidden":"true"},"#",-1),X={href:"http://xn--65-Java-Maven-ww4udto59jxuppsexn5cj98c3pva.md",target:"_blank",rel:"noopener noreferrer"},D=t("h4",{id:"创建maven工程前知识准备",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#创建maven工程前知识准备","aria-hidden":"true"},"#"),e(" 创建Maven工程前知识准备：")],-1),G=t("ul",null,[t("li",null,"什么是maven？")],-1),Y={href:"https://maven.apache.org",target:"_blank",rel:"noopener noreferrer"},W=t("figure",null,[t("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),Z=t("figure",null,[t("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),$=t("p",null,"无须下载安装，Eclipse已经集成咯maven环境",-1),K=t("figure",null,[t("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),Q=t("figure",null,[t("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),tt={href:"https://repo.maven.apache.org/maven2/",target:"_blank",rel:"noopener noreferrer"},et=t("figure",null,[t("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),it=t("ul",null,[t("li",null,"查看Eclipse中Maven默认本地仓库")],-1),nt=t("p",null,"window ---> Preferences ---> Maven ---> User Settings",-1),at=t("figure",null,[t("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),st={href:"https://www.jianshu.com/p/056ae13ed684",target:"_blank",rel:"noopener noreferrer"},lt=o('<h4 id="创建maven工程" tabindex="-1"><a class="header-anchor" href="#创建maven工程" aria-hidden="true">#</a> 创建Maven工程</h4><ol><li>使用Eclipse新建一个Maven工程</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>备注：
Group Id: 公司名
Aftifact Id: 工程名
Packaging:war(web工程) 
使用springboot jar包war包都可以

点击 Finish 之后稍作等待。。。生成工程目录结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如图所示为Maven工程的目录结构</strong></p><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Java Resources/src/main/java 放入Java代码</strong> 如图所示：</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Java Resources/src/main/resources 资源文件</strong> 如图所示：</p><figure><img src="'+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Java Resources/src/test/java</strong> 测试类存放处</p><p><strong>Java Resources/src/test/resources</strong> 测试时的配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>备注：
测试的这堆东西也就是项目进行时测试时所用，项目部署时不作发布
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>src/main/webapp</strong> 放前端页面</p><ol start="2"><li>生成web.xml文件</li></ol><figure><img src="`+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建一个index.jsp页面</li></ol><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Jsp 报错如下：</strong></p><figure><img src="'+j+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The superclass &quot;javax.servlet.http.HttpServlet&quot; was not found on the Java Build Path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解决方法一：</strong></p><figure><img src="`+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>解决方法二：</strong> 导入对应的包，在pom.xml中配置</p><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.tencent&lt;/groupId&gt;
  &lt;artifactId&gt;demo_springMVC_maven&lt;/artifactId&gt;
  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;war&lt;/packaging&gt;
  
  &lt;!-- 怎么导包呢？ --&gt;
  &lt;dependencies&gt;
	  &lt;!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api --&gt;
	&lt;dependency&gt;
	    &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
	    &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;
	    &lt;version&gt;3.1.0&lt;/version&gt;
	    &lt;scope&gt;provided&lt;/scope&gt;
	&lt;/dependency&gt;
  &lt;/dependencies&gt;
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要一保存，将会自动下载jar包,如图所示仓库已下载。</p><figure><img src="`+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>打开目录 Java Resources ---&gt; Libraries 目录下发现我的目录下居然没有 Maven Dependencies目录</li></ol><p><strong>解决办法</strong></p><p>Build Path ---&gt; Configure Build Path ---&gt; Java Build Path ---&gt; Maven Dependencies ---&gt; Edit ---&gt; Maven Project settings ---&gt; 去掉勾选Resolve dependencies from Workspace projects ---&gt; yes ---&gt; Apply ---&gt; Apply and Close ---&gt; Finish ---&gt; Apply ---&gt; Apply and Close</p><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>运行Maven工程</li></ol><p><strong>第一种：</strong></p><p>右键项目 ---&gt; Run As ---&gt; 1 Run on Server 如图所示启动成功</p><figure><img src="'+R+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>第二种：部署Maven项目</strong></p><ul><li><p>先停之前的Server</p></li><li><p>在pom.xml里面声明内嵌一个Tomcat服务器</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.tencent&lt;/groupId&gt;
  &lt;artifactId&gt;demo_springMVC_maven&lt;/artifactId&gt;
  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;war&lt;/packaging&gt;
  
  &lt;!-- 怎么导包呢？ --&gt;
  &lt;dependencies&gt;
	  &lt;!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api --&gt;
	&lt;dependency&gt;
	    &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
	    &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;
	    &lt;version&gt;3.1.0&lt;/version&gt;
	    &lt;scope&gt;provided&lt;/scope&gt;
	&lt;/dependency&gt;
  &lt;/dependencies&gt;
  	&lt;!-- 配置build环境 --&gt;
   &lt;build&gt;
       &lt;plugins&gt;
          &lt;plugin&gt;
				&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
				&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
				&lt;version&gt;3.2&lt;/version&gt;
				&lt;configuration&gt;
					&lt;source&gt;1.7&lt;/source&gt;
					&lt;target&gt;1.7&lt;/target&gt;
					&lt;encoding&gt;utf-8&lt;/encoding&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;
			&lt;plugin&gt;
				&lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;
				&lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;
				&lt;version&gt;2.2&lt;/version&gt;
				&lt;configuration&gt;
					&lt;port&gt;8080&lt;/port&gt;
					&lt;path&gt;/demo_springMVC_maven&lt;/path&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;      
       &lt;/plugins&gt;
  &lt;/build&gt; 
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一、 更新下Maven</p><p>项目右键 ---&gt; Maven ---&gt; Update Project</p><figure><img src="`+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其目的让其检查依赖</p><p>二、启动Maven项目</p><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>报错信息如下 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Unknown lifecycle phase &quot;mvn&quot;. You must specify a valid lifecycle phase or a goal in the format &lt;plugin-prefix&gt;:&lt;goal&gt; or &lt;plugin-group-id&gt;:&lt;plugin-artifact-id&gt;[:&lt;plugin-version&gt;]:&lt;goal&gt;. Available lifecycle phases are: validate, initialize, generate-sources, process-sources, generate-resources, process-resources, compile, process-classes, generate-test-sources, process-test-sources, generate-test-resources, process-test-resources, test-compile, process-test-classes, test, prepare-package, package, pre-integration-test, integration-test, post-integration-test, verify, install, deploy, pre-clean, clean, post-clean, pre-site, site, post-site, site-deploy. -&gt; [Help 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>原因：Eclipse已经集成Maven环境，无需要输入mvn命令，正确的在Goals中输入应该是 tomcat7:run</strong></p><p>如图所示，启动成功：</p><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>复制其URL在浏览器中输入回车，如图所示Maven工程已运行。</p><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',62),rt={href:"https://github.com/javaobjects/demo_springMVC_maven",target:"_blank",rel:"noopener noreferrer"},ot=t("hr",null,null,-1),gt=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),ct=t("hr",null,null,-1),dt=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function pt(vt,ut){const i=g("ExternalLinkIcon");return s(),l("div",null,[r(" more "),t("h1",U,[F,e(),t("a",X,[e("65-Java-如何使用Maven构建工程.md"),n(i)])]),D,G,t("p",null,[e("maven:中央仓库 编译，打包测试，部署 一体化 "),t("a",Y,[e("maven官网"),n(i)])]),W,Z,$,K,Q,t("p",null,[e("Maven的中央仓库："),t("a",tt,[e("https://repo.maven.apache.org/maven2/"),n(i)])]),et,it,nt,at,t("p",null,[e("从中可以看到maven默认本地仓库存放在C盘，那么我们需要更改其默认路径，那么如何更改呢？参考博客"),t("a",st,[e("Java-如何设置Maven本地仓库不使用C盘默认仓库"),n(i)])]),lt,t("p",null,[t("strong",null,[e("以上就是我关于 Java-如何使用Maven构建工程 知识点的整理与总结的全部内容 "),t("a",rt,[e("另附源码"),n(i)])])]),ot,gt,ct,dt])}const _t=a(H,[["render",pt],["__file","65-Java-如何使用Maven构建工程.html.vue"]]);export{_t as default};

import{_ as l,X as d,Y as s,a1 as r,Z as t,$ as e,a2 as n,a0 as a,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Java_69_1.png",g="/blog/assets/Java_69_2.png",v="/blog/assets/Java_69_3.png",u="/blog/assets/Java_69_4.png",m="/blog/assets/Java_69_5.png",p="/blog/assets/Java_69_6.png",b="/blog/assets/Java_69_7.png",_={},f=t("h1",{id:"_69-java如何设置maven仓库中没有的坐标-oracle驱动包-md",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_69-java如何设置maven仓库中没有的坐标-oracle驱动包-md","aria-hidden":"true"},"#"),e(" 69-Java如何设置Maven仓库中没有的坐标_oracle驱动包.md")],-1),h=t("p",null,"注意：Oracle驱动没有Maven构建，需要自己创建构建;",-1),x={href:"https://www.jianshu.com/p/380dca06c1cb",target:"_blank",rel:"noopener noreferrer"},j=a('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th></th><th>BANNER</th></tr></thead><tbody><tr><td>1</td><td>Oracle Database 11g Enterprise Edition Release 11.2.0.1.0 - 64bit Production</td></tr><tr><td>2</td><td>PL/SQL Release 11.2.0.1.0 - Production</td></tr><tr><td>3</td><td>CORE 11.2.0.1.0 Production</td></tr><tr><td>4</td><td>TNS for 64-bit Windows: Version 11.2.0.1.0 - Production</td></tr><tr><td>5</td><td>NLSRTL Version 11.2.0.1.0 - Production</td></tr></tbody></table>',2),I={start:"2"},y={href:"https://www.jianshu.com/p/4d20aa036db4",target:"_blank",rel:"noopener noreferrer"},D=a('<figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>mvn install : install-file-DgroupId=com.oracle  -DartifactId=ojdbc14-Dversion=10.2.0.5. 0 -Dpackaging=jar -Dfile=本地路径\\ojdbc12.jar可以来到jar所在目录下执行这段按照命令：mvn install:install-file -DgroupId=com.oracle -DartifactId=ojdbc6 -Dversion=11.2.0.1.0 -Dpackaging=jar -Dfile=ojdbc6.jar</li></ol><ul><li>首先确定是否有 <strong>ojdbc12.jar</strong> 包，一般都在Oracle的安装目录，例我的目录在 E:\\app\\yanbo\\product\\11.2.0\\dbhome_1\\jdbc\\lib\\ojdbc6.jar</li></ul><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以对应执行这段命令我应该先进入这个路径下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>E:

cd E:\\app\\yanbo\\product\\11.2.0\\dbhome_1\\jdbc\\lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将上述命令的版本号更改为自己的版本号所以对应的命令应该为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn install:install-file -DgroupId=com.oracle -DartifactId=ojdbc6 -Dversion=11.2.0.1.0 -Dpackaging=jar -Dfile=ojdbc6.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图所示的安装路径，确定是否是安装在对应的路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>D:\\Program Files\\soft\\apache-maven-3.6.1\\respository\\com\\oracle\\ojdbc6\\11.2.0.1.0\\ojdbc6-11.2.0.1.0.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>设置好坐标之后在工程里引用这个坐标</li></ol><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
  &lt;artifactId&gt;pay&lt;/artifactId&gt;
  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  &lt;packaging&gt;war&lt;/packaging&gt;
  
  &lt;!-- 怎么导包？ --&gt;
	&lt;dependencies&gt;
		&lt;!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api --&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;javax.servlet&lt;/groupId&gt;
			&lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;
			&lt;version&gt;3.1.0&lt;/version&gt;
			&lt;scope&gt;provided&lt;/scope&gt;
		&lt;/dependency&gt;
		&lt;dependency&gt;
			&lt;groupId&gt;com.oracle&lt;/groupId&gt;
			&lt;artifactId&gt;ojdbc6&lt;/artifactId&gt;
			&lt;version&gt;11.2.0.1.0&lt;/version&gt;
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
					&lt;path&gt;/pay&lt;/path&gt;
				&lt;/configuration&gt;
			&lt;/plugin&gt;      
       &lt;/plugins&gt;
  &lt;/build&gt; 
&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),w={href:"https://github.com/javaobjects/pay",target:"_blank",rel:"noopener noreferrer"},k=t("hr",null,null,-1),E=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),J=t("hr",null,null,-1),N=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function P(O,V){const i=o("ExternalLinkIcon");return d(),s("div",null,[r(" more "),f,h,t("ol",null,[t("li",null,[e("查询Oracle的版本 select * from v$version; 或参考博客 "),t("a",x,[e("Oracle-查看版本号"),n(i)])])]),j,t("ol",I,[t("li",null,[e("确定自已已经安装好Maven的环境，若未安装好参考博客 "),t("a",y,[e("Java-Window10-Maven环境搭建"),n(i)]),e(",cmd 中输入 mvn -v 进行验证,如图所示表明环境欧克。")])]),D,t("p",null,[t("strong",null,[e("以上就是我关于 Java如何设置Maven仓库中没有的坐标_oracle驱动包 知识点的整理与总结的全部内容 "),t("a",w,[e("另附源码"),n(i)])])]),k,E,J,N])}const M=l(_,[["render",P],["__file","java69.html.vue"]]);export{M as default};

import{_ as o,X as i,Y as n,a1 as e,Z as a,$ as s,a2 as g,a0 as l,F as r}from"./framework-68dd73a2.js";const p="/blog/assets/Java_1_1.png",_="/blog/assets/Java_1_2.png",c="/blog/assets/Java_1_3.png",m="/blog/assets/Java_1_4.png",d="/blog/assets/Java_1_5.png",v="/blog/assets/Java_1_6.png",b="/blog/assets/Java_1_7.png",f="/blog/assets/Java_1_8.png",y="/blog/assets/Java_1_9.png",h="/blog/assets/Java_1_10.png",u="/blog/assets/Java_1_11.png",J="/blog/assets/Java_1_12.png",z="/blog/assets/Java_1_13.png",j="/blog/assets/Java_1_14.png",x="/blog/assets/Java_1_15.png",k="/blog/assets/Java_1_16.png",E="/blog/assets/Java_1_17.png",N="/blog/assets/Java_1_18.png",V="/blog/assets/Java_1_19.png",D="/blog/assets/Java_1_20.png",B="/blog/assets/Java_1_21.png",w="/blog/assets/Java_1_22.png",C="/blog/assets/Java_1_23.png",I="/blog/assets/Java_1_24.png",L="/blog/assets/Java_1_25.png",P="/blog/assets/Java_1_26.png",F="/blog/assets/Java_1_27.png",M={},S=a("h1",{id:"java项目eclipse配置maven环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java项目eclipse配置maven环境","aria-hidden":"true"},"#"),s(" Java项目Eclipse配置maven环境")],-1),T={href:"https://jingyan.baidu.com/article/4853e1e569357c1909f72620.html",target:"_blank",rel:"noopener noreferrer"},X=a("img",{src:p,alt:"",loading:"lazy"},null,-1),Y=a("img",{src:_,alt:"",loading:"lazy"},null,-1),Z=l('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在此目录中D:\\apache-maven-3.5.3-bin\\apache-maven-3.5.3\\conf找到 <img src="'+d+'" alt="" loading="lazy"></p><p>并将其备份 <img src="'+v+'" alt="" loading="lazy"></p><p>右键在编辑器中打列settings.xml文件 找到此处 <img src="'+b+'" alt="" loading="lazy"> 若对应的目录中没有repository文件，则创建一个空的文件夹并命名为repository文件 二、找到此处 <img src="'+f+'" alt="" loading="lazy"></p><p>这里的一段代码代表的是设置代理，你的网络如果没有代理就可以把这一段注释掉，那么问题来咯如何知道自己的网络是滞有代理？</p><p>打开谷歌浏览器 <img src="'+y+'" alt="" loading="lazy"></p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>像我这种就是没有代理，则需要注释掉此代码。 若是这种： <img src="'+u+'" alt="" loading="lazy"></p><p>则使用咯代理，则不需注释</p><p>三、再往下走找到此段代码： <img src="'+J+'" alt="" loading="lazy"></p><p>此处需要将你所安装的jdk版本更改正确 若不知是多少版本，建议进行此操作 <img src="'+z+'" alt="" loading="lazy"></p><p>四、在eclipse里右键项目maven===&gt;updata project 出现如图 <img src="'+j+'" alt="" loading="lazy"> 点击确定，右下角出现如图 <img src="'+x+'" alt="" loading="lazy"></p><p>点击此处</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>出现正在下载对应的文件</p><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下载路径为刚刚所新建的文件repository</p><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>结果我的项目在下载到大约70%时出现这玩意！！！逗我玩呢。。 <img src="'+V+'" alt="" loading="lazy"></p><p>报错为：Error reading file D:\\apache-maven-3.5.3-bin\\apache-maven-3.5.3\\repository\\org\\syslog4j\\syslog4j\\0.9.46\\syslog4j-0.9.46.jar D:\\apache-maven-3.5.3-bin\\apache-maven-3.5.3\\repository\\org\\syslog4j\\syslog4j\\0.9.46\\syslog4j-0.9.46.jar (系统找不到指定的文件。)</p><p>完成之后项目成这样： <img src="'+D+'" alt="" loading="lazy"></p><p>有个明显的叹号，启动项目又成这样： <img src="'+B+'" alt="" loading="lazy"></p><p>右键项目===》build Path <mark><mark>&gt;configure build Path</mark>&gt;libraries</mark>&gt;Maven Dependencies出现如图： <img src="'+w+'" alt="" loading="lazy"><img src="'+C+'" alt="" loading="lazy"> 这个好咯之后的截图当时忘记截图咯 当时发现syslog4j文件后边有个missing 我只有到maven的官网去搜索这个文件然后下载替换 <img src="'+I+'" alt="" loading="lazy"> 我发现官网上这个文件只有这一个版本 <img src="'+L+'" alt="" loading="lazy"> 于是在项目中打开 <img src="'+P+'" alt="" loading="lazy"> 将其更改为对应的版本 项目重新启动后终于正常 <img src="'+F+'" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',28);function $(q,A){const t=r("ExternalLinkIcon");return i(),n("div",null,[e(" more "),S,a("p",null,[s("前提准备： 1、eclipse安装 2、jdk 1.8安装 3、apache-tomcat-8.0.51 4、maven安装包 5、svn(不是必备） 参考文章 "),a("a",T,[s("https://jingyan.baidu.com/article/4853e1e569357c1909f72620.html"),g(t)]),s(" 其中有些小细节，灵活变动即可 "),X,s(" 接下来是我记录的要点： 一、打开eclipse windows --proference--maven--user-sertting "),Y]),Z])}const H=o(M,[["render",$],["__file","java1.html.vue"]]);export{H as default};

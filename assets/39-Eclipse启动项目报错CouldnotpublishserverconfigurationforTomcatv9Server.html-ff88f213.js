import{_ as t,X as o,Y as l,a1 as r,Z as e,$ as a,a2 as n,a0 as i,F as c}from"./framework-68dd73a2.js";const u="/blog/assets/Eclipse_39_1.png",h={},d=i(`<h1 id="_39-eclipse启动项目报错could-not-publish-server-configuration-for-tomcat-v9-0-server-at-localhost-multiple-contexts-have-a-path-of-tickets-md" tabindex="-1"><a class="header-anchor" href="#_39-eclipse启动项目报错could-not-publish-server-configuration-for-tomcat-v9-0-server-at-localhost-multiple-contexts-have-a-path-of-tickets-md" aria-hidden="true">#</a> 39-Eclipse启动项目报错Could not publish server configuration for Tomcat v9.0 Server at localhost.Multiple Contexts have a path of &quot;/tickets&quot;..md</h1><h4 id="bug回顾" tabindex="-1"><a class="header-anchor" href="#bug回顾" aria-hidden="true">#</a> BUG回顾</h4><ul><li>最近启动一个JAVAEE项目时报错如下,多次尝试解决找不到原因，于是只能暴力解决了。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Could</span> not publish server configuration <span class="token keyword">for</span> <span class="token class-name">Tomcat</span> v9<span class="token punctuation">.</span><span class="token number">0</span> <span class="token class-name">Server</span> at <span class="token class-name"><span class="token namespace">localhost<span class="token punctuation">.</span></span>
Multiple</span> <span class="token class-name">Contexts</span> have a path of <span class="token string">&quot;/tickets&quot;</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><ul><li>删除Servers文件夹，以及控制台的Servers里的Tomcat，而后再次添加即可了</li></ul><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),p={href:"https://my.oschina.net/u/3222198/blog/7964503",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("strong",null,[a("以上就是我关于 "),e("em",null,'Eclipse启动项目报错Could not publish server configuration for Tomcat v9.0 Server at localhost.Multiple Contexts have a path of "/tickets"'),a(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])],-1),v=e("hr",null,null,-1),m=e("h4",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),a(" 分割线")],-1),f=e("hr",null,null,-1),g=e("h4",{id:"扩展知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#扩展知识","aria-hidden":"true"},"#"),a(" 扩展知识")],-1),b={href:"https://blog.csdn.net/weixin_43820665/article/details/116783458",target:"_blank",rel:"noopener noreferrer"},k=e("hr",null,null,-1),x=e("p",null,"分割线",-1),E=e("hr",null,null,-1),C=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function S(T,V){const s=c("ExternalLinkIcon");return o(),l("div",null,[r(" more "),d,e("ul",null,[e("li",null,[a("添加方法请参考我的另一博客"),e("a",p,[a("Eclipse 如何配置 Tomcat?"),n(s)])])]),_,v,m,f,g,e("ol",null,[e("li",null,[e("a",b,[a("Eclipse报错：错误: 程序包javax.servlet.http不存在"),n(s)])])]),k,x,E,C])}const j=t(h,[["render",S],["__file","39-Eclipse启动项目报错CouldnotpublishserverconfigurationforTomcatv9Server.html.vue"]]);export{j as default};

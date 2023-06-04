import{_ as t,X as n,Y as r,a1 as s,Z as e,$ as a,a2 as l,a0 as o,F as c}from"./framework-68dd73a2.js";const d="/blog/assets/Eclipse_38_1.png",h="/blog/assets/Eclipse_38_2.png",p="/blog/assets/Eclipse_38_3.png",_={},g=o('<h1 id="_38-eclipse如何解决javaee项目中javax包报错-md" tabindex="-1"><a class="header-anchor" href="#_38-eclipse如何解决javaee项目中javax包报错-md" aria-hidden="true">#</a> 38-Eclipse如何解决JavaEE项目中javax包报错？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="bug回顾" tabindex="-1"><a class="header-anchor" href="#bug回顾" aria-hidden="true">#</a> BUG回顾</h3><ul><li>如下图所示，导入JavaEE项目然后狂彪如下错误</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><ul><li>项目右键 --&gt; Build Path ----&gt; Configure Build Path ---&gt; Libraies ---&gt; Add Libray ---&gt; Server RunTime ----&gt; Applay 或者 Add External JAR里找到本地Tomcat里的servlet-api.jar而后点击 Applay即可解决这个问题</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Eclipse如何解决JavaEE项目中javax包报错？</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>',14),u={href:"https://blog.csdn.net/weixin_43820665/article/details/116783458",target:"_blank",rel:"noopener noreferrer"},f=e("hr",null,null,-1),m=e("h3",{id:"分割线-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线-1","aria-hidden":"true"},"#"),a(" 分割线")],-1),x=e("hr",null,null,-1);function v(b,E){const i=c("ExternalLinkIcon");return n(),r("div",null,[s(" more "),g,e("ol",null,[e("li",null,[e("a",u,[a("Eclipse报错：错误: 程序包javax.servlet.http不存在"),l(i)])])]),f,m,x])}const y=t(_,[["render",v],["__file","eclipse38.html.vue"]]);export{y as default};
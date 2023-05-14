import{_ as r,X as o,Y as s,a1 as l,Z as e,$ as t,a2 as c,a0 as a,F as n}from"./framework-68dd73a2.js";const g="/blog/assets/Eclipse_37_1.png",p="/blog/assets/Eclipse_37_2.png",d="/blog/assets/Eclipse_37_3.png",h="/blog/assets/Eclipse_37_4.png",_="/blog/assets/Eclipse_37_5.png",m={},f=a('<h1 id="_37-eclipse如何配置tomcat-md" tabindex="-1"><a class="header-anchor" href="#_37-eclipse如何配置tomcat-md" aria-hidden="true">#</a> 37-Eclipse如何配置Tomcat?.md</h1><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ul><li>必须配置好本地Tomcat并且保证可以正常启动</li></ul><h4 id="eclipse配置tomcat" tabindex="-1"><a class="header-anchor" href="#eclipse配置tomcat" aria-hidden="true">#</a> Eclipse配置Tomcat</h4><ol><li>配置 preferences 里的server</li></ol><ul><li>路径：window -- &gt; preferences --&gt; server -- &gt; Runtime Environments --- &gt; 右侧点击 add --- &gt;Apache ----&gt; 选择自己的Tomcat版本(例本人是Tomcat9版本)----&gt;Next -----&gt; Browse 选择本地路径(例本人路径: D:\\ProgramFiles\\soft\\apache-tomcat-9.0.71) ---&gt; Finish ---&gt; Apply and close</li></ul><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>配置控制台的Server</li></ol><blockquote><p>如果控制台没有Server在window --&gt; show View 输入Servers即可找到并显示</p></blockquote><ul><li>路径： 点击 No servers are avallable, Click this link to create a new server ---&gt; Apache 里找到自己所需的Tomcat(例：Tomcat V9.0 Server) ---&gt; Finish</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>配置Servers里的Tomcat</li></ol><ul><li>双击Servers里的Tomcat ----&gt; 将Server Locations 里的单选选择第二个 ---- &gt; 将 Deploy path:里的 wtpwebapps 更改为 <strong>webapps</strong> ---&gt; Ctrl + S 保存</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试是否配置成功" tabindex="-1"><a class="header-anchor" href="#测试是否配置成功" aria-hidden="true">#</a> 测试是否配置成功</h4>',15),u={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},b=a('<figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Eclipse如何配置Tomcat?</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',11);function x(v,E){const i=n("ExternalLinkIcon");return o(),s("div",null,[l(" more "),f,e("ul",null,[e("li",null,[t("在控制台Tomcat右键start 启动后 启动后在浏览器地址栏输入"),e("strong",null,[e("a",u,[t("http://localhost:8080"),c(i)])]),t(" 如下图所示表明测试成功")])]),b])}const w=r(m,[["render",x],["__file","37-Eclipse如何配置Tomcat.html.vue"]]);export{w as default};

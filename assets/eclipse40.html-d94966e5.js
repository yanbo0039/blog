import{_ as c,X as i,Y as s,a1 as r,Z as e,$ as t,a2 as n,a0 as o,F as l}from"./framework-68dd73a2.js";const h="/blog/assets/Eclipse_40_1.png",d="/blog/assets/Eclipse_40_2.png",u="/blog/assets/Eclipse_40_3.png",g="/blog/assets/Eclipse_40_4.png",p="/blog/assets/Eclipse_40_5.png",_={},f={id:"_40-eclipse中ctrl-鼠标左键追踪源码时报错class-file-editor-source-not-found-the-source-attachment-does-not-contain-the-source-for-the-file-httpservlet-class-you-can-change-the-source-attachment-by-clicking-change-attached-source-below-如何解决-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_40-eclipse中ctrl-鼠标左键追踪源码时报错class-file-editor-source-not-found-the-source-attachment-does-not-contain-the-source-for-the-file-httpservlet-class-you-can-change-the-source-attachment-by-clicking-change-attached-source-below-如何解决-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--vqqp1dk5kql6c.md",target:"_blank",rel:"noopener noreferrer"},v=o(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="报错详细信息" tabindex="-1"><a class="header-anchor" href="#报错详细信息" aria-hidden="true">#</a> 报错详细信息</h3><ul><li>报错信息</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Class File Editor Source not found The source attachment does not contain the source for the file HttpServlet.class.
You can change the source attachment by clicking Change Attached Source below:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><ol><li>通常只需要将安装的jdk文件里的src.zip关联即可</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',8),x={start:"2"},k={href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},E=o('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>如下图所示将其下载之后 我将其放在Tomcat本地的安装目录并导入则可显示源码了</li></ul><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>clipse中ctrl+鼠标左键追踪源码时报错Class File Editor Source not found The source attachment does not contain the source for the file HttpServlet.class You can change the source attachment by clicking Change Attached Source below 如何解决</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>',9),y={href:"https://blog.csdn.net/weixin_43820665/article/details/116783458",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.cnblogs.com/NeverCtrl-C/articles/6687855.html",target:"_blank",rel:"noopener noreferrer"},C=e("hr",null,null,-1),S=e("h3",{id:"分割线-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线-1","aria-hidden":"true"},"#"),t(" 分割线")],-1),T=e("hr",null,null,-1);function z(N,V){const a=l("ExternalLinkIcon");return i(),s("div",null,[r(" more "),e("h1",f,[m,t(" 40-Eclipse中ctrl+鼠标左键追踪源码时报错Class File Editor Source not found The source attachment does not contain the source for the file HttpServlet.class You can change the source attachment by clicking Change Attached Source below "),e("a",b,[t("如何解决.md"),n(a)])]),v,e("ol",x,[e("li",null,[t("若上述方法没作用，则需要看看是不是Tomcat的源码未关联,需要到"),e("a",k,[t("Tomcat官网"),n(a)]),t("下载源码")])]),E,e("ol",null,[e("li",null,[e("p",null,[e("a",y,[t("Eclipse报错：错误: 程序包javax.servlet.http不存在"),n(a)])])]),e("li",null,[e("p",null,[e("a",w,[t("在 eclipse 中打开 servlet(我使用的是 Tomcat ) 的源码失败 "),n(a)])])])]),C,S,T])}const Y=c(_,[["render",z],["__file","eclipse40.html.vue"]]);export{Y as default};

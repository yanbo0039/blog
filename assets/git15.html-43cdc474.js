import{_ as a,X as o,Y as i,a1 as r,Z as e,$ as t,a2 as s,a0 as l,F as c}from"./framework-68dd73a2.js";const d="/blog/assets/Git_15_1.png",u="/blog/assets/Git_15_2.png",h={},g={id:"_15-git提交到github时报错unable-to-access-https-github-com-javaobjects-studylog-git-openssl-ssl-read-connection-was-reset-errno-10054如何解决-md",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_15-git提交到github时报错unable-to-access-https-github-com-javaobjects-studylog-git-openssl-ssl-read-connection-was-reset-errno-10054如何解决-md","aria-hidden":"true"},"#",-1),p={href:"https://github.com/javaobjects/studyLog.git/",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>报错如下</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fatal: unable to access &#39;https://github.com/javaobjects/studyLog.git/&#39;: OpenSSL SSL_read: Connection was reset, errno 10054
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>解决方法,执行如下代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global http.sslVerify &quot;false&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),m={href:"https://github.com/javaobjects/studyLog.git/",target:"_blank",rel:"noopener noreferrer"},f=e("hr",null,null,-1),v=e("h4",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),x=e("hr",null,null,-1),S=e("h4",{id:"扩展知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#扩展知识","aria-hidden":"true"},"#"),t(" 扩展知识")],-1),L={href:"https://www.cnblogs.com/lvhuayan/p/14538106.html",target:"_blank",rel:"noopener noreferrer"},j=e("hr",null,null,-1),y=e("p",null,"分割线",-1),w=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function G(C,V){const n=c("ExternalLinkIcon");return o(),i("div",null,[r(" more "),e("h1",g,[_,t(" 15-Git提交到Github时报错unable to access '"),e("a",p,[t("https://github.com/javaobjects/studyLog.git/"),s(n)]),t("': OpenSSL SSL_read: Connection was reset, errno 10054如何解决？.md")]),b,e("p",null,[e("strong",null,[t("以上就是我关于 "),e("em",null,[t("Git提交到Github时报错unable to access '"),e("a",m,[t("https://github.com/javaobjects/studyLog.git/"),s(n)]),t("': OpenSSL SSL_read: Connection was reset, errno 10054如何解决？")]),t(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])]),f,v,x,S,e("ol",null,[e("li",null,[e("a",L,[t("Git报错解决：fatal: unable to access 'https://github.com/.......': OpenSSL SSL_read: Connection was reset, errno 10054"),s(n)])])]),j,y,w,k])}const O=a(h,[["render",G],["__file","git15.html.vue"]]);export{O as default};

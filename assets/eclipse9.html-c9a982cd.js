import{_ as e,X as i,Y as t,a1 as a,a0 as s}from"./framework-68dd73a2.js";const n="/blog/assets/Eclipse_9_1.png",r="/blog/assets/Eclipse_9_2.png",o="/blog/assets/Eclipse_9_3.png",l="/blog/assets/Eclipse_9_4.png",c="/blog/assets/Eclipse_9_5.png",g="/blog/assets/Eclipse_9_6.png",d="/blog/assets/Eclipse_9_7.png",p="/blog/assets/Eclipse_9_8.png",u="/blog/assets/Eclipse_9_9.png",f={},_=s('<h1 id="eclipse启动项目时myproject-is-required-and-cannot-be-removed-from-the-server" tabindex="-1"><a class="header-anchor" href="#eclipse启动项目时myproject-is-required-and-cannot-be-removed-from-the-server" aria-hidden="true">#</a> Eclipse启动项目时myProject is required and cannot be removed from the server</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>Eclipse启动项目时<strong>myProject is required and cannot be removed from the server</strong> 报错而导入跳转jsp页面时404报错</p></blockquote><ul><li>如图：</li></ul><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>报错如下：</li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="我的原因是因为之前的项目名与现在的项目名不相同而-部署到服务器用的同一个名字" tabindex="-1"><a class="header-anchor" href="#我的原因是因为之前的项目名与现在的项目名不相同而-部署到服务器用的同一个名字" aria-hidden="true">#</a> 我的原因是因为之前的项目名与现在的项目名不相同而 部署到服务器用的同一个名字</h3><ul><li>解决方法：</li></ul><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>以上配置好之后再次启动项目：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>项目右键----&gt;Run as ------&gt;1 Run on Server ----&gt;Next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如图所示，不会再有项目重名的情况咯。。</li></ul><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>完全启动项目后能够跳转到UserServlet页面咯</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Eclipse启动项目时myProject is required and cannot be removed from the server</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',24);function m(h,b){return i(),t("div",null,[a(" more "),_])}const x=e(f,[["render",m],["__file","eclipse9.html.vue"]]);export{x as default};
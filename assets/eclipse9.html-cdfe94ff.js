import{_ as e,X as t,Y as a,a1 as r,a0 as i}from"./framework-68dd73a2.js";const c={},s=i(`<h1 id="eclipse启动项目时myproject-is-required-and-cannot-be-removed-from-the-server" tabindex="-1"><a class="header-anchor" href="#eclipse启动项目时myproject-is-required-and-cannot-be-removed-from-the-server" aria-hidden="true">#</a> Eclipse启动项目时myProject is required and cannot be removed from the server</h1><p>Eclipse启动项目时<strong>myProject is required and cannot be removed from the server</strong> 报错而导入跳转jsp页面时404报错 如图： <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_1.png" alt="" loading="lazy"> 报错如下： <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_2.png" alt="" loading="lazy"></p><h3 id="我的原因是因为之前的项目名与现在的项目名不相同而-部署到服务器用的同一个名字" tabindex="-1"><a class="header-anchor" href="#我的原因是因为之前的项目名与现在的项目名不相同而-部署到服务器用的同一个名字" aria-hidden="true">#</a> 我的原因是因为之前的项目名与现在的项目名不相同而 部署到服务器用的同一个名字</h3><p>解决方法： <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_3.png" alt="" loading="lazy"></p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以上配置好之后再次启动项目：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>项目右键----&gt;Run as ------&gt;1 Run on Server ----&gt;Next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如图所示，不会再有项目重名的情况咯。。</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完全启动项目后能够跳转到UserServlet页面咯 <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Eclipse_9_9.png" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,17);function n(o,d){return t(),a("div",null,[r(" more "),s])}const p=e(c,[["render",n],["__file","eclipse9.html.vue"]]);export{p as default};

import{_ as e,X as t,Y as i,a1 as a,a0 as r}from"./framework-68dd73a2.js";const n={},d=r(`<h1 id="_16-git如何解决提交到github时老是要输入用户名和密码的问题-md" tabindex="-1"><a class="header-anchor" href="#_16-git如何解决提交到github时老是要输入用户名和密码的问题-md" aria-hidden="true">#</a> 16-Git如何解决提交到Github时老是要输入用户名和密码的问题？.md</h1><h4 id="bug复现" tabindex="-1"><a class="header-anchor" href="#bug复现" aria-hidden="true">#</a> bug复现</h4><ul><li>如下图所示,Git提交github时老是让输入用户名密码</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Git_16_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Git_16_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>照它的要求输入了，提交之后还报如下错的误</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Logon failed, use ctrl+c to cancel basic credential prompt.
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for &#39;https://github.com/javaobjects/tickets.git/&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这不是玩我嘛</li></ul><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><p><strong>以上就是我关于 <em>Git如何解决提交到Github时老是要输入用户名和密码的问题？</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,18);function o(s,c){return t(),i("div",null,[a(" more "),d])}const h=e(n,[["render",o],["__file","git16.html.vue"]]);export{h as default};

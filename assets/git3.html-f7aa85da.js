import{_ as e,X as i,Y as n,a1 as a,a0 as t}from"./framework-68dd73a2.js";const l="/blog/assets/Git_3_1.png",s={},d=t('<h1 id="git提交时报错please-tell-me-who-you-are" tabindex="-1"><a class="header-anchor" href="#git提交时报错please-tell-me-who-you-are" aria-hidden="true">#</a> Git提交时报错Please tell me who you are......</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>如图所示：</li></ul><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*** Please tell me who you are.

Run

  git config --global user.email &quot;you@example.com&quot;
  git config --global user.name &quot;Your Name&quot;

to set your account&#39;s default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got &#39;yanbo@LAPTOP-3FPR38IO.(none)&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config user.name &quot;自己的用户名&quot;
git config user.email &quot;自己配置github时的邮箱&quot;

示例： 
$ git config user.name &quot;yanbo0039&quot;
$ git config user.email &quot;yanbo0039@yeah.net&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Git提交时报错Please tell me who you are......</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,11);function r(o,c){return i(),n("div",null,[a(" more "),d])}const m=e(s,[["render",r],["__file","git3.html.vue"]]);export{m as default};

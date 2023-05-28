import{_ as e,X as i,Y as n,a1 as a,a0 as t}from"./framework-68dd73a2.js";const s="/blog/assets/Git_3_1.png",l={},d=t('<h1 id="git提交时报错please-tell-me-who-you-are" tabindex="-1"><a class="header-anchor" href="#git提交时报错please-tell-me-who-you-are" aria-hidden="true">#</a> Git提交时报错Please tell me who you are......</h1><p>如图所示： <img src="'+s+`" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*** Please tell me who you are.

Run

  git config --global user.email &quot;you@example.com&quot;
  git config --global user.name &quot;Your Name&quot;

to set your account&#39;s default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got &#39;yanbo@LAPTOP-3FPR38IO.(none)&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config user.name &quot;自己的用户名&quot;
git config user.email &quot;自己配置github时的邮箱&quot;

示例： 
$ git config user.name &quot;yanbo0039&quot;
$ git config user.email &quot;yanbo0039@yeah.net&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是我解决这个问题的方法，若有其它更好的方法，希望大神分享。。。。</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,10);function r(o,u){return i(),n("div",null,[a(" more "),d])}const m=e(l,[["render",r],["__file","git3.html.vue"]]);export{m as default};

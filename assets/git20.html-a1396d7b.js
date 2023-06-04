import{_ as e,X as a,Y as t,a1 as i,a0 as n}from"./framework-68dd73a2.js";const r="/blog/assets/Git_20_1.png",s={},o=n(`<h1 id="git报错connection-reset-by-xxx-port-22" tabindex="-1"><a class="header-anchor" href="#git报错connection-reset-by-xxx-port-22" aria-hidden="true">#</a> Git报错Connection_reset_by_xxx_port_22</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="场景复现" tabindex="-1"><a class="header-anchor" href="#场景复现" aria-hidden="true">#</a> 场景复现</h3><ul><li>如下所示</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>E:\\Google\\vuepress-theme-hope&gt;git push github master
Connection reset by 20.205.243.166 port 22
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="错误原因" tabindex="-1"><a class="header-anchor" href="#错误原因" aria-hidden="true">#</a> 错误原因</h3><blockquote><p>我就是一个正常操作，正常的提交代码且之前己经提交很多次了，我怀疑可能是梯子的不稳定造成的</p></blockquote><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><blockquote><p>关闭或重启梯子</p></blockquote><blockquote><p>但我常用的解决方法是重启笔记本！！！</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Git报错Connection_reset_by_xxx_port_22</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>',16);function c(d,l){return a(),t("div",null,[i(" more "),o])}const u=e(s,[["render",c],["__file","git20.html.vue"]]);export{u as default};
import{_ as e,X as i,Y as a,a1 as d,a0 as t}from"./framework-68dd73a2.js";const n="/blog/assets/Git_19_1.png",r={},s=t(`<h1 id="git报错fatal-detected-dubious-ownership-in-repository如何解决" tabindex="-1"><a class="header-anchor" href="#git报错fatal-detected-dubious-ownership-in-repository如何解决" aria-hidden="true">#</a> Git报错fatal_detected_dubious_ownership_in_repository如何解决</h1><h3 id="报错信息" tabindex="-1"><a class="header-anchor" href="#报错信息" aria-hidden="true">#</a> 报错信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Administrator@DESKTOP-DFD9CE5 MINGW64 /d/alibaba/studyLog
$ git status

fatal: detected dubious ownership in repository at &#39;D:/alibaba/studyLog&#39;
&#39;D:/alibaba/studyLog&#39; is owned by:
        &#39;S-1-5-21-1768174577-13754125-2598047118-1001&#39;
but the current user is:
        &#39;S-1-5-21-2607242180-1233388006-380827990-500&#39;
To add an exception for this directory, call:

        git config --global --add safe.directory D:/alibaba/studyLog

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><blockquote><p>这个错误提示说明当前 Git 仓库的所有权归属存在问题。在指定的仓库目录下， 存在一个所有者标识为 &#39;S-1-5-21-1768174577-13754125-2598047118-1001&#39;， 但是当前用户标识为 &#39;S-1-5-21-2607242180-1233388006-380827990-500&#39;。 为了解决这个问题，Git 提供了一个安全机制，允许您在某些情况下添加目录的例外。 在您的情况下，Git 提示您执行以下命令来为该目录添加例外：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --add safe.directory D:/alibaba/studyLog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><ul><li>如下图所示，解决了此问题</li></ul><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>以上就是我关于 <em>Git报错fatal_detected_dubious_ownership_in_repository如何解决</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>',14);function l(o,c){return i(),a("div",null,[d(" more "),s])}const h=e(r,[["render",l],["__file","git19.html.vue"]]);export{h as default};

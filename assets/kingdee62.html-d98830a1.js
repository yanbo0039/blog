import{_ as e,X as a,Y as i,a1 as t,a0 as n}from"./framework-68dd73a2.js";const d="/blog/assets/Kingdee_62_1.png",r="/blog/assets/Kingdee_62_2.png",s="/blog/assets/Kingdee_62_3.png",o="/blog/assets/Kingdee_62_4.png",l={},c=n('<h1 id="_62-金蝶云苍穹在debug模式下如何进入轻分析模块-md" tabindex="-1"><a class="header-anchor" href="#_62-金蝶云苍穹在debug模式下如何进入轻分析模块-md" aria-hidden="true">#</a> 62-金蝶云苍穹在debug模式下如何进入轻分析模块？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="问题简述" tabindex="-1"><a class="header-anchor" href="#问题简述" aria-hidden="true">#</a> 问题简述</h3><blockquote><p>如图所示，在debug模式下(即未开启start-cosmic.bat)点击进入轻分析模块，则报如下错误</p></blockquote><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><ol><li>更改debugServer.java</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>System.setProperty(&quot;bos.app.special.deployalone.ids&quot;, &quot;&quot; );
//System.setProperty(&quot;ActionConfigFile&quot;, &quot;../../../mservice-cosmic/conf/actionconfig.xml&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>更改build.gradle</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//def trd= &#39;../../../mservice-cosmic/lib/trd&#39;
def trd= &#39;../../../mservice-qing/lib/trd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>如上更改完成之后重启所有服务，以及重新debug则可进入轻分析模块</li></ol><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><blockquote><p>如下图所示测试成功</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>金蝶云苍穹在debug模式下如何进入轻分析模块？</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p></div>',20);function g(u,p){return a(),i("div",null,[t(" more "),c])}const m=e(l,[["render",g],["__file","kingdee62.html.vue"]]);export{m as default};

import{_ as a,X as n,Y as s,a1 as t,a0 as e}from"./framework-68dd73a2.js";const p="/blog/assets/Kingdee_7_1.png",o="/blog/assets/Kingdee_7_2.png",c="/blog/assets/Kingdee_7_3.png",l="/blog/assets/Kingdee_7_4.png",i={},u=e('<h1 id="_7-如何解决bos工具无法启动客户端-md" tabindex="-1"><a class="header-anchor" href="#_7-如何解决bos工具无法启动客户端-md" aria-hidden="true">#</a> 7-如何解决Bos工具无法启动客户端?.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>如图所示,服务端已启动，客户端却怎么都没有？</li></ol><p>解决方法:</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>可以看到其文件内的东西，缺少路径，于是更改为为如下:</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">server</span> <span class="token name">PUBLIC</span> <span class="token string">&#39;-//Apusic//DTD Apusic Server Application 1.1//EN&#39;</span> <span class="token string">&#39;http://www.apusic.com/dtds/server_1_1.dtd&#39;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eas.ear<span class="token punctuation">&quot;</span></span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>I:/Project_0/runtime/server/deploy/eas.ear<span class="token punctuation">&quot;</span></span> <span class="token attr-name">start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fileserver.ear<span class="token punctuation">&quot;</span></span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>I:/Project_0/runtime/server/deploy/fileserver.ear<span class="token punctuation">&quot;</span></span> <span class="token attr-name">start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myweb<span class="token punctuation">&quot;</span></span> <span class="token attr-name">base</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>I:/Project_0/web/webRoot<span class="token punctuation">&quot;</span></span> <span class="token attr-name">start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>刷新代码后重新启动，如图所示启动成功</li></ol><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>如何解决Bos工具无法启动客户端?</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',16);function r(k,g){return n(),s("div",null,[t(" more "),u])}const m=a(i,[["render",r],["__file","kingdee7.html.vue"]]);export{m as default};

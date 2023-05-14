import{_ as a,X as n,Y as l,a1 as o,Z as t,$ as i,a2 as s,a0 as r,F as g}from"./framework-68dd73a2.js";const d="/blog/assets/Git_12_1.png",c="/blog/assets/Git_12_2.png",_="/blog/assets/Git_12_3.png",p="/blog/assets/Git_12_4.png",m="/blog/assets/Git_12_5.png",u="/blog/assets/Git_12_6.png",b="/blog/assets/Git_12_7.png",h="/blog/assets/Git_12_8.png",v="/blog/assets/Git_12_9.png",x="/blog/assets/Git_12_10.png",f="/blog/assets/Git_12_11.png",G="/blog/assets/Git_12_12.png",y="/blog/assets/Git_12_13.png",z="/blog/assets/Git_12_14.png",j="/blog/assets/Git_12_15.png",O="/blog/assets/Git_12_16.png",k="/blog/assets/Git_12_17.png",N="/blog/assets/Git_12_18.png",V={},B=t("h1",{id:"_12-git如何同时提交到github和码云-md",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_12-git如何同时提交到github和码云-md","aria-hidden":"true"},"#"),i(" 12-Git如何同时提交到Github和码云？.md")],-1),E=t("h4",{id:"需求",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#需求","aria-hidden":"true"},"#"),i(" 需求")],-1),J={href:"https://github.com/yanbo0039",target:"_blank",rel:"noopener noreferrer"},q={href:"https://gitee.com/yanbo0039",target:"_blank",rel:"noopener noreferrer"},C=t("strong",null,"自己有些md中图片用的是远程链接，在github上均能正常显示，但是在码云上确成咯这样。。。。如下图所示",-1),H=t("p",null,[t("img",{src:d,alt:"码云上图片显示",loading:"lazy"}),t("img",{src:c,alt:"github上图片显示",loading:"lazy"})],-1),I={href:"https://xxxxxxxx",target:"_blank",rel:"noopener noreferrer"},L=r('<p>无奈之下我只有修改我的本地文件，将图片路径全部换成相对路径，这个时候真正的需求就来咯。。。<strong>那么如何通过git同时提交到github同码云呢？</strong></p><h4 id="解决需求" tabindex="-1"><a class="header-anchor" href="#解决需求" aria-hidden="true">#</a> 解决需求：</h4><p><strong>前提条件，github上和码云上均有此项目，以下仅演示修改</strong></p><ol><li>git进入我的本地项目路径</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>手动进入我的本地项目</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>找出隐藏的.git/config文件</li></ol><p><img src="'+m+'" alt="" loading="lazy"><img src="'+u+'" alt="" loading="lazy"><img src="'+b+'" alt="" loading="lazy"></p><p>可以看到<strong>git给远程库起的默认名称是origin</strong>，但如果有多个远程库，我们需要用不同的名称来标识不同的远程库。</p><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>先删除已关联的名为origin的远程库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote rm origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>先关联GitHub的远程库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过 git remote add &lt;name&gt; &lt;url-of-remote&gt; 指令来添加远程仓库。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add github https://github.com/javaobjects/Oracle.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+x+'" alt="" loading="lazy"><img src="'+f+`" alt="" loading="lazy"></p><p><strong>注意，远程库的名称叫github，不叫origin了。</strong></p><ol start="6"><li>再关联码云的远程库：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add gitee https://gitee.com/JavaObjects/Oracle.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+G+'" alt="" loading="lazy"><img src="'+y+`" alt="" loading="lazy"></p><p><strong>远程库的名称叫gitee，不叫origin。</strong></p><ol start="7"><li>我们用<strong>git remote -v</strong>查看远程库信息,可以看到两个远程库</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gitee   https://gitee.com/JavaObjects/Oracle.git (fetch)
gitee   https://gitee.com/JavaObjects/Oracle.git (push)
github  https://github.com/javaobjects/Oracle.git (fetch)
github  https://github.com/javaobjects/Oracle.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+z+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>推送到GitHub</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status 
git add .
git commit -m &quot;push-message&quot;
git push github master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+j+'" alt="" loading="lazy"><img src="'+O+'" alt="" loading="lazy"><img src="'+k+`" alt="" loading="lazy"></p><ol start="9"><li>推送到码云</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push gitee master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>将.git文件隐藏</li></ol><p>查看----&gt;选项 ----&gt; 查看 ----&gt; 隐藏文件和文件夹 ----&gt; 不显示隐藏的文件、文件夹或驱动器 ----&gt; 应用 ---&gt; 确定</p><p><strong>以上就是我关于 <em>Git如何同时提交到Github和码云？</em> 知识点的整理与总结的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',39);function F(S,T){const e=g("ExternalLinkIcon");return n(),l("div",null,[o(" more "),B,E,t("p",null,[i("事情是这样的，自己之前一直用的是"),t("a",J,[i("github"),s(e)]),i("远程管理我的代码，但github毕竟是国外的，而且随时可能被墙，万一有一天不可访问，那么自己这么多年的心血那不是白费咯吗？于是乎决定将gihub上的代码做一个国内的备份，用上"),t("a",q,[i("码云"),s(e)]),i(",于是说干就干，但自己备份一些项目的时候发现，"),C,i("：")]),H,t("p",null,[i('而这些图片的路径都上一样的均为 "'),t("a",I,[i("https://xxxxxxxx"),s(e)]),i('" 的格式')]),L])}const Y=a(V,[["render",F],["__file","12-Git如何同时提交到Github和码云？.html.vue"]]);export{Y as default};

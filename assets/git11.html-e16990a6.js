import{_ as n,X as r,Y as s,a1 as o,Z as e,$ as t,a2 as g,a0 as i,F as l}from"./framework-68dd73a2.js";const c="/blog/assets/Git_11_1.png",d="/blog/assets/Git_11_2.png",m="/blog/assets/Git_11_3.png",p="/blog/assets/Git_11_4.png",u="/blog/assets/Git_11_5.png",f="/blog/assets/Git_11_6.png",_="/blog/assets/Git_11_7.png",b="/blog/assets/Git_11_8.png",h="/blog/assets/Git_11_9.png",v="/blog/assets/Git_11_10.png",x={},y=i(`<h1 id="_11-git提交everything-up-to-date-branch-master-set-up-to-track-remote-branch-master-from-origin-如何解决-md" tabindex="-1"><a class="header-anchor" href="#_11-git提交everything-up-to-date-branch-master-set-up-to-track-remote-branch-master-from-origin-如何解决-md" aria-hidden="true">#</a> 11-Git提交Everything up-to-date Branch &#39;master&#39; set up to track remote branch &#39;master&#39; from &#39;origin&#39;如何解决?.md</h1><p>如图所示，一切都是正常操作，结果报错如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Everything up-to-date
Branch &#39;master&#39; set up to track remote branch &#39;master&#39; from &#39;origin&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而且根据<strong>git log</strong>命令查看得出，自己今天提交多次</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),G={href:"https://github.com/javaobjects/myTask/commits/master",target:"_blank",rel:"noopener noreferrer"},k=i('<figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>我的解决方法如下：</strong></p><ol><li><p>先执行命令 <strong>git log</strong>,这个老重要咯。。几乎决定生死。。。。</p></li><li><p>按键盘<strong>q</strong>键，Enter退出</p></li><li><p>执行命令<strong>git rebase --abort</strong>，则会看到右侧的（）里的内容已经变成咯主分支，并且没有咯<strong>REBASE 1/1</strong></p></li></ol><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>但虽然回到咯主分支，但是你会惊奇的发现自己本地的文件好多都任空消失咯，惊不惊喜，意不意外。。。。哈哈哈哈哈。。。， 不要慌。。。我也办法。。。。哼哼哼。。。</strong></p><ol start="4"><li>根据刚刚的git log 命令找到 自己提交的最新的提交的版本号，比如我的最新的提交为</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>commit 186076570deefcf6d300cec81b5a97936d0f1e3e (HEAD)
Author: yanbo0039 &lt;yanbo0039@yeah.net&gt;
Date:   Mon Jul 8 13:50:58 2019 +0800

    NO.7-4-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>穿越到最新的分支版本，恢复本地文件，需要知道自己的版本号，例我的是 <strong>186076570deefcf6d300cec81b5a97936d0f1e3e</strong> 执行如下命令,</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git reset --hard 186076570deefcf6d300cec81b5a97936d0f1e3e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>接下来再正常操作，分别执行<strong>git add .</strong> 和 **git commit -m &quot;提交信息&quot;**命令，不出意外，你会遇到如下的bug</li></ol><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>接下来，请不要客气，强制推送，执行如下命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git push -f origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>执行以上操作后，那么本地文件也会恢复到最后一 次提交，github上也被全部提交咯。</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Git提交Everything up-to-date Branch &#39;master&#39; set up to track remote branch &#39;master&#39; from &#39;origin&#39;如何解决?</em> 知识点的整理与总结的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',23);function z(E,B){const a=l("ExternalLinkIcon");return r(),s("div",null,[o(" more "),y,e("p",null,[t("但"),e("a",G,[t("github"),g(a)]),t("上却显示我只提交咯一次！！！！！！！")]),k])}const V=n(x,[["render",z],["__file","git11.html.vue"]]);export{V as default};

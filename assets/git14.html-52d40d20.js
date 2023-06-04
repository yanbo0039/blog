import{_ as i,X as e,Y as t,a1 as a,a0 as n}from"./framework-68dd73a2.js";const s="/blog/assets/Git_14_1.png",l="/blog/assets/Git_14_2.png",d="/blog/assets/Git_14_3.png",r="/blog/assets/Git_14_4.png",c="/blog/assets/Git_14_5.png",o="/blog/assets/Git_14_6.png",g="/blog/assets/Git_14_7.png",u={},v=n('<h1 id="_14-git-如何将本地项目上传到gitee或github-md" tabindex="-1"><a class="header-anchor" href="#_14-git-如何将本地项目上传到gitee或github-md" aria-hidden="true">#</a> 14-Git-如何将本地项目上传到Gitee或Github？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景" aria-hidden="true">#</a> 需求背景</h3><blockquote><p>如果我们在本地完成了一个 项目 那么我们想将其远程传入Github 或者 Gitee 那么应该如何操作呢？</p></blockquote><h3 id="实现过程" tabindex="-1"><a class="header-anchor" href="#实现过程" aria-hidden="true">#</a> 实现过程</h3><blockquote><p>以 Github 为例</p></blockquote><ol><li>在 Github 上新建一个与 <strong>项目同名</strong> 文件夹</li></ol><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>根据其提示可知 需要先git进入到本地项目</li></ol><blockquote><p>例如我的项目路径在 E:\\Tencent\\FileCrud 那么我只需在git界面运行如下代码即可进入</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /E/Tencent/fileCurd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>复制项目在Github上的地址并执行 如下 代码即可 将其与github上同名文件相关连</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add 你自己想命名什么就命名什么但是你自己要记住就行 你自己的在Github上的项目地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>右边出现master则表示本地与git上的同名项目文件相关联了，当然你也可以弄多个Git仓库，比如我就同时用了Github和Gitee两个远程仓库，只需要重复执行第3条步骤即可</li></ol><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>你可以看看本地与远程项目有啥不一样在git界面执行如下代码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git status

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>可以看到由于远程仓库是个空壳 我们本地的项目全是干货 那么本地文件全都显示出来了</p></blockquote><ol start="6"><li>将本地项目全部添加到git 执行如下代码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>备注提交信息，为提交到远程仓库做准备</li></ol><p>\`\` git commit -m &quot;你想为项目备注的信息&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
8. 提交本地项目到远程仓库

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git push 你在第3条时的命名 master</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
![](14-Images/Git_14_8.png)

&gt; 至此就完成了本地项目git提交到远程仓库的全部操作了

***
### 分割线
***

::: info
**以上就是我关于 *Git-如何将本地项目上传到Gitee或Github？*  知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。**
:::



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function m(b,p){return e(),t("div",null,[a(" more "),v])}const h=i(u,[["render",m],["__file","git14.html.vue"]]);export{h as default};

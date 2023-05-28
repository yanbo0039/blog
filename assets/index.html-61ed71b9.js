import{_ as a,X as o,Y as i,a1 as r,Z as e,$ as t,a2 as s,a0 as c,F as l}from"./framework-68dd73a2.js";const d="/blog/assets/Git_10_1.png",m={},h=c(`<h1 id="_10-git-git-commit-m-内容写错-如何重新编辑-md" tabindex="-1"><a class="header-anchor" href="#_10-git-git-commit-m-内容写错-如何重新编辑-md" aria-hidden="true">#</a> 10-Git-git commit -m 内容写错，如何重新编辑？.md</h1><p>事情是这样的，刚刚自己在执行<strong>git commit -m &quot;提交信息&quot;</strong> 命令时，将里面的提交信息写错，此时并没有执行<strong>git push</strong>命令，基于这种需求的解决方案为执行如下命令即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend -m &quot;新的提交信息&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如图：</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h5>',6),_={href:"http://www.softwhy.com/article-8700-1.html",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[e("strong",null,[t("以上就是我关于 "),e("em",null,"Git-git commit -m 内容写错，如何重新编辑？"),t(" 知识点的整理与总结的全部内容")])],-1),g=e("hr",null,null,-1),p=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),f=e("hr",null,null,-1),x=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function b(v,k){const n=l("ExternalLinkIcon");return o(),i("div",null,[r(" more "),h,e("p",null,[e("a",_,[t("Git修改commit提交信息"),s(n)])]),u,g,p,f,x])}const V=a(m,[["render",b],["__file","index.html.vue"]]);export{V as default};

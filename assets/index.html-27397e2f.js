import{_ as n,X as a,Y as s,a1 as o,Z as i,$ as t,a2 as r,a0 as g,F as c}from"./framework-68dd73a2.js";const d="/blog/assets/Git_6_1.png",l="/blog/assets/Git_6_2.png",u="/blog/assets/Git_6_3.png",p="/blog/assets/Git_6_4.png",_={},b={id:"_6-git提交github里的organizations里的项目提交后contributions格子不变绿怎么回事-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_6-git提交github里的organizations里的项目提交后contributions格子不变绿怎么回事-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--6-GitgithubOrganizationsContributions-0492d07cu2dk2ata4048cq6bgz7ctz6bku8bhxybua9277cqg9jna237cus6kic0koa8258g.md",target:"_blank",rel:"noopener noreferrer"},f=g('<p>事情是这样的。。。如图所示，咋日我的项目有提交过7次，而我的绿格子确显示给我只有两次。。。而今早来提交发现居然我的格子居然一次都不给我变绿咯。。。于是乎我意识到可能是出bug咯。。。。</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这肯定不是我想要的结局。。。仔细一顿猛找以及冷静下来思考后发现自己在配置邮箱的时候好像没有输入与github相一致的邮箱名，极有可能是这个原因造成的，于是我在Git Bash里进行咯如下的操作。。。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git config user.email //查看自己配置的用户邮箱
$ git config user.email &quot;yanbo0039@yeah.net&quot;// 配置与github上相一致的邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而后修改文件之后提交测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
git commit -m &quot;测试github绿色格子&quot;
git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>提交去我的github主页一看。。。测试成功</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 Git提交github里的Organizations里的项目提交后Contributions格子不变绿怎么回事 知识点的整理与总结的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',15);function x(v,z){const e=c("ExternalLinkIcon");return a(),s("div",null,[o(" more "),i("h1",b,[m,t(),i("a",h,[t("6-Git提交github里的Organizations里的项目提交后Contributions格子不变绿怎么回事.md"),r(e)])]),f])}const G=n(_,[["render",x],["__file","index.html.vue"]]);export{G as default};

import{_ as n,X as a,Y as i,a1 as o,Z as e,$ as t,a2 as r,a0 as l,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Git_1_1.png",h="/blog/assets/Git_1_2.png",m={},u=l('<h1 id="_1-git提交报错git提交报错-rejected-master-master-fetch-first-error-failed-to-push-some-refs-to-md" tabindex="-1"><a class="header-anchor" href="#_1-git提交报错git提交报错-rejected-master-master-fetch-first-error-failed-to-push-some-refs-to-md" aria-hidden="true">#</a> 1-Git提交报错Git提交报错 ! [rejected] master - master (fetch first) error failed to push some refs to .md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>如图： <img src="'+c+`" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> ! [rejected]        master -&gt; master (fetch first)
error: failed to push some refs to &#39;https://github.com/javaobjects/demo_spring05_di_annotation.git&#39;
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., &#39;git pull ...&#39;) before pushing again.
hint: See the &#39;Note about fast-forwards&#39; in &#39;git push --help&#39; for details.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**解决方法一：**弹制推送命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    git push -f origin master 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**解决方法二：**代码合并</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. git pull --rebase origin master
2. git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如图： <img src="`+h+'" alt="" loading="lazy"></p>',9),p={href:"https://www.cnblogs.com/righere/p/5810205.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://stackoverflow.com/questions/28429819/rejected-master-master-fetch-first",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/weixin_43211277/article/details/82715355",target:"_blank",rel:"noopener noreferrer"},v=e("hr",null,null,-1),f=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),b=e("hr",null,null,-1),x=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function w(k,j){const s=d("ExternalLinkIcon");return a(),i("div",null,[o(" more "),u,e("p",null,[e("a",p,[t("附上某大神原博客地址"),r(s)])]),e("p",null,[e("a",g,[t("Stack Overflow--解决方法"),r(s)])]),e("p",null,[e("a",_,[t("另一大神解决方法"),r(s)])]),v,f,b,x])}const N=n(m,[["render",w],["__file","git1.html.vue"]]);export{N as default};

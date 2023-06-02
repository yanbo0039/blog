import{_ as e,X as a,Y as r,a1 as n,a0 as t}from"./framework-68dd73a2.js";const d={},c=t(`<h1 id="vue中的多页用vs单页应用" tabindex="-1"><a class="header-anchor" href="#vue中的多页用vs单页应用" aria-hidden="true">#</a> Vue中的多页用VS单页应用</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="多页应用优点" tabindex="-1"><a class="header-anchor" href="#多页应用优点" aria-hidden="true">#</a> 多页应用优点：</h4><pre><code>首屏时间特别快，SEO效果好
在vue项目中我们的页面跳转一般用router-link进行跳转
template标签里只能暴露一个根标签不可有两个或多个标签
</code></pre><h4 id="单页应用" tabindex="-1"><a class="header-anchor" href="#单页应用" aria-hidden="true">#</a> 单页应用</h4><pre><code>原理：js动态的把当前页面的内容给清除掉，再在新的HTML DOM结构上渲染新的容
优点：页面切换快
缺点：首屏时间稍慢，SEO差
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,10);function h(i,s){return a(),r("div",null,[n(" more "),c])}const l=e(d,[["render",h],["__file","vue7.html.vue"]]);export{l as default};

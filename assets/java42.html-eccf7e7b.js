import{_ as s,X as i,Y as n,a1 as l,Z as e,$ as a,a2 as d,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},u=r(`<h1 id="java-jsp跳转跟重定向的区别" tabindex="-1"><a class="header-anchor" href="#java-jsp跳转跟重定向的区别" aria-hidden="true">#</a> Java-JSP跳转跟重定向的区别</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="跳转" tabindex="-1"><a class="header-anchor" href="#跳转" aria-hidden="true">#</a> 跳转：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>request.getRequestDispatcher(&quot;/login.jsp&quot;).forward(request,response);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>url会不会改变？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>能不能传参数给目标页面？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可以穿数据给页面，怎么传：request.setAttribute(&quot;message&quot;, &quot;注册失败&quot;);
在页面怎么获取：&lt;%=request.getAttribute(&quot;message&quot;) %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>哪个访问网页的效率高？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>跳转的效率高，因为只需要请求一次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>访问网页的范围，哪个更广？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>跳转只能是站内跳转，出不了当前应用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>response.sendRedirect(&quot;login.jsp&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>url会不会改变？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>变，建议只要原来的操作有更新数据，那么去到下一个页面使用重定向最好。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>能不能传参数给目标页面？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不能通过request.setAttibute()传参数，但是可以这样传参数：
response.sendRedirect(request.getContextPath()+&quot;/login.jsp?
message=registersuccess&quot;);//把参数放在url的后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>哪个访问网页的效率高？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重定向的效率低，因为客户端需要请求两次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>访问网页的范围，哪个更广？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重定向可以定向到其他应用，范围更广
比如：response.sendRedirect(&quot;https://www.baidu.com&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,22),v={href:"https://wenku.baidu.com/view/6bb9969071fe910ef12df8e1.html",target:"_blank",rel:"noopener noreferrer"},m=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),a(" 分割线")],-1),h=e("hr",null,null,-1),x=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("p",null,[e("strong",null,[a("以上就是我关于 "),e("em",null,"Java-JSP跳转跟重定向的区别"),a(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])])],-1);function b(p,_){const t=o("ExternalLinkIcon");return i(),n("div",null,[l(" more "),u,e("p",null,[e("a",v,[a("参考链接-JSP跳转跟重定向的区别"),d(t)])]),m,g,h,x])}const f=s(c,[["render",b],["__file","java42.html.vue"]]);export{f as default};

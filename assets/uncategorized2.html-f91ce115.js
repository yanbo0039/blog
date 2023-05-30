import{_ as d,X as t,Y as o,a1 as l,Z as a,$ as e,a2 as i,a0 as r,F as s}from"./framework-68dd73a2.js";const c={},h=r(`<h1 id="marckdown语法" tabindex="-1"><a class="header-anchor" href="#marckdown语法" aria-hidden="true">#</a> marckdown语法</h1><p>Markdown 语法的目标是：成为一种适用于网络的书写语言。 Markdown 的格式语法只涵盖html纯文本可以涵盖的范围。 不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。</p><p>要制约的只有一些 HTML 区块元素――比如 <code>&lt;div&gt;</code> <code>&lt;table&gt;</code> <code>&lt;pre&gt;</code> <code>&lt;p&gt;</code> 等标签，必须在前后加上空行与其它内容区隔开， 还要求它们的开始标签与结尾标签不能用制表符或空格来缩进。 Markdown 的生成器有足够智能，不会在 HTML 区块标签外加上不必要的 <code>&lt;p&gt;</code> 标签。</p><h1 id="这是h1标题" tabindex="-1"><a class="header-anchor" href="#这是h1标题" aria-hidden="true">#</a> 这是H1标题“=========”</h1><h2 id="这是h2标题" tabindex="-1"><a class="header-anchor" href="#这是h2标题" aria-hidden="true">#</a> 这是H2标题&quot;--------&quot;</h2><p>这是一个P段落</p><p>这也是一个P段落</p><h3 id="这是h3标题" tabindex="-1"><a class="header-anchor" href="#这是h3标题" aria-hidden="true">#</a> 这是H3标题&quot;###&quot;</h3><blockquote><p>This is a blockquote.这是一个大写字母</p><p>This is the second paragraph in the blockquote. 这是大写字母中的第二段</p><h2 id="this-is-an-h2-in-a-blockquote" tabindex="-1"><a class="header-anchor" href="#this-is-an-h2-in-a-blockquote" aria-hidden="true">#</a> This is an H2 in a blockquote</h2></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 这是H1标题“=========”
 ====================
 这是H2标题&quot;--------&quot;
 ---------------------
 
这是一个P段落
 
这也是一个P段落
 ### 这是H3标题&quot;###&quot;
 
 &gt; This is a blockquote.这是一个大写字母
 &gt; 
 &gt; This is the second paragraph in the blockquote. 这是大写字母中的第二段
 &gt;
 &gt; ## This is an H2 in a blockquote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表&quot;+ - * &quot;</h2><ul><li>+号列表</li></ul><ul><li>-号列表</li></ul><ul><li>*号列表</li></ul><h2 id="有序列表直接写数字编号" tabindex="-1"><a class="header-anchor" href="#有序列表直接写数字编号" aria-hidden="true">#</a> 有序列表直接写数字编号</h2><ol><li>第一条</li><li>第二条</li></ol><h2 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h2><p><a href="www,baidu.com">百度</a><a href="www,sogou.com">搜狗</a></p><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>[百度](www,baidu.com/ &quot;百度&quot;);
[搜狗](www,sogou.com);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),u={href:"http://google.com/",title:"Google",target:"_blank",rel:"noopener noreferrer"},m={href:"http://search.yahoo.com/",title:"Yahoo Search",target:"_blank",rel:"noopener noreferrer"},v={href:"http://search.msn.com/",title:"MSN Search",target:"_blank",rel:"noopener noreferrer"},g={href:"http://www.nytimes.com/",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>或者另一种书写法式 [Google][1] 或
[Yahoo][2] 或 [MSN][3] 或 [The New York Times][NY Times].

[1]: http://google.com/ &quot;Google&quot;
[2]: http://search.yahoo.com/ &quot;Yahoo Search&quot;
[3]: http://search.msn.com/ &quot;MSN Search&quot;
[ny times]: http://www.nytimes.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2><p><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Uncategorized_2_1.png" alt="" loading="lazy"><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Uncategorized_2_2.png" alt="" loading="lazy"></p><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>![error](/path/to/img.jpg &quot;Title&quot;)

![error2][id]

[id]: /path/to/img.jpg &quot;Title&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,8);function p(_,q){const n=s("ExternalLinkIcon");return t(),o("div",null,[l(" more "),h,a("p",null,[e("或者另一种书写法式 "),a("a",u,[e("Google"),i(n)]),e(" 或 "),a("a",m,[e("Yahoo"),i(n)]),e(" 或 "),a("a",v,[e("MSN"),i(n)]),e(" 或 "),a("a",g,[e("The New York Times"),i(n)]),e(".")]),b])}const f=d(c,[["render",p],["__file","uncategorized2.html.vue"]]);export{f as default};

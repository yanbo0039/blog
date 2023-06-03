import{_ as a,X as t,Y as l,a1 as d,Z as n,$ as e,a2 as s,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},p=r(`<h1 id="css-ie盒模型和标准盒模型" tabindex="-1"><a class="header-anchor" href="#css-ie盒模型和标准盒模型" aria-hidden="true">#</a> Css-IE盒模型和标准盒模型</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>最近无意刷咯一题。。算出IE盒模型所占的高度。。。果然。。。不知如何算。。。因为谁特么去关心IE。。。但是。。。基于是自已的错题情况下。。还是弄清楚为好。。</p></li><li><p>参考咯很多文章最后得出结论</p></li></ul><h3 id="标准盒模型" tabindex="-1"><a class="header-anchor" href="#标准盒模型" aria-hidden="true">#</a> 标准盒模型</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #666<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>那么，这个盒子需要占据的尺寸为，</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>宽度 = margin.left + border.left + padding.left + content.width
+ padding.right + border.right + margin.right
  = 10 + 5 + 10 + 200 + 10 + 5 + 10
  = 300
  高度 = margin.top + border.top + padding.top + content.height
+ padding.bottom + border.bottom + margin.bottom
  = 10 + 5 + 10 + 180 + 10 + 5 + 10
  = 280
  而盒子的实际大小为，
  宽度 = border.left + padding.left + content.width
+ padding.right + border.right
  = 5 + 10 + 200 + 10 + 5
  = 280
  高度 = border.top + padding.top + content.height
+ padding.bottom + border.bottom
  = 5 + 10 + 180 + 10 + 5
  = 260
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简单的概括就是，盒子在页面占据的大小包括了margin，border， padding以及content。而盒子的实际大小（这里的实际大小，通过调试工具inspect可以看出来） 包括border，padding以及内容区域content，但是不包括margin。 另一点需要说明的是，我们通过JavaScript代码获取某一个元素的大小时， 所得到的width和height其实是盒子模型中的content的大小。</p></blockquote><h3 id="ie盒模型" tabindex="-1"><a class="header-anchor" href="#ie盒模型" aria-hidden="true">#</a> IE盒模型</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 180<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #666
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>那么，这个盒子需要占据的尺寸为，</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>宽度 = margin.left + content.width + margin.right
= 10 + 200 + 10
= 220
高度 = margin.top + content.height + margin.bottom
= 10 + 180 + 10
= 200
而盒子的实际大小为，
宽度 = content.width
= 200
高度 = content.height
= 180
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><ul><li>标准盒模型：</li><li>盒子面页面占据尺寸为：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>width = margin.left + border.left + padding.left + content.width
 + padding.right + border.right + margin.right
(margin border padding content四个)   

height = margin.top + border.top + padding.top + content.height
+ padding.bottom + border.bottom + margin.bottom
(margin border padding content四个)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>而盒子的实际大小：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>width = border.left + padding.left + content.width
 + padding.right + border.right
(border padding content三个)

height = border.top + padding.top + content.height 
+ padding.bottom + border.bottom
(border padding content三个)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>IE盒模型：</li><li>盒子面页面占据尺寸为：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>width = margin.left + content.width + margin.right
(margin content两个)

height = margin.top + content.height + margin.bottom
(margin content两个)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>而盒子的实际大小：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>width = content.width (content一个)
height = content.width (content一个)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>box-sizing属性允许你以特定的方式定义匹配某个区域的特定元素。</li><li>其语法如下，</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box | border-box | inherit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>content-box :这是由 CSS2.1 规定的宽度高度行为。 宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。 此值为其默认值，其让元素维持W3C的标准盒模型</p></blockquote><blockquote><p>border-box: 为元素设定的宽度和高度决定了元素的边框盒。 就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。 此值让元素维持IE传统的Box Model（IE6以下版本）</p></blockquote><blockquote><p>inherit: 规定应从父元素继承 box-sizing 属性的值</p></blockquote><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>`,27),u={href:"https://www.w3cschool.cn/css_series/css_series-6tza24q1.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/zwkkkk1/article/details/79678177",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.w3cschool.cn/css_series/css_series-6tza24q1.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/zyuzixiao/article/details/18733463",target:"_blank",rel:"noopener noreferrer"},h={href:"http://me.eluup.com/365.html",target:"_blank",rel:"noopener noreferrer"},g=n("hr",null,null,-1),x=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),k=n("hr",null,null,-1),_=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[n("strong",null,[e("以上就是我关于 "),n("em",null,"Css-IE盒模型和标准盒模型"),e(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])])],-1);function f(w,y){const i=o("ExternalLinkIcon");return t(),l("div",null,[d(" more "),p,n("ol",null,[n("li",null,[n("p",null,[n("a",u,[e("w3cschool参考"),s(i)])])]),n("li",null,[n("p",null,[n("a",v,[e("参考链接一"),s(i)])])]),n("li",null,[n("p",null,[n("a",b,[e("参考链接二"),s(i)])])]),n("li",null,[n("p",null,[n("a",m,[e("参考链接三"),s(i)])])]),n("li",null,[n("p",null,[n("a",h,[e("参考链接四"),s(i)])])])]),g,x,k,_])}const q=a(c,[["render",f],["__file","css2.html.vue"]]);export{q as default};

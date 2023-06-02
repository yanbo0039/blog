import{_ as r,X as o,Y as i,a1 as d,Z as n,$ as a,a2 as h,a0 as t,F as c}from"./framework-68dd73a2.js";const p={},s=t(`<h1 id="css-ie盒模型和标准盒模型" tabindex="-1"><a class="header-anchor" href="#css-ie盒模型和标准盒模型" aria-hidden="true">#</a> Css-IE盒模型和标准盒模型</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>最近无意刷咯一题。。算出IE盒模型所占的高度。。。果然。。。不知如何算。。。因为谁特么去关心IE。。。但是。。。基于是自已的错题情况下。。还是弄清楚为好。。</p><pre><code>参考咯很多文章最后得出结论 
</code></pre><h3 id="标准盒模型" tabindex="-1"><a class="header-anchor" href="#标准盒模型" aria-hidden="true">#</a> 标准盒模型</h3><pre><code>.box {
    width: 200px;
    height: 180px;
    border: 5px solid #666;
    margin: 10px;
    padding: 10px;
}
那么，这个盒子需要占据的尺寸为，
宽度 = margin.left + border.left + padding.left + content.width
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
</code></pre><p>简单的概括就是，盒子在页面占据的大小包括了margin，border，padding以及content。而盒子的实际大小（这里的实际大小，通过调试工具inspect可以看出来）包括border，padding以及内容区域content，但是不包括margin。 另一点需要说明的是，我们通过JavaScript代码获取某一个元素的大小时，所得到的width和height其实是盒子模型中的content的大小。</p><h3 id="ie盒模型" tabindex="-1"><a class="header-anchor" href="#ie盒模型" aria-hidden="true">#</a> IE盒模型</h3><pre><code>.box {
    width: 200px;
    height: 180;
    border: 5px solid #666
    margin: 10px
    padding: 10px;
}
那么，这个盒子需要占据的尺寸为，
宽度 = margin.left + content.width + margin.right
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
</code></pre><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><pre><code>标准盒模型：
盒子面页面占据尺寸为：
width = margin.left + border.left + padding.left + content.width
 + padding.right + border.right + margin.right
(margin border padding content四个)   

height = margin.top + border.top + padding.top + content.height
+ padding.bottom + border.bottom + margin.bottom
(margin border padding content四个)

而盒子的实际大小：
width = border.left + padding.left + content.width
 + padding.right + border.right
(border padding content三个)

height = border.top + padding.top + content.height 
+ padding.bottom + border.bottom
(border padding content三个)

IE盒模型：
盒子面页面占据尺寸为：
width = margin.left + content.width + margin.right
(margin content两个)

height = margin.top + content.height + margin.bottom
(margin content两个)
而盒子的实际大小：
width = content.width (content一个)

height = content.width (content一个)
</code></pre><p>box-sizing属性允许你以特定的方式定义匹配某个区域的特定元素。其语法如下，</p><pre><code>box-sizing: content-box | border-box | inherit
</code></pre><p>content-box :这是由 CSS2.1 规定的宽度高度行为。宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框。此值为其默认值，其让元素维持W3C的标准盒模型</p><p>border-box: 为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。 此值让元素维持IE传统的Box Model（IE6以下版本）</p><p>inherit: 规定应从父元素继承 box-sizing 属性的值 –</p>`,16),g={href:"https://www.w3cschool.cn/css_series/css_series-6tza24q1.html",target:"_blank",rel:"noopener noreferrer"},l=t('<p><a href="%5Bhttps://blog.csdn.net/zwkkkk1/article/details/79678177%5D(https://blog.csdn.net/zwkkkk1/article/details/79678177)">参考链接一</a></p><p><a href="%5Bhttps://www.w3cschool.cn/css_series/css_series-6tza24q1.html%5D(https://www.w3cschool.cn/css_series/css_series-6tza24q1.html)">参考链接二</a></p><p><a href="%5Bhttps://blog.csdn.net/zyuzixiao/article/details/18733463%5D(https://blog.csdn.net/zyuzixiao/article/details/18733463)">参考链接三</a></p><p><a href="%5Bhttp://me.eluup.com/365.html%5D(http://me.eluup.com/365.html)">参考链接四</a></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',8);function b(m,w){const e=c("ExternalLinkIcon");return o(),i("div",null,[d(" more "),s,n("p",null,[n("a",g,[a("w3cschool参考"),h(e)])]),l])}const f=r(p,[["render",b],["__file","css2.html.vue"]]);export{f as default};

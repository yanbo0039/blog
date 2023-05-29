import{_ as t,X as l,Y as i,a1 as r,Z as e,$ as a,a2 as n,a0 as o,F as c}from"./framework-68dd73a2.js";const h="/blog/assets/Css_1_1.png",d={},p=o('<h1 id="css权重优先级计算规则" tabindex="-1"><a class="header-anchor" href="#css权重优先级计算规则" aria-hidden="true">#</a> Css权重优先级计算规则</h1><p>最近在重新学习一些基础的知识点；此文仅在于为自己的知识作一个记录总结</p><h2 id="css选择器优先级" tabindex="-1"><a class="header-anchor" href="#css选择器优先级" aria-hidden="true">#</a> CSS选择器优先级</h2><p>浏览器是通过判断CSS优先级，来决定到底哪些属性值是与元素最为相关的，从而作用到该元素上。CSS选择器的合理组成规则决定了优先级，我们也常常用选择器优先级来合理控制元素达到我们理想的显示状态，下面我们来具体了解下CSS选择器优先级及权重。</p><h2 id="css选择器如何计算" tabindex="-1"><a class="header-anchor" href="#css选择器如何计算" aria-hidden="true">#</a> CSS选择器如何计算？</h2><p>1、当CSS选择器权重相同，则最后的声明的CSS选择器覆盖靠前的 CSS。 2、CSS优先级是根据由每种选择器类型构成的级联字串计算而成的，它不是一个对应相应匹配表达式的权重值。 3、相同CSS表达式，在DOM结构中的距离是不会对元素优先级计算产生影响的。</p><h2 id="css优先级顺序" tabindex="-1"><a class="header-anchor" href="#css优先级顺序" aria-hidden="true">#</a> CSS优先级顺序</h2><p>下列是一份优先级逐级增加的选择器列表： 1、通用选择器 2、元素（类型）选择器 3、类选择器 4、属性选择器 5、伪类 6、ID 选择器 7、内联样式</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>ID选择器的特殊性值，加0,1,0,0。</li><li>类选择器、属性选择器或伪类，加0,0,1,0。</li></ul><ul><li>元素和伪元素，加0,0,0,1。</li></ul><ul><li>通配选择器*对特殊性没有贡献，即0,0,0,0。</li></ul><ul><li><p>最后比较特殊的一个标志!important（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为1,0,0,0,0。</p><p>我们知道a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类:link、:visited、:hover、:active，并且这四个伪类如果对同一个元素设置同一个属性，那它们的声明顺序还有一定要求，一般大家都遵循“爱恨原则LVHA”（LoVe HAte），为什么是这个顺序？不能是其它顺序吗？</p><p>根据css优先级计算规则，伪类的特殊性值是0,0,1,0，4个伪类的特殊性值相同，那么后面声明的规则优先级高。当鼠标滑过a链接时，满足:link和:hover两个伪类，要改变a标签的颜色，就必须将:hover伪类在:link伪类后面声明；同理，当鼠标点击激活a链接时，同时满足:link、:hover、:active三种状态，要显示a标签激活时的样式（:active），必须将:active声明放到:link和:hover之后。因此得出LVHA这个顺序。这个顺序能不能变？可以，但也只有:link和:visited可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，也就不存在覆盖的问题。</p><p>有意思的是，如果某个元素class（类选择器）的数量大于255个，不同的浏览器的表现不一致，包括但不限于以下浏览器认为class选择器的优先级会超过id选择器： Firefox 52.0.2 (64 位) IE 11</p></li></ul><p>参考链接：</p>',14),_={href:"https://www.sojson.com/operation/css.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.cnblogs.com/wangmeijian/p/4207433.html",target:"_blank",rel:"noopener noreferrer"},S=e("hr",null,null,-1),f=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),a(" 分割线")],-1),m=e("hr",null,null,-1),C=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function v(g,x){const s=c("ExternalLinkIcon");return l(),i("div",null,[r(" more "),p,e("ul",null,[e("li",null,[e("a",_,[a("css优先级详解"),n(s)])])]),e("ul",null,[e("li",null,[e("a",u,[a("css优先级计划规则"),n(s)])])]),S,f,m,C])}const b=t(d,[["render",v],["__file","css1.html.vue"]]);export{b as default};
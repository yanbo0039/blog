import{_ as e,X as i,Y as n,a1 as r,a0 as d}from"./framework-68dd73a2.js";const l="/blog/assets/Vue_8_1.png",s="/blog/assets/Vue_8_2.png",o="/blog/assets/Vue_8_3.png",t="/blog/assets/Vue_8_4.png",a="/blog/assets/Vue_8_5.png",b="/blog/assets/Vue_8_6.png",v={},m=d(`<h1 id="vue项目代码初始化" tabindex="-1"><a class="header-anchor" href="#vue项目代码初始化" aria-hidden="true">#</a> Vue项目代码初始化</h1><p>1.完善meta标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,
    initial-scale=1.0，initial-scale=1.0,minimum-scale=1.0,
    maximum-scale=1.0,user-scalable=no&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.为解决不同手机的不同样式问题 引入reset.css</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@charset &quot;utf-8&quot;;html{background-color:#fff;color:#000;font-size:12px}
body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}
body,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,&quot;Hiragino Sans GB&quot;,simsun,sans-serif}
h1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}
h1,h2,h3,h4,h5,h6{font-family:tahoma,arial,&quot;Hiragino Sans GB&quot;,&quot;微软雅黑&quot;,simsun,sans-serif}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}
address,cite,dfn,em,i,optgroup,var{font-style:normal}
table{border-collapse:collapse;border-spacing:0;text-align:left}
caption,th{text-align:inherit}
ul,ol,menu{list-style:none}
fieldset,img{border:0}
img,object,input,textarea,button,select{vertical-align:middle}
article,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
blockquote:before,blockquote:after,q:before,q:after{content:&quot;\\0020&quot;}
textarea{overflow:auto;resize:vertical}
input,textarea,button,select,a{outline:0 none;border: none;}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
mark{background-color:transparent}
a,ins,s,u,del{text-decoration:none}
sup,sub{vertical-align:baseline}
html {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}
body {font-family: Arial, &quot;Microsoft Yahei&quot;, &quot;Helvetica Neue&quot;, Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}
hr {height: .02rem;margin: .1rem 0;border: medium none;border-top: .02rem solid #cacaca;}
a {color: #25a4bb;text-decoration: none;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.为了解决多倍屏显示border的问题 须引入border.css</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@charset &quot;utf-8&quot;;
.border,
.border-top,
.border-right,
.border-bottom,
.border-left,
.border-topbottom,
.border-rightleft,
.border-topleft,
.border-rightbottom,
.border-topright,
.border-bottomleft {
    position: relative;
}
.border::before,
.border-top::before,
.border-right::before,
.border-bottom::before,
.border-left::before,
.border-topbottom::before,
.border-topbottom::after,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::before,
.border-topleft::after,
.border-rightbottom::before,
.border-rightbottom::after,
.border-topright::before,
.border-topright::after,
.border-bottomleft::before,
.border-bottomleft::after {
    content: &quot;\\0020&quot;;
    overflow: hidden;
    position: absolute;
}
/* border
 * 因，边框是由伪元素区域遮盖在父级
 * 故，子级若有交互，需要对子级设置
 * 定位 及 z轴
 */
.border::before {
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-top::before,
.border-bottom::before,
.border-topbottom::before,
.border-topbottom::after,
.border-topleft::before,
.border-rightbottom::after,
.border-topright::before,
.border-bottomleft::before {
    left: 0;
    width: 100%;
    height: 1px;
}
.border-right::before,
.border-left::before,
.border-rightleft::before,
.border-rightleft::after,
.border-topleft::after,
.border-rightbottom::before,
.border-topright::after,
.border-bottomleft::after {
    top: 0;
    width: 1px;
    height: 100%;
}
.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before {
    border-top: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-right::before,
.border-rightbottom::before,
.border-rightleft::before,
.border-topright::after {
    border-right: 1px solid #eaeaea;
    transform-origin: 100% 0;
}
.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::before {
    border-bottom: 1px solid #eaeaea;
    transform-origin: 0 100%;
}
.border-left::before,
.border-topleft::after,
.border-rightleft::after,
.border-bottomleft::after {
    border-left: 1px solid #eaeaea;
    transform-origin: 0 0;
}
.border-top::before,
.border-topbottom::before,
.border-topleft::before,
.border-topright::before {
    top: 0;
}
.border-right::before,
.border-rightleft::after,
.border-rightbottom::before,
.border-topright::after {
    right: 0;
}
.border-bottom::before,
.border-topbottom::after,
.border-rightbottom::after,
.border-bottomleft::after {
    bottom: 0;
}
.border-left::before,
.border-rightleft::before,
.border-topleft::after,
.border-bottomleft::before {
    left: 0;
}
@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {
    /* 默认值，无需重置 */
}
@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
    .border::before {
        width: 200%;
        height: 200%;
        transform: scale(.5);
    }
    .border-top::before,
    .border-bottom::before,
    .border-topbottom::before,
    .border-topbottom::after,
    .border-topleft::before,
    .border-rightbottom::after,
    .border-topright::before,
    .border-bottomleft::before {
        transform: scaleY(.5);
    }
    .border-right::before,
    .border-left::before,
    .border-rightleft::before,
    .border-rightleft::after,
    .border-topleft::after,
    .border-rightbottom::before,
    .border-topright::after,
    .border-bottomleft::after {
        transform: scaleX(.5);
    }
}
@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {
    .border::before {
        width: 300%;
        height: 300%;
        transform: scale(.33333);
    }
    .border-top::before,
    .border-bottom::before,
    .border-topbottom::before,
    .border-topbottom::after,
    .border-topleft::before,
    .border-rightbottom::after,
    .border-topright::before,
    .border-bottomleft::before {
        transform: scaleY(.33333);
    }
    .border-right::before,
    .border-left::before,
    .border-rightleft::before,
    .border-rightleft::after,
    .border-topleft::after,
    .border-rightbottom::before,
    .border-topright::after,
    .border-bottomleft::after {
        transform: scaleX(.33333);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.为解决移动端点击延迟300ms才执行的问题 须引入fastclick的库</p><pre><code>npm install fastclick --save 或 cnpm install fastclick
</code></pre><p><img src="`+l+`" alt="" loading="lazy"> 5.使用stylus帮助我们开发网站样式</p><pre><code>npm install stylus --save 或 cnpm install stylus --save
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>npm install stylus-loader --save 或 cnpm install stylus-loader
</code></pre><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>stylus语法 <img src="'+b+'" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',21);function c(u,f){return i(),n("div",null,[r(" more "),m])}const g=e(v,[["render",c],["__file","index.html.vue"]]);export{g as default};

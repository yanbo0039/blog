import{_ as i,X as n,Y as e,a1 as s,a0 as l}from"./framework-68dd73a2.js";const a="/blog/assets/Jquery_6_1.png",d={},t=l(`<h1 id="_20190401学习复盘" tabindex="-1"><a class="header-anchor" href="#_20190401学习复盘" aria-hidden="true">#</a> 20190401学习复盘</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h3><pre><code>1.必须有&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no&quot;/&gt;
2.宽度 尽量都是百分比
3.rem的使用
4.宽度跟padding-bottom相等百分比的时候为正方形1080*1020 750*1334 
5、移动端根本像素自己换算成百分比 
</code></pre><h3 id="position-定位" tabindex="-1"><a class="header-anchor" href="#position-定位" aria-hidden="true">#</a> position 定位</h3><pre><code>position:relative absolute    
</code></pre><h3 id="练习做一个书的小demo" tabindex="-1"><a class="header-anchor" href="#练习做一个书的小demo" aria-hidden="true">#</a> 练习做一个书的小demo</h3><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;style&gt;
    .box-relative{
        position: relative;
        left: 100px;
        width: 1000px;
        height: 180px;
        background: grey;
    }
    .point-box{
        position: absolute;
        left: 50%;
        height: 100%;
        width: 12px;
    }
    .point-box&gt;span{
        position: absolute;
        height: 100%;
        width: 1px;
        background: #0f0f0f;
        left: 6px;
    }
    .point-box&gt;i{
        position: absolute;
        width: 12px;
        height: 12px;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        margin-top: -6px;
        margin-left:-6px;
        background: #1e90ff;
        z-index: 2;
    }
    .box-con{
        width: 45%;
        padding:23px;
    }
    .f_l{
        float: left;
        text-align: right;
    }
    .f_r{
        float: right;
        text-align: left;
    }
&lt;/style&gt;
&lt;div class=&quot;box-relative&quot;&gt;
    &lt;div class=&quot;point-box&quot;&gt;
        &lt;i class=&quot;point&quot;&gt;&lt;/i&gt;
        &lt;span class=&quot;line&quot;&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;box-con f_r&quot;&gt;
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Asperiores aspernatur autem doloremque
        minima molestiae nisi pariatur quasi ratione.
        Accusantium amet blanditiis corporis magnam
        modi non possimus repellat similique velit! Harum!
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;box-relative&quot;&gt;
    &lt;div class=&quot;point-box&quot;&gt;
        &lt;i class=&quot;point&quot;&gt;&lt;/i&gt;
        &lt;span class=&quot;line&quot;&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;box-con f_l&quot;&gt;
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Asperiores aspernatur autem doloremque
        minima molestiae nisi pariatur quasi ratione.
        Accusantium amet blanditiis corporis magnam
        modi non possimus repellat similique velit! Harum!
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;box-relative&quot;&gt;
    &lt;div class=&quot;point-box&quot;&gt;
        &lt;i class=&quot;point&quot;&gt;&lt;/i&gt;
        &lt;span class=&quot;line&quot;&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;box-con f_r&quot;&gt;
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Asperiores aspernatur autem doloremque
        minima molestiae nisi pariatur quasi ratione.
        Accusantium amet blanditiis corporis magnam
        modi non possimus repellat similique velit! Harum!
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;box-relative&quot;&gt;
    &lt;div class=&quot;point-box&quot;&gt;
        &lt;i class=&quot;point&quot;&gt;&lt;/i&gt;
        &lt;span class=&quot;line&quot;&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class=&quot;box-con f_l&quot;&gt;
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Asperiores aspernatur autem doloremque
        minima molestiae nisi pariatur quasi ratione.
        Accusantium amet blanditiis corporis magnam
        modi non possimus repellat similique velit! Harum!
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果如下:
</code></pre><figure><img src="`+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="精灵图片" tabindex="-1"><a class="header-anchor" href="#精灵图片" aria-hidden="true">#</a> 精灵图片</h3><pre><code>1.图片要比较小
2.修饰图片
3.三个以上
</code></pre><h3 id="css基础" tabindex="-1"><a class="header-anchor" href="#css基础" aria-hidden="true">#</a> css基础</h3><pre><code>1 围绕盒子
width height display border margin padding background float position
vertical-align overflow
2.围绕文本
font-family font-size font-style color font-weight white-space word-break
word-spacing letter-spacing text-decation text-indent text-overflow
3.伪类
a:link a:visited a:hover a:active :first-line 第一行 :first-letter首字母
:before{conter:&quot;&quot;} :after{conter:&quot;&quot;}
</code></pre><h3 id="h5新标签" tabindex="-1"><a class="header-anchor" href="#h5新标签" aria-hidden="true">#</a> H5新标签</h3><pre><code>header footer nav section aside article audio video figure figcaption 
embed 引入媒体 格式更丰富一些 用法跟video一样
</code></pre><p>属性</p><pre><code>hidden contenteditable spellcheck
</code></pre><h3 id="css3" tabindex="-1"><a class="header-anchor" href="#css3" aria-hidden="true">#</a> CSS3</h3><pre><code>.选择器
.圆角
.阴影 盒子投影 字投影
.开放的字体 
.颜色-新的表达方式 rgb
.背景图 多个背景图
.边框  图片边框
.新的布局方式 弹性布局
.媒体查询     

IE9开始支持CSS3
部分支持
10以上支持比较好 
box-shadow：水平方向 垂直方向 发光的尺寸向外延伸的尺寸  
颜色 inset内阴影/外阴影（默认)
text-shadow 
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>20190401学习复盘</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,24);function r(o,v){return n(),e("div",null,[s(" more "),t])}const u=i(d,[["render",r],["__file","jquery6.html.vue"]]);export{u as default};

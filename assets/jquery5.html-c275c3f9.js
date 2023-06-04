import{_ as i,X as n,Y as l,a1 as e,a0 as d}from"./framework-68dd73a2.js";const s="/blog/assets/Jquery_5_1.png",t="/blog/assets/Jquery_5_2.png",a="/blog/assets/Jquery_5_3.png",v="/blog/assets/Jquery_5_4.png",r="/blog/assets/Jquery_5_5.png",u="/blog/assets/Jquery_5_6.png",c={},m=d(`<h1 id="_20190329学习复盘" tabindex="-1"><a class="header-anchor" href="#_20190329学习复盘" aria-hidden="true">#</a> 20190329学习复盘</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="html基本标签" tabindex="-1"><a class="header-anchor" href="#html基本标签" aria-hidden="true">#</a> HTML基本标签</h3><pre><code>双标签
自封闭标签：img hr
</code></pre><h3 id="css文本样式" tabindex="-1"><a class="header-anchor" href="#css文本样式" aria-hidden="true">#</a> CSS文本样式</h3><pre><code>font-maily 字体
font-size 字号 small 14px 
font-weight 字粗细 bold（加粗）normal(不加粗 常归)lighter(更细)100~700
font-style:normal(常归/默认) 斜体 italic oblique 
color: 文字颜色 可以写英文 也可以是色号#0000 #ffffff
line-height:行间距 单行字占的高度
可以用来做单行内容的垂直居中
text-align:对齐方式 left center right ;
text-indent:缩进 首行进行缩进2em
特殊应用 改变文本的位置    
</code></pre><h3 id="文字间距" tabindex="-1"><a class="header-anchor" href="#文字间距" aria-hidden="true">#</a> 文字间距</h3><pre><code>word-spacing    单词与单词之间的距离
letter-spacing 字母与字线之间的距离  汉字之间的间距用这个属性
white-space 文档中 空白处
            normal 默认情况 敲多个空格 也只显示一个
            pre 会保留空格 
            nowrap 不允许换行
            特殊应用与overflow：hidden 与 text-overflow:ellipsis;
            搭配使用 实现单行文本的缩略显示
text-decoration:文字修饰 underline下划线 overline上划线
line-through 删除线 none没有任何修饰
word-break:break-all 强制换行
           word-break 以单词换行 默认
</code></pre><h3 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h3><pre><code>displsy:元素的形式
       block将内联元素转化成块元素     
       inline-block 内联块元素 可以写宽高但是不独占一行
       inline 可以将一个块元素转化成内联元素
</code></pre><div class="language-angular2 line-numbers-mode" data-ext="angular2"><pre class="language-angular2"><code>&lt;style&gt;
    span{
        display: inline-block;
        vertical-align: top;
        width: 80px;
        height: 80px;
        background: blue;
        font-size: 40px;
        text-align: center;
    }
    span small{
        display: block;
        font-size: 12px;
    }
    div{
        display: inline;
    }
&lt;/style&gt;
&lt;span&gt;02&lt;small&gt;2019-03&lt;/small&gt;&lt;/span&gt;
&lt;a href=&quot;&quot;&gt;
    新闻标题
&lt;/a&gt;
&lt;div&gt;
    aaa
&lt;/div&gt;
&lt;div&gt;
    aaa
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果如下：
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-angular2 line-numbers-mode" data-ext="angular2"><pre class="language-angular2"><code>&lt;style&gt;
    ul&gt;li{
        margin:10px;
        display: inline-block;
        width: 60px;
        height: 30px;
        line-height: 30px;
        background: #1e90ff;
        color:#fff;
        text-align: center;
    }
&lt;/style&gt;
&lt;ul&gt;
    &lt;li&gt;项目1&lt;/li&gt;
    &lt;li&gt;项目2&lt;/li&gt;
    &lt;li&gt;项目3&lt;/li&gt;
    &lt;li&gt;项目4&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果如下：
</code></pre><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>table 将元素展示为表格形貌
table-cell  将元素展示为单元格形式
特殊的用法 
</code></pre><div class="language-angular2 line-numbers-mode" data-ext="angular2"><pre class="language-angular2"><code>&lt;style&gt;
    .order-box&gt;ul{
        display: table;
    }
    .order-box&gt;ul&gt;li{
        width: 120px;
        display: table-cell;
        vertical-align: middle;
        height: 100px;
    }
    .order-box&gt;ul&gt;li&gt;img{
        width: 100px;
    }
&lt;/style&gt;
&lt;div  class=&quot;order-box&quot;&gt;
    &lt;ul&gt;
        &lt;li&gt;
            &lt;img src=&quot;&quot; alt=&quot;这里是一张图片&quot;&gt;
        &lt;/li&gt;
        &lt;li&gt;商品名称&lt;/li&gt;
        &lt;li&gt;商品价格&lt;/li&gt;
        &lt;li&gt;订单状态&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果如下：
</code></pre><figure><img src="`+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>none:
width
height
border
标准的盒模型width = width + margin + padding + border 
css3盒模型 width = width + margin 
</code></pre><div class="language-angular2 line-numbers-mode" data-ext="angular2"><pre class="language-angular2"><code>&lt;style&gt;
    .box-group{
        width: 100%;
        overflow: hidden;
        background: #008000;
        float:left;
        margin-bottom:100px;
    }
    .box-item{
        float:left;
        width:22.5%;
        height: 200px;
        margin-left:2%;
        background:#adff2f
    }
&lt;/style&gt;
&lt;div class=&quot;box-group&quot;&gt;
    &lt;div class=&quot;box-item&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box-item&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box-item&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box-item&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果如下：
</code></pre><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>目前常用的是CSS3的盒模型，如果项目要求兼容IE8要用标准盒模型
</code></pre><h3 id="float-浮动" tabindex="-1"><a class="header-anchor" href="#float-浮动" aria-hidden="true">#</a> Float 浮动</h3><pre><code>float:left right
使用此属性的元素/标签将变为内联块
将脱离文档流 影响父节点的高度
将影响下一行要表现的内容    

解决浮动的影响；
1、父节点写高度
2、在下一行的内容的父节点上加clear:both清除浮动
3、在浮动元素的父节点上加上一个overflow:hidden，并且
不能写高度 如果想加 默认高 可以写min-height
</code></pre><div class="language-angular2 line-numbers-mode" data-ext="angular2"><pre class="language-angular2"><code>&lt;style&gt;
    .list{
        background:grey;
        overflow: hidden;
        margin-top: 10px;
    }
    .box{
        margin-right: 5px;
        width: 100px;
        height: 100px;
        background: #adff2f;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    .ditem{
        display: inline-block;
    }
&lt;/style&gt;
&lt;div class=&quot;list&quot;&gt;
    &lt;div class=&quot;box left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box left&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box right&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;list&quot;&gt;
    &lt;div class=&quot;box ditem&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box ditem&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box ditem&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box ditem&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;box ditem&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果如下：
</code></pre><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>homework:
</code></pre><div class="language-angular2 line-numbers-mode" data-ext="angular2"><pre class="language-angular2"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;homework1&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;style&gt;
    div,img,h1,p,button{
        margin:0;
        padding:0;
    }
    .list_box{
        height: 200px;
    }
    .list_box&gt;.left{
        float: left;
        width: 20%;
    }
    .list_box&gt;.middle{
        float: left;
        width: 60%;
    }
    .list_box&gt;.middle&gt;p{
        margin-top: 20px;
    }
    .list_box&gt;.right{
        float: left;
        width: 20%;
        line-height: 200px;
    }
&lt;/style&gt;
&lt;div class=&quot;list_box&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;
        &lt;img src=&quot;&quot; alt=&quot;这里很明显是一张图片&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;middle&quot;&gt;
        &lt;h1&gt;商品标题&lt;/h1&gt;
        &lt;p&gt;
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Adipisci alias amet assumenda
            beatae debitis delectus dicta eligendi fugiat
            in ipsam nam nobis numquam pariatur quia quo
            rem, ut veniam voluptate?
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;
        &lt;button&gt;加入购物车&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;list_box&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;
        &lt;img src=&quot;&quot; alt=&quot;这里很明显是一张图片&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;middle&quot;&gt;
        &lt;h1&gt;商品标题&lt;/h1&gt;
        &lt;p&gt;
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Adipisci alias amet assumenda
            beatae debitis delectus dicta eligendi fugiat
            in ipsam nam nobis numquam pariatur quia quo
            rem, ut veniam voluptate?
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;
        &lt;button&gt;加入购物车&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;list_box&quot;&gt;
    &lt;div class=&quot;left&quot;&gt;
        &lt;img src=&quot;&quot; alt=&quot;这里很明显是一张图片&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;middle&quot;&gt;
        &lt;h1&gt;商品标题&lt;/h1&gt;
        &lt;p&gt;
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Adipisci alias amet assumenda
            beatae debitis delectus dicta eligendi fugiat
            in ipsam nam nobis numquam pariatur quia quo
            rem, ut veniam voluptate?
        &lt;/p&gt;
    &lt;/div&gt;
    &lt;div class=&quot;right&quot;&gt;
        &lt;button&gt;加入购物车&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>效果如下：
</code></pre><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>20190329学习复盘</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',38);function o(b,g){return n(),l("div",null,[e(" more "),m])}const h=i(c,[["render",o],["__file","jquery5.html.vue"]]);export{h as default};

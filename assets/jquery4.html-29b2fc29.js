import{_ as e,X as n,Y as i,a1 as a,a0 as l}from"./framework-68dd73a2.js";const t={},d=l(`<h1 id="_20190326学习复盘" tabindex="-1"><a class="header-anchor" href="#_20190326学习复盘" aria-hidden="true">#</a> 20190326学习复盘</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="知识回顾" tabindex="-1"><a class="header-anchor" href="#知识回顾" aria-hidden="true">#</a> 知识回顾</h3><pre><code>1.JS可以怎么写？
通过script标签的src属性，将外部的JS文件引入到html中；
在html文件中，创建JS的编辑环境：通过SCRIPT标签来实现
2.用户交互设计的本质：
 用户对页面元素执行了相关操作之后页面做出了对应的反馈。
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;div id=&quot;box&quot;&gt;
    &lt;img id=&quot;beautifulGirl&quot; src=&quot;Jquery_4_1.jpg&quot; alt=&quot;&quot;&gt;
    &lt;div id=&quot;mask&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
    window.onload = function () {
        // 1、找对象
        var box = document.getElementById(&quot;box&quot;),
            mask = document.getElementById(&quot;mask&quot;),
            beuGirl = document.getElementById(&quot;beautifulGirl&quot;),   // 3、图片的宽高获取
            imgWidth = beuGirl.width,
            imgHeight = beuGirl.height;
        box.style.cssText = &quot;width:&quot;+ imgHeight +&quot;px;height:&quot;+ imgHeight +&quot;px;position:relative;&quot;;
        mask.style.cssText = &quot;width:&quot;+ imgHeight +&quot;px;height:&quot;+ imgHeight +&quot;px;background:rgba(0,0,0,0.15);position:absolute;top:0;display:none&quot;;
        // 2、找事件 onmouseover/onmouseenter
        box.onmouseover = function () {
            mask.style.display = &quot;block&quot;;
        };
        box.onmouseout = function () {
            mask.style.display = &quot;none&quot;;
        }
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>3、交互设计的基本流程：
 (1) 找对象
 (2) 找事件: 用户操作所触发的事件 ;
 (3) 写功能：将需要实现的效果写在事件中；
</code></pre><h3 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h3><pre><code> 搞定雨滴效果
</code></pre><h3 id="一、画布的使用" tabindex="-1"><a class="header-anchor" href="#一、画布的使用" aria-hidden="true">#</a> 一、画布的使用</h3><pre><code>1. 什么是画布
就是html中的一个标签：canvas
2. 如何使用
 通过JS来使用
3. JS如何与CANVAS关联起来
(1)通过getContext(&quot;2d&quot;)方法来给画布配置画笔，使其具备绘画功能；
var ctx = canvas.getContext(&quot;2d&quot;)创建画笔 
(2)通过fillStyle/strokeStyle属性来设置画笔的颜色；
fillStyle:设置的是填充体的颜色
strokeStyle:设置的是线条的颜色；     
(3)通过具体的就去来实现图形的绘制；
fillRect():用来绘制矩形的；
    有四个参数，第一和第二个参数表示的是下笔的坐标值；第三和第四个参数表示的是所
    绘制的矩形的宽和高；
    strokeRect():用来绘制矩形边框线的;
       参数与fillRect一致；
</code></pre><h3 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1：</h3><pre><code>绘制两个出线重叠区域，但颜色不同的的矩形;     
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;style&gt;
    body,canvas{
        margin:0;
        padding:0;
        display: block;
    }
&lt;/style&gt;
&lt;canvas id=&quot;canvas&quot;&gt;
    你的浏览器不支持canvas
&lt;/canvas&gt;
&lt;script&gt;
    var canvas = document.getElementById(&quot;canvas&quot;),
        ctx = canvas.getContext(&quot;2d&quot;);
    function drawFillReact(color,x,y,w,h) {
        ctx.fillStyle = color;
        ctx.fillRect(x,y,w,h);
        // ctx.globalCompositeOperation = &quot;source-in&quot;;//只显示重叠部分
        // ctx.globalCompositeOperation = &quot;source-out&quot;;//只显示新图不重叠部分
        // ctx.globalCompositeOperation = &quot;source-atop&quot;;//只显示新图重叠部分老图仍显示
        // ctx.globalCompositeOperation = &quot;destination-over&quot;;//原图覆盖新图
        // ctx.globalCompositeOperation = &quot;destination-in&quot;;//绘制原图和新图重叠部分
        // ctx.globalCompositeOperation = &quot;destination-out&quot;;//绘制原图和新图不重叠部分
        // ctx.globalCompositeOperation = &quot;destination-atop&quot;;//绘制原图和新图重叠部分以及新图
        // ctx.globalCompositeOperation = &quot;lighter&quot;;//绘制新图和原图,重叠部分加色处理
        // ctx.globalCompositeOperation = &quot;darken&quot;;//
    }
    new drawFillReact(&quot;skyblue&quot;,30,30,150,80);
    new drawFillReact(&quot;orange&quot;,150,80,150,80);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、面向对象" tabindex="-1"><a class="header-anchor" href="#二、面向对象" aria-hidden="true">#</a> 二、面向对象</h3><pre><code>1. 对象的表现形式：
{
    propertyName:propertyValue,
    functionName:function(){ 功能代码; }
}    
2.对象的定义方式;
(1)字面量方式；
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>    var obj = {
        name:&quot;charles&quot;,
        sex:&quot;man&quot;,
        teach:function () {
            console.log(&quot;talk&quot;);
        }
    };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>2.构造器方式；
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>    function Person(name,age) {
        this.name = name;
        this.age = age;
    }
var chen = new Person(&quot;charles&quot;,39);
    console.log(chen.name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="穿插一个小demo" tabindex="-1"><a class="header-anchor" href="#穿插一个小demo" aria-hidden="true">#</a> 穿插一个小demo</h3><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;p style=&quot;width:30px;height:30px;background:orange;&quot;&gt;&lt;/p&gt;
&lt;script&gt;
   var p = document.getElementsByTagName(&quot;p&quot;)[0],
       num = 0;
   setInterval(function () {
       if(num&lt;window.innerHeight){
           num += 5;
           p.style.marginTop = num + &quot;px&quot;;
       }else {
           num = 0;
       }
   },20)
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、雨滴的具体实现" tabindex="-1"><a class="header-anchor" href="#三、雨滴的具体实现" aria-hidden="true">#</a> 三、雨滴的具体实现</h3><pre><code>1. 搭建结构
新建一个html文件，资助在body中添加咯一个id值为canvas的canvas标签；
2. 设计脚本
(1) 新建一个js文件，将将这个文件关联到 html中
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,26);function s(r,o){return n(),i("div",null,[a(" more "),d])}const c=e(t,[["render",s],["__file","jquery4.html.vue"]]);export{c as default};

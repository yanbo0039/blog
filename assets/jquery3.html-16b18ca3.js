import{_ as n,X as e,Y as i,a1 as l,a0 as d}from"./framework-68dd73a2.js";const t={},a=d(`<h1 id="雨滴项目" tabindex="-1"><a class="header-anchor" href="#雨滴项目" aria-hidden="true">#</a> 雨滴项目</h1><h2 id="雨滴项目-1" tabindex="-1"><a class="header-anchor" href="#雨滴项目-1" aria-hidden="true">#</a> 雨滴项目：</h2><pre><code>1. 以js为核心
2. 时间上有变化；是通过JS的定时器来实现的；
   定时器的作用：在指定的时间范围内，或者时间段之后，执行的操作；
3. 雨滴下落和水波纹效果：
</code></pre><p>###目标： 1. JS的语法基础 2. DOM的基本操作</p><h3 id="一、js的语法基础" tabindex="-1"><a class="header-anchor" href="#一、js的语法基础" aria-hidden="true">#</a> 一、JS的语法基础</h3><pre><code>1.js写在哪里？
   js可以写在html文件的任何位置但是要通过script标签来创建js的编辑环境；
   在企业项目中，通常采用的是三层分离原理，所以，我们会单独新建一个JS文件来
   编写脚本代码，然后通过SCRIPT标签的SRC属性，引入到HTML文件的头部中：      
   如果是通过外链式，将 js文件引入到head中；则JS中必须通过window.onload事件来包含
   所有的脚本    
2.基本的语法规则
  (1) 变量：
    变量就是存储数据用的容器；那么，语法是：
      var 变量名 = 变量值; 变量的初始化；
      var 变量名;
  (2)数据类型：
     数值型：Number
     字符串型:必须用引号括起来;
     布尔值型：只有两值，分别是true/false;
          凡是值为0/false/undefined/null的时候结果为逻辑值false，否则全为true;
     undefined:未定义，表示已经分配咯存储空间，但没有进行初始化的变量；
     mull:空，表示存储空间都不存在；
   （3）设计一个倒计时  
</code></pre><h3 id="练习一" tabindex="-1"><a class="header-anchor" href="#练习一" aria-hidden="true">#</a> 练习一：</h3><pre><code>  当用户点击按钮时，才开始执行倒计时   
  思路：
    1. 新建JS文件并引入到HTML里面
    2. JS脚本设计；
      （1）找对象
          找按钮元素：
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>    var but = document.getElementById(&quot;&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>      (2) 找事件
        用户的操作所触发的事件或者是系统的行为：
         onclick
      (3)交互效果实现
      定时器：setInterval()
          定时器 方法有两个常用的参数，第一个参数是定时器需要执行的操作，通
          常会写成一个函数，第二个操作是定时器的时钟周期，通常使用的是毫秒数;
              定时器需要执行的操作：
                  是P元素中显示的内容在发生自减；
                      通过找对象的方式先找到P元素，P元素的内容是通过innerHTML属性
                      来进行设置的；
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>    p.innerHTML = value;
    value -- ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、dom的基本操作" tabindex="-1"><a class="header-anchor" href="#二、dom的基本操作" aria-hidden="true">#</a> 二、DOM的基本操作</h3><pre><code>查、改、增、删 四类基本操作
1. 查：
  根据样式CSS基本选择器的类型来定的三种查找元素的方法；
      标签：getElementsByTagName(&quot;tagname&quot;)
       此时找到的是一个数组
      类名：getElementsByClassName(&quot;classname&quot;);
         此时和标签查找的结果一样，也得到 一个数组：
      ID：getElementById(&quot;IdName&quot;);
          这种方式是唯一能准确的找到元素的方法；
 2. 改：
   （1）改具体显示的内容：通常会使用两个属性：
    innerHTML:修改的是能够识别标签的文本内容；
    innerText:修改的是纯文本内容；
    (2)改元素的样式：通常使用的是style属性
    例如：
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>   p.style.color = &quot;value&quot;;
   p.style.fontSize = &quot;30px&quot;;
   p.style.cssText = &quot;color:purple;font-size:40px;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>3. 增：
   (1) 通过createElement(&quot;tagname&quot;)方法来创建元素；注意：只能给document（文档）创建
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>          var parr = document.getElementsByClassName(&quot;p1&quot;);
          var h1 = document.createElement(&quot;h1&quot;);
          parr[0].appendChild(h1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>   (2) 通过appendChild()方法，将新创建的元素添加到指定的父级元素中；
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>    var parr = document.getElementsByClassName(&quot;p1&quot;);
    var img = document.createElement(&quot;img&quot;);
        img.src = &quot;fa.png&quot;;
    parr[0].appendChild(img)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4、删：
   通过removeChild(),来删除某个父级元素的子元素:
   通常情况下，我们在移除某个父级元素的子元素时，对父元素是有要求的；
     必须遵循合法的语义---比如，在段落中不允许出现标题元素；
     一般情况下我们会将父级元素定义为div（层、块）;
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>  var btn = document.getElementById(&quot;btn&quot;),
        pArr = document.getElementsByClassName(&quot;p1&quot;),
        h1 = document.getElementById(&quot;h1&quot;);
    btn.onclick = function () {
        var img = document.createElement(&quot;img&quot;);
        img.src = &quot;fa.png&quot;;
        pArr[1].appendChild(img);
        pArr[0].removeChild(h1)
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、分析雨滴项目的结构" tabindex="-1"><a class="header-anchor" href="#三、分析雨滴项目的结构" aria-hidden="true">#</a> 三、分析雨滴项目的结构</h3><pre><code>1.canvas画布
（1）概念：
  是H5中的一个标签：特点是可以通过JS来绘制我们需要的任何形状或者(图形);
   ps:在JS中通常当我们看到&quot;[]&quot;首先可以把它理解为数组，如果我们看到&quot;{}&quot;我们
   初步认定为对象；
 (2) canvas对象常用的属性和方法：
   常用的方法：
       getContext(&quot;2d&quot;);
       
   常用的属性 ：
        fillStyle: 画笔的填充颜色属性；设置填充绘制的颜色；
        strokeStyle:画笔的笔触颜色属性；设置线条绘制颜色   
</code></pre><h3 id="四、js的函数" tabindex="-1"><a class="header-anchor" href="#四、js的函数" aria-hidden="true">#</a> 四、js的函数</h3><pre><code> 1. 概念：
  函数本质上是具有名称、并且可以重复使用的功能代码块；                   
 2. 语法：
   function 函数名(参数){功能代码块；}
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>   &lt;div id=&quot;box&quot;&gt;&lt;/div&gt;
   &lt;p id=&quot;p1&quot;&gt;&lt;/p&gt;
   &lt;h1 id=&quot;h1&quot;&gt;&lt;/h1&gt;
   &lt;script&gt;
       // var box = document.getElementById(&quot;box&quot;),
       //     p = document.getElementById(&quot;p1&quot;),
       //     h1 = document.getElementById(&quot;h1&quot;);
       // console.log(h1);
       function findEle(id) {
           return document.getElementById(id);
       }
       var p = findEle(&quot;p1&quot;),
           h1 = findEle(&quot;h1&quot;),
           box = findEle(&quot;box&quot;);
   &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>3. 带参数的函数；
当功能需要处理是变化的，我们要考虑配置参数；
（1）形参：在函数定义时使用的参数叫形参
（2）实参：在函数调用时使用的参数叫实参
简单的理解、形参是变量名，实参是变量值
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;
&lt;p id=&quot;p1&quot;&gt;&lt;/p&gt;
&lt;h1 id=&quot;h1&quot;&gt;&lt;/h1&gt;
&lt;script&gt;
    function findEle(id) {
        return document.getElementById(id);
    }
    var p = findEle(&quot;p1&quot;),
        h1 = findEle(&quot;h1&quot;),
        box = findEle(&quot;box&quot;);
    box.style.cssText = &quot;width:300px;height:300px;backgroudn:skyblue;&quot;;
    h1.style.cssText = &quot;width:300px;height:300px;backgroudn:skyblue;&quot;;
    p.style.cssText = &quot;width:300px;height:300px;backgroudn:orange;&quot;;
    box.onclick = function () {
        popContent(this);
    };
    h1.onclick = function () {
        popContent(this)
    };
    p.onclick = function () {
        popContent(this)
    };
    function popContent(content) {
        alert(content||&quot;无内容呀。。&quot;);
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4. 带返值的函数：
  使用return语句来设置函数执行结束后返回的结果，
  通常情况璨们会使用一个变量来接收函数返回值；
  通常情况下，return语句之后，不会再写其他语句，因为写咯也没用;
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;
&lt;p id=&quot;p1&quot;&gt;&lt;/p&gt;
&lt;h1 id=&quot;h1&quot;&gt;&lt;/h1&gt;
&lt;script&gt;
    var box = document.getElementById(&quot;box&quot;);
    box.style.cssText = &quot;width:200px;height:200px;border:1px solid #ccc&quot;;
    box.onclick = function () {
      // addContent(this,&quot;这是一个div盒子&quot;);
      addContent(this,addResult(23,33));
    };
    function addResult(num1,num2) {
        var result = num1 + num2;
        return result;
    }
    function addContent(obj,content) {
        obj.innerHTML = content;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code> *******异步处理问题*********
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;
&lt;p id=&quot;p1&quot;&gt;&lt;/p&gt;
&lt;h1 id=&quot;h1&quot;&gt;&lt;/h1&gt;
&lt;button id=&quot;btn&quot;&gt;&lt;/button&gt;
&lt;script&gt;
    var timer = null,
        numArr = [1,2,3],
        box = document.getElementById(&quot;box&quot;),
        btn = document.getElementById(&quot;btn&quot;),
        times = 0;
    box.style.cssText = &quot;font-size:40px;color:orange;font-weight:bold;&quot;;
    timer = setInterval(function () {
        box.innerText = numArr[Math.floor(Math.random()*3)]
    },100);
    btn.onclick = function () {
        times ++;
        if(times%2 == 1){
            clearInterval(timer);
            if(box.innerText == &quot;2&quot;){
                alert(&quot;恭喜你中奖咯!&quot;);
            }else {
                alert(&quot;谢谢惠顾，要不要再来一次？&quot;)
            }
            btn.innerText = &quot;start&quot;;
        }else {
            timer = setInterval(function () {
                box.innerText = numArr[Math.floor(Math.random()*3)]
            },100);
            btn.innerText = &quot;stop&quot;;
        }
    };
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2</h3><pre><code> 使用函数的方法，实现当我点击按钮一次，就在页面中，添加一个div； 
 思路：
     1. 创建一个html文件，并且在body添加一个按钮；
     2. 创建JS编辑环境
     3. 在js编辑环境中,找对象(找按钮）
     4. 找事件：onclick
     5. 功能实现：
        创建一个函数，功能是添加一个div
     6. 在按钮的onclick事件中调用函数   
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;button id=&quot;btn&quot; style=&quot;float: left&quot;&gt;创建元素&lt;/button&gt;
&lt;script&gt;
    function creatBox() {
        var box = document.createElement(&quot;div&quot;);
        box.style.cssText = &quot;width:100px;height:100px;background:skyblue;margin:3px;float:left;&quot;;
        document.body.appendChild(box);
    }
    var btn = document.getElementById(&quot;btn&quot;);
    btn.onclick = function () {
        creatBox();
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js处理的步骤" tabindex="-1"><a class="header-anchor" href="#js处理的步骤" aria-hidden="true">#</a> JS处理的步骤：</h3><pre><code>1. 找用户交互城要叛逆的对象；
   行业中函数的命名规范：小驼峰命名法；
   如何查找元素；document.getElementsByTagName();
2. 用户的交互动作所触发的事件；
   鼠标事件：onclick/ondblclick/onwheel
   键盘事件:onpress/onkeydown/onkeyup
   窗口：onresize/onunload/onload/onscroll.......
3. 事件蟹发时，需要实现的功能;
   btn.onclick = function(){}
</code></pre><h3 id="五、js的事件机制" tabindex="-1"><a class="header-anchor" href="#五、js的事件机制" aria-hidden="true">#</a> 五、JS的事件机制</h3><pre><code>1.在js中，事件的处理有三种级别；
(1)HTML级别；      
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;button id=&quot;btn&quot; onclick=&quot;popMessage()&quot;&gt;&lt;/button&gt;
&lt;script&gt;
    var btn = document.getElementById(&quot;btn&quot;);
    function popMessage() {
        alert(&quot;123&quot;);
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>通过html标签的事件属性，比如点击事件属性click，来调用某个函数实现对应的
功能：
   弊端；
        当函数的名称发生改变时需要到HTML文件中找到调用该方法的函数并修改其方法名称；
(2) DOM0级：
  在JS中直接将某个元素的事件用匿名函数来赋值，以便实现对应的功能：
(3) DOM2级；
  为了解决DOM0级的覆盖问题，采用了DOM2级事件处理机制；
  通过addEventListener()方法来解决覆盖问题                     
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;button id=&quot;btn&quot;&gt;&lt;/button&gt;
&lt;script&gt;
    var btn = document.getElementById(&quot;btn&quot;);
    btn.addEventListener(&quot;click&quot;,function () {
        alert(&quot;123&quot;);
    });
    btn.addEventListener(&quot;click&quot;,function () {
        alert(&quot;234&quot;);
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>2.事件冒泡；
  从具体的元素扩散到最不具体的元素；    
</code></pre><div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre class="language-angular2html"><code>&lt;div id=&quot;box&quot;&gt;
    &lt;div id=&quot;subbox&quot;&gt;
        &lt;button id=&quot;btn&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
    function findEle(id) {
        return document.getElementById(id)
    }
    var box = findEle(&quot;box&quot;),
        subbox = findEle(&quot;subbox&quot;),
        btn = findEle(&quot;btn&quot;);
    btn.onclick = function(){
        alert(123)
    };
    subbox.onclick = function () {
        alert(234)
    };
    box.onclick = function () {
        alert(345)
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>阻止事件冒泡： stopPropagation
       
1.找到画布元素；
2.设置画布的绘画功能：getContext(&quot;2d&quot;);
3.设置画笔的类型：fillStyle/strokeStyle;
4.创建雨滴对象：
  采用面对对象的方法来创建雨滴对象；
      函数构造器：prototype原型链属性；
  初始化方法：
     设置雨滴的相关属性
  绘制方法：
     根据下降的情况，来确定究竟绘制的是雨滴还是波纹；
 5.实例化雨滴    
 6.雨滴的移动及其变化；                                
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,48);function s(u,r){return e(),i("div",null,[l(" more "),a])}const c=n(t,[["render",s],["__file","jquery3.html.vue"]]);export{c as default};

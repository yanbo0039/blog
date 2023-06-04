import{_ as r,X as l,Y as t,a1 as s,Z as e,$ as n,a2 as a,a0 as d,F as c}from"./framework-68dd73a2.js";const u="/blog/assets/JavaScript_1_1.png",o={},v=d(`<h1 id="javascript跳出循环的方法区别" tabindex="-1"><a class="header-anchor" href="#javascript跳出循环的方法区别" aria-hidden="true">#</a> JavaScript跳出循环的方法区别</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>今天无意中用到一个跳出循环的的方法，许久未用到跳出循环，发现自己居然这么简单的一个功能， 居然恬不知耻的要问度娘咯！！！！，简直不能忍，此文只为自己归纳总结所用。</p></blockquote><h3 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h3><ul><li><p>break语句会使运行的程序立刻退出包含在最内层的循环或者退出一个switch语句。</p></li><li><p>由于它是用来退出循环或者switch语句，所以只有当它出现在这些语句时，这种形式的break语句才是合法的。</p></li><li><p>如果一个循环的终止条件非常复杂，那么使用break语句来实现某些条件比用一个循环表达式来表达所有的条件容易得多。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var i=1;i&lt;=10;i++) { 
    if(I==7) { 
        break; 
    } 
    console.log(i); 
} 
当i=7的时候，直接退出for这个循环。这个循环将不再被执行！
//输出结果：123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h3><ul><li><p>continue语句和break语句相似。所不同的是，它不是退出一个循环，而是开始循环的一次新迭代。</p></li><li><p>continue语句只能用在while语句、do/while语句、for语句、或者for/in语句的循环体内，在其它地方使用都会引起错误！</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var i=1;i&lt;=10;i++) { 
    if(I==7) { 
        continue; 
    } 
    document.write(i); 
} 
当i=8的时候，直接跳出本次for循环。下次继续执行。
//输出结果：1234568910
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h3><ul><li>return语句就是用于指定函数返回的值。return语句只能出现在函数体内，出现在代码中的其他任何地方都会造成语法错误！</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(var i=1;i&lt;=10;i++) { 
    if(i==8) { 
        return; 
    } 
    console.log(i); 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>执行结果Uncaught SyntaxError: Illegal return statement(…)</p></li><li><p>意思是非法捕获的查询返回语句。</p></li><li><p>当执行return语句时，即使函数主体中还有其他语句，函数执行也会停止！</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
if (username==&quot;&quot;){
   alert(&quot;请输入用户名&quot;);
   return false;
}
if(qq==&quot;&quot;){
   alert(&quot;请输入QQ&quot;);
   return false;
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面的实例里，当username为空时，就不会再向下执行，在一些表单提交中，也可以通过return false来阻止默认的提交方式，改用Ajax的提交方式，例如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form id=&quot;form&quot; onSubmit=&quot;return false&quot;&gt;
...
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>JavaScript跳出循环的方法区别</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>`,22),m={href:"https://www.cnblogs.com/jrystal/p/7067390.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/fxss5201/article/details/52980138",target:"_blank",rel:"noopener noreferrer"};function h(p,g){const i=c("ExternalLinkIcon");return l(),t("div",null,[s(" more "),v,e("ol",null,[e("li",null,[e("a",m,[n("参考链接1"),a(i)])]),e("li",null,[e("a",b,[n("参考链接2"),a(i)])])])])}const x=r(o,[["render",h],["__file","javascript1.html.vue"]]);export{x as default};

import{_ as e,X as n,Y as i,a1 as a,a0 as c}from"./framework-68dd73a2.js";const t={},s=c(`<h1 id="js闭包简介" tabindex="-1"><a class="header-anchor" href="#js闭包简介" aria-hidden="true">#</a> Js闭包简介</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>JavaScript闭包是指在函数内部定义的函数， 可以访问外部函数的变量和参数，即使外部函数已经执行完毕， 这些变量和参数仍然可以被内部函数访问和使用。 闭包可以用来创建私有变量、封装对象等。</p></blockquote><ul><li>以下是一个JavaScript闭包的例子：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function counter() {
  var count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

var c = counter();
c(); // 输出1
c(); // 输出2
c(); // 输出3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在上面的例子中，counter函数返回了一个内部函数， 该内部函数可以访问外部函数的count变量，并对其进行自增操作。 每次调用内部函数时，count变量的值都会增加，并输出到控制台上。</p></blockquote><blockquote><p>由于内部函数可以访问外部函数的变量和参数， 因此可以使用闭包来创建私有变量和私有方法。 例如，可以使用闭包来封装一个对象，并将其暴露给外部调用。 这样可以避免全局变量的污染，并提供更好的封装和抽象性。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Js闭包简介</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,11);function r(l,d){return n(),i("div",null,[a(" more "),s])}const u=e(t,[["render",r],["__file","javascript10.html.vue"]]);export{u as default};

import{_ as n,X as e,Y as o,a1 as d,a0 as a}from"./framework-68dd73a2.js";const r={},t=a(`<h1 id="js-document-ready和window-onload的区别" tabindex="-1"><a class="header-anchor" href="#js-document-ready和window-onload的区别" aria-hidden="true">#</a> JS-document.ready和window.onload的区别</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>最近刷到一题 原题就是document.ready与window.onload的区别，这是原题 总共6分的问答题 而我的回答是 document.ready是document加载完成之后而执行而window.onload是整个window资源加载完成之后才执行。。最后得到2分。。于是乎基于这样一个前 提下查阅相关资源写下这篇总结性的文章</p><pre><code>最基本的区别

1.执行时间
window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。 

document.ready是DOM结构绘制完毕后就执行，不必等到加载完毕。

2.编写个数不同

window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个 

document.ready 可以同时编写多个，并且都可以得到执行
</code></pre><p>最后我怀疑此题的出题人有搞混淆js的document.ready与jquery的$(document).ready才会将此题设置为6分 第三个得分点可能是这样。。。</p><pre><code>3.简化写法
window.onload没有简化写法 

$(document).ready(function(){})可以简写成$(function(){});
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,10);function c(i,s){return e(),o("div",null,[d(" more "),t])}const u=n(r,[["render",c],["__file","javascript9.html.vue"]]);export{u as default};

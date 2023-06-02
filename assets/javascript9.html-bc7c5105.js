import{_ as n,X as e,Y as o,a1 as d,a0 as a}from"./framework-68dd73a2.js";const t={},r=a(`<h1 id="js-document-ready和window-onload的区别" tabindex="-1"><a class="header-anchor" href="#js-document-ready和window-onload的区别" aria-hidden="true">#</a> JS-document.ready和window.onload的区别</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>最近刷到一题 原题就是document.ready与window.onload的区别，这是原题 总共6分的问答题 而我的回答是 document.ready是document加载完成之后而执行而window.onload是整个window资源加载完成之后才执行。。最后得到2分。。于是乎基于这样一个前 提下查阅相关资源写下这篇总结性的文章</p><pre><code>最基本的区别

1.执行时间
window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。 

document.ready是DOM结构绘制完毕后就执行，不必等到加载完毕。

2.编写个数不同

window.onload不能同时编写多个，如果有多个window.onload方法，只会执行一个 

document.ready 可以同时编写多个，并且都可以得到执行
</code></pre><p>最后我怀疑此题的出题人有搞混淆js的document.ready与jquery的$(document).ready才会将此题设置为6分 第三个得分点可能是这样。。。</p><pre><code>3.简化写法
window.onload没有简化写法 

$(document).ready(function(){})可以简写成$(function(){});
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>JS-document.ready和window.onload的区别</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,10);function c(i,s){return e(),o("div",null,[d(" more "),r])}const m=n(t,[["render",c],["__file","javascript9.html.vue"]]);export{m as default};

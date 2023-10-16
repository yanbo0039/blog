import{_ as i,X as n,Y as s,a1 as e,a0 as l}from"./framework-68dd73a2.js";const a={},d=l(`<h1 id="前端浅拷贝和深拷贝的区别" tabindex="-1"><a class="header-anchor" href="#前端浅拷贝和深拷贝的区别" aria-hidden="true">#</a> 前端浅拷贝和深拷贝的区别</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><ul><li>浅拷贝和深拷贝都是指在将一个对象复制到另一个对象时所采用的不同策略。</li></ul><blockquote><p>浅拷贝是指创建一个新的对象，这个对象有着原始对象属性值的一份精确拷贝， 但是这些属性值所引用的对象并没有被拷贝，而是仍然指向原始对象中相应的属性值 。因此，如果原始对象中的某个属性值所引用的对象发生了变化， 那么浅拷贝对象中相应的属性值也会发生变化。</p></blockquote><blockquote><p>深拷贝是指创建一个新的对象，这个对象不仅有着原始对象属性值的一份精确拷贝， 而且这些属性值所引用的对象也被递归地复制到新的对象中。 因此，即使原始对象中的某个属性值所引用的对象发生了变化， 深拷贝对象中相应的属性值也不会发生变化。</p></blockquote><blockquote><p>简单来说，浅拷贝只复制了对象自身和其属性值， 而没有复制其引用类型的属性所指向的对象； 而深拷贝则递归地复制了所有引用类型的属性所指向的对象。</p></blockquote><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><ul><li>以下示例可以帮助理解浅拷贝和深拷贝的区别：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 浅拷贝示例
let obj1 = {
  name: &#39;Alice&#39;,
  age: 25,
  address: {
    city: &#39;Shanghai&#39;,
    country: &#39;China&#39;
  }
};

let obj2 = Object.assign({}, obj1);

obj1.name = &#39;Bob&#39;;
obj1.address.city = &#39;Beijing&#39;;

console.log(obj2.name); // Alice
console.log(obj2.address.city); // Beijing

// 深拷贝示例
let obj3 = {
  name: &#39;Alice&#39;,
  age: 25,
  address: {
    city: &#39;Shanghai&#39;,
    country: &#39;China&#39;
  }
};

let obj4 = JSON.parse(JSON.stringify(obj3));

obj3.name = &#39;Bob&#39;;
obj3.address.city = &#39;Beijing&#39;;

console.log(obj4.name); // Alice
console.log(obj4.address.city); // Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在上面的示例中，obj1和obj2是浅拷贝关系， obj3和obj4是深拷贝关系。在浅拷贝中， 当我们修改obj1的属性值时， obj2中相应的属性值也会发生变化， 因为它们共享同一个地址。而在深拷贝中， 当我们修改obj3的属性值时，obj4中相应的属性值不会发生变化， 因为它们所引用的对象已经被递归地复制到了新的对象中。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>前端浅拷贝和深拷贝的区别</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,15);function c(r,o){return n(),s("div",null,[e(" more "),e(" sticky "),d])}const b=i(a,[["render",c],["__file","vue40.html.vue"]]);export{b as default};

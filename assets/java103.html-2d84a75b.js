import{_ as i,X as t,Y as s,a1 as r,Z as e,$ as a,a2 as n,a0 as o,F as d}from"./framework-68dd73a2.js";const c={},u={id:"_103-java-final关键字-md",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_103-java-final关键字-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--103-Java-final-y07wr17i7q3q.md",target:"_blank",rel:"noopener noreferrer"},m=o(`<ul><li><p>final可以修饰的元素：</p><ul><li>类：不能被继承</li><li>变量(属性和局部变量)：不能被重新赋值 <ul><li>在声明时赋值，或在构造器中赋值</li><li>系统不会对final属性默认的赋初始值</li></ul></li><li>方法：不能在子类中被覆盖，即不能修改。</li></ul></li><li><p>在程序中经常使用的一些常量，如圆周率，没必要在程序中频繁的修改它那么我们可以：</p><ul><li>首先把它设置为静态static，多个实例共享该常量，没有必要每个对象保存一份；</li><li>其次，设置为final类型，赋值以后不能再改变；</li><li>最后注意遵守常量命名规范，所有字母大写、单词之间用下划线。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>final int a = 123;
a = 345;//代码报错，不给过
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>final修饰方法是最终版本，不能被子类重写。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public final static Double PI_VALUE = 3.14;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),v=e("em",null,"Java-final关键字",-1),f={href:"https://github.com/javaobjects/demo514_1",target:"_blank",rel:"noopener noreferrer"},p=e("hr",null,null,-1),x=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),a(" 分割线")],-1),b=e("hr",null,null,-1),g=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function j(k,V){const l=d("ExternalLinkIcon");return t(),s("div",null,[r(" more "),e("h1",u,[_,a(),e("a",h,[a("103-Java-final关键字.md"),n(l)])]),m,e("p",null,[e("strong",null,[a("以上就是我关于 "),v,a(" 知识点的整理与总结的全部内容，"),e("a",f,[a("另附源码"),n(l)])])]),p,x,b,g])}const E=i(c,[["render",j],["__file","java103.html.vue"]]);export{E as default};

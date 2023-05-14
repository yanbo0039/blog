import{_ as i,X as e,Y as n,a1 as a,a0 as s}from"./framework-68dd73a2.js";const t="/blog/assets/Vue_5_1.png",l="/blog/assets/Vue_5_2.png",r="/blog/assets/Vue_5_3.png",d="/blog/assets/Vue_5_4.png",o="/blog/assets/Vue_5_5.png",c="/blog/assets/Vue_5_6.png",g="/blog/assets/Vue_5_7.png",u="/blog/assets/Vue_5_8.png",p="/blog/assets/Vue_5_9.png",m="/blog/assets/Vue_5_10.png",v="/blog/assets/Vue_5_11.png",b="/blog/assets/Vue_5_12.png",_="/blog/assets/Vue_5_13.png",f="/blog/assets/Vue_5_14.png",x="/blog/assets/Vue_5_15.png",h="/blog/assets/Vue_5_16.png",V="/blog/assets/Vue_5_17.png",y="/blog/assets/Vue_5_18.png",z="/blog/assets/Vue_5_19.png",A="/blog/assets/Vue_5_20.png",w="/blog/assets/Vue_5_21.png",j={},H=s('<h1 id="vue项目代码结构介绍" tabindex="-1"><a class="header-anchor" href="#vue项目代码结构介绍" aria-hidden="true">#</a> Vue项目代码结构介绍</h1><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><img src="'+r+'" alt="" loading="lazy"><img src="'+d+'" alt="" loading="lazy"></p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="单文件组件与vue中的路由" tabindex="-1"><a class="header-anchor" href="#单文件组件与vue中的路由" aria-hidden="true">#</a> 单文件组件与Vue中的路由</h3><pre><code>根实例 man.js
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// The Vue build version to load with the \`import\` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from &#39;vue&#39;
import App from &#39;./App&#39;//表明从当前目录下找App文件App.vue/App.js/App.json依次匹配找到就不在匹配
import router from &#39;./router&#39; //当前目录下的router文件夹，自动匹配到index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: &#39;#app&#39;,//挂载点指的是index.html中的id为app的元素
  router,//==&gt;router:router
  components: { App },//ES6中键值相同时可省略==&gt;{App:App}
  template: &#39;&lt;App/&gt;&#39;//表明将APP的局部组件显示在页面之上
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>当一个文件以.vue为结尾的时候我们把这个文件叫着单文件组件 ，组件的模版被放在template标签内
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;img src=&quot;/assets/logo.png&quot;&gt;
    &lt;!-- 显示的是当前路由地址所对应的内容router-view --&gt;
    &lt;router-view/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: &#39;App&#39;
}
&lt;/script&gt;

&lt;style&gt;
#app {
  font-family: &#39;Avenir&#39;, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><pre><code>路由就是根据网址的不同，返回不同的内容给用户
</code></pre><h3 id="index-js解读" tabindex="-1"><a class="header-anchor" href="#index-js解读" aria-hidden="true">#</a> index.js解读</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vue from &#39;vue&#39;
import Router from &#39;vue-router&#39;
import HelloWorld from &#39;@/components/HelloWorld&#39;

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: &#39;/&#39;,
      name: &#39;HelloWorld&#39;,
      component: HelloWorld
    }
  ]
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>当用户访问根目录的时候，我给用户访问的是HelloWorld这个组件
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,35);function W(k,q){return e(),n("div",null,[a(" more "),H])}const B=i(j,[["render",W],["__file","5-Vue项目代码结构介绍.html.vue"]]);export{B as default};

import{_ as n,X as s,Y as a,a1 as e,a0 as t}from"./framework-68dd73a2.js";const p={},c=t(`<h1 id="_20191010未命名" tabindex="-1"><a class="header-anchor" href="#_20191010未命名" aria-hidden="true">#</a> 20191010未命名</h1><p>IOC AOP</p><p>source format</p><h4 id="bean的作用域" tabindex="-1"><a class="header-anchor" href="#bean的作用域" aria-hidden="true">#</a> bean的作用域</h4><p>singleton(单例模式)</p><p>prototype(原型模式)</p><p>request(请求)</p><p>session(一次会话)</p><p>global</p><h4 id="_8-bean的依赖注入的三种方式" tabindex="-1"><a class="header-anchor" href="#_8-bean的依赖注入的三种方式" aria-hidden="true">#</a> 8 bean的依赖注入的三种方式:</h4><ol><li>构造函数注入</li><li>属性注入(setter注入)</li><li>接口注入(侵入性太强，spring不提供)</li></ol><p>Student:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*基本类型(包装类) 或 String类型*/</span>

<span class="token keyword">private</span> <span class="token keyword">int</span> sid<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> telephone<span class="token punctuation">;</span>

<span class="token comment">/* 引用类型**/</span>
<span class="token keyword">private</span> <span class="token class-name">StuClass</span> stuClass<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**List集合**/</span>
<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> scores<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StuClass</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
<span class="token doc-comment comment">/**Set集合**/</span>
<span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> courses<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StuClass</span><span class="token punctuation">&gt;</span></span> set<span class="token punctuation">;</span>
<span class="token doc-comment comment">/**Map集合**/</span>
<span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token doc-comment comment">/**Map集合**/</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>StuClass:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> cid<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> cname<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>费曼学习法</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--===========3.自动装配===============--&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userService<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spring<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!--4.自动扫描</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function l(i,o){return s(),a("div",null,[e(" more "),c])}const d=n(p,[["render",l],["__file","index.html.vue"]]);export{d as default};

import{_ as s,X as r,Y as i,a1 as l,Z as e,$ as t,a2 as a,a0 as d,F as o}from"./framework-68dd73a2.js";const c={},u=d(`<h1 id="jquery-extend-函数使用详解" tabindex="-1"><a class="header-anchor" href="#jquery-extend-函数使用详解" aria-hidden="true">#</a> JQuery.extend 函数使用详解</h1><p>无意间在gayhub上阅读到某大神的代码 其中有一句是这样写的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>     $.extend(true,defaultConfig,config);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),v={href:"https://www.cnblogs.com/zikai/p/5074686.html",target:"_blank",rel:"noopener noreferrer"},x=d(`<h2 id="一、jquery的扩展方法原型是" tabindex="-1"><a class="header-anchor" href="#一、jquery的扩展方法原型是" aria-hidden="true">#</a> 一、Jquery的扩展方法原型是:</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extend(dest,src1,src2,src3...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>  它的含义是将src1,src2,src3...合并到dest中,返回值为合并后的dest,由此可以看出该方法合并后，是修改了dest的结构的。如果想要得到合并的结果却又不想修改dest的结构，可以如下使用：
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var newSrc=$.extend({},src1,src2,src3...)//也就是将&quot;{}&quot;作为dest参数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就可以将src1,src2,src3...进行合并，然后将合并结果返回给newSrc了。如下例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var result=$.extend({},{name:&quot;Tom&quot;,age:21},{name:&quot;Jerry&quot;,sex:&quot;Boy&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么合并后的结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>result={name:&quot;Jerry&quot;,age:21,sex:&quot;Boy&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>  也就是说后面的参数如果和前面的参数存在相同的名称，那么后面的会覆盖前面的参数值。
</code></pre><h2 id="二、省略dest参数" tabindex="-1"><a class="header-anchor" href="#二、省略dest参数" aria-hidden="true">#</a> 二、省略dest参数</h2><pre><code>  上述的extend方法原型中的dest参数是可以省略的，如果省略了，则该方法就只能有一个src参数，而且是将该src合并到调用extend方法的对象中去，如：
</code></pre><h3 id="_1、-extend-src" tabindex="-1"><a class="header-anchor" href="#_1、-extend-src" aria-hidden="true">#</a> 1、$.extend(src)</h3><p>该方法就是将src合并到jquery的全局对象中去，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.extend({
hello:function(){alert(&#39;hello&#39;);}
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是将hello方法合并到jquery的全局对象中。</p><h3 id="_2、-fn-extend-src" tabindex="-1"><a class="header-anchor" href="#_2、-fn-extend-src" aria-hidden="true">#</a> 2、$.fn.extend(src)</h3><p>该方法将src合并到jquery的实例对象中去，如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.fn.extend({
hello:function(){alert(&#39;hello&#39;);}
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是将hello方法合并到jquery的实例对象中。</p><p>下面例举几个常用的扩展实例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.extend({net:{}});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是在jquery全局对象中扩展一个net命名空间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.extend($.net,{
hello:function(){alert(&#39;hello&#39;);}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是将hello方法扩展到之前扩展的Jquery的net命名空间中去。</p><h2 id="三、jquery的extend方法还有一个重载原型" tabindex="-1"><a class="header-anchor" href="#三、jquery的extend方法还有一个重载原型" aria-hidden="true">#</a> 三、Jquery的extend方法还有一个重载原型：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extend(boolean,dest,src1,src2,src3...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>  第一个参数boolean代表是否进行深度拷贝，其余参数和前面介绍的一致，什么叫深层拷贝，我们看一个例子：
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var result=$.extend( true, {}, 
{ name: &quot;John&quot;, location: {city: &quot;Boston&quot;,county:&quot;USA&quot;} }, 
{ last: &quot;Resig&quot;, location: {state: &quot;MA&quot;,county:&quot;China&quot;} } );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>  我们可以看出src1中嵌套子对象location:{city:&quot;Boston&quot;},src2中也嵌套子对象location:{state:&quot;MA&quot;},第一个深度拷贝参数为true，那么合并后的结果就是： 
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>result={name:&quot;John&quot;,last:&quot;Resig&quot;,
location:{city:&quot;Boston&quot;,state:&quot;MA&quot;,county:&quot;China&quot;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>   也就是说它会将src中的嵌套子对象也进行合并，而如果第一个参数boolean为false，我们看看合并的结果是什么，如下：
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var result=$.extend( false, {}, 
{ name: &quot;John&quot;, location:{city: &quot;Boston&quot;,county:&quot;USA&quot;} }, 
{ last: &quot;Resig&quot;, location: {state: &quot;MA&quot;,county:&quot;China&quot;} } 
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code> 那么合并后的结果就是:
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>result={name:&quot;John&quot;,last:&quot;Resig&quot;,location:{state:&quot;MA&quot;,county:&quot;China&quot;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上就是$.extend()在项目中经常会使用到的一些细节。</p>`,35),h={href:"https://www.baidu.com/help/hijack.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/program_guys/article/details/79035244",target:"_blank",rel:"noopener noreferrer"},p=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),q=e("hr",null,null,-1),b=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function _(f,y){const n=o("ExternalLinkIcon");return r(),i("div",null,[l(" more "),u,e("p",null,[t("由于这方法我很少用，故我看到这句的时候我是懵的，于是查咯下此函数的用法 参考链接"),e("a",v,[t("子恺的微博"),a(n)]),t(" JQuery的extend扩展方法： Jquery的扩展方法extend是我们在写插件的过程中常用的方法，该方法有一些重载原型，在此，我们一起去了解了解。")]),x,e("p",null,[t("其它知识点链接： "),e("a",h,[t("什么是http劫持"),a(n)]),e("a",m,[t("JS将HTML 转为pdf"),a(n)])]),p,g,q,b])}const J=s(c,[["render",_],["__file","index.html.vue"]]);export{J as default};

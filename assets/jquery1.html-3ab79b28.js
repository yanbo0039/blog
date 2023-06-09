import{_ as t,X as l,Y as d,a1 as r,Z as e,$ as n,a2 as a,a0 as s,F as u}from"./framework-68dd73a2.js";const o="/blog/assets/Jquery_1_1.png",c="/blog/assets/Jquery_1_2.png",v="/blog/assets/Jquery_1_3.png",m="/blog/assets/Jquery_1_4.png",g={},p=s('<h1 id="jquery-ajax-踩坑" tabindex="-1"><a class="header-anchor" href="#jquery-ajax-踩坑" aria-hidden="true">#</a> Jquery ajax 踩坑</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>今天发生一些很尴尬的事，刻骨铭心呀； 总结来说犯咯两个错误 ：</p></blockquote><ol><li>method属性；</li></ol><blockquote><p>我一直把这个method给记成给废弃咯。。还兴致勃勃的给我家技术主管说这玩意被废弃咯。。结果。。 我家技术主管先是一脸黑人问号；然后很认真的查咯下API；很客气的告诉我不知道我是从哪里查来的资料， 然后我去查咯下发现这玩意居然是1.9以后版本给加上去的不是给删除掉咯。。我也不知道当年自己查的哪的资料；大写的尴尬。。。。</p></blockquote><ol start="2"><li>type或method的值“post&quot;大小写的问题</li></ol><blockquote><p>这个值我家技术主管习惯写成大写而我习惯写成小写，我也没有确定到底其值应该为大写还是小写</p></blockquote><ul><li>得到结果为：</li></ul><ul><li>关于mothod</li></ul><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>关于post大小写问题：</li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>都是大写为规范，小写也不确定能不能起作用 而且还发现一个特别更尴尬的事：</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>得出结论method才是jquery以后版本支持的属性，而type属性应该迟早会被废弃，而其值&quot;GET&quot; &quot;POST&quot;大写才是规范。这脸打得我啪啪的疼。。。</p></blockquote><ul><li>其详细的API为：</li></ul>',17),b={href:"http://www.w3school.com.cn/jquery/ajax_ajax.asp",target:"_blank",rel:"noopener noreferrer"},x=s(`<ul><li>ajax参数： <strong>async</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Boolean
默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>beforeSend(XHR)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Function
发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
XMLHttpRequest 对象是唯一的参数。
这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cache</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Boolean
默认值: true，dataType 为 script 和 jsonp 时默认为 false。设置为 false 将不缓存此页面。
jQuery 1.2 新功能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>complete(XHR, TS)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Function
请求完成后回调函数 (请求成功或失败之后均调用)。
参数： XMLHttpRequest 对象和一个描述请求类型的字符串。
这是一个 Ajax 事件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>contentType</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
默认值: &quot;application/x-www-form-urlencoded&quot;。发送信息至服务器时内容编码类型。
默认值适合大多数情况。如果你明确地传递了一个 content-type 给 $.ajax() 那么它必定会发送给服务器（即使没有数据要发送）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>context</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Object
这个对象用于设置 Ajax 相关回调函数的上下文。也就是说，让回调函数内 this 指向这个对象
（如果不设定这个参数，那么 this 就指向调用本次 AJAX 请求时传递的 options 参数）。
比如指定一个 DOM 元素作为 context 参数，这样就设置了 success 回调函数的上下文为这个 DOM 元素。
就像这样：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.ajax({ url: &quot;test.html&quot;, context: document.body, success: function(){
        $(this).addClass(&quot;done&quot;);
      }});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>data</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后。查看 processData 
选项说明以禁止此自动转换。必须为 Key/Value 格式。如果为数组，jQuery 将自动为不同值对应同一个名称。如 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{foo:[&quot;bar1&quot;, &quot;bar2&quot;]} 转换为 &#39;&amp;foo=bar1&amp;foo=bar2&#39;。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>dataFilter</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Function
给 Ajax 返回的原始数据的进行预处理的函数。
提供 data 和 type 两个参数：data 是 Ajax 返回的原始数据，type 
是调用 jQuery.ajax 时提供的 dataType 参数。函数返回的值将由 jQuery 进一步处理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>dataType</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
预期服务器返回的数据类型。如果不指定，jQuery 
将自动根据 HTTP 包 MIME 信息来智能判断，比如 XML MIME 
类型就被识别为 XML。在 1.4 中，JSON 就会生成一个 JavaScript 对象，
而 script 则会执行这个脚本。随后服务器端返回的数据会根据这个值解析后，
传递给回调函数。可用值:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>&quot;xml&quot;: 返回 XML 文档，可用 jQuery 处理。</li><li>&quot;html&quot;: 返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。</li><li>&quot;script&quot;: 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了 &quot;cache&quot; 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）</li><li>&quot;json&quot;: 返回 JSON 数据 。</li><li>&quot;jsonp&quot;: JSONP 格式。使用 JSONP 形式调用函数时，如 &quot;myurl?callback=?&quot; jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。</li><li>&quot;text&quot;: 返回纯文本字符串</li></ul><p><strong>error</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Function
默认值: 自动判断 (xml 或 html)。请求失败时调用此函数。
有以下三个参数：XMLHttpRequest 对象、错误信息、（可选）捕获的异常对象。
如果发生了错误，错误信息（第二个参数）除了得到 null 之外，
还可能是 &quot;timeout&quot;, &quot;error&quot;, &quot;notmodified&quot; 和 &quot;parsererror&quot;。
这是一个 Ajax 事件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>global</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Boolean
是否触发全局 AJAX 事件。默认值: true。设置为 false 
将不会触发全局 AJAX 事件，如 ajaxStart 或 ajaxStop 可用于控制不同的 Ajax 事件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ifModified</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Boolean
仅在服务器数据改变时获取新数据。默认值: false。
使用 HTTP 包 Last-Modified 头信息判断。
在 jQuery 1.4 中，它也会检查服务器指定的 &#39;etag&#39; 来确定数据没有被修改过。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jsonp</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
在一个 jsonp 请求中重写回调函数的名字。
这个值用来替代在 &quot;callback=?&quot; 这种 GET 或 POST 
请求中 URL 参数里的 &quot;callback&quot; 部分，比如 {jsonp:&#39;onJsonPLoad&#39;} 
会导致将 &quot;onJsonPLoad=?&quot; 传给服务器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jsonpCallback</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
为 jsonp 请求指定一个回调函数名。这个值将用来取代 jQuery 
自动生成的随机函数名。这主要用来让 jQuery 生成度独特的函数名，
这样管理请求更容易，也能方便地提供回调函数和错误处理。
你也可以在想让浏览器缓存 GET 请求的时候，指定这个回调函数名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>password</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
用于响应 HTTP 访问认证请求的密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>processData</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Boolean
默认值: true。默认情况下，通过data选项传递进来的数据，
如果是一个对象(技术上讲只要不是字符串)，都会处理转化成一个查询字符串，
以配合默认内容类型 &quot;application/x-www-form-urlencoded&quot;。
如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>scriptCharset</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
只有当请求时 dataType 为 &quot;jsonp&quot; 或 &quot;script&quot;，
并且 type 是 &quot;GET&quot; 才会用于强制修改 charset。
通常只在本地和远程的内容编码不同时使用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>success</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Function
请求成功后的回调函数。
参数：由服务器返回，并根据 dataType 参数进行处理后的数据；描述状态的字符串。
这是一个 Ajax 事件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>traditional</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Boolean
如果你想要用传统的方式来序列化数据，那么就设置为 true。请参考工具分类下面的 jQuery.param 方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>timeout</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Number
设置请求超时时间（毫秒）。此设置将覆盖全局设置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
默认值: &quot;GET&quot;)。请求方式 (&quot;POST&quot; 或 &quot;GET&quot;)， 默认为 &quot;GET&quot;。
注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>url</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
默认值: 当前页地址。发送请求的地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>username</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：String
用于响应 HTTP 访问认证请求的用户名。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>xhr</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类型：Function
需要返回一个 XMLHttpRequest 对象。默认在 IE 下是 ActiveXObject 而其他情况下是 XMLHttpRequest 。
用于重写或者提供一个增强的 XMLHttpRequest 对象。这个参数在 jQuery 1.3 以前不可用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一个标准的jquery-ajax写法" tabindex="-1"><a class="header-anchor" href="#一个标准的jquery-ajax写法" aria-hidden="true">#</a> 一个标准的Jquery ajax写法：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.ajax({
       url:&quot;&quot;,
       method:&quot;POST&quot;,
       data:{},
       dataType:&quot;json&quot;,
       beforeSend:function (XMLHttpRequest) {},
       success:function (data,textStatus,XMLHttpRequest) {
       },
       error:function (XMLHttpRequest,textStatus,errorThorwn) {
              console.error(XMLHttpRequest);
              console.error(textStatus);
              console.error(errorThorwn)
       },
       complete:function (XMLHttpRequest,textStatus) {}
       })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),q={href:"http://api.jquery.com/jQuery.ajax/",target:"_blank",rel:"noopener noreferrer"},h=e("hr",null,null,-1),j=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),f=e("hr",null,null,-1),y=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"相关信息"),e("p",null,[e("strong",null,[n("以上就是我关于 "),e("em",null,"Jquery ajax 踩坑"),n(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])])],-1);function _(T,S){const i=u("ExternalLinkIcon");return l(),d("div",null,[r(" more "),p,e("ul",null,[e("li",null,[n("参考链接："),e("a",b,[n("W3C"),a(i)])])]),x,e("ul",null,[e("li",null,[n("更全面的资料参考 "),e("a",q,[n("jquery ajax 官网"),a(i)])])]),h,j,f,y])}const L=t(g,[["render",_],["__file","jquery1.html.vue"]]);export{L as default};

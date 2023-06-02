const t=JSON.parse('{"key":"v-7a92461e","path":"/zh/programBlog/ServerSideLanguage/Java/java49.html","title":"Java-实现验证码刷新功能","lang":"zh-CN","frontmatter":{"title":"Java-实现验证码刷新功能","icon":"page","order":49,"author":"涎涎","date":"2019-06-16T23:30:46.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java49.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-实现验证码刷新功能"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java49.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-实现验证码刷新功能"}],["meta",{"property":"og:description","content":"Java-实现验证码刷新功能 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 login.jsp核心代码 &lt;td&gt; \\t &lt;span class=\\"text_cray1\\"&gt; \\t \\t&lt;img src=\\"&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet\\" alt=\\"\\" height=\\"20\\" id=\\"login_image_code\\" onclick=\\"refresh()\\"/&gt; \\t &lt;/span&gt; &lt;/td&gt; &lt;td&gt; \\t&lt;img src=\\"&lt;%=request.getContextPath()%&gt;/images/text_sx.gif\\" width=\\"32\\" height=\\"18\\" onclick=\\"refresh()\\" style=\\"cursor:pointer;\\"&gt; \\t&lt;/td&gt; &lt;td align=\\"left\\"&gt;&amp;nbsp;&lt;/td&gt; &lt;/tr&gt; &lt;script&gt; function refresh(){ \\t document.querySelector(\\"#login_image_code\\").src = \\"&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet?data=\\"+new Date(); } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T05:58:29.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T23:30:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T05:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-实现验证码刷新功能\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T23:30:46.000Z\\",\\"dateModified\\":\\"2023-06-02T05:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-实现验证码刷新功能 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 login.jsp核心代码 &lt;td&gt; \\t &lt;span class=\\"text_cray1\\"&gt; \\t \\t&lt;img src=\\"&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet\\" alt=\\"\\" height=\\"20\\" id=\\"login_image_code\\" onclick=\\"refresh()\\"/&gt; \\t &lt;/span&gt; &lt;/td&gt; &lt;td&gt; \\t&lt;img src=\\"&lt;%=request.getContextPath()%&gt;/images/text_sx.gif\\" width=\\"32\\" height=\\"18\\" onclick=\\"refresh()\\" style=\\"cursor:pointer;\\"&gt; \\t&lt;/td&gt; &lt;td align=\\"left\\"&gt;&amp;nbsp;&lt;/td&gt; &lt;/tr&gt; &lt;script&gt; function refresh(){ \\t document.querySelector(\\"#login_image_code\\").src = \\"&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet?data=\\"+new Date(); } &lt;/script&gt;"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685685509000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":6}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/49-Java-实现验证码刷新功能.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-实现验证码刷新功能</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<p><strong>login.jsp</strong>核心代码</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>      &lt;td&gt;\\n\\t        &lt;span class=\\"text_cray1\\"&gt;\\n\\t        \\t&lt;img src=\\"&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet\\" alt=\\"\\" height=\\"20\\" id=\\"login_image_code\\" onclick=\\"refresh()\\"/&gt;\\n\\t        &lt;/span&gt;\\n        &lt;/td&gt;\\n        &lt;td&gt;\\n        \\t&lt;img src=\\"&lt;%=request.getContextPath()%&gt;/images/text_sx.gif\\" width=\\"32\\" height=\\"18\\" onclick=\\"refresh()\\" style=\\"cursor:pointer;\\"&gt;\\n       \\t&lt;/td&gt;\\n        &lt;td align=\\"left\\"&gt;&amp;nbsp;&lt;/td&gt;\\n      &lt;/tr&gt;\\n      &lt;script&gt;\\n         function refresh(){\\n        \\t document.querySelector(\\"#login_image_code\\").src = \\"&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet?data=\\"+new Date();\\n         }\\n      &lt;/script&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

const t=JSON.parse('{"key":"v-84cf59d8","path":"/zh/programBlog/ServerSideLanguage/Java/java46.html","title":"Java-Servlet跳转Servlet以及传参","lang":"zh-CN","frontmatter":{"title":"Java-Servlet跳转Servlet以及传参","icon":"page","order":46,"author":"涎涎","date":"2019-06-16T23:26:06.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java46.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-Servlet跳转Servlet以及传参"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java46.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-Servlet跳转Servlet以及传参"}],["meta",{"property":"og:description","content":"Java-Servlet跳转Servlet以及传参 最近项目中有这么一个需求： JSP中的按钮点击-------&gt;Servlet-1---------&gt;Servlet-2作出判断并传参------JSP页面接收参数并展示 JSP跳转Servlet login.jsp button2跳转到ToRegisterViewServlet &lt;form name=\\"form1\\" method=\\"post\\" action=\\"&lt;%=request.getContextPath()%&gt;/LoginServlet\\" id=\\"loginForm\\"&gt; &lt;--此处的action跳转到对应的LoginServlet是通过button为submit提交触发的--&gt; &lt;table width=\\"933\\" border=\\"0\\" align=\\"center\\" cellpadding=\\"0\\" cellspacing=\\"0\\" style=\\"margin:120px;\\"&gt; &lt;tr&gt; &lt;td height=\\"412\\" valign=\\"top\\" background=\\"&lt;%=request.getContextPath()%&gt;/images/bg_imgJava_46_1.jpg\\"&gt; &lt;table height=\\"300\\" border=\\"0\\" cellspacing=\\"0\\"&gt; &lt;tr&gt; &lt;td colspan=\\"2\\"&gt; &lt;table width=\\"200\\" border=\\"0\\" cellspacing=\\"0\\"&gt; &lt;tr&gt; &lt;td width=\\"78\\"&gt; &lt;input name=\\"button\\" type=\\"button\\" class=\\"butlogin\\" id=\\"button\\" value=\\"\\" onClick=\\"UserLogin()\\"&gt; &lt;--这是登录按钮--&gt; &lt;/td&gt; &lt;td&gt;&amp;nbsp;&lt;/td&gt; &lt;td width=\\"78\\"&gt; &lt;input name=\\"button2\\" type=\\"button\\" class=\\"butzc\\" id=\\"button2\\"value=\\"\\" onClick=\\"UserRegistration()\\"&gt; &lt;--这是注册铵钮需要跳转到另一个Servlet--&gt; &lt;script&gt; function UserRegistration(){ \\t\\tlocation.href = \\"&lt;%=request.getContextPath()%&gt;/ToRegisterViewServlet\\" ; \\t} &lt;/script&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/form&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T23:26:06.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-Servlet跳转Servlet以及传参\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T23:26:06.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-Servlet跳转Servlet以及传参 最近项目中有这么一个需求： JSP中的按钮点击-------&gt;Servlet-1---------&gt;Servlet-2作出判断并传参------JSP页面接收参数并展示 JSP跳转Servlet login.jsp button2跳转到ToRegisterViewServlet &lt;form name=\\"form1\\" method=\\"post\\" action=\\"&lt;%=request.getContextPath()%&gt;/LoginServlet\\" id=\\"loginForm\\"&gt; &lt;--此处的action跳转到对应的LoginServlet是通过button为submit提交触发的--&gt; &lt;table width=\\"933\\" border=\\"0\\" align=\\"center\\" cellpadding=\\"0\\" cellspacing=\\"0\\" style=\\"margin:120px;\\"&gt; &lt;tr&gt; &lt;td height=\\"412\\" valign=\\"top\\" background=\\"&lt;%=request.getContextPath()%&gt;/images/bg_imgJava_46_1.jpg\\"&gt; &lt;table height=\\"300\\" border=\\"0\\" cellspacing=\\"0\\"&gt; &lt;tr&gt; &lt;td colspan=\\"2\\"&gt; &lt;table width=\\"200\\" border=\\"0\\" cellspacing=\\"0\\"&gt; &lt;tr&gt; &lt;td width=\\"78\\"&gt; &lt;input name=\\"button\\" type=\\"button\\" class=\\"butlogin\\" id=\\"button\\" value=\\"\\" onClick=\\"UserLogin()\\"&gt; &lt;--这是登录按钮--&gt; &lt;/td&gt; &lt;td&gt;&amp;nbsp;&lt;/td&gt; &lt;td width=\\"78\\"&gt; &lt;input name=\\"button2\\" type=\\"button\\" class=\\"butzc\\" id=\\"button2\\"value=\\"\\" onClick=\\"UserRegistration()\\"&gt; &lt;--这是注册铵钮需要跳转到另一个Servlet--&gt; &lt;script&gt; function UserRegistration(){ \\t\\tlocation.href = \\"&lt;%=request.getContextPath()%&gt;/ToRegisterViewServlet\\" ; \\t} &lt;/script&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/form&gt;"},"headers":[{"level":3,"title":"JSP跳转Servlet","slug":"jsp跳转servlet","link":"#jsp跳转servlet","children":[]},{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":3.38,"words":1015},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/46-Java-Servlet跳转Servlet以及传参.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-Servlet跳转Servlet以及传参</h1>\\n<p>最近项目中有这么一个需求：</p>\\n<p><strong>JSP中的按钮点击-------&gt;Servlet-1---------&gt;Servlet-2作出判断并传参------JSP页面接收参数并展示</strong></p>\\n<h3> JSP跳转Servlet</h3>\\n<p><strong>login.jsp button2跳转到ToRegisterViewServlet</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code> &lt;form name=\\"form1\\" method=\\"post\\" action=\\"&lt;%=request.getContextPath()%&gt;/LoginServlet\\" id=\\"loginForm\\"&gt;\\n &lt;--此处的action跳转到对应的LoginServlet是通过button为submit提交触发的--&gt;\\n   &lt;table width=\\"933\\" border=\\"0\\" align=\\"center\\" cellpadding=\\"0\\" cellspacing=\\"0\\" style=\\"margin:120px;\\"&gt;\\n  &lt;tr&gt;\\n    &lt;td height=\\"412\\" valign=\\"top\\" background=\\"&lt;%=request.getContextPath()%&gt;/images/bg_imgJava_46_1.jpg\\"&gt;\\n    &lt;table height=\\"300\\" border=\\"0\\" cellspacing=\\"0\\"&gt;\\n      &lt;tr&gt;\\n        &lt;td colspan=\\"2\\"&gt;\\n        &lt;table width=\\"200\\" border=\\"0\\" cellspacing=\\"0\\"&gt;\\n          &lt;tr&gt;\\n            &lt;td width=\\"78\\"&gt;\\n            &lt;input name=\\"button\\"  type=\\"button\\"  class=\\"butlogin\\" id=\\"button\\" value=\\"\\" onClick=\\"UserLogin()\\"&gt;\\n            &lt;--这是登录按钮--&gt;\\n            &lt;/td&gt;\\n            &lt;td&gt;&amp;nbsp;&lt;/td&gt;\\n            &lt;td width=\\"78\\"&gt;\\n            &lt;input name=\\"button2\\"  type=\\"button\\"  class=\\"butzc\\" id=\\"button2\\"value=\\"\\" onClick=\\"UserRegistration()\\"&gt;\\n            &lt;--这是注册铵钮需要跳转到另一个Servlet--&gt;\\n            &lt;script&gt;\\n        function UserRegistration(){\\n\\t\\tlocation.href = \\"&lt;%=request.getContextPath()%&gt;/ToRegisterViewServlet\\" ;\\n\\t}\\n            &lt;/script&gt;\\n            &lt;/td&gt;\\n          &lt;/tr&gt;\\n        &lt;/table&gt;\\n        &lt;/td&gt;\\n      &lt;/tr&gt;\\n    &lt;/table&gt;\\n    &lt;/td&gt;\\n  &lt;/tr&gt;\\n&lt;/table&gt;\\n &lt;/form&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

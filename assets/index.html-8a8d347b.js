const t=JSON.parse('{"key":"v-1cc0e282","path":"/zh/java47/","title":"Java-实现上传图片功能","lang":"zh-CN","frontmatter":{"title":"Java-实现上传图片功能","icon":"page","order":47,"author":"涎涎","date":"2019-06-16T23:26:32.000Z","isOriginal":true,"permalinkPattern":"java47","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-实现上传图片功能"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java47/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-实现上传图片功能"}],["meta",{"property":"og:description","content":"Java-实现上传图片功能 userinfo_edit.jsp核心代码 &lt;table width=\\"90%\\" border=\\"0\\" cellpadding=\\"0\\" cellspacing=\\"0\\"&gt; &lt;tr&gt; &lt;td height=\\"15\\"&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td height=\\"7\\" align=\\"center\\" class=\\"text_cray\\"&gt;上传照片&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td height=\\"8\\"&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td align=\\"center\\"&gt; &lt;input name=\\"uploadFile\\" type=\\"file\\" class=\\"text_cray\\" size=\\"20\\" /&gt; &lt;input type=\\"button\\" value=\\"上传\\" id=\\"btn_uploadFile\\" style=\\"position: relative;top: -21px;left: 70px;\\"/&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;script&gt; document.querySelector(\\"#btn_uploadFile\\").onclick = () =&gt; { //表单提交，上传照片，告诉我是成功还是失败，最好回显照片 //1.获取表单元素 let form = document.querySelector(\\"#edit_form\\"); //2.修改表单的属性：支持进行二进制数据的提交 form.encoding = \\"multipart/form-data\\"; //3.指定处理上传图片请求的servlet form.action = \\"UploadPhotoServlet\\"; //4.表单提交 form.submit(); //以下代码将表单属性还原 //需要修改表单的enctype属性，js中的代码如下： form.encoding = \\"application/x-www-form-urlencoded\\"; form.action = \\"UpdateUserServlet\\"; } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T23:26:32.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-实现上传图片功能\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T23:26:32.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-实现上传图片功能 userinfo_edit.jsp核心代码 &lt;table width=\\"90%\\" border=\\"0\\" cellpadding=\\"0\\" cellspacing=\\"0\\"&gt; &lt;tr&gt; &lt;td height=\\"15\\"&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td height=\\"7\\" align=\\"center\\" class=\\"text_cray\\"&gt;上传照片&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td height=\\"8\\"&gt;&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td align=\\"center\\"&gt; &lt;input name=\\"uploadFile\\" type=\\"file\\" class=\\"text_cray\\" size=\\"20\\" /&gt; &lt;input type=\\"button\\" value=\\"上传\\" id=\\"btn_uploadFile\\" style=\\"position: relative;top: -21px;left: 70px;\\"/&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;script&gt; document.querySelector(\\"#btn_uploadFile\\").onclick = () =&gt; { //表单提交，上传照片，告诉我是成功还是失败，最好回显照片 //1.获取表单元素 let form = document.querySelector(\\"#edit_form\\"); //2.修改表单的属性：支持进行二进制数据的提交 form.encoding = \\"multipart/form-data\\"; //3.指定处理上传图片请求的servlet form.action = \\"UploadPhotoServlet\\"; //4.表单提交 form.submit(); //以下代码将表单属性还原 //需要修改表单的enctype属性，js中的代码如下： form.encoding = \\"application/x-www-form-urlencoded\\"; form.action = \\"UpdateUserServlet\\"; } &lt;/script&gt;"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/47-Java-实现上传图片功能.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-实现上传图片功能</h1>\\n<ol>\\n<li>userinfo_edit.jsp核心代码</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>&lt;table width=\\"90%\\" border=\\"0\\" cellpadding=\\"0\\" cellspacing=\\"0\\"&gt;\\n    &lt;tr&gt;\\n        &lt;td height=\\"15\\"&gt;&lt;/td&gt;\\n    &lt;/tr&gt;\\n    &lt;tr&gt;\\n        &lt;td height=\\"7\\" align=\\"center\\" class=\\"text_cray\\"&gt;上传照片&lt;/td&gt;\\n    &lt;/tr&gt;\\n    &lt;tr&gt;\\n        &lt;td height=\\"8\\"&gt;&lt;/td&gt;\\n    &lt;/tr&gt;\\n    &lt;tr&gt;\\n        &lt;td align=\\"center\\"&gt;\\n            &lt;input name=\\"uploadFile\\" type=\\"file\\" class=\\"text_cray\\" size=\\"20\\" /&gt;\\n            &lt;input type=\\"button\\" value=\\"上传\\" id=\\"btn_uploadFile\\" style=\\"position: relative;top: -21px;left: 70px;\\"/&gt;\\n        &lt;/td&gt;\\n    &lt;/tr&gt;\\n&lt;/table&gt;\\n&lt;script&gt;\\n    document.querySelector(\\"#btn_uploadFile\\").onclick = () =&gt; {\\n        //表单提交，上传照片，告诉我是成功还是失败，最好回显照片\\n\\n        //1.获取表单元素\\n        let form = document.querySelector(\\"#edit_form\\");\\n\\n        //2.修改表单的属性：支持进行二进制数据的提交\\n        form.encoding = \\"multipart/form-data\\";\\n\\n        //3.指定处理上传图片请求的servlet\\n        form.action = \\"UploadPhotoServlet\\";\\n\\n        //4.表单提交\\n        form.submit();\\n        //以下代码将表单属性还原\\n        //需要修改表单的enctype属性，js中的代码如下：\\n        form.encoding = \\"application/x-www-form-urlencoded\\";\\n        form.action = \\"UpdateUserServlet\\";\\n    }\\n&lt;/script&gt;\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

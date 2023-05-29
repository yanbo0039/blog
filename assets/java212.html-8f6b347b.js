const t=JSON.parse('{"key":"v-20cd4309","path":"/zh/programBlog/ServerSideLanguage/Java/java212.html","title":"Java异常处理方式-自定义异常","lang":"zh-CN","frontmatter":{"title":"Java异常处理方式-自定义异常","icon":"page","order":212,"author":"涎涎","date":"2023-01-06T11:44:12.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java212.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java异常处理方式-自定义异常"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java212.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java异常处理方式-自定义异常"}],["meta",{"property":"og:description","content":"212-Java异常处理方式-自定义异常.md 概念 异常处理方式： 抛出异常 -&gt; 捕获异常 -&gt; 处理异常 -&gt; 释放、关闭资源 \\t自行处理（积极处理）： \\t try \\t { \\t \\t可能发生异常的语句; \\t } \\t catch(异常类型 异常引用名) \\t { \\t \\t处理异常的语句； \\t } \\t finally \\t { \\t \\t最终都要执行的语句，常用于释放资源、关闭资源 \\t } \\t \\t 注意： \\t \\t1.try语句块与catch语句块不可分割，是一个完整的语法结构 \\t \\t2.可以同时定义多个catch语句块捕获不同的异常类型 \\t \\t3.当多个catch语句同时定义时，必须根据捕获的异常类型从小到大排序 \\t \\t4.finally语句：无论代码执行return或break语句，还是发生了具体的异常Exception，始终都会执行 \\t \\t 除非执行System.exit(0);退出了系统，finally才不会执行 \\t \\t \\t \\t回避处理（消极处理）： \\t\\tthrows:修饰方法，告诉调用方法的人，该方法可能存在某类异常 \\t\\tthrow: 抛出具体的异常"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-06T11:44:12.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java异常处理方式-自定义异常\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-06T11:44:12.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"212-Java异常处理方式-自定义异常.md 概念 异常处理方式： 抛出异常 -&gt; 捕获异常 -&gt; 处理异常 -&gt; 释放、关闭资源 \\t自行处理（积极处理）： \\t try \\t { \\t \\t可能发生异常的语句; \\t } \\t catch(异常类型 异常引用名) \\t { \\t \\t处理异常的语句； \\t } \\t finally \\t { \\t \\t最终都要执行的语句，常用于释放资源、关闭资源 \\t } \\t \\t 注意： \\t \\t1.try语句块与catch语句块不可分割，是一个完整的语法结构 \\t \\t2.可以同时定义多个catch语句块捕获不同的异常类型 \\t \\t3.当多个catch语句同时定义时，必须根据捕获的异常类型从小到大排序 \\t \\t4.finally语句：无论代码执行return或break语句，还是发生了具体的异常Exception，始终都会执行 \\t \\t 除非执行System.exit(0);退出了系统，finally才不会执行 \\t \\t \\t \\t回避处理（消极处理）： \\t\\tthrows:修饰方法，告诉调用方法的人，该方法可能存在某类异常 \\t\\tthrow: 抛出具体的异常"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":4.59,"words":1376},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/212-Java异常处理方式-自定义异常.md","localizedDate":"2023年1月6日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--212-Java--yt6nh85g9qg16iea831afa1t905in10ddc2c.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">212-Java异常处理方式-自定义异常.md</a></h1>\\n<h4> 概念</h4>\\n<blockquote>\\n<p>异常处理方式：\\n抛出异常   -&gt; 捕获异常  -&gt; 处理异常   -&gt; 释放、关闭资源</p>\\n</blockquote>\\n<pre><code>\\t自行处理（积极处理）：\\n\\t    try\\n\\t    {\\n\\t    \\t可能发生异常的语句;\\n\\t    }\\n\\t    catch(异常类型  异常引用名)\\n\\t    {\\n\\t    \\t处理异常的语句；\\n\\t    }\\n\\t    finally\\n\\t    {\\n\\t    \\t最终都要执行的语句，常用于释放资源、关闭资源\\n\\t    }\\n\\t    \\n\\t                注意：\\n\\t    \\t1.try语句块与catch语句块不可分割，是一个完整的语法结构\\n\\t    \\t2.可以同时定义多个catch语句块捕获不同的异常类型\\n\\t    \\t3.当多个catch语句同时定义时，必须根据捕获的异常类型从小到大排序\\n\\t    \\t4.finally语句：无论代码执行return或break语句，还是发生了具体的异常Exception，始终都会执行\\n\\t    \\t                                         除非执行System.exit(0);退出了系统，finally才不会执行\\n\\t    \\t\\n\\t\\n\\t回避处理（消极处理）：\\n\\t\\tthrows:修饰方法，告诉调用方法的人，该方法可能存在某类异常\\n\\t\\tthrow: 抛出具体的异常\\n</code></pre>","autoDesc":true}');export{t as data};
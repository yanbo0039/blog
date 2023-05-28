const e=JSON.parse('{"key":"v-f19fef66","path":"/zh/programBlog/ServerSideLanguage/Java/java230.html","title":"Java集合类-自定义泛型","lang":"zh-CN","frontmatter":{"title":"Java集合类-自定义泛型","icon":"page","order":230,"author":"涎涎","date":"2023-01-13T13:34:46.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java230.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java集合类-自定义泛型"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java230.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java集合类-自定义泛型"}],["meta",{"property":"og:description","content":"230-Java集合类-自定义泛型.md 示例代码 package com.tencent.chapter02.自定义泛型; /** * E 表示任意类型 * E extends Number : 表示Number的任意子类类型 */ public class Emp&lt;E extends Number&gt; { \\t//修饰属性（成员变量） \\tprivate E ename; \\t \\t//修饰构造函数 \\tpublic Emp() \\t{ \\t\\t \\t} \\tpublic Emp(E ename) \\t{ \\t\\tthis.ename = ename; \\t} \\t \\t//修饰普通方法 \\tpublic void setEname(E ename) \\t{ \\t\\tthis.ename = ename; \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-13T13:34:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合类-自定义泛型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-13T13:34:46.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"230-Java集合类-自定义泛型.md 示例代码 package com.tencent.chapter02.自定义泛型; /** * E 表示任意类型 * E extends Number : 表示Number的任意子类类型 */ public class Emp&lt;E extends Number&gt; { \\t//修饰属性（成员变量） \\tprivate E ename; \\t \\t//修饰构造函数 \\tpublic Emp() \\t{ \\t\\t \\t} \\tpublic Emp(E ename) \\t{ \\t\\tthis.ename = ename; \\t} \\t \\t//修饰普通方法 \\tpublic void setEname(E ename) \\t{ \\t\\tthis.ename = ename; \\t} }"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":1.15,"words":344},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/230-Java集合类-自定义泛型.md","localizedDate":"2023年1月13日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--230-Java--yt6nt91ck3j4in302dg88b6fsv74f.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">230-Java集合类-自定义泛型.md</a></h1>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter02.自定义泛型;\\n\\n/**\\n * E 表示任意类型\\n * E extends Number : 表示Number的任意子类类型\\n */\\npublic class Emp&lt;E extends Number&gt; {\\n\\n\\t//修饰属性（成员变量）\\n\\tprivate E ename;\\n\\t\\n\\t//修饰构造函数\\n\\tpublic Emp()\\n\\t{\\n\\t\\t\\n\\t}\\n\\tpublic Emp(E ename)\\n\\t{\\n\\t\\tthis.ename = ename;\\n\\t}\\n\\t\\n\\t//修饰普通方法\\n\\tpublic void setEname(E ename)\\n\\t{\\n\\t\\tthis.ename = ename;\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};

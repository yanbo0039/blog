const t=JSON.parse('{"key":"v-445cc8ac","path":"/zh/programBlog/ServerSideLanguage/Java/213-Java%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F-%E5%BC%82%E5%B8%B8%E5%A0%86%E6%A0%88%E4%BF%A1%E6%81%AF%E8%B7%9F%E8%B8%AA%20.html","title":"Java异常处理方式-异常堆栈信息跟踪","lang":"zh-CN","frontmatter":{"title":"Java异常处理方式-异常堆栈信息跟踪","icon":"page","order":213,"author":"涎涎","date":"2023-01-06T11:49:47.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java异常处理方式-异常堆栈信息跟踪"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/213-Java%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F-%E5%BC%82%E5%B8%B8%E5%A0%86%E6%A0%88%E4%BF%A1%E6%81%AF%E8%B7%9F%E8%B8%AA%20.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java异常处理方式-异常堆栈信息跟踪"}],["meta",{"property":"og:description","content":"213-Java异常处理方式-异常堆栈信息跟踪 .md 概念 示例代码 package com.tencent.chapter08; /** \\tException in thread \\"main\\" java.lang.ArithmeticException: / by zero \\t\\tat com.tencent.chapter08._04方法调用堆栈.methodThree(_04方法调用堆栈.java:20) \\t\\tat com.tencent.chapter08._04方法调用堆栈.methodTwo(_04方法调用堆栈.java:14) \\t\\tat com.tencent.chapter08._04方法调用堆栈.methodOne(_04方法调用堆栈.java:8) \\t\\tat com.tencent.chapter08._04方法调用堆栈.main(_04方法调用堆栈.java:24) */ public class _04方法调用堆栈 { \\tpublic static void methodOne() \\t{ \\t\\tSystem.out.println(\\"methodOne...........1\\"); \\t\\tmethodTwo(); \\t} \\t \\tpublic static void methodTwo() \\t{ \\t\\tSystem.out.println(\\"methodTwo...........2\\"); \\t\\tmethodThree(); \\t} \\t \\tpublic static void methodThree() \\t{ \\t\\tSystem.out.println(\\"methodThree...........3\\"); \\t\\tint i = 1/0; \\t} \\t \\tpublic static void main(String[] args) { \\t\\tmethodOne(); \\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-06T11:49:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java异常处理方式-异常堆栈信息跟踪\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-06T11:49:47.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"213-Java异常处理方式-异常堆栈信息跟踪 .md 概念 示例代码 package com.tencent.chapter08; /** \\tException in thread \\"main\\" java.lang.ArithmeticException: / by zero \\t\\tat com.tencent.chapter08._04方法调用堆栈.methodThree(_04方法调用堆栈.java:20) \\t\\tat com.tencent.chapter08._04方法调用堆栈.methodTwo(_04方法调用堆栈.java:14) \\t\\tat com.tencent.chapter08._04方法调用堆栈.methodOne(_04方法调用堆栈.java:8) \\t\\tat com.tencent.chapter08._04方法调用堆栈.main(_04方法调用堆栈.java:24) */ public class _04方法调用堆栈 { \\tpublic static void methodOne() \\t{ \\t\\tSystem.out.println(\\"methodOne...........1\\"); \\t\\tmethodTwo(); \\t} \\t \\tpublic static void methodTwo() \\t{ \\t\\tSystem.out.println(\\"methodTwo...........2\\"); \\t\\tmethodThree(); \\t} \\t \\tpublic static void methodThree() \\t{ \\t\\tSystem.out.println(\\"methodThree...........3\\"); \\t\\tint i = 1/0; \\t} \\t \\tpublic static void main(String[] args) { \\t\\tmethodOne(); \\t} \\t }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":1.12,"words":337},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/213-Java异常处理方式-异常堆栈信息跟踪 .md","localizedDate":"2023年1月6日","excerpt":"<!-- more -->\\n<h1> 213-Java异常处理方式-异常堆栈信息跟踪 .md</h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"/assets/Java_213_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter08;\\n\\n/**\\n\\tException in thread \\"main\\" java.lang.ArithmeticException: / by zero\\n\\t\\tat com.tencent.chapter08._04方法调用堆栈.methodThree(_04方法调用堆栈.java:20)\\n\\t\\tat com.tencent.chapter08._04方法调用堆栈.methodTwo(_04方法调用堆栈.java:14)\\n\\t\\tat com.tencent.chapter08._04方法调用堆栈.methodOne(_04方法调用堆栈.java:8)\\n\\t\\tat com.tencent.chapter08._04方法调用堆栈.main(_04方法调用堆栈.java:24)\\n */\\npublic class _04方法调用堆栈 {\\n\\n\\tpublic static void methodOne()\\n\\t{\\n\\t\\tSystem.out.println(\\"methodOne...........1\\");\\n\\t\\tmethodTwo();\\n\\t}\\n\\t\\n\\tpublic static void methodTwo()\\n\\t{\\n\\t\\tSystem.out.println(\\"methodTwo...........2\\");\\n\\t\\tmethodThree();\\n\\t}\\n\\t\\n\\tpublic static void methodThree()\\n\\t{\\n\\t\\tSystem.out.println(\\"methodThree...........3\\");\\n\\t\\tint i = 1/0;\\n\\t}\\n\\t\\n\\tpublic static void main(String[] args) {\\n\\t\\tmethodOne();\\n\\t}\\n\\t\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

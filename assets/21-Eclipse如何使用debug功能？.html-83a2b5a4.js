const t=JSON.parse('{"key":"v-769891d0","path":"/zh/programBlog/IDE/Eclipse/21-Eclipse%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8debug%E5%8A%9F%E8%83%BD%EF%BC%9F.html","title":"Eclipse如何使用debug功能？","lang":"zh-CN","frontmatter":{"title":"Eclipse如何使用debug功能？","icon":"page","order":21,"author":"涎涎","date":"2019-07-01T00:00:00.000Z","category":["Eclipse"],"tag":["Eclipse"],"head":[["meta",{"name":"keywords","content":"Eclipse如何使用debug功能？"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/IDE/Eclipse/21-Eclipse%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8debug%E5%8A%9F%E8%83%BD%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Eclipse如何使用debug功能？"}],["meta",{"property":"og:description","content":"21-Eclipse如何使用debug功能？.md 新建一个Java Project 新建一个class 写出需要调试的demo代码 package net.tencent.demo.test; public class HelloWorld { \\t//main alt ---&gt; / 自动生成 \\tpublic static void main(String[] args) { \\t\\t \\t\\tSystem.out.println();//syso ---&gt; alt + / \\t\\t \\t\\tint a = 100; \\t\\t \\t\\tint b = 200; \\t\\t \\t\\ta = a + b; \\t\\t \\t\\tb = a + 300; \\t\\t \\t\\tSystem.out.println(\\"a: \\" + a); \\t\\tSystem.out.println(\\"b: \\" + b); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Eclipse"}],["meta",{"property":"article:published_time","content":"2019-07-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Eclipse如何使用debug功能？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"21-Eclipse如何使用debug功能？.md 新建一个Java Project 新建一个class 写出需要调试的demo代码 package net.tencent.demo.test; public class HelloWorld { \\t//main alt ---&gt; / 自动生成 \\tpublic static void main(String[] args) { \\t\\t \\t\\tSystem.out.println();//syso ---&gt; alt + / \\t\\t \\t\\tint a = 100; \\t\\t \\t\\tint b = 200; \\t\\t \\t\\ta = a + b; \\t\\t \\t\\tb = a + 300; \\t\\t \\t\\tSystem.out.println(\\"a: \\" + a); \\t\\tSystem.out.println(\\"b: \\" + b); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"zh/programBlog/IDE/Eclipse/21-Eclipse如何使用debug功能？.md","localizedDate":"2019年7月1日","excerpt":"<!-- more -->\\n<h1> 21-Eclipse如何使用debug功能？.md</h1>\\n<ol>\\n<li>\\n<p>新建一个Java Project</p>\\n</li>\\n<li>\\n<p>新建一个class</p>\\n</li>\\n</ol>\\n<figure><img src=\\"/assets/Eclipse_21_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<ol start=\\"3\\">\\n<li>写出需要调试的demo代码</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package net.tencent.demo.test;\\n\\npublic class HelloWorld {\\n\\n\\t//main alt ---&gt; / 自动生成\\n\\tpublic static void main(String[] args) {\\n\\t\\t\\n\\n\\t\\tSystem.out.println();//syso ---&gt; alt + /\\n\\t\\t\\n\\t\\tint a = 100;\\n\\t\\t\\n\\t\\tint b = 200;\\n\\t\\t\\n\\t\\ta = a + b;\\n\\t\\t\\n\\t\\tb = a + 300;\\n\\t\\t\\n\\t\\tSystem.out.println(\\"a: \\" + a);\\n\\t\\tSystem.out.println(\\"b: \\" + b);\\n\\t}\\n\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

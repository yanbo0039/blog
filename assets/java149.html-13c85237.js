const e=JSON.parse('{"key":"v-6390b446","path":"/zh/programBlog/ServerSideLanguage/Java/java149.html","title":"Java-线程的join方法","lang":"zh-CN","frontmatter":{"title":"Java-线程的join方法","icon":"page","order":149,"author":"涎涎","date":"2019-07-17T16:10:56.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java149.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-线程的join方法"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java149.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-线程的join方法"}],["meta",{"property":"og:description","content":"149-Java-线程的join方法.md package 创建线程类的三种方式; /** * * &lt;p&gt;Title: SaleTicket2&lt;/p&gt; * &lt;p&gt; * \\tDescription: * 创建线程类的第二种方式： * 继承Thread类 * &lt;/p&gt; * @author xianxian * @date 2019年7月17日 */ public class SaleTicket2 extends Thread { \\t@Override \\tpublic void run() { \\t\\tfor (int i = 0; i &lt;= 100; i++) { \\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\"打印票号：\\" + i); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T00:37:27.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-17T16:10:56.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T00:37:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-线程的join方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-17T16:10:56.000Z\\",\\"dateModified\\":\\"2023-05-31T00:37:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"149-Java-线程的join方法.md package 创建线程类的三种方式; /** * * &lt;p&gt;Title: SaleTicket2&lt;/p&gt; * &lt;p&gt; * \\tDescription: * 创建线程类的第二种方式： * 继承Thread类 * &lt;/p&gt; * @author xianxian * @date 2019年7月17日 */ public class SaleTicket2 extends Thread { \\t@Override \\tpublic void run() { \\t\\tfor (int i = 0; i &lt;= 100; i++) { \\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\"打印票号：\\" + i); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685493447000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":5}]},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/149-Java-线程的join方法.md","localizedDate":"2019年7月17日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--149-Java-join-uf01a939edn9ausmgtu.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">149-Java-线程的join方法.md</a></h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package 创建线程类的三种方式;\\n/**\\n * \\n* &lt;p&gt;Title: SaleTicket2&lt;/p&gt;  \\n* &lt;p&gt;\\n* \\tDescription: \\n* 创建线程类的第二种方式：\\n* 继承Thread类\\n* &lt;/p&gt;  \\n* @author xianxian \\n* @date 2019年7月17日\\n */\\npublic class SaleTicket2 extends Thread {\\n\\n\\t@Override\\n\\tpublic void run() {\\n\\t\\tfor (int i = 0; i &lt;= 100; i++) {\\n\\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\"打印票号：\\" + i);\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};

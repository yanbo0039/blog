const e=JSON.parse('{"key":"v-7b5a06a4","path":"/zh/java148/","title":"Java-创建线程类的三种方式","lang":"zh-CN","frontmatter":{"title":"Java-创建线程类的三种方式","icon":"page","order":148,"author":"涎涎","date":"2019-07-17T15:06:02.000Z","isOriginal":true,"permalinkPattern":"java148","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-创建线程类的三种方式"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java148/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-创建线程类的三种方式"}],["meta",{"property":"og:description","content":"148-Java-创建线程类的三种方式.md 第一种： package 创建线程类的三种方式; /** * * &lt;p&gt;Title: SaleTicket&lt;/p&gt; * &lt;p&gt; * Description: * 创建线程类的第一种方式: * 实现Runable接口 * &lt;/p&gt; * @author xianxian * @date 2019年7月17日 */ public class SaleTicket1 implements Runnable { \\t@Override \\tpublic void run() { \\t\\tfor (int i = 0; i &lt;= 100; i++) { \\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\"打印票号：\\" + i); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-17T15:06:02.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-创建线程类的三种方式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-17T15:06:02.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"148-Java-创建线程类的三种方式.md 第一种： package 创建线程类的三种方式; /** * * &lt;p&gt;Title: SaleTicket&lt;/p&gt; * &lt;p&gt; * Description: * 创建线程类的第一种方式: * 实现Runable接口 * &lt;/p&gt; * @author xianxian * @date 2019年7月17日 */ public class SaleTicket1 implements Runnable { \\t@Override \\tpublic void run() { \\t\\tfor (int i = 0; i &lt;= 100; i++) { \\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\"打印票号：\\" + i); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":2.42,"words":725},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/148-Java-创建线程类的三种方式.md","localizedDate":"2019年7月17日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--148-Java--ob6nf27az12b3ha166fns1dr8kb4a643a2yk.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">148-Java-创建线程类的三种方式.md</a></h1>\\n<p>第一种：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package 创建线程类的三种方式;\\n/**\\n * \\n* &lt;p&gt;Title: SaleTicket&lt;/p&gt;  \\n* &lt;p&gt;\\n* Description: \\n* 创建线程类的第一种方式:\\n* 实现Runable接口\\n* &lt;/p&gt;  \\n* @author xianxian \\n* @date 2019年7月17日\\n */\\npublic class SaleTicket1 implements Runnable {\\n\\n\\t@Override\\n\\tpublic void run() {\\n\\n\\t\\tfor (int i = 0; i &lt;= 100; i++) {\\n\\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\"打印票号：\\" + i);\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
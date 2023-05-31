const t=JSON.parse('{"key":"v-5e722a69","path":"/zh/programBlog/ServerSideLanguage/Java/java146.html","title":"Java-模拟多线程环境","lang":"zh-CN","frontmatter":{"title":"Java-模拟多线程环境","icon":"page","order":146,"author":"涎涎","date":"2019-07-17T10:48:58.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java146.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-模拟多线程环境"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java146.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-模拟多线程环境"}],["meta",{"property":"og:description","content":"146-Java-模拟多线程环境.md 示例代码： package 多线程一; /** * 打印数字的类 * &lt;p&gt;Title: PrintNumber&lt;/p&gt; * &lt;p&gt;Description: &lt;/p&gt; * @author xianxian * @date 2019年7月17日 */ public class PrintNumber implements Runnable{ \\tprivate int startNumber; \\tprivate int endNumber; \\t \\t/** \\t * \\t * &lt;p&gt;Title: print&lt;/p&gt; \\t * &lt;p&gt;Description: 打印数字的方法&lt;/p&gt; \\t */ \\tpublic void print() { \\t\\tfor(int i = this.startNumber;i &lt;= this.endNumber;i++) { \\t\\t\\tSystem.out.println(i); \\t\\t} \\t} \\tpublic PrintNumber(int startNumber, int endNumber) { \\t\\tthis.startNumber = startNumber; \\t\\tthis.endNumber = endNumber; \\t} \\tpublic int getStartNumber() { \\t\\treturn startNumber; \\t} \\tpublic void setStartNumber(int startNumber) { \\t\\tthis.startNumber = startNumber; \\t} \\tpublic int getEndNumber() { \\t\\treturn endNumber; \\t} \\tpublic void setEndNumber(int endNumber) { \\t\\tthis.endNumber = endNumber; \\t} \\t@Override \\tpublic void run() { \\t\\t// 当前类实现Runnable接口，就成咯一个线程类， \\t\\t//实现Runnable接口，必须实现接口中的run方法 \\t\\t//那么线程启动时会自动执行run方法 \\t\\tthis.print(); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T00:37:27.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-17T10:48:58.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T00:37:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-模拟多线程环境\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-17T10:48:58.000Z\\",\\"dateModified\\":\\"2023-05-31T00:37:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"146-Java-模拟多线程环境.md 示例代码： package 多线程一; /** * 打印数字的类 * &lt;p&gt;Title: PrintNumber&lt;/p&gt; * &lt;p&gt;Description: &lt;/p&gt; * @author xianxian * @date 2019年7月17日 */ public class PrintNumber implements Runnable{ \\tprivate int startNumber; \\tprivate int endNumber; \\t \\t/** \\t * \\t * &lt;p&gt;Title: print&lt;/p&gt; \\t * &lt;p&gt;Description: 打印数字的方法&lt;/p&gt; \\t */ \\tpublic void print() { \\t\\tfor(int i = this.startNumber;i &lt;= this.endNumber;i++) { \\t\\t\\tSystem.out.println(i); \\t\\t} \\t} \\tpublic PrintNumber(int startNumber, int endNumber) { \\t\\tthis.startNumber = startNumber; \\t\\tthis.endNumber = endNumber; \\t} \\tpublic int getStartNumber() { \\t\\treturn startNumber; \\t} \\tpublic void setStartNumber(int startNumber) { \\t\\tthis.startNumber = startNumber; \\t} \\tpublic int getEndNumber() { \\t\\treturn endNumber; \\t} \\tpublic void setEndNumber(int endNumber) { \\t\\tthis.endNumber = endNumber; \\t} \\t@Override \\tpublic void run() { \\t\\t// 当前类实现Runnable接口，就成咯一个线程类， \\t\\t//实现Runnable接口，必须实现接口中的run方法 \\t\\t//那么线程启动时会自动执行run方法 \\t\\tthis.print(); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685493447000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":5}]},"readingTime":{"minutes":1.65,"words":494},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/146-Java-模拟多线程环境.md","localizedDate":"2019年7月17日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--146-Java--y67p25cq53ddztqs4ay6tngr.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">146-Java-模拟多线程环境.md</a></h1>\\n<p><strong>示例代码：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package 多线程一;\\n/**\\n * 打印数字的类\\n* &lt;p&gt;Title: PrintNumber&lt;/p&gt;  \\n* &lt;p&gt;Description: &lt;/p&gt;  \\n* @author xianxian \\n* @date 2019年7月17日\\n */\\npublic class PrintNumber implements Runnable{\\n\\n\\tprivate int startNumber;\\n\\tprivate int endNumber;\\n\\t\\n\\t/**\\n\\t * \\n\\t * &lt;p&gt;Title: print&lt;/p&gt;  \\n\\t * &lt;p&gt;Description: 打印数字的方法&lt;/p&gt;\\n\\t */\\n\\tpublic void print() {\\n\\t\\tfor(int i = this.startNumber;i &lt;= this.endNumber;i++) {\\n\\t\\t\\tSystem.out.println(i);\\n\\t\\t}\\n\\t}\\n\\tpublic PrintNumber(int startNumber, int endNumber) {\\n\\t\\tthis.startNumber = startNumber;\\n\\t\\tthis.endNumber = endNumber;\\n\\t}\\n\\tpublic int getStartNumber() {\\n\\t\\treturn startNumber;\\n\\t}\\n\\tpublic void setStartNumber(int startNumber) {\\n\\t\\tthis.startNumber = startNumber;\\n\\t}\\n\\tpublic int getEndNumber() {\\n\\t\\treturn endNumber;\\n\\t}\\n\\tpublic void setEndNumber(int endNumber) {\\n\\t\\tthis.endNumber = endNumber;\\n\\t}\\n\\t@Override\\n\\tpublic void run() {\\n\\t\\t// 当前类实现Runnable接口，就成咯一个线程类，\\n\\t\\t//实现Runnable接口，必须实现接口中的run方法\\n\\t\\t//那么线程启动时会自动执行run方法\\n\\t\\tthis.print();\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

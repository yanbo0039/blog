const t=JSON.parse('{"key":"v-ffac4690","path":"/zh/programBlog/ServerSideLanguage/Java/java31.html","title":"Java中级测试题二-集合(5-5)","lang":"zh-CN","frontmatter":{"title":"Java中级测试题二-集合(5-5)","icon":"page","order":31,"author":"涎涎","date":"2019-06-16T22:13:28.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java31.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java中级测试题二-集合(5-5)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java31.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java中级测试题二-集合(5-5)"}],["meta",{"property":"og:description","content":"Java中级测试题二-集合(5-5) 1、请使用LinkedList来模拟一个队列(先进先出的特性): 1.1 拥有放入对象的方法void put(Object o) 1.2 取出对象的方法Object get() 1.3 判断队列当中是否为空的方法boolean isEmpty()；并且，编写测试代码，验证你的队列是否正确。 import java.util.LinkedList; public class Topic1 { \\t/* \\t * 1、请使用LinkedList来模拟一个队列(先进先出的特性): \\t * 1.1 拥有放入对象的方法void put(Object o) \\t * 1.2 取出对象的方法Object get() \\t * 1.3 判断队列当中是否为空的方法boolean isEmpty()； \\t * 并且，编写测试代码，验证你的队列是否正确。 \\t */ \\tprivate LinkedList&lt;String&gt; linkedList = new LinkedList&lt;String&gt;(); \\t//放的方法 \\tpublic void putpush(String str) { \\t\\tlinkedList.addLast(str); \\t} \\t//取的方法 \\tpublic String getAndRemove() { \\t\\treturn linkedList.pollFirst(); \\t} \\t//判断是否为空 \\tpublic boolean isEmpty() { \\t\\treturn linkedList.size() == 0; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"MyQueue [toString()=\\" + linkedList.toString() + \\"]\\"; \\t} \\t//假定此为测试类 \\tpublic static void main(String[] args) { \\t\\tTopic1 myQueue = new Topic1();//创建一个队列 \\t\\tmyQueue.putpush(\\"adf\\"); \\t\\tmyQueue.putpush(\\"12\\"); \\t\\tmyQueue.putpush(\\"45\\"); \\t\\tmyQueue.putpush(\\"3424\\"); \\t\\tmyQueue.putpush(\\"68768\\"); \\t\\tmyQueue.putpush(\\"6564\\"); \\t\\tSystem.out.println(myQueue.toString()); \\t\\twhile (!myQueue.isEmpty()) { \\t\\t\\tSystem.out.println(myQueue.getAndRemove()); \\t\\t} \\t\\tSystem.out.println(myQueue.isEmpty()); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:13:28.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中级测试题二-集合(5-5)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:13:28.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java中级测试题二-集合(5-5) 1、请使用LinkedList来模拟一个队列(先进先出的特性): 1.1 拥有放入对象的方法void put(Object o) 1.2 取出对象的方法Object get() 1.3 判断队列当中是否为空的方法boolean isEmpty()；并且，编写测试代码，验证你的队列是否正确。 import java.util.LinkedList; public class Topic1 { \\t/* \\t * 1、请使用LinkedList来模拟一个队列(先进先出的特性): \\t * 1.1 拥有放入对象的方法void put(Object o) \\t * 1.2 取出对象的方法Object get() \\t * 1.3 判断队列当中是否为空的方法boolean isEmpty()； \\t * 并且，编写测试代码，验证你的队列是否正确。 \\t */ \\tprivate LinkedList&lt;String&gt; linkedList = new LinkedList&lt;String&gt;(); \\t//放的方法 \\tpublic void putpush(String str) { \\t\\tlinkedList.addLast(str); \\t} \\t//取的方法 \\tpublic String getAndRemove() { \\t\\treturn linkedList.pollFirst(); \\t} \\t//判断是否为空 \\tpublic boolean isEmpty() { \\t\\treturn linkedList.size() == 0; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"MyQueue [toString()=\\" + linkedList.toString() + \\"]\\"; \\t} \\t//假定此为测试类 \\tpublic static void main(String[] args) { \\t\\tTopic1 myQueue = new Topic1();//创建一个队列 \\t\\tmyQueue.putpush(\\"adf\\"); \\t\\tmyQueue.putpush(\\"12\\"); \\t\\tmyQueue.putpush(\\"45\\"); \\t\\tmyQueue.putpush(\\"3424\\"); \\t\\tmyQueue.putpush(\\"68768\\"); \\t\\tmyQueue.putpush(\\"6564\\"); \\t\\tSystem.out.println(myQueue.toString()); \\t\\twhile (!myQueue.isEmpty()) { \\t\\t\\tSystem.out.println(myQueue.getAndRemove()); \\t\\t} \\t\\tSystem.out.println(myQueue.isEmpty()); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":3.76,"words":1129},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/31-Java中级测试题二-集合(5-5).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java中级测试题二-集合(5-5)</h1>\\n<p>1、请使用LinkedList来模拟一个队列(先进先出的特性):\\n1.1 拥有放入对象的方法void put(Object o)\\n1.2 取出对象的方法Object get()\\n1.3 判断队列当中是否为空的方法boolean isEmpty()；并且，编写测试代码，验证你的队列是否正确。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>import java.util.LinkedList;\\npublic class Topic1 {\\n\\t/*\\n\\t * 1、请使用LinkedList来模拟一个队列(先进先出的特性): \\n\\t *  1.1 拥有放入对象的方法void put(Object o) \\n\\t *  1.2  取出对象的方法Object get() \\n\\t *  1.3 判断队列当中是否为空的方法boolean isEmpty()；\\n\\t *  并且，编写测试代码，验证你的队列是否正确。\\n\\t */\\n\\tprivate LinkedList&lt;String&gt; linkedList = new LinkedList&lt;String&gt;();\\n\\t//放的方法\\n\\tpublic void putpush(String str) {\\n\\t\\tlinkedList.addLast(str);\\n\\t}\\n\\t//取的方法\\n\\tpublic String getAndRemove() {\\n\\t\\treturn linkedList.pollFirst();\\n\\t}\\n\\t//判断是否为空\\n\\tpublic boolean isEmpty() {\\n\\t\\treturn linkedList.size() == 0;\\n\\t}\\n\\t@Override\\n\\tpublic String toString() {\\n\\t\\treturn \\"MyQueue [toString()=\\" + linkedList.toString() + \\"]\\";\\n\\t}\\n\\t//假定此为测试类\\n\\tpublic static void main(String[] args) {\\n\\t\\tTopic1 myQueue = new Topic1();//创建一个队列\\n\\t\\tmyQueue.putpush(\\"adf\\");\\n\\t\\tmyQueue.putpush(\\"12\\");\\n\\t\\tmyQueue.putpush(\\"45\\");\\n\\t\\tmyQueue.putpush(\\"3424\\");\\n\\t\\tmyQueue.putpush(\\"68768\\");\\n\\t\\tmyQueue.putpush(\\"6564\\");\\n\\t\\tSystem.out.println(myQueue.toString());\\n\\t\\twhile (!myQueue.isEmpty()) {\\n\\t\\t\\tSystem.out.println(myQueue.getAndRemove());\\n\\t\\t}\\n\\t\\tSystem.out.println(myQueue.isEmpty());\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

const t=JSON.parse('{"key":"v-3b9a71c6","path":"/zh/programBlog/ServerSideLanguage/Java/125-Java-%E5%AF%B9ArrayList%E7%9A%84%E8%BF%AD%E4%BB%A3%E8%AE%BF%E9%97%AE%E6%96%B9%E6%B3%95%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F.html","title":"Java-对ArrayList的迭代访问方法有哪些？","lang":"zh-CN","frontmatter":{"title":"Java-对ArrayList的迭代访问方法有哪些？","icon":"page","order":125,"author":"涎涎","date":"2019-07-13T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-对ArrayList的迭代访问方法有哪些？"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/125-Java-%E5%AF%B9ArrayList%E7%9A%84%E8%BF%AD%E4%BB%A3%E8%AE%BF%E9%97%AE%E6%96%B9%E6%B3%95%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-对ArrayList的迭代访问方法有哪些？"}],["meta",{"property":"og:description","content":"125-Java-对ArrayList的迭代访问方法有哪些？.md 示例代码如下： package List集合; import java.util.ArrayList; import java.util.Arrays; import java.util.Iterator; import java.util.List; public class TestArrayListIterator { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t * 对ArrayList的迭代访问方法有哪些？ \\t\\t * 1. for循环 \\t\\t * 2. Iterator迭代器 \\t\\t * 3. 直接调用java底层API中的方法访问（两种） \\t\\t */ \\t\\t \\t\\tList&lt;String&gt; list = new ArrayList&lt;&gt;(); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(\\"777c\\"); \\t\\tlist.add(\\"123\\"); \\t\\tlist.add(\\"456\\"); \\t\\tlist.add(\\"aaa\\"); \\t\\tlist.add(\\"aqqc\\"); \\t\\tlist.add(null); \\t\\tlist.add(null); \\t\\t \\t\\t//1.for循环 \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(\\"list for:\\" + list.get(i)); \\t\\t} \\t\\t//2.Iterator迭代器 \\t\\t//此处的数据类型与之前的List数据类型需要保持一致 \\t\\tIterator&lt;String&gt; it = list.iterator(); \\t\\twhile(it.hasNext()) {//index = 0 &lt; list.size() index++ \\t\\t\\tSystem.out.println(\\"list iterator: \\" + it.next()); \\t\\t} \\t\\t//3. 利用底层API：toArray() \\t\\tSystem.out.println(Arrays.toString(list.toArray())); \\t\\tSystem.out.println(\\"===========\\"); \\t\\t//4. 利用底层API: toString() \\t\\tSystem.out.println(list.toString()); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-对ArrayList的迭代访问方法有哪些？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"125-Java-对ArrayList的迭代访问方法有哪些？.md 示例代码如下： package List集合; import java.util.ArrayList; import java.util.Arrays; import java.util.Iterator; import java.util.List; public class TestArrayListIterator { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t * 对ArrayList的迭代访问方法有哪些？ \\t\\t * 1. for循环 \\t\\t * 2. Iterator迭代器 \\t\\t * 3. 直接调用java底层API中的方法访问（两种） \\t\\t */ \\t\\t \\t\\tList&lt;String&gt; list = new ArrayList&lt;&gt;(); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(\\"777c\\"); \\t\\tlist.add(\\"123\\"); \\t\\tlist.add(\\"456\\"); \\t\\tlist.add(\\"aaa\\"); \\t\\tlist.add(\\"aqqc\\"); \\t\\tlist.add(null); \\t\\tlist.add(null); \\t\\t \\t\\t//1.for循环 \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(\\"list for:\\" + list.get(i)); \\t\\t} \\t\\t//2.Iterator迭代器 \\t\\t//此处的数据类型与之前的List数据类型需要保持一致 \\t\\tIterator&lt;String&gt; it = list.iterator(); \\t\\twhile(it.hasNext()) {//index = 0 &lt; list.size() index++ \\t\\t\\tSystem.out.println(\\"list iterator: \\" + it.next()); \\t\\t} \\t\\t//3. 利用底层API：toArray() \\t\\tSystem.out.println(Arrays.toString(list.toArray())); \\t\\tSystem.out.println(\\"===========\\"); \\t\\t//4. 利用底层API: toString() \\t\\tSystem.out.println(list.toString()); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":1.17,"words":350},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/125-Java-对ArrayList的迭代访问方法有哪些？.md","localizedDate":"2019年7月13日","excerpt":"<!-- more -->\\n<h1> 125-Java-对ArrayList的迭代访问方法有哪些？.md</h1>\\n<figure><img src=\\"/assets/Java_125_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p><strong>示例代码如下：</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package List集合;\\n\\nimport java.util.ArrayList;\\nimport java.util.Arrays;\\nimport java.util.Iterator;\\nimport java.util.List;\\n\\npublic class TestArrayListIterator {\\n\\n\\tpublic static void main(String[] args) {\\n\\n\\t\\t/**\\n\\t\\t * 对ArrayList的迭代访问方法有哪些？\\n\\t\\t * 1. for循环\\n\\t\\t * 2. Iterator迭代器\\n\\t\\t * 3. 直接调用java底层API中的方法访问（两种）\\n\\t\\t */\\n\\t\\t\\n\\t\\tList&lt;String&gt; list = new ArrayList&lt;&gt;();\\n\\t\\tlist.add(\\"abc\\");\\n\\t\\tlist.add(\\"777c\\");\\n\\t\\tlist.add(\\"123\\");\\n\\t\\tlist.add(\\"456\\");\\n\\t\\tlist.add(\\"aaa\\");\\n\\t\\tlist.add(\\"aqqc\\");\\n\\t\\tlist.add(null);\\n\\t\\tlist.add(null);\\n\\t\\t\\n\\t\\t//1.for循环\\n\\t\\tfor (int i = 0; i &lt; list.size(); i++) {\\n\\t\\t\\tSystem.out.println(\\"list for:\\" + list.get(i));\\n\\t\\t}\\n\\t\\t//2.Iterator迭代器\\n\\t\\t//此处的数据类型与之前的List数据类型需要保持一致\\n\\t\\tIterator&lt;String&gt; it = list.iterator();\\n\\t\\twhile(it.hasNext()) {//index = 0 &lt; list.size() index++\\n\\t\\t\\tSystem.out.println(\\"list iterator: \\" + it.next());\\n\\t\\t}\\n\\t\\t//3. 利用底层API：toArray()\\n\\t\\tSystem.out.println(Arrays.toString(list.toArray()));\\n\\t\\tSystem.out.println(\\"===========\\");\\n\\t\\t//4. 利用底层API: toString()\\n\\t\\tSystem.out.println(list.toString());\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

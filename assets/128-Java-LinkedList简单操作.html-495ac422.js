const t=JSON.parse('{"key":"v-6f060dc0","path":"/zh/programBlog/ServerSideLanguage/Java/128-Java-LinkedList%E7%AE%80%E5%8D%95%E6%93%8D%E4%BD%9C.html","title":"Java-LinkedList简单操作","lang":"zh-CN","frontmatter":{"title":"Java-LinkedList简单操作","icon":"page","order":128,"author":"涎涎","date":"2019-07-13T14:04:45.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-LinkedList简单操作"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/128-Java-LinkedList%E7%AE%80%E5%8D%95%E6%93%8D%E4%BD%9C.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-LinkedList简单操作"}],["meta",{"property":"og:description","content":"128-Java-LinkedList简单操作.md package List集合; import java.util.LinkedList; public class TestLinkedList { \\tpublic static void main(String[] args) { \\t\\tLinkedList&lt;String&gt; list = new LinkedList&lt;&gt;(); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(\\"777c\\"); \\t\\tlist.add(\\"123\\"); \\t\\tlist.add(\\"456\\"); \\t\\tlist.add(\\"aaa\\"); \\t\\tlist.add(\\"aqqc\\"); \\t\\tlist.add(null); \\t\\t \\t\\tSystem.out.println(\\"list.getFist(): \\" + list.getFirst()); \\t\\tSystem.out.println(\\"list.getLast(): \\" + list.getLast()); \\t\\tSystem.out.println(\\"=====================\\"); \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-13T14:04:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-LinkedList简单操作\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-13T14:04:45.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"128-Java-LinkedList简单操作.md package List集合; import java.util.LinkedList; public class TestLinkedList { \\tpublic static void main(String[] args) { \\t\\tLinkedList&lt;String&gt; list = new LinkedList&lt;&gt;(); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(\\"777c\\"); \\t\\tlist.add(\\"123\\"); \\t\\tlist.add(\\"456\\"); \\t\\tlist.add(\\"aaa\\"); \\t\\tlist.add(\\"aqqc\\"); \\t\\tlist.add(null); \\t\\t \\t\\tSystem.out.println(\\"list.getFist(): \\" + list.getFirst()); \\t\\tSystem.out.println(\\"list.getLast(): \\" + list.getLast()); \\t\\tSystem.out.println(\\"=====================\\"); \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":0.71,"words":213},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/128-Java-LinkedList简单操作.md","localizedDate":"2019年7月13日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--128-Java-LinkedList-tv34ag17c801gvdtf.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">128-Java-LinkedList简单操作.md</a></h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package List集合;\\n\\nimport java.util.LinkedList;\\n\\npublic class TestLinkedList {\\n\\n\\tpublic static void main(String[] args) {\\n\\n\\t\\tLinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();\\n\\t\\tlist.add(\\"abc\\");\\n\\t\\tlist.add(\\"777c\\");\\n\\t\\tlist.add(\\"123\\");\\n\\t\\tlist.add(\\"456\\");\\n\\t\\tlist.add(\\"aaa\\");\\n\\t\\tlist.add(\\"aqqc\\");\\n\\t\\tlist.add(null);\\n\\t\\t\\n\\t\\tSystem.out.println(\\"list.getFist(): \\" + list.getFirst());\\n\\t\\tSystem.out.println(\\"list.getLast(): \\" + list.getLast());\\n\\t\\tSystem.out.println(\\"=====================\\");\\n\\t\\tfor (int i = 0; i &lt; list.size(); i++) {\\n\\t\\t\\tSystem.out.println(list.get(i));\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

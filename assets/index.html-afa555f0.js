const t=JSON.parse('{"key":"v-7b59ff03","path":"/zh/java127/","title":"Java-List集合的双向遍历","lang":"zh-CN","frontmatter":{"title":"Java-List集合的双向遍历","icon":"page","order":127,"author":"涎涎","date":"2019-07-13T13:46:55.000Z","isOriginal":true,"permalinkPattern":"java127","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-List集合的双向遍历"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java127/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-List集合的双向遍历"}],["meta",{"property":"og:description","content":"127-Java-List集合的双向遍历.md package List集合; import java.util.ArrayList; import java.util.List; import java.util.ListIterator; public class TestArrayListListIterator { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t * 双向遍历，必须先自前往后遍历过，然后才能自后往前 \\t\\t */ \\t\\tList&lt;String&gt; list = new ArrayList&lt;&gt;(); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(\\"777c\\"); \\t\\tlist.add(\\"123\\"); \\t\\tlist.add(\\"456\\"); \\t\\tlist.add(\\"aaa\\"); \\t\\tlist.add(\\"aqqc\\"); \\t\\tlist.add(null); \\t\\t \\t\\tListIterator&lt;String&gt; it = list.listIterator(); \\t\\t \\t\\twhile(it.hasNext()) { \\t\\t\\tSystem.out.println(\\"it first while: \\" + it.next()); \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"======================\\"); \\t\\t \\t\\twhile(it.hasPrevious())//因为上面那个循环结束之后，指针在集合的最后，所以这个时候可以自后往前迭代访问集合 \\t\\t{ \\t\\t\\tSystem.out.println(\\"it second while\\"+it.previous()); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-13T13:46:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-List集合的双向遍历\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-13T13:46:55.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"127-Java-List集合的双向遍历.md package List集合; import java.util.ArrayList; import java.util.List; import java.util.ListIterator; public class TestArrayListListIterator { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t * 双向遍历，必须先自前往后遍历过，然后才能自后往前 \\t\\t */ \\t\\tList&lt;String&gt; list = new ArrayList&lt;&gt;(); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(\\"777c\\"); \\t\\tlist.add(\\"123\\"); \\t\\tlist.add(\\"456\\"); \\t\\tlist.add(\\"aaa\\"); \\t\\tlist.add(\\"aqqc\\"); \\t\\tlist.add(null); \\t\\t \\t\\tListIterator&lt;String&gt; it = list.listIterator(); \\t\\t \\t\\twhile(it.hasNext()) { \\t\\t\\tSystem.out.println(\\"it first while: \\" + it.next()); \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"======================\\"); \\t\\t \\t\\twhile(it.hasPrevious())//因为上面那个循环结束之后，指针在集合的最后，所以这个时候可以自后往前迭代访问集合 \\t\\t{ \\t\\t\\tSystem.out.println(\\"it second while\\"+it.previous()); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":0.99,"words":296},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/127-Java-List集合的双向遍历.md","localizedDate":"2019年7月13日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--127-Java-List-856v05ao1aoe2727dqn7dzb1a.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">127-Java-List集合的双向遍历.md</a></h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package List集合;\\n\\nimport java.util.ArrayList;\\nimport java.util.List;\\nimport java.util.ListIterator;\\n\\npublic class TestArrayListListIterator {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\t/**\\n\\t\\t * 双向遍历，必须先自前往后遍历过，然后才能自后往前\\n\\t\\t */\\n\\t\\tList&lt;String&gt; list = new ArrayList&lt;&gt;();\\n\\n\\t\\tlist.add(\\"abc\\");\\n\\t\\tlist.add(\\"777c\\");\\n\\t\\tlist.add(\\"123\\");\\n\\t\\tlist.add(\\"456\\");\\n\\t\\tlist.add(\\"aaa\\");\\n\\t\\tlist.add(\\"aqqc\\");\\n\\t\\tlist.add(null);\\n\\t\\t\\n\\t\\tListIterator&lt;String&gt; it = list.listIterator();\\n\\t\\t\\n\\t\\twhile(it.hasNext()) {\\n\\t\\t\\tSystem.out.println(\\"it first while: \\" + it.next());\\n\\t\\t}\\n\\t\\t\\n\\t\\tSystem.out.println(\\"======================\\");\\n\\t\\t\\n\\t\\twhile(it.hasPrevious())//因为上面那个循环结束之后，指针在集合的最后，所以这个时候可以自后往前迭代访问集合\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"it second while\\"+it.previous());\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
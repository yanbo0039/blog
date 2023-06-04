const t=JSON.parse('{"key":"v-22b88cac","path":"/zh/programBlog/ServerSideLanguage/Java/java132.html","title":"Java-TreeSet集合的特点","lang":"zh-CN","frontmatter":{"title":"Java-TreeSet集合的特点","icon":"page","order":132,"author":"涎涎","date":"2019-07-15T09:31:12.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java132.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-TreeSet集合的特点"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java132.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-TreeSet集合的特点"}],["meta",{"property":"og:description","content":"132-Java-TreeSet集合的特点.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 package Set集合; import java.util.Set; import java.util.TreeSet; public class TestTreeSet { \\tpublic static void main(String[] args) { \\t\\t//TreeSet会给元素排序 \\t\\t \\t\\t/** \\t\\t * TreeSet的特点： \\t\\t * 1. 会排序，有大小顺序 \\t\\t * 2. 不允许存放null类型数据 \\t\\t * \\t\\t */ \\t\\tSet&lt;Integer&gt; s = new TreeSet&lt;&gt;(); \\t\\t \\t\\ts.add(100); \\t\\ts.add(56); \\t\\ts.add(34); \\t\\ts.add(8); \\t\\t \\t\\tSystem.out.println(s.toString()); \\t\\t \\t\\tSet&lt;String&gt; s2 = new TreeSet&lt;&gt;(); \\t\\ts2.add(\\"a63c\\"); \\t\\ts2.add(\\"a400bc\\"); \\t\\t//s2.add(null); \\t\\ts2.add(\\"a7c\\"); \\t\\t//s2.add(null); \\t\\ts2.add(\\"a1c\\"); \\t\\tSystem.out.println(s2.toString()); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-03T23:41:08.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-15T09:31:12.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-03T23:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-TreeSet集合的特点\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-15T09:31:12.000Z\\",\\"dateModified\\":\\"2023-06-03T23:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"132-Java-TreeSet集合的特点.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 package Set集合; import java.util.Set; import java.util.TreeSet; public class TestTreeSet { \\tpublic static void main(String[] args) { \\t\\t//TreeSet会给元素排序 \\t\\t \\t\\t/** \\t\\t * TreeSet的特点： \\t\\t * 1. 会排序，有大小顺序 \\t\\t * 2. 不允许存放null类型数据 \\t\\t * \\t\\t */ \\t\\tSet&lt;Integer&gt; s = new TreeSet&lt;&gt;(); \\t\\t \\t\\ts.add(100); \\t\\ts.add(56); \\t\\ts.add(34); \\t\\ts.add(8); \\t\\t \\t\\tSystem.out.println(s.toString()); \\t\\t \\t\\tSet&lt;String&gt; s2 = new TreeSet&lt;&gt;(); \\t\\ts2.add(\\"a63c\\"); \\t\\ts2.add(\\"a400bc\\"); \\t\\t//s2.add(null); \\t\\ts2.add(\\"a7c\\"); \\t\\t//s2.add(null); \\t\\ts2.add(\\"a1c\\"); \\t\\tSystem.out.println(s2.toString()); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685835668000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":8}]},"readingTime":{"minutes":0.78,"words":234},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/132-Java-TreeSet集合的特点.md","localizedDate":"2019年7月15日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--132-Java-TreeSet-8001ap198ag7goyv008m.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">132-Java-TreeSet集合的特点.md</a></h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package Set集合;\\n\\nimport java.util.Set;\\nimport java.util.TreeSet;\\n\\npublic class TestTreeSet {\\n\\n\\tpublic static void main(String[] args) {\\n\\n\\t\\t//TreeSet会给元素排序\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * TreeSet的特点：\\n\\t\\t * 1. 会排序，有大小顺序\\n\\t\\t * 2. 不允许存放null类型数据\\n\\t\\t * \\n\\t\\t */\\n\\t\\tSet&lt;Integer&gt; s = new TreeSet&lt;&gt;();\\n\\t\\t\\n\\t\\ts.add(100);\\n\\t\\ts.add(56);\\n\\t\\ts.add(34);\\n\\t\\ts.add(8);\\n\\t\\t\\n\\t\\tSystem.out.println(s.toString());\\n\\t\\t\\n\\t\\tSet&lt;String&gt; s2 = new TreeSet&lt;&gt;();\\n\\t\\ts2.add(\\"a63c\\");\\n\\t\\ts2.add(\\"a400bc\\");\\n\\t\\t//s2.add(null);\\n\\t\\ts2.add(\\"a7c\\");\\n\\t\\t//s2.add(null);\\n\\t\\ts2.add(\\"a1c\\");\\n\\t\\tSystem.out.println(s2.toString());\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

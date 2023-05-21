const t=JSON.parse('{"key":"v-73786076","path":"/zh/programBlog/ServerSideLanguage/Java/178-Java-main%E6%96%B9%E6%B3%95%E4%B8%AD%E8%B0%83%E7%94%A8%E9%9D%9Estatic%E6%96%B9%E6%B3%95.html","title":"Java-main方法中调用非static方法","lang":"zh-CN","frontmatter":{"title":"Java-main方法中调用非static方法","icon":"page","order":178,"author":"涎涎","date":"2019-11-12T15:43:52.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-main方法中调用非static方法"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/178-Java-main%E6%96%B9%E6%B3%95%E4%B8%AD%E8%B0%83%E7%94%A8%E9%9D%9Estatic%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-main方法中调用非static方法"}],["meta",{"property":"og:description","content":"178-Java-main方法中调用非static方法.md package test; import java.util.Arrays; public class Test { \\t/** \\t * \\t * &lt;p&gt;Title: theFirstQuestion&lt;/p&gt; \\t * &lt;p&gt; \\t *\\tDescription: \\t * 1. 110元，洗剪吹31元，可以多少次洗剪吹?最后还剩多少? \\t * &lt;/p&gt; \\t */ \\tpublic void theFirstQuestion(Integer money,Integer haircut) { \\t\\tSystem.out.println(\\"共有:\\" + money + \\"元\\"); \\t\\tSystem.out.println(\\"洗剪吹一次: \\" + haircut + \\"元\\"); \\t\\tSystem.out.println(\\"可以洗剪吹: \\" + money/haircut + \\" 次\\"); \\t\\tSystem.out.println(\\"最后还剩: \\" + money%haircut + \\" 次\\"); \\t} \\t \\t/** \\t * \\t * &lt;p&gt;Title: main&lt;/p&gt; \\t * &lt;p&gt; \\t *\\tDescription: \\t * 测试功能入口 \\t * &lt;/p&gt; \\t * @param args \\t */ \\tpublic static void main(String[] args) { \\t\\tTest test = new Test(); \\t\\ttest.theFirstQuestion(110, 31); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-11-12T15:43:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-main方法中调用非static方法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-12T15:43:52.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"178-Java-main方法中调用非static方法.md package test; import java.util.Arrays; public class Test { \\t/** \\t * \\t * &lt;p&gt;Title: theFirstQuestion&lt;/p&gt; \\t * &lt;p&gt; \\t *\\tDescription: \\t * 1. 110元，洗剪吹31元，可以多少次洗剪吹?最后还剩多少? \\t * &lt;/p&gt; \\t */ \\tpublic void theFirstQuestion(Integer money,Integer haircut) { \\t\\tSystem.out.println(\\"共有:\\" + money + \\"元\\"); \\t\\tSystem.out.println(\\"洗剪吹一次: \\" + haircut + \\"元\\"); \\t\\tSystem.out.println(\\"可以洗剪吹: \\" + money/haircut + \\" 次\\"); \\t\\tSystem.out.println(\\"最后还剩: \\" + money%haircut + \\" 次\\"); \\t} \\t \\t/** \\t * \\t * &lt;p&gt;Title: main&lt;/p&gt; \\t * &lt;p&gt; \\t *\\tDescription: \\t * 测试功能入口 \\t * &lt;/p&gt; \\t * @param args \\t */ \\tpublic static void main(String[] args) { \\t\\tTest test = new Test(); \\t\\ttest.theFirstQuestion(110, 31); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/178-Java-main方法中调用非static方法.md","localizedDate":"2019年11月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--178-Java-mainstatic-ix83a1404aha6692bia1834cpg7hucuc.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">178-Java-main方法中调用非static方法.md</a></h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package test;\\n\\nimport java.util.Arrays;\\n\\npublic class Test {\\n\\n\\t/**\\n\\t * \\n\\t * &lt;p&gt;Title: theFirstQuestion&lt;/p&gt;  \\n\\t * &lt;p&gt;\\n\\t *\\tDescription: \\n\\t *  1. 110元，洗剪吹31元，可以多少次洗剪吹?最后还剩多少?\\n\\t * &lt;/p&gt;\\n\\t */\\n\\tpublic void theFirstQuestion(Integer money,Integer haircut) {\\n\\t\\tSystem.out.println(\\"共有:\\" + money + \\"元\\");\\n\\t\\tSystem.out.println(\\"洗剪吹一次: \\" + haircut + \\"元\\");\\n\\t\\tSystem.out.println(\\"可以洗剪吹: \\" + money/haircut +  \\" 次\\");\\n\\t\\tSystem.out.println(\\"最后还剩: \\" + money%haircut +  \\" 次\\");\\n\\t}\\n\\t\\n\\t/**\\n\\t * \\n\\t * &lt;p&gt;Title: main&lt;/p&gt;  \\n\\t * &lt;p&gt;\\n\\t *\\tDescription: \\n\\t *  测试功能入口\\n\\t * &lt;/p&gt; \\n\\t * @param args\\n\\t */\\n\\tpublic static void main(String[] args) {\\n\\t\\tTest test = new Test();\\n\\t\\ttest.theFirstQuestion(110, 31);\\n\\t}\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

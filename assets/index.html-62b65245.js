const t=JSON.parse('{"key":"v-7b5a1988","path":"/zh/java199/","title":"Java面向对象高级特性-封装-练习题","lang":"zh-CN","frontmatter":{"title":"Java面向对象高级特性-封装-练习题","icon":"page","order":199,"author":"涎涎","date":"2023-01-05T16:59:34.000Z","isOriginal":true,"permalinkPattern":"java199","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java面向对象高级特性-封装-练习题"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java199/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java面向对象高级特性-封装-练习题"}],["meta",{"property":"og:description","content":"199-Java面向对象高级特性-封装-练习题.md 创建一个球员类，并且该类最多只允许创建十一个对象 package com.tencent.chapter07.封装.练习; /** * &lt;p&gt;Title: Players&lt;/p&gt; * &lt;p&gt; * Description: * * 1、创建一个球员类，并且该类最多只允许创建十一个对象。提示利用 static 和 封装性来完成。 [必做题] \\t 类图如下： \\t 效果如下： * &lt;/p&gt; * @author xianxian * @date 2023年1月4日 */ public class Players { \\t//变量：统计球员创建的个数 \\t\\tprivate static int sum; \\t\\t \\t\\t//构造函数 \\t\\tprivate Players() \\t\\t{ \\t\\t\\t \\t\\t} \\t\\t \\t\\t//创建球员的方法 \\t\\tpublic static Players create() \\t\\t{ \\t\\t\\tif(sum &lt; 11) \\t\\t\\t{ \\t\\t\\t\\tPlayers players = new Players(); \\t\\t\\t\\tSystem.out.println(\\"创建了一个对象\\"); \\t\\t\\t\\tsum++; \\t\\t\\t\\t \\t\\t\\t\\treturn players; \\t\\t\\t} \\t\\t\\telse \\t\\t\\t{ \\t\\t\\t\\tSystem.out.println(\\"对不起，已经创建了11个对象，不能再创建对象了!!\\"); \\t\\t\\t\\t \\t\\t\\t\\treturn null; \\t\\t\\t} \\t\\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-05T16:59:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java面向对象高级特性-封装-练习题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-05T16:59:34.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"199-Java面向对象高级特性-封装-练习题.md 创建一个球员类，并且该类最多只允许创建十一个对象 package com.tencent.chapter07.封装.练习; /** * &lt;p&gt;Title: Players&lt;/p&gt; * &lt;p&gt; * Description: * * 1、创建一个球员类，并且该类最多只允许创建十一个对象。提示利用 static 和 封装性来完成。 [必做题] \\t 类图如下： \\t 效果如下： * &lt;/p&gt; * @author xianxian * @date 2023年1月4日 */ public class Players { \\t//变量：统计球员创建的个数 \\t\\tprivate static int sum; \\t\\t \\t\\t//构造函数 \\t\\tprivate Players() \\t\\t{ \\t\\t\\t \\t\\t} \\t\\t \\t\\t//创建球员的方法 \\t\\tpublic static Players create() \\t\\t{ \\t\\t\\tif(sum &lt; 11) \\t\\t\\t{ \\t\\t\\t\\tPlayers players = new Players(); \\t\\t\\t\\tSystem.out.println(\\"创建了一个对象\\"); \\t\\t\\t\\tsum++; \\t\\t\\t\\t \\t\\t\\t\\treturn players; \\t\\t\\t} \\t\\t\\telse \\t\\t\\t{ \\t\\t\\t\\tSystem.out.println(\\"对不起，已经创建了11个对象，不能再创建对象了!!\\"); \\t\\t\\t\\t \\t\\t\\t\\treturn null; \\t\\t\\t} \\t\\t} }"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/199-Java面向对象高级特性-封装-练习题.md","localizedDate":"2023年1月5日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--199-Java---592pj06c1hyidw73e892epj1btoag48m3cpeq8chufioo.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">199-Java面向对象高级特性-封装-练习题.md</a></h1>\\n<h4> 创建一个球员类，并且该类最多只允许创建十一个对象</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter07.封装.练习;\\n\\n/**\\n * &lt;p&gt;Title: Players&lt;/p&gt;  \\n * &lt;p&gt;\\n *    Description: \\n *     * 1、创建一个球员类，并且该类最多只允许创建十一个对象。提示利用 static 和 封装性来完成。  [必做题]\\n\\t   类图如下：\\n\\t  效果如下：\\n * &lt;/p&gt;  \\n * @author xianxian \\n * @date 2023年1月4日\\n */\\npublic class Players {\\n\\t//变量：统计球员创建的个数\\n\\t\\tprivate static int sum;\\n\\t\\t\\n\\t\\t//构造函数\\n\\t\\tprivate Players()\\n\\t\\t{\\n\\t\\t\\t\\n\\t\\t}\\n\\t\\t\\n\\t\\t//创建球员的方法\\n\\t\\tpublic static Players create()\\n\\t\\t{\\n\\t\\t\\tif(sum &lt; 11)\\n\\t\\t\\t{\\n\\t\\t\\t\\tPlayers players = new Players();\\n\\t\\t\\t\\tSystem.out.println(\\"创建了一个对象\\");\\n\\t\\t\\t\\tsum++;\\n\\t\\t\\t\\t\\n\\t\\t\\t\\treturn players;\\n\\t\\t\\t}\\n\\t\\t\\telse\\n\\t\\t\\t{\\n\\t\\t\\t\\tSystem.out.println(\\"对不起，已经创建了11个对象，不能再创建对象了!!\\");\\n\\t\\t\\t\\t\\n\\t\\t\\t\\treturn null;\\n\\t\\t\\t}\\n\\t\\t}\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
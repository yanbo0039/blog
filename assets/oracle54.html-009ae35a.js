const e=JSON.parse('{"key":"v-ba449124","path":"/zh/programBlog/Database/Oracle/oracle54.html","title":"Oracle-SQL开发 —— 高级子查询","lang":"zh-CN","frontmatter":{"title":"Oracle-SQL开发 —— 高级子查询","icon":"page","order":54,"author":"涎涎","date":"2023-01-20T14:37:41.000Z","isOriginal":true,"permalinkPattern":"programBlog/Database/Oracle/oracle54.html","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-SQL开发 —— 高级子查询"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/oracle54.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-SQL开发 —— 高级子查询"}],["meta",{"property":"og:description","content":"54-Oracle-SQL开发 —— 高级子查询.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 概念 相关子查询的执行过程： 1.取得父查询的候选行； 2.用候选行被子查询引用列的值执行子查询； 3.用来自子查询的值确认或取消候选行； 4.重复步骤1、2、3，直到父查询中无剩余的候选行。 EXISTS和NOT EXISTS操作符 相关子查询还可使用EXISTS和 NOT EXISTS操作符来进行操 作 EXISTS判断是否“存在”，具体操作如下： 子查询中如果有记录找到，子查询语句不会继续执行， 返回值为TRUE； 子查询中如果到表的末尾也没有记录找到，返回值为 FALSE。 EXISTS 子查询并没有确切记录返回，只判断是否有记录存 在，而且只要找到相关记录，子查询就不需要再执行，然后 再进行下面的操作。这样大大提高了语句的执行效率。 NOT EXISTS正好相反，判断子查询是否没有返回值。如果没 有返回值，表达式为真，如果找到一条返回值，则为假"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T05:58:29.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2023-01-20T14:37:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T05:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-SQL开发 —— 高级子查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-20T14:37:41.000Z\\",\\"dateModified\\":\\"2023-06-02T05:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"54-Oracle-SQL开发 —— 高级子查询.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 概念 相关子查询的执行过程： 1.取得父查询的候选行； 2.用候选行被子查询引用列的值执行子查询； 3.用来自子查询的值确认或取消候选行； 4.重复步骤1、2、3，直到父查询中无剩余的候选行。 EXISTS和NOT EXISTS操作符 相关子查询还可使用EXISTS和 NOT EXISTS操作符来进行操 作 EXISTS判断是否“存在”，具体操作如下： 子查询中如果有记录找到，子查询语句不会继续执行， 返回值为TRUE； 子查询中如果到表的末尾也没有记录找到，返回值为 FALSE。 EXISTS 子查询并没有确切记录返回，只判断是否有记录存 在，而且只要找到相关记录，子查询就不需要再执行，然后 再进行下面的操作。这样大大提高了语句的执行效率。 NOT EXISTS正好相反，判断子查询是否没有返回值。如果没 有返回值，表达式为真，如果找到一条返回值，则为假"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685685509000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":4}]},"readingTime":{"minutes":6.03,"words":1808},"filePathRelative":"zh/programBlog/Database/Oracle/54-Oracle-SQL开发 —— 高级子查询.md","localizedDate":"2023年1月20日","excerpt":"<!-- more -->\\n<h1> 54-Oracle-SQL开发 —— <a href=\\"http://xn--i8ss60alxrf9lbur.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">高级子查询.md</a></h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h4> 概念</h4>\\n<ul>\\n<li>\\n<p>相关子查询的执行过程：</p>\\n<ul>\\n<li>1.取得父查询的候选行；</li>\\n<li>2.用候选行被子查询引用列的值执行子查询；</li>\\n<li>3.用来自子查询的值确认或取消候选行；</li>\\n<li>4.重复步骤1、2、3，直到父查询中无剩余的候选行。</li>\\n</ul>\\n</li>\\n<li>\\n<p>EXISTS和NOT EXISTS操作符</p>\\n<ul>\\n<li>相关子查询还可使用EXISTS和 NOT EXISTS操作符来进行操\\n作</li>\\n</ul>\\n</li>\\n<li>\\n<p>EXISTS判断是否“存在”，具体操作如下：</p>\\n<ul>\\n<li>子查询中如果有记录找到，子查询语句不会继续执行，\\n返回值为TRUE；</li>\\n<li>子查询中如果到表的末尾也没有记录找到，返回值为\\nFALSE。</li>\\n<li>EXISTS 子查询并没有确切记录返回，只判断是否有记录存\\n在，而且只要找到相关记录，子查询就不需要再执行，然后\\n再进行下面的操作。这样大大提高了语句的执行效率。</li>\\n<li>NOT EXISTS正好相反，判断子查询是否没有返回值。如果没\\n有返回值，表达式为真，如果找到一条返回值，则为假</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};

const l=JSON.parse('{"key":"v-6b0d5fc8","path":"/zh/oracle12/","title":"Oracle-SQL开发—— 子查询","lang":"zh-CN","frontmatter":{"title":"Oracle-SQL开发—— 子查询","icon":"page","order":12,"author":"涎涎","date":"2019-06-16T21:14:55.000Z","isOriginal":true,"permalinkPattern":"oracle12","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-SQL开发—— 子查询"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/oracle12/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-SQL开发—— 子查询"}],["meta",{"property":"og:description","content":"章节目标 通过本章学习，应达到如下目标： 掌握子查询可以解决的问题； 了解子查询的分类； 掌握单行子查询、多行子查询、多列子查询； 掌握在WHERE、HAVING、FROM子句中编写子查询； 理解子查询返回空值对主查询所产生的影响； 掌握T0P-N及分页查询; 本章内容"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:14:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-SQL开发—— 子查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:14:55.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"章节目标 通过本章学习，应达到如下目标： 掌握子查询可以解决的问题； 了解子查询的分类； 掌握单行子查询、多行子查询、多列子查询； 掌握在WHERE、HAVING、FROM子句中编写子查询； 理解子查询返回空值对主查询所产生的影响； 掌握T0P-N及分页查询; 本章内容"},"headers":[{"level":2,"title":"通过本章学习，应达到如下目标：","slug":"通过本章学习-应达到如下目标","link":"#通过本章学习-应达到如下目标","children":[{"level":3,"title":"掌握子查询可以解决的问题；","slug":"掌握子查询可以解决的问题","link":"#掌握子查询可以解决的问题","children":[]}]},{"level":2,"title":"本章内容","slug":"本章内容","link":"#本章内容","children":[]},{"level":2,"title":"为什么使用子查询","slug":"为什么使用子查询","link":"#为什么使用子查询","children":[{"level":3,"title":"思考如下问题？","slug":"思考如下问题","link":"#思考如下问题","children":[]}]},{"level":2,"title":"为什么使用子查询","slug":"为什么使用子查询-1","link":"#为什么使用子查询-1","children":[]},{"level":2,"title":"使用子查询","slug":"使用子查询","link":"#使用子查询","children":[]},{"level":2,"title":"使用子查询","slug":"使用子查询-1","link":"#使用子查询-1","children":[]},{"level":2,"title":"使用子查询","slug":"使用子查询-2","link":"#使用子查询-2","children":[]},{"level":2,"title":"使用子查询","slug":"使用子查询-3","link":"#使用子查询-3","children":[{"level":3,"title":"子查询使用指导","slug":"子查询使用指导","link":"#子查询使用指导","children":[]}]},{"level":2,"title":"子查询的类型","slug":"子查询的类型","link":"#子查询的类型","children":[{"level":3,"title":"根据子查询返回的行和列数量，分为：","slug":"根据子查询返回的行和列数量-分为","link":"#根据子查询返回的行和列数量-分为","children":[]}]},{"level":2,"title":"单行子查询","slug":"单行子查询","link":"#单行子查询","children":[{"level":3,"title":"HAVING子句中使用子查询","slug":"having子句中使用子查询","link":"#having子句中使用子查询","children":[]},{"level":3,"title":"HAVING子句中使用子查询","slug":"having子句中使用子查询-1","link":"#having子句中使用子查询-1","children":[]}]},{"level":2,"title":"练习1","slug":"练习1","link":"#练习1","children":[]},{"level":2,"title":"多行子查询","slug":"多行子查询","link":"#多行子查询","children":[{"level":3,"title":"多行子查询","slug":"多行子查询-1","link":"#多行子查询-1","children":[]},{"level":3,"title":"IN使用","slug":"in使用","link":"#in使用","children":[]},{"level":3,"title":"ANY的使用","slug":"any的使用","link":"#any的使用","children":[]},{"level":3,"title":"查询是经理的员工姓名，工资。","slug":"查询是经理的员工姓名-工资。","link":"#查询是经理的员工姓名-工资。","children":[]},{"level":3,"title":"ALL的使用","slug":"all的使用","link":"#all的使用","children":[]}]},{"level":2,"title":"练习2","slug":"练习2","link":"#练习2","children":[]},{"level":2,"title":"多列子查询","slug":"多列子查询","link":"#多列子查询","children":[{"level":3,"title":"多列子查询","slug":"多列子查询-1","link":"#多列子查询-1","children":[]}]},{"level":2,"title":"练习3","slug":"练习3","link":"#练习3","children":[]},{"level":2,"title":"子查询中的空值","slug":"子查询中的空值","link":"#子查询中的空值","children":[{"level":3,"title":"子查询返回的结果中含有空值","slug":"子查询返回的结果中含有空值","link":"#子查询返回的结果中含有空值","children":[]}]},{"level":2,"title":"在 FROM 子句中使用子查询","slug":"在-from-子句中使用子查询","link":"#在-from-子句中使用子查询","children":[]},{"level":2,"title":"练习4","slug":"练习4","link":"#练习4","children":[]},{"level":2,"title":"ROWNUM","slug":"rownum","link":"#rownum","children":[{"level":3,"title":"ROWNUM使用的注意点：","slug":"rownum使用的注意点","link":"#rownum使用的注意点","children":[]}]},{"level":2,"title":"TOP-N查询","slug":"top-n查询","link":"#top-n查询","children":[]},{"level":2,"title":"练习5","slug":"练习5","link":"#练习5","children":[]},{"level":2,"title":"分页","slug":"分页","link":"#分页","children":[{"level":3,"title":"分页查询","slug":"分页查询","link":"#分页查询","children":[]}]},{"level":2,"title":"练习6","slug":"练习6","link":"#练习6","children":[{"level":3,"title":"分页查询","slug":"分页查询-1","link":"#分页查询-1","children":[]}]},{"level":2,"title":"练习7","slug":"练习7","link":"#练习7","children":[]},{"level":2,"title":"本章重点总结","slug":"本章重点总结","link":"#本章重点总结","children":[{"level":3,"title":"为什么使用子查询","slug":"为什么使用子查询-2","link":"#为什么使用子查询-2","children":[]},{"level":3,"title":"单行子查询","slug":"单行子查询-1","link":"#单行子查询-1","children":[]},{"level":3,"title":"多行子查询","slug":"多行子查询-2","link":"#多行子查询-2","children":[]},{"level":3,"title":"多列子查询","slug":"多列子查询-2","link":"#多列子查询-2","children":[]},{"level":3,"title":"子查询中空值问题","slug":"子查询中空值问题","link":"#子查询中空值问题","children":[]},{"level":3,"title":"FROM语句中子查询","slug":"from语句中子查询","link":"#from语句中子查询","children":[]},{"level":3,"title":"分页查询","slug":"分页查询-2","link":"#分页查询-2","children":[]}]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":12.69,"words":3806},"filePathRelative":"zh/programBlog/Database/Oracle/12-Oracle-SQL开发—— 子查询.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> 章节目标</h1>\\n<h2> 通过本章学习，应达到如下目标：</h2>\\n<h3> 掌握子查询可以解决的问题；</h3>\\n<p>了解子查询的分类；</p>\\n<p>掌握单行子查询、多行子查询、多列子查询；</p>\\n<p>掌握在WHERE、HAVING、FROM子句中编写子查询；</p>\\n<p>理解子查询返回空值对主查询所产生的影响；</p>\\n<p>掌握T0P-N及分页查询;</p>\\n<h2> 本章内容</h2>\\n<figure><img src=\\"/assets/Oracle_12_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{l as data};

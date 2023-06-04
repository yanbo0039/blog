const e=JSON.parse('{"key":"v-35a78fae","path":"/zh/programBlog/Database/Oracle/oracle32.html","title":"Oracle-视图","lang":"zh-CN","frontmatter":{"title":"Oracle-视图","icon":"page","order":32,"author":"涎涎","date":"2019-08-13T16:35:36.000Z","isOriginal":true,"permalinkPattern":"programBlog/Database/Oracle/oracle32.html","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-视图"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/oracle32.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-视图"}],["meta",{"property":"og:description","content":"32-Oracle-视图.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 章节目标 通过本章学习，学员应达到如下目标： 理解视图的作用、分类； 掌握视图创建、修改、删除； 掌握如何从视图中检索数据；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-03T23:41:08.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-08-13T16:35:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-03T23:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-视图\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-08-13T16:35:36.000Z\\",\\"dateModified\\":\\"2023-06-03T23:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"32-Oracle-视图.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 章节目标 通过本章学习，学员应达到如下目标： 理解视图的作用、分类； 掌握视图创建、修改、删除； 掌握如何从视图中检索数据；"},"headers":[{"level":3,"title":"章节目标","slug":"章节目标","link":"#章节目标","children":[]},{"level":3,"title":"本章内容","slug":"本章内容","link":"#本章内容","children":[]},{"level":3,"title":"数据库对象","slug":"数据库对象","link":"#数据库对象","children":[]},{"level":3,"title":"什么是视图？","slug":"什么是视图","link":"#什么是视图","children":[]},{"level":3,"title":"为什么使用视图","slug":"为什么使用视图","link":"#为什么使用视图","children":[]},{"level":3,"title":"视图分类","slug":"视图分类","link":"#视图分类","children":[]},{"level":3,"title":"创建视图","slug":"创建视图","link":"#创建视图","children":[]},{"level":3,"title":"创建复杂视图","slug":"创建复杂视图","link":"#创建复杂视图","children":[]},{"level":3,"title":"修改视图","slug":"修改视图","link":"#修改视图","children":[]},{"level":3,"title":"视图上执行DML操作的规则","slug":"视图上执行dml操作的规则","link":"#视图上执行dml操作的规则","children":[]},{"level":3,"title":"WITH CHECK OPTION 子句","slug":"with-check-option-子句","link":"#with-check-option-子句","children":[]},{"level":3,"title":"拒绝 DML 操作","slug":"拒绝-dml-操作","link":"#拒绝-dml-操作","children":[]},{"level":3,"title":"删除视图","slug":"删除视图","link":"#删除视图","children":[]},{"level":3,"title":"相关数据字典","slug":"相关数据字典","link":"#相关数据字典","children":[]},{"level":3,"title":"本节重点总结","slug":"本节重点总结","link":"#本节重点总结","children":[]},{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685835668000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":8}]},"readingTime":{"minutes":5.32,"words":1595},"filePathRelative":"zh/programBlog/Database/Oracle/32-Oracle-视图.md","localizedDate":"2019年8月13日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--32-Oracle--h32r5889b.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">32-Oracle-视图.md</a></h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h3> 章节目标</h3>\\n<ul>\\n<li>通过本章学习，学员应达到如下目标：\\n<ul>\\n<li>理解视图的作用、分类；</li>\\n<li>掌握视图创建、修改、删除；</li>\\n<li>掌握如何从视图中检索数据；</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};

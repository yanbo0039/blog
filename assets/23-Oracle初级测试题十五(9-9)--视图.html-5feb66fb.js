const e=JSON.parse(`{"key":"v-c4746f72","path":"/zh/programBlog/Database/Oracle/23-Oracle%E5%88%9D%E7%BA%A7%E6%B5%8B%E8%AF%95%E9%A2%98%E5%8D%81%E4%BA%94(9-9)--%E8%A7%86%E5%9B%BE.html","title":"Oracle初级测试题十五(9-9)--视图","lang":"zh-CN","frontmatter":{"title":"Oracle初级测试题十五(9-9)--视图","icon":"page","order":23,"author":"涎涎","date":"2019-06-16T22:21:06.000Z","isOriginal":true,"category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle初级测试题十五(9-9)--视图"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/23-Oracle%E5%88%9D%E7%BA%A7%E6%B5%8B%E8%AF%95%E9%A2%98%E5%8D%81%E4%BA%94(9-9)--%E8%A7%86%E5%9B%BE.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle初级测试题十五(9-9)--视图"}],["meta",{"property":"og:description","content":"Oracle初级测试题十五(9-9)--视图 练习1 创建一个视图，通过该视图可以查询到工资在2000-5000内并且姓名中包含有A的员工编号，姓名，工资。 create or replace view viewSal2k_5k as select empno,ename,sal from emp where sal between 2000 and 5000 and ename like '%A%';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:21:06.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle初级测试题十五(9-9)--视图\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:21:06.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle初级测试题十五(9-9)--视图 练习1 创建一个视图，通过该视图可以查询到工资在2000-5000内并且姓名中包含有A的员工编号，姓名，工资。 create or replace view viewSal2k_5k as select empno,ename,sal from emp where sal between 2000 and 5000 and ename like '%A%';"},"headers":[{"level":2,"title":"练习1","slug":"练习1","link":"#练习1","children":[]},{"level":2,"title":"练习2","slug":"练习2","link":"#练习2","children":[]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"zh/programBlog/Database/Oracle/23-Oracle初级测试题十五(9-9)--视图.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle初级测试题十五(9-9)--视图</h1>\\n<h2> 练习1</h2>\\n<ol>\\n<li>创建一个视图，通过该视图可以查询到工资在2000-5000内并且姓名中包含有A的员工编号，姓名，工资。</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>create or replace view viewSal2k_5k\\n       as select empno,ename,sal from emp\\n       where sal between 2000 and 5000\\n       and ename like '%A%';\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};

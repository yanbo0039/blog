const e=JSON.parse('{"key":"v-7cf08028","path":"/zh/programBlog/Database/Oracle/oracle9.html","title":"Oracle-多表链接","lang":"zh-CN","frontmatter":{"title":"Oracle-多表链接","icon":"page","order":9,"author":"涎涎","date":"2019-06-16T21:08:40.000Z","isOriginal":true,"permalinkPattern":"programBlog/Database/Oracle/oracle9.html","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-多表链接"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/oracle9.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-多表链接"}],["meta",{"property":"og:description","content":"Oracle-多表链接 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 --多表链接查询 嵌套子查询 相关子查询 （约束 事务） --多表链接 查询 --笛卡尔积 14*4 select emp.empno, emp.ename,emp.job,emp.mgr, emp.hiredate,emp.sal, emp.deptno,dept.deptno, dept.dname from emp,dept;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T05:58:29.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:08:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T05:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-多表链接\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:08:40.000Z\\",\\"dateModified\\":\\"2023-06-02T05:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle-多表链接 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 --多表链接查询 嵌套子查询 相关子查询 （约束 事务） --多表链接 查询 --笛卡尔积 14*4 select emp.empno, emp.ename,emp.job,emp.mgr, emp.hiredate,emp.sal, emp.deptno,dept.deptno, dept.dname from emp,dept;"},"headers":[{"level":2,"title":"--多表链接查询 嵌套子查询 相关子查询 （约束 事务）","slug":"多表链接查询-嵌套子查询-相关子查询-约束-事务","link":"#多表链接查询-嵌套子查询-相关子查询-约束-事务","children":[]},{"level":2,"title":"--多表链接 查询","slug":"多表链接-查询","link":"#多表链接-查询","children":[]},{"level":2,"title":"--非等值 链接","slug":"非等值-链接","link":"#非等值-链接","children":[]},{"level":2,"title":"--外部链接","slug":"外部链接","link":"#外部链接","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685685509000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":6}]},"readingTime":{"minutes":2.42,"words":725},"filePathRelative":"zh/programBlog/Database/Oracle/9-Oracle-多表链接.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle-多表链接</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h2> --多表链接查询 嵌套子查询 相关子查询 （约束 事务）</h2>\\n<h2> --多表链接 查询</h2>\\n<p>--笛卡尔积 14*4</p>\\n<pre><code>select emp.empno,\\nemp.ename,emp.job,emp.mgr,\\nemp.hiredate,emp.sal,\\nemp.deptno,dept.deptno,\\ndept.dname\\nfrom emp,dept;\\n</code></pre>","autoDesc":true}');export{e as data};

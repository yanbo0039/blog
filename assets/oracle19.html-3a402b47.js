const e=JSON.parse('{"key":"v-5065f4f6","path":"/zh/programBlog/Database/Oracle/oracle19.html","title":"Oracle初级测试题九--高级子查询","lang":"zh-CN","frontmatter":{"title":"Oracle初级测试题九--高级子查询","icon":"page","order":19,"author":"涎涎","date":"2019-06-16T22:18:33.000Z","isOriginal":true,"permalinkPattern":"programBlog/Database/Oracle/oracle19.html","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle初级测试题九--高级子查询"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/oracle19.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle初级测试题九--高级子查询"}],["meta",{"property":"og:description","content":"Oracle初级测试题九--高级子查询 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 例：思考如何查询比本部门平均薪水高的员工姓名，薪水。 --嵌套子查询的写法: --我的理解写法： --第一步：先查询员工姓名，薪水 select ename,sal from emp; --第二步：--每个部门的平均薪水,将其作为一个表 select avg(sal) avgSal,deptno from emp group by deptno; --第三步：在前两步基础之上解题 select ename,sal,emp.deptno from emp, (select avg(sal) avgSal,deptno from emp group by deptno) tab_avgSal where sal &gt; avgSal and emp.deptno = tab_avgSal.deptno; --标准答案写法 ： select empno,ename,sal from emp e ,(select deptno,avg(sal) avgsal from emp group by deptno) d where e.deptno =d.deptno and e.sal &gt;d.avgsal; --相关子查询解题 select empno,ename,sal,deptno from emp outer where sal &gt; (select avg(sal) from emp where deptno = outer.deptno); --父查询中的行每被处理一次，子查询就执行一次"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T05:58:29.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:18:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T05:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle初级测试题九--高级子查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:18:33.000Z\\",\\"dateModified\\":\\"2023-06-02T05:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle初级测试题九--高级子查询 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 例：思考如何查询比本部门平均薪水高的员工姓名，薪水。 --嵌套子查询的写法: --我的理解写法： --第一步：先查询员工姓名，薪水 select ename,sal from emp; --第二步：--每个部门的平均薪水,将其作为一个表 select avg(sal) avgSal,deptno from emp group by deptno; --第三步：在前两步基础之上解题 select ename,sal,emp.deptno from emp, (select avg(sal) avgSal,deptno from emp group by deptno) tab_avgSal where sal &gt; avgSal and emp.deptno = tab_avgSal.deptno; --标准答案写法 ： select empno,ename,sal from emp e ,(select deptno,avg(sal) avgsal from emp group by deptno) d where e.deptno =d.deptno and e.sal &gt;d.avgsal; --相关子查询解题 select empno,ename,sal,deptno from emp outer where sal &gt; (select avg(sal) from emp where deptno = outer.deptno); --父查询中的行每被处理一次，子查询就执行一次"},"headers":[{"level":2,"title":"练习1","slug":"练习1","link":"#练习1","children":[]},{"level":2,"title":"练习2","slug":"练习2","link":"#练习2","children":[]},{"level":2,"title":"练习3","slug":"练习3","link":"#练习3","children":[]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685685509000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":6}]},"readingTime":{"minutes":2.91,"words":873},"filePathRelative":"zh/programBlog/Database/Oracle/19-Oracle初级测试题九--高级子查询.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle初级测试题九--高级子查询</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<p>例：思考如何查询比本部门平均薪水高的员工姓名，薪水。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>--嵌套子查询的写法:\\n\\n--我的理解写法：\\n--第一步：先查询员工姓名，薪水\\nselect ename,sal from emp;\\n--第二步：--每个部门的平均薪水,将其作为一个表\\nselect avg(sal) avgSal,deptno from emp group by deptno;\\n--第三步：在前两步基础之上解题\\nselect ename,sal,emp.deptno from emp,\\n(select avg(sal) avgSal,deptno from emp group by deptno) tab_avgSal\\nwhere sal &gt; avgSal and emp.deptno = tab_avgSal.deptno;\\n--标准答案写法 ：\\nselect empno,ename,sal\\nfrom   emp e ,(select deptno,avg(sal) avgsal from emp group by deptno) d\\nwhere e.deptno =d.deptno\\nand e.sal &gt;d.avgsal;\\n\\n--相关子查询解题\\nselect empno,ename,sal,deptno\\nfrom emp outer\\nwhere sal &gt; (select avg(sal) from emp where deptno = outer.deptno);\\n--父查询中的行每被处理一次，子查询就执行一次\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};

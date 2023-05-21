const n=JSON.parse('{"key":"v-6897e792","path":"/zh/programBlog/Database/Oracle/55-Oracle-SQL%E5%BC%80%E5%8F%91%20%E2%80%94%E2%80%94%20%E9%9B%86%E5%90%88%E8%BF%90%E7%AE%97.html","title":"Oracle-SQL开发 —— 集合运算","lang":"zh-CN","frontmatter":{"title":"Oracle-SQL开发 —— 集合运算","icon":"page","order":55,"author":"涎涎","date":"2023-01-20T14:50:41.000Z","isOriginal":true,"category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-SQL开发 —— 集合运算"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/55-Oracle-SQL%E5%BC%80%E5%8F%91%20%E2%80%94%E2%80%94%20%E9%9B%86%E5%90%88%E8%BF%90%E7%AE%97.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-SQL开发 —— 集合运算"}],["meta",{"property":"og:description","content":"55-Oracle-SQL开发 —— 集合运算.md 概念 示例代码 ------------------------------------------------- --联合运算（union） -- 1.去重复 -- 2.默认第一列升序排序 -- 3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名 -- 4.每个SQL语句不能有自己的order by语句 ------------------------------------------------- 1.查询编号为7839的员工当前工资、岗位及历史工资、岗位？ select * from emp where empno = 7839; --7839的员工当前工资、岗位 select * from emp_jobhistory where empno = 7839;--7839的员工历史工资、岗位 --多表连接（不适用） select * from emp e,emp_jobhistory h where e.empno = h.empno; --联合运算 select empno 雇员编号,sal 工资,job 岗位 from emp where empno = 7839 --7839的员工当前工资、岗位 1条数据 union select empno,sal,job from emp_jobhistory where empno = 7839 order by 岗位;--7839的员工历史工资、岗位 5条数据 ------------------------------------------------- --完全联合运算（union all） -- 1.不去重复 -- 2.不排序 -- 3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名 -- 4.每个SQL语句不能有自己的order by语句 -- 5.完全联合运算（union all） &gt; 联合运算（union）,因为union all不需要去重，也不需要排序 ------------------------------------------------- 1.查询编号为7839的员工当前工资、岗位及历史工资、岗位,要求不要去除重复数据 --完全联合运算 select empno 雇员编号,sal 工资,job 岗位 from emp where empno = 7839 --7839的员工当前工资、岗位 1条数据 union all select empno,sal,job from emp_jobhistory where empno = 7839 order by 岗位;--7839的员工历史工资、岗位 5条数据 --练习 2.使用多表连接，查询每个部门的部门编号，部门人数，没有人数的部门显示0。 select d.deptno,count(e.empno) from emp e,dept d where e.deptno(+) = d.deptno group by d.deptno; 3.使用联合运算，查询每个部门的部门编号，部门人数，没有人数的部门显示0。 select deptno,count(empno) from emp group by deptno --有人数的部门 emp union select deptno,0 from dept where not exists (select * from emp where deptno = dept.deptno);--没有人数的部门 dept 5. 使用集合运算，输出如下效果？ select deptno 部门,loc 工作地点, to_char(null) 员工姓名,to_date(null) 入职日期 from dept--查询部门信息 union select deptno 部门,to_char(null) 工作地点,ename 员工姓名,hiredate 入职日期 from emp;--查询员工信息 ------------------------------------------------- --相交运算（intersect） ： 取多个SQL语句之间的共有数据 ------------------------------------------------- 1.查询哪些员工做过岗位调动？ select empno from emp--所有的员工 intersect select empno from emp_jobhistory;--调用过的员工编号 ------------------------------------------------- --相减运算（minus） ： 取A-B的数据，即第一个SQL有，第二个SQL没有的数据 ------------------------------------------------- 1.查询哪些员工没有做过岗位调动？ select empno from emp--所有的员工 minus select empno from emp_jobhistory;--调用过的员工编号"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2023-01-20T14:50:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-SQL开发 —— 集合运算\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-20T14:50:41.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"55-Oracle-SQL开发 —— 集合运算.md 概念 示例代码 ------------------------------------------------- --联合运算（union） -- 1.去重复 -- 2.默认第一列升序排序 -- 3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名 -- 4.每个SQL语句不能有自己的order by语句 ------------------------------------------------- 1.查询编号为7839的员工当前工资、岗位及历史工资、岗位？ select * from emp where empno = 7839; --7839的员工当前工资、岗位 select * from emp_jobhistory where empno = 7839;--7839的员工历史工资、岗位 --多表连接（不适用） select * from emp e,emp_jobhistory h where e.empno = h.empno; --联合运算 select empno 雇员编号,sal 工资,job 岗位 from emp where empno = 7839 --7839的员工当前工资、岗位 1条数据 union select empno,sal,job from emp_jobhistory where empno = 7839 order by 岗位;--7839的员工历史工资、岗位 5条数据 ------------------------------------------------- --完全联合运算（union all） -- 1.不去重复 -- 2.不排序 -- 3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名 -- 4.每个SQL语句不能有自己的order by语句 -- 5.完全联合运算（union all） &gt; 联合运算（union）,因为union all不需要去重，也不需要排序 ------------------------------------------------- 1.查询编号为7839的员工当前工资、岗位及历史工资、岗位,要求不要去除重复数据 --完全联合运算 select empno 雇员编号,sal 工资,job 岗位 from emp where empno = 7839 --7839的员工当前工资、岗位 1条数据 union all select empno,sal,job from emp_jobhistory where empno = 7839 order by 岗位;--7839的员工历史工资、岗位 5条数据 --练习 2.使用多表连接，查询每个部门的部门编号，部门人数，没有人数的部门显示0。 select d.deptno,count(e.empno) from emp e,dept d where e.deptno(+) = d.deptno group by d.deptno; 3.使用联合运算，查询每个部门的部门编号，部门人数，没有人数的部门显示0。 select deptno,count(empno) from emp group by deptno --有人数的部门 emp union select deptno,0 from dept where not exists (select * from emp where deptno = dept.deptno);--没有人数的部门 dept 5. 使用集合运算，输出如下效果？ select deptno 部门,loc 工作地点, to_char(null) 员工姓名,to_date(null) 入职日期 from dept--查询部门信息 union select deptno 部门,to_char(null) 工作地点,ename 员工姓名,hiredate 入职日期 from emp;--查询员工信息 ------------------------------------------------- --相交运算（intersect） ： 取多个SQL语句之间的共有数据 ------------------------------------------------- 1.查询哪些员工做过岗位调动？ select empno from emp--所有的员工 intersect select empno from emp_jobhistory;--调用过的员工编号 ------------------------------------------------- --相减运算（minus） ： 取A-B的数据，即第一个SQL有，第二个SQL没有的数据 ------------------------------------------------- 1.查询哪些员工没有做过岗位调动？ select empno from emp--所有的员工 minus select empno from emp_jobhistory;--调用过的员工编号"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":2.98,"words":895},"filePathRelative":"zh/programBlog/Database/Oracle/55-Oracle-SQL开发 —— 集合运算.md","localizedDate":"2023年1月20日","excerpt":"<!-- more -->\\n<h1> 55-Oracle-SQL开发 —— <a href=\\"http://xn--8pro43gzonvrg.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">集合运算.md</a></h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"/assets/Oracle_55_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 示例代码</h4>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token comment\\">--联合运算（union）</span>\\n<span class=\\"token comment\\">--    1.去重复</span>\\n<span class=\\"token comment\\">--    2.默认第一列升序排序</span>\\n<span class=\\"token comment\\">--    3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名</span>\\n<span class=\\"token comment\\">--    4.每个SQL语句不能有自己的order by语句</span>\\n<span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token number\\">1.</span>查询编号为<span class=\\"token number\\">7839</span>的员工当前工资、岗位及历史工资、岗位？\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> emp <span class=\\"token keyword\\">where</span> empno <span class=\\"token operator\\">=</span> <span class=\\"token number\\">7839</span><span class=\\"token punctuation\\">;</span>           <span class=\\"token comment\\">--7839的员工当前工资、岗位</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> emp_jobhistory <span class=\\"token keyword\\">where</span> empno <span class=\\"token operator\\">=</span> <span class=\\"token number\\">7839</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">--7839的员工历史工资、岗位</span>\\n\\n<span class=\\"token comment\\">--多表连接（不适用）</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> emp e<span class=\\"token punctuation\\">,</span>emp_jobhistory h <span class=\\"token keyword\\">where</span> e<span class=\\"token punctuation\\">.</span>empno <span class=\\"token operator\\">=</span> h<span class=\\"token punctuation\\">.</span>empno<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">--联合运算</span>\\n<span class=\\"token keyword\\">select</span> empno 雇员编号<span class=\\"token punctuation\\">,</span>sal 工资<span class=\\"token punctuation\\">,</span>job 岗位 <span class=\\"token keyword\\">from</span> emp <span class=\\"token keyword\\">where</span> empno <span class=\\"token operator\\">=</span> <span class=\\"token number\\">7839</span>       <span class=\\"token comment\\">--7839的员工当前工资、岗位   1条数据</span>\\n<span class=\\"token keyword\\">union</span>\\n<span class=\\"token keyword\\">select</span> empno<span class=\\"token punctuation\\">,</span>sal<span class=\\"token punctuation\\">,</span>job <span class=\\"token keyword\\">from</span> emp_jobhistory <span class=\\"token keyword\\">where</span> empno <span class=\\"token operator\\">=</span> <span class=\\"token number\\">7839</span> <span class=\\"token keyword\\">order</span> <span class=\\"token keyword\\">by</span> 岗位<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">--7839的员工历史工资、岗位   5条数据</span>\\n\\n<span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token comment\\">--完全联合运算（union all）</span>\\n<span class=\\"token comment\\">--    1.不去重复</span>\\n<span class=\\"token comment\\">--    2.不排序</span>\\n<span class=\\"token comment\\">--    3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名</span>\\n<span class=\\"token comment\\">--    4.每个SQL语句不能有自己的order by语句</span>\\n<span class=\\"token comment\\">--    5.完全联合运算（union all） &gt;  联合运算（union）,因为union all不需要去重，也不需要排序</span>\\n<span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token number\\">1.</span>查询编号为<span class=\\"token number\\">7839</span>的员工当前工资、岗位及历史工资、岗位<span class=\\"token punctuation\\">,</span>要求不要去除重复数据\\n<span class=\\"token comment\\">--完全联合运算</span>\\n<span class=\\"token keyword\\">select</span> empno 雇员编号<span class=\\"token punctuation\\">,</span>sal 工资<span class=\\"token punctuation\\">,</span>job 岗位 <span class=\\"token keyword\\">from</span> emp <span class=\\"token keyword\\">where</span> empno <span class=\\"token operator\\">=</span> <span class=\\"token number\\">7839</span>       <span class=\\"token comment\\">--7839的员工当前工资、岗位   1条数据</span>\\n<span class=\\"token keyword\\">union</span> <span class=\\"token keyword\\">all</span>\\n<span class=\\"token keyword\\">select</span> empno<span class=\\"token punctuation\\">,</span>sal<span class=\\"token punctuation\\">,</span>job <span class=\\"token keyword\\">from</span> emp_jobhistory <span class=\\"token keyword\\">where</span> empno <span class=\\"token operator\\">=</span> <span class=\\"token number\\">7839</span> <span class=\\"token keyword\\">order</span> <span class=\\"token keyword\\">by</span> 岗位<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">--7839的员工历史工资、岗位   5条数据</span>\\n\\n\\n<span class=\\"token comment\\">--练习</span>\\n<span class=\\"token number\\">2.</span>使用多表连接，查询每个部门的部门编号，部门人数，没有人数的部门显示<span class=\\"token number\\">0</span>。\\n<span class=\\"token keyword\\">select</span> d<span class=\\"token punctuation\\">.</span>deptno<span class=\\"token punctuation\\">,</span><span class=\\"token function\\">count</span><span class=\\"token punctuation\\">(</span>e<span class=\\"token punctuation\\">.</span>empno<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">from</span> emp e<span class=\\"token punctuation\\">,</span>dept d <span class=\\"token keyword\\">where</span> e<span class=\\"token punctuation\\">.</span>deptno<span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">+</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=</span> d<span class=\\"token punctuation\\">.</span>deptno <span class=\\"token keyword\\">group</span> <span class=\\"token keyword\\">by</span> d<span class=\\"token punctuation\\">.</span>deptno<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token number\\">3.</span>使用联合运算，查询每个部门的部门编号，部门人数，没有人数的部门显示<span class=\\"token number\\">0</span>。\\n<span class=\\"token keyword\\">select</span> deptno<span class=\\"token punctuation\\">,</span><span class=\\"token function\\">count</span><span class=\\"token punctuation\\">(</span>empno<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">from</span> emp <span class=\\"token keyword\\">group</span> <span class=\\"token keyword\\">by</span> deptno                                       <span class=\\"token comment\\">--有人数的部门  emp</span>\\n<span class=\\"token keyword\\">union</span>\\n<span class=\\"token keyword\\">select</span> deptno<span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span> <span class=\\"token keyword\\">from</span> dept <span class=\\"token keyword\\">where</span> <span class=\\"token operator\\">not</span> <span class=\\"token keyword\\">exists</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> emp <span class=\\"token keyword\\">where</span> deptno <span class=\\"token operator\\">=</span> dept<span class=\\"token punctuation\\">.</span>deptno<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">--没有人数的部门  dept</span>\\n\\n<span class=\\"token number\\">5.</span> 使用集合运算，输出如下效果？\\n<span class=\\"token keyword\\">select</span> deptno 部门<span class=\\"token punctuation\\">,</span>loc 工作地点<span class=\\"token punctuation\\">,</span> to_char<span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">)</span> 员工姓名<span class=\\"token punctuation\\">,</span>to_date<span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">)</span> 入职日期 <span class=\\"token keyword\\">from</span> dept<span class=\\"token comment\\">--查询部门信息</span>\\n<span class=\\"token keyword\\">union</span>\\n<span class=\\"token keyword\\">select</span> deptno 部门<span class=\\"token punctuation\\">,</span>to_char<span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">)</span> 工作地点<span class=\\"token punctuation\\">,</span>ename 员工姓名<span class=\\"token punctuation\\">,</span>hiredate 入职日期 <span class=\\"token keyword\\">from</span> emp<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">--查询员工信息</span>\\n\\n<span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token comment\\">--相交运算（intersect） ： 取多个SQL语句之间的共有数据</span>\\n<span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token number\\">1.</span>查询哪些员工做过岗位调动？\\n<span class=\\"token keyword\\">select</span> empno <span class=\\"token keyword\\">from</span> emp<span class=\\"token comment\\">--所有的员工</span>\\n<span class=\\"token keyword\\">intersect</span>\\n<span class=\\"token keyword\\">select</span> empno <span class=\\"token keyword\\">from</span> emp_jobhistory<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">--调用过的员工编号</span>\\n\\n\\n<span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token comment\\">--相减运算（minus） ： 取A-B的数据，即第一个SQL有，第二个SQL没有的数据</span>\\n<span class=\\"token comment\\">-------------------------------------------------</span>\\n<span class=\\"token number\\">1.</span>查询哪些员工没有做过岗位调动？\\n<span class=\\"token keyword\\">select</span> empno <span class=\\"token keyword\\">from</span> emp<span class=\\"token comment\\">--所有的员工</span>\\nminus\\n<span class=\\"token keyword\\">select</span> empno <span class=\\"token keyword\\">from</span> emp_jobhistory<span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">--调用过的员工编号</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};

import{_ as e,X as a,Y as n,a1 as r,a0 as i}from"./framework-68dd73a2.js";const d="/blog/assets/Oracle_12_1.png",t="/blog/assets/Oracle_12_2.png",h="/blog/assets/Oracle_12_3.png",p="/blog/assets/Oracle_12_4.png",l="/blog/assets/Oracle_12_5.png",o="/blog/assets/Oracle_12_6.png",c="/blog/assets/Oracle_12_7.png",s="/blog/assets/Oracle_12_8.png",E="/blog/assets/Oracle_12_9.png",R="/blog/assets/Oracle_12_10.png",O={},g=i('<h1 id="章节目标" tabindex="-1"><a class="header-anchor" href="#章节目标" aria-hidden="true">#</a> 章节目标</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="通过本章学习-应达到如下目标" tabindex="-1"><a class="header-anchor" href="#通过本章学习-应达到如下目标" aria-hidden="true">#</a> 通过本章学习，应达到如下目标：</h2><h3 id="掌握子查询可以解决的问题" tabindex="-1"><a class="header-anchor" href="#掌握子查询可以解决的问题" aria-hidden="true">#</a> 掌握子查询可以解决的问题；</h3><p>了解子查询的分类；</p><p>掌握单行子查询、多行子查询、多列子查询；</p><p>掌握在WHERE、HAVING、FROM子句中编写子查询；</p><p>理解子查询返回空值对主查询所产生的影响；</p><p>掌握T0P-N及分页查询;</p><h2 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h2><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="为什么使用子查询" tabindex="-1"><a class="header-anchor" href="#为什么使用子查询" aria-hidden="true">#</a> 为什么使用子查询</h2><h3 id="思考如下问题" tabindex="-1"><a class="header-anchor" href="#思考如下问题" aria-hidden="true">#</a> 思考如下问题？</h3><p>查询工资比Jones工资高的员工信息？</p><p>查询工资最低的员工姓名？</p><h2 id="为什么使用子查询-1" tabindex="-1"><a class="header-anchor" href="#为什么使用子查询-1" aria-hidden="true">#</a> 为什么使用子查询</h2><p>“谁的薪水比 Jones还高呢？”</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="使用子查询" tabindex="-1"><a class="header-anchor" href="#使用子查询" aria-hidden="true">#</a> 使用子查询</h2><pre><code>SELECT	select_list
FROM	table
WHERE	expr operator
            (SELECT	select_list
            FROM		table);

括号内的查询叫做子查询，也叫内部查询，先于主查询执行。
子查询的结果被主查询（外部查询）使用
expr operator包括比较运算符。
单行运算符：&gt;、=、&gt;=、&lt;、&lt;&gt;、&lt;=
多行运算符： IN、ANY、ALL
</code></pre><h2 id="使用子查询-1" tabindex="-1"><a class="header-anchor" href="#使用子查询-1" aria-hidden="true">#</a> 使用子查询</h2><pre><code>子查询可以嵌于以下SQL子句中：
WHERE子句
HAVING子句
FROM子句
</code></pre><h2 id="使用子查询-2" tabindex="-1"><a class="header-anchor" href="#使用子查询-2" aria-hidden="true">#</a> 使用子查询</h2><p>使用子查询</p><p>查询出比JONES的雇员工资高的其他雇员</p><pre><code>SQL&gt; SELECT ename
2  FROM   emp
3  WHERE  sal &gt; 
4		    (SELECT sal
5               FROM   emp
6               WHERE  ename=&#39;JONES&#39;);


ENAME
----------
KING
FORD
SCOTT
</code></pre><h2 id="使用子查询-3" tabindex="-1"><a class="header-anchor" href="#使用子查询-3" aria-hidden="true">#</a> 使用子查询</h2><h3 id="子查询使用指导" tabindex="-1"><a class="header-anchor" href="#子查询使用指导" aria-hidden="true">#</a> 子查询使用指导</h3><pre><code>子查询要用括号括起来
将子查询放在比较运算符的右边
对于单行子查询要使用单行运算符
对于多行子查询要使用多行运算符
</code></pre><h2 id="子查询的类型" tabindex="-1"><a class="header-anchor" href="#子查询的类型" aria-hidden="true">#</a> 子查询的类型</h2><h3 id="根据子查询返回的行和列数量-分为" tabindex="-1"><a class="header-anchor" href="#根据子查询返回的行和列数量-分为" aria-hidden="true">#</a> 根据子查询返回的行和列数量，分为：</h3><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="单行子查询" tabindex="-1"><a class="header-anchor" href="#单行子查询" aria-hidden="true">#</a> 单行子查询</h2><p>子查询只返回一行一列</p><p>使用单行运算符</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>显示和雇员7369从事相同工作并且工资大于雇员7876的雇员的姓名和工作。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>子查询中使用组函数</p><p>查询工资最低的员工姓名，岗位及工资 <img src="'+o+'" alt="" loading="lazy"></p><h3 id="having子句中使用子查询" tabindex="-1"><a class="header-anchor" href="#having子句中使用子查询" aria-hidden="true">#</a> HAVING子句中使用子查询</h3><p>查询部门最低工资比20部门最低工资高的部门编号及最低工资 <img src="'+c+`" alt="" loading="lazy"></p><h3 id="having子句中使用子查询-1" tabindex="-1"><a class="header-anchor" href="#having子句中使用子查询-1" aria-hidden="true">#</a> HAVING子句中使用子查询</h3><p>查询哪个部门的员工人数 高于各部门平均人数。</p><pre><code>SQL&gt; SELECT	deptno, COUNT(empno)
2  FROM	emp
3  GROUP BY	deptno
4  HAVING	COUNT(empno) &gt;
5		 (SELECT AVG(COUNT(empno))
6		  FROM	emp
7		  GROUP BY deptno);
</code></pre><p>这个语句错在哪？ <img src="`+s+'" alt="" loading="lazy"></p><p>这条语句会工作吗? <img src="'+E+`" alt="" loading="lazy"></p><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><ol><li><p>查询入职日期最早的员工姓名，入职日期</p></li><li><p>查询工资比SMITH工资高并且工作地点在CHICAGO的员工姓名，工资，部门名称</p></li><li><p>查询入职日期比20部门入职日期最早的员工还要早的员工姓名，入职日期</p></li><li><p>查询部门人数大于所有部门平均人数的的部门编号，部门名称，部门人数</p></li></ol><h2 id="多行子查询" tabindex="-1"><a class="header-anchor" href="#多行子查询" aria-hidden="true">#</a> 多行子查询</h2><h3 id="多行子查询-1" tabindex="-1"><a class="header-anchor" href="#多行子查询-1" aria-hidden="true">#</a> 多行子查询</h3><pre><code>子查询返回记录的条数 可以是一条或多条。
和多行子查询进行比较时，需要使用多行操作符，多行操作符包括：
IN
ANY
ALL

IN操作符和以前介绍的功能一致，判断是否与子查询的任意一个返回值相同。
</code></pre><h3 id="in使用" tabindex="-1"><a class="header-anchor" href="#in使用" aria-hidden="true">#</a> IN使用</h3><pre><code>SELECT empno,ename
FROM   emp
WHERE  sal =
                (SELECT   MIN(sal)
                FROM     emp
                GROUP BY deptno);
</code></pre><p>返回结果</p><p>ERROR at line 4:</p><p>ORA-01427: single-row subquery returns more than\vone row</p><p>查询是经理的员工姓名，工资</p><pre><code>SELECT	ename, sal
FROM	emp
WHERE 	empno IN (SELECT mgr
                FROM  emp);
</code></pre><h3 id="any的使用" tabindex="-1"><a class="header-anchor" href="#any的使用" aria-hidden="true">#</a> ANY的使用</h3><pre><code>ANY：表示和子查询的任意一行结果进行比较，有一个满足条件即可。
&lt; ANY：表示小于子查询结果集中的任意一个，即小于最大值就可以。

&gt; ANY：表示大于子查询结果集中的任意一个，即大于最小值就可以。

= ANY：表示等于子查询结果中的任意一个，即等于谁都可以，相当于IN。
</code></pre><h3 id="查询是经理的员工姓名-工资。" tabindex="-1"><a class="header-anchor" href="#查询是经理的员工姓名-工资。" aria-hidden="true">#</a> 查询是经理的员工姓名，工资。</h3><pre><code>SELECT	ename, sal
FROM	emp
WHERE 	empno = ANY (SELECT mgr
                FROM   emp);
</code></pre><p>查询部门编号不为10，且工资比10部门任意一名员工工资高的员工编号，姓名，职位，工资。</p><pre><code>SELECT empno, ename, job, sal
FROM   emp
WHERE  sal &gt; ANY (SELECT sal
                FROM   emp
                WHERE  deptno = 10)
AND    deptno &lt;&gt; 10;
</code></pre><p>查询部门编号不为10，且工资比10部门任意一名工资低的员工编号，姓名，职位，工资。</p><pre><code>SELECT empno, ename, job, sal
FROM   emp
WHERE  sal &lt; ANY (SELECT sal
                FROM   emp
                WHERE  deptno = 10)
AND    deptno &lt;&gt; 10;
</code></pre><h3 id="all的使用" tabindex="-1"><a class="header-anchor" href="#all的使用" aria-hidden="true">#</a> ALL的使用</h3><pre><code>ALL：表示和子查询的所有行结果进行比较，每一行必须都满足条件。
&lt; ALL:表示小于子查询结果集中的所有行，即小于最小值。

&gt; ALL:表示大于子查询结果集中的所有行，即大于最大值。

= ALL :表示等于子查询结果集中的所有行,即等于所有值，通常无意义。
</code></pre><p>查询部门编号不为10，且工资比10部门所有员工工资高的员工编号，姓名，职位，工资。</p><pre><code>SELECT empno, ename,job, sal
FROM 	emp
WHERE 	sal &gt; ALL (SELECT sal
                FROM   emp
                WHERE  deptno= 10)
AND    deptno &lt;&gt; 10;
</code></pre><p>查询部门编号不为10，且工资比10部门所有员工工资低的员工编号，姓名，职位，工资。</p><pre><code>SELECT empno, ename,job, sal
FROM 	emp
WHERE 	sal &lt; ALL (SELECT sal
                FROM   emp
                WHERE  deptno= 10)
AND    deptno &lt;&gt; 10;
</code></pre><p>查询部门编号不为10，且工资和10部门所有员工工资相等的员工编号，姓名，职位，工资。</p><pre><code>SELECT empno, ename,job, sal
FROM 	emp
WHERE 	sal = ALL (SELECT sal
                FROM   emp
                WHERE  deptno= 10)
AND    deptno &lt;&gt; 10;
</code></pre><h2 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2</h2><ol><li>查询入职日期比10部门任意一个员工晚的员工姓名、入职日期，不包括10部门员工</li><li>查询入职日期比10部门所有员工晚的员工姓名、入职日期，不包括10部门员工</li><li>查询职位和10部门任意一个员工职位相同的员工姓名，职位，不包括10部门员工</li></ol><h2 id="多列子查询" tabindex="-1"><a class="header-anchor" href="#多列子查询" aria-hidden="true">#</a> 多列子查询</h2><h3 id="多列子查询-1" tabindex="-1"><a class="header-anchor" href="#多列子查询-1" aria-hidden="true">#</a> 多列子查询</h3><pre><code>之前讲的子查询都是在一个条件表达式内和子查询的一个列进行比较，多列子查询可以在一个条件表达式内同时和子查询的多个列进行比较。
多列子查询通常用IN操作符完成。
</code></pre><figure><img src="`+R+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>查询出和1981年入职的任意一个员工的部门和职位完全相同员工姓名、部门、职位、入职日期,不包括1981年入职员工。</p><pre><code>SQL&gt; SELECT	ename, deptno, job, hiredate
2  FROM	emp
3  WHERE   (deptno, job) IN
4 		(SELECT deptno,job
5            FROM   emp
6       	 WHERE  to_char(hiredate,&#39;YYYY&#39;)=&#39;1981&#39;)
7  AND      to_char(hiredate,&#39;YYYY&#39;)&lt;&gt;&#39;1981&#39;;
</code></pre><p>查询出和1981年入职的任意一个员工的部门或职位相同员工姓名、部门、职位、入职日期,不包括1981年入职员工。</p><pre><code>SQL&gt; SELECT	ename, deptno, job, hiredate
2  FROM	emp
3  WHERE 	(deptno IN (SELECT deptno
4                      FROM   	emp
5                      WHERE  	to_char(hiredate,&#39;YYYY&#39;)=&#39;1981&#39;)

6  OR     job IN             (SELECT 	job
7         		FROM   	emp
8              	WHERE  	to_char(hiredate,&#39;YYYY&#39;)=&#39;1981&#39;))

9  AND     to_char(hiredate,&#39;YYYY&#39;)&lt;&gt;&#39;1981&#39;);
</code></pre><h2 id="练习3" tabindex="-1"><a class="header-anchor" href="#练习3" aria-hidden="true">#</a> 练习3</h2><ol><li><p>查询职位及经理和10部门任意一个员工职位及经理相同的员工姓名，职位，不包括10部门员工</p></li><li><p>查询职位及经理和10部门任意一个员工职位或经理相同的员工姓名，职位，不包括10部门员工</p></li></ol><h2 id="子查询中的空值" tabindex="-1"><a class="header-anchor" href="#子查询中的空值" aria-hidden="true">#</a> 子查询中的空值</h2><p>查询不是经理的员工姓名。</p><pre><code>SQL&gt; SELECT	ename
2  FROM 	emp
3  WHERE 	empno NOT IN
4				(SELECT mgr
5				 FROM   emp);
no rows selected.
</code></pre><h3 id="子查询返回的结果中含有空值" tabindex="-1"><a class="header-anchor" href="#子查询返回的结果中含有空值" aria-hidden="true">#</a> 子查询返回的结果中含有空值</h3><p>上面的SQL语句试图查找出没有下属的雇员，逻辑上，这个SQL语句应该会返回8条记录，但是却一条也没返回，why?</p><p>因为子查询的结果中有一条空值，这条空值导致主查询没有记录返回。这是因为所有的条件和空值比较结果都是空值。因此无论什么时候只要空值有可能成为子查询结果集合中的一部分，就不能使用NOT IN 运算符。</p><h2 id="在-from-子句中使用子查询" tabindex="-1"><a class="header-anchor" href="#在-from-子句中使用子查询" aria-hidden="true">#</a> 在 FROM 子句中使用子查询</h2><p>查询比自己部门平均工资高的员工姓名，工资，部门编号，部门平均工资</p><pre><code>SQL&gt; SELECT  a.ename, a.sal, a.deptno, b.salavg
2  FROM    emp a, (SELECT   deptno, avg(sal) salavg
3                  FROM     emp
4                  GROUP BY deptno) b
5  WHERE   a.deptno = b.deptno
6  AND     a.sal &gt; b.salavg;

ENAME            SAL    DEPTNO     SALAVG
---------- --------- --------- ----------
KING            5000        10       2600
JONES           2975        20       2335
SCOTT           3000        20       2335
...
6 rows selected.
</code></pre><h2 id="练习4" tabindex="-1"><a class="header-anchor" href="#练习4" aria-hidden="true">#</a> 练习4</h2><ol><li><p>查询比自己职位平均工资高的员工姓名、职位，部门名称，职位平均工资</p></li><li><p>查询职位和经理同员工SCOTT或BLAKE完全相同的员工姓名、职位，不包括SCOOT和BLAKE本人。</p></li><li><p>查询不是经理的员工姓名。</p></li></ol><h2 id="rownum" tabindex="-1"><a class="header-anchor" href="#rownum" aria-hidden="true">#</a> ROWNUM</h2><p>ROWNUM是一个伪列，伪列是使用上类似于表中的列，而实际并没有存储在表中的特殊列； ROWNUM的功能是在每次查询时，返回结果集的顺序号，这个顺序号是在记录输出时才一步一步产生的，第一行显示为1，第二行为2，以此类推。</p><pre><code>SQL&gt; SELECT  rownum,empno, ename, job
2  FROM    emp;

    ROWNUM EMPNO ENAME      JOB
--------- ---------- ---------
    1     7839 KING       PRESIDENT
    2     7566 JONES      MANAGER
    3     7902 FORD       ANALYST
    4     7788 SCOTT      ANALYST
</code></pre><h3 id="rownum使用的注意点" tabindex="-1"><a class="header-anchor" href="#rownum使用的注意点" aria-hidden="true">#</a> ROWNUM使用的注意点：</h3><ol><li>如下SQL语句，SELECT * FROM EMP WHERE ROWNUM&gt;2;查询不到任何记录，因为ROWNUM是在记录输出时才生成，且总是从1开始，所以输出的第一条记录不满足&gt;2的条件，被过滤掉，第二条的ROWNUM又成了1，又不满足〉2的条件，又被过滤掉，依此类推，所以永远没有满足条件的记录，返回为空。所以对于ROWNUM只能执行&lt;、&lt;=运算，不能执行&gt;、&gt;=或一个区间运算Between..And等</li><li>ROWNUM和ORDER BY一起使用时，因为ROWNUM在记录输出时生成，而ORDER BY子句在最后执行，所以当两者一起使用时，需要注意ROWNUM实际是已经被排了序的ROWNUM。</li></ol><h2 id="top-n查询" tabindex="-1"><a class="header-anchor" href="#top-n查询" aria-hidden="true">#</a> TOP-N查询</h2><p>Top-N查询主要是实现表中按照某个列排序，输出最大或最小的N条记录功能。 Top-N分析语法：</p><pre><code>SELECT [列名], ROWNUM  
FROM   (SELECT [列名] 
        FROM 表名
        ORDER  BY Top-N操作的列  ASC|DESC)
WHERE  ROWNUM &lt;=  N;
</code></pre><p>ASC:查询最小的N条记录</p><p>DESC：查询最大的N条记录</p><h2 id="练习5" tabindex="-1"><a class="header-anchor" href="#练习5" aria-hidden="true">#</a> 练习5</h2><ol><li><p>查询入职日期最早的前5名员工姓名，入职日期。</p></li><li><p>查询工作在CHICAGO并且入职日期最早的前2名员工姓名，入职日期。</p></li></ol><h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3><h3 id="在oracle中-利用rownum的特性-可以实现数据库端的分页查询-查询语法为" tabindex="-1"><a class="header-anchor" href="#在oracle中-利用rownum的特性-可以实现数据库端的分页查询-查询语法为" aria-hidden="true">#</a> 在Oracle中，利用ROWNUM的特性，可以实现数据库端的分页查询，查询语法为：</h3><ol><li><p>当未指定需要按照某列排序，语法为：</p><p>SELECT b.* FROM (SELECT ROWNUM rn,[列名1,列名2,....列名n] FROM 表名1,[表名2,...表名n] WHERE [条件表达式 AND ] ROWNUM &lt;=目标页数<em>每页记录数) b WHERE rn &gt; (目标页数-1)<em>每页记录数 或 SELECT b.</em> FROM (SELECT ROWNUM rn,[列名1,列名2,....列名n] FROM 表名1,[表名2,...表名n] [WHERE 条件表达式]) b WHERE rn &lt;=目标页数</em>每页记录数 and rn &gt; (目标页数-1)*每页记录数 思考：哪种方式效率高？</p></li></ol><h2 id="练习6" tabindex="-1"><a class="header-anchor" href="#练习6" aria-hidden="true">#</a> 练习6</h2><ol><li>按照每页显示5条记录，分别查询第1页，第2页，第3页信息，要求显示员工姓名、入职日期、部门名称。</li></ol><h3 id="分页查询-1" tabindex="-1"><a class="header-anchor" href="#分页查询-1" aria-hidden="true">#</a> 分页查询</h3><ol start="2"><li><p>当指定需要按照某列排序时，语法为：</p><p>SELECT * FROM (SELECT ROWNUM rn, b.* FROM (SELECT 列名1 [,列名2,....列名n] FROM 表名1,[表名2,...表名n] [WHERE 子句] ORDER BY 要排序的列 ASC|DESC ) b WHERE ROWNUM &lt;=目标页数<em>每页记录数 ) WHERE rn &gt; (目标页数-1)<em>每页记录数 ; 或： SELECT * FROM (SELECT ROWNUM rn, b.</em> FROM (SELECT 列名1 [,列名2,....列名n] FROM 表名1,[表名2,...表名n] [WHERE 子句] ORDER BY 要排序的列 ASC|DESC ) b ) WHERE rn &lt;=目标页数</em>每页记录数 and rn &gt; (目标页数-1)*每页记录数;</p></li></ol><h2 id="练习7" tabindex="-1"><a class="header-anchor" href="#练习7" aria-hidden="true">#</a> 练习7</h2><ol><li>按照每页显示5条记录，分别查询工资最高的第1页，第2页，第3页信息，要求显示员工姓名、入职日期、部门名称、工资。</li></ol><h2 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h2><h3 id="为什么使用子查询-2" tabindex="-1"><a class="header-anchor" href="#为什么使用子查询-2" aria-hidden="true">#</a> 为什么使用子查询</h3><h3 id="单行子查询-1" tabindex="-1"><a class="header-anchor" href="#单行子查询-1" aria-hidden="true">#</a> 单行子查询</h3><h3 id="多行子查询-2" tabindex="-1"><a class="header-anchor" href="#多行子查询-2" aria-hidden="true">#</a> 多行子查询</h3><h3 id="多列子查询-2" tabindex="-1"><a class="header-anchor" href="#多列子查询-2" aria-hidden="true">#</a> 多列子查询</h3><h3 id="子查询中空值问题" tabindex="-1"><a class="header-anchor" href="#子查询中空值问题" aria-hidden="true">#</a> 子查询中空值问题</h3><h3 id="from语句中子查询" tabindex="-1"><a class="header-anchor" href="#from语句中子查询" aria-hidden="true">#</a> FROM语句中子查询</h3><h3 id="分页查询-2" tabindex="-1"><a class="header-anchor" href="#分页查询-2" aria-hidden="true">#</a> 分页查询</h3><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li><p>查询工资高于编号为7782的员工工资，并且和7369号员工从事相同工作的员工的编号、姓名及工资。</p></li><li><p>查询工资最高的员工姓名和工资。</p></li><li><p>查询部门最低工资高于10号部门最低工资的部门的编号、名称及部门最低工资。</p></li><li><p>查询员工工资为其部门最低工资的员工的编号和姓名及工资。</p></li><li><p>显示经理是KING的员工姓名，工资。</p></li><li><p>显示比员工SMITH参加工作时间晚的员工姓名，工资，参加工作时间。</p></li><li><p>使用子查询的方式查询哪些职员在NEW YORK工作。</p></li><li><p>写一个查询显示和员工SMITH工作在同一个部门的员工姓名，雇用日期，查询结果中排除SMITH。</p></li><li><p>写一个查询显示其工资比全体职员平均工资高的员工编号、姓名。</p></li><li><p>写一个查询显示其上级领导是King的员工姓名、工资。</p></li><li><p>显示所有工作在RESEARCH部门的员工姓名，职位。</p></li><li><p>查询每个部门的部门编号、平均工资，要求部门的平均工资高于部门20的平均工资。</p></li><li><p>查询大于自己部门平均工资的员工姓名，工资，所在部门平均工资，高于部门平均工资的额度。</p></li><li><p>列出至少有一个雇员的所有部门</p></li><li><p>列出薪金比&quot;SMITH&quot;多的所有雇员</p></li><li><p>列出入职日期早于其直接上级的所有雇员</p></li><li><p>找员工姓名和直接上级的名字</p></li><li><p>显示部门名称和人数</p></li><li><p>显示每个部门的最高工资的员工</p></li><li><p>显示出和员工号7369部门相同的员工姓名，工资</p></li><li><p>显示出和姓名中包含&quot;W&quot;的员工相同部门的员工姓名</p></li><li><p>显示出工资大于平均工资的员工姓名，工资</p></li><li><p>显示出工资大于本部门平均工资的员工姓名，工资</p></li><li><p>显示每位经理管理员工的最低工资，及最低工资者的姓名</p></li><li><p>显示比工资最高的员工参加工作时间晚的员工姓名，参加工作时间</p></li><li><p>显示出平均工资最高的的部门平均工资及部门名称</p></li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle-SQL开发—— 子查询</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,134);function m(b,N){return a(),n("div",null,[r(" more "),g])}const S=e(O,[["render",m],["__file","oracle12.html.vue"]]);export{S as default};

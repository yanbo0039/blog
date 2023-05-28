import{_ as l,X as a,Y as n,a1 as t,Z as e,$ as i,a2 as s,a0 as r,F as u}from"./framework-68dd73a2.js";const c="/blog/assets/Oracle_32_1.png",v="/blog/assets/Oracle_32_2.png",m={},h={id:"_32-oracle-视图-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_32-oracle-视图-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--32-Oracle--h32r5889b.md",target:"_blank",rel:"noopener noreferrer"},E=r('<h4 id="章节目标" tabindex="-1"><a class="header-anchor" href="#章节目标" aria-hidden="true">#</a> 章节目标</h4><ul><li>通过本章学习，学员应达到如下目标： <ul><li>理解视图的作用、分类；</li><li>掌握视图创建、修改、删除；</li><li>掌握如何从视图中检索数据；</li></ul></li></ul><h4 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h4><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="数据库对象" tabindex="-1"><a class="header-anchor" href="#数据库对象" aria-hidden="true">#</a> 数据库对象</h4><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>表</td><td>表是用来存放用户数据的对象，由行和列组成，列就是字段，行就是表中的记录</td></tr><tr><td>约束</td><td>保证数据完整性的规则，设置在单个字段或者多个字段组合上，写入这些字段的数据必须符合约束的限制</td></tr><tr><td>视图</td><td>是一个命名的查询，用于改变基表数据的显示，通过视图能简化查询;访问方式与表相同</td></tr><tr><td>索引</td><td>构建于表的单字段或都字段组合上，用于加速对表中数据的查询</td></tr><tr><td>序列</td><td>产生顺序的不重复数据字串，被作为主键的束值的参照</td></tr><tr><td>同义词</td><td>数据库对象的别名</td></tr></tbody></table><h4 id="什么是视图" tabindex="-1"><a class="header-anchor" href="#什么是视图" aria-hidden="true">#</a> 什么是视图？</h4><ul><li>视图是逻辑上来自一个或多个表的数据集合。</li></ul><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="为什么使用视图" tabindex="-1"><a class="header-anchor" href="#为什么使用视图" aria-hidden="true">#</a> 为什么使用视图</h4><ul><li>限制其它用户对数据库表的访问,因为视图可以有选择性的显示数据库表的一部分；</li><li>容易实现复杂的查询；</li><li>对于相同的数据可以产生不同的视图；</li></ul><h4 id="视图分类" tabindex="-1"><a class="header-anchor" href="#视图分类" aria-hidden="true">#</a> 视图分类</h4><ul><li>视图分为简单视图和复杂视图，最基本差别在DML操作上</li></ul><table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>特征</td><td>简单视图</td><td>复杂视图</td></tr><tr><td>基表数量</td><td>一个</td><td>一个或多个</td></tr><tr><td>包含函数</td><td>没有</td><td>有</td></tr><tr><td>包含数据组</td><td>没有</td><td>有</td></tr><tr><td>通过视图实现DML操作</td><td>可以</td><td>不一定</td></tr></tbody></table><h4 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h4><ul><li>创建视图语法；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE [OR REPLACE] [FORCE|NOFORCE] VIEW viewname
  [(column[, column]...)]
AS subquery
[WITH CHECK OPTION [CONSTRAINT constraintname]]
[WITH READ ONLY]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>OR REPLACE：如果所创建的视图已经存在，该选项表示修改原视图的定义；</p></li><li><p>FORCE：不管视图所基于的基表是否存在，都会创建该视图；</p></li><li><p>NOFORCE：只有视图所基于的基表都存在，才会创建该视图；</p></li><li><p>viewname ：视图的名称；</p></li><li><p>column ：列名，列名的数量必须和视图所对应查询语句的列数量相等；</p></li><li><p>subquery：一条完整的SELECT语句；</p></li><li><p>WITH CHECK OPTION：一个约束条件，通过视图所插入或修改的数据行必须满足视图所定义的查询； constraintname：约束名；</p></li><li><p>WITH READ ONLY：确保在该视图上不能进行任何DML操作；</p></li><li><p>例：创建一个视图v_emp10，通过该视图只能查看10号部门的员工编号，员工姓名，职位。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE VIEW 	empvu10
  2  AS SELECT	empno, ename, job
  3  FROM			emp
  4  WHERE			deptno = 10;
View created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在用SQL*Plus中，可以使用DESC命令显示视图的结构。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; DESC empvu10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建视图时，在子查询中使用列的别名</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE VIEW 	salvu30
  2  AS SELECT	empno EMPLOYEE_NUMBER, ename NAME,
  3				sal SALARY
  4  FROM				emp
  5  WHERE				deptno = 30;
View created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建复杂视图" tabindex="-1"><a class="header-anchor" href="#创建复杂视图" aria-hidden="true">#</a> 创建复杂视图</h4><ul><li>例：创建一个视图，通过该视图可以查看每个部门的名称，最低工资，最高工资，平均工资</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE VIEW	dept_sum_vu
  2    				(name, minsal, maxsal, avgsal)
  3  AS SELECT	d.dname, MIN(e.sal), MAX(e.sal),
  4				AVG(e.sal)
  5  FROM				emp e, dept d
  6  WHERE				e.deptno = d.deptno
  7  GROUP BY 	d.dname;
View created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从视图中检索数据，同从表中检索数据一样，只不过是只能看到视图所定义的那些列。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; 	SELECT *
  2 	FROM	salvu30;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EMPLOYEE_NUMBER NAME          SALARY
--------------- ---------- ---------
           7698 BLAKE           2850
           7654 MARTIN          1250
           7499 ALLEN           1600
           7844 TURNER          1500
           7900 JAMES            950
           7521 WARD            1250

6 rows selected.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改视图" tabindex="-1"><a class="header-anchor" href="#修改视图" aria-hidden="true">#</a> 修改视图</h4><ul><li>用 CREATE OR REPLACE VIEW子句修改视图empvu10，为每个列添加别名。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE OR REPLACE VIEW empvu10
  2    	(employee_number, employee_name, job_title)
  3  AS SELECT 	empno, ename, job
  4  FROM				emp
  5  WHERE				deptno = 10;
View created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CREATE VIEW子句中别名的顺序必须和内部查询中的列的顺序一一对应。</li></ul><h4 id="视图上执行dml操作的规则" tabindex="-1"><a class="header-anchor" href="#视图上执行dml操作的规则" aria-hidden="true">#</a> 视图上执行DML操作的规则</h4><ul><li>在简单视图上可以执行 DML 操作；</li><li>您可以通过视图删除基表中数据，只要视图中不出现以下情况： <ul><li>Group 函数；</li><li>GROUP BY 子句；</li><li>DISTINCT 关键字；</li></ul></li><li>您可以通过视图修改基表中数据，只要视图中不出现以下情况： <ul><li>GROUP函数、GROUP BY子句，DISTINCT关键字；</li><li>使用表达式定义的列；</li><li>ROWNUM 伪列；</li></ul></li><li>您可以通过视图向基表插入数据，只要视图中不出现以下情况： <ul><li>GROUP函数、GROUP BY子句，DISTINCT关键字；</li><li>使用表达式定义的列；</li><li>ROWNUM 伪列；</li><li>基表中未在视图中选择的其它列定义为非空并且没有默认值；</li></ul></li></ul><h4 id="with-check-option-子句" tabindex="-1"><a class="header-anchor" href="#with-check-option-子句" aria-hidden="true">#</a> WITH CHECK OPTION 子句</h4><ul><li>如果要确保在视图上执行的DML操作仅限于一定的范围，便可使用WITH CHECK OPTION子句；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE OR REPLACE VIEW empvu20
  2  AS SELECT	*
  3  FROM	        emp
  4  WHERE	        deptno = 20
  5  WITH CHECK OPTION CONSTRAINT empvu20_ck;
View created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在视图中任何修改部门编号的操作都会失败，因为这违反了 WITH CHECK OPTION约束。</li></ul><h4 id="拒绝-dml-操作" tabindex="-1"><a class="header-anchor" href="#拒绝-dml-操作" aria-hidden="true">#</a> 拒绝 DML 操作</h4><ul><li>在视图定义时使用WITH READ ONLY选项，可以确保不能对视图执行DML操作；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE OR REPLACE VIEW empvu10
  2        (employee_number, employee_name, job_title)
  3  AS SELECT	empno, ename, job
  4  FROM				emp
  5  WHERE				deptno = 10
  6  WITH READ ONLY;
View created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>任何试图执行DML的操作都会导致一个错误ORA-01752。</li></ul><h4 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图" aria-hidden="true">#</a> 删除视图</h4><ul><li>删除视图并不会删除数据，因为视图是基于数据库中的基表的虚表。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP VIEW view; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; DROP VIEW empvu10; 
View dropped.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="相关数据字典" tabindex="-1"><a class="header-anchor" href="#相关数据字典" aria-hidden="true">#</a> 相关数据字典</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>USER_VIEWS：字典中包含了视图的定义。
USER_UPDATABLE_COLUMNS：字典包含了哪些列可以更新、插入、删除。
USER_OBJECTS：字典中包含了用户的对象。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="本节重点总结" tabindex="-1"><a class="header-anchor" href="#本节重点总结" aria-hidden="true">#</a> 本节重点总结</h4><ul><li>理解视图的作用、分类；</li><li>掌握如何创建简单视图；</li><li>掌握如何创建复杂视图；</li><li>理解带约束视图的含义；</li><li>理解只读视图的含义；</li><li>掌握如何从视图中检索数据；</li><li>掌握修改、删除视图；</li><li>了解通过视图执行DML操作的规则；</li></ul><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,55);function p(g,x){const d=u("ExternalLinkIcon");return a(),n("div",null,[t(" more "),e("h1",h,[o,i(),e("a",b,[i("32-Oracle-视图.md"),s(d)])]),E])}const O=l(m,[["render",p],["__file","index.html.vue"]]);export{O as default};

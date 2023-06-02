import{_ as n,X as a,Y as d,a1 as t,Z as e,$ as i,a2 as s,a0 as r,F as c}from"./framework-68dd73a2.js";const u="/blog/assets/Oracle_31_1.png",v="/blog/assets/Oracle_31_2.png",m="/blog/assets/Oracle_31_3.png",o="/blog/assets/Oracle_31_4.png",p="/blog/assets/Oracle_31_5.png",b={},E={id:"_31-oracle约束-md",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#_31-oracle约束-md","aria-hidden":"true"},"#",-1),N={href:"http://xn--31-Oracle-t88sm26r.md",target:"_blank",rel:"noopener noreferrer"},R=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="章节目标" tabindex="-1"><a class="header-anchor" href="#章节目标" aria-hidden="true">#</a> 章节目标</h3><ul><li>通过本章学习，学员应达到如下目标： <ul><li>理解约束的作用；</li><li>掌握五种类型的约束及含义；</li><li>掌握五种类型约束的创建方式；</li><li>了解约束的追加、删除及启用、禁用;</li></ul></li></ul><h3 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h3><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据库对象" tabindex="-1"><a class="header-anchor" href="#数据库对象" aria-hidden="true">#</a> 数据库对象</h3><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>表</td><td>表是用来存放用户数据的对象，由行和列组成，列就是字段，行就是表中的记录</td></tr><tr><td>约束</td><td>是一种保证数据完整性的规则。约束设置在单个字段或者多个字段组合上，写入这些字段的行数据必须要符合约束的规则。</td></tr><tr><td>视图</td><td>虚表，是一个命名的查询，用于改变基表数据的显示，简化查询。访问方式与表相同，同样可使用查询语句</td></tr><tr><td>索引</td><td>构建于表的单字段或者字段组合上，用于加速对表中数据的查询</td></tr><tr><td>序列</td><td>产生顺序的不重复数字串，被作为主键约束值的参照</td></tr><tr><td>同义词</td><td>数据库对象的别名</td></tr></tbody></table><h3 id="约束及作用" tabindex="-1"><a class="header-anchor" href="#约束及作用" aria-hidden="true">#</a> 约束及作用</h3><ul><li><p>约束： Constraint，是定义在表上的一种强制规则。</p></li><li><p>当为某个表定义约束后，对该表做的所有SQL操作都必须满足约束的规则要求，否则操作将失败。</p></li></ul><h3 id="约束类型" tabindex="-1"><a class="header-anchor" href="#约束类型" aria-hidden="true">#</a> 约束类型</h3><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>约束</td><td>说明</td></tr><tr><td>NOT NULL</td><td>非空约束，指定某列的所有行数据不能包含空值</td></tr><tr><td>UNIQUE</td><td>唯一性约束，指定列或者列的组合的所有行数据必须唯一</td></tr><tr><td>PRIMARY KEY</td><td>主键约束，表的每行的唯一性标识，指定列或者列的组合的所有行数据必须唯一</td></tr><tr><td>FOREIGN KEY</td><td>外键约束，在列及引用列上建立的一种强制依赖关系</td></tr><tr><td>CHECK</td><td>检查性约束，在列上指定一个必须满足的条件</td></tr></tbody></table><h3 id="约束命名规则" tabindex="-1"><a class="header-anchor" href="#约束命名规则" aria-hidden="true">#</a> 约束命名规则</h3><ul><li><p>约束也是数据库对象，必须按照命名规则命名，如果你不命名约束，Oracle服务器将用SYS_Cn格式产生一个名字，这里n是一个唯一的整数。</p></li><li><p>除了NOT NULL约束外，建议给其它约束起名字，命名规则为：表名 _ 列名 _ 约束类型。</p></li></ul><h3 id="约束操作" tabindex="-1"><a class="header-anchor" href="#约束操作" aria-hidden="true">#</a> 约束操作</h3><ul><li><p>定义约束：约束通常在创建表的同时被创建；</p></li><li><p>追加约束：在表被创建后，如果有需求也可以临时添加约束；</p></li><li><p>启用及禁用约束：约束可以被临时禁用和启用。</p></li></ul><h3 id="定义约束" tabindex="-1"><a class="header-anchor" href="#定义约束" aria-hidden="true">#</a> 定义约束</h3><ul><li>定义约束语法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE [schema.]table
(column1 datatype [DEFAULT expr]
         [CONSTRAINT constraint_name] constraint_type ],--列级别约束
column2 datatype [DEFAULT expr]
         [CONSTRAINT constraint_name] constraint_type ],--列级别约束
  ……
 [CONSTRAINT constraint_name] constraint_type]--表级别约束
		);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>其中: <ul><li>约束既可以写在每个对应列的后面，称之为列级别约束，一个列级别约束只能作用在一个列上；</li><li>也可以写完所有列之后，再写约束，称之为表级别约束，一个表级别约束既可以作用在一个列上，也可以作用在列的组合上；</li><li>NOT NULL约束只能定义在列级别上，联合主键或联合唯一性约束只能定义在表级别上，其它约束既可以定义成表级别，也可以定义成列级别；</li><li>列级别约束和表级别约束达到的作用完全相同,只是书写的位置不同;</li><li>CONSTRAINT:约束的关键字；constraint_name:约束名字；constraint_type：约束的类型；</li></ul></li></ul><h3 id="not-null-约束" tabindex="-1"><a class="header-anchor" href="#not-null-约束" aria-hidden="true">#</a> NOT NULL 约束</h3><ul><li>NOT NULL约束 ：也叫非空约束，确保被约束列的所有行记录都不能为空值。</li></ul><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>NOT NULL约束只能定义在在列级上。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE emp_nn(
  2  	empno 	NUMBER(4),
  3	ename	VARCHAR2(10) NOT NULL,
  4	job	VARCHAR2(9),
  5	mgr	NUMBER(4),
  6	hiredate	DATE,
  7	sal	NUMBER(7,2),
  8 	comm	NUMBER(7,2),
  9	deptno	NUMBER(7,2) NOT NULL);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>例子里应用NOT NULL约束到emp_nn表的ename,deptno列,因为对这两个列的约束未被命名，Oracle服务器将为它创建名字。</p></li><li><p>在指定约束时,也可以指定约束的名字：... ename VARCHAR2(20) CONSTRAINT emp_ename_nn NOT NULL...</p></li></ul><h3 id="unique-约束" tabindex="-1"><a class="header-anchor" href="#unique-约束" aria-hidden="true">#</a> UNIQUE 约束</h3><ul><li>UNIQUE约束：也叫唯一约束，用来确保表中的某一列或者某几列组合的所有行数据必须唯一，定义UNIQUE约束的列 (或列组合) 被称为唯一键。</li><li>每个表可以有多个为UNIQUE约束。</li></ul><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>可以定义在列一级：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE   deptment(
  2  	deptno 	  NUMBER(2),
  3	dname	  VARCHAR2(14) CONSTRAINT
  4                  dept_dname_uk UNIQUE,
  5	loc	  VARCHAR2(13)
  6	);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>也可以定义在表一级：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE   deptment(
  2  	deptno 	  NUMBER(2),
  3	dname	  VARCHAR2(14),
  4	loc	  VARCHAR2(13),
  5	CONSTRAINT dept_dname_uk UNIQUE(dname));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>UNIQUE约束允许输入空值，除非我们在相应的列上定义NOT NULL 约束。</li></ul><h3 id="primary-key-约束" tabindex="-1"><a class="header-anchor" href="#primary-key-约束" aria-hidden="true">#</a> PRIMARY KEY 约束</h3><ul><li>PRIMARY KEY约束：主键约束，用来确保表中的某一列或者某几列组合的所有行数据必须唯一，并且确保作为主键一部分的列不能包含空值；</li><li>每个表只能创建一个主键约束。</li></ul><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>可以定义在列一级</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE   deptment(
  2  	deptno 	  NUMBER(2) CONSTRAINT dept_deptno_pk 
  3                           PRIMARY KEY,
  4	dname	  VARCHAR2(14),
  5	loc	  VARCHAR2(13),
  6	CONSTRAINT dept_dname_uk UNIQUE (dname)
  7	);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>也可以定义在表一级</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE   deptment(
  2  	deptno 	  NUMBER(2),
  3	dname	  VARCHAR2(14),
  4	loc	  VARCHAR2(13),
  5	CONSTRAINT dept_dname_uk UNIQUE (dname),
  6	CONSTRAINT dept_deptno_pk PRIMARY KEY(deptno));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreign-key-约束" tabindex="-1"><a class="header-anchor" href="#foreign-key-约束" aria-hidden="true">#</a> FOREIGN KEY 约束</h3><ul><li><p>FOREIGN KEY，也叫外键约束，外键确保了相关联的两个字段的关系：</p><ul><li>外键列的值必须在引用列值的范围内，或者为空；</li><li>外键参照的是列必须是主键或者唯一键；</li></ul></li><li><p>主键表主键值被外键表参照时，主键表记录不允许被删除。</p></li></ul><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>可以定义在列一级</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE emp_fk1(
  2  	empno 	NUMBER(4),
  3	ename	VARCHAR2(10) NOT NULL,
  4	job	VARCHAR2(9),
  5	deptno	NUMBER(7,2) NOT NULL 
  6	CONSTRAINT emp_deptno_fk REFERENCES dept (deptno),
  7      sal number(7,2)
  8    );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>也可以定义在表一级</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE emp_fk2(
  2  	empno 	NUMBER(4),
  3	ename	VARCHAR2(10) NOT NULL,
  4	deptno	NUMBER(7,2) NOT NULL,
  5	CONSTRAINT emp_deptno_fk FOREIGN KEY (deptno)
  6			REFERENCES dept (deptno) 
  7		ON DELETE CASCADE 
  8  );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>FOREIGN KEY: 定义在子表的列中</p></li><li><p>REFERENCES: 引用列所在的父表</p></li><li><p>注:</p><ul><li>ON DELETE CASCADE:当父表中的行被删除时，子表中相依赖的行同时被删除；</li><li>ON DELETE SET NULL:当父表的行被删除时，子表中相依赖的行被转换为空值；</li><li>无ON DELETE CASCADE或ON DELETE SET NULL选项，当附表中的行被删除时，如果父表中的行在子表中被引用，则提示不能被删除。</li></ul></li></ul><h3 id="check-约束" tabindex="-1"><a class="header-anchor" href="#check-约束" aria-hidden="true">#</a> CHECK 约束</h3><ul><li><p>CHECK约束，也叫检查性约束，确保某个列的所有行数据都必须满足的条件，如：</p><ul><li><p>sal NUMBER(8，2) CONSTRAINT dept_sal_min CHECK (sal&gt; 0)</p></li><li><p>要求sal字段的所有行数据必须大于0</p></li></ul></li><li><p>表达式不允许使用:</p><ul><li>伪列，例如： CURRVAL, NEXTVAL, LEVEL及 ROWNUM；</li><li>可以调用SYSDATE, UID, USER及 USERENV 函数；</li><li>对其它记录其它值的查询。</li></ul></li><li><p>可以定义在列一级</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE emp_fk3(
  2  	empno 	NUMBER(4),
  3	ename	VARCHAR2(10) NOT NULL,
  4	deptno	NUMBER(7,2) 
  5	CONSTRAINT emp_deptno_ck CHECK(deptno between 10 and 99),
  6      sal number(7,2)
  7    );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>也可以定义在表一级</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SQL&gt; CREATE TABLE emp_fk4(
  2  	empno 	NUMBER(4),
  3	ename	VARCHAR2(10) NOT NULL,
  4	deptno	NUMBER(7,2) NOT NULL,
  5      sal      NUMBER(7,2),
  6	CONSTRAINT emp4_deptno_ck 
  7           CHECK(deptno between 10 and 99) 
  8  );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="追加约束" tabindex="-1"><a class="header-anchor" href="#追加约束" aria-hidden="true">#</a> 追加约束</h3><ul><li>也可以用ALTER TABLE语句为表： <ul><li>追加或删除约束，但不修改它的结构；</li><li>启用或禁用约束；</li><li>用MODIFY子句添加一个NOT NULL约束；</li></ul></li><li>追加约束，语法为：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table ADD [CONSTRAINT constraint] type (column);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在语法中： <ul><li>table 是表的名字</li><li>constraint 是约束的名字</li><li>type 是约束的类型</li><li>column 是受约束影响的列的名字</li></ul></li><li>追加FOREIGN KEY约束</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table 
	ADD [CONSTRAINT constraint] FOREIGN KEY(column)
     REFERENCES table(column));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>例：在emp表中的mgr上添加一个外键约束，指示该列的值必须引用emp表中的empno值。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE emp
	ADD CONSTRAINT emp_mgr_fk FOREIGN KEY(mgr) 
	REFERENCES emp (empno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>追加 NOT NULL 约束</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table 
	MODIFY (column [CONSTRAINT constraint] NOT NULL);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除约束" tabindex="-1"><a class="header-anchor" href="#删除约束" aria-hidden="true">#</a> 删除约束</h3><ul><li>语法</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table DROP PRIMARY KEY|UNIQUE(column)
|CONSTRAINT constraint [CASCADE];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在语法中： <ul><li>table 是表的名字</li><li>column 是受约束影响的列的名字</li><li>constraint 是约束的名字</li><li>cascade 级联删除</li></ul></li><li>例:从emp表中删除emp_mgr_fk约束</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE emp DROP CONSTRAINT emp_mgr_fk;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>例:删除dept表上的PRIMARY KEY约束，并且删除相关联的在emp表deptno上的FOREIGN KEY约束;</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE dept DROP PRIMARY KEY CASCADE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>DROP子句的CASCADE选项导致任何与其相依赖的约束也被删除。</li></ul><h3 id="约束启用与禁用" tabindex="-1"><a class="header-anchor" href="#约束启用与禁用" aria-hidden="true">#</a> 约束启用与禁用</h3><ul><li>约束禁用 <ul><li>如果有大批量数据导入时，我们可以采用禁用约束的方法，主要的好处，首先效率高，另外有主外键约束的表之间导入时，不用考虑导入的先后顺序。</li><li>禁用约束语法：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table  DISABLE CONSTRAINT constraint [CASCADE]; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>应用CASCADE选项禁用相依赖的外键约束</p></li><li><p>启用约束语法：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table  ENABLE CONSTRAINT constraint; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="相关数据字典" tabindex="-1"><a class="header-anchor" href="#相关数据字典" aria-hidden="true">#</a> 相关数据字典</h3><ul><li>相关数据字典 <ul><li>和约束相关的数据字典有：USER_CONSTRAINTS：查看表上所有的约束。USER_CONS_COLUMNS：查看与约束相关的列名，该字典对于那些由系统指定名字的约束特别有用。</li><li>在约束类型中，C代表CHECK，P代表PRIMARY KEY，R代表FOREIGN KEY， U代表UNIQUE，NOT NULL约束实际上是一个CHECK约束。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select constraint_name,constraint_type 
from user_constraints; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h3><ul><li>理解约束作用；</li><li>掌握五种约束类型及每种约束能达到的效果；</li><li>掌握在创建表的同时创建约束写法；</li><li>理解追加、删除、启用、禁用约束；</li><li>了解约束相关数据字典；</li></ul><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle-约束</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,84);function g(A,T){const l=c("ExternalLinkIcon");return a(),d("div",null,[t(" more "),e("h1",E,[h,i(),e("a",N,[i("31-Oracle约束.md"),s(l)])]),R])}const L=n(b,[["render",g],["__file","oracle31.html.vue"]]);export{L as default};

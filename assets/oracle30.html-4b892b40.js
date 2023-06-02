import{_ as i,X as d,Y as a,a1 as n,Z as e,$ as l,a2 as s,a0 as r,F as u}from"./framework-68dd73a2.js";const c="/blog/assets/Oracle_30_1.png",v={},m={id:"_30-oracle创建和维护表-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_30-oracle创建和维护表-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--30-Oracle-et4o18so58ap7jg23hgw3a.md",target:"_blank",rel:"noopener noreferrer"},b=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h4><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>数据定义语言 <ul><li>数据定义语言： (Data Definition Language, DDL) 是SQL语言集中负责数据结构定义与数据库对象定义的语言，由CREATE、ALTER与DROP三个语法所组成。</li></ul></li><li>数据库对象 <ul><li>数据库对象，是数据库的组成部分，有表、约束、索引、视图、序列、同义词、触发器、存储过程、函数等。</li></ul></li></ul><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>表</td><td>表是用来存放用户数据的对象，由行和列组成，列就是字段，行就是表中的记录</td></tr><tr><td>约束</td><td>保证数据完整性的规则，设置在单个字段或者多个字段组合上，写入这些字段的数据必须符合约束的限制</td></tr><tr><td>视图</td><td>虚表，是一个命名的查询，用于改变基表数据的显示，简化查询。访问方式与表相同，同样可使用查询语句</td></tr><tr><td>索引</td><td>构建于表的单字段或者字段组合上，用于加速对表中数据的查询</td></tr><tr><td>序列</td><td>产生顺序的不重复数字串，被作为主键约束值的参照</td></tr><tr><td>同义词</td><td>数据库对象的别名</td></tr></tbody></table><ul><li>Oracle中数据库对象命名原则 <ul><li>必须由字母开始，长度在 1–30个字符之间。</li><li>名字中只能包含 A–Z, a–z, 0–9, _ (下划线)，$ 和 #。</li><li>同一个Oracle服务器用户所拥有的对象名字不能重复。</li><li>名字不能为Oracle的保留字。</li><li>名字是大小写不敏感</li></ul></li><li>创建表 <ul><li>建表语句语法 <ul><li>建表语法</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE [schema.]table
(column datatype [DEFAULT expr][, ...]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>您必须具备 : <ul><li>CREATE TABLE的权限</li><li>一定的存贮空间(ALTER USER 用户名 QUOTA 尺寸 ON 表空间名字)</li></ul></li><li>您需要指定: <ul><li>表名</li><li>列名、列的类型及列的宽度</li></ul></li><li>DEFAULT 选项 <ul><li>指定在插入或更新数据时，列的默认值</li><li>合法的值可以是字面值、表达式或SQL函数</li><li>非法的值是另一个列的名称或虚拟列</li><li>默认值的数据类型必须和列的类型匹配</li></ul></li><li>数据类型 <ul><li>数据类型(字符型)</li></ul></li></ul><table><thead><tr><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>CHAR(size)</td><td>固定长度字符型数据，长度的大小以字节为单位，默认和最小长度为 1；最大长度为 2000</td></tr><tr><td>VARCHAR2 (size)</td><td>可变长度字符数据，最小长度是 1；最大长度是4000</td></tr><tr><td>CLOB</td><td>可变长度字符数据，最大可存储4G数据</td></tr></tbody></table><ul><li><p>例：</p></li><li><p>char(10)：固定占用10个字节的空间，如‘沈阳’，声明为char(10)的话，前4个字节放&#39;沈阳&#39;，后面补充6个空值。</p></li><li><p>Varchar2(10):最大只能保存10个字节，如‘沈阳’ ，声明为Varchar2(10) 的话， 则该数据实际长度为4。</p></li><li><p>数据类型（数值型）</p></li></ul><table><thead><tr><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>NUMBER</td><td>数值型：可以表示整数，也可以表示小数，表数范围- 10的125次方到10的126次方。</td></tr><tr><td>NUMBER(n)</td><td>整型</td></tr><tr><td>NUMBER(p,s)</td><td>数值型：总长度为p，小数位最大为s位 ，整数位最大为p-s位，p的范围从1到38，s的范围从-84到127</td></tr></tbody></table><ul><li><p>例：</p></li><li><p>number(5,2)：表示一个小数，表数范围为 -999.99到999.99</p></li><li><p>number(5) ：表示一个整数，范围-99999到99999</p></li><li><p>NUMBER(p,s)：数值型：总长度为p，小数位最大为s位 ，整数位最大为p-s位，p的范围从1到38，s的范围从-84到127。</p><ul><li><p>S&gt;0：只能表示小数，精确到小数点右边s位，并四舍五入，然后检验有效数位是否&lt;=p</p></li><li><p>S&lt;0：只能表示整数，并且精确到小数点左边s位，进行四舍五入，然后检验有效数位是否&lt;=p+|s|</p></li><li><p>S=0：只能表示整数</p></li><li><p>p&lt;s：只能表示数字是绝对值小于1的数字，且从小数点右边开始的前s-p位必须是0，保留s位小数。</p></li></ul></li><li><p>数值型示例</p></li></ul><table><thead><tr><th>Value</th><th>Datatype</th><th>Stored Value</th><th>Remark</th></tr></thead><tbody><tr><td>123.2564</td><td>NUMBER</td><td>123.2564</td><td></td></tr><tr><td>1234.9876</td><td>NUMBER(6,2)</td><td>1234.99</td><td></td></tr><tr><td>12345.12345</td><td>NUMBER(6,2)</td><td>Error</td><td>整数位超范围</td></tr><tr><td>1234.9876</td><td>NUMBER(6)</td><td>1235</td><td></td></tr><tr><td>12345.345</td><td>NUMBER(5,-2)</td><td>12300</td><td></td></tr><tr><td>1234567</td><td>NUMBER(5,-2)</td><td>1234600</td><td></td></tr><tr><td>12345678</td><td>NUMBER(5,-2)</td><td>Error</td><td>整数位超范围</td></tr><tr><td>123456789</td><td>NUMBER(5,-4)</td><td>123460000</td><td></td></tr><tr><td>1234567890</td><td>NUMBER(5,-4)</td><td>Error</td><td>整数位超范围</td></tr><tr><td>12345.58</td><td>NUMBER(*, 1)</td><td>12345.6</td><td>*表示38</td></tr><tr><td>0.1</td><td>NUMBER(4,5)</td><td>Error</td><td>小数点右边前s-p位必须为0</td></tr><tr><td>0.01234567</td><td>NUMBER(4,5)</td><td>0.01235</td><td></td></tr><tr><td>0.09999</td><td>NUMBER(4,5)</td><td>0.09999</td><td></td></tr><tr><td>0.099996</td><td>NUMBER(4,5)</td><td>Error</td><td>小数位超范围</td></tr></tbody></table><ul><li>数据类型(日期型)</li></ul><table><thead><tr><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>DATE</td><td>包括年月日时分秒</td></tr><tr><td>TIMESTAMP</td><td>9i之后新增的，精度比DATE更高一些，可以精确到毫秒。</td></tr></tbody></table><ul><li>数据类型（图片类型）</li></ul><table><thead><tr><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>BLOB</td><td>最大可存储4G二进制的数据，可以存放图片，声音 ，文件</td></tr></tbody></table><ul><li><p>创建表</p></li><li><p>建表语句语法</p><ul><li>示例</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE DOSSIER (
	ID NUMBER(4), 
   CNAME VARCHAR2(20 ), 
	BIRTHDAY DATE, 
	STATURE    NUMBER(3), 
	WEIGHT NUMBER(5, 2), 
	COUNTRY_CODE CHAR(2 ) DEFAULT ‘01’); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>建表语句语法 <ul><li>默认值应用</li><li>插入默认值</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into dossier 
(ID,CNAME,BIRTHDAY, STATURE,WEIGHT  )
values
(2,&#39;姚明&#39; , to_date(&#39;1980.9.12&#39;,&#39;yyyy.mm.dd&#39;),226, 134 );
已创建 1 行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用默认值修改</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update dossier set country_code =default where id=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>用子查询语法创建表 <ul><li>使用子查询创建表的语法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE table[(column, column...)]
AS subquery; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新表的字段列表必须与子查询中的字段列表匹配</li><li>字段列表可以省略</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE dept10 
AS 
SELECT empno, ename, sal＋1000 newSalary 
FROM emp  
WHERE deptno = 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Select列表中的表达式列需要给定别名，如果没有别名会产生错误</p></li><li><p>引用另一个用户的表</p><ul><li>如果一个表不属于当前用户，如果引用它，必须把方案名放在表名的前面。例如，scott.emp</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * 
FROM scott.emp; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>修改表</p></li><li><p>修改表的定义</p><ul><li>添加列语法：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table  
ADD (columnname datatype[DEFAULT expr]
          [, columnname datatype]...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改列语法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table 
MODIFY(columnname datatype[DEFAULT expr] 
              [, columnname datatype]...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除列语法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table
DROP (columnname [,columnname]); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>添加新列</p><ul><li>增加列原则： <ul><li>可以添加或修改列</li><li>不能指定新添加列的位置，新列会成为最后一列。</li></ul></li></ul></li><li><p>如在dossier表上增加性别字段：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE dossier ADD  (sex CHAR(1));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>修改已存在的列</p><ul><li>列的修改可以修改列名，数据类型，长度，及默认值。</li><li>修改数据类型：已有的行数据必须为空。</li><li>修改长度原则：数值型修改长度：当长度向小改时，已有行的数该列必须为空；当长度向大改时，可以随意修改。字符型修改长度：当长度向小改时，只要修改后的值能容纳下当前已有数据的最大值即可，当长度向大改时，可以随意修改。</li><li>修改列的默认值：</li><li>默认值的修改不会影响已经存在的行，只影响新增加的行。</li></ul></li><li><p>8i版本之后，可以修改列名字</p><ul><li>ALTER TABLE 表名 RENAME COLUMN 原有列名 TO 新列名 。</li></ul></li><li><p>修改已存在的列</p><ul><li>把dossier表性别(sex) 列，修改为长度为2</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE dossier MODIFY  (sex CHAR(2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>添加默认值</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE dossier 
MODIFY  (sex  DEFAULT ‘男’);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除列 <ul><li>可以用DROP子句从表中删除列，包括列的定义和数据。</li><li>删除列原则： <ul><li>列可以有也可以没有数据。</li><li>表中至少保留一列。</li><li>列被删除后，不能再恢复。</li><li>被外键引用的列，不能被删除。</li></ul></li></ul></li><li>删除列 <ul><li>删除列语法一</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE emp DROP COLUMN sex; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除列语法二</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE table DROP (columnname[,columnname]); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除dept10表的两个字段“last_name”和“newsalary”。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER TABLE dept10 DROP (last_name,newsalary);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除表 <ul><li>删除表语法：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP TABLE table；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>只有表的创建者</li><li>或具有DROP ANY TABLE权限的用户才能删除表</li><li>删除表原则： <ul><li>表中所有的数据和结构都被删除。</li><li>任何视图和同义词被保留但无效。</li><li>所有与其相关的约束和索引被删除。</li><li>任何未完成的事务被提交。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DROP TABLE emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>重命名表 <ul><li>重命名语句语法：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RENAME old_name TO new_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>必须是对象的所有者</p></li><li><p>把emp表重新命名为empl</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RENAME emp TO empl; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>截断表 <ul><li>截断表语法：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TRUNCATE TABLE table; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>执行TRUNCATE语句的前提，必须是表的所有者</li><li>或者有DELETE ANY TABLE系统权限来截断表。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>TRUNCATE TABLE emp; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>TRUNCATE和DELETE区别</p><ul><li>TRUNCATE是DDL，只能删除表中所有记录，释放存储空间，使用ROLLBACK不可以回滚。</li><li>DELETE是DML，可以删除指定记录，不释放存储空间，使用ROLLBACK可以回滚。</li></ul></li><li><p>数据字典</p><ul><li>数据字典表：由Oracle 服务器创建和维护的表，通过数据字典，可以很容易了解当前用户的对象信息。比如user_tables这个数据字典表，里面保存当前用户所有的表对象。</li><li>注意：数据字典表的数据是由oracle自动维护的。</li></ul></li><li><p>相关数据字典</p><ul><li>查询数据字典</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT table_name
FROM  user_tables;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看数据字典结构</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DESC user_tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h4><ul><li>数据类型</li><li>表的两种创建方式</li><li>修改表的三种情况：添加列、修改原有列的属性、删除列</li><li>删除表</li><li>重命名表</li><li>截断表</li></ul><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,69);function E(x,g){const t=u("ExternalLinkIcon");return d(),a("div",null,[n(" more "),e("h1",m,[o,l(),e("a",p,[l("30-Oracle创建和维护表.md"),s(t)])]),b])}const A=i(v,[["render",E],["__file","oracle30.html.vue"]]);export{A as default};

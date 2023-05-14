import{_ as e,X as p,Y as t,a1 as c,Z as n,$ as s,a2 as o,a0 as l,F as i}from"./framework-68dd73a2.js";const u="/blog/assets/Oracle_58_1.png",r="/blog/assets/Oracle_58_2.png",d="/blog/assets/Oracle_58_3.png",k="/blog/assets/Oracle_58_4.png",m="/blog/assets/Oracle_58_5.png",v="/blog/assets/Oracle_58_6.png",b={},y={id:"_58-oracle-sql开发-——-创建和维护表-md",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#_58-oracle-sql开发-——-创建和维护表-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--5br62d36oixdox0c53l.md",target:"_blank",rel:"noopener noreferrer"},h=l('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><ul><li>数据定义语言： (Data Definition Language, DDL) 是SQL语言集中负责数据结构定义与数据库 对象定义的语言，由CREATE、ALTER与DROP三个 语法所组成。</li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Oracle中数据库对象命名原则 <ul><li>必须由字母开始，长度在 1–30个字符之间。</li><li>名字中只能包含 A–Z, a–z, 0–9, _ (下划线)，$ 和 #。</li><li>同一个Oracle服务器用户所拥有的对象名字不能重复。</li><li>名字不能为Oracle的保留字。</li><li>名字是大小写不敏感</li></ul></li><li>建表语法</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">[</span><span class="token keyword">schema</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token keyword">table</span>
<span class="token punctuation">(</span><span class="token keyword">column</span> datatype <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span> expr<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>+  您必须具备 :
    +   CREATE TABLE的权限
    +   一定的存贮空间(ALTER USER 用户名 QUOTA 尺寸 ON 
</code></pre><p>表空间名字)</p><ul><li><p>您需要指定:</p><ul><li>表名</li><li>列名、列的类型及列的宽度</li></ul></li><li><p>DEFAULT 选项</p><ul><li>指定在插入或更新数据时，列的默认值</li><li>合法的值可以是字面值、表达式或SQL函数</li><li>非法的值是另一个列的名称或虚拟列</li><li>默认值的数据类型必须和列的类型匹配</li></ul></li></ul><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>NUMBER(p,s)：数值型：总长度为p，小数位最大为s位 ，整数位最 大为p-s位，p的范围从1到38，s的范围从-84到127。 <ul><li>S&gt;0：只能表示小数，精确到小数点右边s位，并四舍五入，然后 检验有效数位是否&lt;=p</li><li>S&lt;0：只能表示整数，并且精确到小数点左边s位，进行四舍五入 ，然后检验有效数位是否&lt;=p+|s|</li><li>S=0：只能表示整数</li><li>p&lt;s：只能表示数字是绝对值小于1的数字，且从小数点右边开始 的前s-p位必须是0，保留s位小数。</li></ul></li></ul><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>数据查询语言 DQL<span class="token punctuation">(</span><span class="token keyword">Data</span> Query <span class="token keyword">Language</span><span class="token punctuation">)</span>: <span class="token keyword">select</span>
数据操作语言 DML<span class="token punctuation">(</span><span class="token keyword">Data</span> Manipulation <span class="token keyword">Language</span><span class="token punctuation">)</span>: <span class="token keyword">insert</span>   <span class="token keyword">update</span>   <span class="token keyword">delete</span><span class="token comment">---针对table表格中的数据增加、修改、删除</span>
事务处理语言 TPL<span class="token punctuation">(</span><span class="token keyword">Transaction</span> Process <span class="token keyword">Language</span><span class="token punctuation">)</span>:<span class="token keyword">commit</span>  <span class="token keyword">rollback</span>
事务定义语言 DDL<span class="token punctuation">(</span><span class="token keyword">Data</span> Definition <span class="token keyword">Language</span><span class="token punctuation">)</span>:   <span class="token keyword">create</span>   <span class="token keyword">alter</span>    <span class="token keyword">drop</span><span class="token comment">-----针对对象的创建、修改、删除</span>
<span class="token comment">-------------------------------------------------------</span>
<span class="token comment">--创建表</span>
<span class="token comment">--     create table 表名(列名  列类型[长度] [default 默认值][,........]);</span>
<span class="token comment">--</span>
<span class="token comment">--     子查询创建表：</span>
<span class="token comment">--            create table 表名[列名1,列名2....] as 子查询;</span>
<span class="token comment">-------------------------------------------------------</span>
<span class="token number">1.</span>创建表person<span class="token punctuation">,</span>并指定以下列的信息：
列名   列数据类型  长度  精度  默认值
id       number      <span class="token number">4</span>
cname    varchar2    <span class="token number">20</span>
birthday <span class="token keyword">date</span>
height   number      <span class="token number">3</span>
weight   number      <span class="token number">5</span>   <span class="token number">2</span>
country_code <span class="token keyword">char</span>    <span class="token number">2</span>          <span class="token string">&#39;01&#39;</span>   <span class="token comment">--一个中文占2个字节   英文与数字分别占1个字节</span>

<span class="token comment">--创建表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> person<span class="token punctuation">(</span>
       id number<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       cname varchar2<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       birthday <span class="token keyword">date</span><span class="token punctuation">,</span>
       height number<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       weight number<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       country_code <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&#39;01&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">--默认值使用</span>
<span class="token comment">--插入默认值</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> person<span class="token punctuation">(</span>id<span class="token punctuation">,</span>cname<span class="token punctuation">,</span>birthday<span class="token punctuation">,</span>height<span class="token punctuation">,</span>weight<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token string">&#39;宝宝&#39;</span><span class="token punctuation">,</span>sysdate<span class="token punctuation">,</span><span class="token number">52</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--使用默认值修改</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> person<span class="token punctuation">(</span>id<span class="token punctuation">,</span>cname<span class="token punctuation">,</span>birthday<span class="token punctuation">,</span>height<span class="token punctuation">,</span>weight<span class="token punctuation">,</span>country_code<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span><span class="token string">&#39;宝宝&#39;</span><span class="token punctuation">,</span>sysdate<span class="token punctuation">,</span><span class="token number">52</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">update</span> person <span class="token keyword">set</span> country_code <span class="token operator">=</span> <span class="token keyword">default</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>


<span class="token comment">--用子查询语法创建表</span>
<span class="token number">1.</span>创建表dept_10<span class="token punctuation">,</span>用于保存部门<span class="token number">10</span>的员工的所有信息<span class="token punctuation">,</span>表结构与emp表一致
<span class="token keyword">create</span> <span class="token keyword">table</span> dept_10 <span class="token keyword">as</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>                               <span class="token comment">--复制所有列</span>

<span class="token number">2.</span>创建表dept_20<span class="token punctuation">,</span>用于保存部门<span class="token number">20</span>的员工的雇员编号、雇员姓名、经理<span class="token punctuation">,</span>表结构信息参照emp表
<span class="token keyword">create</span> <span class="token keyword">table</span> dept_20<span class="token punctuation">(</span>empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>mgr<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>mgr <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span><span class="token comment">--复制指定列</span>

<span class="token comment">--引用另一个用户的表</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>emp<span class="token punctuation">;</span>


<span class="token comment">-------------------------------------------------------</span>
<span class="token comment">--修改表（添加列、修改列、删除列）</span>
<span class="token comment">--</span>
<span class="token comment">--     添加列：alter table 表名 add (列名 列类型[长度] [default 默认值]);</span>
<span class="token comment">--     修改列：alter table 表名 modify (列名 列类型[长度] [default 默认值]);</span>
<span class="token comment">--</span>
<span class="token comment">--     删除列(删除单列)：alter table 表名 drop column 列名; </span>
<span class="token comment">--     删除列(删除多列)：alter table 表名 drop (列名1,列名2.....); </span>
<span class="token comment">--</span>
<span class="token comment">--</span>
<span class="token comment">--     修改列注意：</span>
<span class="token comment">--            1. 修改数据类型：已有的行数据必须为空。</span>
<span class="token comment">--            2. 修改长度原则：</span>
<span class="token comment">--                     数值型修改长度：当长度向小改时，已有行的数该列必须为空；</span>
<span class="token comment">--                                     当长度向大改时，可以随意修改。</span>
<span class="token comment">--                     字符型修改长度：当长度向小改时，只要修改后的值能容纳下当前已有数据的最大值即可，</span>
<span class="token comment">--                                     当长度向大改时，可以随意修改。</span>
<span class="token comment">--            3. 修改列的默认值：</span>
<span class="token comment">--                     默认值的修改不会影响已经存在的行，只影响新增加的行</span>
<span class="token comment">--</span>
<span class="token comment">--            4. 修改列名：</span>
<span class="token comment">--                     alter table 表名  rename column 原列名  to 新列名;</span>
<span class="token comment">--  </span>
<span class="token comment">--     删除列注意：</span>
<span class="token comment">--            1.列可以有也可以没有数据。  </span>
<span class="token comment">--            2.表中至少保留一列。 </span>
<span class="token comment">--            3.列被删除后，不能再恢复。 </span>
<span class="token comment">--            4.被外键引用的列，不能被删除。</span>

<span class="token comment">-------------------------------------------------------</span>
<span class="token comment">--添加列</span>
<span class="token number">1.</span>给person表添加性别列:sex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">add</span> sex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> person<span class="token punctuation">(</span>id<span class="token punctuation">,</span>cname<span class="token punctuation">,</span>birthday<span class="token punctuation">,</span>height<span class="token punctuation">,</span>weight<span class="token punctuation">,</span>sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span><span class="token string">&#39;宝宝3号&#39;</span><span class="token punctuation">,</span>sysdate<span class="token punctuation">,</span><span class="token number">52</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--修改列</span>
<span class="token number">1.</span>将person表的sex列的数据类型修改为number<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">modify</span> sex number<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">--not ok 1. 修改数据类型：已有的行数据必须为空。</span>

<span class="token number">2.</span>将person表的sex的长度修改为<span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">modify</span> sex <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">--not ok 2.当长度向小改时，已有行的数该列必须为空</span>

<span class="token number">3.</span>将person表的country_code的默认值修改为<span class="token string">&#39;88&#39;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">modify</span> country_code <span class="token keyword">default</span> <span class="token string">&#39;88&#39;</span><span class="token punctuation">;</span>  <span class="token comment">--3. 默认值的修改不会影响已经存在的行，只影响新增加的行</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> person<span class="token punctuation">(</span>id<span class="token punctuation">,</span>cname<span class="token punctuation">,</span>birthday<span class="token punctuation">,</span>height<span class="token punctuation">,</span>weight<span class="token punctuation">,</span>sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">,</span><span class="token string">&#39;宝宝4号&#39;</span><span class="token punctuation">,</span>sysdate<span class="token punctuation">,</span><span class="token number">52</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">4.</span>将person表的sex的列名修改为sexName
<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">rename</span> <span class="token keyword">column</span> sex <span class="token keyword">to</span> sexName<span class="token punctuation">;</span>

<span class="token comment">--删除列</span>
<span class="token number">1.</span>将person表的sexName列删除
<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">drop</span> <span class="token keyword">column</span> sexName<span class="token punctuation">;</span><span class="token comment">--删除单列  1.列可以有也可以没有数据。  </span>

<span class="token number">2.</span>将person表的height、weight列删除
<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">drop</span> <span class="token punctuation">(</span>height<span class="token punctuation">,</span>weight<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--删除多列</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> person <span class="token keyword">drop</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span>cname<span class="token punctuation">,</span>birthday<span class="token punctuation">,</span>country_code<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--not ok 无法删除表的全部列   2.表中至少保留一列。</span>

<span class="token number">3.</span>将dept表的deptno列删除
<span class="token keyword">alter</span> <span class="token keyword">table</span> dept <span class="token keyword">drop</span> <span class="token punctuation">(</span>deptno<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--not ok  无法删除父项关键字列     4.被外键引用的列，不能被删除。</span>

<span class="token comment">-------------------------------------------------------</span>
<span class="token comment">--删除表</span>
<span class="token comment">--      语法： drop table 表名;</span>
<span class="token comment">-------------------------------------------------------</span>
<span class="token number">1.</span>删除表person
<span class="token keyword">drop</span> <span class="token keyword">table</span> person

<span class="token comment">-------------------------------------------------------</span>
<span class="token comment">--重命名表</span>
<span class="token comment">--      语法： rename 旧表名 to 新表名;</span>
<span class="token comment">-------------------------------------------------------</span>
<span class="token number">1.</span>将person表表名修改为dossier
<span class="token keyword">rename</span> person <span class="token keyword">to</span> dossier<span class="token punctuation">;</span>

<span class="token comment">-------------------------------------------------------</span>
<span class="token comment">--截断表</span>
<span class="token comment">--      语法： truncate table 表名；</span>
<span class="token comment">--</span>
<span class="token comment">--      截断表truncate与删除表数据delete的区别：</span>
<span class="token comment">--          truncate属于DDL语言，删除表中所有的数据，释放存储空间，不可以撤回数据</span>
<span class="token comment">--          delete属于DML语言，可以删除指定的数据,不释放存储空间，可以通过rollback回滚数据</span>
<span class="token comment">-------------------------------------------------------</span>
<span class="token keyword">truncate</span> <span class="token keyword">table</span> person<span class="token punctuation">;</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> person<span class="token punctuation">;</span>

<span class="token comment">-------------------------------------------------------</span>
<span class="token comment">--数据字典</span>
<span class="token comment">-------------------------------------------------------</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_tables<span class="token punctuation">;</span><span class="token comment">--查询当前用户下所有的表格</span>

<span class="token comment">--练习</span>
<span class="token number">1.</span>请分析按照以下要求都需要建立什么类型的字段?
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>最大<span class="token number">2000</span>个字节定长字符串
<span class="token keyword">char</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>如果输入‘张三’ 后添空格<span class="token number">6</span>个
<span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>性别输入<span class="token string">&#39;男&#39;</span>或<span class="token string">&#39;女’
char(2)

(4)最大4000个字节变长字符串
varchar2

(5)如果在数据库中输入&#39;</span>张三<span class="token string">&#39;则显示数据&#39;</span>张三’
varchar2<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>表示数字范围为<span class="token operator">-</span><span class="token number">10</span>的<span class="token number">125</span>次方到<span class="token number">10</span>的<span class="token number">126</span>次方<span class="token punctuation">,</span> 可以表示小数 也可以表示整数
number

<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>最大表示<span class="token number">4</span>位整数  <span class="token operator">-</span><span class="token number">9999</span> 到 <span class="token number">9999</span>
number<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>表示<span class="token number">5</span>位有效数字 <span class="token number">2</span>位小数的 一个小数  <span class="token operator">-</span><span class="token number">999.99</span> 到 <span class="token number">999.99</span>
number<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>包含年月日和时分秒
<span class="token keyword">date</span>

<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>包含年月日和时分秒毫秒
<span class="token keyword">timestamp</span>

<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>二进制大对象图像<span class="token operator">/</span>声音
<span class="token keyword">blob</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Oracle-SQL开发 —— 创建和维护表</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,25);function _(f,x){const a=i("ExternalLinkIcon");return p(),t("div",null,[c(" more "),n("h1",y,[w,s(" 58-Oracle-SQL开发 —— "),n("a",g,[s("创建和维护表.md"),o(a)])]),h])}const D=e(b,[["render",_],["__file","58-Oracle-SQL开发 —— 创建和维护表.html.vue"]]);export{D as default};

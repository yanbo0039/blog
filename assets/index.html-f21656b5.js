import{_ as e,X as p,Y as o,a1 as l,Z as n,$ as s,a2 as t,a0 as c,F as i}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_59_1.png",d={},k={id:"_59-oracle-sql开发-——-序列、索引、同义词-md",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_59-oracle-sql开发-——-序列、索引、同义词-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--7iq43lp98c.md",target:"_blank",rel:"noopener noreferrer"},v=c('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><ul><li>NEXTVAL和CURRVAL伪列 <ul><li>CURRVAL：表示序列返回的当前值；</li><li>NEXTVAL：表示序列返回的下一个值；</li><li>CURRVAL在被引用之前，必须先使用NEXTVAL来产生一个序 列值；</li><li>可用语句 序列名.CURRVAL或 序列名.NEXTVAL来访问序列;</li></ul></li><li>您可以在下列情况使用NEXTVAL 和 CURRVAL： <ul><li>SELECT 语句的SELECT列表中，但不包括子查询中的 SELECT语句</li><li>INSERT 语句中的子查询SELECT列表中</li><li>INSERT 语句的VALUES子句中</li><li>UPDATE 语句的SET子句中</li></ul></li><li>下列情况不能使用 NEXTVAL 和 CURRVAL： <ul><li>在视图的SELECT列表中</li><li>包含DISTINCT关键字的 SELECT语句中</li><li>含有 GROUP BY, HAVING, ORDER BY子句的SELECT语句 中</li><li>SELECT, DELETE, UPDATE 语句的子查询中</li><li>含有 DEFAULT表达式的 CREATE TABLE、 ALTER TABLE 语句中</li></ul></li><li>ROWID <ul><li>是一个伪列，系统自动产生。</li><li>ROWID能唯一标识每一条数据库行记录的物理地址，通过 ROWID 能快速定位到一条行记录</li></ul></li></ul><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>索引( INDEX ): <ul><li>是对数据库表中一个或多个列的值进行排序的一种数据库 对象。</li><li>在数据库中,通过索引可以加速对表的查询速度;</li></ul></li></ul><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--索引(index):单列索引、复合索引，用于优化查询效率</span>
<span class="token comment">--</span>
<span class="token comment">--    自动创建：当创建primary key或unique 约束时，默认创建索引</span>
<span class="token comment">--</span>
<span class="token comment">--    手动创建：create index idx_tableName_columName on 表名(列名1[,列名2...])</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--rownum 伪列</span>
<span class="token comment">--       虚拟存在的，每查询一次数据，永远从1开始，只能使用 &lt;或者 &lt;=比较</span>
<span class="token keyword">select</span> rownum<span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp e<span class="token punctuation">;</span>

<span class="token comment">--rowid 伪列</span>
<span class="token comment">--      真实存在在物理磁盘中，唯一标识每一行数据的值</span>
<span class="token keyword">select</span> rowid<span class="token punctuation">,</span>e<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp e<span class="token punctuation">;</span>

<span class="token comment">----------------------</span>
<span class="token comment">--创建索引</span>
<span class="token comment">----------------------</span>
<span class="token comment">--单列索引</span>
<span class="token number">1.</span>在emp表的ename字段上创建索引<span class="token punctuation">.</span>
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_emp_ename <span class="token keyword">on</span> emp<span class="token punctuation">(</span>ename<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--复合索引（组合索引）</span>
<span class="token number">2.</span>在emp表的deptno和job的组合上创建索引
<span class="token keyword">create</span> <span class="token keyword">index</span> idx_emp_deptno_job <span class="token keyword">on</span> emp<span class="token punctuation">(</span>deptno<span class="token punctuation">,</span>job<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--测试索引</span>
<span class="token number">1.</span>创建表emp_bak，表结构同emp（即复制emp的表结构）
<span class="token keyword">create</span> <span class="token keyword">table</span> emp_bak <span class="token keyword">as</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token number">2.</span>往emp_bak表中插入大批量数据<span class="token punctuation">(</span>单位：百万<span class="token punctuation">)</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> emp_bak <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp_bak<span class="token punctuation">;</span><span class="token comment">--3932160</span>

<span class="token number">3.</span>将empno设置为唯一的值
<span class="token keyword">alter</span> <span class="token keyword">table</span> emp_bak <span class="token keyword">modify</span><span class="token punctuation">(</span>empno number<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--1.将empno的长度修改7</span>

<span class="token keyword">update</span> emp_bak <span class="token keyword">set</span> empno <span class="token operator">=</span> rownum<span class="token punctuation">;</span>          <span class="token comment">--2.使用rownum将empno修改为唯一值</span>
<span class="token keyword">update</span> emp_bak <span class="token keyword">set</span> empno <span class="token operator">=</span> seq_emp<span class="token punctuation">.</span>nextval<span class="token punctuation">;</span> <span class="token comment">--2.使用序列修改为唯一值</span>

<span class="token number">4.</span>查询empno为<span class="token number">3032160</span>的员工信息
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp_bak <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">3032160</span><span class="token punctuation">;</span><span class="token comment">--无索引  0.20秒</span>

<span class="token keyword">create</span> <span class="token keyword">index</span> idx_emp_empno <span class="token keyword">on</span> emp_bak<span class="token punctuation">(</span>empno<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--创建索引</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp_bak <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">3032160</span><span class="token punctuation">;</span><span class="token comment">--有索引  0.01秒</span>

<span class="token comment">----------分析有无索引的区别------------start</span>
<span class="token comment">--1.无索引</span>
<span class="token keyword">select</span> rowid<span class="token punctuation">,</span>emp_bak<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp_bak <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">3032160</span><span class="token punctuation">;</span><span class="token comment">--0.2  干巴巴的查询了6000多行</span>

<span class="token comment">--2.有索引：给empno创建了一个索引，为了维护 3032160 -&gt; AAATBlAAEAAAOMfABa 这段奇妙的关系，需要花代价</span>
① <span class="token number">3032160</span> <span class="token operator">-</span><span class="token operator">&gt;</span> AAATBlAAEAAAOMfABa 
<span class="token keyword">select</span> rowid <span class="token keyword">from</span> emp_bak <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">3032160</span><span class="token punctuation">;</span><span class="token comment">--AAATBlAAEAAAOMfABa</span>
AAATBlAAEAAAKo7AAA	<span class="token number">1</span>
AAATBlAAEAAAKo7AAB	<span class="token number">2</span>
AAATBlAAEAAAKo7AAC	<span class="token number">3</span>
AAATBlAAEAAAKo7AAD	<span class="token number">4</span>
AAATBlAAEAAAKo7AAE	<span class="token number">5</span>
AAATBlAAEAAAKo7AAF	<span class="token number">6</span>
AAATBlAAEAAAKo7AAG	<span class="token number">7</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
AAATBlAAEAAAOMfABa  <span class="token number">3032160</span>

②AAATBlAAEAAAOMfABa <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token number">3032160</span>对应的数据
<span class="token keyword">select</span> rowid<span class="token punctuation">,</span>emp_bak<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> emp_bak <span class="token keyword">where</span> rowid<span class="token operator">=</span><span class="token string">&#39;AAATBlAAEAAAOMfABa&#39;</span><span class="token punctuation">;</span><span class="token comment">--0.01 查询了1行</span>
<span class="token comment">----------分析有无索引的区别------------end</span>

<span class="token comment">----------------------</span>
<span class="token comment">--删除索引</span>
<span class="token comment">----------------------</span>
<span class="token keyword">drop</span> <span class="token keyword">index</span> idx_emp_empno<span class="token punctuation">;</span>

<span class="token comment">----------------------</span>
<span class="token comment">--数据字典表</span>
<span class="token comment">----------------------</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_tables<span class="token punctuation">;</span><span class="token comment">--查询当前用户下所有的表格</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_constraints<span class="token punctuation">;</span><span class="token comment">--查看当前用户下所有的约束</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_cons_columns<span class="token punctuation">;</span><span class="token comment">--查看约束关联的列信息</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_indexes<span class="token punctuation">;</span><span class="token comment">--查询当前用户下所有的索引</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_ind_columns<span class="token punctuation">;</span><span class="token comment">--查看索引关联的列信息</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--序列（sequence）：按照一定的规则自动增长或自动减少，通常用于生成主键值</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--简单创建</span>
<span class="token keyword">create</span> sequence seq_emp<span class="token punctuation">;</span>

<span class="token comment">--复杂创建</span>
<span class="token keyword">create</span> sequence SEQ_EMP
minvalue <span class="token number">1</span>                             <span class="token comment">-- 最小值  minvalue X | nominvalue</span>
maxvalue <span class="token number">9999999999999999999999999999</span>  <span class="token comment">--最大值  maxvalue X | nomaxvalue</span>
<span class="token keyword">start</span> <span class="token keyword">with</span> <span class="token number">1</span>                           <span class="token comment">--开始值</span>
increment <span class="token keyword">by</span> <span class="token number">1</span>                         <span class="token comment">--累增的值</span>
nocycle                                <span class="token comment">--默认不循环  cycle | nocycle</span>
cache <span class="token number">20</span><span class="token punctuation">;</span>                              <span class="token comment">--默认缓存20  cache X | nocache</span>

<span class="token keyword">create</span> sequence seq_dept
minvalue <span class="token number">10</span>
maxvalue <span class="token number">90</span>
<span class="token keyword">start</span> <span class="token keyword">with</span> <span class="token number">10</span>
increment <span class="token keyword">by</span> <span class="token number">10</span>
nocycle
nocache<span class="token punctuation">;</span>

<span class="token comment">--两个属性</span>
<span class="token comment">--   nextval : 获取序列的下一个值</span>
<span class="token comment">--   currval ：获取同一个会话中，序列的当前的值，且取值之前必须先执行nextval取下一个值</span>
<span class="token keyword">select</span> seq_emp<span class="token punctuation">.</span>nextval <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
<span class="token keyword">select</span> seq_emp<span class="token punctuation">.</span>currval <span class="token keyword">from</span> dual<span class="token punctuation">;</span>

<span class="token keyword">select</span> seq_dept<span class="token punctuation">.</span>nextval <span class="token keyword">from</span> dual<span class="token punctuation">;</span>

<span class="token comment">--使用序列：新增数据时，自动生成主键值</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> emp<span class="token punctuation">(</span>empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>job<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span>seq_emp<span class="token punctuation">.</span>nextval<span class="token punctuation">,</span><span class="token string">&#39;张大鹏&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;屌丝男士&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--修改序列：除了start with以外的属性均可以修改</span>
<span class="token number">1.</span>将seq_dept的最大值修改为<span class="token number">200</span>
<span class="token keyword">alter</span> sequence seq_dept
maxvalue <span class="token number">200</span><span class="token punctuation">;</span>

<span class="token comment">--删除序列</span>
<span class="token keyword">drop</span> sequence seq_emp<span class="token punctuation">;</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--同义词（synonym）：给对象取别名</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--私有同义词</span>
<span class="token keyword">create</span> synonym e <span class="token keyword">for</span> emp<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> scott<span class="token punctuation">.</span>e<span class="token punctuation">;</span>

<span class="token comment">--共有同义词</span>
<span class="token keyword">create</span> <span class="token keyword">public</span> synonym d <span class="token keyword">for</span> dept<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> d<span class="token punctuation">;</span>

<span class="token comment">--删除同义词</span>
<span class="token keyword">drop</span> synonym e<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">public</span> synonym d<span class="token punctuation">;</span>

<span class="token comment">--提示“权限不足”，需要sys管理员授权</span>
<span class="token keyword">grant</span> <span class="token keyword">create</span> synonym <span class="token keyword">to</span> scott<span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">create</span> <span class="token keyword">public</span> synonym <span class="token keyword">to</span> scott<span class="token punctuation">;</span>

<span class="token keyword">grant</span> <span class="token keyword">drop</span> synonym <span class="token keyword">to</span> scott<span class="token punctuation">;</span>
<span class="token keyword">grant</span> <span class="token keyword">drop</span> <span class="token keyword">public</span> synonym <span class="token keyword">to</span> scott<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Oracle-SQL开发 —— 序列、索引、同义词</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,15);function b(A,y){const a=i("ExternalLinkIcon");return p(),o("div",null,[l(" more "),n("h1",k,[u,s(" 59-Oracle-SQL开发 —— 序列、索引、"),n("a",m,[s("同义词.md"),t(a)])]),v])}const _=e(d,[["render",b],["__file","index.html.vue"]]);export{_ as default};

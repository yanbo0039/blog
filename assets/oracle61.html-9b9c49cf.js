import{_ as e,X as p,Y as o,a1 as t,Z as n,$ as s,a2 as c,a0 as l,F as i}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_61_1.png",k="/blog/assets/Oracle_61_2.png",d="/blog/assets/Oracle_61_3.png",u={},m={id:"_61-oracle-sql开发-——-视图-md",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_61-oracle-sql开发-——-视图-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--wcsr59i.md",target:"_blank",rel:"noopener noreferrer"},w=l('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>为什么使用视图 <ul><li>限制其它用户对数据库表的访问,因为视图可以 有选择性的显示数据库表的一部分；</li><li>容易实现复杂的查询；</li><li>对于相同的数据可以产生不同的视图</li></ul></li></ul><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">-- 创建视图（view） </span>
<span class="token comment">--      语法：create or replace view 视图名 as 子查询 [with check option] [with read only];</span>
<span class="token comment">--</span>
<span class="token comment">--      权限不足,sys/sys as sysdba管理员授权：</span>
<span class="token comment">--                   grant create view to scott;</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--简单创建：基于一张表,没有分组函数、分组语句等</span>
<span class="token number">1.</span>创建一个视图v_emp10，通过该视图只能查看<span class="token number">10</span>号部门的员工编号，员工姓名，职位
<span class="token keyword">create</span> <span class="token keyword">view</span> v_emp10
<span class="token keyword">as</span> 
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>job <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">--10号部门的员工编号，员工姓名，职位</span>

<span class="token comment">--创建视图时，在子查询中使用列的别名</span>
<span class="token comment">--     create or replace 修改视图:当视图不存在时create创建，当视图已存在时replace替换</span>
<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">view</span> v_emp10
<span class="token keyword">as</span> 
<span class="token keyword">select</span> empno 员工编号<span class="token punctuation">,</span>ename 员工姓名<span class="token punctuation">,</span>job 职位 <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span><span class="token comment">--10号部门的员工编号，员工姓名，职位</span>

<span class="token comment">--复杂创建：基于多张表、分组函数、分组语句等</span>
<span class="token number">2.</span>创建一个视图，通过该视图可以查看每个部门的名称，最低工资，最高工资，平均工资
<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">view</span> v_dept_avgsal<span class="token punctuation">(</span>部门名称<span class="token punctuation">,</span>最低工资<span class="token punctuation">,</span>最高工资<span class="token punctuation">,</span>平均工资<span class="token punctuation">)</span>
<span class="token keyword">as</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>dname<span class="token punctuation">,</span><span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> dept d<span class="token punctuation">,</span>emp e <span class="token keyword">where</span> d<span class="token punctuation">.</span>deptno <span class="token operator">=</span> e<span class="token punctuation">.</span>deptno <span class="token keyword">group</span> <span class="token keyword">by</span> d<span class="token punctuation">.</span>dname<span class="token punctuation">;</span><span class="token comment">--查看每个部门的名称，最低工资，最高工资，平均工资</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">-- 修改视图： create or replace</span>
<span class="token comment">--------------------------------------------------------------</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--视图上执行DML操作的规则</span>
<span class="token comment">--    基于简单视图的DML修改数据时，只能影响视图可见数据</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--基于简单视图的DML（可以）</span>
<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">view</span> v_emp10
<span class="token keyword">as</span> 
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

①基于视图v_emp10<span class="token punctuation">,</span>将部门<span class="token number">10</span>的员工<span class="token number">7839</span>的薪资修改为<span class="token number">10000</span>
<span class="token keyword">update</span> v_emp10 <span class="token keyword">set</span> sal <span class="token operator">=</span> <span class="token number">10000</span> <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span><span class="token punctuation">;</span> <span class="token comment">--ok  影响行数1，因为7839为视图可见数据</span>

②基于视图v_emp10<span class="token punctuation">,</span>将员工编号为<span class="token number">6666</span>的职位修改为<span class="token string">&quot;老板的爸爸&quot;</span>
<span class="token keyword">update</span> v_emp10 <span class="token keyword">set</span> job <span class="token operator">=</span> <span class="token string">&#39;老板的爸爸&#39;</span> <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">6666</span><span class="token punctuation">;</span><span class="token comment">--ok 影响行数为0，因为6666为视图不可见数据</span>

③基于视图v_emp10<span class="token punctuation">,</span>新增一行数据
<span class="token keyword">insert</span> <span class="token keyword">into</span> v_emp10<span class="token punctuation">(</span>empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>deptno<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">7777</span><span class="token punctuation">,</span><span class="token string">&#39;视图数据&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;测试&#39;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--ok,影响行数1</span>

<span class="token comment">--基于复杂视图的DML（不可以）</span>
<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">view</span> v_dept_avgsal<span class="token punctuation">(</span>部门名称<span class="token punctuation">,</span>最低工资<span class="token punctuation">,</span>最高工资<span class="token punctuation">,</span>平均工资<span class="token punctuation">)</span>
<span class="token keyword">as</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>dname<span class="token punctuation">,</span><span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> dept d<span class="token punctuation">,</span>emp e <span class="token keyword">where</span> d<span class="token punctuation">.</span>deptno <span class="token operator">=</span> e<span class="token punctuation">.</span>deptno <span class="token keyword">group</span> <span class="token keyword">by</span> d<span class="token punctuation">.</span>dname<span class="token punctuation">;</span><span class="token comment">--查看每个部门的名称，最低工资，最高工资，平均工资</span>

①基于视图v_dept_avgsal，将部门名称为<span class="token string">&#39;RESEARCH&#39;</span>的部门的最低工资调整为<span class="token number">5000</span>
<span class="token keyword">update</span> v_dept_avgsal <span class="token keyword">set</span> 最低工资 <span class="token operator">=</span> <span class="token number">5000</span> <span class="token keyword">where</span> 部门名称 <span class="token operator">=</span> <span class="token string">&#39;RESEARCH&#39;</span><span class="token punctuation">;</span><span class="token comment">-- not ok 次数据操作操纵非法</span>

<span class="token comment">--with check option</span>
<span class="token comment">--     使用with check option修饰的视图，对数据进行DML操作时，必须遵守where子句的限制条件，不允许修改</span>
<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">view</span> v_emp10
<span class="token keyword">as</span> 
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">with</span> <span class="token keyword">check</span> <span class="token keyword">option</span><span class="token punctuation">;</span>
<span class="token comment">--测试</span>
<span class="token keyword">update</span> v_emp10 <span class="token keyword">set</span> sal <span class="token operator">=</span> <span class="token number">10000</span> <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span><span class="token punctuation">;</span> <span class="token comment">--ok</span>
<span class="token keyword">update</span> v_emp10 <span class="token keyword">set</span> deptno <span class="token operator">=</span> <span class="token number">20</span> <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span><span class="token punctuation">;</span> <span class="token comment">--not ok 视图with check option where子句违规</span>

<span class="token comment">--with read only</span>
<span class="token keyword">create</span> <span class="token operator">or</span> <span class="token keyword">replace</span> <span class="token keyword">view</span> v_emp10
<span class="token keyword">as</span> 
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">with</span> <span class="token keyword">read</span> only<span class="token punctuation">;</span>
<span class="token comment">--测试</span>
<span class="token keyword">update</span> v_emp10 <span class="token keyword">set</span> sal <span class="token operator">=</span> <span class="token number">10000</span> <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span><span class="token punctuation">;</span><span class="token comment">--not ok 无法对只读视图进行DML操作</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">-- 使用视图查询数据</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v_emp10<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v_dept_avgsal<span class="token punctuation">;</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">-- 删除视图</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token keyword">drop</span> <span class="token keyword">view</span> v_emp10<span class="token punctuation">;</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">-- 数据字典</span>
<span class="token comment">--------------------------------------------------------------</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_tables<span class="token punctuation">;</span><span class="token comment">--查询当前用户下所有的表格</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_constraints<span class="token punctuation">;</span><span class="token comment">--查看当前用户下所有的约束</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_cons_columns<span class="token punctuation">;</span><span class="token comment">--查看约束关联的列信息</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_indexes<span class="token punctuation">;</span><span class="token comment">--查询当前用户下所有的索引</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_ind_columns<span class="token punctuation">;</span><span class="token comment">--查看索引关联的列信息</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_views<span class="token punctuation">;</span><span class="token comment">--查看当前用户下所有的视图</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_updatable_columns<span class="token punctuation">;</span><span class="token comment">--查看视图或表关联的列是否允许DML操作</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> user_objects<span class="token punctuation">;</span><span class="token comment">--查看当前用户下所有的对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Oracle-SQL开发 —— 视图</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function y(_,h){const a=i("ExternalLinkIcon");return p(),o("div",null,[t(" more "),n("h1",m,[v,s(" 61-Oracle-SQL开发 —— "),n("a",b,[s("视图.md"),c(a)])]),w])}const g=e(u,[["render",y],["__file","oracle61.html.vue"]]);export{g as default};

import{_ as e,X as o,Y as p,a1 as t,Z as n,$ as s,a2 as c,a0 as l,F as i}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_55_1.png",d={},k={id:"_55-oracle-sql开发-——-集合运算-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_55-oracle-sql开发-——-集合运算-md","aria-hidden":"true"},"#",-1),u={href:"http://xn--8pro43gzonvrg.md",target:"_blank",rel:"noopener noreferrer"},v=l('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-------------------------------------------------</span>
<span class="token comment">--联合运算（union）</span>
<span class="token comment">--    1.去重复</span>
<span class="token comment">--    2.默认第一列升序排序</span>
<span class="token comment">--    3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名</span>
<span class="token comment">--    4.每个SQL语句不能有自己的order by语句</span>
<span class="token comment">-------------------------------------------------</span>
<span class="token number">1.</span>查询编号为<span class="token number">7839</span>的员工当前工资、岗位及历史工资、岗位？
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span><span class="token punctuation">;</span>           <span class="token comment">--7839的员工当前工资、岗位</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp_jobhistory <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span><span class="token punctuation">;</span><span class="token comment">--7839的员工历史工资、岗位</span>

<span class="token comment">--多表连接（不适用）</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e<span class="token punctuation">,</span>emp_jobhistory h <span class="token keyword">where</span> e<span class="token punctuation">.</span>empno <span class="token operator">=</span> h<span class="token punctuation">.</span>empno<span class="token punctuation">;</span>

<span class="token comment">--联合运算</span>
<span class="token keyword">select</span> empno 雇员编号<span class="token punctuation">,</span>sal 工资<span class="token punctuation">,</span>job 岗位 <span class="token keyword">from</span> emp <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span>       <span class="token comment">--7839的员工当前工资、岗位   1条数据</span>
<span class="token keyword">union</span>
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>job <span class="token keyword">from</span> emp_jobhistory <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span> <span class="token keyword">order</span> <span class="token keyword">by</span> 岗位<span class="token punctuation">;</span><span class="token comment">--7839的员工历史工资、岗位   5条数据</span>

<span class="token comment">-------------------------------------------------</span>
<span class="token comment">--完全联合运算（union all）</span>
<span class="token comment">--    1.不去重复</span>
<span class="token comment">--    2.不排序</span>
<span class="token comment">--    3.所有SQL语句的列数一致、类型一致、列名可以不一致，默认使用第一个SQL语句作为列名</span>
<span class="token comment">--    4.每个SQL语句不能有自己的order by语句</span>
<span class="token comment">--    5.完全联合运算（union all） &gt;  联合运算（union）,因为union all不需要去重，也不需要排序</span>
<span class="token comment">-------------------------------------------------</span>
<span class="token number">1.</span>查询编号为<span class="token number">7839</span>的员工当前工资、岗位及历史工资、岗位<span class="token punctuation">,</span>要求不要去除重复数据
<span class="token comment">--完全联合运算</span>
<span class="token keyword">select</span> empno 雇员编号<span class="token punctuation">,</span>sal 工资<span class="token punctuation">,</span>job 岗位 <span class="token keyword">from</span> emp <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span>       <span class="token comment">--7839的员工当前工资、岗位   1条数据</span>
<span class="token keyword">union</span> <span class="token keyword">all</span>
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>job <span class="token keyword">from</span> emp_jobhistory <span class="token keyword">where</span> empno <span class="token operator">=</span> <span class="token number">7839</span> <span class="token keyword">order</span> <span class="token keyword">by</span> 岗位<span class="token punctuation">;</span><span class="token comment">--7839的员工历史工资、岗位   5条数据</span>


<span class="token comment">--练习</span>
<span class="token number">2.</span>使用多表连接，查询每个部门的部门编号，部门人数，没有人数的部门显示<span class="token number">0</span>。
<span class="token keyword">select</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp e<span class="token punctuation">,</span>dept d <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptno<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno <span class="token keyword">group</span> <span class="token keyword">by</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span>

<span class="token number">3.</span>使用联合运算，查询每个部门的部门编号，部门人数，没有人数的部门显示<span class="token number">0</span>。
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno                                       <span class="token comment">--有人数的部门  emp</span>
<span class="token keyword">union</span>
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token number">0</span> <span class="token keyword">from</span> dept <span class="token keyword">where</span> <span class="token operator">not</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> dept<span class="token punctuation">.</span>deptno<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">--没有人数的部门  dept</span>

<span class="token number">5.</span> 使用集合运算，输出如下效果？
<span class="token keyword">select</span> deptno 部门<span class="token punctuation">,</span>loc 工作地点<span class="token punctuation">,</span> to_char<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">)</span> 员工姓名<span class="token punctuation">,</span>to_date<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">)</span> 入职日期 <span class="token keyword">from</span> dept<span class="token comment">--查询部门信息</span>
<span class="token keyword">union</span>
<span class="token keyword">select</span> deptno 部门<span class="token punctuation">,</span>to_char<span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">)</span> 工作地点<span class="token punctuation">,</span>ename 员工姓名<span class="token punctuation">,</span>hiredate 入职日期 <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--查询员工信息</span>

<span class="token comment">-------------------------------------------------</span>
<span class="token comment">--相交运算（intersect） ： 取多个SQL语句之间的共有数据</span>
<span class="token comment">-------------------------------------------------</span>
<span class="token number">1.</span>查询哪些员工做过岗位调动？
<span class="token keyword">select</span> empno <span class="token keyword">from</span> emp<span class="token comment">--所有的员工</span>
<span class="token keyword">intersect</span>
<span class="token keyword">select</span> empno <span class="token keyword">from</span> emp_jobhistory<span class="token punctuation">;</span><span class="token comment">--调用过的员工编号</span>


<span class="token comment">-------------------------------------------------</span>
<span class="token comment">--相减运算（minus） ： 取A-B的数据，即第一个SQL有，第二个SQL没有的数据</span>
<span class="token comment">-------------------------------------------------</span>
<span class="token number">1.</span>查询哪些员工没有做过岗位调动？
<span class="token keyword">select</span> empno <span class="token keyword">from</span> emp<span class="token comment">--所有的员工</span>
minus
<span class="token keyword">select</span> empno <span class="token keyword">from</span> emp_jobhistory<span class="token punctuation">;</span><span class="token comment">--调用过的员工编号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle-SQL开发 —— 集合运算</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function b(y,w){const a=i("ExternalLinkIcon");return o(),p("div",null,[t(" more "),n("h1",k,[m,s(" 55-Oracle-SQL开发 —— "),n("a",u,[s("集合运算.md"),c(a)])]),v])}const _=e(d,[["render",b],["__file","oracle55.html.vue"]]);export{_ as default};

import{_ as p,X as e,Y as t,a1 as o,Z as n,$ as s,a2 as c,a0 as l,F as i}from"./framework-68dd73a2.js";const u="/blog/assets/Oracle_52_1.png",k="/blog/assets/Oracle_52_2.png",d={},r={id:"_52-oracle-sql开发-——-分组函数-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_52-oracle-sql开发-——-分组函数-md","aria-hidden":"true"},"#",-1),v={href:"http://xn--bbrra520m81x.md",target:"_blank",rel:"noopener noreferrer"},b=l('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>分组函数 <ul><li>分组函数是对表中一组记录进行操作，每组只返回一个结果， 即首先要对表记录进行分组，然后再进行操作汇总，每组返 回一个结果，分组时可能是整个表分为一组，也可能根据条 件分成多组。</li><li>分组函数常用到以下五个函数： <ul><li>MIN</li><li>MAX</li><li>SUM</li><li>AVG</li><li>COUNT</li></ul></li></ul></li></ul><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>SELECT语句执行过程： <ul><li>1.通过FROM子句中找到需要查询的表；</li><li>2.通过WHERE子句进行非分组函数筛选判断；</li><li>3.通过GROUP BY子句完成分组操作；</li><li>4.通过HAVING子句完成组函数筛选判断；</li><li>5.通过SELECT子句选择显示的列或表达式及组函数；</li><li>6.通过ORDER BY子句进行排序操作。</li></ul></li></ul><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">----------------------------------------------------------</span>
<span class="token comment">-- 分组函数：min()  max()  avg()   sum()   count()</span>
<span class="token comment">----------------------------------------------------------</span>
<span class="token comment">--min()最小值 与 max()最大值    用于任何数据类型</span>
<span class="token number">1.</span>查询最早与最晚的入职日期
<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>hiredate<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>hiredate<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span> <span class="token comment">--用于日期类型</span>

<span class="token number">2.</span>查询最低与最高的薪资
<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--用于数值类型</span>

<span class="token number">3.</span>查询最小与最大的姓名
<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>ename<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>ename<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--用于字符类型</span>

<span class="token comment">--sum()求和 与 avg()求平均值    只能用于数值类型</span>
<span class="token number">1.</span>查询职位以SALES开头的所有员工平均工资、最低工资、最高工资、工资和。
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> job <span class="token operator">like</span> <span class="token string">&#39;SALES%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">--count() 返回符合条件的数据行</span>
<span class="token number">1.</span>查询部门<span class="token number">30</span>有多少个员工
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">--6  效率低</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">--6  效率高</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">--6</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>deptno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">--6</span>

<span class="token comment">--返回满足条件的非空(NULL)行的数量，count默认会排除null值</span>
<span class="token number">2.</span>部门<span class="token number">30</span>有多少个员工领取奖金
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>comm<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span><span class="token comment">--4</span>

<span class="token comment">--DISTINCT会消除重复记录后再使用组函数 </span>
<span class="token number">3.</span>查询有员工的部门数量。 
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">distinct</span> deptno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">--除了COUNT（*）之外，其它所有分组函数都会忽略列中的空值，然后再进行计算</span>
<span class="token number">1.</span>查询所有员工的平均奖金
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>comm<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>comm<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>       <span class="token comment">--2200/4 = 550  默认忽略null值</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>comm<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>nvl<span class="token punctuation">(</span>comm<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--2200/14 =  157.142857142857</span>

<span class="token comment">----------------------------------------------------------</span>
<span class="token comment">-- group by 分组子句</span>
<span class="token comment">--       注意：1.select子句列表中，只允许放分组函数，以及出现在group by后面的列</span>
<span class="token comment">--             2.并不是group by后面的列一定要写在select列表中                 </span>
<span class="token comment">----------------------------------------------------------</span>
<span class="token comment">--按单列分组</span>
<span class="token number">1.</span>查询每个部门的编号，平均工资
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span>
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>deptno<span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span><span class="token comment">--not ok empno不是group by表达式</span>

<span class="token comment">--按多列分组</span>
<span class="token number">1.</span>查询每个部门每个岗位的工资总和。
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span>job<span class="token punctuation">,</span><span class="token function">sum</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">,</span>job<span class="token punctuation">;</span>

<span class="token comment">--使用分组函数的非法的查询</span>
<span class="token number">1.</span>查询每个部门的人数
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>ename<span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--not ok deptno不是单组分组函数</span>
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>ename<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span><span class="token comment">--ok</span>

<span class="token comment">--练习</span>
<span class="token number">1.</span>查询每个部门的部门编号，部门名称，部门人数，最高工资，最低工资，工资总和，平均工资。
<span class="token keyword">select</span> e<span class="token punctuation">.</span>deptno<span class="token punctuation">,</span>
       d<span class="token punctuation">.</span>dname<span class="token punctuation">,</span>
       <span class="token function">count</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> 部门人数<span class="token punctuation">,</span>
       <span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 最高工资<span class="token punctuation">,</span>
       <span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 最低工资<span class="token punctuation">,</span>
       <span class="token function">sum</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 工资总和<span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 平均工资
  <span class="token keyword">from</span> emp e<span class="token punctuation">,</span> dept d
 <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno
 <span class="token keyword">group</span> <span class="token keyword">by</span> e<span class="token punctuation">.</span>deptno<span class="token punctuation">,</span>d<span class="token punctuation">.</span>dname<span class="token punctuation">;</span>

<span class="token number">2.</span>查询每个部门，每个岗位的部门编号，部门名称，岗位名称，部门人数，最高工资，最低工资，工资总和，平均工资。
<span class="token keyword">select</span> e<span class="token punctuation">.</span>deptno<span class="token punctuation">,</span>
       d<span class="token punctuation">.</span>dname<span class="token punctuation">,</span>
       e<span class="token punctuation">.</span>job<span class="token punctuation">,</span>
       <span class="token function">count</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> 部门人数<span class="token punctuation">,</span>
       <span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 最高工资<span class="token punctuation">,</span>
       <span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 最低工资<span class="token punctuation">,</span>
       <span class="token function">sum</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 工资总和<span class="token punctuation">,</span>
       <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> 平均工资
  <span class="token keyword">from</span> emp e<span class="token punctuation">,</span> dept d
 <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> d<span class="token punctuation">.</span>deptno
 <span class="token keyword">group</span> <span class="token keyword">by</span> e<span class="token punctuation">.</span>deptno<span class="token punctuation">,</span>d<span class="token punctuation">.</span>dname<span class="token punctuation">,</span>e<span class="token punctuation">.</span>job<span class="token punctuation">;</span>

<span class="token number">3.</span>查询每个经理所管理的人数，经理编号，经理姓名，要求包括没有经理的人员信息。
<span class="token keyword">select</span> e<span class="token punctuation">.</span>mgr 经理编号<span class="token punctuation">,</span> m<span class="token punctuation">.</span>ename 经理姓名<span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> 管理人数
  <span class="token keyword">from</span> emp e<span class="token punctuation">,</span> emp m
 <span class="token keyword">where</span> e<span class="token punctuation">.</span>mgr <span class="token operator">=</span> m<span class="token punctuation">.</span>empno<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
 <span class="token keyword">group</span> <span class="token keyword">by</span> e<span class="token punctuation">.</span>mgr<span class="token punctuation">,</span> m<span class="token punctuation">.</span>ename<span class="token punctuation">;</span>

<span class="token comment">----------------------------------------------------------</span>
<span class="token comment">-- having子句 : 排除组      </span>
<span class="token comment">----------------------------------------------------------</span>
<span class="token number">1.</span>查询每个部门最高工资大于<span class="token number">2900</span>的部门编号，最高工资
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno <span class="token keyword">having</span> <span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2900</span><span class="token punctuation">;</span>

<span class="token comment">--select语句的执行过程</span>
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span> job<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span>                    <span class="token comment">--5</span>
  <span class="token keyword">from</span> emp                                      <span class="token comment">--1</span>
 <span class="token keyword">where</span> job <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MANAGER&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">)</span>  <span class="token comment">--2</span>
 <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">,</span> job                           <span class="token comment">--3</span>
<span class="token keyword">having</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1000</span>                          <span class="token comment">--4</span>
 <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token number">3</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>                               <span class="token comment">--6</span>

<span class="token comment">--------------------------------------------------------------</span>
<span class="token comment">--组函数的嵌套:分组函数最多允许嵌套两层   单行函数可以无限嵌套</span>
 <span class="token comment">--------------------------------------------------------------</span>
 <span class="token number">1.</span>查询各个部门的平均人数
 <span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span><span class="token comment">--各个部门的人数</span>
 <span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span> <span class="token comment">--各个部门的平均人数  3.5</span>
 
 <span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span><span class="token comment">--not ok 分组函数的嵌套太深</span>

<span class="token comment">--练习</span>
<span class="token number">2.</span>【分组函数】查询员工岗位中不是以“SA”开头并且平均工资在<span class="token number">2500</span>元以上的岗位及平均工资，并按平均工资降序排序。
<span class="token keyword">select</span> job<span class="token punctuation">,</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span>
  <span class="token keyword">from</span> emp
 <span class="token keyword">where</span> job <span class="token operator">not</span> <span class="token operator">like</span> <span class="token string">&#39;SA%&#39;</span>
 <span class="token keyword">group</span> <span class="token keyword">by</span> job
<span class="token keyword">having</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2500</span>
 <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>

<span class="token number">5.</span>【分组函数】显示经理号码和经理姓名，这个经理所管理员工的最低工资，没有经理的KING也要显示，不包括最低工资小于<span class="token number">3000</span>的，按最低工资由高到低排序。
<span class="token keyword">select</span> e<span class="token punctuation">.</span>mgr 经理号码<span class="token punctuation">,</span> m<span class="token punctuation">.</span>ename 经理姓名<span class="token punctuation">,</span> <span class="token function">min</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> 所管理员工的最低工资
  <span class="token keyword">from</span> emp e<span class="token punctuation">,</span> emp m
 <span class="token keyword">where</span> e<span class="token punctuation">.</span>mgr <span class="token operator">=</span> m<span class="token punctuation">.</span>empno<span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span>
 <span class="token keyword">group</span> <span class="token keyword">by</span> e<span class="token punctuation">.</span>mgr<span class="token punctuation">,</span> m<span class="token punctuation">.</span>ename
<span class="token keyword">having</span> <span class="token function">min</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">3000</span>
 <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token function">min</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>

<span class="token number">6.</span>【分组函数】写一个查询，显示每个部门最高工资和最低工资的差额。
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span><span class="token operator">-</span><span class="token function">min</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Oracle-SQL开发 —— 分组函数</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,16);function y(w,f){const a=i("ExternalLinkIcon");return e(),t("div",null,[o(" more "),n("h1",r,[m,s(" 52-Oracle-SQL开发 —— "),n("a",v,[s("分组函数.md"),c(a)])]),b])}const h=p(d,[["render",y],["__file","oracle52.html.vue"]]);export{h as default};

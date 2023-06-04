import{_ as e,X as p,Y as t,a1 as o,Z as n,$ as s,a2 as c,a0 as l,F as k}from"./framework-68dd73a2.js";const u={},r={id:"_54-oracle-sql开发-——-高级子查询-md",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#_54-oracle-sql开发-——-高级子查询-md","aria-hidden":"true"},"#",-1),d={href:"http://xn--i8ss60alxrf9lbur.md",target:"_blank",rel:"noopener noreferrer"},m=l(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><ul><li><p>相关子查询的执行过程：</p><ul><li>1.取得父查询的候选行；</li><li>2.用候选行被子查询引用列的值执行子查询；</li><li>3.用来自子查询的值确认或取消候选行；</li><li>4.重复步骤1、2、3，直到父查询中无剩余的候选行。</li></ul></li><li><p>EXISTS和NOT EXISTS操作符</p><ul><li>相关子查询还可使用EXISTS和 NOT EXISTS操作符来进行操 作</li></ul></li><li><p>EXISTS判断是否“存在”，具体操作如下：</p><ul><li>子查询中如果有记录找到，子查询语句不会继续执行， 返回值为TRUE；</li><li>子查询中如果到表的末尾也没有记录找到，返回值为 FALSE。</li><li>EXISTS 子查询并没有确切记录返回，只判断是否有记录存 在，而且只要找到相关记录，子查询就不需要再执行，然后 再进行下面的操作。这样大大提高了语句的执行效率。</li><li>NOT EXISTS正好相反，判断子查询是否没有返回值。如果没 有返回值，表达式为真，如果找到一条返回值，则为假</li></ul></li></ul><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token number">1.</span>创建员工历史岗位表 emp_jobhistory：
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> emp_jobhistory<span class="token punctuation">(</span>
    id NUMBER<span class="token punctuation">,</span><span class="token comment">--流水号</span>
    empno NUMBER<span class="token punctuation">,</span><span class="token comment">--员工编号</span>
    job VARCHAR2<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">--岗位</span>
    begindate <span class="token keyword">DATE</span><span class="token punctuation">,</span><span class="token comment">--开始日期</span>
    sal Number<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token comment">--在该岗位时工资</span>
<span class="token punctuation">)</span>

<span class="token number">2.</span>插入如下数据：
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp_jobhistory <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7839</span><span class="token punctuation">,</span><span class="token string">&#39;TRAINEE&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;17-11月-81&#39;</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp_jobhistory <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">7839</span><span class="token punctuation">,</span><span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;17-2月-82&#39;</span><span class="token punctuation">,</span><span class="token number">1800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp_jobhistory <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">7839</span><span class="token punctuation">,</span><span class="token string">&#39;CLERK&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;17-2月-83&#39;</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp_jobhistory <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7839</span><span class="token punctuation">,</span><span class="token string">&#39;SALESMAN&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;17-2月-85&#39;</span><span class="token punctuation">,</span><span class="token number">1800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp_jobhistory <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7839</span><span class="token punctuation">,</span> <span class="token string">&#39;MANAGER&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;17-2月-87&#39;</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token comment">---------------------------------------------</span>
  嵌套子查询 与  相关子查询：
  
        ① 嵌套子查询：可以单独执行
           相关子查询：不可以单独执行，依赖于父查询
           
        ② 嵌套子查询：
                <span class="token number">1</span><span class="token punctuation">)</span> 先执行子查询
                <span class="token number">2</span><span class="token punctuation">)</span> 再使用步骤 <span class="token number">1</span><span class="token punctuation">)</span>中的数据<span class="token punctuation">,</span>交给父查询使用，用于确认或取消数据
                
           相关子查询：
                <span class="token number">1</span><span class="token punctuation">)</span> 先执行父查询一次
                <span class="token number">2</span><span class="token punctuation">)</span> 将父查询得到的数据，交给子查询使用，用于确认或取消父查询数据
                <span class="token number">3</span><span class="token punctuation">)</span> 重复执行步骤<span class="token number">1</span><span class="token punctuation">)</span>、 <span class="token number">2</span><span class="token punctuation">)</span>，直到数据最后一行
<span class="token comment">---------------------------------------------</span>
<span class="token number">1.</span>如何查询比本部门平均薪水高的员工姓名，薪水
<span class="token comment">--嵌套子查询</span>
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span><span class="token comment">--1.部门的平均薪水</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>sal<span class="token punctuation">)</span> avgsal <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">)</span> s <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptno <span class="token operator">=</span> s<span class="token punctuation">.</span>deptno <span class="token operator">and</span> e<span class="token punctuation">.</span>sal <span class="token operator">&gt;</span> s<span class="token punctuation">.</span>avgsal<span class="token punctuation">;</span><span class="token comment">--2.嵌套子查询</span>

<span class="token comment">--相关子查询</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">&gt;</span> 本部门平均薪水<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp o <span class="token keyword">where</span> o<span class="token punctuation">.</span>sal <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp i <span class="token keyword">where</span> i<span class="token punctuation">.</span>deptno <span class="token operator">=</span> o<span class="token punctuation">.</span>deptno<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2.</span>查询所有部门名称和人数
<span class="token comment">--嵌套子查询</span>
<span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">;</span><span class="token comment">--1.查询每个部门的人数</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>deptno<span class="token punctuation">,</span>c<span class="token punctuation">.</span>empCount <span class="token keyword">from</span> dept d<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> deptno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> empCount <span class="token keyword">from</span> emp <span class="token keyword">group</span> <span class="token keyword">by</span> deptno<span class="token punctuation">)</span> c <span class="token keyword">where</span> d<span class="token punctuation">.</span>deptno <span class="token operator">=</span> c<span class="token punctuation">.</span>deptno<span class="token punctuation">;</span><span class="token comment">--2.主查询</span>

<span class="token comment">--相关子查询</span>
<span class="token keyword">select</span> dname<span class="token punctuation">,</span>人数 <span class="token keyword">from</span> dept<span class="token punctuation">;</span>
<span class="token keyword">select</span> dname<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>empno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptno <span class="token operator">=</span> dept<span class="token punctuation">.</span>deptno<span class="token punctuation">)</span> <span class="token keyword">from</span> dept<span class="token punctuation">;</span> 

<span class="token number">3.</span>查询哪些员工是经理?
<span class="token comment">--嵌套子查询</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> mgr <span class="token keyword">from</span> emp <span class="token keyword">where</span> mgr <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span><span class="token comment">--1. 经理编号有哪些？ </span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> empno <span class="token operator">in</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token keyword">distinct</span> mgr <span class="token keyword">from</span> emp <span class="token keyword">where</span> mgr <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--相关子查询</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> empno 是否为经理<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>mgr <span class="token operator">=</span> e1<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token number">4.</span>查询至少调过<span class="token number">2</span>次岗位的员工编号，姓名，岗位
<span class="token comment">--嵌套子查询</span>
<span class="token keyword">select</span> empno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp_jobhistory <span class="token keyword">group</span> <span class="token keyword">by</span> empno<span class="token punctuation">;</span><span class="token comment">--1.查询每个员工的岗位调动次数</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> empno<span class="token punctuation">,</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 调动次数 <span class="token keyword">from</span> emp_jobhistory <span class="token keyword">group</span> <span class="token keyword">by</span> empno<span class="token punctuation">)</span> c <span class="token keyword">where</span> e<span class="token punctuation">.</span>empno <span class="token operator">=</span> c<span class="token punctuation">.</span>empno <span class="token operator">and</span> c<span class="token punctuation">.</span>调动次数 <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">--相关子查询</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> 该员工调动次数 <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp_jobhistory <span class="token keyword">where</span> empno <span class="token operator">=</span> emp<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">--练习</span>
如下练习，使用相关子查询完成
<span class="token number">1.</span>查询比所在职位平均工资高的员工姓名，职位。
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">&gt;</span> 本职位的平均工资<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> e1<span class="token punctuation">.</span>sal <span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>e2<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>job <span class="token operator">=</span> e1<span class="token punctuation">.</span>job<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2.</span>查询工资为其部门最低工资的员工编号，姓名，工资。
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> sal <span class="token operator">=</span> 本部门的最低工资<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> e1<span class="token punctuation">.</span>sal <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>e2<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>deptno <span class="token operator">=</span> e1<span class="token punctuation">.</span>deptno<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">3.</span>查询所有雇员编号，名字和部门名字。
<span class="token keyword">select</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span>部门名字 <span class="token keyword">from</span> emp e<span class="token punctuation">;</span>
<span class="token keyword">select</span> e<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> d<span class="token punctuation">.</span>dname <span class="token keyword">from</span> dept d <span class="token keyword">where</span> d<span class="token punctuation">.</span>deptno <span class="token operator">=</span> e<span class="token punctuation">.</span>deptno<span class="token punctuation">)</span> <span class="token keyword">from</span> emp e<span class="token punctuation">;</span>

<span class="token number">4.</span>查询哪些员工是经理？
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e <span class="token keyword">where</span> empno是经理<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>mgr <span class="token operator">=</span> e1<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token number">5.</span>查询哪些员工不是经理？
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e <span class="token keyword">where</span> empno不是经理<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>mgr <span class="token operator">=</span> e1<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token number">6.</span>查询每个部门工资最低的两个员工编号，姓名，工资。
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> 同部门且比我的工资小的人数 <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>deptno <span class="token operator">=</span> e1<span class="token punctuation">.</span>deptno <span class="token operator">and</span> e2<span class="token punctuation">.</span>sal <span class="token operator">&lt;</span> e1<span class="token punctuation">.</span>sal <span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span>

<span class="token number">1</span>	<span class="token number">10</span>	<span class="token number">1300.00</span>  比<span class="token number">1300</span>小的  <span class="token number">0</span>个
<span class="token number">2</span>	<span class="token number">10</span>	<span class="token number">2450.00</span>  比<span class="token number">2450</span>小的  <span class="token number">1</span>个
<span class="token number">3</span>	<span class="token number">10</span>	<span class="token number">5000.00</span>  比<span class="token number">5000</span>小的  <span class="token number">2</span>个

<span class="token number">4</span>	<span class="token number">20</span>	<span class="token number">800.00</span>   比<span class="token number">800</span>小的  <span class="token number">0</span>个
<span class="token number">5</span>	<span class="token number">20</span>	<span class="token number">1100.00</span>  比<span class="token number">1100</span>小的 <span class="token number">1</span>个
<span class="token number">6</span>	<span class="token number">20</span>	<span class="token number">2975.00</span>  比<span class="token number">2975</span>小的 <span class="token number">2</span>个
<span class="token number">7</span>	<span class="token number">20</span>	<span class="token number">3000.00</span>
<span class="token number">8</span>	<span class="token number">20</span>	<span class="token number">3000.00</span>

<span class="token number">9</span>	<span class="token number">30</span>	<span class="token number">950.00</span>     比<span class="token number">950</span>小的  <span class="token number">0</span>个
<span class="token number">10</span>	<span class="token number">30</span>	<span class="token number">1251.00</span>  比<span class="token number">1251</span>小的 <span class="token number">1</span>个
<span class="token number">11</span>	<span class="token number">30</span>	<span class="token number">1251.00</span>  比<span class="token number">1251</span>小的 <span class="token number">1</span>个
<span class="token number">12</span>	<span class="token number">30</span>	<span class="token number">1501.00</span>
<span class="token number">13</span>	<span class="token number">30</span>	<span class="token number">1601.00</span>
<span class="token number">14</span>	<span class="token number">30</span>	<span class="token number">2850.00</span>
	
<span class="token comment">------------------------------------------------------</span>
<span class="token comment">--exists 与 not exists</span>
<span class="token comment">------------------------------------------------------</span>
<span class="token number">4.</span>查询哪些员工是经理？
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e <span class="token keyword">where</span> empno是经理<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>mgr <span class="token operator">=</span> e1<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">--效率低</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1  <span class="token keyword">where</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>mgr <span class="token operator">=</span> e1<span class="token punctuation">.</span>empno<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">--效率高</span>

<span class="token number">5.</span>查询哪些员工不是经理？
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e <span class="token keyword">where</span> empno不是经理<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>mgr <span class="token operator">=</span> e1<span class="token punctuation">.</span>empno<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e1  <span class="token keyword">where</span> <span class="token operator">not</span> <span class="token keyword">exists</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>mgr <span class="token operator">=</span> e1<span class="token punctuation">.</span>empno<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">--练习</span>
<span class="token number">2.</span>查询员工姓名和直接上级的名字。
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>mgr<span class="token punctuation">,</span>直接上级的名字 <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
<span class="token keyword">select</span> e<span class="token punctuation">.</span>empno<span class="token punctuation">,</span>e<span class="token punctuation">.</span>ename<span class="token punctuation">,</span>e<span class="token punctuation">.</span>mgr<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> m<span class="token punctuation">.</span>ename <span class="token keyword">from</span> emp m <span class="token keyword">where</span> m<span class="token punctuation">.</span>empno <span class="token operator">=</span> e<span class="token punctuation">.</span>mgr<span class="token punctuation">)</span> <span class="token keyword">from</span> emp e<span class="token punctuation">;</span>


<span class="token number">4.</span>查询每个部门工资前两名高的员工姓名，工资。
<span class="token keyword">select</span> ename<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>deptno <span class="token keyword">from</span> emp <span class="token keyword">where</span> 同一部门且工资比我高的人 <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> e1<span class="token punctuation">.</span>ename<span class="token punctuation">,</span>e1<span class="token punctuation">.</span>sal<span class="token punctuation">,</span>e1<span class="token punctuation">.</span>deptno <span class="token keyword">from</span> emp e1 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp e2 <span class="token keyword">where</span> e2<span class="token punctuation">.</span>deptno <span class="token operator">=</span> e1<span class="token punctuation">.</span>deptno <span class="token operator">and</span> e2<span class="token punctuation">.</span>sal <span class="token operator">&gt;</span> e1<span class="token punctuation">.</span>sal<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token number">15</span>	MILLER	<span class="token number">1300.00</span>	<span class="token number">10</span>  比<span class="token number">1300</span>工资高的<span class="token number">2</span>人
<span class="token number">9</span>	CLARK	<span class="token number">2450.00</span>	<span class="token number">10</span>      比<span class="token number">2450</span>工资高的<span class="token number">1</span>人
<span class="token number">10</span>	KING	<span class="token number">5000.00</span>	<span class="token number">10</span>    比<span class="token number">5000</span>工资高的<span class="token number">0</span>人

<span class="token number">12</span>	ADAMS	<span class="token number">1100.00</span>	<span class="token number">20</span>
<span class="token number">6</span>	JONES	<span class="token number">2975.00</span>	<span class="token number">20</span>
<span class="token number">3</span>	SMITH	<span class="token number">800.00</span>	<span class="token number">20</span>
<span class="token number">2</span>	SCOTT	<span class="token number">3000.00</span>	<span class="token number">20</span>
<span class="token number">14</span>	FORD	<span class="token number">3000.00</span>	<span class="token number">20</span>

<span class="token number">13</span>	JAMES	<span class="token number">950.00</span>	<span class="token number">30</span>
<span class="token number">11</span>	TURNER	<span class="token number">1501.00</span>	<span class="token number">30</span>
<span class="token number">5</span>	WARD	<span class="token number">1251.00</span>	<span class="token number">30</span>
<span class="token number">4</span>	ALLEN	<span class="token number">1601.00</span>	<span class="token number">30</span>
<span class="token number">8</span>	BLAKE	<span class="token number">2850.00</span>	<span class="token number">30</span>
<span class="token number">7</span>	MARTIN	<span class="token number">1251.00</span>	<span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Oracle-SQL开发 —— 高级子查询</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function b(v,w){const a=k("ExternalLinkIcon");return p(),t("div",null,[o(" more "),n("h1",r,[i,s(" 54-Oracle-SQL开发 —— "),n("a",d,[s("高级子查询.md"),c(a)])]),m])}const h=e(u,[["render",b],["__file","oracle54.html.vue"]]);export{h as default};

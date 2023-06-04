import{_ as e,X as p,Y as t,a1 as o,Z as n,$ as s,a2 as l,a0 as c,F as i}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_47_1.png",u="/blog/assets/Oracle_47_2.png",m="/blog/assets/Oracle_47_3.png",d="/blog/assets/Oracle_47_4.png",k="/blog/assets/Oracle_47_5.png",v={},b={id:"_47-oracle-sql开发-编写简单的查询语句-md",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_47-oracle-sql开发-编写简单的查询语句-md","aria-hidden":"true"},"#",-1),f={href:"http://xn--g7q15bmmt47dywqy0gtvg7u2a3c.md",target:"_blank",rel:"noopener noreferrer"},h=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>原义字符串</p><ul><li><p>原义字符串是包含在SELECT列表中的一个字符、一个数字或一个日期。</p></li><li><p>日期和字符字面值必须用单引号引起来。</p></li><li><p>每个原义字符串都会在每个数据行输出中出现。</p></li></ul></li><li><p>消除重复行</p><ul><li>在SELECT字句中使用关键字DISTINCT可消除重复行。</li></ul></li><li><p>显示表的结构</p><ul><li>在SQL*Plus中，可以使用DESCRIBE 命令来查 看表结构</li></ul></li></ul><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">------------------------------------</span>
<span class="token comment">-- 选择列</span>
<span class="token comment">------------------------------------</span>
<span class="token comment">--选择所有列</span>
<span class="token number">1.</span>查询emp员工表的所有信息
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">-- * 表示所有列  </span>
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>mgr<span class="token punctuation">,</span>hiredate<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>comm<span class="token punctuation">,</span>deptno <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--指定所有列的名称  效率高</span>

<span class="token comment">--选择指定列</span>
<span class="token number">2.</span>查询所有员工的员工编号、员工姓名、薪水
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>sal <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">------------------------------------</span>
<span class="token comment">-- 算数运算符</span>
<span class="token comment">--    null : null值不与任意值计算，均返回null,不是0，不是&#39;&#39;</span>
<span class="token comment">--           nvl(comm,0):如果comm为null，默认为0，如果comm不为null，取自身的值</span>
<span class="token comment">------------------------------------</span>
<span class="token number">1.</span>查询员工的员工编号、员工姓名、入职日期，包括转正日期（假设试用期<span class="token number">6</span>个月）
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>hiredate<span class="token punctuation">,</span><span class="token punctuation">(</span>hiredate <span class="token operator">+</span> <span class="token number">6</span><span class="token operator">*</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token number">2.</span>查询员工的员工编号、员工姓名、入职日期，包括转正日期（假设试用期<span class="token number">6</span>个月）<span class="token punctuation">,</span>年薪（试用期工资为转正工资的<span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">,</span>加上奖金）
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>
       ename<span class="token punctuation">,</span>
       hiredate<span class="token punctuation">,</span>
       <span class="token punctuation">(</span>hiredate <span class="token operator">+</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       sal<span class="token punctuation">,</span>
       sal <span class="token operator">*</span> <span class="token number">1.25</span><span class="token punctuation">,</span>
       nvl<span class="token punctuation">(</span>comm<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
       sal <span class="token operator">*</span> <span class="token number">6</span> <span class="token operator">+</span> sal <span class="token operator">*</span> <span class="token number">1.25</span> <span class="token operator">*</span> <span class="token number">6</span> <span class="token operator">+</span> nvl<span class="token punctuation">(</span>comm<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> 
  <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
  
<span class="token comment">------------------------------------</span>
<span class="token comment">-- 列别名</span>
<span class="token comment">--</span>
<span class="token comment">--  语法：</span>
<span class="token comment">--         列名  别名</span>
<span class="token comment">--         列名 as 别名</span>
<span class="token comment">--</span>
<span class="token comment">--  以下三种情况列别名两侧需要添加双引号</span>
<span class="token comment">--         1.列别名中包含有空格</span>
<span class="token comment">--         2.列别名中要求区分大小写</span>
<span class="token comment">--         3.列别名中包含有特殊字符</span>
<span class="token comment">------------------------------------</span>
<span class="token number">1.</span>查询员工的员工编号、员工姓名、入职日期，包括转正日期（假设试用期<span class="token number">6</span>个月）<span class="token punctuation">,</span>年薪（试用期工资为转正工资的<span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">,</span>加上奖金）
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>
       ename<span class="token punctuation">,</span>
       hiredate 试用日期<span class="token punctuation">,</span>
       <span class="token punctuation">(</span>hiredate <span class="token operator">+</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token number">30</span><span class="token punctuation">)</span> 转正日期<span class="token punctuation">,</span>
       sal 试用期工资<span class="token punctuation">,</span>
       sal <span class="token operator">*</span> <span class="token number">1.25</span> 转正工资<span class="token punctuation">,</span>
       nvl<span class="token punctuation">(</span>comm<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> 奖金<span class="token punctuation">,</span>
       sal <span class="token operator">*</span> <span class="token number">6</span> <span class="token operator">+</span> sal <span class="token operator">*</span> <span class="token number">1.25</span> <span class="token operator">*</span> <span class="token number">6</span> <span class="token operator">+</span> nvl<span class="token punctuation">(</span>comm<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">as</span> 年薪
  <span class="token keyword">from</span> emp<span class="token punctuation">;</span>
  
<span class="token number">2.</span>以下三种情况列别名两侧需要添加双引号
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>sal<span class="token operator">+</span><span class="token number">500</span> <span class="token string">&quot;new salary&quot;</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">-- 1.列别名中包含有空格</span>
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>sal<span class="token operator">+</span><span class="token number">500</span> <span class="token string">&quot;NewSalary&quot;</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--2.列别名中要求区分大小写</span>
<span class="token keyword">select</span> empno<span class="token punctuation">,</span>ename<span class="token punctuation">,</span>sal<span class="token punctuation">,</span>sal<span class="token operator">+</span><span class="token number">500</span> <span class="token string">&quot;New@Salary&quot;</span> <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--3.列别名中包含有特殊字符</span>

<span class="token comment">------------------------------------</span>
<span class="token comment">--连接操作符  ||</span>
<span class="token comment">--</span>
<span class="token comment">--       原义字符串：使用单引号&#39;&#39;括起来，在数据的每一行出现</span>
<span class="token comment">------------------------------------</span>
<span class="token number">1.</span>查询员工信息，并以以下格式显示<span class="token string">&quot;XXX的职位为XXXX&quot;</span>
<span class="token keyword">select</span> ename<span class="token punctuation">,</span>job<span class="token punctuation">,</span>ename <span class="token operator">||</span> <span class="token string">&#39; 的职位为 &#39;</span> <span class="token operator">||</span> job  <span class="token keyword">from</span> emp<span class="token punctuation">;</span>

<span class="token comment">------------------------------------</span>
<span class="token comment">--消除重复行 distinct</span>
<span class="token comment">------------------------------------</span>
<span class="token number">1.</span>查询有员工的部门有哪些？
<span class="token keyword">select</span> <span class="token keyword">distinct</span> deptno <span class="token keyword">from</span> emp<span class="token punctuation">;</span> <span class="token comment">--单列去重</span>

<span class="token number">2.</span>查询这家公司总共有多少个部门及岗位？
<span class="token keyword">select</span> <span class="token keyword">distinct</span> deptno<span class="token punctuation">,</span>job <span class="token keyword">from</span> emp<span class="token punctuation">;</span><span class="token comment">--多列去重</span>

<span class="token comment">------------------------------------</span>
<span class="token comment">-- SQL 语句  &amp;  SQL*PLUS命令</span>
<span class="token comment">------------------------------------</span>
<span class="token number">1.</span>在<span class="token keyword">SQL</span> window中只能执行<span class="token keyword">sql</span>语句
<span class="token number">2.</span>在command window 既能执行<span class="token keyword">sql</span>语句，也可以执行<span class="token keyword">SQL</span><span class="token operator">*</span>PLUS命令

例如：<span class="token keyword">desc</span> 表名

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Oracle-SQL开发---- 编写简单的查询语句</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,14);function _(y,w){const a=i("ExternalLinkIcon");return p(),t("div",null,[o(" more "),n("h1",b,[g,s(" 47-Oracle-SQL开发---- "),n("a",f,[s("编写简单的查询语句.md"),l(a)])]),h])}const x=e(v,[["render",_],["__file","oracle47.html.vue"]]);export{x as default};

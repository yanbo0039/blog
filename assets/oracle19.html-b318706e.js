import{_ as e,X as i,Y as n,a1 as a,a0 as d}from"./framework-68dd73a2.js";const l={},s=d(`<h1 id="oracle初级测试题九-高级子查询" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题九-高级子查询" aria-hidden="true">#</a> Oracle初级测试题九--高级子查询</h1><p>例：思考如何查询比本部门平均薪水高的员工姓名，薪水。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--嵌套子查询的写法:

--我的理解写法：
--第一步：先查询员工姓名，薪水
select ename,sal from emp;
--第二步：--每个部门的平均薪水,将其作为一个表
select avg(sal) avgSal,deptno from emp group by deptno;
--第三步：在前两步基础之上解题
select ename,sal,emp.deptno from emp,
(select avg(sal) avgSal,deptno from emp group by deptno) tab_avgSal
where sal &gt; avgSal and emp.deptno = tab_avgSal.deptno;
--标准答案写法 ：
select empno,ename,sal
from   emp e ,(select deptno,avg(sal) avgsal from emp group by deptno) d
where e.deptno =d.deptno
and e.sal &gt;d.avgsal;

--相关子查询解题
select empno,ename,sal,deptno
from emp outer
where sal &gt; (select avg(sal) from emp where deptno = outer.deptno);
--父查询中的行每被处理一次，子查询就执行一次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><p>如下练习，使用相关子查询完成</p><ol><li>查询比所在职位平均工资高的员工姓名，职位。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ename,job
from emp outer
where sal &gt; (select avg(sal) from emp where job = outer.job);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>查询工资为其部门最低工资的员工编号，姓名，工资。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select empno,ename,sal
from emp outer
where sal = (select min(sal) from emp where deptno = outer.deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2</h2><p>如下练习，用相关子查询完成</p><ol><li>查询所有雇员编号，名字和部门名字。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select empno,ename,
(select dname from dept where emp.deptno = deptno) dname
from emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>查询哪些员工是经理？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp e
where 0 &lt; (select count(*) from emp 
           where mgr = e.empno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>查询哪些员工不是经理？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp e
where 0 = (select count(*) from emp 
           where mgr = e.empno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>查询每个部门工资最低的两个员工编号，姓名，工资。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select empno,ename,sal,deptno
from emp outer
where 1 &gt;= (select count(*)
                   from emp
                   where outer.sal &gt; sal
                   and  deptno = outer.deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习3" tabindex="-1"><a class="header-anchor" href="#练习3" aria-hidden="true">#</a> 练习3</h2><p>如下练习，用exists或not exists完成</p><ol><li>列出至少有一个雇员的所有部门名称。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select dname
from dept d
where exists (select &#39;1&#39;
                      from emp,dept
                      where emp.deptno = dept.deptno
                      and d.dname = dname);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>列出一个雇员都没有的所有部门名称。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select dname
from dept d
where not exists (select &#39;1&#39;
                      from emp,dept
                      where emp.deptno = dept.deptno
                      and d.dname = dname);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><p>如下练习，使用相关子查询完成。</p><ol><li>查询薪水多于他所在部门平均薪水的雇员名字，部门号。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ename,deptno
from emp outer
where sal &gt; (select avg(sal)
                    from emp
                    where outer.deptno = deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>查询员工姓名和直接上级的名字。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ename,(select ename 
                     from emp
                     where outer.mgr = empno)
                     直接上级
from emp outer;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>查询每个部门工资最高的员工姓名，工资。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ename,sal,deptno
from emp outer
where sal = (select max(sal)
                    from emp
                    where outer.deptno = deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>查询每个部门工资前两名高的员工姓名，工资。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ename,sal,deptno
from emp outer
where 1 &gt;= (select count(*)
                   from emp
                   where outer.deptno = deptno
                   and outer.sal &gt; sal);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_19_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,52);function t(r,c){return i(),n("div",null,[a(" more "),s])}const m=e(l,[["render",t],["__file","oracle19.html.vue"]]);export{m as default};

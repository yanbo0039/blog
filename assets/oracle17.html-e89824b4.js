import{_ as e,X as n,Y as a,a1 as r,a0 as o}from"./framework-68dd73a2.js";const p="/blog/assets/Oracle_17_1.png",t="/blog/assets/Oracle_17_2.png",i="/blog/assets/Oracle_17_3.png",g="/blog/assets/Oracle_17_4.png",m="/blog/assets/Oracle_17_5.png",s="/blog/assets/Oracle_17_6.png",c="/blog/assets/Oracle_17_7.png",d="/blog/assets/Oracle_17_8.png",l="/blog/assets/Oracle_17_9.png",f="/blog/assets/Oracle_17_10.png",_="/blog/assets/Oracle_17_11.png",u="/blog/assets/Oracle_17_12.png",b="/blog/assets/Oracle_17_13.png",h="/blog/assets/Oracle_17_14.png",y="/blog/assets/Oracle_17_15.png",x="/blog/assets/Oracle_17_16.png",w="/blog/assets/Oracle_17_17.png",k="/blog/assets/Oracle_17_18.png",O="/blog/assets/Oracle_17_19.png",v="/blog/assets/Oracle_17_20.png",z="/blog/assets/Oracle_17_21.png",j={},N=o(`<h1 id="oracle初级测试题六-分组函数" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题六-分组函数" aria-hidden="true">#</a> Oracle初级测试题六--分组函数</h1><p>--请思考如下问题？</p><p>--查询所有员工的每个月工资总和，平均工资？</p><pre><code>select sum(sal) as 月工资总和,avg(sal) as 平均工资
from emp;
</code></pre><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--查询工资最高和最低的工资是多少？</p><pre><code>select max(sal),min(sal) from emp;
</code></pre><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--查询公司的总人数？</p><pre><code>select count(*) from emp;
</code></pre><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--查询有奖金的总人数？</p><pre><code>一种理解：奖金不为空即为有奖金
select count(*) from emp where comm is not null;
</code></pre><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>另一种理解：奖金&gt;0才是有奖金
select count(*) from emp where nvl(comm,0) &gt; 0;
</code></pre><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="练习一" tabindex="-1"><a class="header-anchor" href="#练习一" aria-hidden="true">#</a> --练习一</h3><p>--1.查询部门20的员工，每个月的工资总和及平均工资。</p><pre><code>select sum(sal),avg(sal) from emp where deptno in 20;
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询工作在CHICAGO的员工人数，最高工资及最低工资。</p><pre><code>select count(*),max(sal),min(sal)
from emp join dept
on emp.deptno = dept.deptno
where loc in &#39;CHICAGO&#39;; 
</code></pre><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询员工表中一共有几种岗位类型。</p><pre><code>select count(distinct deptno) from emp; 
</code></pre><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--思考</p><p>--查询每个部门的平均工资？</p><pre><code>select avg(sal),deptno from emp group by deptno;
</code></pre><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="练习二" tabindex="-1"><a class="header-anchor" href="#练习二" aria-hidden="true">#</a> --练习二</h3><p>--1.查询每个部门的部门编号，部门名称，部门人数，最高工资，最低工资，工资总和，平均工资。</p><pre><code>select emp.deptno,dept.dname,count(*),
max(sal),min(sal),sum(sal),avg(sal)
from emp join dept
on emp.deptno = dept.deptno
group by emp.deptno,dept.dname;
</code></pre><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询每个部门，每个岗位的部门编号，部门名称，岗位名称，部门人数，最高工资，最低工资，工资总和，平均工资。</p><pre><code>select emp.deptno,dname,job,
count(*),max(sal),min(sal),sum(sal),avg(sal)
from emp join dept 
on emp.deptno = dept.deptno
group by emp.deptno,dname,job;
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询每个经理所管理的人数（有多少个人有上级经理），经理编号，经理姓名，要求包括没有经理的人员信息。</p><pre><code>select count(*),manager.empno,manager.ename 
from emp worker,emp manager
where worker.mgr = manager.empno(+)
group by manager.empno,manager.ename;
</code></pre><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="练习三" tabindex="-1"><a class="header-anchor" href="#练习三" aria-hidden="true">#</a> --练习三</h3><p>--1.查询部门人数大于2的部门编号，部门名称，部门人数。</p><pre><code>select dept.deptno,dept.dname,count(dept.deptno)
from emp join dept
on emp.deptno = dept.deptno
group by dept.deptno,dept.dname
having count(dept.deptno) &gt; 2;
</code></pre><p><img src="`+b+`" alt="" loading="lazy"> --2.查询部门平均工资大于2000，且人数大于2的部门编号，部门名称，部门人数，部门平均工资，并按照部门人数升序排序。</p><pre><code>select dept.deptno,dname,count(dept.deptno),avg(sal)
from emp join dept
on emp.deptno = dept.deptno
group by dept.deptno,dname
having avg(sal) &gt; 2000 and count(dept.deptno) &gt; 2
order by count(*) asc;
</code></pre><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--课后作业 --1.查询部门平均工资在2500元以上的部门名称及平均工资。</p><pre><code>select dname,avg(sal)
from emp join dept
on emp.deptno = dept.deptno
group by dname
having avg(sal) &gt; 2500;
</code></pre><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询员工岗位中不是以“SA”开头并且平均工资在2500元以上的岗位及平均工资，并按平均工资降序排序。</p><pre><code>select job,avg(sal)
from emp
group by job
having avg(sal) &gt; 2500 and job not like &#39;SA%&#39;;
</code></pre><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询部门人数在2人以上的部门名称、最低工资、最高工资,并对求得的工资进行四舍五入到整数位。</p><pre><code>select dname,round(min(sal)),round(max(sal))
from emp join dept
on emp.deptno = dept.deptno
group by dname
having count(dname) &gt; 2;
</code></pre><figure><img src="`+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.查询岗位不为SALESMAN，工资和大于等于2500的岗位及每种岗位的工资和。</p><pre><code>select job,sum(sal)
from emp join dept
on emp.deptno = dept.deptno
group by job
having job not in &#39;SALESMAN&#39;
and sum(sal) &gt;=  2500;
</code></pre><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--5.显示经理号码和经理姓名，这个经理所管理员工的最低工资，没有经理的KING也要显示，不包括最低工资小于3000的，按最低工资由高到低排序。</p><pre><code>--先查询经理所管理的员工有哪些
select manager.ename managerName,
manager.empno managerEmpno,worker.ename,
worker.sal  from
emp worker,emp manager
where worker.mgr = manager.empno(+);
--再查询 经理所管理的员工的最低工资 
select managerEmpno,managerName,
min(sal) minSal
from (select manager.ename managerName,
manager.empno managerEmpno,
worker.ename,worker.sal  from
emp worker,emp manager
where worker.mgr = manager.empno(+))
group by managerName,managerEmpno;
--所以最终解法为
select  manager.empno,manager.ename,tabminsal.minSal
from emp worker, emp manager,
(select managerEmpno,managerName,min(sal) minSal
from (select manager.ename managerName,manager.empno 
managerEmpno,worker.ename,worker.sal  from
emp worker,emp manager
where worker.mgr = manager.empno(+))
group by managerName,managerEmpno) tabminsal
where worker.mgr = manager.empno(+) 
and manager.ename = tabminsal.managerName 
and tabminsal.minSal &gt;= 3000
order by tabminsal.minSal desc;
</code></pre><figure><img src="`+O+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="我一直有一种直觉-上题解法一定有简单得不能再简单的解法" tabindex="-1"><a class="header-anchor" href="#我一直有一种直觉-上题解法一定有简单得不能再简单的解法" aria-hidden="true">#</a> 我一直有一种直觉 上题解法一定有简单得不能再简单的解法</h2><h2 id="如何有大神愿意不吝赐教感激不尽。。" tabindex="-1"><a class="header-anchor" href="#如何有大神愿意不吝赐教感激不尽。。" aria-hidden="true">#</a> 如何有大神愿意不吝赐教感激不尽。。</h2><pre><code>嗯嗯。。还是自己找到咯最简的解法 。。上面的解法居然是错误的解法。。
不得不说学渣就是渣渣！！！！！！！没错这个学渣不是别人就是我自 
己！！！！！！渣渣！！！！！
</code></pre><h3 id="正确解法" tabindex="-1"><a class="header-anchor" href="#正确解法" aria-hidden="true">#</a> 正确解法</h3><pre><code>select worker.mgr,manager.ename,min(worker.sal) minsal from 
emp worker,emp manager 
where worker.mgr = manager.empno(+) 
group by worker.mgr,manager.ename
having min(worker.sal) &gt; = 3000
order by minsal desc;
</code></pre><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--6.写一个查询，显示每个部门最高工资和最低工资的差额。</p><pre><code>select (max(sal)-min(sal))
from emp
group by deptno;
</code></pre><figure><img src="`+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',74);function S(E,A){return n(),a("div",null,[r(" more "),N])}const G=e(j,[["render",S],["__file","oracle17.html.vue"]]);export{G as default};

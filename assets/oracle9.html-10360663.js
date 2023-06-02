import{_ as e,X as p,Y as n,a1 as a,a0 as t}from"./framework-68dd73a2.js";const o="/blog/assets/Oracle_9_1.png",r="/blog/assets/Oracle_9_2.png",d="/blog/assets/Oracle_9_3.png",s="/blog/assets/Oracle_9_4.png",c="/blog/assets/Oracle_9_5.png",i="/blog/assets/Oracle_9_6.png",l="/blog/assets/Oracle_9_7.png",m="/blog/assets/Oracle_9_8.png",g="/blog/assets/Oracle_9_9.png",_="/blog/assets/Oracle_9_10.png",f="/blog/assets/Oracle_9_11.png",h="/blog/assets/Oracle_9_12.png",b="/blog/assets/Oracle_9_13.png",u="/blog/assets/Oracle_9_14.png",O="/blog/assets/Oracle_9_15.png",y="/blog/assets/Oracle_9_16.png",w="/blog/assets/Oracle_9_17.png",x={},z=t(`<h1 id="oracle-多表链接" tabindex="-1"><a class="header-anchor" href="#oracle-多表链接" aria-hidden="true">#</a> Oracle-多表链接</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="多表链接查询-嵌套子查询-相关子查询-约束-事务" tabindex="-1"><a class="header-anchor" href="#多表链接查询-嵌套子查询-相关子查询-约束-事务" aria-hidden="true">#</a> --多表链接查询 嵌套子查询 相关子查询 （约束 事务）</h2><h2 id="多表链接-查询" tabindex="-1"><a class="header-anchor" href="#多表链接-查询" aria-hidden="true">#</a> --多表链接 查询</h2><p>--笛卡尔积 14*4</p><pre><code>select emp.empno,
emp.ename,emp.job,emp.mgr,
emp.hiredate,emp.sal,
emp.deptno,dept.deptno,
dept.dname
from emp,dept;
</code></pre><p><img src="`+o+'" alt="" loading="lazy"><img src="'+r+'" alt="" loading="lazy"><img src="'+d+`" alt="" loading="lazy"></p><pre><code>select emp.empno,
emp.ename,emp.job,emp.mgr,
emp.hiredate,emp.sal,
emp.deptno,dept.deptno,
dept.dname
from emp,dept
where emp.deptno = dept.deptno;
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select emp.*,dept.* from emp,dept where emp.deptno = dept.deptno;
</code></pre><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--查询所有员工编号、姓名，部门编号，工作地点</p><pre><code>select empno,ename,dept.deptno,loc
from emp,dept
where dept.deptno = emp.deptno;
</code></pre><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--现在只想查询工作地点在NEW YORK的员工编号，姓名，部门编号，工作地点</p><pre><code>select empno,ename,dept.deptno,loc
from emp,dept
where dept.deptno = emp.deptno and loc = &#39;NEW YORK&#39;;
</code></pre><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--给定表别名</p><pre><code>select e.empno,e.ename,d.deptno,d.loc
from emp e,dept d
where d.deptno = e.deptno and d.loc = &#39;NEW YORK&#39;;
</code></pre><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.写一个查询，显示所有员工姓名，部门编号，部门名称。</p><pre><code>select emp.ename,emp.deptno,dept.dname
from emp,dept;
</code></pre><p><img src="`+g+'" alt="" loading="lazy"><img src="'+_+'" alt="" loading="lazy"><img src="'+f+`" alt="" loading="lazy"></p><p>--2.写一个查询，显示所有工作在CHICAGO并且奖金不为空的员工姓名，工作地点，奖金</p><pre><code>select emp.ename,dept.loc,emp.comm
from emp,dept where dept.loc = &#39;CHICAGO&#39; and emp.comm is not null;
</code></pre><p><img src="`+h+`" alt="" loading="lazy"> --3.写一个查询，显示所有姓名中含有A字符的员工姓名，工作地点。</p><pre><code>select emp.ename,dept.loc 
from emp,dept
where emp.ename like &#39;%A%&#39;;
</code></pre><p><img src="`+b+'" alt="" loading="lazy"><img src="'+u+`" alt="" loading="lazy"></p><p>--假设有第三个表（部门类型-deptno,dtype) --查询所有员工编号 ，姓名 ，部门编号，工作地点 ，部门类型名称</p><pre><code>select e.empno,e.ename,d.deptno,d.loc
from emp e,dept d,dep de
where d.deptno = e.deptno and d.deptno = de.deptno
</code></pre><hr><h2 id="非等值-链接" tabindex="-1"><a class="header-anchor" href="#非等值-链接" aria-hidden="true">#</a> --非等值 链接</h2><p>--查询工资等级 在员工姓 名部门名称</p><pre><code>select s.grade,e.ename,d.dname,e.sal
from dept d,emp e,salgrade s
where e.sal between s.losal and s.hisal and e.deptno = d.deptno
order by e.sal;
</code></pre><figure><img src="`+O+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--到目前为止sql语句 的执行顺序 --1 from --2 where --3 select --4 order by --1.查询每个员工的编号，姓名，工资，工资等级，所在工作城市，按照工资等级进行升序排序。</p><hr><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接" aria-hidden="true">#</a> --外部链接</h2><p>--查询没有雇员工作的部门 --查询所有雇员姓名，部门编号，部门名称，包括没有员工的部门也要显示出来</p><pre><code>select ename,dept.deptno,dept.dname
from emp,dept
where dept.deptno = emp.deptno(+);
</code></pre><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--查询每个员工的姓名和直接上级姓名？--e 员工表 w 经理表</p><pre><code>select e.ename,w.ename
from emp e,emp w
where e.mgr = w.empno;
</code></pre><figure><img src="`+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from salgrade;
select * from dept;
select * from emp;
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,49);function C(N,v){return p(),n("div",null,[a(" more "),z])}const E=e(x,[["render",C],["__file","oracle9.html.vue"]]);export{E as default};

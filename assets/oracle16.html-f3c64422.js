import{_ as a,X as o,Y as t,a1 as p,Z as e,$ as n,a2 as i,a0 as d,F as m}from"./framework-68dd73a2.js";const g="/blog/assets/Oracle_16_1.png",s="/blog/assets/Oracle_16_2.png",c="/blog/assets/Oracle_16_3.png",l="/blog/assets/Oracle_16_4.png",f="/blog/assets/Oracle_16_5.png",_="/blog/assets/Oracle_16_6.png",h="/blog/assets/Oracle_16_7.png",w="/blog/assets/Oracle_16_8.png",u="/blog/assets/Oracle_16_9.png",b="/blog/assets/Oracle_16_10.png",k="/blog/assets/Oracle_16_11.png",O="/blog/assets/Oracle_16_12.png",x="/blog/assets/Oracle_16_13.png",I="/blog/assets/Oracle_16_14.png",j="/blog/assets/Oracle_16_15.png",N="/blog/assets/Oracle_16_16.png",y="/blog/assets/Oracle_16_17.png",C="/blog/assets/Oracle_16_18.png",z={},A={id:"_16-oracle初级测试题五-多表连接-md",tabindex:"-1"},G=e("a",{class:"header-anchor",href:"#_16-oracle初级测试题五-多表连接-md","aria-hidden":"true"},"#",-1),S={href:"http://xn--16-Oracle---k29qu18aytyze0b9i6arx2dlyub7unp6si25b.md",target:"_blank",rel:"noopener noreferrer"},H=d(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>--写一条查询语句，查询员工姓名、部门名称、工作地点？</p><pre><code>select ename,dept.dname,dept.loc from emp,dept where emp.deptno(+) = dept.deptno;
</code></pre><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="练习一" tabindex="-1"><a class="header-anchor" href="#练习一" aria-hidden="true">#</a> --练习一</h3><p>--1.写一个查询，显示所有员工姓名，部门编号，部门名称。</p><pre><code>select ename,dept.deptno,dept.dname
from emp,dept
where emp.deptno(+) = dept.deptno;
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.写一个查询，显示所有工作在CHICAGO并且奖金不为空的员工姓名，工作地点，奖金</p><pre><code>select ename,dept.loc,comm
from emp,dept
where emp.deptno = dept.deptno and loc in &#39;CHICAGO&#39; 
and comm is not null;
</code></pre><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.写一个查询，显示所有姓名中含有A字符的员工姓名，工作地点。</p><pre><code>select ename,dept.loc
from emp,dept
where emp.deptno = dept.deptno and ename like &#39;%A%&#39;;

select ename,dept.loc
from emp,dept
where emp.deptno = dept.deptno and instr(ename,&#39;A&#39;) &lt;&gt; 0;

select ename,dept.loc
from emp,dept
where emp.deptno = dept.deptno and instr(ename,&#39;A&#39;) != 0;

select ename,dept.loc
from emp,dept
where emp.deptno = dept.deptno and instr(ename,&#39;A&#39;) &gt; 0;
</code></pre><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="练习二" tabindex="-1"><a class="header-anchor" href="#练习二" aria-hidden="true">#</a> --练习二</h3><p>--1.查询每个员工的编号，姓名，工资，工资等级，所在工作城市，按照工资等级进行升序排序。</p><pre><code>select empno,ename,sal,grade,loc
from emp,dept,salgrade
where emp.deptno = dept.deptno and sal between losal and hisal
order by sal asc;
</code></pre><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--思考：查询每个员工的姓名和直接上级姓名？</p><pre><code>select worker.ename,manager.ename
from emp worker,emp manager
where worker.mgr = manager.empno(+);
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h1 id="如何区分外部连接的符号-放在哪一边这是我一直没有搞清楚的地方" tabindex="-1"><a class="header-anchor" href="#如何区分外部连接的符号-放在哪一边这是我一直没有搞清楚的地方" aria-hidden="true">#</a> 如何区分外部连接的符号（+）放在哪一边这是我一直没有搞清楚的地方</h1><h3 id="练习三" tabindex="-1"><a class="header-anchor" href="#练习三" aria-hidden="true">#</a> --练习三</h3><p>--1.查询所有工作在NEW YORK和CHICAGO的员工姓名，员工编号，以及他们的经理姓名，经理编号。</p><pre><code>select worker.ename,worker.empno,manager.ename,worker.mgr
from emp worker,emp manager,dept
where worker.mgr = manager.empno(+)
and worker.deptno = dept.deptno 
and loc in (&#39;NEW YORK&#39;,&#39;CHICAGO&#39;);
</code></pre><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.第上一题的基础上，添加没有经理的员工King，并按照员工编号排序。</p><pre><code>select worker.ename,worker.empno,manager.ename,worker.mgr
from emp worker,emp manager,dept
where worker.mgr = manager.empno(+)
and worker.deptno = dept.deptno 
and loc in (&#39;NEW YORK&#39;,&#39;CHICAGO&#39;)
order by worker.empno asc;
</code></pre><figure><img src="`+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询所有员工编号，姓名，部门名称，包括没有部门的员工也要显示出来。</p><pre><code>select empno,ename,dept.dname
from emp,dept
where emp.deptno(+) = dept.deptno;
</code></pre><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习四 --使用SQL-99写法，完成如下练习 --1.创建一个员工表和部门表的交叉连接。</p><pre><code>交叉连接会产生两个表的交叉乘积，
和两个表之间的笛卡尔积是一样的；
使用CROSS JOIN 子句完成。

select * from emp cross join dept;
</code></pre><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.使用自然连接，显示入职日期在80年5月1日之后的员工姓名，部门名称，入职日期</p><pre><code>自然连接是对两个表之间相同名字和
数据类型的列进行的等值连接；
如果两个表之间相同名称的列的数据类型不同，
则会产生错误；
使用NATURAL JOIN子句来完成。

select ename,dname,hiredate
from emp
natural join dept
where hiredate &gt; &#39;01-5月-80&#39;;
</code></pre><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.使用USING子句，显示工作在CHICAGO的员工姓名，部门名称，工作地点</p><pre><code>自然连接是使用所有名称和
数据类型相匹配的列作为连接条件，
而USING子句可以指定用某个或
某几个相同名字和数据类型的列作为连接条件。

使用USING子句创建连接时，应注意以下几点：

如果有若干个列名称相同但数据类型不同，
自然连接子句可以用USING子句来替换，
以指定产生等值连接的列。
如果有多于一个列都匹配的情况，
使用USING子句只能指定其中的一列。
USING子句中的用到的列不能使用表名和别名作为前缀。
NATURAL JOIN子句和USING子句是相互排斥的，
不能同时使用。

select ename,dname,loc
from emp 
join dept using(deptno)
where loc in &#39;CHICAGO&#39;;
</code></pre><figure><img src="`+O+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.使用ON子句，显示工作在CHICAGO的员工姓名，部门名称，工作地点，薪资等级</p><pre><code>自然连接条件基本上是具有相同列名的表之间的等值连接；
如果要指定任意连接条件,
或指定要连接的列，
则可以使用ON子句；
用ON将连接条件和其它检索条件分隔开，
其它检索条件写在WHERE子句；
ON子句可以提高代码的可读性。 

select ename,dname,loc,grade
from emp join dept
on emp.deptno = dept.deptno
join salgrade
on sal between losal and hisal
where loc in &#39;CHICAGO&#39;;
</code></pre><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--5.使用左连接，查询每个员工的姓名，经理姓名，没有经理的King也要显示出来。</p><pre><code>左外连接以FROM子句中的左边表为基表，
该表所有行数据按照连接条件无论是否与右边表能匹配上，
都会被显示出来。 

select worker.ename,manager.ename
from emp worker
left outer join emp manager
on worker.mgr = manager.empno;
</code></pre><figure><img src="`+I+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--6.使用右连接，查询每个员工的姓名，经理姓名，没有经理的King也要显示出来。</p><pre><code>右外连接以FROM子句中的右边表为基表，
该表所有行数据按照连接条件无论是否与左边表能匹配上，
都会被显示出来。 

select worker.ename,manager.ename
from emp manager
right outer join emp worker
on worker.mgr = manager.empno;
</code></pre><figure><img src="`+j+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--课后作业 --1.显示员工SMITH的姓名，部门名称，直接上级名称</p><pre><code>select worker.ename,dname,manager.ename
from emp worker,emp manager,dept
where worker.mgr = manager.empno
and worker.deptno = dept.deptno 
and worker.ename in &#39;SMITH&#39;; --通常写法

select worker.ename,dname,manager.ename
from emp worker join emp manager
on worker.mgr = manager.empno
join dept
on worker.deptno = dept.deptno 
where worker.ename in &#39;SMITH&#39;;--join on

select worker.ename,dname,manager.ename
from emp worker left outer join emp manager
on worker.mgr = manager.empno
left outer join dept
on worker.deptno = dept.deptno 
where worker.ename in &#39;SMITH&#39;;--左外连接 left outer join

select worker.ename,dname,manager.ename
from emp worker right outer join emp manager
on worker.mgr = manager.empno
right outer join dept
on worker.deptno = dept.deptno 
where worker.ename in &#39;SMITH&#39;;--右外连接 right outer join 
</code></pre><figure><img src="`+N+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.显示员工姓名，部门名称，工资，工资级别，要求工资级别大于4级。</p><pre><code>select ename,dname,sal,grade
from emp,dept,salgrade
where emp.deptno = dept.deptno 
and sal between losal 
and hisal and grade &gt; 4;--通常写法

select ename,dname,sal,grade
from emp join dept
on emp.deptno = dept.deptno
join salgrade
on sal between losal and hisal
where grade &gt; 4;--join on

select ename,dname,sal,grade
from emp left outer join dept
on emp.deptno = dept.deptno
left outer join salgrade
on sal between losal and hisal
where grade &gt; 4;--左外连接 left outer join

select ename,dname,sal,grade
from emp right outer join dept
on emp.deptno = dept.deptno
right outer join salgrade
on sal between losal and hisal
where grade &gt; 4;--右外连接 right outer join 
</code></pre><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.显示员工KING和FORD管理的员工姓名及其经理姓名。</p><pre><code>我特么实在不知道如何断句！！！！等我想明白再做！！！！
</code></pre><p>--4.显示员工姓名，参加工作时间，经理名，参加工作时间，要求参加时间比经理早。</p><pre><code>select worker.ename as 员工姓名,worker.hiredate as 员工入职日期,
manager.ename as 经理姓名,manager.hiredate as 经理入职日期
from emp worker,emp manager 
where worker.mgr = manager.empno and 
worker.hiredate &lt; manager.hiredate;
</code></pre><figure><img src="`+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',65);function R(U,E){const r=m("ExternalLinkIcon");return o(),t("div",null,[p(" more "),e("h1",A,[G,n(),e("a",S,[n("16-Oracle初级测试题五--多表连接.md"),i(r)])]),H])}const K=a(z,[["render",R],["__file","oracle16.html.vue"]]);export{K as default};

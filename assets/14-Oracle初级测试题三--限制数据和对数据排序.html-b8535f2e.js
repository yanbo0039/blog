import{_ as e,X as n,Y as a,a1 as i,a0 as o}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_14_1.png",t="/blog/assets/Oracle_14_2.png",p="/blog/assets/Oracle_14_3.png",c="/blog/assets/Oracle_14_4.png",s="/blog/assets/Oracle_14_5.png",g="/blog/assets/Oracle_14_6.png",l="/blog/assets/Oracle_14_7.png",d="/blog/assets/Oracle_14_8.png",m="/blog/assets/Oracle_14_9.png",_="/blog/assets/Oracle_14_10.png",f="/blog/assets/Oracle_14_11.png",b="/blog/assets/Oracle_14_12.png",u="/blog/assets/Oracle_14_13.png",h="/blog/assets/Oracle_14_14.png",A="/blog/assets/Oracle_14_15.png",w="/blog/assets/Oracle_14_16.png",x="/blog/assets/Oracle_14_17.png",S="/blog/assets/Oracle_14_18.png",y="/blog/assets/Oracle_14_19.png",O="/blog/assets/Oracle_14_20.png",z="/blog/assets/Oracle_14_21.png",E="/blog/assets/Oracle_14_22.png",N="/blog/assets/Oracle_14_23.png",M="/blog/assets/Oracle_14_24.png",j={},L=o(`<h1 id="oracle初级测试题三-限制数据和对数据排序" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题三-限制数据和对数据排序" aria-hidden="true">#</a> Oracle初级测试题三--限制数据和对数据排序</h1><p>--练习一</p><p>--1.查询职位为SALESMAN的员工编号、职位、入职日期。</p><pre><code>select empno,job,hiredate from emp
where job = &#39;SALESMAN&#39;;
</code></pre><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询1985年12月31日之前入职的员工姓名及入职日期。</p><pre><code>select ename,hiredate from emp
where hiredate &lt; &#39;31-12月-85&#39;;
</code></pre><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询部门编号不在10部门的员工姓名、部门编号。</p><pre><code>select ename,deptno from emp
where deptno not in 10;
</code></pre><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习二</p><p>--1.查询入职日期在82年至85年的员工姓名，入职日期。</p><pre><code>select ename,hiredate from emp
where hiredate between &#39;01-1月-82&#39; and &#39;31-12月-85&#39;;--注写01月会报错。。。
</code></pre><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询月薪在3000到5000的员工姓名，月薪。</p><pre><code>select ename,sal from emp
where sal between 3000 and 5000;
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询部门编号为10或者20的员工姓名，部门编号。</p><pre><code>select ename,deptno
from emp
where deptno in(10,20);
</code></pre><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.查询经理编号为7902, 7566, 7788的员工姓名，经理编号。</p><pre><code>select ename,mgr
from emp
where mgr in(7902,7566,7788);
</code></pre><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习三 --1.查询员工姓名以W开头的员工姓名。</p><pre><code>select ename 
from emp
where ename like &#39;W%&#39;;
</code></pre><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询员工姓名倒数第2个字符为T的员工姓名。</p><pre><code>select ename 
from emp
where ename like &#39;%T_&#39;;
</code></pre><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询奖金为空的员工姓名，奖金。</p><pre><code>select ename,comm
from emp
where comm is null;
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习四 --1.查询工资超过2000并且职位是MANAGER,或者职位是SALESMAN的员工姓名、职位、工资</p><pre><code>select ename,job,sal
from emp
where sal &gt; 2000 and job = &#39;MANAGER&#39; or job = &#39;SALESMAN&#39;;
</code></pre><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询工资超过2000并且职位是 MANAGER或SALESMAN的员工姓名、职位、工资。</p><pre><code>select ename,job,sal
from emp
where sal &gt; 2000 and job in(&#39;MANAGER&#39;,&#39;SALESMAN&#39;);
</code></pre><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询部门在10或者20，并且工资在3000到5000之间的员工姓名、部门、工资。</p><pre><code>select ename,deptno,sal
from emp
where deptno in(10,20) and sal between 3000 and 5000;
</code></pre><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.查询入职日期在81年，并且职位不是SALES开头的员工姓名、入职日期、职位。</p><pre><code>select ename,hiredate,job
from emp
where hiredate between &#39;01-1月-81&#39; and &#39;31-12月-81&#39; and job not like &#39;SALES%&#39;;
</code></pre><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--5.查询职位为SALESMAN或MANAGER，部门编号为10或者20，姓名包含A的员工姓名、职位、部门编号。</p><pre><code>select ename,job,deptno
from emp
where job in(&#39;SALESMAN&#39;,&#39;MANAGER&#39;) and deptno in(10,20) and ename like &#39;%A%&#39;;
</code></pre><figure><img src="`+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习五</p><p>--1.查询部门在20或30的员工姓名，部门编号，并按照工资升序排序。</p><pre><code>备注：此处的工资只是作对比并不是未审题
select ename,deptno,sal
from emp
where deptno in(20,30) order by sal asc;
</code></pre><figure><img src="`+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询工资在2000-3000之间，部门不在10号的员工姓名，部门编号，工资，并按照部门升序，工资降序排序。</p><pre><code>select ename,deptno,sal
from emp
where sal between 2000 and 3000 and deptno not in 10 order by deptno asc,sal desc;
</code></pre><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询入职日期在82年至83年之间，职位以SALES或者MAN开头的员工姓名，入职日期，职位，并按照入职日期降序排序。</p><pre><code>select ename,hiredate,job
from emp
where hiredate between &#39;01-1月-82&#39; and &#39;31-12月-83&#39; and
(job like &#39;SALES%&#39; or job like &#39;MAN%&#39;)
order by hiredate desc;
</code></pre><figure><img src="`+S+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--课后作业</p><p>--1.查询入职时间在1982-7-9之后，并且不从事SALESMAN工作的员工姓名、入职时间、职位。</p><pre><code>select ename,hiredate,job
from emp
where hiredate &gt; &#39;09-7月-82&#39; and job not in &#39;SALESMAN&#39;;
</code></pre><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询员工姓名的第三个字母是a的员工姓名。</p><pre><code>select ename
from emp
where ename like &#39;__A%&#39;;
</code></pre><figure><img src="`+O+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询除了10、20号部门以外的员工姓名、部门编号。</p><pre><code>select ename,deptno
from emp
where deptno not in(10,20);
</code></pre><figure><img src="`+z+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.查询部门号为30号员工的信息，先按工资降序排序，再按姓名升序排序。</p><pre><code>select *
from emp
where deptno in 30
order by sal desc,
ename asc;
</code></pre><figure><img src="`+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--5.查询没有上级的员工(经理号为空)的员工姓名。</p><pre><code>select ename
from emp
where mgr is null;
</code></pre><figure><img src="`+N+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--6.查询工资大于等于4500并且部门为10或者20的员工的姓名\\工资、部门编号。</p><pre><code>select ename,sal,deptno
from emp
where sal &gt;= 4500 and deptno in(10,20);
</code></pre><figure><img src="`+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',81);function k(G,R){return n(),a("div",null,[i(" more "),L])}const B=e(j,[["render",k],["__file","14-Oracle初级测试题三--限制数据和对数据排序.html.vue"]]);export{B as default};

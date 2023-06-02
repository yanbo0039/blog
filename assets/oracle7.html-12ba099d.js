import{_ as e,X as o,Y as n,a1 as a,a0 as r}from"./framework-68dd73a2.js";const i="/blog/assets/Oracle_7_1.png",t="/blog/assets/Oracle_7_2.png",p="/blog/assets/Oracle_7_3.png",c="/blog/assets/Oracle_7_4.png",s="/blog/assets/Oracle_7_5.png",l="/blog/assets/Oracle_7_6.png",g="/blog/assets/Oracle_7_7.png",d="/blog/assets/Oracle_7_8.png",m="/blog/assets/Oracle_7_9.png",f="/blog/assets/Oracle_7_10.png",_="/blog/assets/Oracle_7_11.png",b="/blog/assets/Oracle_7_12.png",u="/blog/assets/Oracle_7_13.png",h="/blog/assets/Oracle_7_14.png",A="/blog/assets/Oracle_7_15.png",y="/blog/assets/Oracle_7_16.png",w="/blog/assets/Oracle_7_17.png",O="/blog/assets/Oracle_7_18.png",z="/blog/assets/Oracle_7_19.png",S="/blog/assets/Oracle_7_20.png",x="/blog/assets/Oracle_7_21.png",E="/blog/assets/Oracle_7_22.png",L="/blog/assets/Oracle_7_23.png",M="/blog/assets/Oracle_7_24.png",N="/blog/assets/Oracle_7_25.png",j="/blog/assets/Oracle_7_26.png",R="/blog/assets/Oracle_7_27.png",k="/blog/assets/Oracle_7_28.png",C="/blog/assets/Oracle_7_29.png",K="/blog/assets/Oracle_7_30.png",G="/blog/assets/Oracle_7_31.png",v="/blog/assets/Oracle_7_32.png",D="/blog/assets/Oracle_7_33.png",B="/blog/assets/Oracle_7_34.png",T="/blog/assets/Oracle_7_35.png",V="/blog/assets/Oracle_7_36.png",W="/blog/assets/Oracle_7_37.png",X="/blog/assets/Oracle_7_38.png",Y="/blog/assets/Oracle_7_39.png",q="/blog/assets/Oracle_7_40.png",F="/blog/assets/Oracle_7_41.png",H="/blog/assets/Oracle_7_42.png",I="/blog/assets/Oracle_7_43.png",J="/blog/assets/Oracle_7_44.png",P="/blog/assets/Oracle_7_45.png",Q="/blog/assets/Oracle_7_46.png",U="/blog/assets/Oracle_7_47.png",Z={},$=r(`<h1 id="oracle-限制数据与对数据排序" tabindex="-1"><a class="header-anchor" href="#oracle-限制数据与对数据排序" aria-hidden="true">#</a> Oracle-限制数据与对数据排序</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>--------第三章 限制数据与对数据排序---------</p><p>--选择行的语句关键字where --找出emp表中所有工作在10号部门的员工 --select from where 顺序from where select 先确定表，再筛选行，再投影列</p><pre><code>select * from emp where deptno = 10;
</code></pre><p><img src="`+i+`" alt="" loading="lazy"> ---普通比较运算符 --不等于号 &lt;&gt; 或 != -- 找出emp表中岗位为cleck并且工资大于1000的员工 -- 字符串格式的数据要用单引号&#39;&#39;括起来</p><pre><code>   select * from emp where job = &#39;CLERK&#39; and sal &gt; 1000;
</code></pre><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--比较日期型数据 -- 日期格式同样需要单引号括起来 --找出员工表中入职日期大于1982年1月1日的员工信息 --在oracle数据库中，默认的日期形式是DD-MON-RR DD天数 MON月份 --（需要加上一个&#39;月&#39;字）RR年份的后两位</p><pre><code>select * from emp where hiredate &gt; &#39;1982/1/1&#39;;---文字与格式字符串不匹配
</code></pre><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code> select * from emp where hiredate &gt; &#39;01-1月-82&#39;;
</code></pre><p><img src="`+c+'" alt="" loading="lazy"> --- 1.查询职位为SALESMAN的员工编号、职位、入职日期。 select empno,job,hiredate from emp where job = &#39;SALESMAN&#39;; <img src="'+s+`" alt="" loading="lazy"> --- 2.查询1985年12月31日之前入职的员工姓名及入职日期。</p><pre><code>select ename,hiredate from emp where hiredate &lt; &#39;31-12月-85&#39;;
</code></pre><p><img src="`+l+`" alt="" loading="lazy"> --- 3.查询部门编号不在10部门的员工姓名、部门编号。</p><pre><code>select ename,deptno from emp where deptno &lt;&gt; 10;
select ename,deptno from emp where deptno != 10;
select ename,deptno from emp where deptno != &#39;10&#39;;
select ename,deptno from emp where deptno not in &#39;10&#39;;
select ename,deptno from emp where deptno not in(&#39;10&#39;);
</code></pre><p><img src="`+g+`" alt="" loading="lazy"> --特殊比较运算符 --between...and....找出指定数据是否在某个范围内 是包含边界 --在员工表中找出工资在1500-2500内的员工</p><pre><code>select * from emp where sal between 1500 and 2500;
select * from emp where sal &gt;= 1500 and sal &lt;= 2500;
</code></pre><p><img src="`+d+`" alt="" loading="lazy"> -- in (集合列表) 判断指定数据是否在这个集合当中 -- in 中的元素用,隔开 -- 从emp表中找出岗位为CLARK或SALESMAN或MANAGER 的员工信息</p><pre><code>select * from emp where job in(&#39;CLERK&#39;,&#39;SALESMAN&#39;,&#39;MANAGER&#39;);
select * from emp where job = &#39;CLERK&#39; or job = &#39;SALESMAN&#39; or job = &#39;MANAGER&#39;;
</code></pre><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.查询入职日期在82年至85年的员工姓名，入职日期。</p><pre><code>select ename,hiredate from emp
where hiredate between &#39;01-1月-82&#39; and &#39;31-12月-85&#39;;
</code></pre><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询月薪在3000到5000的员工姓名，月薪。</p><pre><code>select ename,sal from emp
where sal between 3000 and 5000;
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询部门编号为10或者20的员工姓名，部门编号。</p><pre><code>select ename,deptno from emp
where deptno in(10,20);
</code></pre><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.查询经理编号为7902, 7566, 7788的员工姓名，经理编号。</p><pre><code>select ename,mgr from emp
where mgr in(7902,7566,7788);
</code></pre><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>-- like(模糊匹配); -- 跟Like搭配的有两个通配符 -- % 表示0个或多个任意字符 --_ 表示一个任意字符 --找出emp表中名字首字母为s开头的员工</p><pre><code>select * from emp where ename like &#39;S%&#39;;
</code></pre><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>-- 找出emp表中名字的第二位为M的员工信息</p><pre><code>select * from emp where ename like &#39;_M%&#39;;
</code></pre><figure><img src="`+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>-- is null 运算符 --找出员工表中没有奖金的员工</p><pre><code>select * from emp where comm is null;
</code></pre><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.查询员工姓名以W开头的员工姓名。</p><pre><code>select ename from emp where ename like &#39;W%&#39;;
</code></pre><figure><img src="`+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询员工姓名倒数第2个字符为T的员工姓名。</p><pre><code>select ename from emp where ename like &#39;%T_&#39;;
</code></pre><figure><img src="`+O+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询奖金为空的员工姓名，奖金。</p><pre><code>select ename,comm from emp where comm is null;
</code></pre><figure><img src="`+z+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--逻辑运算符 --and 并且 --找出员工表中岗位为CLERK并且部门为20员工信息</p><pre><code>select * from emp where job = &#39;CLERK&#39; and deptno = 20;
</code></pre><figure><img src="`+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--or 或者 --找出员工表中岗位为CLERK或者部门为20员工信息</p><p>select * from emp where job = &#39;CLERK&#39; or deptno = 20; <img src="'+x+`" alt="" loading="lazy"> --not 非 --not 可以跟以上4个特殊比较运算符搭配 --not between...and.... -- 找出员工工资不在1500-2500范围内的员工</p><pre><code>select * from emp where sal not between 1500 and 2500;
</code></pre><p><img src="`+E+`" alt="" loading="lazy"> --not in</p><pre><code>select * from emp where job not in(&#39;CLERK&#39;,&#39;SALESMAN&#39;,&#39;MANAGER&#39;);
</code></pre><figure><img src="`+L+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--not like --在员工表现中找出名字首字母不为S的员工信息</p><pre><code>select * from emp where ename not like &#39;S%&#39;;
</code></pre><figure><img src="`+M+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--is not null --找出员表中奖金不为空的员工信息</p><pre><code>select * from emp where comm is not null;
</code></pre><figure><img src="`+N+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--and跟or执行顺序 and 先执行 or 后执行 --找出员工表中岗位为CLERK或者SALESMAN并且工资大于1500的员工</p><pre><code>select * from emp 
where (job = &#39;CLERK&#39; or job = &#39;SALESMAN&#39;) and sal &gt; 1500;

select * from emp 
where job in(&#39;CLERK&#39;,&#39;SALESMAN&#39;) and sal &gt; 1500;
</code></pre><figure><img src="`+j+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--优先级顺序不用强行背，需要先执行的语句用括号 --括起来就行咯。。括号是万能的。。 --1.查询工资超过2000并且职位是MANAGER, --或者职位是SALESMAN的员工姓名、职位、工资</p><pre><code>select ename,job,sal from emp
where (sal &gt; 2000 and job = &#39;MANAGER&#39;) or job = &#39;SALESMAN&#39;;
</code></pre><figure><img src="`+R+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询工资超过2000 --并且职位是 MANAGER或SALESMAN的员工姓名、职位、工资。</p><pre><code>select ename,job,sal from emp
where sal &gt; 2000 and (job = &#39;MANAGER&#39; or job = &#39;SALESMAN&#39;);
</code></pre><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询部门在10或者20， --并且工资在3000到5000之间的员工姓名、部门、工资。</p><pre><code>select ename,deptno,sal from emp
where deptno in(10,20) and sal between 3000 and 5000; 
</code></pre><figure><img src="`+C+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.查询入职日期在81年， --并且职位不是SALES开头的员工姓名、入职日期、职位。</p><pre><code>select ename,hiredate,job from emp
where hiredate
between &#39;01-1月-81&#39; and &#39;31-12月-81&#39; and job not like &#39;SALES%&#39;;
</code></pre><figure><img src="`+K+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--5.查询职位为SALESMAN或MANAGER， --部门编号为10或者20，姓名包含A的员工姓名、职位、部门编号。</p><pre><code>select ename,job,deptno from emp
where job in(&#39;SALESMAN&#39;,&#39;MANAGER&#39;) and deptno in(10,20) 
and ename like &#39;%A%&#39;;
</code></pre><figure><img src="`+G+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--对数据做排序 --order by --语法：order by 列名 排序规则(asc 升序（默认） desc 降序) --order by 放到整个语句的最后面 --找出员工表中全部员工的工资，并且 按照升序排序</p><pre><code>select ename,sal from emp order by sal asc;
select ename,sal from emp order by sal;--默认是升序的
</code></pre><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--降序</p><pre><code>select ename,sal from emp order by sal desc;
</code></pre><figure><img src="`+D+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--根据字符类型的列(根据字典序来排序a-z，如果字符串第一位一样的话， --会根据第二位来进行排序)；</p><pre><code>select * from emp order by ename desc;
</code></pre><figure><img src="`+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--按照日期排</p><pre><code>select * from emp order by hiredate;
</code></pre><figure><img src="`+T+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--按照多列排序 --先会对第一列先排序，然后第二列在第一列的重复的段落中再排序</p><pre><code>select * from emp order by ename,job;
</code></pre><figure><img src="`+V+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from emp order by sal,deptno;
</code></pre><figure><img src="`+W+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--order by 子句后列名可以用数字来代替 -- 数据表示 的是select语句中列的位置</p><pre><code>select sal,hiredate from emp order by 2;
</code></pre><figure><img src="`+X+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•1.查询部门在20或30的员工姓名，部门编号，并按照工资升序排序。</p><pre><code>select ename,deptno from emp 
where deptno in(20,30) order by sal;
</code></pre><figure><img src="`+Y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•2.查询工资在2000-3000之间，部门不在10号的员工姓名，部门编号，工资，并按照部门升序，工资降序排序。</p><pre><code>select ename,deptno,sal from emp
where sal between 2000 and 3000 and deptno not in(10) order by deptno,sal 
desc;
</code></pre><figure><img src="`+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•3.查询入职日期在82年至83年之间，职位以SALES或者MAN开头的员工姓名，入职日期，职位，并按照入职日期降序排序。</p><pre><code>select ename,hiredate,job from emp
where hiredate between &#39;01-1月-82&#39; and &#39;31-12月-83&#39; and job 
in(&#39;SALES%&#39;,&#39;MAN%&#39;) order by hiredate desc;
</code></pre><figure><img src="`+F+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•1.查询入职时间在1982-7-9之后，并且不从事SALESMAN工作的员工姓名、入职时间、职位。</p><pre><code>select ename,hiredate,job from emp
where hiredate &gt; &#39;09-7月-82&#39; and job not in(&#39;SALESMAN&#39;);
</code></pre><figure><img src="`+H+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•2.查询员工姓名的第三个字母是a的员工姓名。</p><pre><code>select ename from emp
where ename like &#39;__A%&#39;;
</code></pre><figure><img src="`+I+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•3.查询除了10、20号部门以外的员工姓名、部门编号。</p><pre><code>select ename,empno from emp
where deptno not in(10,20);
</code></pre><figure><img src="`+J+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•4.查询部门号为30号员工的信息，先按工资降序排序，再按姓名升序排序。</p><pre><code>select * from emp
where deptno = 30 order by sal desc,ename asc;
</code></pre><figure><img src="`+P+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•5.查询没有上级的员工(经理号为空)的员工姓名。</p><pre><code>select ename from emp
where mgr is null;
</code></pre><figure><img src="`+Q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--•6.查询工资大于等于4500并且部门为10或者20的员工的姓名\\工资、部门编号。</p><pre><code>select ename,sal,deptno from emp
where sal &gt;= 4500 and deptno in(10,20);
</code></pre><figure><img src="`+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle-限制数据与对数据排序</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',135);function ee(oe,ne){return o(),n("div",null,[a(" more "),$])}const re=e(Z,[["render",ee],["__file","oracle7.html.vue"]]);export{re as default};

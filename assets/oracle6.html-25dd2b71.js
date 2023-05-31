import{_ as e,X as a,Y as o,a1 as n,a0 as p}from"./framework-68dd73a2.js";const t="/blog/assets/Oracle_6_1.png",i="/blog/assets/Oracle_6_2.png",s="/blog/assets/Oracle_6_3.png",r="/blog/assets/Oracle_6_4.png",c="/blog/assets/Oracle_6_5.png",l="/blog/assets/Oracle_6_6.png",g="/blog/assets/Oracle_6_7.png",m="/blog/assets/Oracle_6_8.png",d="/blog/assets/Oracle_6_9.png",f="/blog/assets/Oracle_6_10.png",_="/blog/assets/Oracle_6_11.png",u="/blog/assets/Oracle_6_12.png",b="/blog/assets/Oracle_6_13.png",x="/blog/assets/Oracle_6_14.png",h="/blog/assets/Oracle_6_15.png",y="/blog/assets/Oracle_6_16.png",O="/blog/assets/Oracle_6_17.png",z={},q=p('<h1 id="oracle-简单的查询语句" tabindex="-1"><a class="header-anchor" href="#oracle-简单的查询语句" aria-hidden="true">#</a> Oracle-简单的查询语句</h1><p>在启动oracl之前确定这两服务已经打开</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>sys/xxx as sysdba
oracle在安装的时候默认把scott账号锁住了，所以需要解锁
conn 用户名/密码
</code></pre><p>解锁：登录管理员sys账号</p><pre><code>  alter user scott account unlock;
</code></pre><p>如果忘记了scott的密码 修改密码：登录管理员sys账号</p><pre><code>   alter user scott identified by 新密码;

dept:部门表
     deptno部门编号 
     dname 部门名字
     loc部门的地点
emp员工表    
     empno 员工编号
     ename 员工名字
     job 岗位
     mgr 上级经理的员工编号
     hiredate 员工入职日期
     sal 工资
     comm 奖金
     deptno 员工所在的部门编号
salgrade 工资等级表；
     grade 工资等级表；
     losal 对应等级的最低工资
     hisal 对应等级的最高工资
</code></pre><p>--------------------------第二章 简单的查询语句--------------</p><p>------查询语句 (DQL) 作用：投影数据表的列 ------查询语句的关键字 SELECT -----找出emp表中的全部数据 ----- * 是一个通配符，表示全部了 ----- 想运行某个sql语句，可以选中该语句，点击运行（F8）</p><pre><code>select * from emp;
</code></pre><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>----关键字；以后可能会自定义一些数据库的对象， ------这些对象的名字不能使用关键字 --子句 关键字后面带着的一个句子叫做子句 --语句 一个可以执行的句子叫做语句</p><p>--sql语句不区分大小写 --语句可以分行，但是分行的时候不能把单词隔开</p><p>--选择全部列</p><pre><code>select * from emp;
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--选择全部列 --选择多个列的时候多个列用,来隔开</p><pre><code>select empno,ename,job,mgr,hiredate,sal,comm,deptno from emp;
</code></pre><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--选择指定列 --查出emp表中的员工 编号跟员工 姓名</p><pre><code>select empno,ename from emp;
</code></pre><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.使用两种方式查询所有员工(EMP)信息</p><pre><code>select * from emp;
select empno,ename,job,mgr,hiredate,sal,comm,deptno from emp;
</code></pre><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询(EMP)员工编号、员工姓名、员工职位、员工月薪、工作部门编号。</p><pre><code>SELECT empno,ename,job,sal,deptno 
from emp;
</code></pre><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--算术运算符 --在查询语句中，可以在列中带上运算符 --emp表中全部员工都加了500块工资，查出加了工资之后的每个员工的工资</p><pre><code>select empno,ename,sal+50 from emp;
</code></pre><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.员工转正后，月薪上调20%，请查询出所有员工转正后的月薪。</p><pre><code> select empno,ename,sal*1.2 from emp;
</code></pre><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.员工试用期6个月，转正后月薪上调20%， --请查询出所有员工工作第一年的年薪所得 --（不考虑奖金部分,年薪的试用期6个月的月薪+转正后6个月的月薪)</p><pre><code>select empno,ename,sal*6+sal*1.2*6 年薪 from emp;
select empno,ename,sal*6+sal*1.2*6 as 年薪 from emp;
select empno,ename,sal*6+sal*1.2*6 as &quot;年 薪&quot; from emp;
</code></pre><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>---给列取别名的两种方式 --1.列名 &quot;别名&quot; --2.列名 as &quot;别名&quot; --- 三种情况一定要加列别名两侧需要添加双引号 --1.别名中有空格 --2.别名中的字母需要区分大小写 --3.别名中有特殊 字符</p><p>---空值 null --空值不带表0或者空格，它表示什么都没有 --查出员工的年薪，要算上comm奖金 --任何包含空值算术表达式运算后的结果都为空值NULL。 --规避null带来的问题，引入nvl(parms1,parms2) --nvl(param1,param2)作用：如果参数一不为空，返回 参数一，否则返回参数二</p><pre><code>select empno,ename,sal*6+sal*1.2*6+nvl(comm,0) 年薪 from emp;
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.员工试用期6个月，转正后月薪上调20%， --请查询出所有员工工作第一年的所有收入（需考虑奖金部分)， --要求显示列标题为员工姓名，工资收入，奖金收入，总收入。</p><pre><code>select ename,
sal*6+sal*1.2*6 as 工资,
nvl(comm,0) as 奖金,
sal*6+sal*1.2*6+nvl(comm,0) 年薪
from emp;
</code></pre><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--连接操作符 用||来表示 连接操作符 --连接列与列，列与字符 --这里的字符称为原义字符串 用单引号括起来 --以后oracle的学习中除咯列别名之外，其它用引号的地方都用单引号 --empno的对应的名字为ename 在同一个列中展示出来 select empno || &#39;对应的名字为&#39; || ename as 员工的信息 from emp; <img src="'+b+`" alt="" loading="lazy"></p><p>--消除重复行 distinct --找出有员工的部门是哪几个</p><pre><code>select distinct deptno from emp;
</code></pre><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.员工试用期6个月，转正后月薪上调20%， --请查询出所有员工工作第一年的所有收入（需考虑奖金部分)， --要求显示格式为:XXX的第一年总收入为XXX。</p><pre><code>select ename || &#39;第一年总收入为&#39; ||
(sal*6+sal*1.2*6+nvl(comm,0)) as 年薪 
from emp;
</code></pre><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询员工表中一共有哪几种岗位类型。</p><pre><code>select job from emp;
</code></pre><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select distinct job from emp;
</code></pre><figure><img src="`+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',61);function v(E,X){return a(),o("div",null,[n(" more "),q])}const L=e(z,[["render",v],["__file","oracle6.html.vue"]]);export{L as default};

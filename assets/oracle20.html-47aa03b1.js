import{_ as e,X as i,Y as n,a1 as a,a0 as d}from"./framework-68dd73a2.js";const l={},s=d(`<h1 id="oracle初级测试题十一-19-19-数据操作与事务控制" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题十一-19-19-数据操作与事务控制" aria-hidden="true">#</a> Oracle初级测试题十一(19-19)--数据操作与事务控制</h1><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><ol><li>向部门表新增一个部门，部门编号为50，部门名称为HR，工作地点为SY。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into dept(deptno,dname,loc)
       values(50,&#39;HR&#39;,&#39;SY&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>向部门表新增一个部门，部门编号为60，部门名称为MARKET。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into dept(deptno,dname)
       values(60,&#39;MARKET&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2</h2><ol><li>向员工表中新增一个员工，员工编号为8888，姓名为BOB，岗位为CLERK，经理为号7788，入职日期为1985-03-03，薪资3000，奖金和部门为空。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into emp(empno,ename,job,mgr,hiredate,sal,comm,deptno)
            values(8888,&#39;BOB&#39;,&#39;CLERK&#39;,7788
            ,to_date(&#39;1985-03-03&#39;,&#39;yyyy/mm/dd&#39;),3000,null,null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习3" tabindex="-1"><a class="header-anchor" href="#练习3" aria-hidden="true">#</a> 练习3</h2><ol><li>使用CREATE TABLE emp_back as SELECT * FROM EMP WHERE 1=0，创建emp_back表,拷贝下来即可。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table emp_back
as select * from emp where 1 = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>把emp表中入职日期大于1982年1月1日之前的员工信息复制到emp_back表中。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into emp_back
            select * 
            from emp
            where hiredate &gt; &#39;01-1月-82&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习4" tabindex="-1"><a class="header-anchor" href="#练习4" aria-hidden="true">#</a> 练习4</h2><ol><li>修改部门20的员工信息，把82年之后入职的员工入职日期向后调整10天</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp_back;

update emp_back
set hiredate = hiredate + 10
where deptno in 20
and hiredate &gt; &#39;01-1月-82&#39;;

select * from emp_back;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_6.png" alt="" loading="lazy"><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_7.png" alt="" loading="lazy"></p><ol start="2"><li>修改奖金为null的员工，奖金设置为0</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp_back;

update emp_back
set comm = 0
where comm is null;

select * from emp_back;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>修改工作地点在NEW YORK或CHICAGO的员工工资，工资增加500</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp_back;

update emp_back
set sal = sal + 500
where (select loc
              from dept
              where dept.deptno = emp_back.deptno)
              in (&#39;NEW YORK&#39;,&#39;CHICAGO&#39;); 
              
select * from emp_back;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习5" tabindex="-1"><a class="header-anchor" href="#练习5" aria-hidden="true">#</a> 练习5</h2><ol><li>重复做一下刚才的案例。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--例1.在emp_back表中增加一个列dname, 来存储部门名称.
alter table emp_back
add(dname varchar2(14));
--例2.使用相关子查询更新dname列为正确的部门名称.
update emp_back e
set dname = 
           (select dname
           from dept d
           where deptno = e.deptno);

select * from emp_back;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习6" tabindex="-1"><a class="header-anchor" href="#练习6" aria-hidden="true">#</a> 练习6</h2><ol><li>删除经理编号为7566的员工记录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp_back;

delete from emp_back
where mgr in 7566;

select * from emp_back;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>删除工作在NEW YORK的员工记录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp_back;

delete from emp_back 
where (select loc 
              from dept 
              where dept.deptno=emp_back.deptno)
              in &#39;NEW YORK&#39;;

select * from emp_back;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>删除工资大于所在部门平均工资的员工记录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from emp_back;

delete from emp_back eb
where sal &gt; (select avg(sal)
                    from emp_back
                    where eb.deptno = emp_back.deptno);

select * from emp_back;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习7" tabindex="-1"><a class="header-anchor" href="#练习7" aria-hidden="true">#</a> 练习7</h2><p>分析如下语句序列，哪些语句会结束事务？</p><pre><code>INSERT…

UPDATE..

INSERT

ROLLBACK; --结束事务

DELETE..

DELETE..

SELECT..

COMMIT.. --结束事务

INSERT..

INSERT..

DELETE..

GRANT.. --结束事务

INSERT..

SELECT; 
</code></pre><h2 id="练习8" tabindex="-1"><a class="header-anchor" href="#练习8" aria-hidden="true">#</a> 练习8</h2><ol><li>test表为空表，分析如下语句操作后，最后test表的状态。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    INSERT INTO test(id,name) values(1, &#39;a&#39;)；
    INSERT INTO test(id,name) values(2, &#39;b&#39;)；
    SAVEPOINT s1;
    INSERT INTO test(id,name) values(3, &#39;c&#39;)；
    INSERT INTO test(id,name) values(4, &#39;d&#39;)；
    DELETE FROM test WHERE id in (1,3);
    ROLLBACK TO s1;
    DELETE FROM test WHERE id in (2,4);
    COMMIT;--提交就不能回滚咯 表中只有 values(1, &#39;a&#39;)  
    ROLLBACK;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="练习9" tabindex="-1"><a class="header-anchor" href="#练习9" aria-hidden="true">#</a> 练习9</h2><p>分析如下两个会话，执行完每一步时的数据库状态。</p><pre><code>会话A

1.UPDATE EMP SET sal = sal+500 WHERE deptno= 10;
---- 1 


3.SELECT sal FROM EMP WHERE deptno = 10;
----- 2 


6.COMMIT:
----3
8.SELECT sal FROM EMP WHERE deptno = 10;
---5


会话B


2.SELECT sal FROM EMP WHERE deptno = 10;
---4

4.UPDATE EMP SET sal = sal+500 WHERE deptno = 20;
---6
5.UPDATE EMP SET sal = sal+1000 WHERE deptno = 10;
--7
7.COMMIT;
--8
</code></pre><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><p>1.使用如下语句，创建学生表student和班级表class</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   create table tab_student_11 (        --学生表
               xh char(4),--学号
               xm varchar2(10),--姓名
               sex char(2),--性别
               birthday date,--出生日期
               sal number(7,2), --奖学金
               studentcid number(2) --学生班级号
    );
   create table tab_class_11 (   --班级表
                classid number(2), --班级编号
                cname varchar2(20),--班级名称
                ccount  number(3) --班级人数
    )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>基于上述学生表和班级表，完成如下问题</li></ol><p>（1）添加三个班级信息为：1，JAVA1班，null 2，JAVA2班，null 3，JAVA3班，null</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into tab_class_11
            values(1,&#39;JAVA1班&#39;,null);
insert into tab_class_11
            values(2,&#39;JAVA2班&#39;,null);
insert into tab_class_11
            values(3,&#39;JAVA3班&#39;,null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（2）添加学生信息如下：‘A001’,‘张三’,‘男’,‘01-5月-05’,100,1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into tab_student_11
            values(&#39;A001&#39;,&#39;张三&#39;,&#39;男&#39;,&#39;01-5月-05&#39;,100,1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（3）添加学生信息如下：&#39;A002&#39;,&#39;MIKE&#39;,&#39;男&#39;,&#39;1905-05-06&#39;,10</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into tab_student_11
            values(&#39;A002&#39;,&#39;MIKE&#39;,&#39;男&#39;,&#39;06-5月-1905&#39;,10,null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（4）插入部分学生信息： &#39;A003&#39;,&#39;JOHN&#39;,&#39;女’</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into tab_student_11(xh,xm,sex)
            values(&#39;A003&#39;,&#39;JOHN&#39;,&#39;女&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（5）将A001学生性别修改为&#39;女‘</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update tab_student_11 set sex = &#39;女&#39;
       where xh = &#39;A001&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（6）将A001学生信息修改如下：性别为男，生日设置为1980-04-01</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update tab_student_11 set sex = &#39;男&#39;,
       birthday = &#39;01-4月-1980&#39;
       where xh in &#39;A001&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（7）将生日为空的学生班级修改为Java3班</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update tab_student_11 set studentcid = 3
                      where birthday is null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（8）请使用一条SQL语句，使用子查询，更新班级表中每个班级的人数字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update tab_class_11 set ccount =
                    (select count(*) from tab_student_11
                            where tab_class_11.classid = tab_student_11.studentcid);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3.使用如下语句，建立以下表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table copy_emp (
    empno number(4),
    ename varchar2(20),
    hiredate date default sysdate ,
    deptno number(2),
    sal number(8,2)
);

select * from copy_emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在第三题表的基础上，完成下列问题</li></ol><p>(1)在表copy_emp中插入数据，要求sal字段插入空值，部门号50，参加工作时间为2000年1月1日，其他字段随意</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into copy_emp
       values(520,&#39;heheda&#39;,&#39;01-1月-00&#39;,50,null);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(2)在表copy_emp中插入数据，要求把emp表中部门号为10号部门的员工信息插入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into copy_emp
       select empno,ename,hiredate,deptno,sal from emp where deptno in 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(3)修改copy_emp表中数据，要求10号部门所有员工涨20%的工资</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update copy_emp set sal = sal + sal * 0.2
       where deptno in 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_24.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(4)修改copy_emp表中sal为空的记录，工资修改为平均工资</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update copy_emp set sal = (select avg(sal) from copy_emp)
       where sal is null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(5)把工资为平均工资的员工，工资修改为空</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update copy_emp set sal = null
       where sal = (select avg(sal) from copy_emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(6)另外打开窗口2查看以上修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from copy_emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(7)执行commit，窗口2中再次查看以上信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>commit;
select * from copy_emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(8)删除工资为空的员工信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delete from copy_emp
       where sal is null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_27.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>(9)执行rollback</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rollback;
select * from copy_emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_20_28.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,112);function t(r,c){return i(),n("div",null,[a(" more "),s])}const u=e(l,[["render",t],["__file","oracle20.html.vue"]]);export{u as default};

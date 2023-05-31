import{_ as e,X as i,Y as n,a1 as s,a0 as a}from"./framework-68dd73a2.js";const l="/blog/assets/Oracle_24_1.png",d="/blog/assets/Oracle_24_2.png",t="/blog/assets/Oracle_24_3.png",r="/blog/assets/Oracle_24_4.png",c={},o=a(`<h1 id="oracle初级测试题十六-17-17-序列索引同义词" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题十六-17-17-序列索引同义词" aria-hidden="true">#</a> Oracle初级测试题十六(17-17)--序列索引同义词</h1><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><ol><li>创建一个序列，该序列起始值从1开始，无最大值，增量是1，不循环。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create sequence test_seq1
       start with 1 -- 始值从1开始 可省略
       nomaxvalue -- 无最大值 
       increment by 1 -- 增量是1 可省略
       nocycle; -- 不循环
drop sequence test_seq1;   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查询序列的当前值及下一个值</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select test_seq1.nextval from dual;-- 查询序列的下一个值
select test_seq1.currval from dual; -- 查询序列的当前值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用第1题所建的序列，向部门表中插入两条记录，部门编号使用序列值，部门名称分别为：Education、Market，城市分别为：DALLAS、WASHTON</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table copy_dept
as select * from dept;

select * from copy_dept;

insert into copy_dept
values(test_seq1.nextval,&#39;Education&#39;,&#39;DALLAS&#39;);

insert into copy_dept
values(test_seq1.nextval,&#39;Market&#39;,&#39;WASHTON&#39;);

select * from copy_dept;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2</h2><ol><li>使用子查询的方式，创建test表。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table test
as select * from emp;

select * from test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>快速复制test表中的数据，复制到100w条左右</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into test select * from test;
-- 执行咯 13将 147456条数据 大概要执行16次左右
select * from test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>更新test表中的empno字段为rownum</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table test modify empno number(10);
--先要修改精度，否则报错 值大于为此列指定的允许精度
update test set empno = rownum;

select * from test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>查询test中empno为800000的记录值，记录查询执行时间。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from test where empno in 800000;-- 0.128s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>在test表的empno字段上创建索引</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create index idx_test_empno 
on test(empno);

select * from test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>重新执行第4题，对比查询时间</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from test where empno in 800000;-- 0.039s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="练习3" tabindex="-1"><a class="header-anchor" href="#练习3" aria-hidden="true">#</a> 练习3</h2><ol><li>有如下关系模式，</li></ol><p>student(sno,sname,gender,birthday,email);--学生</p><p>course(cno,cname,type,credit);--课程</p><p>sc（sno,cno,grade);--选课</p><p>试分析哪些列上适合创建索引？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create index idx_student_sno on student(sno);
create index idx_course_cno on course(cno);
create index idx_sc_sno on sc(sno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>创建序列，起始位1，自增为1，最小值为1，最大值为9999</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create sequence test_seq16_1
start with 1 -- 起始位1，默认为1 可不写
increment by 1 -- 自增为1，默认为1，可不写
minvalue 1 -- 最小值为1 
maxvalue 9999; -- 最大值为9999
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建序列，起始值为50，每次增加5；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create sequence test_seq16_2
start with 50 -- 起始值为50
increment by 5; --自增为5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在表copy_dept中插入记录，其中部门号码采用上一步中创建的序列生成；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table copy_dept2
as select * from dept
where 1 = 0;

insert into copy_dept2(deptno,dname)
            values(test_seq16_2.nextval,&#39;序列测试&#39;);

select * from copy_dept2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>请为工资创建索引，比较&lt;10000,&gt;1000,与round（sal）&gt;10000,哪个索引有效，哪个索引无效；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create index idx_emp_sal on emp(sal); -- 0.018s
select * from emp where sal &lt; 10000;-- 0.083s 有索引，因为顺序排序
select * from emp where sal &gt; 1000;-- 0.040s 有索引，因为顺序排序
select * from emp where round(sal) &gt; 10000;-- 0.041s 无索引，有函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>创建表，采用“create table copy_emp_index as select * from emp”，生成500万条数据，把其中的“员工号”字段修改为唯一；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table copy_emp_index as select * from emp;

insert into copy_emp_index select * from copy_emp_index;
-- 执行23次
alter table copy_emp_index modify empno number(20);
--先要修改精度，否则报错 值大于为此列指定的允许精度
update copy_emp_index set empno = rownum;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>查询表copy_emp_index表中员工号为200001的员工姓名，工资，记录执行时间；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ename,sal from copy_emp_index where empno in 200001;
--3.488s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>在copy_emp_index表的empno字段上创建索引，再次执行第6题语句，记录执行时间并做对比；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create index idx_copy_emp_index_empno
on copy_emp_index(empno);

select ename,sal from copy_emp_index where empno in 200001;
--0.313s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,51);function v(m,u){return i(),n("div",null,[s(" more "),o])}const b=e(c,[["render",v],["__file","oracle24.html.vue"]]);export{b as default};

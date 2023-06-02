import{_ as l,X as d,Y as s,a1 as t,Z as e,$ as a,a2 as n,a0 as r,F as c}from"./framework-68dd73a2.js";const o="/blog/assets/Oracle_21_1.png",u="/blog/assets/Oracle_21_2.png",v="/blog/assets/Oracle_21_3.png",m="/blog/assets/Oracle_21_4.png",b="/blog/assets/Oracle_21_5.png",g="/blog/assets/Oracle_21_6.png",p={},h=r(`<h1 id="oracle初级测试题十三-12-12-创建和维护表" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题十三-12-12-创建和维护表" aria-hidden="true">#</a> Oracle初级测试题十三(12-12)--创建和维护表</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><ol><li>学校想做一个选课系统，其中涉及到课程表，学生表，请分别创建这两个表，自己思考表中应有的列及数据类型。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--课程表：
create table tab_course_13(
       cid number(4),--课程编号
       cname varchar(50),--课程名称
       ctypeId number(4),--课程类型
       score number(1),--学分
       chour number(2) --课时
);
--学生表
create table tab_student_13(
       sid char(10),--学生编号2019003004
       sname varchar2(20),--学生姓名
       sex char(4) default &#39;男&#39;,--性别
       telephone varchar2(15),--电话号码
       collegeId number(4),--学院
       majorId number(4),--专业
       classId number(4),--班级
       inDate date --入学日期
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2</h2><ol><li>通过子查询的方式创建一个表dept10,该表保存10号部门的员工数据。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tab_dept10
as select * from emp
where deptno in 10;

select * from tab_dept10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习3" tabindex="-1"><a class="header-anchor" href="#练习3" aria-hidden="true">#</a> 练习3</h2><ol><li>在员工表中添加一个性别列，列名为gender，类型为char(2)，默认值为“男”</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from copy_emp;

alter table copy_emp add (gender char(2));
alter table copy_emp modify(gender default &#39;男&#39;);

select * from copy_emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>修改员工表中性别列的数据类型为char(4)</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table copy_emp modify (gender char(4));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>修改员工表中性别列的默认值为“女”</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table copy_emp modify (gender default &#39;女&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>删除员工表中的性别列</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from copy_emp;

alter table copy_emp drop column gender;

select * from copy_emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>请分析按照以下要求都需要建立什么类型的字段?</li></ol><p>(1)最大2000个字节定长字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>char(2000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2)如果输入‘张三’ 后添空格6个</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>char(10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)性别输入&#39;男&#39;或&#39;女’</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>char(2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)最大4000个字节变长字符串</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>varchar2(4000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(5)如果在数据库中输入&#39;张三&#39;则显示数据&#39;张三’</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvarchar2(2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(6)表示数字范围为- 10的125次方到10的126次方, 可以表示小数 也可以表示整数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(7)最大表示4位整数 -9999 到 9999</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>number(4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(8)表示5位有效数字 2位小数的 一个小数 -999.99 到 999.99</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>number(5,2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(9)包含年月日和时分秒</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(10)包含年月日和时分秒毫秒</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>timestamp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(11)二进制大对象图像/声音</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>blob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建表date_test,包含列d，类型为date型。试向date_test表中插入两条记录，一条当前系统日期记录，一条记录为“1998-08-18”。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tab_date_test(
       d date
);

select * from tab_date_test;

insert into tab_date_test
values(to_date(&#39;1998-08-18&#39;,&#39;yyyy/mm/dd&#39;));

select * from tab_date_test;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>创建与dept表相同表结构的表dtest，将dept表中部门编号在40之前的信息插入该表。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tab_dtest
as select * from dept
where deptno &lt; 40;

select * from tab_dtest;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>创建与emp表结构相同的表empl，并将其部门编号为前30号的员工信息复制到empl表。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tab_empl
as select * from emp
where deptno &lt;= 30;

select * from tab_empl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>试为学生表student增加一列学生性别gender 默认值 “女”。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table tab_student_13 add (gender char(2));
alter table tab_student_13 modify(gender default &#39;女&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>试修改学生姓名列数据类型为定长字符型10位。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table tab_student_13 modify (sname char(10));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="拓展知识" tabindex="-1"><a class="header-anchor" href="#拓展知识" aria-hidden="true">#</a> 拓展知识：</h4>`,58),x={href:"https://www.cnblogs.com/dt520/p/10141797.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.cnblogs.com/hijushen/p/4223557.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/msh2016/article/details/86805428",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.cnblogs.com/lukelook/p/11068258.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://blog.csdn.net/ShadowerWArden/article/details/80658127",target:"_blank",rel:"noopener noreferrer"},w=e("hr",null,null,-1),k=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),a(" 分割线")],-1),B=e("hr",null,null,-1),I=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function L(A,C){const i=c("ExternalLinkIcon");return d(),s("div",null,[t(" more "),h,e("p",null,[e("a",x,[a("oracle VARCHAR2和NVARCHAR2的区别"),n(i)])]),e("p",null,[e("a",_,[a("Oracle 日期类型timestamp(时间戳)和date类型使用"),n(i)])]),e("p",null,[e("a",f,[a("Oracle入门精读79-Oracle时间操作详解（TIMESTAMP 类型）"),n(i)])]),e("p",null,[e("a",y,[a("ORACLE （BLOB、CLOB、NCLOB、BFILE）"),n(i)])]),e("p",null,[e("a",O,[a("在oracle数据库中存储BLOB类型的数据"),n(i)])]),w,k,B,I])}const V=l(p,[["render",L],["__file","oracle21.html.vue"]]);export{V as default};

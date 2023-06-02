import{_ as e,X as n,Y as i,a1 as a,a0 as s}from"./framework-68dd73a2.js";const l="/blog/assets/Oracle_22_1.png",d={},r=s(`<h1 id="oracle初级测试题十四-8-8-约束" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题十四-8-8-约束" aria-hidden="true">#</a> Oracle初级测试题十四(8-8)--约束</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><ol><li>学校有一个选课系统，其中包括如下关系模式：</li></ol><p>系(系编号： 主键， 系名称: 唯一键， 系主任： 非空约束， 系所在校去：取值范围只能在南湖校区和浑南校区)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tabCollege(
       cgNo number(4) 
       constraint tabCollege_cgNo_pk primary key,
       --  系编号： 主键，
       cgName varchar2(20) 
       constraint tabCollege_cgName_unique unique,
       --   系名称:  唯一键，
       cgDirector varchar2(20) 
       constraint tabCollege_cgDirector_noNull not null,
       --   系主任： 非空约束，
       cgCampus varchar2(40) 
       constraint tabCollege_cgCampus_ck check(cgCampus in (&#39;南湖校区&#39;,&#39;浑南校区&#39;))
       --   系所在校区：取值范围只能在南湖校区和浑南校区)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>班级(班级编号： 主键， 班级名称： 唯一键， 所属系： 外键)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tabClass(
       caNo number(4) 
       constraint tabClass_caNo_pk primary key,
       -- 班级编号： 主键，
       caName varchar2(40) 
       constraint tabClass_caName_unique unique,
       --     班级名称： 唯一键，
       cgName varchar2(40) 
       constraint tabClass_cgName_fk references tabCollege(cgName)
        --     所属系：  外键
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建学生表，包含如下属性:</li></ol><p>学号 定长字符型 10位 主键</p><p>姓名 变长字符型 20位 非空</p><p>性别 定长字符型 2位 取值范围只能为男或女</p><p>出生日期 日期型</p><p>所在班级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tabStudent14(
       stNo char(10) 
       constraint tabStudent14_stNo_pk primary key,
       -- 学号 定长字符型 10位 主键
       stName varchar2(20) 
       constraint tabStudent14_stName_notNull not null,
       -- 姓名 变长字符型 20位 非空
       stSex char(2) 
       constraint tabStudent14_stSex_ck check(stSex in (&#39;男&#39;,&#39;女&#39;)),
       -- 性别 定长字符型 2位 取值范围只能为男或女
       stBirthday date,-- 出生日期 日期型 
       caNo number(4) 
       constraint tabStudent14_caNo_fk reference tabClass(caNo)
       -- 所在班级 没有要求说明是外键，但自己的思路表之间关联应该为外键
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>简述5种约束的含义。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>not null	非空约束，指定某列的所有行数据不能包含空值
unique	唯一性约束，指定列或者列的组合的所有行数据必须唯一
primary key	主键约束，表的每行的唯一性标识，指定列或者列的组合的所有行数据必须唯一
foreign key	外键约束，在列及引用列上建立的一种强制依赖关系
check	检查性约束，在列上指定一个必须满足的条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建学生关系sc，包括属性名：</li></ol><p>选课流水号 数值型 主键；</p><p>学生编号 非空 外键</p><p>课程编号 非空 外键；</p><p>成绩 0-100之间；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> --  为题2创建的课程表，用以设置外键foreign key
    create table tabCourse(
    cid number(4) constraint tabCourse_cis_pk primary key,    --课程编号
    cname varchar(50) constraint tabCourse_cname_unique unique--课程姓名
    --ctypeID number(4), --课程类型
    --score number(1),   --学分
    --chour number(2)   --课时
    );
    
    
create table tabSc (
       scId number(10) 
       constraint tabSc_scId_pk primary key,
       -- 选课流水号 数值型 主键；
       stNo number(10)
       constraint tabSc_scNo_fk reference tabStudent14(stNo),
       -- 学生编号 非空 外键
       cid number(4)
       constraint tabSc_cid_fk reference tabCourse(cid),
       -- 课程编号 非空 外键；
       scGrade number(5,2) 
       constraint tabSc_scGrade_ck check(scGrade bewteen 0 and 100)
       -- 成绩     0-100之间；
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建copy_emp，要求格式同emp表完全一样，不包含数据。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tab_copy_emp_14
as select * from emp
where 1 = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>创建copy_dept，要求格式同dept表完全一样，不包含数据。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create table tab_copy_dept_14
as select * from dept
where 1 = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>设置copy_emp 表中外键deptno，参照copy_dept中deptno,语句能否成功,为什么？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table tab_copy_emp_14 add 
constraint tab_coy_emp_14_deptno_fk
           foreign key(deptno) references tab_copy_dept_14(deptno);
--  不能，因为copy_dept表中的deptno不是主键或唯一值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>追加copy_dept表中主键deptno</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alter table tab_copy_dept_14 add constraint 
tab_copy_dept_14_deptno_pk primary key (deptno);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle初级测试题十四(8-8)--约束</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,37);function t(c,v){return n(),i("div",null,[a(" more "),r])}const m=e(d,[["render",t],["__file","oracle22.html.vue"]]);export{m as default};

import{_ as s,X as a,Y as c,a1 as o,Z as t,$ as e,a2 as i,a0 as n,F as l}from"./framework-68dd73a2.js";const u="/blog/assets/Oracle_10_1.png",d="/blog/assets/Oracle_10_2.png",b="/blog/assets/Oracle_10_3.png",p="/blog/assets/Oracle_10_4.png",h={},v=n(`<h1 id="oracle-sql考试试题0-未完成" tabindex="-1"><a class="header-anchor" href="#oracle-sql考试试题0-未完成" aria-hidden="true">#</a> Oracle SQL考试试题0-未完成</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><strong>一</strong>**、执行以下创建<strong><strong>S</strong></strong>tudent****、Teacher、Course、<strong><strong>SC</strong></strong>表****语句，并初始化表格数据**</p><pre><code>create table student(  sno varchar2(10) primary key,  sname varchar2(20),  sage number(2),  ssex varchar2(5)  ); 

create table teacher(  tno varchar2(10) primary key,  tname varchar2(20)  );  

create table course(  cno varchar2(10),  cname varchar2(20),  tno varchar2(20),  constraint pk_course primary key (cno,tno)  );  

create table sc(  sno varchar2(10),  cno varchar2(10),  score number(4,2),  constraint pk_sc primary key (sno,cno)  ); 

 --/*******初始化学生表的数据******/ 

  insert into student values (&#39;s001&#39;,&#39;张三&#39;,23,&#39;男&#39;);  
  insert into student values (&#39;s002&#39;,&#39;李四&#39;,23,&#39;男&#39;); 
  insert into student values (&#39;s003&#39;,&#39;吴鹏&#39;,25,&#39;男&#39;);  
  insert into student values (&#39;s004&#39;,&#39;琴沁&#39;,20,&#39;女&#39;);  
  insert into student values (&#39;s005&#39;,&#39;王丽&#39;,20,&#39;女&#39;);  
  insert into student values (&#39;s006&#39;,&#39;李波&#39;,21,&#39;男&#39;);  
  insert into student values (&#39;s007&#39;,&#39;刘玉&#39;,21,&#39;男&#39;);  
  insert into student values (&#39;s008&#39;,&#39;萧蓉&#39;,21,&#39;女&#39;);  
  insert into student values (&#39;s009&#39;,&#39;陈萧晓&#39;,23,&#39;女&#39;);   insert into student values (&#39;s010&#39;,&#39;陈美&#39;,22,&#39;女&#39;);  
  commit; 

    --/******************初始化教师表***********************/

  insert into teacher values (&#39;t001&#39;, &#39;刘阳&#39;);  
  insert into teacher values (&#39;t002&#39;, &#39;谌燕&#39;);  
  insert into teacher values (&#39;t003&#39;, &#39;胡明星&#39;);  
  commit;

   --/***************初始化课程****************************/ 

    insert into course values (&#39;c001&#39;,&#39;J2SE&#39;,&#39;t002&#39;);  
   insert into course values (&#39;c002&#39;,&#39;[Java](https://www.2cto.com/kf/ware/Java/) Web&#39;,&#39;t002&#39;);  
   insert into course values (&#39;c003&#39;,&#39;SSH&#39;,&#39;t001&#39;);  
   insert into course values (&#39;c004&#39;,&#39;[Oracle](https:/   www.2cto.com/database/Oracle/)&#39;,&#39;t001&#39;);  
   insert into course values (&#39;c005&#39;,&#39;SQL SERVER 2005&#39;,&#39;t003&#39;;  
   insert into course values (&#39;c006&#39;,&#39;C#&#39;,&#39;t003&#39;);  
   insert into course values (&#39;c007&#39;,&#39;[JavaScript](https://   www.2cto.com/kf/qianduan/JS/)&#39;,&#39;t002&#39;);  
   insert into course values (&#39;c008&#39;,&#39;DIV+[CSS](https://   www.2cto.com/kf/qianduan/css/)&#39;,&#39;t001&#39;);  
   insert into course values (&#39;c009&#39;,&#39;[PHP](https://www.2cto.com/kf/web/php/)&#39;,&#39;t003&#39;);  
   insert into course values (&#39;c010&#39;,&#39;EJB3.0&#39;,&#39;t002&#39;);  commit; 

  --/***************初始化成绩表***********************/ 

  insert into sc values (&#39;s001&#39;,&#39;c001&#39;,78.9);  
  insert into sc values (&#39;s002&#39;,&#39;c001&#39;,80.9);  
  insert into sc values (&#39;s003&#39;,&#39;c001&#39;,81.9);  
  insert into sc values (&#39;s004&#39;,&#39;c001&#39;,60.9);  
  insert into sc values (&#39;s001&#39;,&#39;c002&#39;,82.9);  
  insert into sc values (&#39;s002&#39;,&#39;c002&#39;,72.9);  
  insert into sc values (&#39;s003&#39;,&#39;c002&#39;,81.9);  
  insert into sc values (&#39;s001&#39;,&#39;c003&#39;,&#39;59&#39;);  
  commit;
</code></pre><h3 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h3>`,5),m={href:"https://www.2cto.com/database/",target:"_blank",rel:"noopener noreferrer"},g=n(`<pre><code>select * from student;
</code></pre><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from teacher;
</code></pre><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from course;
</code></pre><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from sc;
</code></pre><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1、查询“c001”课程比“c002”课程成绩高的所有学生的学号；</p><p>2、查询平均成绩大于60 分的同学的学号和平均成绩；<br> 3、查询所有同学的学号、姓名、选课数、总成绩；<br> 4、查询姓“刘”的老师的个数；<br> 5、查询没学过“谌燕”老师课的同学的学号、姓名；<br> 6、查询学过“c001”并且也学过编号“c002”课程的同学的学号、姓名；<br> 7、查询学过“谌燕”老师所教的所有课的同学的学号、姓名；<br> 8、查询课程编号“c002”的成绩比课程编号“c001”课程低的所有同学的学号、姓名；<br> 9、查询所有课程成绩小于60 分的同学的学号、姓名；<br> 10、查询没有学全所有课的同学的学号、姓名；<br> 11、查询至少有一门课与学号为“s001”的同学所学相同的同学的学号和姓名； 12、查询至少学过学号为“s001”同学所有一门课的其他同学学号和姓名；<br> 13、把“SC”表中“谌燕”老师教的课的成绩都更改为此课程的平均成绩；<br> 14、查询和“s001”号的同学学习的课程完全相同的其他同学学号和姓名；<br> 15、删除学习“谌燕”老师课的SC 表记录；<br> 16、向SC 表中插入一些记录，这些记录要求符合以下条件：没有上过编号“c002”课程的同学学号、“c002”号课的平均成绩；<br> 17、查询各科成绩最高和最低的分：以如下形式显示：课程ID，最高分，最低分 18、按各科平均成绩从低到高和及格率的百分数从高到低顺序<br> 19、查询不同老师所教不同课程平均分从高到低显示<br> 20、统计列印各科成绩,各分数段人数:课程ID,课程名称,[100-85],[85-70],[70-60],[ &lt;60]<br> 21、查询各科成绩前三名的记录:(不考虑成绩并列情况)<br> 22、查询每门课程被选修的学生数<br> 23、查询出只选修了一门课程的全部学生的学号和姓名<br> 24、查询男生、女生人数<br> 25、查询姓“张”的学生名单<br> 26、查询同名同性学生名单，并统计同名人数<br> 27、1981 年出生的学生名单(注：Student 表中Sage 列的类型是number)<br> 28、查询每门课程的平均成绩，结果按平均成绩升序排列，平均成绩相同时，按课程号降序排列<br> 29、查询平均成绩大于85 的所有学生的学号、姓名和平均成绩<br> 30、查询课程名称为“数据库”，且分数低于60 的学生姓名和分数<br> 31、查询所有学生的选课情况；<br> 32、查询任何一门课程成绩在70 分以上的姓名、课程名称和分数；<br> 33、查询不及格的课程，并按课程号从大到小排列<br> 34、查询课程编号为c001 且课程成绩在80 分以上的学生的学号和姓名；<br> 35、求选了课程的学生人数<br> 36、查询选修“谌燕”老师所授课程的学生中，成绩最高的学生姓名及其成绩<br> 37、查询各个课程及相应的选修人数<br> 38、查询不同课程成绩相同的学生的学号、课程号、学生成绩<br> 39、查询每门功课成绩最好的前两名<br> 40、统计每门课程的学生选修人数（超过10 人的课程才统计）。要求输出课程号和选修人数，查询结果按人数降序排列，若人数相同，按课程号升序排列<br> 41、检索至少选修两门课程的学生学号<br> 42、查询全部学生都选修的课程的课程号和课程名<br> 43、查询没学过“谌燕”老师讲授的任一门课程的学生姓名<br> 44、查询两门以上不及格课程的同学的学号及其平均成绩<br> 45、检索“c004”课程分数小于60，按分数降序排列的同学学号<br> 46、删除“s002”同学的“c001”课程的成绩</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle SQL考试试题0-未完成</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',14);function _(f,w){const r=l("ExternalLinkIcon");return a(),c("div",null,[o(" more "),v,t("p",null,[e("注意：以下练习中的数据是根据初始化到"),t("a",m,[e("数据库"),i(r)]),e("中的数据来写的SQL 语句，请大家务必注意。")]),g])}const k=s(h,[["render",_],["__file","oracle10.html.vue"]]);export{k as default};

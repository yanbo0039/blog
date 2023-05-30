import{_ as t,X as s,Y as e,a1 as o,a0 as r}from"./framework-68dd73a2.js";const n={},g=r('<h1 id="oracle-sql考试试题一" tabindex="-1"><a class="header-anchor" href="#oracle-sql考试试题一" aria-hidden="true">#</a> Oracle SQL考试试题一</h1><p>第一部分：单选题 （本部分 10 道题，满分 20 分） 每题2分，共10题 1、 [ 单选题 ] A、持久性是指事务一旦提交，则其对数据库中数据的改变就是永久的 B、持久性指数据一旦修改，则以后不能再修改了 C、持久性是指，提交后，数据还可以还原 D、以上说法都不对 关于事务持久性特征描述正确的是: （ ） 2、 [ 单选题 ] A、INSERT B、SELECT C、UPDATE D、DELETE 对表数据的什么操作不对操作的数据添加锁 （ ） 3、 [ 单选题 ] A、可以限制对基表数据的访问，只允许用户通过视图看到表中的一部分数据 B、可以使复杂的查询变的简单 C、提供了数据的独立存储空间，用户并不知道数据来自于何处 D、提供了对相同数据的不同显示 关于视图的优点描述，下列错误的是： （ ） 4、 [ 单选题 ] A、INCREMENT BY B、START WITH C、CYCLE D、CACHE 设定序列值的起始值使用哪个语法： （ ） 5、 [ 单选题 ] 现有一个索引INX，删除该索引的正确语法为：（） A、DROP INDEX INX B、DROP SEQUENCE INX C、DROP TABLE INX D、DROP VIEW INX 6、 [ 单选题 ] 计算2000年1月1日到现在有多少月，多少周（四舍五入） （ ） A、select round(to_date(‘1-1月-2000’)) 月数, round(to_date(‘1-1月-2000’)) / 7) 周数 from dual B、select round(months_between(sysdate, ‘1-1月-2000’)) 月数, round((sysdate - ‘1-1月-2000’) / 7) 周 数 from dual C、select round(months_between(sysdate, to_date(&quot;1-1月-2000&quot;))) 月数, round((sysdate - to_date(&quot;1-1月-000&quot;)) / 7) 周数 from dual D、select round(months_between(sysdate, to_date(‘1-1月-2000’))) 月数, round((sysdate - to_date(‘1-1 月-2000’)) / 7) 周数 from dual 第二部分：填空题 （本部分 3 道题，满分 28 分） 每空2分，共14个空 第三部分：问答题 （本部分 3 道题，满分 12 分） 每题4分，共3题 7、 [ 单选题 ] A、出错 B、-6 C、6 D、0 下面语句的正确结果是: select to_date(&#39;10-1月-06&#39;)-to_date(&#39;4-1月-06&#39;)from dual; （ ） 8、 [ 单选题 ] A、select * from emp where ename like &#39;%A\\%B%&#39; escape &#39;&#39;; B、select * from emp where ename like &#39;%A@%B%&#39; escape &#39;@&#39;; C、select * from emp where ename like &#39;%A%B%&#39; escape &#39;%&#39;; D、select * from emp where ename like &#39;%A@%B%&#39; escape &#39;@&#39;; 下面哪个SQL语句可以查询出名字当中有’A%B’这样的员工 （ ） 9、 [ 单选题 ] A、ANSI SQL：1999的连接语法 B、右外连接 C、左外连接 D、交叉连接 select ename, job, dname from emp cross join dept;语句属于（ ） 10、 [ 单选题 ] A、INSERT INTO…SELECT不能插入一条数B、INSERT INTO…SELECT不能使用DUAL这个表 C、如果列是正确对应的，该语句正确执行 D、以上均不正确 有一条语句如下： INSERT INTO TEST SELECT 500 FROM DUAL: 以下说法正确的是： （ ） 1、 [ 填空题 ] 在Oracle数据库中，事务的4大特性（ACID）是：<em><strong><strong><strong><strong><strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong></strong></strong></strong></strong></em><em><strong>、 <em><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong><strong>、</strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></strong></em></strong></em>_ 2、 [ 填空题 ] 在Oracle中，select查询语句中，按照数据库执行顺序写出所有子句的执行顺序是：1）<em><strong><strong><strong><strong><strong><strong><strong>、2） <em><strong><strong><strong><em><strong><strong><strong><strong><strong><strong><strong><strong>、3）</strong></strong></strong></strong></strong></strong></strong></strong></em>、4）</strong></strong></strong></em></strong></strong></strong></strong></strong></strong>、5）</strong></em>____________、6）</p><hr><p>3、 [ 填空题 ] 在Oracle中对SQL语句进行分类（例如TCL称为事务控制语言），其中DQL称为__________________，DML称为 <strong><strong><strong><strong><strong><strong><strong><strong><strong>，DDL称为</strong></strong></strong></strong></strong></strong></strong></strong></strong>，DCL称为__________________。 1、 [ 问答题 ] 在Oracle数据库中，对表、列、视图等等都称为数据库对象，请说出数据库对象的命名规则： 第四部分：编程题 （本部分 2 道题，满分 40 分） 两道组合题，每题5问，每问4分 2、 [ 问答题 ] Oracle中char和varchar2数据类型有什么区别？ 3、 [ 问答题 ] 在Oracle数据库中，truncate和delete的异同点有哪些？ 1、 [ 组合题 ] 学生选课系统设计表结构如下： a.班级信息表：表名classinfo，主要用来保存班级的基本信息，字段信息描述如下： { classid:流水号 数值型 主键 classcode:班级编号, 数值型 唯一 非classname:班级名称,长度为40的变长字符串,唯一 非空 } b.学生信息表：表名stuinfo，主要用来保存学生的基本信息，字段信息描述如下： { sid:流水号 数值型 主键 scode:学号, 数值型 唯一 非空 sname:学生姓名,长度为20的变长字符串,非空; gender:性别,长度为2的定长字符串,值只能为&quot;男&quot;或&quot;女&quot; ; indate:入班日期,日期型 classid:所在班级,数值型,外键约束“班级信息表”主键 } c.课程信息表：表名subject，主要用来保存课程的基本信息，字段信息描述如下： { subid:流水号 数值型 主键 subcode:课程编号 字符 唯一 非空 subname:课程名称,长度为40的变长字符串,唯一 非空 } d.学生选课信息表：表名selectsub，主要用来保存学生所选课程的基本信息，字段信息表述如下： { selsubid：流水号 数值 主键 stuid： 学生编号 外键 subid：课程编号, 外键 grade：成绩 数值型 非空 } 请您根据以上张某的设计，完成以下SQL语句： 1） [ 问答题 ] 1.请写出“学生信息表”的建表语句，要求在建表的同时建立相应的约束。 2） [ 问答题 ] 查询全部学生的学号、学生姓名、班级名称、所选课程名称、成绩。 3） [ 问答题 ] 查询选课多于2门的学生SQL语句，要求显示学生姓名，选课数量 4） [ 问答题 ] 创建一个序列,序列名称为mysequence，起始值为1，每次增长1 5） [ 问答题 ] 使用序列mysequence，向班级表插入一条数据： 主键为序列自动增长值 班级编号为：1001 班级名称为：Java 开发二班 2、 [ 组合题 ] 在Oracle中， 使用scott用户登录后，可以使用示例表，结构如下：emp dept <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_11_1.png" alt="" loading="lazy"><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_11_2.png" alt="" loading="lazy"></p><p>请根据表结构，编写下列问题的sql语句。 1） [ 问答题 ] 将工资低于3000元或者低于平均工资的员工的工资上浮10% 2） [ 问答题 ] 查询员工ename的第三个字母是O的员工的信息: 3） [ 问答题 ] 列出至少有三个员工的所有部门和部门信息。 4） [ 问答题 ] 显示所有员工的姓名，加入公司的年份（例如：2017）、加入公司的月份（例如：10），按受雇日期所在的年排 序，若年份相同则讲最早月份的员工排在最前面： 5） [ 问答题 ] 显示满十年服务年限的员工的姓名和受雇日期</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',9);function a(_,c){return s(),e("div",null,[o(" more "),g])}const l=t(n,[["render",a],["__file","oracle11.html.vue"]]);export{l as default};

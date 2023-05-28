const e=JSON.parse(`{"key":"v-6b0d636a","path":"/zh/oracle21/","title":"Oracle初级测试题十三(12-12)--创建和维护表","lang":"zh-CN","frontmatter":{"title":"Oracle初级测试题十三(12-12)--创建和维护表","icon":"page","order":21,"author":"涎涎","date":"2019-06-16T22:19:14.000Z","isOriginal":true,"permalinkPattern":"oracle21","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle初级测试题十三(12-12)--创建和维护表"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/oracle21/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle初级测试题十三(12-12)--创建和维护表"}],["meta",{"property":"og:description","content":"Oracle初级测试题十三(12-12)--创建和维护表 练习1 学校想做一个选课系统，其中涉及到课程表，学生表，请分别创建这两个表，自己思考表中应有的列及数据类型。 --课程表： create table tab_course_13( cid number(4),--课程编号 cname varchar(50),--课程名称 ctypeId number(4),--课程类型 score number(1),--学分 chour number(2) --课时 ); --学生表 create table tab_student_13( sid char(10),--学生编号2019003004 sname varchar2(20),--学生姓名 sex char(4) default '男',--性别 telephone varchar2(15),--电话号码 collegeId number(4),--学院 majorId number(4),--专业 classId number(4),--班级 inDate date --入学日期 );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:19:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle初级测试题十三(12-12)--创建和维护表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:19:14.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle初级测试题十三(12-12)--创建和维护表 练习1 学校想做一个选课系统，其中涉及到课程表，学生表，请分别创建这两个表，自己思考表中应有的列及数据类型。 --课程表： create table tab_course_13( cid number(4),--课程编号 cname varchar(50),--课程名称 ctypeId number(4),--课程类型 score number(1),--学分 chour number(2) --课时 ); --学生表 create table tab_student_13( sid char(10),--学生编号2019003004 sname varchar2(20),--学生姓名 sex char(4) default '男',--性别 telephone varchar2(15),--电话号码 collegeId number(4),--学院 majorId number(4),--专业 classId number(4),--班级 inDate date --入学日期 );"},"headers":[{"level":2,"title":"练习1","slug":"练习1","link":"#练习1","children":[]},{"level":2,"title":"练习2","slug":"练习2","link":"#练习2","children":[]},{"level":2,"title":"练习3","slug":"练习3","link":"#练习3","children":[]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":3.23,"words":970},"filePathRelative":"zh/programBlog/Database/Oracle/21-Oracle初级测试题十三(12-12)--创建和维护表.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle初级测试题十三(12-12)--创建和维护表</h1>\\n<h2> 练习1</h2>\\n<ol>\\n<li>学校想做一个选课系统，其中涉及到课程表，学生表，请分别创建这两个表，自己思考表中应有的列及数据类型。</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>--课程表：\\ncreate table tab_course_13(\\n       cid number(4),--课程编号\\n       cname varchar(50),--课程名称\\n       ctypeId number(4),--课程类型\\n       score number(1),--学分\\n       chour number(2) --课时\\n);\\n--学生表\\ncreate table tab_student_13(\\n       sid char(10),--学生编号2019003004\\n       sname varchar2(20),--学生姓名\\n       sex char(4) default '男',--性别\\n       telephone varchar2(15),--电话号码\\n       collegeId number(4),--学院\\n       majorId number(4),--专业\\n       classId number(4),--班级\\n       inDate date --入学日期\\n);\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};

const e=JSON.parse(`{"key":"v-6b0d6389","path":"/zh/oracle22/","title":"Oracle初级测试题十四(8-8)--约束","lang":"zh-CN","frontmatter":{"title":"Oracle初级测试题十四(8-8)--约束","icon":"page","order":22,"author":"涎涎","date":"2019-06-16T22:19:41.000Z","isOriginal":true,"permalinkPattern":"oracle22","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle初级测试题十四(8-8)--约束"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/oracle22/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle初级测试题十四(8-8)--约束"}],["meta",{"property":"og:description","content":"Oracle初级测试题十四(8-8)--约束 练习1 学校有一个选课系统，其中包括如下关系模式： 系(系编号： 主键， 系名称: 唯一键， 系主任： 非空约束， 系所在校去：取值范围只能在南湖校区和浑南校区) create table tabCollege( cgNo number(4) constraint tabCollege_cgNo_pk primary key, -- 系编号： 主键， cgName varchar2(20) constraint tabCollege_cgName_unique unique, -- 系名称: 唯一键， cgDirector varchar2(20) constraint tabCollege_cgDirector_noNull not null, -- 系主任： 非空约束， cgCampus varchar2(40) constraint tabCollege_cgCampus_ck check(cgCampus in ('南湖校区','浑南校区')) -- 系所在校区：取值范围只能在南湖校区和浑南校区) );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:19:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle初级测试题十四(8-8)--约束\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:19:41.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle初级测试题十四(8-8)--约束 练习1 学校有一个选课系统，其中包括如下关系模式： 系(系编号： 主键， 系名称: 唯一键， 系主任： 非空约束， 系所在校去：取值范围只能在南湖校区和浑南校区) create table tabCollege( cgNo number(4) constraint tabCollege_cgNo_pk primary key, -- 系编号： 主键， cgName varchar2(20) constraint tabCollege_cgName_unique unique, -- 系名称: 唯一键， cgDirector varchar2(20) constraint tabCollege_cgDirector_noNull not null, -- 系主任： 非空约束， cgCampus varchar2(40) constraint tabCollege_cgCampus_ck check(cgCampus in ('南湖校区','浑南校区')) -- 系所在校区：取值范围只能在南湖校区和浑南校区) );"},"headers":[{"level":2,"title":"练习1","slug":"练习1","link":"#练习1","children":[]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"zh/programBlog/Database/Oracle/22-Oracle初级测试题十四(8-8)--约束.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle初级测试题十四(8-8)--约束</h1>\\n<h2> 练习1</h2>\\n<ol>\\n<li>学校有一个选课系统，其中包括如下关系模式：</li>\\n</ol>\\n<p>系(系编号： 主键，\\n系名称:  唯一键，\\n系主任： 非空约束，\\n系所在校去：取值范围只能在南湖校区和浑南校区)</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>create table tabCollege(\\n       cgNo number(4) \\n       constraint tabCollege_cgNo_pk primary key,\\n       --  系编号： 主键，\\n       cgName varchar2(20) \\n       constraint tabCollege_cgName_unique unique,\\n       --   系名称:  唯一键，\\n       cgDirector varchar2(20) \\n       constraint tabCollege_cgDirector_noNull not null,\\n       --   系主任： 非空约束，\\n       cgCampus varchar2(40) \\n       constraint tabCollege_cgCampus_ck check(cgCampus in ('南湖校区','浑南校区'))\\n       --   系所在校区：取值范围只能在南湖校区和浑南校区)\\n);\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
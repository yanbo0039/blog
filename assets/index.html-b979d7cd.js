const e=JSON.parse(`{"key":"v-3b286c04","path":"/zh/oracle7/","title":"Oracle-限制数据与对数据排序","lang":"zh-CN","frontmatter":{"title":"Oracle-限制数据与对数据排序","icon":"page","order":7,"author":"涎涎","date":"2019-06-16T21:07:40.000Z","isOriginal":true,"permalinkPattern":"oracle7","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-限制数据与对数据排序"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/oracle7/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-限制数据与对数据排序"}],["meta",{"property":"og:description","content":"Oracle-限制数据与对数据排序 --------第三章 限制数据与对数据排序--------- --选择行的语句关键字where --找出emp表中所有工作在10号部门的员工 --select from where 顺序from where select 先确定表，再筛选行，再投影列 select * from emp where deptno = 10; ---普通比较运算符 --不等于号 &lt;&gt; 或 != -- 找出emp表中岗位为cleck并且工资大于1000的员工 -- 字符串格式的数据要用单引号''括起来"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:07:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-限制数据与对数据排序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:07:40.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle-限制数据与对数据排序 --------第三章 限制数据与对数据排序--------- --选择行的语句关键字where --找出emp表中所有工作在10号部门的员工 --select from where 顺序from where select 先确定表，再筛选行，再投影列 select * from emp where deptno = 10; ---普通比较运算符 --不等于号 &lt;&gt; 或 != -- 找出emp表中岗位为cleck并且工资大于1000的员工 -- 字符串格式的数据要用单引号''括起来"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":7.14,"words":2142},"filePathRelative":"zh/programBlog/Database/Oracle/7-Oracle-限制数据与对数据排序.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle-限制数据与对数据排序</h1>\\n<p>--------第三章 限制数据与对数据排序---------</p>\\n<p>--选择行的语句关键字where\\n--找出emp表中所有工作在10号部门的员工\\n--select from where  顺序from where select 先确定表，再筛选行，再投影列</p>\\n<pre><code>select * from emp where deptno = 10;\\n</code></pre>\\n<p><img src=\\"/assets/Oracle_7_1.png\\" alt=\\"\\" loading=\\"lazy\\">\\n---普通比较运算符\\n--不等于号 &lt;&gt; 或 !=\\n-- 找出emp表中岗位为cleck并且工资大于1000的员工\\n-- 字符串格式的数据要用单引号''括起来</p>","autoDesc":true}`);export{e as data};

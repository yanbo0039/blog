const t=JSON.parse('{"key":"v-10603d6a","path":"/zh/programBlog/ServerSideLanguage/Java/java254.html","title":"Java-JDBC与java数据库编程-处理ResultSet查询结果","lang":"zh-CN","frontmatter":{"title":"Java-JDBC与java数据库编程-处理ResultSet查询结果","icon":"page","order":254,"author":"涎涎","date":"2023-01-22T15:48:52.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java254.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-JDBC与java数据库编程-处理ResultSet查询结果"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java254.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-JDBC与java数据库编程-处理ResultSet查询结果"}],["meta",{"property":"og:description","content":"254-Java-JDBC与java数据库编程-处理ResultSet查询结果.md 示例代码 package com.tencent.chapter07.jdbc.entity; import java.util.Date; /** * 映射数据库Emp表的实体类 */ public class Emp { \\t/**员工编号*/ \\tprivate int empno; \\t/**员工姓名*/ \\tprivate String ename; \\t/**员工职位*/ \\tprivate String job; \\t/**员工上级经理*/ \\tprivate int manager; \\t/**员工入职日期*/ \\tprivate Date hiredate; \\t/**员工薪水*/ \\tprivate double salary; \\t/**员工奖金*/ \\tprivate double comm; \\t/**所在部门*/ \\tprivate int deptno; \\t/**无参构造函数*/ \\tpublic Emp() \\t{ \\t\\tsuper(); \\t} \\t \\t/**有参构造函数*/ \\tpublic Emp(int empno, String ename, String job, int manager, Date hiredate, double salary, double comm, \\t\\t\\tint deptno) { \\t\\tsuper(); \\t\\tthis.empno = empno; \\t\\tthis.ename = ename; \\t\\tthis.job = job; \\t\\tthis.manager = manager; \\t\\tthis.hiredate = hiredate; \\t\\tthis.salary = salary; \\t\\tthis.comm = comm; \\t\\tthis.deptno = deptno; \\t} \\t \\t/**访问器（get与set方法）*/ \\tpublic int getEmpno() { \\t\\treturn empno; \\t} \\tpublic void setEmpno(int empno) { \\t\\tthis.empno = empno; \\t} \\tpublic String getEname() { \\t\\treturn ename; \\t} \\tpublic void setEname(String ename) { \\t\\tthis.ename = ename; \\t} \\tpublic String getJob() { \\t\\treturn job; \\t} \\tpublic void setJob(String job) { \\t\\tthis.job = job; \\t} \\tpublic int getManager() { \\t\\treturn manager; \\t} \\tpublic void setManager(int manager) { \\t\\tthis.manager = manager; \\t} \\tpublic Date getHiredate() { \\t\\treturn hiredate; \\t} \\tpublic void setHiredate(Date hiredate) { \\t\\tthis.hiredate = hiredate; \\t} \\tpublic double getSalary() { \\t\\treturn salary; \\t} \\tpublic void setSalary(double salary) { \\t\\tthis.salary = salary; \\t} \\tpublic double getComm() { \\t\\treturn comm; \\t} \\tpublic void setComm(double comm) { \\t\\tthis.comm = comm; \\t} \\tpublic int getDeptno() { \\t\\treturn deptno; \\t} \\tpublic void setDeptno(int deptno) { \\t\\tthis.deptno = deptno; \\t} \\t/**重写Object父类的toString方法*/ \\t@Override \\tpublic String toString() { \\t\\treturn \\"Emp [empno=\\" + empno + \\", ename=\\" + ename + \\", job=\\" + job + \\", manager=\\" + manager + \\", hiredate=\\" \\t\\t\\t\\t+ hiredate + \\", salary=\\" + salary + \\", comm=\\" + comm + \\", deptno=\\" + deptno + \\"]\\"; \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-22T15:48:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-JDBC与java数据库编程-处理ResultSet查询结果\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-22T15:48:52.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"254-Java-JDBC与java数据库编程-处理ResultSet查询结果.md 示例代码 package com.tencent.chapter07.jdbc.entity; import java.util.Date; /** * 映射数据库Emp表的实体类 */ public class Emp { \\t/**员工编号*/ \\tprivate int empno; \\t/**员工姓名*/ \\tprivate String ename; \\t/**员工职位*/ \\tprivate String job; \\t/**员工上级经理*/ \\tprivate int manager; \\t/**员工入职日期*/ \\tprivate Date hiredate; \\t/**员工薪水*/ \\tprivate double salary; \\t/**员工奖金*/ \\tprivate double comm; \\t/**所在部门*/ \\tprivate int deptno; \\t/**无参构造函数*/ \\tpublic Emp() \\t{ \\t\\tsuper(); \\t} \\t \\t/**有参构造函数*/ \\tpublic Emp(int empno, String ename, String job, int manager, Date hiredate, double salary, double comm, \\t\\t\\tint deptno) { \\t\\tsuper(); \\t\\tthis.empno = empno; \\t\\tthis.ename = ename; \\t\\tthis.job = job; \\t\\tthis.manager = manager; \\t\\tthis.hiredate = hiredate; \\t\\tthis.salary = salary; \\t\\tthis.comm = comm; \\t\\tthis.deptno = deptno; \\t} \\t \\t/**访问器（get与set方法）*/ \\tpublic int getEmpno() { \\t\\treturn empno; \\t} \\tpublic void setEmpno(int empno) { \\t\\tthis.empno = empno; \\t} \\tpublic String getEname() { \\t\\treturn ename; \\t} \\tpublic void setEname(String ename) { \\t\\tthis.ename = ename; \\t} \\tpublic String getJob() { \\t\\treturn job; \\t} \\tpublic void setJob(String job) { \\t\\tthis.job = job; \\t} \\tpublic int getManager() { \\t\\treturn manager; \\t} \\tpublic void setManager(int manager) { \\t\\tthis.manager = manager; \\t} \\tpublic Date getHiredate() { \\t\\treturn hiredate; \\t} \\tpublic void setHiredate(Date hiredate) { \\t\\tthis.hiredate = hiredate; \\t} \\tpublic double getSalary() { \\t\\treturn salary; \\t} \\tpublic void setSalary(double salary) { \\t\\tthis.salary = salary; \\t} \\tpublic double getComm() { \\t\\treturn comm; \\t} \\tpublic void setComm(double comm) { \\t\\tthis.comm = comm; \\t} \\tpublic int getDeptno() { \\t\\treturn deptno; \\t} \\tpublic void setDeptno(int deptno) { \\t\\tthis.deptno = deptno; \\t} \\t/**重写Object父类的toString方法*/ \\t@Override \\tpublic String toString() { \\t\\treturn \\"Emp [empno=\\" + empno + \\", ename=\\" + ename + \\", job=\\" + job + \\", manager=\\" + manager + \\", hiredate=\\" \\t\\t\\t\\t+ hiredate + \\", salary=\\" + salary + \\", comm=\\" + comm + \\", deptno=\\" + deptno + \\"]\\"; \\t} }"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":1.69,"words":506},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/254-Java-JDBC与java数据库编程-处理ResultSet查询结果.md","localizedDate":"2023年1月22日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--254-Java-JDBCjava-ResultSet-u276bey1px38a6p5a6onv2q5icz15p7j0bl8xblcc237s.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">254-Java-JDBC与java数据库编程-处理ResultSet查询结果.md</a></h1>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter07.jdbc.entity;\\n\\nimport java.util.Date;\\n\\n/**\\n * 映射数据库Emp表的实体类\\n */\\npublic class Emp {\\n\\n\\t/**员工编号*/\\n\\tprivate int empno;\\n\\t/**员工姓名*/\\n\\tprivate String ename;\\n\\t/**员工职位*/\\n\\tprivate String job;\\n\\t/**员工上级经理*/\\n\\tprivate int manager;\\n\\t/**员工入职日期*/\\n\\tprivate Date hiredate;\\n\\t/**员工薪水*/\\n\\tprivate double salary;\\n\\t/**员工奖金*/\\n\\tprivate double comm;\\n\\t/**所在部门*/\\n\\tprivate int deptno;\\n\\n\\t/**无参构造函数*/\\n\\tpublic Emp()\\n\\t{\\n\\t\\tsuper();\\n\\t}\\n\\t\\n\\t/**有参构造函数*/\\n\\tpublic Emp(int empno, String ename, String job, int manager, Date hiredate, double salary, double comm,\\n\\t\\t\\tint deptno) {\\n\\t\\tsuper();\\n\\t\\tthis.empno = empno;\\n\\t\\tthis.ename = ename;\\n\\t\\tthis.job = job;\\n\\t\\tthis.manager = manager;\\n\\t\\tthis.hiredate = hiredate;\\n\\t\\tthis.salary = salary;\\n\\t\\tthis.comm = comm;\\n\\t\\tthis.deptno = deptno;\\n\\t}\\n\\t\\n\\t/**访问器（get与set方法）*/\\n\\tpublic int getEmpno() {\\n\\t\\treturn empno;\\n\\t}\\n\\n\\tpublic void setEmpno(int empno) {\\n\\t\\tthis.empno = empno;\\n\\t}\\n\\n\\tpublic String getEname() {\\n\\t\\treturn ename;\\n\\t}\\n\\n\\tpublic void setEname(String ename) {\\n\\t\\tthis.ename = ename;\\n\\t}\\n\\n\\tpublic String getJob() {\\n\\t\\treturn job;\\n\\t}\\n\\n\\tpublic void setJob(String job) {\\n\\t\\tthis.job = job;\\n\\t}\\n\\n\\tpublic int getManager() {\\n\\t\\treturn manager;\\n\\t}\\n\\n\\tpublic void setManager(int manager) {\\n\\t\\tthis.manager = manager;\\n\\t}\\n\\n\\tpublic Date getHiredate() {\\n\\t\\treturn hiredate;\\n\\t}\\n\\n\\tpublic void setHiredate(Date hiredate) {\\n\\t\\tthis.hiredate = hiredate;\\n\\t}\\n\\n\\tpublic double getSalary() {\\n\\t\\treturn salary;\\n\\t}\\n\\n\\tpublic void setSalary(double salary) {\\n\\t\\tthis.salary = salary;\\n\\t}\\n\\n\\tpublic double getComm() {\\n\\t\\treturn comm;\\n\\t}\\n\\n\\tpublic void setComm(double comm) {\\n\\t\\tthis.comm = comm;\\n\\t}\\n\\n\\tpublic int getDeptno() {\\n\\t\\treturn deptno;\\n\\t}\\n\\n\\tpublic void setDeptno(int deptno) {\\n\\t\\tthis.deptno = deptno;\\n\\t}\\n\\n\\t/**重写Object父类的toString方法*/\\n\\t@Override\\n\\tpublic String toString() {\\n\\t\\treturn \\"Emp [empno=\\" + empno + \\", ename=\\" + ename + \\", job=\\" + job + \\", manager=\\" + manager + \\", hiredate=\\"\\n\\t\\t\\t\\t+ hiredate + \\", salary=\\" + salary + \\", comm=\\" + comm + \\", deptno=\\" + deptno + \\"]\\";\\n\\t}\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

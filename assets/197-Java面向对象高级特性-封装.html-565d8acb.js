const t=JSON.parse('{"key":"v-6c776851","path":"/zh/programBlog/ServerSideLanguage/Java/197-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E5%B0%81%E8%A3%85.html","title":"Java面向对象高级特性-封装","lang":"zh-CN","frontmatter":{"title":"Java面向对象高级特性-封装","icon":"page","order":197,"author":"涎涎","date":"2023-01-05T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java面向对象高级特性-封装"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/197-Java%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E9%AB%98%E7%BA%A7%E7%89%B9%E6%80%A7-%E5%B0%81%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java面向对象高级特性-封装"}],["meta",{"property":"og:description","content":"197-Java面向对象高级特性-封装.md package com.tencent.chapter07.封装; /** * &lt;p&gt;Title: Employee&lt;/p&gt; * &lt;p&gt; * Description: 封装： 隐藏属性、方法或实现细节的过程称为封装 特点： 1.构造器与类一般使用public修饰 2.属性一般使用private修饰，对外提供访问器访问属性，get方法取值，set方法赋值 好处： 1.隐藏类的实现细节 2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作 3.可进行数据检查 ----------------------------------------------------------------------------- 修饰类： public &lt;default&gt; 修饰变量、方法：public protected &lt;default&gt; private public: 同类、同包、不同包子类、不同包 protected:同类、同包、不同包子类 &lt;default&gt;:同类、同包 private: 同类 * &lt;/p&gt; * @author xianxian * @date 2023年1月4日 */ public class Employee { \\t/**员工编号*/ \\tprivate int empno; \\t \\t/**员工姓名*/ \\tprivate String ename; \\t \\t/**员工工资*/ \\tprivate double salary; \\t \\t/**访问器（get与set）*/ \\tpublic int getEmpno() \\t{ \\t\\treturn empno; \\t} \\tpublic void setEmpno(int empno) \\t{ \\t\\tthis.empno = empno; \\t} \\t \\tpublic String getEname() \\t{ \\t\\treturn ename; \\t} \\tpublic void setEname(String ename) \\t{ \\t\\t//3.可进行数据检查 \\t\\tif(ename == null || \\"\\".equals(ename)) \\t\\t{ \\t\\t\\tSystem.out.println(\\"雇员姓名不能为空\\"); \\t\\t\\treturn; \\t\\t} \\t\\t \\t\\tthis.ename = ename; \\t} \\t \\tpublic double getSalary() \\t{ \\t\\t//1.隐藏类的实现细节 \\t\\treturn calSalary(); \\t} \\tpublic void setSalary(double salary) \\t{ \\t\\t//2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作 \\t\\tif(salary &lt; 2600) \\t\\t{ \\t\\t\\t System.out.println(\\"薪资不能小于2600\\"); \\t\\t\\t return; \\t\\t} \\t\\t \\t\\tthis.salary = salary; \\t} \\t \\t//1.隐藏类的实现细节 \\tprivate double calSalary() \\t{ \\t\\treturn salary + 5000 + 300 + 200 + (10000*0.1); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java面向对象高级特性-封装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"197-Java面向对象高级特性-封装.md package com.tencent.chapter07.封装; /** * &lt;p&gt;Title: Employee&lt;/p&gt; * &lt;p&gt; * Description: 封装： 隐藏属性、方法或实现细节的过程称为封装 特点： 1.构造器与类一般使用public修饰 2.属性一般使用private修饰，对外提供访问器访问属性，get方法取值，set方法赋值 好处： 1.隐藏类的实现细节 2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作 3.可进行数据检查 ----------------------------------------------------------------------------- 修饰类： public &lt;default&gt; 修饰变量、方法：public protected &lt;default&gt; private public: 同类、同包、不同包子类、不同包 protected:同类、同包、不同包子类 &lt;default&gt;:同类、同包 private: 同类 * &lt;/p&gt; * @author xianxian * @date 2023年1月4日 */ public class Employee { \\t/**员工编号*/ \\tprivate int empno; \\t \\t/**员工姓名*/ \\tprivate String ename; \\t \\t/**员工工资*/ \\tprivate double salary; \\t \\t/**访问器（get与set）*/ \\tpublic int getEmpno() \\t{ \\t\\treturn empno; \\t} \\tpublic void setEmpno(int empno) \\t{ \\t\\tthis.empno = empno; \\t} \\t \\tpublic String getEname() \\t{ \\t\\treturn ename; \\t} \\tpublic void setEname(String ename) \\t{ \\t\\t//3.可进行数据检查 \\t\\tif(ename == null || \\"\\".equals(ename)) \\t\\t{ \\t\\t\\tSystem.out.println(\\"雇员姓名不能为空\\"); \\t\\t\\treturn; \\t\\t} \\t\\t \\t\\tthis.ename = ename; \\t} \\t \\tpublic double getSalary() \\t{ \\t\\t//1.隐藏类的实现细节 \\t\\treturn calSalary(); \\t} \\tpublic void setSalary(double salary) \\t{ \\t\\t//2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作 \\t\\tif(salary &lt; 2600) \\t\\t{ \\t\\t\\t System.out.println(\\"薪资不能小于2600\\"); \\t\\t\\t return; \\t\\t} \\t\\t \\t\\tthis.salary = salary; \\t} \\t \\t//1.隐藏类的实现细节 \\tprivate double calSalary() \\t{ \\t\\treturn salary + 5000 + 300 + 200 + (10000*0.1); \\t} }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":2.21,"words":663},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/197-Java面向对象高级特性-封装.md","localizedDate":"2023年1月5日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--197-Java--sw8oy90e1cy30e8p6djgxbe37aw2mxw0cc0n.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">197-Java面向对象高级特性-封装.md</a></h1>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter07.封装;\\n\\n\\n/**\\n * &lt;p&gt;Title: Employee&lt;/p&gt;  \\n * &lt;p&gt;\\n *    Description: \\n封装：\\n隐藏属性、方法或实现细节的过程称为封装\\n\\n特点：\\n1.构造器与类一般使用public修饰\\n2.属性一般使用private修饰，对外提供访问器访问属性，get方法取值，set方法赋值\\n\\n好处：\\n1.隐藏类的实现细节\\n2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作\\n3.可进行数据检查\\n\\n-----------------------------------------------------------------------------\\n\\n修饰类：               public &lt;default&gt;\\n修饰变量、方法：public protected &lt;default&gt; private\\n\\npublic:   同类、同包、不同包子类、不同包\\nprotected:同类、同包、不同包子类\\n&lt;default&gt;:同类、同包\\nprivate:  同类\\n * &lt;/p&gt;  \\n * @author xianxian \\n * @date 2023年1月4日\\n */\\npublic class Employee {\\n\\n\\t/**员工编号*/\\n\\tprivate int empno;\\n\\t\\n\\t/**员工姓名*/\\n\\tprivate String ename;\\n\\t\\n\\t/**员工工资*/\\n\\tprivate double salary;\\n\\t\\n\\t/**访问器（get与set）*/\\n\\tpublic int getEmpno()\\n\\t{\\n\\t\\treturn empno;\\n\\t}\\n\\tpublic void setEmpno(int empno)\\n\\t{\\n\\t\\tthis.empno = empno;\\n\\t}\\n\\t\\n\\tpublic String getEname()\\n\\t{\\n\\t\\treturn ename;\\n\\t}\\n\\tpublic void setEname(String ename)\\n\\t{\\n\\t\\t//3.可进行数据检查\\n\\t\\tif(ename == null || \\"\\".equals(ename))\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"雇员姓名不能为空\\");\\n\\t\\t\\treturn;\\n\\t\\t}\\n\\t\\t\\n\\t\\tthis.ename = ename;\\n\\t}\\n\\t\\n\\tpublic double getSalary()\\n\\t{\\n\\t\\t//1.隐藏类的实现细节\\n\\t\\treturn calSalary();\\n\\t}\\n\\tpublic void setSalary(double salary)\\n\\t{\\n\\t\\t//2.让使用者只能通过事先定制好的方法来访问数据，可以方便地加入控制逻辑，限制对属性的不合理操作\\n\\t\\tif(salary &lt; 2600)\\n\\t\\t{\\n\\t\\t\\t System.out.println(\\"薪资不能小于2600\\");\\n\\t\\t\\t return;\\n\\t\\t}\\n\\t\\t\\n\\t\\tthis.salary = salary;\\n\\t}\\n\\t\\n\\t//1.隐藏类的实现细节\\n\\tprivate double calSalary()\\n\\t{\\n\\t\\treturn salary + 5000 + 300 + 200 + (10000*0.1);\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

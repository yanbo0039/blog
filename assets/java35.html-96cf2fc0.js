const e=JSON.parse('{"key":"v-f2058198","path":"/zh/programBlog/ServerSideLanguage/Java/java35.html","title":"Java中级测试题六-JDBC与Java数据库编程基础(2-2)","lang":"zh-CN","frontmatter":{"title":"Java中级测试题六-JDBC与Java数据库编程基础(2-2)","icon":"page","order":35,"author":"涎涎","date":"2019-06-16T22:15:30.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java35.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java中级测试题六-JDBC与Java数据库编程基础(2-2)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java35.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java中级测试题六-JDBC与Java数据库编程基础(2-2)"}],["meta",{"property":"og:description","content":"Java中级测试题六-JDBC与Java数据库编程基础(2-2) 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 一、简答题 1.1 简述JDBC应用程序的基本步骤 JDBC应用程序大概有以下六个步骤 1、创建连接对象 2、创建执行SQL语句的命令对象 3、执行sql语句 4、获取结果： 如果是查询获取结果集如果是更新 获取 影响的行数 5、如果是查询 需要从结果集中获取数据 6、关闭所有资源 先创建的对象后关闭 如下实例： import java.sql.Connection; import java.sql.DriverManager; import java.sql.ResultSet; import java.sql.SQLException; import java.sql.Statement; public class Test1 { \\tpublic static void main(String[] args) { //1、创建连接对象 Connection conn = null;//连接对象 Statement stmt = null;//命令对象 ResultSet rs = null;//结果集对象 \\t\\t try { Class.forName(\\"oracle.jdbc.driver.OracleDriver\\");//获取驱动程序 conn = DriverManager.getConnection (\\"jdbc:oracle:thin:@localhost:1521:orcl\\", \\"scott\\",\\"scott123\\"); System.out.println(conn);//白盒测试 是否连接成功 //2、创建执行SQL语句的命令对象 stmt = conn.createStatement(); //3、执行sql语句 query_sal_by_empno String query_sal_by_empno = \\"select sal from emp where empno = \\"+7369; System.out.println(query_sal_by_empno);//白盒测试sql语句\\t //4.获取结果集如果是查询获取结果集 如果是更新则结果集是空 rs = stmt.executeQuery(query_sal_by_empno); //5.如果是查询，需要从结果集获取数据， if(rs.next()) {//将指针往下移确定是否为空 \\tDouble sal = rs.getDouble(\\"sal\\");//调用方法并传列名返回结果 System.out.println(sal); } } catch (Exception e) { e.printStackTrace(); }finally { //6、关闭所有资源 先创建的对象后关闭 try { if(rs != null) { rs.close(); } if(stmt != null) { stmt.close(); } if(conn != null) { conn.close(); } } catch (SQLException e) { e.printStackTrace(); } } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T09:56:49.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:15:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T09:56:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中级测试题六-JDBC与Java数据库编程基础(2-2)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:15:30.000Z\\",\\"dateModified\\":\\"2023-06-02T09:56:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java中级测试题六-JDBC与Java数据库编程基础(2-2) 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 一、简答题 1.1 简述JDBC应用程序的基本步骤 JDBC应用程序大概有以下六个步骤 1、创建连接对象 2、创建执行SQL语句的命令对象 3、执行sql语句 4、获取结果： 如果是查询获取结果集如果是更新 获取 影响的行数 5、如果是查询 需要从结果集中获取数据 6、关闭所有资源 先创建的对象后关闭 如下实例： import java.sql.Connection; import java.sql.DriverManager; import java.sql.ResultSet; import java.sql.SQLException; import java.sql.Statement; public class Test1 { \\tpublic static void main(String[] args) { //1、创建连接对象 Connection conn = null;//连接对象 Statement stmt = null;//命令对象 ResultSet rs = null;//结果集对象 \\t\\t try { Class.forName(\\"oracle.jdbc.driver.OracleDriver\\");//获取驱动程序 conn = DriverManager.getConnection (\\"jdbc:oracle:thin:@localhost:1521:orcl\\", \\"scott\\",\\"scott123\\"); System.out.println(conn);//白盒测试 是否连接成功 //2、创建执行SQL语句的命令对象 stmt = conn.createStatement(); //3、执行sql语句 query_sal_by_empno String query_sal_by_empno = \\"select sal from emp where empno = \\"+7369; System.out.println(query_sal_by_empno);//白盒测试sql语句\\t //4.获取结果集如果是查询获取结果集 如果是更新则结果集是空 rs = stmt.executeQuery(query_sal_by_empno); //5.如果是查询，需要从结果集获取数据， if(rs.next()) {//将指针往下移确定是否为空 \\tDouble sal = rs.getDouble(\\"sal\\");//调用方法并传列名返回结果 System.out.println(sal); } } catch (Exception e) { e.printStackTrace(); }finally { //6、关闭所有资源 先创建的对象后关闭 try { if(rs != null) { rs.close(); } if(stmt != null) { stmt.close(); } if(conn != null) { conn.close(); } } catch (SQLException e) { e.printStackTrace(); } } } }"},"headers":[{"level":3,"title":"一、简答题","slug":"一、简答题","link":"#一、简答题","children":[]},{"level":3,"title":"二、编程题","slug":"二、编程题","link":"#二、编程题","children":[]},{"level":3,"title":"其次写对应的Java代码：","slug":"其次写对应的java代码","link":"#其次写对应的java代码","children":[]},{"level":3,"title":"DBUtil","slug":"dbutil","link":"#dbutil","children":[]},{"level":3,"title":"UserDao","slug":"userdao","link":"#userdao","children":[]},{"level":3,"title":"Test","slug":"test","link":"#test","children":[]},{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685699809000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":7}]},"readingTime":{"minutes":6.45,"words":1936},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/35-Java中级测试题六-JDBC与Java数据库编程基础(2-2).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java中级测试题六-JDBC与Java数据库编程基础(2-2)</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h3> 一、简答题</h3>\\n<p>1.1 简述JDBC应用程序的基本步骤</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>JDBC应用程序大概有以下六个步骤\\n1、创建连接对象\\n2、创建执行SQL语句的命令对象\\n3、执行sql语句\\n4、获取结果：\\n如果是查询获取结果集如果是更新 获取 影响的行数\\n5、如果是查询 需要从结果集中获取数据\\n6、关闭所有资源 先创建的对象后关闭\\n\\n如下实例：\\nimport java.sql.Connection;\\nimport java.sql.DriverManager;\\nimport java.sql.ResultSet;\\nimport java.sql.SQLException;\\nimport java.sql.Statement;\\n\\npublic class Test1 {\\n\\tpublic static void main(String[] args) {\\n//1、创建连接对象\\n    Connection conn = null;//连接对象\\n    Statement stmt = null;//命令对象\\n    ResultSet rs = null;//结果集对象\\n\\t\\t\\ntry {\\nClass.forName(\\"oracle.jdbc.driver.OracleDriver\\");//获取驱动程序\\nconn = DriverManager.getConnection\\n(\\"jdbc:oracle:thin:@localhost:1521:orcl\\",\\n            \\"scott\\",\\"scott123\\");\\nSystem.out.println(conn);//白盒测试 是否连接成功\\n//2、创建执行SQL语句的命令对象\\nstmt = conn.createStatement();\\n//3、执行sql语句 query_sal_by_empno\\nString query_sal_by_empno = \\"select sal from emp where \\nempno = \\"+7369;\\nSystem.out.println(query_sal_by_empno);//白盒测试sql语句\\t\\n//4.获取结果集如果是查询获取结果集 如果是更新则结果集是空\\nrs = stmt.executeQuery(query_sal_by_empno);\\n//5.如果是查询，需要从结果集获取数据，\\nif(rs.next()) {//将指针往下移确定是否为空\\n\\tDouble sal = rs.getDouble(\\"sal\\");//调用方法并传列名返回结果\\n        System.out.println(sal);\\n        }\\n    } catch (Exception e) {\\n        e.printStackTrace();\\n    }finally {\\n//6、关闭所有资源 先创建的对象后关闭\\n        try {\\n            if(rs != null) {\\n                rs.close();\\n            }\\n            if(stmt != null) {\\n                stmt.close();\\n            }\\n            if(conn != null) {\\n                conn.close();\\n            }\\n        } catch (SQLException e) {\\n            e.printStackTrace();\\n        }\\n    }\\n}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};

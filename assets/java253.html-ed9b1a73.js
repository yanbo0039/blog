const a=JSON.parse('{"key":"v-13c9eea8","path":"/zh/programBlog/ServerSideLanguage/Java/java253.html","title":"Java-JDBC与java数据库编程-java代码连接数据库","lang":"zh-CN","frontmatter":{"title":"Java-JDBC与java数据库编程-java代码连接数据库","icon":"page","order":253,"author":"涎涎","date":"2023-01-22T15:26:03.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java253.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-JDBC与java数据库编程-java代码连接数据库"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java253.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-JDBC与java数据库编程-java代码连接数据库"}],["meta",{"property":"og:description","content":"253-Java-JDBC与java数据库编程-java代码连接数据库.md 概念 JDBC概述 JDBC核心接口与类 JDBC核心类库包含在java.sql包中。 类 DriverManager：负责管理JDBC驱动程序。使用JDBC驱 动程序之前，必须先将驱动程序加载并注册后才可以使 用，同时提供方法来建立与数据库的连接。 SQLException－有关数据库操作的异常 接口: Connection：特定数据库的连接（会话）。在连接上下 文中执行SQL语句并返回结果。 PreparedStatement：表示预编译的 SQL 语句的对象。 Statement：用于执行静态 SQL 语句并返回它所生成结 果的对象。 ResultSet ：表示数据库结果集的数据表，通常通过执 行查询数据库的语句生成 。 CallableStatement ：用于执行 SQL 存储过程的接口"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-22T15:26:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-JDBC与java数据库编程-java代码连接数据库\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-22T15:26:03.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"253-Java-JDBC与java数据库编程-java代码连接数据库.md 概念 JDBC概述 JDBC核心接口与类 JDBC核心类库包含在java.sql包中。 类 DriverManager：负责管理JDBC驱动程序。使用JDBC驱 动程序之前，必须先将驱动程序加载并注册后才可以使 用，同时提供方法来建立与数据库的连接。 SQLException－有关数据库操作的异常 接口: Connection：特定数据库的连接（会话）。在连接上下 文中执行SQL语句并返回结果。 PreparedStatement：表示预编译的 SQL 语句的对象。 Statement：用于执行静态 SQL 语句并返回它所生成结 果的对象。 ResultSet ：表示数据库结果集的数据表，通常通过执 行查询数据库的语句生成 。 CallableStatement ：用于执行 SQL 存储过程的接口"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":3.36,"words":1009},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/253-Java-JDBC与java数据库编程-java代码连接数据库.md","localizedDate":"2023年1月22日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--253-Java-JDBCjava-java-k168al0kom3jga7664aha80ng32aja8023m8boado4bi08i.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">253-Java-JDBC与java数据库编程-java代码连接数据库.md</a></h1>\\n<h4> 概念</h4>\\n<ul>\\n<li>JDBC概述\\n<ul>\\n<li>JDBC核心接口与类</li>\\n<li>JDBC核心类库包含在java.sql包中。\\n<ul>\\n<li>类\\n<ul>\\n<li>DriverManager：负责管理JDBC驱动程序。使用JDBC驱\\n动程序之前，必须先将驱动程序加载并注册后才可以使\\n用，同时提供方法来建立与数据库的连接。</li>\\n<li>SQLException－有关数据库操作的异常</li>\\n</ul>\\n</li>\\n<li>接口:\\n<ul>\\n<li>Connection：特定数据库的连接（会话）。在连接上下\\n文中执行SQL语句并返回结果。</li>\\n<li>PreparedStatement：表示预编译的 SQL 语句的对象。</li>\\n<li>Statement：用于执行静态 SQL 语句并返回它所生成结\\n果的对象。</li>\\n<li>ResultSet ：表示数据库结果集的数据表，通常通过执\\n行查询数据库的语句生成 。</li>\\n<li>CallableStatement ：用于执行 SQL 存储过程的接口</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{a as data};

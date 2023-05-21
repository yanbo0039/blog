const a=JSON.parse('{"key":"v-77ecad9a","path":"/zh/programBlog/ServerSideLanguage/Java/258-Java-JDBC%E4%B8%8Ejava%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BC%96%E7%A8%8B-%E5%9F%BA%E4%BA%8EMVC%E4%B8%89%E5%B1%82%E7%BC%96%E7%A8%8B_%E5%B0%8F%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.html","title":"Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码","lang":"zh-CN","frontmatter":{"title":"Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码","icon":"page","order":258,"author":"涎涎","date":"2023-01-24T14:31:48.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/258-Java-JDBC%E4%B8%8Ejava%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BC%96%E7%A8%8B-%E5%9F%BA%E4%BA%8EMVC%E4%B8%89%E5%B1%82%E7%BC%96%E7%A8%8B_%E5%B0%8F%E9%A1%B9%E7%9B%AE%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码"}],["meta",{"property":"og:description","content":"258-J76-Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码.md.md 概念 示例代码 config #\\\\u672C\\\\u673A\\\\u73AF\\\\u5883 jdbc.driverClassName = oracle.jdbc.driver.OracleDriver jdbc.url = jdbc:oracle:thin:@localhost:1521:orcl jdbc.username = scott jdbc.password = scott123 #\\\\u8FDC\\\\u7A0B\\\\u73AF\\\\u5883 #jdbc.driverClassName = oracle.jdbc.driver.OracleDriver #jdbc.url = jdbc:oracle:thin:@10.25.160.66:1521:orcl #jdbc.username = scott #jdbc.password = scott123 #------------------------------------------------------- #mysql #jdbc.driverClassName = com.mysql.jdbc.Driver #jdbc.url = jdbc:mysql://localhost:3306/ems #jdbc.username = root #jdbc.password = 123456"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-24T14:31:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-24T14:31:48.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"258-J76-Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码.md.md 概念 示例代码 config #\\\\u672C\\\\u673A\\\\u73AF\\\\u5883 jdbc.driverClassName = oracle.jdbc.driver.OracleDriver jdbc.url = jdbc:oracle:thin:@localhost:1521:orcl jdbc.username = scott jdbc.password = scott123 #\\\\u8FDC\\\\u7A0B\\\\u73AF\\\\u5883 #jdbc.driverClassName = oracle.jdbc.driver.OracleDriver #jdbc.url = jdbc:oracle:thin:@10.25.160.66:1521:orcl #jdbc.username = scott #jdbc.password = scott123 #------------------------------------------------------- #mysql #jdbc.driverClassName = com.mysql.jdbc.Driver #jdbc.url = jdbc:mysql://localhost:3306/ems #jdbc.username = root #jdbc.password = 123456"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":12.54,"words":3763},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/258-Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码.md","localizedDate":"2023年1月24日","excerpt":"<!-- more -->\\n<h1> 258-J76-Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码.md.md</h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"/assets/Java_258_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 示例代码</h4>\\n<ol>\\n<li>config</li>\\n</ol>\\n<div class=\\"language-properties line-numbers-mode\\" data-ext=\\"properties\\"><pre class=\\"language-properties\\"><code><span class=\\"token comment\\">#\\\\u672C\\\\u673A\\\\u73AF\\\\u5883</span>\\n<span class=\\"token key attr-name\\">jdbc.driverClassName</span> <span class=\\"token punctuation\\">=</span>  <span class=\\"token value attr-value\\">oracle.jdbc.driver.OracleDriver</span>\\n<span class=\\"token key attr-name\\">jdbc.url</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">jdbc:oracle:thin:@localhost:1521:orcl</span>\\n<span class=\\"token key attr-name\\">jdbc.username</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">scott</span>\\n<span class=\\"token key attr-name\\">jdbc.password</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">scott123</span>\\n\\n<span class=\\"token comment\\">#\\\\u8FDC\\\\u7A0B\\\\u73AF\\\\u5883</span>\\n<span class=\\"token comment\\">#jdbc.driverClassName =  oracle.jdbc.driver.OracleDriver</span>\\n<span class=\\"token comment\\">#jdbc.url = jdbc:oracle:thin:@10.25.160.66:1521:orcl</span>\\n<span class=\\"token comment\\">#jdbc.username = scott</span>\\n<span class=\\"token comment\\">#jdbc.password = scott123</span>\\n\\n<span class=\\"token comment\\">#-------------------------------------------------------</span>\\n<span class=\\"token comment\\">#mysql   </span>\\n<span class=\\"token comment\\">#jdbc.driverClassName =  com.mysql.jdbc.Driver</span>\\n<span class=\\"token comment\\">#jdbc.url = jdbc:mysql://localhost:3306/ems</span>\\n<span class=\\"token comment\\">#jdbc.username = root</span>\\n<span class=\\"token comment\\">#jdbc.password = 123456</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{a as data};

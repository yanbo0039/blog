const e=JSON.parse('{"key":"v-872d93e2","path":"/zh/programBlog/Database/Oracle/oracle6.html","title":"Oracle-简单的查询语句","lang":"zh-CN","frontmatter":{"title":"Oracle-简单的查询语句","icon":"page","order":6,"author":"涎涎","date":"2019-06-16T21:07:09.000Z","isOriginal":true,"permalinkPattern":"programBlog/Database/Oracle/oracle6.html","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-简单的查询语句"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/oracle6.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-简单的查询语句"}],["meta",{"property":"og:description","content":"Oracle-简单的查询语句 在启动oracl之前确定这两服务已经打开 sys/xxx as sysdba oracle在安装的时候默认把scott账号锁住了，所以需要解锁 conn 用户名/密码 解锁：登录管理员sys账号 alter user scott account unlock;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:07:09.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-简单的查询语句\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:07:09.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle-简单的查询语句 在启动oracl之前确定这两服务已经打开 sys/xxx as sysdba oracle在安装的时候默认把scott账号锁住了，所以需要解锁 conn 用户名/密码 解锁：登录管理员sys账号 alter user scott account unlock;"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":4.48,"words":1345},"filePathRelative":"zh/programBlog/Database/Oracle/6-Oracle-简单的查询语句.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle-简单的查询语句</h1>\\n<p>在启动oracl之前确定这两服务已经打开</p>\\n<figure><img src=\\"/assets/Oracle_6_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<pre><code>sys/xxx as sysdba\\noracle在安装的时候默认把scott账号锁住了，所以需要解锁\\nconn 用户名/密码\\n</code></pre>\\n<p>解锁：登录管理员sys账号</p>\\n<pre><code>  alter user scott account unlock;\\n</code></pre>","autoDesc":true}');export{e as data};

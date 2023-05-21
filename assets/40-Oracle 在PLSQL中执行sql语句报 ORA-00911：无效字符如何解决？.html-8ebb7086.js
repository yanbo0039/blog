const n=JSON.parse('{"key":"v-58513a86","path":"/zh/programBlog/Database/Oracle/40-Oracle%20%E5%9C%A8PLSQL%E4%B8%AD%E6%89%A7%E8%A1%8Csql%E8%AF%AD%E5%8F%A5%E6%8A%A5%20ORA-00911%EF%BC%9A%E6%97%A0%E6%95%88%E5%AD%97%E7%AC%A6%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%EF%BC%9F.html","title":"Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？","lang":"zh-CN","frontmatter":{"title":"Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？","icon":"page","order":40,"author":"涎涎","date":"2023-02-03T16:27:28.000Z","isOriginal":true,"category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/40-Oracle%20%E5%9C%A8PLSQL%E4%B8%AD%E6%89%A7%E8%A1%8Csql%E8%AF%AD%E5%8F%A5%E6%8A%A5%20ORA-00911%EF%BC%9A%E6%97%A0%E6%95%88%E5%AD%97%E7%AC%A6%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？"}],["meta",{"property":"og:description","content":"40-Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？.md 报错截图 报错详情 如上图所示为sql语句在pl/sql中执行时的报错,sql语句如下 \uFEFFcreate table myLibary_book ( book_id number(6) primary key, book_name varchar2(40) not null, lend_count number(3) not null, status number(1) not null check(status in (0,1))---0表示借出，1表示在馆 );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2023-02-03T16:27:28.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-03T16:27:28.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"40-Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？.md 报错截图 报错详情 如上图所示为sql语句在pl/sql中执行时的报错,sql语句如下 \uFEFFcreate table myLibary_book ( book_id number(6) primary key, book_name varchar2(40) not null, lend_count number(3) not null, status number(1) not null check(status in (0,1))---0表示借出，1表示在馆 );"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":4.74,"words":1423},"filePathRelative":"zh/programBlog/Database/Oracle/40-Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？.md","localizedDate":"2023年2月3日","excerpt":"<!-- more -->\\n<h1> 40-Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？.md</h1>\\n<h4> 报错截图</h4>\\n<figure><img src=\\"/assets/Oracle_40_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 报错详情</h4>\\n<blockquote>\\n<p>如上图所示为sql语句在pl/sql中执行时的报错,sql语句如下</p>\\n</blockquote>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code>\uFEFF<span class=\\"token keyword\\">create</span> <span class=\\"token keyword\\">table</span> myLibary_book\\n<span class=\\"token punctuation\\">(</span>\\n  book_id number<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">6</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">primary</span> <span class=\\"token keyword\\">key</span><span class=\\"token punctuation\\">,</span>\\n  book_name varchar2<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">40</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">,</span>\\n  lend_count number<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token keyword\\">status</span> number<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">not</span> <span class=\\"token boolean\\">null</span> <span class=\\"token keyword\\">check</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">status</span> <span class=\\"token operator\\">in</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token comment\\">---0表示借出，1表示在馆</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};

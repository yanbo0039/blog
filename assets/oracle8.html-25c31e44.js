const e=JSON.parse(`{"key":"v-805a3166","path":"/zh/programBlog/Database/Oracle/oracle8.html","title":"Oracle---函数","lang":"zh-CN","frontmatter":{"title":"Oracle---函数","icon":"page","order":8,"author":"涎涎","date":"2019-06-16T21:08:08.000Z","isOriginal":true,"permalinkPattern":"programBlog/Database/Oracle/oracle8.html","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle---函数"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/oracle8.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle---函数"}],["meta",{"property":"og:description","content":"Oracle---函数 --单行函数 --字符函数 --lover 将字符全部转为小写 select ename,lower(ename) from emp; select ename from emp where lower(ename) like '%s%';"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:08:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle---函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:08:08.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Oracle---函数 --单行函数 --字符函数 --lover 将字符全部转为小写 select ename,lower(ename) from emp; select ename from emp where lower(ename) like '%s%';"},"headers":[{"level":2,"title":"--case --decode用来进行条件判断输出映射结果","slug":"case-decode用来进行条件判断输出映射结果","link":"#case-decode用来进行条件判断输出映射结果","children":[]},{"level":2,"title":"--函数嵌套--注意：函数的嵌套最里的那一层先执行","slug":"函数嵌套-注意-函数的嵌套最里的那一层先执行","link":"#函数嵌套-注意-函数的嵌套最里的那一层先执行","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":9.57,"words":2871},"filePathRelative":"zh/programBlog/Database/Oracle/8-Oracle---函数.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Oracle---函数</h1>\\n<p>--单行函数\\n--字符函数\\n--lover 将字符全部转为小写</p>\\n<pre><code>select ename,lower(ename) from emp;\\n</code></pre>\\n<figure><img src=\\"/assets/Oracle_8_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<pre><code>select ename from emp where lower(ename) like '%s%';\\n</code></pre>","autoDesc":true}`);export{e as data};

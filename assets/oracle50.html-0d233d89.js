const e=JSON.parse('{"key":"v-c7eb561c","path":"/zh/programBlog/Database/Oracle/oracle50.html","title":"Oracle-SQL开发 ---- 单行函数","lang":"zh-CN","frontmatter":{"title":"Oracle-SQL开发 ---- 单行函数","icon":"page","order":50,"author":"涎涎","date":"2023-01-20T13:04:34.000Z","isOriginal":true,"permalinkPattern":"programBlog/Database/Oracle/oracle50.html","category":["Oracle"],"tag":["Oracle"],"head":[["meta",{"name":"keywords","content":"Oracle-SQL开发 ---- 单行函数"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/Database/Oracle/oracle50.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Oracle-SQL开发 ---- 单行函数"}],["meta",{"property":"og:description","content":"50-Oracle-SQL开发 ---- 单行函数.md 概念 数值函数 ROUND:将列或表达式所表示的数值四舍五入到小数点后的第n位。 格式: ROUND(column| expression, n) ROUND(45.926, 2) -&gt; 45.93 TRUNC:将列或表达式所表示的数值截取到小数点后的第n位。 格式：TRUNC(column| expression, n) TRUNC(45.926, 2) -&gt; 45.92 MOD:取m除以n后得到的余数 格式：MOD(m,n) MOD(1600, 300) -&gt;100 DUAL：是一张虚表，不能保存任何数据，只有一个字段，一行记录。当我们不希望从任何表中读取数据，同时又想利用SQL引擎中的计算表达式的能力帮我们运算时，就可以使用DUAL表。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T04:53:46.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Oracle"}],["meta",{"property":"article:published_time","content":"2023-01-20T13:04:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T04:53:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Oracle-SQL开发 ---- 单行函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-20T13:04:34.000Z\\",\\"dateModified\\":\\"2023-05-30T04:53:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"50-Oracle-SQL开发 ---- 单行函数.md 概念 数值函数 ROUND:将列或表达式所表示的数值四舍五入到小数点后的第n位。 格式: ROUND(column| expression, n) ROUND(45.926, 2) -&gt; 45.93 TRUNC:将列或表达式所表示的数值截取到小数点后的第n位。 格式：TRUNC(column| expression, n) TRUNC(45.926, 2) -&gt; 45.92 MOD:取m除以n后得到的余数 格式：MOD(m,n) MOD(1600, 300) -&gt;100 DUAL：是一张虚表，不能保存任何数据，只有一个字段，一行记录。当我们不希望从任何表中读取数据，同时又想利用SQL引擎中的计算表达式的能力帮我们运算时，就可以使用DUAL表。"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685422426000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":4}]},"readingTime":{"minutes":10.47,"words":3141},"filePathRelative":"zh/programBlog/Database/Oracle/50-Oracle-SQL开发 ---- 单行函数.md","localizedDate":"2023年1月20日","excerpt":"<!-- more -->\\n<h1> 50-Oracle-SQL开发 ---- <a href=\\"http://xn--bbrp6al11b316a.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">单行函数.md</a></h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_50_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<ul>\\n<li>\\n<p>数值函数</p>\\n<ul>\\n<li>\\n<p>ROUND:将列或表达式所表示的数值四舍五入到小数点后的第n位。</p>\\n</li>\\n<li>\\n<p>格式: ROUND(column| expression, n) ROUND(45.926, 2) -&gt; 45.93</p>\\n</li>\\n<li>\\n<p>TRUNC:将列或表达式所表示的数值截取到小数点后的第n位。</p>\\n</li>\\n<li>\\n<p>格式：TRUNC(column| expression, n) TRUNC(45.926, 2) -&gt; 45.92</p>\\n</li>\\n<li>\\n<p>MOD:取m除以n后得到的余数</p>\\n</li>\\n<li>\\n<p>格式：MOD(m,n) MOD(1600, 300) -&gt;100</p>\\n</li>\\n<li>\\n<p>DUAL：是一张虚表，不能保存任何数据，只有一个字段，一行记录。当我们不希望从任何表中读取数据，同时又想利用SQL引擎中的计算表达式的能力帮我们运算时，就可以使用DUAL表。</p>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};

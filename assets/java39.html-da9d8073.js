const t=JSON.parse('{"key":"v-e45ebca0","path":"/zh/programBlog/ServerSideLanguage/Java/java39.html","title":"Java-习题测试(7-17)","lang":"zh-CN","frontmatter":{"title":"Java-习题测试(7-17)","icon":"page","order":39,"author":"涎涎","date":"2019-06-16T22:32:24.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java39.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-习题测试(7-17)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java39.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-习题测试(7-17)"}],["meta",{"property":"og:description","content":"Java-习题测试(7-17) 题目：打印出所有的\\"水仙花数\\"，所谓\\"水仙花数\\"是指一个三位数， 其各位数字立方和等于该数本身。例如：153是一个\\"水仙花数\\"， 因为153=1的三次方＋5的三次方＋3的三次方。 public class Topic1 { \\t/* \\t * 1、题目：打印出所有的\\"水仙花数\\"，所谓\\"水仙花数\\"是指一个三位数， \\t * 其各位数字立方和等于该数本身。例如：153是一个\\"水仙花数\\"， \\t * 因为153=1的三次方＋5的三次方＋3的三次方。 \\t */ \\tpublic static void daffodilNumber() { \\t\\tfor(int i = 100;i &lt; 999;i++) { \\t\\t\\t/** \\t\\t\\t * 1、求得int i 的各个位数的数值 \\t\\t\\t * 2、将其各个位数的值自相乘 \\t\\t\\t * 3、将其自相乘的值相加 \\t\\t\\t * 4、将其相加的值与其本身值相比较 \\t\\t\\t * 若相等则打印输出 若不相等则不打印 \\t\\t\\t * @param args \\t\\t\\t */ \\t\\t\\tint i_b = i/100,//i的百位数值 \\t\\t\\t\\ti_s = i % 100 / 10,//i的十位数据 \\t\\t\\t\\ti_g = i % 100 % 10;//i的个位数值 \\t\\t\\tif(i == i_b * i_b * i_b + i_s * i_s * i_s + i_g * i_g * i_g) { \\t\\t\\t\\tSystem.out.println(i); \\t\\t\\t} \\t\\t} \\t} \\t\\t\\t\\t \\tpublic static void main(String[] args) { \\t\\tdaffodilNumber(); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:32:24.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-习题测试(7-17)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:32:24.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-习题测试(7-17) 题目：打印出所有的\\"水仙花数\\"，所谓\\"水仙花数\\"是指一个三位数， 其各位数字立方和等于该数本身。例如：153是一个\\"水仙花数\\"， 因为153=1的三次方＋5的三次方＋3的三次方。 public class Topic1 { \\t/* \\t * 1、题目：打印出所有的\\"水仙花数\\"，所谓\\"水仙花数\\"是指一个三位数， \\t * 其各位数字立方和等于该数本身。例如：153是一个\\"水仙花数\\"， \\t * 因为153=1的三次方＋5的三次方＋3的三次方。 \\t */ \\tpublic static void daffodilNumber() { \\t\\tfor(int i = 100;i &lt; 999;i++) { \\t\\t\\t/** \\t\\t\\t * 1、求得int i 的各个位数的数值 \\t\\t\\t * 2、将其各个位数的值自相乘 \\t\\t\\t * 3、将其自相乘的值相加 \\t\\t\\t * 4、将其相加的值与其本身值相比较 \\t\\t\\t * 若相等则打印输出 若不相等则不打印 \\t\\t\\t * @param args \\t\\t\\t */ \\t\\t\\tint i_b = i/100,//i的百位数值 \\t\\t\\t\\ti_s = i % 100 / 10,//i的十位数据 \\t\\t\\t\\ti_g = i % 100 % 10;//i的个位数值 \\t\\t\\tif(i == i_b * i_b * i_b + i_s * i_s * i_s + i_g * i_g * i_g) { \\t\\t\\t\\tSystem.out.println(i); \\t\\t\\t} \\t\\t} \\t} \\t\\t\\t\\t \\tpublic static void main(String[] args) { \\t\\tdaffodilNumber(); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":5.42,"words":1626},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/39-Java-习题测试(7-17).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-习题测试(7-17)</h1>\\n<ol>\\n<li>题目：打印出所有的\\"水仙花数\\"，所谓\\"水仙花数\\"是指一个三位数，  其各位数字立方和等于该数本身。例如：153是一个\\"水仙花数\\"， 因为153=1的三次方＋5的三次方＋3的三次方。</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>public class Topic1 {\\n\\t/*\\n\\t * 1、题目：打印出所有的\\"水仙花数\\"，所谓\\"水仙花数\\"是指一个三位数，\\n\\t *  其各位数字立方和等于该数本身。例如：153是一个\\"水仙花数\\"，\\n\\t * 因为153=1的三次方＋5的三次方＋3的三次方。\\n\\t */\\n\\tpublic static void daffodilNumber() {\\n\\t\\tfor(int i = 100;i &lt; 999;i++) {\\n\\t\\t\\t/**\\n\\t\\t\\t * 1、求得int i 的各个位数的数值\\n\\t\\t\\t * 2、将其各个位数的值自相乘\\n\\t\\t\\t * 3、将其自相乘的值相加\\n\\t\\t\\t * 4、将其相加的值与其本身值相比较\\n\\t\\t\\t  *  若相等则打印输出 若不相等则不打印\\n\\t\\t\\t * @param args\\n\\t\\t\\t */\\n\\t\\t\\tint i_b = i/100,//i的百位数值\\n\\t\\t\\t\\ti_s = i % 100 / 10,//i的十位数据\\n\\t\\t\\t\\ti_g = i % 100 % 10;//i的个位数值\\n\\t\\t\\tif(i == i_b * i_b * i_b + i_s * i_s * i_s + i_g * i_g * i_g)\\n           {\\n\\t\\t\\t\\tSystem.out.println(i);\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\t\\t\\t\\t\\n\\tpublic static void main(String[] args) {\\n\\t\\tdaffodilNumber();\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

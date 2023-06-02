const l=JSON.parse('{"key":"v-e1f1e036","path":"/zh/programBlog/ServerSideLanguage/Java/java7.html","title":"Java基础应用编程—— 变量和运算符","lang":"zh-CN","frontmatter":{"title":"Java基础应用编程—— 变量和运算符","icon":"page","order":7,"author":"涎涎","date":"2019-06-16T21:16:31.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java7.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java基础应用编程—— 变量和运算符"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java7.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java基础应用编程—— 变量和运算符"}],["meta",{"property":"og:description","content":"Java基础应用编程—— 变量和运算符 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 本章内容"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T09:56:49.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:16:31.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T09:56:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础应用编程—— 变量和运算符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:16:31.000Z\\",\\"dateModified\\":\\"2023-06-02T09:56:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java基础应用编程—— 变量和运算符 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 本章内容"},"headers":[{"level":2,"title":"本章内容","slug":"本章内容","link":"#本章内容","children":[]},{"level":2,"title":"Java程序结构","slug":"java程序结构","link":"#java程序结构","children":[{"level":3,"title":"Java程序结构","slug":"java程序结构-1","link":"#java程序结构-1","children":[]}]},{"level":2,"title":"标识符、关键字和保留字","slug":"标识符、关键字和保留字","link":"#标识符、关键字和保留字","children":[{"level":3,"title":"标识符","slug":"标识符","link":"#标识符","children":[]},{"level":3,"title":"关键字/保留字","slug":"关键字-保留字","link":"#关键字-保留字","children":[]},{"level":3,"title":"☻  练习判断下列哪些是合法的标识符：","slug":"☻-练习判断下列哪些是合法的标识符","link":"#☻-练习判断下列哪些是合法的标识符","children":[]},{"level":3,"title":"Java中的字面常量","slug":"java中的字面常量","link":"#java中的字面常量","children":[]},{"level":3,"title":"常量指程序里持续不变的值，在整个程序运行过程中它是不可改变的","slug":"常量指程序里持续不变的值-在整个程序运行过程中它是不可改变的","link":"#常量指程序里持续不变的值-在整个程序运行过程中它是不可改变的","children":[]},{"level":3,"title":"常见的字面量类型有：","slug":"常见的字面量类型有","link":"#常见的字面量类型有","children":[]},{"level":3,"title":"☻  练习","slug":"☻-练习","link":"#☻-练习","children":[]},{"level":3,"title":"常量—java7特性","slug":"常量—java7特性","link":"#常量—java7特性","children":[]},{"level":3,"title":"数值常量对下划线支持","slug":"数值常量对下划线支持","link":"#数值常量对下划线支持","children":[]},{"level":3,"title":"数值常量对下划线支持","slug":"数值常量对下划线支持-1","link":"#数值常量对下划线支持-1","children":[]},{"level":3,"title":"声明二进制常量","slug":"声明二进制常量","link":"#声明二进制常量","children":[]}]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[{"level":3,"title":"变量的概念","slug":"变量的概念","link":"#变量的概念","children":[]},{"level":3,"title":"变量的声明","slug":"变量的声明","link":"#变量的声明","children":[]}]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[{"level":3,"title":"数据类型及分类","slug":"数据类型及分类","link":"#数据类型及分类","children":[]},{"level":3,"title":"整数类型 — byte、short、int默认、long","slug":"整数类型-—-byte、short、int默认、long","link":"#整数类型-—-byte、short、int默认、long","children":[]},{"level":3,"title":"☻  练习","slug":"☻-练习-1","link":"#☻-练习-1","children":[]},{"level":3,"title":"浮点数类型 — float、double","slug":"浮点数类型-—-float、double","link":"#浮点数类型-—-float、double","children":[]},{"level":3,"title":"字符类型 — char","slug":"字符类型-—-char","link":"#字符类型-—-char","children":[]},{"level":3,"title":"例如：","slug":"例如","link":"#例如","children":[]},{"level":3,"title":"转义字符","slug":"转义字符","link":"#转义字符","children":[]},{"level":3,"title":"字符类型 — char","slug":"字符类型-—-char-1","link":"#字符类型-—-char-1","children":[]},{"level":3,"title":"☻  练习","slug":"☻-练习-2","link":"#☻-练习-2","children":[]},{"level":3,"title":"布尔类型 — boolean","slug":"布尔类型-—-boolean","link":"#布尔类型-—-boolean","children":[]},{"level":3,"title":"数据类型的转换规则","slug":"数据类型的转换规则","link":"#数据类型的转换规则","children":[]},{"level":3,"title":"自动类型转换（隐式类型转换）","slug":"自动类型转换-隐式类型转换","link":"#自动类型转换-隐式类型转换","children":[]},{"level":3,"title":"强制类型转换（显示类型转换）","slug":"强制类型转换-显示类型转换","link":"#强制类型转换-显示类型转换","children":[]}]},{"level":2,"title":"运算符","slug":"运算符","link":"#运算符","children":[{"level":3,"title":"运算符（操作符）","slug":"运算符-操作符","link":"#运算符-操作符","children":[]},{"level":3,"title":"算术运算符","slug":"算术运算符","link":"#算术运算符","children":[]},{"level":3,"title":"自增运算: ++, --","slug":"自增运算","link":"#自增运算","children":[]},{"level":3,"title":"☻  练习    TestMod.java","slug":"☻-练习-testmod-java","link":"#☻-练习-testmod-java","children":[]},{"level":3,"title":"赋值运算符","slug":"赋值运算符","link":"#赋值运算符","children":[]},{"level":3,"title":"关系运算符（比较运算符）","slug":"关系运算符-比较运算符","link":"#关系运算符-比较运算符","children":[]},{"level":3,"title":"逻辑运算符（布尔运算符）","slug":"逻辑运算符-布尔运算符","link":"#逻辑运算符-布尔运算符","children":[]},{"level":3,"title":"位运算(只对byte、short、char、int、long有效)","slug":"位运算-只对byte、short、char、int、long有效","link":"#位运算-只对byte、short、char、int、long有效","children":[]},{"level":3,"title":"逻辑与或同按位与或是有一定区别的：","slug":"逻辑与或同按位与或是有一定区别的","link":"#逻辑与或同按位与或是有一定区别的","children":[]},{"level":3,"title":"短路运算","slug":"短路运算","link":"#短路运算","children":[]},{"level":3,"title":"练习    TestAnd.java","slug":"练习-testand-java","link":"#练习-testand-java","children":[]},{"level":3,"title":"三元运算符","slug":"三元运算符","link":"#三元运算符","children":[]},{"level":3,"title":"运算符的优先级","slug":"运算符的优先级","link":"#运算符的优先级","children":[]}]},{"level":2,"title":"表达式","slug":"表达式","link":"#表达式","children":[{"level":3,"title":"表达式","slug":"表达式-1","link":"#表达式-1","children":[]},{"level":3,"title":"表达式的值和类型","slug":"表达式的值和类型","link":"#表达式的值和类型","children":[]},{"level":3,"title":"表达式的运算顺序","slug":"表达式的运算顺序","link":"#表达式的运算顺序","children":[]},{"level":3,"title":"表达式的结合方向和优先级 ★","slug":"表达式的结合方向和优先级-★","link":"#表达式的结合方向和优先级-★","children":[]},{"level":3,"title":"☻ 练习","slug":"☻-练习-3","link":"#☻-练习-3","children":[]}]},{"level":2,"title":"本章重点总结","slug":"本章重点总结","link":"#本章重点总结","children":[{"level":3,"title":"变量的声明和使用","slug":"变量的声明和使用","link":"#变量的声明和使用","children":[]},{"level":3,"title":"Java中的数据类型及转换","slug":"java中的数据类型及转换","link":"#java中的数据类型及转换","children":[]},{"level":3,"title":"Java中的运算符","slug":"java中的运算符","link":"#java中的运算符","children":[]},{"level":3,"title":"表达式","slug":"表达式-2","link":"#表达式-2","children":[]}]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685699809000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":7}]},"readingTime":{"minutes":13.52,"words":4055},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/7-Java基础应用编程—— 变量和运算符.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java基础应用编程—— 变量和运算符</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h2> 本章内容</h2>\\n<figure><img src=\\"/assets/Java_7_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{l as data};

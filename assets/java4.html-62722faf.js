const e=JSON.parse('{"key":"v-ec2ef3f0","path":"/zh/programBlog/ServerSideLanguage/Java/java4.html","title":"Java基础应用编程—— 流程控制语句","lang":"zh-CN","frontmatter":{"title":"Java基础应用编程—— 流程控制语句","icon":"page","order":4,"author":"涎涎","date":"2019-06-16T21:15:17.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java4.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java基础应用编程—— 流程控制语句"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java4.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java基础应用编程—— 流程控制语句"}],["meta",{"property":"og:description","content":"Java基础应用编程—— 流程控制语句 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 本章内容"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-03T23:41:08.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T21:15:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-03T23:41:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础应用编程—— 流程控制语句\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T21:15:17.000Z\\",\\"dateModified\\":\\"2023-06-03T23:41:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java基础应用编程—— 流程控制语句 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 本章内容"},"headers":[{"level":2,"title":"本章内容","slug":"本章内容","link":"#本章内容","children":[]},{"level":2,"title":"条件语句","slug":"条件语句","link":"#条件语句","children":[{"level":3,"title":"if语句 (单一条件)","slug":"if语句-单一条件","link":"#if语句-单一条件","children":[]},{"level":3,"title":"执行流程","slug":"执行流程","link":"#执行流程","children":[]},{"level":3,"title":"if语句","slug":"if语句","link":"#if语句","children":[]},{"level":3,"title":"☻ 练习   If_exercise.java","slug":"☻-练习-if-exercise-java","link":"#☻-练习-if-exercise-java","children":[]},{"level":3,"title":"if语句(二选一)","slug":"if语句-二选一","link":"#if语句-二选一","children":[]},{"level":3,"title":"变量 = 布尔表达式 ? 语句1:语句2","slug":"变量-布尔表达式-语句1-语句2","link":"#变量-布尔表达式-语句1-语句2","children":[]},{"level":3,"title":"if语句","slug":"if语句-1","link":"#if语句-1","children":[]},{"level":3,"title":"☻ 练习   IfElse_exercise.java","slug":"☻-练习-ifelse-exercise-java","link":"#☻-练习-ifelse-exercise-java","children":[]}]},{"level":2,"title":"条件语句","slug":"条件语句-1","link":"#条件语句-1","children":[{"level":3,"title":"switch语句","slug":"switch语句","link":"#switch语句","children":[]},{"level":3,"title":"在JDK7中，在switch中可以使用String类型，注意比较是大小写敏感的。","slug":"在jdk7中-在switch中可以使用string类型-注意比较是大小写敏感的。","link":"#在jdk7中-在switch中可以使用string类型-注意比较是大小写敏感的。","children":[]},{"level":3,"title":"☻ 练习   Switch_exercise.java","slug":"☻-练习-switch-exercise-java","link":"#☻-练习-switch-exercise-java","children":[]}]},{"level":2,"title":"循环语句","slug":"循环语句","link":"#循环语句","children":[{"level":3,"title":"while循环","slug":"while循环","link":"#while循环","children":[]},{"level":3,"title":"执行流程","slug":"执行流程-1","link":"#执行流程-1","children":[]},{"level":3,"title":"☻ 练习   While_exercise.java","slug":"☻-练习-while-exercise-java","link":"#☻-练习-while-exercise-java","children":[]},{"level":3,"title":"☻ 练习   While_exercise2.java","slug":"☻-练习-while-exercise2-java","link":"#☻-练习-while-exercise2-java","children":[]},{"level":3,"title":"☻ 练习   While_exercise3.java","slug":"☻-练习-while-exercise3-java","link":"#☻-练习-while-exercise3-java","children":[]},{"level":3,"title":"do…while循环","slug":"do-while循环","link":"#do-while循环","children":[]},{"level":3,"title":"执行流程","slug":"执行流程-2","link":"#执行流程-2","children":[]},{"level":3,"title":"☻ 练习   DoWhile_exercise.java","slug":"☻-练习-dowhile-exercise-java","link":"#☻-练习-dowhile-exercise-java","children":[]},{"level":3,"title":"for循环","slug":"for循环","link":"#for循环","children":[]},{"level":3,"title":"示例     For_sample.java","slug":"示例-for-sample-java","link":"#示例-for-sample-java","children":[]},{"level":3,"title":"☻ 练习   For_exercise.java","slug":"☻-练习-for-exercise-java","link":"#☻-练习-for-exercise-java","children":[]},{"level":3,"title":"☻ 练习   For_exercise2.java","slug":"☻-练习-for-exercise2-java","link":"#☻-练习-for-exercise2-java","children":[]},{"level":3,"title":"死循环","slug":"死循环","link":"#死循环","children":[]},{"level":3,"title":"循环嵌套","slug":"循环嵌套","link":"#循环嵌套","children":[]},{"level":3,"title":"循环的中断","slug":"循环的中断","link":"#循环的中断","children":[]},{"level":3,"title":"示例            Break_Sample.java","slug":"示例-break-sample-java","link":"#示例-break-sample-java","children":[]},{"level":3,"title":"示例       Continue_Sample.java","slug":"示例-continue-sample-java","link":"#示例-continue-sample-java","children":[]}]},{"level":2,"title":"本章重点总结","slug":"本章重点总结","link":"#本章重点总结","children":[{"level":3,"title":"条件语句","slug":"条件语句-2","link":"#条件语句-2","children":[]},{"level":3,"title":"循环控制语句","slug":"循环控制语句","link":"#循环控制语句","children":[]}]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685835668000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":9}]},"readingTime":{"minutes":7.73,"words":2320},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/4-Java基础应用编程—— 流程控制语句.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java基础应用编程—— 流程控制语句</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h2> 本章内容</h2>\\n<figure><img src=\\"/assets/Java_4_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{e as data};

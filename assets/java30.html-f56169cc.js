const t=JSON.parse('{"key":"v-7e750419","path":"/zh/programBlog/ServerSideLanguage/Java/java30.html","title":"Java中级测试题一-工具类(8-8)","lang":"zh-CN","frontmatter":{"title":"Java中级测试题一-工具类(8-8)","icon":"page","order":30,"author":"涎涎","date":"2019-06-16T22:12:56.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java30.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java中级测试题一-工具类(8-8)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java30.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java中级测试题一-工具类(8-8)"}],["meta",{"property":"og:description","content":"Java中级测试题一-工具类(8-8) 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和。 public class Task { \\t \\t/* \\t * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和 \\t * \\t * 暂未考虑输入的不是数值型的字符串异常 \\t * \\t */ \\tpublic static void sumNumString() { \\t\\tjava.util.Scanner scanner = new java.util.Scanner(System.in); \\t\\tSystem.out.println(\\"请输入第一个数字\\"); \\t\\tString numString1 = scanner.next(); \\t\\tSystem.out.println(\\"请输入第二个数字\\"); \\t\\tString numString2 = scanner.next(); \\t\\tSystem.out.println(\\"两个数字和为：\\" + \\t\\t(Integer.parseInt(numString1) + Integer.parseInt(numString2))); \\t} \\tpublic static void main(String[] args) { \\t\\tsumNumString();//1 \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T09:56:49.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:12:56.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T09:56:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中级测试题一-工具类(8-8)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:12:56.000Z\\",\\"dateModified\\":\\"2023-06-02T09:56:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java中级测试题一-工具类(8-8) 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和。 public class Task { \\t \\t/* \\t * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和 \\t * \\t * 暂未考虑输入的不是数值型的字符串异常 \\t * \\t */ \\tpublic static void sumNumString() { \\t\\tjava.util.Scanner scanner = new java.util.Scanner(System.in); \\t\\tSystem.out.println(\\"请输入第一个数字\\"); \\t\\tString numString1 = scanner.next(); \\t\\tSystem.out.println(\\"请输入第二个数字\\"); \\t\\tString numString2 = scanner.next(); \\t\\tSystem.out.println(\\"两个数字和为：\\" + \\t\\t(Integer.parseInt(numString1) + Integer.parseInt(numString2))); \\t} \\tpublic static void main(String[] args) { \\t\\tsumNumString();//1 \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685699809000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":7}]},"readingTime":{"minutes":6.5,"words":1949},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/30-Java中级测试题一-工具类(8-8).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java中级测试题一-工具类(8-8)</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<ol>\\n<li>编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和。</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>public class Task {\\n\\t\\n\\t/*\\n\\t * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值，并计算输出两个数值的和\\n\\t * \\n\\t * 暂未考虑输入的不是数值型的字符串异常\\n\\t * \\n\\t */\\n\\tpublic static void sumNumString() {\\n\\t\\tjava.util.Scanner scanner = new java.util.Scanner(System.in);\\n\\t\\tSystem.out.println(\\"请输入第一个数字\\");\\n\\t\\tString numString1 = scanner.next();\\n\\t\\tSystem.out.println(\\"请输入第二个数字\\");\\n\\t\\tString numString2 = scanner.next();\\n\\t\\tSystem.out.println(\\"两个数字和为：\\" +\\n\\t\\t(Integer.parseInt(numString1) + Integer.parseInt(numString2)));\\n\\t}\\n\\tpublic static void main(String[] args) {\\n\\t\\tsumNumString();//1\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

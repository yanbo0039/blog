const t=JSON.parse(`{"key":"v-d3606c16","path":"/zh/programBlog/ServerSideLanguage/Java/java89.html","title":"Java数组","lang":"zh-CN","frontmatter":{"title":"Java数组","icon":"page","order":89,"author":"涎涎","date":"2019-07-03T10:17:42.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java89.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java数组"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java89.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java数组"}],["meta",{"property":"og:description","content":"89-Java数组.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 package net.tencent.demo.test; public class TestArray1 { \\tpublic static void main(String[] args) { \\t\\t//声明一个变量a，整数数组类型 \\t\\tint[] a = {12,23,44,55,66}; \\t\\t//声明一个变量b，String数组类型 \\t\\tString[] b = {\\"abc\\",\\"124\\",\\"666\\"}; \\t\\t \\t\\tdouble[] c = {12.34,45.66,77.890,99}; \\t\\t \\t\\tchar[] d = {'中','a','\\\\n','\\\\u1234',123}; \\t\\t \\t\\tStudent stu1 = new Student(); \\t\\t \\t\\tStudent stu2 = new Student(); \\t\\t \\t\\tStudent[] e = {stu1,stu2}; \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-13T03:33:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-03T10:17:42.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-13T03:33:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java数组\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-03T10:17:42.000Z\\",\\"dateModified\\":\\"2023-06-13T03:33:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"89-Java数组.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 package net.tencent.demo.test; public class TestArray1 { \\tpublic static void main(String[] args) { \\t\\t//声明一个变量a，整数数组类型 \\t\\tint[] a = {12,23,44,55,66}; \\t\\t//声明一个变量b，String数组类型 \\t\\tString[] b = {\\"abc\\",\\"124\\",\\"666\\"}; \\t\\t \\t\\tdouble[] c = {12.34,45.66,77.890,99}; \\t\\t \\t\\tchar[] d = {'中','a','\\\\n','\\\\u1234',123}; \\t\\t \\t\\tStudent stu1 = new Student(); \\t\\t \\t\\tStudent stu2 = new Student(); \\t\\t \\t\\tStudent[] e = {stu1,stu2}; \\t} }"},"headers":[{"level":3,"title":"各类数组初始化报的默认值&如何输出数组中的元素","slug":"各类数组初始化报的默认值-如何输出数组中的元素","link":"#各类数组初始化报的默认值-如何输出数组中的元素","children":[]},{"level":3,"title":"数组的增删除改查&o数组的拷贝","slug":"数组的增删除改查-o数组的拷贝","link":"#数组的增删除改查-o数组的拷贝","children":[]},{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1686627231000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":9}]},"readingTime":{"minutes":2.64,"words":791},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/89-Java数组.md","localizedDate":"2019年7月3日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--89-Java-r02ou73p.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">89-Java数组.md</a></h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package net.tencent.demo.test;\\n\\npublic class TestArray1 {\\n\\n\\tpublic static void main(String[] args) {\\n\\n\\t\\t//声明一个变量a，整数数组类型\\n\\t\\tint[] a = {12,23,44,55,66};\\n\\t\\t//声明一个变量b，String数组类型\\n\\t\\tString[] b = {\\"abc\\",\\"124\\",\\"666\\"};\\n\\t\\t\\n\\t\\tdouble[] c = {12.34,45.66,77.890,99};\\n\\t\\t\\n\\t\\tchar[] d = {'中','a','\\\\n','\\\\u1234',123};\\n\\t\\t\\n\\t\\tStudent stu1 = new Student();\\n\\t\\t\\n\\t\\tStudent stu2 = new Student();\\n\\t\\t\\n\\t\\tStudent[] e = {stu1,stu2};\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
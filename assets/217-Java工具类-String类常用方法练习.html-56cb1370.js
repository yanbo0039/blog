const t=JSON.parse(`{"key":"v-ef8cb5a2","path":"/zh/programBlog/ServerSideLanguage/Java/217-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-String%E7%B1%BB%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E7%BB%83%E4%B9%A0.html","title":"Java工具类-String类常用方法练习","lang":"zh-CN","frontmatter":{"title":"Java工具类-String类常用方法练习","icon":"page","order":217,"author":"涎涎","date":"2023-01-12T15:27:08.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java工具类-String类常用方法练习"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/217-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-String%E7%B1%BB%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E7%BB%83%E4%B9%A0.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java工具类-String类常用方法练习"}],["meta",{"property":"og:description","content":"217-Java工具类-String类常用方法练习.md 字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数 package com.tencent.chapter01.String类.练习; /** * 3、【字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数。（识点：String中常用的方法） [必做题] */ public class _03 { \\tpublic static void main(String[] args) { \\t\\tString str = \\"1231elsdjfsdesdlfjslee\\"; \\t\\t \\t\\t//1.replace（）替换 \\t\\tint before = str.length(); \\t\\tstr = str.replace(\\"e\\", \\"\\"); \\t\\tint after = str.length(); \\t\\t \\t\\tSystem.out.println(\\"e出现的次数：\\" + (before - after)); \\t\\t \\t\\t//2.数组 \\t\\t/*String s = \\"1231elsdjfsdesdlfjslee\\"; \\t\\tint count = 0; \\t\\tString[] s2 = new String[s.length()]; \\t\\tfor (int i = 0; i &lt; s2.length; i++) { \\t\\t\\ts2[i] = s.substring(i, i + 1); \\t\\t} \\t\\tfor (int j = 0; j &lt; s2.length; j++) { \\t\\t\\tif (s2[j].indexOf('e') != -1) { \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/ \\t\\t \\t\\t/*int count = 0; \\t\\tchar[] chars = str.toCharArray(); \\t\\tfor (int i = 0; i &lt; chars.length; i++) { \\t\\t\\tif(chars[i] == 'e') \\t\\t\\t{ \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/ \\t\\t \\t\\t//3.遍历循环 \\t\\t/*int count = 0; \\t\\tfor (int i = 0; i &lt; str.length(); i++) { \\t\\t\\tif(str.charAt(i) == 'e') \\t\\t\\t{ \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/ \\t\\t \\t\\t//4.split分割字符串 \\t /*String[] array = (\\",\\" + str + \\",\\").split(\\"e\\"); \\t\\t \\t\\tSystem.out.println(Arrays.toString(array)); \\t\\tSystem.out.println(\\"e出现的次数：\\" + (array.length - 1));*/ \\t\\t \\t\\t \\t\\t//5.substring截取字符串 \\t\\tint count = 0; \\t\\twhile(str.indexOf(\\"e\\") != -1) \\t\\t{ \\t\\t\\tcount++; \\t\\t\\tstr = str.substring(str.indexOf(\\"e\\")+1); \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count); \\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-12T15:27:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java工具类-String类常用方法练习\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T15:27:08.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"217-Java工具类-String类常用方法练习.md 字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数 package com.tencent.chapter01.String类.练习; /** * 3、【字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数。（识点：String中常用的方法） [必做题] */ public class _03 { \\tpublic static void main(String[] args) { \\t\\tString str = \\"1231elsdjfsdesdlfjslee\\"; \\t\\t \\t\\t//1.replace（）替换 \\t\\tint before = str.length(); \\t\\tstr = str.replace(\\"e\\", \\"\\"); \\t\\tint after = str.length(); \\t\\t \\t\\tSystem.out.println(\\"e出现的次数：\\" + (before - after)); \\t\\t \\t\\t//2.数组 \\t\\t/*String s = \\"1231elsdjfsdesdlfjslee\\"; \\t\\tint count = 0; \\t\\tString[] s2 = new String[s.length()]; \\t\\tfor (int i = 0; i &lt; s2.length; i++) { \\t\\t\\ts2[i] = s.substring(i, i + 1); \\t\\t} \\t\\tfor (int j = 0; j &lt; s2.length; j++) { \\t\\t\\tif (s2[j].indexOf('e') != -1) { \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/ \\t\\t \\t\\t/*int count = 0; \\t\\tchar[] chars = str.toCharArray(); \\t\\tfor (int i = 0; i &lt; chars.length; i++) { \\t\\t\\tif(chars[i] == 'e') \\t\\t\\t{ \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/ \\t\\t \\t\\t//3.遍历循环 \\t\\t/*int count = 0; \\t\\tfor (int i = 0; i &lt; str.length(); i++) { \\t\\t\\tif(str.charAt(i) == 'e') \\t\\t\\t{ \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/ \\t\\t \\t\\t//4.split分割字符串 \\t /*String[] array = (\\",\\" + str + \\",\\").split(\\"e\\"); \\t\\t \\t\\tSystem.out.println(Arrays.toString(array)); \\t\\tSystem.out.println(\\"e出现的次数：\\" + (array.length - 1));*/ \\t\\t \\t\\t \\t\\t//5.substring截取字符串 \\t\\tint count = 0; \\t\\twhile(str.indexOf(\\"e\\") != -1) \\t\\t{ \\t\\t\\tcount++; \\t\\t\\tstr = str.substring(str.indexOf(\\"e\\")+1); \\t\\t} \\t\\tSystem.out.println(\\"e出现的次数：\\" + count); \\t} \\t }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":1.62,"words":486},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/217-Java工具类-String类常用方法练习.md","localizedDate":"2023年1月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--217-Java-String-bo4x879apq8ckkbz56f9g5apj2b5g9aha817l.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">217-Java工具类-String类常用方法练习.md</a></h1>\\n<h4> 字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter01.String类.练习;\\n\\n/**\\n * 3、【字符串】编写一个程序，实现从命令行参数输入一字符串，统计该字符串中字符“e”出现的次数。（识点：String中常用的方法） [必做题]\\n */\\npublic class _03 {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tString str = \\"1231elsdjfsdesdlfjslee\\";\\n\\t\\t\\n\\t\\t//1.replace（）替换\\n\\t\\tint before = str.length();\\n\\t\\tstr = str.replace(\\"e\\", \\"\\");\\n\\t\\tint after = str.length();\\n\\t\\t\\n\\t\\tSystem.out.println(\\"e出现的次数：\\" + (before - after));\\n\\t\\t\\n\\t\\t//2.数组\\n\\t\\t/*String s = \\"1231elsdjfsdesdlfjslee\\";\\n\\t\\tint count = 0;\\n\\t\\tString[] s2 = new String[s.length()];\\n\\t\\tfor (int i = 0; i &lt; s2.length; i++) {\\n\\t\\t\\ts2[i] = s.substring(i, i + 1);\\n\\t\\t}\\n\\t\\tfor (int j = 0; j &lt; s2.length; j++) {\\n\\t\\t\\tif (s2[j].indexOf('e') != -1) {\\n\\t\\t\\t\\tcount++;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/\\n\\t\\t\\n\\t\\t/*int count = 0;\\n\\t\\tchar[] chars = str.toCharArray();\\n\\t\\tfor (int i = 0; i &lt; chars.length; i++) {\\n\\t\\t\\tif(chars[i] == 'e')\\n\\t\\t\\t{\\n\\t\\t\\t\\tcount++;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/\\n\\t\\t\\n\\n\\t\\t//3.遍历循环\\n\\t\\t/*int count = 0;\\n\\t\\tfor (int i = 0; i &lt; str.length(); i++) {\\n\\t\\t\\tif(str.charAt(i) == 'e')\\n\\t\\t\\t{\\n\\t\\t\\t\\tcount++;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\tSystem.out.println(\\"e出现的次数：\\" + count);*/\\n\\t\\t\\n\\t\\t//4.split分割字符串\\n\\t   /*String[] array = (\\",\\" + str + \\",\\").split(\\"e\\");\\n\\t\\t\\n\\t\\tSystem.out.println(Arrays.toString(array));\\n\\t\\tSystem.out.println(\\"e出现的次数：\\" + (array.length - 1));*/\\n\\t\\t\\n\\t\\t\\n\\t\\t//5.substring截取字符串\\n\\t\\tint count = 0;\\n\\t\\twhile(str.indexOf(\\"e\\") != -1)\\n\\t\\t{\\n\\t\\t\\tcount++;\\n\\t\\t\\tstr = str.substring(str.indexOf(\\"e\\")+1);\\n\\t\\t}\\n\\t\\tSystem.out.println(\\"e出现的次数：\\" + count);\\n\\t}\\n\\t\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};

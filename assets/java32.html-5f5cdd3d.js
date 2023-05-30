const t=JSON.parse('{"key":"v-fc429552","path":"/zh/programBlog/ServerSideLanguage/Java/java32.html","title":"Java中级测试题三-文件与流(4-4)","lang":"zh-CN","frontmatter":{"title":"Java中级测试题三-文件与流(4-4)","icon":"page","order":32,"author":"涎涎","date":"2019-06-16T22:13:54.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java32.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java中级测试题三-文件与流(4-4)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java32.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java中级测试题三-文件与流(4-4)"}],["meta",{"property":"og:description","content":"Java中级测试题三-文件与流(4-4) 在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下： 路径是xxx的文件夹内的文件有： 文件名：abc.txt 路径名：c:\\\\temp\\\\abc.txt -------------------------------------------- 文件名：def.txt 路径名：c:\\\\temp\\\\def.txt package highchapter3; import java.io.File; public class ReadFile { \\t/* \\t * 1、在本机的磁盘系统中，找一个文件夹，利用File类的提供方法， \\t * 列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下： \\t * 路径是xxx的文件夹内的文件有： \\t * \\t */ \\tstatic int totol = 0; \\tstatic int dirTotol = 0; \\tstatic String showFile(String path) { \\t\\tFile file = new File(path); \\t\\tString [] fileArr = file.list(); \\t\\tfor(int i=0;i&lt;fileArr.length;i++) { \\t\\t\\tString nowPath = path+\\"\\\\\\\\\\"+fileArr[i]; \\t\\t\\tFile file1 = new File(nowPath); \\t\\t\\tif(file1.isDirectory()) { \\t\\t\\t\\tshowFile(nowPath); \\t\\t\\t\\tdirTotol++; \\t\\t\\t} \\t\\t\\telse { \\t\\t\\t\\tSystem.out.println(\\"文件名:\\"+file1.getName()); \\t\\t\\t\\tSystem.out.println(\\"路径名:\\"+nowPath); \\t\\t\\t\\ttotol++; \\t\\t\\t\\tSystem.out.println(\\"-------------------------------------\\"); \\t\\t\\t} \\t\\t} \\t\\treturn \\"\\"; \\t} \\t \\tpublic static void main(String[] args) { \\t\\tSystem.out.println(\\"列出该文件夹中的所有文件的文件名和文件的路径\\"); \\t\\tshowFile(\\"D:\\\\\\\\\\\\\\\\Sublime\\"); \\t\\tSystem.out.println(\\"总共有\\"+totol+\\"个文件,文件夹有\\"+dirTotol+\\"个\\"); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T04:53:46.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:13:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T04:53:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中级测试题三-文件与流(4-4)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:13:54.000Z\\",\\"dateModified\\":\\"2023-05-30T04:53:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java中级测试题三-文件与流(4-4) 在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下： 路径是xxx的文件夹内的文件有： 文件名：abc.txt 路径名：c:\\\\temp\\\\abc.txt -------------------------------------------- 文件名：def.txt 路径名：c:\\\\temp\\\\def.txt package highchapter3; import java.io.File; public class ReadFile { \\t/* \\t * 1、在本机的磁盘系统中，找一个文件夹，利用File类的提供方法， \\t * 列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下： \\t * 路径是xxx的文件夹内的文件有： \\t * \\t */ \\tstatic int totol = 0; \\tstatic int dirTotol = 0; \\tstatic String showFile(String path) { \\t\\tFile file = new File(path); \\t\\tString [] fileArr = file.list(); \\t\\tfor(int i=0;i&lt;fileArr.length;i++) { \\t\\t\\tString nowPath = path+\\"\\\\\\\\\\"+fileArr[i]; \\t\\t\\tFile file1 = new File(nowPath); \\t\\t\\tif(file1.isDirectory()) { \\t\\t\\t\\tshowFile(nowPath); \\t\\t\\t\\tdirTotol++; \\t\\t\\t} \\t\\t\\telse { \\t\\t\\t\\tSystem.out.println(\\"文件名:\\"+file1.getName()); \\t\\t\\t\\tSystem.out.println(\\"路径名:\\"+nowPath); \\t\\t\\t\\ttotol++; \\t\\t\\t\\tSystem.out.println(\\"-------------------------------------\\"); \\t\\t\\t} \\t\\t} \\t\\treturn \\"\\"; \\t} \\t \\tpublic static void main(String[] args) { \\t\\tSystem.out.println(\\"列出该文件夹中的所有文件的文件名和文件的路径\\"); \\t\\tshowFile(\\"D:\\\\\\\\\\\\\\\\Sublime\\"); \\t\\tSystem.out.println(\\"总共有\\"+totol+\\"个文件,文件夹有\\"+dirTotol+\\"个\\"); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685422426000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":4}]},"readingTime":{"minutes":4.47,"words":1341},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/32-Java中级测试题三-文件与流(4-4).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java中级测试题三-文件与流(4-4)</h1>\\n<ol>\\n<li>在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下：</li>\\n</ol>\\n<p>路径是xxx的文件夹内的文件有：</p>\\n<pre><code>文件名：abc.txt\\n路径名：c:\\\\temp\\\\abc.txt \\n--------------------------------------------\\n文件名：def.txt\\n路径名：c:\\\\temp\\\\def.txt\\n</code></pre>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package highchapter3;\\n\\nimport java.io.File;\\n\\npublic class ReadFile {\\n\\t/*\\n\\t * 1、在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，\\n\\t * 列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下：\\n\\t * 路径是xxx的文件夹内的文件有：\\n\\t * \\n\\t */\\n\\tstatic int totol = 0;\\n\\tstatic int dirTotol = 0;\\n\\tstatic String showFile(String path) {\\n\\t\\tFile file = new File(path);\\n\\t\\tString [] fileArr = file.list();\\n\\t\\tfor(int i=0;i&lt;fileArr.length;i++) {\\n\\t\\t\\tString nowPath = path+\\"\\\\\\\\\\"+fileArr[i];\\n\\t\\t\\tFile file1 = new File(nowPath);\\n\\t\\t\\tif(file1.isDirectory()) {\\n\\t\\t\\t\\tshowFile(nowPath);\\n\\t\\t\\t\\tdirTotol++;\\n\\t\\t\\t}\\n\\t\\t\\telse {\\n\\t\\t\\t\\tSystem.out.println(\\"文件名:\\"+file1.getName());\\n\\t\\t\\t\\tSystem.out.println(\\"路径名:\\"+nowPath);\\n\\t\\t\\t\\ttotol++;\\n\\t\\t\\t\\tSystem.out.println(\\"-------------------------------------\\");\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\treturn \\"\\";\\n\\t}\\n\\t\\n\\tpublic static void main(String[] args) {\\n\\t\\tSystem.out.println(\\"列出该文件夹中的所有文件的文件名和文件的路径\\");\\n\\t\\tshowFile(\\"D:\\\\\\\\\\\\\\\\Sublime\\");\\n\\t\\tSystem.out.println(\\"总共有\\"+totol+\\"个文件,文件夹有\\"+dirTotol+\\"个\\");\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

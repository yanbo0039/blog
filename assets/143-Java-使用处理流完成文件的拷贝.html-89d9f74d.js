const t=JSON.parse('{"key":"v-fbce141e","path":"/zh/programBlog/ServerSideLanguage/Java/143-Java-%E4%BD%BF%E7%94%A8%E5%A4%84%E7%90%86%E6%B5%81%E5%AE%8C%E6%88%90%E6%96%87%E4%BB%B6%E7%9A%84%E6%8B%B7%E8%B4%9D.html","title":"Java-使用处理流完成文件的拷贝","lang":"zh-CN","frontmatter":{"title":"Java-使用处理流完成文件的拷贝","icon":"page","order":143,"author":"涎涎","date":"2019-07-16T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-使用处理流完成文件的拷贝"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/143-Java-%E4%BD%BF%E7%94%A8%E5%A4%84%E7%90%86%E6%B5%81%E5%AE%8C%E6%88%90%E6%96%87%E4%BB%B6%E7%9A%84%E6%8B%B7%E8%B4%9D.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-使用处理流完成文件的拷贝"}],["meta",{"property":"og:description","content":"143-Java-使用处理流完成文件的拷贝.md package 字符流的读写; import java.io.BufferedReader; import java.io.BufferedWriter; import java.io.File; import java.io.FileReader; import java.io.FileWriter; public class TestReadFile_manyContent { \\tpublic static void main(String[] args) { \\t\\tFile source = new File(\\"E:\\\\\\\\abc.txt\\"); \\t\\tFile dest = new File(\\"D:\\\\\\\\abc.txt\\"); \\t\\t //\\t\\tFileReader f; //\\t\\t //\\t\\tBufferedReader br; \\t\\t \\t\\t//jdk7的新写法，不用写finally语句块，可以自动释放资源 \\t\\ttry( \\t\\t\\t\\tBufferedReader br = new BufferedReader(new FileReader(source)); \\t\\t\\t\\tBufferedWriter bw = new BufferedWriter(new FileWriter(dest)); \\t\\t\\t\\t){ \\t\\t\\tString content = null; \\t\\t\\t \\t\\t\\twhile((content = br.readLine()) != null) { //\\t\\t\\t\\tSystem.out.println(content); \\t\\t\\t\\tbw.write(content); \\t\\t\\t\\tbw.newLine();//换行操作 \\t\\t\\t} \\t\\t}catch (Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-使用处理流完成文件的拷贝\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"143-Java-使用处理流完成文件的拷贝.md package 字符流的读写; import java.io.BufferedReader; import java.io.BufferedWriter; import java.io.File; import java.io.FileReader; import java.io.FileWriter; public class TestReadFile_manyContent { \\tpublic static void main(String[] args) { \\t\\tFile source = new File(\\"E:\\\\\\\\abc.txt\\"); \\t\\tFile dest = new File(\\"D:\\\\\\\\abc.txt\\"); \\t\\t //\\t\\tFileReader f; //\\t\\t //\\t\\tBufferedReader br; \\t\\t \\t\\t//jdk7的新写法，不用写finally语句块，可以自动释放资源 \\t\\ttry( \\t\\t\\t\\tBufferedReader br = new BufferedReader(new FileReader(source)); \\t\\t\\t\\tBufferedWriter bw = new BufferedWriter(new FileWriter(dest)); \\t\\t\\t\\t){ \\t\\t\\tString content = null; \\t\\t\\t \\t\\t\\twhile((content = br.readLine()) != null) { //\\t\\t\\t\\tSystem.out.println(content); \\t\\t\\t\\tbw.write(content); \\t\\t\\t\\tbw.newLine();//换行操作 \\t\\t\\t} \\t\\t}catch (Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/143-Java-使用处理流完成文件的拷贝.md","localizedDate":"2019年7月16日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--143-Java--e87n80ct36dyjhhtyb9c3tox66aiqznrec5hbn7k.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">143-Java-使用处理流完成文件的拷贝.md</a></h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package 字符流的读写;\\n\\nimport java.io.BufferedReader;\\nimport java.io.BufferedWriter;\\nimport java.io.File;\\nimport java.io.FileReader;\\nimport java.io.FileWriter;\\n\\npublic class TestReadFile_manyContent {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tFile source = new File(\\"E:\\\\\\\\abc.txt\\");\\n\\t\\tFile dest = new File(\\"D:\\\\\\\\abc.txt\\");\\n\\t\\t\\n//\\t\\tFileReader f;\\n//\\t\\t\\n//\\t\\tBufferedReader br;\\n\\t\\t\\n\\t\\t//jdk7的新写法，不用写finally语句块，可以自动释放资源\\n\\t\\ttry(\\n\\t\\t\\t\\tBufferedReader br = new BufferedReader(new FileReader(source));\\n\\t\\t\\t\\tBufferedWriter bw = new BufferedWriter(new FileWriter(dest));\\n\\t\\t\\t\\t){\\n\\t\\t\\tString content = null;\\n\\t\\t\\t\\n\\t\\t\\twhile((content = br.readLine()) != null) {\\n//\\t\\t\\t\\tSystem.out.println(content);\\n\\t\\t\\t\\tbw.write(content);\\n\\t\\t\\t\\tbw.newLine();//换行操作\\n\\t\\t\\t}\\n\\t\\t}catch (Exception e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

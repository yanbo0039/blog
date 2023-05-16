const t=JSON.parse('{"key":"v-4fd9d180","path":"/zh/programBlog/ServerSideLanguage/Java/238-Java%E6%96%87%E4%BB%B6%E4%B8%8E%E6%B5%81-%E6%96%87%E4%BB%B6%E4%B8%8E%E6%B5%81-BufferedReader%E4%B8%8EBufferWriter%E5%A4%84%E7%90%86%E6%B5%81.html","title":"Java文件与流-文件与流-BufferedReader与BufferWriter处理流","lang":"zh-CN","frontmatter":{"title":"Java文件与流-文件与流-BufferedReader与BufferWriter处理流","icon":"page","order":238,"author":"涎涎","date":"2023-01-14T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java文件与流-文件与流-BufferedReader与BufferWriter处理流"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/238-Java%E6%96%87%E4%BB%B6%E4%B8%8E%E6%B5%81-%E6%96%87%E4%BB%B6%E4%B8%8E%E6%B5%81-BufferedReader%E4%B8%8EBufferWriter%E5%A4%84%E7%90%86%E6%B5%81.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java文件与流-文件与流-BufferedReader与BufferWriter处理流"}],["meta",{"property":"og:description","content":"238-Java文件与流-文件与流-BufferedReader与BufferWriter处理流.md 示例代码 package com.tencent.chapter03.io流; import java.io.BufferedReader; import java.io.BufferedWriter; import java.io.FileNotFoundException; import java.io.FileReader; import java.io.FileWriter; import java.io.IOException; public class BufferedReaderAndBufferedWriter { \\t \\t/** \\t \\tFileReader:以字符为单位读取数据---节点流，能够直接访问外部文件 \\t \\tFileWriter:以字符为单位写出数据---节点流，能够直接访问外部文件 \\t \\t \\t \\tBufferedReader:以字符为单位读取数据---处理流，不能够直接访问外部文件 \\t \\t\\treadLine() 可以一行一行读取数据，特有的方法 \\t \\t \\t \\tBufferedWriter:以字符为单位写出数据---处理流，不能够直接访问外部文件 \\t \\t\\tnewLine() 可以换行输出数据，特有的方法 \\t */ \\tpublic static void main(String[] args) { \\t\\tBufferedReader reader = null; \\t\\tBufferedWriter writer = null; \\t\\ttry{ \\t\\t\\t//字符输入流（节点流） \\t\\t\\tFileReader in = new FileReader(\\"file/file.txt\\"); \\t\\t\\t//字符输入流（处理流） \\t\\t\\treader = new BufferedReader(in); \\t\\t\\t \\t\\t\\t//字符输出流（节点流） \\t\\t\\tFileWriter out = new FileWriter(\\"file/file_bak.txt\\"); \\t\\t\\t//字符输出流（处理流） \\t\\t\\twriter = new BufferedWriter(out); \\t\\t\\t \\t\\t\\tString line = null;//一行一行读取数据 \\t\\t\\twhile((line = reader.readLine()) != null) \\t\\t\\t{ \\t\\t\\t\\tSystem.out.println(\\"读取到的一行数据：\\" + line); \\t\\t\\t\\t \\t\\t\\t\\t//写入文件 \\t\\t\\t\\twriter.write(line); \\t\\t\\t\\twriter.newLine(); //输入换行符 \\t\\t\\t} \\t\\t\\t \\t\\t\\t//强制刷新 \\t\\t\\twriter.flush(); \\t\\t\\t \\t\\t} catch (FileNotFoundException e) { \\t\\t\\te.printStackTrace(); \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally { \\t\\t\\t//注意二.....................释放资源、关闭资源 \\t\\t\\t//使用顺序：reader -&gt; writer \\t\\t\\t//关闭顺序：writer -&gt; reader \\t\\t\\ttry { \\t\\t\\t\\tif(writer != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\twriter.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t\\t \\t\\t\\ttry { \\t\\t\\t\\tif(reader != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\treader.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java文件与流-文件与流-BufferedReader与BufferWriter处理流\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"238-Java文件与流-文件与流-BufferedReader与BufferWriter处理流.md 示例代码 package com.tencent.chapter03.io流; import java.io.BufferedReader; import java.io.BufferedWriter; import java.io.FileNotFoundException; import java.io.FileReader; import java.io.FileWriter; import java.io.IOException; public class BufferedReaderAndBufferedWriter { \\t \\t/** \\t \\tFileReader:以字符为单位读取数据---节点流，能够直接访问外部文件 \\t \\tFileWriter:以字符为单位写出数据---节点流，能够直接访问外部文件 \\t \\t \\t \\tBufferedReader:以字符为单位读取数据---处理流，不能够直接访问外部文件 \\t \\t\\treadLine() 可以一行一行读取数据，特有的方法 \\t \\t \\t \\tBufferedWriter:以字符为单位写出数据---处理流，不能够直接访问外部文件 \\t \\t\\tnewLine() 可以换行输出数据，特有的方法 \\t */ \\tpublic static void main(String[] args) { \\t\\tBufferedReader reader = null; \\t\\tBufferedWriter writer = null; \\t\\ttry{ \\t\\t\\t//字符输入流（节点流） \\t\\t\\tFileReader in = new FileReader(\\"file/file.txt\\"); \\t\\t\\t//字符输入流（处理流） \\t\\t\\treader = new BufferedReader(in); \\t\\t\\t \\t\\t\\t//字符输出流（节点流） \\t\\t\\tFileWriter out = new FileWriter(\\"file/file_bak.txt\\"); \\t\\t\\t//字符输出流（处理流） \\t\\t\\twriter = new BufferedWriter(out); \\t\\t\\t \\t\\t\\tString line = null;//一行一行读取数据 \\t\\t\\twhile((line = reader.readLine()) != null) \\t\\t\\t{ \\t\\t\\t\\tSystem.out.println(\\"读取到的一行数据：\\" + line); \\t\\t\\t\\t \\t\\t\\t\\t//写入文件 \\t\\t\\t\\twriter.write(line); \\t\\t\\t\\twriter.newLine(); //输入换行符 \\t\\t\\t} \\t\\t\\t \\t\\t\\t//强制刷新 \\t\\t\\twriter.flush(); \\t\\t\\t \\t\\t} catch (FileNotFoundException e) { \\t\\t\\te.printStackTrace(); \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally { \\t\\t\\t//注意二.....................释放资源、关闭资源 \\t\\t\\t//使用顺序：reader -&gt; writer \\t\\t\\t//关闭顺序：writer -&gt; reader \\t\\t\\ttry { \\t\\t\\t\\tif(writer != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\twriter.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t\\t \\t\\t\\ttry { \\t\\t\\t\\tif(reader != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\treader.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} \\t} }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/238-Java文件与流-文件与流-BufferedReader与BufferWriter处理流.md","localizedDate":"2023年1月14日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--238-Java--BufferedReaderBufferWriter-0x31dbap573gca1529hforfda2210gea3a7924f.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">238-Java文件与流-文件与流-BufferedReader与BufferWriter处理流.md</a></h1>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter03.io流;\\n\\nimport java.io.BufferedReader;\\nimport java.io.BufferedWriter;\\nimport java.io.FileNotFoundException;\\nimport java.io.FileReader;\\nimport java.io.FileWriter;\\nimport java.io.IOException;\\n\\npublic class BufferedReaderAndBufferedWriter {\\n\\t\\n\\t/**\\n\\t \\tFileReader:以字符为单位读取数据---节点流，能够直接访问外部文件\\n\\t \\tFileWriter:以字符为单位写出数据---节点流，能够直接访问外部文件\\n\\t \\t\\n\\t \\tBufferedReader:以字符为单位读取数据---处理流，不能够直接访问外部文件\\n\\t \\t\\treadLine() 可以一行一行读取数据，特有的方法\\n\\t \\t\\n\\t \\tBufferedWriter:以字符为单位写出数据---处理流，不能够直接访问外部文件\\n\\t \\t\\tnewLine() 可以换行输出数据，特有的方法\\n\\t */\\n\\tpublic static void main(String[] args) {\\n\\t\\tBufferedReader reader = null;\\n\\t\\tBufferedWriter writer = null;\\n\\t\\ttry{\\n\\t\\t\\t//字符输入流（节点流）\\n\\t\\t\\tFileReader in = new FileReader(\\"file/file.txt\\");\\n\\t\\t\\t//字符输入流（处理流）\\n\\t\\t\\treader = new BufferedReader(in);\\n\\t\\t\\t\\n\\t\\t\\t//字符输出流（节点流）\\n\\t\\t\\tFileWriter out = new FileWriter(\\"file/file_bak.txt\\");\\n\\t\\t\\t//字符输出流（处理流）\\n\\t\\t\\twriter = new BufferedWriter(out);\\n\\t\\t\\t\\n\\t\\t\\tString line = null;//一行一行读取数据\\n\\t\\t\\twhile((line = reader.readLine()) != null)\\n\\t\\t\\t{\\n\\t\\t\\t\\tSystem.out.println(\\"读取到的一行数据：\\" + line);\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t//写入文件\\n\\t\\t\\t\\twriter.write(line);\\n\\t\\t\\t\\twriter.newLine(); //输入换行符\\n\\t\\t\\t}\\n\\t\\t\\t\\n\\t\\t\\t//强制刷新\\n\\t\\t\\twriter.flush();\\n\\t\\t\\t\\n\\t\\t} catch (FileNotFoundException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t} catch (IOException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t} finally {\\n\\t\\t\\t//注意二.....................释放资源、关闭资源\\n\\t\\t\\t//使用顺序：reader -&gt; writer\\n\\t\\t\\t//关闭顺序：writer -&gt; reader\\n\\t\\t\\ttry {\\n\\t\\t\\t\\tif(writer != null)\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\twriter.close();\\n\\t\\t\\t\\t}\\n\\t\\t\\t} catch (IOException e) {\\n\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t}\\n\\t\\t\\t\\n\\t\\t\\ttry {\\n\\t\\t\\t\\tif(reader != null)\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\treader.close();\\n\\t\\t\\t\\t}\\n\\t\\t\\t} catch (IOException e) {\\n\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

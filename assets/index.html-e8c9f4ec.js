const t=JSON.parse('{"key":"v-1cc0de64","path":"/zh/java34/","title":"Java中级测试题五-网络编程(2-2)","lang":"zh-CN","frontmatter":{"title":"Java中级测试题五-网络编程(2-2)","icon":"page","order":34,"author":"涎涎","date":"2019-06-16T22:15:13.000Z","isOriginal":true,"permalinkPattern":"java34","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java中级测试题五-网络编程(2-2)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java34/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java中级测试题五-网络编程(2-2)"}],["meta",{"property":"og:description","content":"Java中级测试题五-网络编程(2-2) 编写一服务器端程序，实现读取客户端发送过来的一组整数，表现为一组数与数之间用空格隔开的字符串。对这组整数进行排序处理后，返回相应的字符串给客户端，如果数据格式不正确，则返回错误信息，以本机作为服务器。 Server.java import java.io.BufferedReader; import java.io.InputStreamReader; import java.io.OutputStreamWriter; import java.io.PrintWriter; import java.net.ServerSocket; import java.net.Socket; import java.util.Arrays; public class Server { \\tpublic static void charServer() { \\t\\t// 创建服务端套接字 \\t\\tServerSocket server = null; \\t\\ttry { \\t\\t\\tserver = new ServerSocket(50000); \\t\\t\\t//获取客户端的套接字实例 \\t\\t\\tSocket client=server.accept(); \\t\\t\\tSystem.out.println(client); \\t\\t\\t \\t\\t\\ttry( \\t\\t\\t\\t\\tBufferedReader br=new BufferedReader(new InputStreamReader(client.getInputStream())); \\t\\t\\t\\t\\tPrintWriter pw=new PrintWriter(new OutputStreamWriter(client.getOutputStream()),true) \\t\\t\\t\\t\\t\\t\\t) \\t\\t\\t{ \\t\\t\\t\\tString clientMessage=br.readLine();//接收客户端信息 \\t\\t\\t\\t/** \\t\\t\\t\\t * 首先得判定数据格式是否正确 \\t\\t\\t\\t * \\t\\t\\t\\t * 此处需要把这个String类型转换成int数组类型 \\t\\t\\t\\t */ \\t\\t\\t\\tSystem.out.println(\\"client:\\"+clientMessage); \\t\\t\\t\\tString[] strArray = clientMessage.split(\\",\\");//将String类型的数字转换成数组 \\t\\t\\t\\tboolean bl = false; \\t\\t\\t\\ttry { \\t\\t\\t\\t\\tfor(String i:strArray) { \\t\\t\\t\\t\\t\\tInteger.parseInt(i); \\t\\t\\t\\t\\t} \\t\\t\\t\\t} catch (Exception e) { \\t\\t\\t\\t\\tbl = true; \\t\\t\\t\\t\\te.printStackTrace(); \\t\\t\\t\\t} \\t\\t\\t\\tif(!bl) { \\t\\t\\t\\t\\t//此处需要将数组转成字符串 \\t\\t\\t\\t\\tArrays.sort(strArray); \\t\\t\\t\\t\\tString sortArrayMs = \\"\\"; \\t\\t\\t\\t\\tfor(String i:strArray) { \\t\\t\\t\\t\\t\\tSystem.out.println(i); \\t\\t\\t\\t\\t\\tsortArrayMs += i; \\t\\t\\t\\t\\t} \\t\\t\\t\\t\\tpw.println(sortArrayMs); \\t\\t\\t\\t} \\t\\t\\t\\t/* pw.flush(); */ \\t\\t\\t}catch (Exception e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} catch (Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} \\tpublic static void main(String[] args) { \\t\\tcharServer(); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:15:13.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中级测试题五-网络编程(2-2)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:15:13.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java中级测试题五-网络编程(2-2) 编写一服务器端程序，实现读取客户端发送过来的一组整数，表现为一组数与数之间用空格隔开的字符串。对这组整数进行排序处理后，返回相应的字符串给客户端，如果数据格式不正确，则返回错误信息，以本机作为服务器。 Server.java import java.io.BufferedReader; import java.io.InputStreamReader; import java.io.OutputStreamWriter; import java.io.PrintWriter; import java.net.ServerSocket; import java.net.Socket; import java.util.Arrays; public class Server { \\tpublic static void charServer() { \\t\\t// 创建服务端套接字 \\t\\tServerSocket server = null; \\t\\ttry { \\t\\t\\tserver = new ServerSocket(50000); \\t\\t\\t//获取客户端的套接字实例 \\t\\t\\tSocket client=server.accept(); \\t\\t\\tSystem.out.println(client); \\t\\t\\t \\t\\t\\ttry( \\t\\t\\t\\t\\tBufferedReader br=new BufferedReader(new InputStreamReader(client.getInputStream())); \\t\\t\\t\\t\\tPrintWriter pw=new PrintWriter(new OutputStreamWriter(client.getOutputStream()),true) \\t\\t\\t\\t\\t\\t\\t) \\t\\t\\t{ \\t\\t\\t\\tString clientMessage=br.readLine();//接收客户端信息 \\t\\t\\t\\t/** \\t\\t\\t\\t * 首先得判定数据格式是否正确 \\t\\t\\t\\t * \\t\\t\\t\\t * 此处需要把这个String类型转换成int数组类型 \\t\\t\\t\\t */ \\t\\t\\t\\tSystem.out.println(\\"client:\\"+clientMessage); \\t\\t\\t\\tString[] strArray = clientMessage.split(\\",\\");//将String类型的数字转换成数组 \\t\\t\\t\\tboolean bl = false; \\t\\t\\t\\ttry { \\t\\t\\t\\t\\tfor(String i:strArray) { \\t\\t\\t\\t\\t\\tInteger.parseInt(i); \\t\\t\\t\\t\\t} \\t\\t\\t\\t} catch (Exception e) { \\t\\t\\t\\t\\tbl = true; \\t\\t\\t\\t\\te.printStackTrace(); \\t\\t\\t\\t} \\t\\t\\t\\tif(!bl) { \\t\\t\\t\\t\\t//此处需要将数组转成字符串 \\t\\t\\t\\t\\tArrays.sort(strArray); \\t\\t\\t\\t\\tString sortArrayMs = \\"\\"; \\t\\t\\t\\t\\tfor(String i:strArray) { \\t\\t\\t\\t\\t\\tSystem.out.println(i); \\t\\t\\t\\t\\t\\tsortArrayMs += i; \\t\\t\\t\\t\\t} \\t\\t\\t\\t\\tpw.println(sortArrayMs); \\t\\t\\t\\t} \\t\\t\\t\\t/* pw.flush(); */ \\t\\t\\t}catch (Exception e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} catch (Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} \\tpublic static void main(String[] args) { \\t\\tcharServer(); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":3.89,"words":1167},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/34-Java中级测试题五-网络编程(2-2).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java中级测试题五-网络编程(2-2)</h1>\\n<ol>\\n<li>编写一服务器端程序，实现读取客户端发送过来的一组整数，表现为一组数与数之间用空格隔开的字符串。对这组整数进行排序处理后，返回相应的字符串给客户端，如果数据格式不正确，则返回错误信息，以本机作为服务器。</li>\\n</ol>\\n<h4> Server.java</h4>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>import java.io.BufferedReader;\\nimport java.io.InputStreamReader;\\nimport java.io.OutputStreamWriter;\\nimport java.io.PrintWriter;\\nimport java.net.ServerSocket;\\nimport java.net.Socket;\\nimport java.util.Arrays;\\n\\npublic class Server {\\n\\n\\tpublic static void charServer() {\\n\\t\\t// 创建服务端套接字\\n\\t\\tServerSocket server = null;\\n\\t\\ttry {\\n\\t\\t\\tserver = new ServerSocket(50000);\\n\\t\\t\\t//获取客户端的套接字实例\\n\\t\\t\\tSocket client=server.accept();\\n\\t\\t\\tSystem.out.println(client);\\n\\t\\t\\t\\n\\t\\t\\ttry(\\n\\t\\t\\t\\t\\tBufferedReader br=new BufferedReader(new InputStreamReader(client.getInputStream()));\\n\\t\\t\\t\\t\\tPrintWriter pw=new PrintWriter(new OutputStreamWriter(client.getOutputStream()),true)\\n\\t\\t\\t\\t\\t\\t\\t)\\n\\t\\t\\t{\\n\\t\\t\\t\\tString clientMessage=br.readLine();//接收客户端信息\\n\\t\\t\\t\\t/**\\n\\t\\t\\t\\t * 首先得判定数据格式是否正确\\n\\t\\t\\t\\t * \\n\\t\\t\\t\\t * 此处需要把这个String类型转换成int数组类型\\n\\t\\t\\t\\t */\\n\\t\\t\\t\\tSystem.out.println(\\"client:\\"+clientMessage);\\n\\t\\t\\t\\tString[] strArray = clientMessage.split(\\",\\");//将String类型的数字转换成数组\\n\\t\\t\\t\\tboolean bl = false;\\n\\t\\t\\t\\ttry {\\n\\t\\t\\t\\t\\tfor(String i:strArray) {\\n\\t\\t\\t\\t\\t\\tInteger.parseInt(i);\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t} catch (Exception e) {\\n\\t\\t\\t\\t\\tbl = true;\\n\\t\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tif(!bl) {\\n\\t\\t\\t\\t\\t//此处需要将数组转成字符串\\n\\t\\t\\t\\t\\tArrays.sort(strArray);\\n\\t\\t\\t\\t\\tString sortArrayMs = \\"\\";\\n\\t\\t\\t\\t\\tfor(String i:strArray) {\\n\\t\\t\\t\\t\\t\\tSystem.out.println(i);\\n\\t\\t\\t\\t\\t\\tsortArrayMs += i;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\tpw.println(sortArrayMs);\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t/* pw.flush(); */\\n\\t\\t\\t}catch (Exception e) {\\n\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t}\\n\\t\\t} catch (Exception e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t}\\n\\t}\\n\\tpublic static void main(String[] args) {\\n\\t\\tcharServer();\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};

const t=JSON.parse('{"key":"v-d7c73018","path":"/zh/programBlog/ServerSideLanguage/Java/249-Java%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-%E5%AE%9E%E7%8E%B0%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%B8%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%80%E5%AF%B9%E4%B8%80%E5%BE%AA%E7%8E%AF%E8%81%8A%E5%A4%A9..html","title":"Java网络编程-实现客户端与服务器一对一循环聊天.","lang":"zh-CN","frontmatter":{"title":"Java网络编程-实现客户端与服务器一对一循环聊天.","icon":"page","order":249,"author":"涎涎","date":"2023-01-18T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java网络编程-实现客户端与服务器一对一循环聊天."}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/249-Java%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B-%E5%AE%9E%E7%8E%B0%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%B8%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%80%E5%AF%B9%E4%B8%80%E5%BE%AA%E7%8E%AF%E8%81%8A%E5%A4%A9..html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java网络编程-实现客户端与服务器一对一循环聊天."}],["meta",{"property":"og:description","content":"249-Java网络编程-实现客户端与服务器一对一循环聊天..md 示例代码 package com.tencent.chapter05; import java.io.BufferedReader; import java.io.IOException; import java.io.InputStreamReader; import java.io.OutputStreamWriter; import java.io.PrintWriter; import java.net.ServerSocket; import java.net.Socket; import java.util.Scanner; //服务器 public class B_Server { \\tpublic static void main(String[] args) { \\t\\tServerSocket ss = null; \\t\\tSocket socket = null; \\t\\ttry { \\t\\t\\t//1.启动服务器 \\t\\t\\tss = new ServerSocket(8888); \\t\\t\\tSystem.out.println(\\"服务器已启动....\\"); \\t\\t\\t \\t\\t\\t//2.等待客户端连接 \\t\\t\\tsocket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行 \\t\\t\\tSystem.out.println(\\"有新的客户端连接进来........\\" + socket.getInetAddress() + \\":\\" + socket.getPort()); \\t\\t\\t \\t\\t\\tBufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream())); //字符流 一行一行读取数据 \\t\\t\\tPrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream())); //字符流 一行一行输出数据 \\t\\t\\twhile(true) \\t\\t\\t{ \\t\\t\\t\\t//5.接收客户端发送的消息 \\t\\t\\t\\tString message = reader.readLine(); \\t\\t\\t\\tSystem.out.println(\\"客户端说：\\" + message); \\t\\t\\t\\t \\t\\t\\t\\t//判断客户端是否下线 \\t\\t\\t\\tif(\\"exit\\".equals(message)) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tSystem.out.println(\\"----------【公告：客户端已下线】-----------------\\"); \\t\\t\\t\\t} \\t\\t\\t\\t \\t\\t\\t\\t//6.给客户端发送消息 \\t\\t\\t\\tScanner scanner = new Scanner(System.in); \\t\\t\\t\\tSystem.out.println(\\"服务端，请输入：\\"); \\t\\t\\t\\tString sendMessage = scanner.nextLine(); \\t\\t\\t\\t \\t\\t\\t\\twriter.println(sendMessage); \\t\\t\\t\\twriter.flush(); \\t\\t\\t} \\t\\t\\t \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally{ \\t\\t\\t//8.关闭资源、释放资源 \\t\\t\\ttry { \\t\\t\\t\\tif(socket != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tsocket.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t\\ttry { \\t\\t\\t\\tif(ss != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tss.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} \\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java网络编程-实现客户端与服务器一对一循环聊天.\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"249-Java网络编程-实现客户端与服务器一对一循环聊天..md 示例代码 package com.tencent.chapter05; import java.io.BufferedReader; import java.io.IOException; import java.io.InputStreamReader; import java.io.OutputStreamWriter; import java.io.PrintWriter; import java.net.ServerSocket; import java.net.Socket; import java.util.Scanner; //服务器 public class B_Server { \\tpublic static void main(String[] args) { \\t\\tServerSocket ss = null; \\t\\tSocket socket = null; \\t\\ttry { \\t\\t\\t//1.启动服务器 \\t\\t\\tss = new ServerSocket(8888); \\t\\t\\tSystem.out.println(\\"服务器已启动....\\"); \\t\\t\\t \\t\\t\\t//2.等待客户端连接 \\t\\t\\tsocket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行 \\t\\t\\tSystem.out.println(\\"有新的客户端连接进来........\\" + socket.getInetAddress() + \\":\\" + socket.getPort()); \\t\\t\\t \\t\\t\\tBufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream())); //字符流 一行一行读取数据 \\t\\t\\tPrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream())); //字符流 一行一行输出数据 \\t\\t\\twhile(true) \\t\\t\\t{ \\t\\t\\t\\t//5.接收客户端发送的消息 \\t\\t\\t\\tString message = reader.readLine(); \\t\\t\\t\\tSystem.out.println(\\"客户端说：\\" + message); \\t\\t\\t\\t \\t\\t\\t\\t//判断客户端是否下线 \\t\\t\\t\\tif(\\"exit\\".equals(message)) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tSystem.out.println(\\"----------【公告：客户端已下线】-----------------\\"); \\t\\t\\t\\t} \\t\\t\\t\\t \\t\\t\\t\\t//6.给客户端发送消息 \\t\\t\\t\\tScanner scanner = new Scanner(System.in); \\t\\t\\t\\tSystem.out.println(\\"服务端，请输入：\\"); \\t\\t\\t\\tString sendMessage = scanner.nextLine(); \\t\\t\\t\\t \\t\\t\\t\\twriter.println(sendMessage); \\t\\t\\t\\twriter.flush(); \\t\\t\\t} \\t\\t\\t \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally{ \\t\\t\\t//8.关闭资源、释放资源 \\t\\t\\ttry { \\t\\t\\t\\tif(socket != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tsocket.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t\\ttry { \\t\\t\\t\\tif(ss != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tss.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} \\t} \\t }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":2.27,"words":682},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/249-Java网络编程-实现客户端与服务器一对一循环聊天..md","localizedDate":"2023年1月18日","excerpt":"<!-- more -->\\n<h1> 249-Java网络编程-实现客户端与服务器一对一循环聊天..md</h1>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter05;\\n\\nimport java.io.BufferedReader;\\nimport java.io.IOException;\\nimport java.io.InputStreamReader;\\nimport java.io.OutputStreamWriter;\\nimport java.io.PrintWriter;\\nimport java.net.ServerSocket;\\nimport java.net.Socket;\\nimport java.util.Scanner;\\n\\n//服务器\\npublic class B_Server {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tServerSocket ss = null;\\n\\t\\tSocket socket = null;\\n\\t\\ttry {\\n\\t\\t\\t//1.启动服务器\\n\\t\\t\\tss = new ServerSocket(8888);\\n\\t\\t\\tSystem.out.println(\\"服务器已启动....\\");\\n\\t\\t\\t\\n\\t\\t\\t//2.等待客户端连接\\n\\t\\t\\tsocket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行\\n\\t\\t\\tSystem.out.println(\\"有新的客户端连接进来........\\" + socket.getInetAddress() + \\":\\" + socket.getPort());\\n\\t\\t\\t\\n\\t\\t\\tBufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));   //字符流  一行一行读取数据\\n\\t\\t\\tPrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream())); //字符流  一行一行输出数据\\n\\t\\t\\twhile(true)\\n\\t\\t\\t{\\n\\t\\t\\t\\t//5.接收客户端发送的消息\\n\\t\\t\\t\\tString message = reader.readLine();\\n\\t\\t\\t\\tSystem.out.println(\\"客户端说：\\" + message);\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t//判断客户端是否下线\\n\\t\\t\\t\\tif(\\"exit\\".equals(message))\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tSystem.out.println(\\"----------【公告：客户端已下线】-----------------\\");\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t//6.给客户端发送消息\\n\\t\\t\\t\\tScanner scanner = new Scanner(System.in);\\n\\t\\t\\t\\tSystem.out.println(\\"服务端，请输入：\\");\\n\\t\\t\\t\\tString sendMessage = scanner.nextLine();\\n\\t\\t\\t\\t\\n\\t\\t\\t\\twriter.println(sendMessage);\\n\\t\\t\\t\\twriter.flush();\\n\\t\\t\\t}\\n\\t\\t\\t\\n\\t\\t} catch (IOException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t} finally{\\n\\t\\t\\t//8.关闭资源、释放资源\\n\\t\\t\\ttry {\\n\\t\\t\\t\\tif(socket != null)\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tsocket.close();\\n\\t\\t\\t\\t}\\n\\t\\t\\t} catch (IOException e) {\\n\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t}\\n\\t\\t\\ttry {\\n\\t\\t\\t\\tif(ss != null)\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tss.close();\\n\\t\\t\\t\\t}\\n\\t\\t\\t} catch (IOException e) {\\n\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\t\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
